"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

type EmotionTag = "FUNNY" | "MOVING" | "EXCITING" | "LOVING";

const FLOWER_STAGES = {
  SEED: {
    emoji: "🌰",
    label: "씨앗",
    description: "창작의 씨앗이 심어졌어요",
    waterNeeded: 5,
  },
  SPROUT: {
    emoji: "🌱",
    label: "싹",
    description: "싹이 트기 시작했어요!",
    waterNeeded: 20,
  },
  BUD: {
    emoji: "🌿",
    label: "꽃봉오리",
    description: "곧 꽃이 피어날 거예요",
    waterNeeded: 50,
  },
  BLOOM: {
    emoji: "🌸",
    label: "개화",
    description: "아름다운 꽃이 피었어요!",
    waterNeeded: 100,
  },
  WREATH: {
    emoji: "💐",
    label: "리스",
    description: "완결! 멋진 꽃다발이 완성됐어요",
    waterNeeded: Infinity,
  },
};

const EMOTION_OPTIONS: { value: EmotionTag; emoji: string; label: string }[] = [
  { value: "FUNNY", emoji: "😂", label: "웃겨요" },
  { value: "MOVING", emoji: "😭", label: "감동이에요" },
  { value: "EXCITING", emoji: "⚡", label: "두근두근" },
  { value: "LOVING", emoji: "❤️", label: "좋아요" },
];

const FLOWER_MESSAGES = {
  SEED: "첫 에피소드를 기다리고 있어요. 씨앗을 틔워주세요!",
  SPROUT: "싹이 자라고 있어요. 독자들의 응원이 힘이 됩니다!",
  BUD: "꽃봉오리가 생겼어요! 조금만 더 힘내세요.",
  BLOOM: "꽃이 활짝 피었어요! 창작의 결실을 맺고 있어요.",
  WREATH: "완결! 아름다운 작품을 만들어 주셔서 감사해요 💐",
};

