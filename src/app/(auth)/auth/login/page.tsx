"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <div className="rounded-2xl border border-[var(--color-ink-100)] bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-[var(--color-ink-900)]">
        로그인
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--color-ink-700)]">
            이메일
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none transition focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-200)]"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--color-ink-700)]">
            비밀번호
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none transition focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-200)]"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[var(--color-brand-500)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-600)] disabled:opacity-50"
        >
          {loading ? "로그인 중..." : "로그인"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-[var(--color-ink-500)]">
        계정이 없으신가요?{" "}
        <Link
          href="/auth/signup"
          className="font-medium text-[var(--color-brand-600)] hover:underline"
        >
          초대 코드로 가입
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="rounded-2xl border border-[var(--color-ink-100)] bg-white p-8 shadow-sm" />}>
      <LoginForm />
    </Suspense>
  );
}
