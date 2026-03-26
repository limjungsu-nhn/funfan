import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/auth/login");
  if (!session.user.onboardingDone) redirect("/onboarding");

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      {/* 탑 내비 */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-ink-100)] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[var(--spacing-page)] items-center justify-between px-6 py-3">
          <Link href="/dashboard" className="text-xl font-bold text-[var(--color-ink-900)]">
            🌸 FunFan
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)] transition-colors"
            >
              대시보드
            </Link>
            <Link
              href="/workroom"
              className="text-sm font-medium text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)] transition-colors"
            >
              작업실
            </Link>
            <Link
              href="/garden"
              className="text-sm font-medium text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)] transition-colors"
            >
              화단
            </Link>
            <span className="text-sm text-[var(--color-ink-300)]">
              {session.user.nickname ?? session.user.email}
            </span>
            <Link
              href="/api/auth/signout"
              className="rounded-lg border border-[var(--color-ink-100)] px-3 py-1.5 text-xs text-[var(--color-ink-500)] hover:bg-[var(--color-ink-100)]"
            >
              로그아웃
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[var(--spacing-page)] px-6 py-8">
        {children}
      </main>
    </div>
  );
}
