import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="rounded-2xl border border-[var(--color-ink-100)] bg-white p-8 shadow-sm text-center">
      <p className="text-4xl mb-4">😢</p>
      <h2 className="mb-2 text-lg font-semibold text-[var(--color-ink-900)]">
        인증 오류
      </h2>
      <p className="text-sm text-[var(--color-ink-500)] mb-6">
        로그인 중 문제가 발생했습니다.
      </p>
      <Link
        href="/auth/login"
        className="inline-block rounded-lg bg-[var(--color-brand-500)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-brand-600)]"
      >
        다시 시도
      </Link>
    </div>
  );
}
