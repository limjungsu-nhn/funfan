"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

import { api } from "~/trpc/react";

type Message = { role: "user" | "assistant"; content: string };
type Mode = "feedback" | "support";

const MODE_LABELS = {
  feedback: { label: "작품 피드백", emoji: "✏️" },
  support: { label: "정신 지원", emoji: "💙" },
};

function StudioContent() {
  const searchParams = useSearchParams();
  const workId = searchParams.get("workId") ?? undefined;

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("feedback");
  const [streaming, setStreaming] = useState(false);
  const [aiLabel] = useState("AI 제안");
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data: user } = api.user.me.useQuery();
  const { data: work } = api.work.byId.useQuery(
    { workId: workId! },
    { enabled: !!workId },
  );

  const PERSONA_INFO = {
    TONTON: { emoji: "🐼", name: "톤톤" },
    HANA: { emoji: "🐑", name: "하나" },
    FUKU: { emoji: "🦉", name: "후쿠" },
  };
  const persona = user?.persona ? PERSONA_INFO[user.persona] : PERSONA_INFO.HANA;

  // 첫 메시지
  useEffect(() => {
    if (user && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: `안녕하세요, ${user.nickname ?? "작가"}님! 저는 ${persona.name}이에요 ${persona.emoji}\n오늘 어떤 창작 고민이 있으신가요?`,
        },
      ]);
    }
  }, [user]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || streaming) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);

    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, assistantMessage]);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          workId,
          mode,
        }),
      });

      if (!res.ok) throw new Error("API 오류");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data) as {
              type: string;
              delta?: { type: string; text?: string };
            };
            if (
              parsed.type === "content_block_delta" &&
              parsed.delta?.type === "text_delta" &&
              parsed.delta.text
            ) {
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (last?.role === "assistant") {
                  return [
                    ...updated.slice(0, -1),
                    { ...last, content: last.content + parsed.delta!.text! },
                  ];
                }
                return updated;
              });
            }
          } catch {}
        }
      }
    } catch (e) {
      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last?.role === "assistant" && last.content === "") {
          return [
            ...updated.slice(0, -1),
            { role: "assistant", content: "죄송해요, 일시적인 오류가 발생했어요. 다시 시도해 주세요." },
          ];
        }
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] gap-6">
      {/* 사이드바: 작품 컨텍스트 */}
      <aside className="w-64 shrink-0 overflow-y-auto">
        <div className="rounded-xl border border-[var(--color-ink-100)] bg-white p-4">
          <h3 className="mb-3 font-semibold text-sm text-[var(--color-ink-900)]">
            작품 컨텍스트
          </h3>
          {work ? (
            <div>
              <p className="text-sm font-medium text-[var(--color-ink-700)]">{work.title}</p>
              {work.description && (
                <p className="mt-1 text-xs text-[var(--color-ink-500)]">{work.description}</p>
              )}
              <div className="mt-3 text-xs text-[var(--color-ink-300)]">
                에피소드 {work.episodes.length}화
              </div>
            </div>
          ) : (
            <p className="text-xs text-[var(--color-ink-300)]">
              대시보드에서 작품을 선택하면 컨텍스트가 자동으로 반영됩니다
            </p>
          )}
        </div>

        {/* 모드 선택 */}
        <div className="mt-4 rounded-xl border border-[var(--color-ink-100)] bg-white p-4">
          <h3 className="mb-3 font-semibold text-sm text-[var(--color-ink-900)]">대화 모드</h3>
          {(["feedback", "support"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`mb-2 w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                mode === m
                  ? "bg-[var(--color-brand-100)] text-[var(--color-brand-700)] font-medium"
                  : "text-[var(--color-ink-500)] hover:bg-[var(--color-ink-100)]"
              }`}
            >
              {MODE_LABELS[m].emoji} {MODE_LABELS[m].label}
            </button>
          ))}
        </div>
      </aside>

      {/* 채팅 영역 */}
      <div className="flex flex-1 flex-col rounded-xl border border-[var(--color-ink-100)] bg-white overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between border-b border-[var(--color-ink-100)] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{persona.emoji}</span>
            <div>
              <p className="font-semibold text-sm text-[var(--color-ink-900)]">{persona.name}</p>
              <p className="text-xs text-[var(--color-ink-300)]">
                {MODE_LABELS[mode].label} 모드
              </p>
            </div>
          </div>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
            {aiLabel}
          </span>
        </div>

        {/* 메시지 목록 */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <span className="mr-2 mt-1 shrink-0 text-lg">{persona.emoji}</span>
              )}
              <div
                className={`max-w-lg rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[var(--color-brand-500)] text-white"
                    : "bg-[var(--color-ink-100)] text-[var(--color-ink-900)]"
                }`}
              >
                {msg.content}
                {msg.role === "assistant" && streaming && i === messages.length - 1 && (
                  <span className="ml-1 inline-block animate-pulse">▊</span>
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* 입력창 */}
        <div className="border-t border-[var(--color-ink-100)] p-4">
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void sendMessage();
                }
              }}
              disabled={streaming}
              rows={2}
              className="flex-1 resize-none rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none focus:border-[var(--color-brand-500)] disabled:opacity-50"
              placeholder="창작 고민을 이야기해 보세요... (Enter로 전송)"
            />
            <button
              onClick={sendMessage}
              disabled={streaming || !input.trim()}
              className="self-end rounded-lg bg-[var(--color-brand-500)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)] disabled:opacity-50"
            >
              {streaming ? "..." : "전송"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="flex h-[calc(100vh-4rem)] items-center justify-center text-sm text-[var(--color-ink-300)]">로딩 중...</div>}>
      <StudioContent />
    </Suspense>
  );
}
