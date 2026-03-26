"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

type Step = "profile" | "persona" | "chat";

const PERSONAS = [
  {
    id: "TONTON" as const,
    name: "톤톤",
    emoji: "🐼",
    title: "베테랑 만화가",
    desc: "경험 많은 시선으로 작품의 강점과 성장 가능성을 정확히 짚어줍니다.",
    color: "var(--color-tonton)",
  },
  {
    id: "HANA" as const,
    name: "하나",
    emoji: "🐑",
    title: "장르 전문가",
    desc: "장르 문법과 독자 심리를 꿰뚫어, 구체적이고 실용적인 조언을 드립니다.",
    color: "var(--color-hana)",
  },
  {
    id: "FUKU" as const,
    name: "후쿠",
    emoji: "🦉",
    title: "독자 대표",
    desc: "열렬한 독자의 눈으로 감정 반응과 몰입도를 솔직하게 전달합니다.",
    color: "var(--color-fuku)",
  },
];

const GENRES = [
  { value: "FANTASY", label: "판타지" },
  { value: "ROMANCE", label: "로맨스" },
  { value: "ACTION", label: "액션" },
  { value: "DRAMA", label: "드라마" },
  { value: "COMEDY", label: "코미디" },
  { value: "HORROR", label: "호러" },
  { value: "SLICE_OF_LIFE", label: "일상" },
  { value: "OTHER", label: "기타" },
] as const;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("profile");
  const [selectedPersona, setSelectedPersona] = useState<"TONTON" | "HANA" | "FUKU">("HANA");
  const [nickname, setNickname] = useState("");
  const [genre, setGenre] = useState<typeof GENRES[number]["value"]>("FANTASY");
  const [creativeStyle, setCreativeStyle] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{ role: "ai" | "user"; text: string }[]>([]);
  const [chatStarted, setChatStarted] = useState(false);

  const saveProfile = api.user.saveProfile.useMutation({
    onSuccess: () => setStep("persona"),
  });

  const selectPersona = api.user.selectPersona.useMutation({
    onSuccess: () => {
      setStep("chat");
      // AI 첫 메시지
      const persona = PERSONAS.find((p) => p.id === selectedPersona)!;
      setChatMessages([
        {
          role: "ai",
          text: `안녕하세요, ${nickname}님! 저는 ${persona.name}이에요 ${persona.emoji}\n오늘 창작과 관련해 어떤 고민이 있으신가요?`,
        },
      ]);
    },
  });

  const completeOnboarding = api.user.completeOnboarding.useMutation({
    onSuccess: () => router.push("/dashboard"),
  });

  return (
    <div className="min-h-screen bg-[var(--color-surface)] py-12">
      <div className="mx-auto max-w-2xl px-4">
        {/* 진행 바 */}
        <div className="mb-10 flex items-center justify-center gap-3">
          {(["profile", "persona", "chat"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all ${
                  step === s
                    ? "bg-[var(--color-brand-500)] text-white scale-110"
                    : i < ["profile", "persona", "chat"].indexOf(step)
                    ? "bg-[var(--color-brand-200)] text-[var(--color-brand-700)]"
                    : "bg-[var(--color-ink-100)] text-[var(--color-ink-500)]"
                }`}
              >
                {i + 1}
              </div>
              {i < 2 && <div className="h-px w-8 bg-[var(--color-ink-100)]" />}
            </div>
          ))}
        </div>

        {/* Step 1: 프로필 카드 */}
        {step === "profile" && (
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-[var(--color-ink-900)]">
              프로필 카드 작성
            </h2>
            <p className="mb-6 text-sm text-[var(--color-ink-500)]">
              당신을 소개해 주세요. 창작 파트너가 더 잘 도와드릴 수 있어요.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveProfile.mutate({ nickname, genre, creativeStyle });
              }}
              className="space-y-5"
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--color-ink-700)]">
                  닉네임 *
                </label>
                <input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  required
                  maxLength={20}
                  className="w-full rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-200)]"
                  placeholder="예: 마이코"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--color-ink-700)]">
                  주력 장르 *
                </label>
                <div className="flex flex-wrap gap-2">
                  {GENRES.map((g) => (
                    <button
                      key={g.value}
                      type="button"
                      onClick={() => setGenre(g.value)}
                      className={`rounded-full px-3 py-1 text-sm transition ${
                        genre === g.value
                          ? "bg-[var(--color-brand-500)] text-white"
                          : "bg-[var(--color-ink-100)] text-[var(--color-ink-700)] hover:bg-[var(--color-brand-100)]"
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--color-ink-700)]">
                  창작 스타일 *
                </label>
                <textarea
                  value={creativeStyle}
                  onChange={(e) => setCreativeStyle(e.target.value)}
                  required
                  maxLength={200}
                  rows={3}
                  className="w-full rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-200)] resize-none"
                  placeholder="예: 감정선을 중심으로 캐릭터 심리를 세밀하게 묘사하는 걸 좋아해요"
                />
                <p className="mt-1 text-right text-xs text-[var(--color-ink-300)]">
                  {creativeStyle.length}/200
                </p>
              </div>

              <button
                type="submit"
                disabled={saveProfile.isPending}
                className="w-full rounded-lg bg-[var(--color-brand-500)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)] disabled:opacity-50"
              >
                {saveProfile.isPending ? "저장 중..." : "다음 →"}
              </button>
            </form>
          </div>
        )}

        {/* Step 2: 페르소나 선택 */}
        {step === "persona" && (
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-[var(--color-ink-900)]">
              창작 파트너 선택
            </h2>
            <p className="mb-6 text-sm text-[var(--color-ink-500)]">
              함께할 창작 파트너를 골라주세요. 나중에 언제든 변경할 수 있어요.
            </p>

            <div className="mb-6 grid gap-4">
              {PERSONAS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPersona(p.id)}
                  className={`flex items-start gap-4 rounded-xl border-2 p-4 text-left transition ${
                    selectedPersona === p.id
                      ? "border-[var(--color-brand-500)] bg-[var(--color-brand-50)]"
                      : "border-transparent bg-[var(--color-ink-100)] hover:border-[var(--color-brand-200)]"
                  }`}
                >
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <p className="font-semibold text-[var(--color-ink-900)]">
                      {p.name}
                      <span className="ml-2 text-sm font-normal text-[var(--color-ink-500)]">
                        {p.title}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-ink-500)]">{p.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => selectPersona.mutate({ persona: selectedPersona })}
              disabled={selectPersona.isPending}
              className="w-full rounded-lg bg-[var(--color-brand-500)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)] disabled:opacity-50"
            >
              {selectPersona.isPending ? "저장 중..." : `${PERSONAS.find((p) => p.id === selectedPersona)?.name}와 시작하기 →`}
            </button>
          </div>
        )}

        {/* Step 3: 첫 대화 */}
        {step === "chat" && (
          <div className="rounded-2xl bg-white shadow-sm overflow-hidden">
            <div className="border-b border-[var(--color-ink-100)] px-6 py-4">
              <h2 className="text-lg font-semibold text-[var(--color-ink-900)]">
                {PERSONAS.find((p) => p.id === selectedPersona)?.emoji}{" "}
                {PERSONAS.find((p) => p.id === selectedPersona)?.name}와 첫 대화
              </h2>
              <p className="text-xs text-[var(--color-ink-300)] mt-0.5">AI 제안 · 대화 내용은 참고용입니다</p>
            </div>

            {/* 채팅 영역 */}
            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-[var(--color-brand-500)] text-white"
                        : "bg-[var(--color-ink-100)] text-[var(--color-ink-900)]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* 입력 */}
            <div className="border-t border-[var(--color-ink-100)] p-4 flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && chatInput.trim()) {
                    e.preventDefault();
                    setChatMessages((prev) => [
                      ...prev,
                      { role: "user", text: chatInput },
                    ]);
                    setChatInput("");
                    setChatStarted(true);
                    // 온보딩에서는 실제 API 호출 없이 간단 응답
                    setTimeout(() => {
                      setChatMessages((prev) => [
                        ...prev,
                        {
                          role: "ai",
                          text: "좋은 고민이에요! 창작 활동을 시작해 볼까요? 대시보드에서 첫 작품을 등록하면 저와 본격적으로 대화할 수 있어요 🌱",
                        },
                      ]);
                    }, 800);
                  }
                }}
                className="flex-1 rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none focus:border-[var(--color-brand-500)]"
                placeholder="창작 고민을 이야기해 보세요..."
              />
            </div>

            <div className="px-4 pb-4">
              <button
                onClick={() => completeOnboarding.mutate()}
                disabled={completeOnboarding.isPending}
                className="w-full rounded-lg bg-[var(--color-brand-500)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)] disabled:opacity-50"
              >
                {completeOnboarding.isPending ? "이동 중..." : "대시보드로 이동 →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
