"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

type Step = "invite" | "account";

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("invite");
  const [inviteCode, setInviteCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateInvite = api.auth.validateInviteCode.useMutation({
    onSuccess: () => setStep("account"),
    onError: (e) => setError(e.message),
  });

  const signUp = api.auth.signUp.useMutation({
    onSuccess: async () => {
      // 가입 후 자동 로그인
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("가입은 완료됐지만 로그인에 실패했습니다. 다시 시도해 주세요.");
        return;
      }
      router.push("/onboarding");
      router.refresh();
    },
    onError: (e) => setError(e.message),
  });

  function handleInviteSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    validateInvite.mutate({ code: inviteCode });
  }

  function handleAccountSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    signUp.mutate({ email, password, inviteCode });
  }

  return (
    <div className="rounded-2xl border border-[var(--color-ink-100)] bg-white p-8 shadow-sm">
      {/* 단계 표시 */}
      <div className="mb-6 flex items-center gap-2">
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
            step === "invite"
              ? "bg-[var(--color-brand-500)] text-white"
              : "bg-[var(--color-brand-100)] text-[var(--color-brand-700)]"
          }`}
        >
          1
        </div>
        <span className="text-sm text-[var(--color-ink-300)]">—</span>
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
            step === "account"
              ? "bg-[var(--color-brand-500)] text-white"
              : "bg-[var(--color-ink-100)] text-[var(--color-ink-500)]"
          }`}
        >
          2
        </div>
        <span className="ml-2 text-sm font-medium text-[var(--color-ink-700)]">
          {step === "invite" ? "초대 코드 입력" : "계정 설정"}
        </span>
      </div>

      {step === "invite" && (
        <form onSubmit={handleInviteSubmit} className="space-y-4">
          <p className="text-sm text-[var(--color-ink-500)]">
            FunFan은 초대받은 창작자만 참여할 수 있습니다.
            받으신 초대 코드를 입력해 주세요.
          </p>
          <div>
            <label className="mb-1 block text-sm font-medium text-[var(--color-ink-700)]">
              초대 코드
            </label>
            <input
              type="text"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
              required
              maxLength={8}
              className="w-full rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 font-mono text-sm uppercase tracking-widest outline-none transition focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-200)]"
              placeholder="ABCD1234"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={validateInvite.isPending}
            className="w-full rounded-lg bg-[var(--color-brand-500)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-600)] disabled:opacity-50"
          >
            {validateInvite.isPending ? "확인 중..." : "코드 확인"}
          </button>
        </form>
      )}

      {step === "account" && (
        <form onSubmit={handleAccountSubmit} className="space-y-4">
          <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
            ✓ 초대 코드 확인됨
          </p>

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
              비밀번호 (8자 이상)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none transition focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-200)]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-[var(--color-ink-700)]">
              비밀번호 확인
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-[var(--color-ink-100)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none transition focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-200)]"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={signUp.isPending}
            className="w-full rounded-lg bg-[var(--color-brand-500)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-600)] disabled:opacity-50"
          >
            {signUp.isPending ? "가입 중..." : "계정 만들기"}
          </button>
        </form>
      )}

      <p className="mt-4 text-center text-sm text-[var(--color-ink-500)]">
        이미 계정이 있으신가요?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-[var(--color-brand-600)] hover:underline"
        >
          로그인
        </Link>
      </p>
    </div>
  );
}
