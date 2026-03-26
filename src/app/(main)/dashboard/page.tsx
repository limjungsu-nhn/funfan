"use client";

import Link from "next/link";
import { useState } from "react";

import { api } from "~/trpc/react";

const FLOWER_STAGE_INFO = {
  SEED: { emoji: "🌰", label: "씨앗", color: "var(--color-flower-seed)" },
  SPROUT: { emoji: "🌱", label: "싹", color: "var(--color-flower-sprout)" },
  BUD: { emoji: "🌿", label: "꽃봉오리", color: "var(--color-flower-bud)" },
  BLOOM: { emoji: "🌸", label: "개화", color: "var(--color-flower-bloom)" },
  WREATH: { emoji: "💐", label: "리스", color: "var(--color-flower-wreath)" },
};

export default function DashboardPage() {
  const [showNewWork, setShowNewWork] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const utils = api.useUtils();
  const { data: works, isLoading } = api.work.list.useQuery();

  const createWork = api.work.create.useMutation({
    onSuccess: () => {
      void utils.work.list.invalidate();
      setShowNewWork(false);
      setNewTitle("");
      setNewDesc("");
    },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-ink-900)]">내 작품</h1>
          <p className="mt-1 text-sm text-[var(--color-ink-500)]">
            작품을 등록하고 창작 파트너와 함께 성장시켜보세요
          </p>
        </div>
        <button
          onClick={() => setShowNewWork(true)}
          className="rounded-lg bg-[var(--color-brand-500)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)]"
        >
          + 작품 추가
        </button>
      </div>

      {/* 새 작품 폼 */}
      {showNewWork && (
        <div className="mb-6 rounded-xl border border-[var(--color-brand-200)] bg-[var(--color-brand-50)] p-5">
          <h3 className="mb-4 font-semibold text-[var(--color-ink-900)]">새 작품 등록</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createWork.mutate({ title: newTitle, description: newDesc });
            }}
            className="space-y-3"
          >
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              maxLength={100}
              className="w-full rounded-lg border border-[var(--color-ink-100)] bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-brand-500)]"
              placeholder="작품 제목"
            />
            <textarea
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              maxLength={500}
              rows={2}
              className="w-full rounded-lg border border-[var(--color-ink-100)] bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-brand-500)] resize-none"
              placeholder="작품 소개 (선택)"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={createWork.isPending}
                className="rounded-lg bg-[var(--color-brand-500)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)] disabled:opacity-50"
              >
                {createWork.isPending ? "등록 중..." : "등록"}
              </button>
              <button
                type="button"
                onClick={() => setShowNewWork(false)}
                className="rounded-lg border border-[var(--color-ink-100)] px-4 py-2 text-sm text-[var(--color-ink-500)] hover:bg-[var(--color-ink-100)]"
              >
                취소
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 작품 목록 */}
      {isLoading && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 animate-pulse rounded-xl bg-[var(--color-ink-100)]" />
          ))}
        </div>
      )}

      {works && works.length === 0 && (
        <div className="rounded-xl border border-dashed border-[var(--color-ink-100)] py-16 text-center">
          <p className="text-4xl mb-3">🌰</p>
          <p className="font-medium text-[var(--color-ink-700)]">아직 등록된 작품이 없어요</p>
          <p className="mt-1 text-sm text-[var(--color-ink-500)]">
            첫 작품을 등록하면 창작의 씨앗이 심어집니다
          </p>
        </div>
      )}

      {works && works.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => {
            const stage = FLOWER_STAGE_INFO[work.flowerStage];
            return (
              <div
                key={work.id}
                className="group rounded-xl border border-[var(--color-ink-100)] bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="font-semibold text-[var(--color-ink-900)] line-clamp-2">
                    {work.title}
                  </h3>
                  <span className="ml-2 shrink-0 text-2xl">{stage.emoji}</span>
                </div>

                {work.description && (
                  <p className="mb-3 text-sm text-[var(--color-ink-500)] line-clamp-2">
                    {work.description}
                  </p>
                )}

                <div className="mb-4 flex items-center gap-3 text-xs text-[var(--color-ink-300)]">
                  <span
                    className="rounded-full px-2 py-0.5 font-medium"
                    style={{
                      backgroundColor: stage.color + "33",
                      color: stage.color,
                    }}
                  >
                    {stage.label}
                  </span>
                  <span>에피소드 {work.episodes.length}화</span>
                  <span>💧 {work._count.waterings}</span>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/studio?workId=${work.id}`}
                    className="flex-1 rounded-lg bg-[var(--color-brand-50)] px-3 py-1.5 text-center text-xs font-medium text-[var(--color-brand-700)] hover:bg-[var(--color-brand-100)]"
                  >
                    AI 파트너
                  </Link>
                  <Link
                    href={`/workroom?workId=${work.id}`}
                    className="flex-1 rounded-lg bg-[var(--color-ink-100)] px-3 py-1.5 text-center text-xs font-medium text-[var(--color-ink-700)] hover:bg-[var(--color-ink-200)]"
                  >
                    작업실
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