export default function GardenPage() {
  const [selectedWork, setSelectedWork] = useState<string | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null);
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionTag | null>(null);
  const [comment, setComment] = useState("");
  const [wateringDone, setWateringDone] = useState(false);
  const [optimisticWater, setOptimisticWater] = useState(false);

  const utils = api.useUtils();
  const { data: works } = api.work.list.useQuery();
  const { data: work } = api.work.byId.useQuery(
    { workId: selectedWork! },
    { enabled: !!selectedWork },
  );

  const water = api.watering.water.useMutation({
    onMutate: () => setOptimisticWater(true),
    onSuccess: () => {
      void utils.work.byId.invalidate({ workId: selectedWork! });
      setWateringDone(true);
    },
    onError: () => setOptimisticWater(false),
  });

  const stage = work?.flowerStage ?? "SEED";
  const stageInfo = FLOWER_STAGES[stage];
  const waterProgress = work
    ? Math.min((work.waterCount / stageInfo.waterNeeded) * 100, 100)
    : 0;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-ink-900)]">화단 🌸</h1>
        <p className="mt-1 text-sm text-[var(--color-ink-500)]">
          에피소드를 읽고 물을 주면 작가의 화단에 꽃이 피어납니다
        </p>
      </div>

      {/* 작품 선택 */}
      {!selectedWork && (
        <div>
          {!works || works.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--color-ink-100)] py-16 text-center">
              <p className="text-4xl mb-3">🌰</p>
              <p className="text-[var(--color-ink-500)]">아직 등록된 작품이 없어요</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((w) => {
                const s = FLOWER_STAGES[w.flowerStage];
                return (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWork(w.id)}
                    className="rounded-xl border border-[var(--color-ink-100)] bg-white p-5 text-left shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-[var(--color-ink-900)]">{w.title}</h3>
                      <span className="text-2xl">{s.emoji}</span>
                    </div>
                    <div className="text-sm text-[var(--color-ink-500)] mb-3">
                      {s.label} · 💧 {w.waterCount}
                    </div>
                    {/* 물 게이지 */}
                    <div className="h-1.5 rounded-full bg-[var(--color-ink-100)]">
                      <div
                        className="h-full rounded-full bg-[var(--color-brand-400)] transition-all"
                        style={{
                          width: `${Math.min((w.waterCount / (FLOWER_STAGES[w.flowerStage].waterNeeded || 100)) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 화단 상세 */}
      {selectedWork && work && (
        <div className="max-w-2xl">
          <button
            onClick={() => {
              setSelectedWork(null);
              setSelectedEpisode(null);
              setWateringDone(false);
              setOptimisticWater(false);
            }}
            className="mb-6 text-sm text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)] flex items-center gap-1"
          >
            ← 작품 목록
          </button>

          {/* 꽃 상태 카드 */}
          <div className="rounded-2xl bg-white border border-[var(--color-ink-100)] p-8 mb-6 text-center shadow-sm">
            <div
              className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full text-5xl transition-all"
              style={{
                backgroundColor: `var(--color-flower-${stage.toLowerCase()})22`,
              }}
            >
              {optimisticWater ? "💧" : stageInfo.emoji}
            </div>
            <h2 className="text-xl font-bold text-[var(--color-ink-900)] mb-1">{work.title}</h2>
            <p className="text-sm font-medium" style={{ color: `var(--color-flower-${stage.toLowerCase()})` }}>
              {stageInfo.label}
            </p>
            <p className="mt-2 text-sm text-[var(--color-ink-500)]">
              {FLOWER_MESSAGES[stage]}
            </p>

            {/* 물 게이지 */}
            <div className="mx-auto mt-4 max-w-xs">
              <div className="flex items-center justify-between text-xs text-[var(--color-ink-300)] mb-1">
                <span>💧 {work.waterCount}</span>
                <span>{stageInfo.waterNeeded === Infinity ? "완결됨" : `목표: ${stageInfo.waterNeeded}`}</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--color-ink-100)]">
                <div
                  className="h-full rounded-full bg-[var(--color-brand-400)] transition-all duration-500"
                  style={{ width: `${waterProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* 에피소드 목록 & 물주기 */}
          {!wateringDone ? (
            <div className="rounded-2xl bg-white border border-[var(--color-ink-100)] p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-[var(--color-ink-900)]">
                에피소드 선택
              </h3>

              {work.episodes.length === 0 ? (
                <p className="text-sm text-[var(--color-ink-300)]">아직 에피소드가 없어요</p>
              ) : (
                <div className="space-y-2 mb-5">
                  {work.episodes.map((ep) => (
                    <button
                      key={ep.id}
                      onClick={() => setSelectedEpisode(ep.id)}
                      className={`w-full rounded-lg border-2 p-3 text-left text-sm transition ${
                        selectedEpisode === ep.id
                          ? "border-[var(--color-brand-500)] bg-[var(--color-brand-50)]"
                          : "border-transparent bg-[var(--color-ink-100)] hover:border-[var(--color-brand-200)]"
                      }`}
                    >
                      <span className="text-[var(--color-ink-300)] mr-2">
                        {ep.episodeNum}화
                      </span>
                      {ep.title}
                    </button>
                  ))}
                </div>
              )}

              {selectedEpisode && (
                <>
                  {/* 감정 태그 */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-medium text-[var(--color-ink-700)]">
                      어떻게 느끼셨나요? (선택)
                    </p>
                    <div className="flex gap-2">
                      {EMOTION_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() =>
                            setSelectedEmotion((prev) =>
                              prev === opt.value ? null : opt.value,
                            )
                          }
                          className={`flex flex-col items-center rounded-xl border-2 px-4 py-2.5 text-sm transition ${
                            selectedEmotion === opt.value
                              ? "border-[var(--color-brand-500)] bg-[var(--color-brand-50)]"
                              : "border-transparent bg-[var(--color-ink-100)] hover:border-[var(--color-brand-200)]"
                          }`}
                        >
                          <span className="text-xl">{opt.emoji}</span>
                          <span className="mt-0.5 text-xs text-[var(--color-ink-500)]">
                            {opt.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 응원 댓글 */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-medium text-[var(--color-ink-700)]">
                      응원 댓글 (선택)
                    </p>
                    <input
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      maxLength={200}
                      className="w-full rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none focus:border-[var(--color-brand-500)]"
                      placeholder="작가에게 응원 메시지를 전해보세요"
                    />
                  </div>

                  {/* 물 주기 버튼 */}
                  <button
                    onClick={() =>
                      water.mutate({
                        workId: selectedWork,
                        episodeId: selectedEpisode,
                        emotionTag: selectedEmotion ?? undefined,
                        comment: comment || undefined,
                      })
                    }
                    disabled={water.isPending}
                    className="w-full rounded-lg bg-[var(--color-brand-500)] py-3 font-semibold text-white hover:bg-[var(--color-brand-600)] disabled:opacity-50 text-sm"
                  >
                    {water.isPending ? "💧 물 주는 중..." : "💧 물 주기"}
                  </button>
                </>
              )}
            </div>
          ) : (
            /* 물주기 완료 */
            <div className="rounded-2xl bg-white border border-[var(--color-ink-100)] p-8 text-center shadow-sm">
              <p className="text-5xl mb-4">💧</p>
              <h3 className="text-lg font-bold text-[var(--color-ink-900)] mb-2">
                물 주기 완료!
              </h3>
              <p className="text-sm text-[var(--color-ink-500)] mb-6">
                작가에게 소중한 응원이 전달됐어요 🌸
              </p>
              <button
                onClick={() => {
                  setWateringDone(false);
                  setOptimisticWater(false);
                  setSelectedEpisode(null);
                  setSelectedEmotion(null);
                  setComment("");
                }}
                className="rounded-lg border border-[var(--color-ink-100)] px-6 py-2 text-sm text-[var(--color-ink-500)] hover:bg-[var(--color-ink-100)]"
              >
                다른 에피소드에 물 주기
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
