"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

import { SimulatedFeedProvider, type FeedEvent } from "~/lib/feed";

type Phase = "enter" | "working" | "done";
type TimerMode = "pomodoro" | "free";

const POMODORO_SECS = 25 * 60;
const EMOTION_EMOJI = {
  FUNNY: "😂",
  MOVING: "😭",
  EXCITING: "⚡",
  LOVING: "❤️",
};

function WorkroomContent() {
  const searchParams = useSearchParams();
  const workId = searchParams.get("workId");

  const [phase, setPhase] = useState<Phase>("enter");
  const [isPublic, setIsPublic] = useState(false);
  const [timerMode, setTimerMode] = useState<TimerMode>("pomodoro");
  const [secsLeft, setSecsLeft] = useState(POMODORO_SECS);
  const [running, setRunning] = useState(false);
  const [feedEvents, setFeedEvents] = useState<FeedEvent[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<{ role: "ai" | "user"; text: string }[]>([
    { role: "ai", text: "작업실에 오신 것을 환영해요! 오늘도 멋진 창작 하세요 🌱" },
  ]);
  const [showNudge, setShowNudge] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const feedRef = useRef<HTMLDivElement>(null);

  // 타이머
  useEffect(() => {
    if (running && phase === "working") {
      intervalRef.current = setInterval(() => {
        setSecsLeft((s) => {
          if (s <= 1) {
            setRunning(false);
            if (timerMode === "pomodoro") {
              setPhase("done");
            }
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, phase, timerMode]);

  // 시뮬레이션 피드
  useEffect(() => {
    if (phase !== "working") return;
    const provider = new SimulatedFeedProvider(6000);
    const unsub = provider.subscribe((event) => {
      setFeedEvents((prev) => [event, ...prev].slice(0, 30));
      // 피드 스크롤
      setTimeout(() => {
        feedRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    });
    return unsub;
  }, [phase]);

  function formatTime(secs: number) {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function handleEnter() {
    setPhase("working");
    setRunning(false);
    setSecsLeft(timerMode === "pomodoro" ? POMODORO_SECS : 0);
  }

  function handleEndWork() {
    setRunning(false);
    // N회 중 1회 넛지
    if (Math.random() < 0.7) {
      setShowNudge(true);
    } else {
      setPhase("done");
    }
  }

  function handleChatSend() {
    if (!chatInput.trim()) return;
    setChatMessages((prev) => [...prev, { role: "user", text: chatInput }]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "집중 중이신 것 같아요! 필요한 게 있으면 언제든 말해주세요 😊",
        },
      ]);
    }, 600);
  }

  // ── 입장 화면 ──────────────────────────────────────────────────────────
  if (phase === "enter") {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-[var(--color-ink-100)]">
          <h2 className="mb-2 text-2xl font-bold text-[var(--color-ink-900)]">작업실 입장</h2>
          <p className="mb-6 text-sm text-[var(--color-ink-500)]">
            집중 창작을 시작할 준비가 됐나요?
          </p>

          {/* 공개/비공개 */}
          <div className="mb-5 rounded-xl border border-[var(--color-ink-100)] p-4">
            <p className="mb-3 text-sm font-medium text-[var(--color-ink-700)]">작업 모드</p>
            <div className="flex gap-3">
              {[
                { v: false, label: "🔒 비공개", desc: "나만 보는 공간" },
                { v: true, label: "🌐 공개", desc: "독자들과 함께 (선택 사항)" },
              ].map(({ v, label, desc }) => (
                <button
                  key={String(v)}
                  onClick={() => setIsPublic(v)}
                  className={`flex-1 rounded-lg border-2 p-3 text-sm transition ${
                    isPublic === v
                      ? "border-[var(--color-brand-500)] bg-[var(--color-brand-50)]"
                      : "border-transparent bg-[var(--color-ink-100)]"
                  }`}
                >
                  <div className="font-medium">{label}</div>
                  <div className="text-xs text-[var(--color-ink-500)] mt-0.5">{desc}</div>
                </button>
              ))}
            </div>
            {isPublic && (
              <p className="mt-2 text-xs text-amber-600 bg-amber-50 rounded p-2">
                공개 모드는 선택 사항입니다. 언제든 비공개로 전환할 수 있어요.
              </p>
            )}
          </div>

          {/* 타이머 모드 */}
          <div className="mb-6 rounded-xl border border-[var(--color-ink-100)] p-4">
            <p className="mb-3 text-sm font-medium text-[var(--color-ink-700)]">타이머</p>
            <div className="flex gap-3">
              {[
                { v: "pomodoro" as const, label: "🍅 포모도로", desc: "25분 집중" },
                { v: "free" as const, label: "⏱️ 자유", desc: "시간 제한 없음" },
              ].map(({ v, label, desc }) => (
                <button
                  key={v}
                  onClick={() => setTimerMode(v)}
                  className={`flex-1 rounded-lg border-2 p-3 text-sm transition ${
                    timerMode === v
                      ? "border-[var(--color-brand-500)] bg-[var(--color-brand-50)]"
                      : "border-transparent bg-[var(--color-ink-100)]"
                  }`}
                >
                  <div className="font-medium">{label}</div>
                  <div className="text-xs text-[var(--color-ink-500)] mt-0.5">{desc}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleEnter}
            className="w-full rounded-lg bg-[var(--color-brand-500)] py-3 font-semibold text-white hover:bg-[var(--color-brand-600)]"
          >
            작업 시작 →
          </button>
        </div>
      </div>
    );
  }

  // ── 종료 넛지 ─────────────────────────────────────────────────────────
  if (showNudge) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-[var(--color-ink-100)] text-center">
          <p className="text-5xl mb-4">🌸</p>
          <h2 className="mb-2 text-xl font-bold text-[var(--color-ink-900)]">
            수고하셨어요!
          </h2>
          <p className="mb-6 text-sm text-[var(--color-ink-500)]">
            오늘 작업한 내용을 에피소드로 게시해 보시겠어요?
            독자들이 기다리고 있을지도 몰라요 💐
          </p>
          <div className="flex flex-col gap-3">
            <button
              className="rounded-lg bg-[var(--color-brand-500)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)]"
              onClick={() => {
                setShowNudge(false);
                setPhase("done");
              }}
            >
              에피소드 게시하러 가기
            </button>
            <button
              className="rounded-lg border border-[var(--color-ink-100)] py-2.5 text-sm text-[var(--color-ink-500)] hover:bg-[var(--color-ink-100)]"
              onClick={() => {
                setShowNudge(false);
                setPhase("done");
              }}
            >
              다음에 게시할게요
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── 완료 화면 ─────────────────────────────────────────────────────────
  if (phase === "done") {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-[var(--color-ink-100)] text-center">
          <p className="text-5xl mb-4">🎉</p>
          <h2 className="mb-2 text-xl font-bold text-[var(--color-ink-900)]">
            작업 완료!
          </h2>
          <p className="text-sm text-[var(--color-ink-500)] mb-6">
            오늘도 창작에 집중하셨군요. 정말 대단해요!
          </p>
          <button
            onClick={() => {
              setPhase("enter");
              setFeedEvents([]);
              setChatMessages([{ role: "ai", text: "다시 작업실에 오신 것을 환영해요! 🌱" }]);
              setSecsLeft(POMODORO_SECS);
            }}
            className="rounded-lg bg-[var(--color-brand-500)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)]"
          >
            다시 시작
          </button>
        </div>
      </div>
    );
  }

  // ── 작업 화면 ─────────────────────────────────────────────────────────
  return (
    <div className="flex h-[calc(100vh-5rem)] gap-4">
      {/* 왼쪽: 타이머 + 작업 공간 */}
      <div className="flex flex-1 flex-col gap-4">
        {/* 타이머 */}
        <div className="rounded-xl bg-white border border-[var(--color-ink-100)] p-6 text-center shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-xs font-medium text-[var(--color-ink-300)]">
              {isPublic ? "🌐 공개" : "🔒 비공개"} · {timerMode === "pomodoro" ? "🍅 포모도로" : "⏱️ 자유"}
            </span>
          </div>

          {timerMode === "pomodoro" ? (
            <>
              <div className="text-5xl font-bold tabular-nums text-[var(--color-ink-900)] my-3">
                {formatTime(secsLeft)}
              </div>
              {/* 진행 바 */}
              <div className="mx-auto mb-4 h-1.5 w-48 rounded-full bg-[var(--color-ink-100)]">
                <div
                  className="h-full rounded-full bg-[var(--color-brand-500)] transition-all"
                  style={{ width: `${((POMODORO_SECS - secsLeft) / POMODORO_SECS) * 100}%` }}
                />
              </div>
            </>
          ) : (
            <div className="text-3xl font-bold tabular-nums text-[var(--color-ink-900)] my-4">
              자유 시간
            </div>
          )}

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setRunning((r) => !r)}
              className="rounded-lg bg-[var(--color-brand-500)] px-5 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)]"
            >
              {running ? "일시 정지" : "시작"}
            </button>
            {timerMode === "pomodoro" && (
              <button
                onClick={() => setSecsLeft(POMODORO_SECS)}
                className="rounded-lg border border-[var(--color-ink-100)] px-4 py-2 text-sm text-[var(--color-ink-500)] hover:bg-[var(--color-ink-100)]"
              >
                초기화
              </button>
            )}
            <button
              onClick={handleEndWork}
              className="rounded-lg border border-[var(--color-ink-100)] px-4 py-2 text-sm text-[var(--color-ink-500)] hover:bg-[var(--color-ink-100)]"
            >
              작업 종료
            </button>
          </div>
        </div>

        {/* 작업 노트 영역 */}
        <div className="flex-1 rounded-xl bg-white border border-[var(--color-ink-100)] p-4 shadow-sm">
          <p className="mb-2 text-xs font-medium text-[var(--color-ink-300)]">작업 메모</p>
          <textarea
            className="h-full w-full resize-none text-sm text-[var(--color-ink-700)] outline-none placeholder:text-[var(--color-ink-300)]"
            placeholder="오늘 작업 내용, 아이디어, 메모를 자유롭게 적어보세요..."
          />
        </div>
      </div>

      {/* 오른쪽: 응원 피드 + AI 파트너 */}
      <div className="flex w-72 flex-col gap-4">
        {/* 응원 피드 */}
        <div className="flex h-64 flex-col rounded-xl bg-white border border-[var(--color-ink-100)] shadow-sm overflow-hidden">
          <div className="border-b border-[var(--color-ink-100)] px-4 py-2.5 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-ink-700)]">💌 응원 피드</p>
            <span className="text-xs text-[var(--color-ink-300)]">시뮬레이션</span>
          </div>
          <div ref={feedRef} className="flex-1 overflow-y-auto p-3 space-y-2">
            {feedEvents.length === 0 && (
              <p className="text-center text-xs text-[var(--color-ink-300)] pt-4">
                작업을 시작하면 응원이 도착해요
              </p>
            )}
            {feedEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg bg-[var(--color-brand-50)] px-3 py-2 text-xs"
              >
                <span className="font-medium text-[var(--color-ink-700)]">{event.readerName}</span>
                {event.emotionTag && (
                  <span className="ml-1">{EMOTION_EMOJI[event.emotionTag]}</span>
                )}
                {event.message && (
                  <p className="mt-0.5 text-[var(--color-ink-500)]">{event.message}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI 파트너 */}
        <div className="flex flex-1 flex-col rounded-xl bg-white border border-[var(--color-ink-100)] shadow-sm overflow-hidden">
          <div className="border-b border-[var(--color-ink-100)] px-4 py-2.5 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-ink-700)]">🐑 하나 (창작 파트너)</p>
            <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-700">
              AI 제안
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[90%] rounded-xl px-3 py-2 text-xs ${
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
          <div className="border-t border-[var(--color-ink-100)] p-2 flex gap-1.5">
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && chatInput.trim()) {
                  e.preventDefault();
                  handleChatSend();
                }
              }}
              className="flex-1 rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-2 py-1.5 text-xs outline-none focus:border-[var(--color-brand-500)]"
              placeholder="고민 이야기..."
            />
            <button
              onClick={handleChatSend}
              className="rounded-lg bg-[var(--color-brand-500)] px-2.5 py-1.5 text-xs text-white"
            >
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkroomPage() {
  return (
    <Suspense fallback={<div className="flex h-[calc(100vh-5rem)] items-center justify-center text-sm text-[var(--color-ink-300)]">로딩 중...</div>}>
      <WorkroomContent />
    </Suspense>
  );
}
