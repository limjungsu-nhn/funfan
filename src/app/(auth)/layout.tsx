export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-surface)]">
      <div className="w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink-900)]">
            🌸 FunFan
          </h1>
          <p className="mt-1 text-sm text-[var(--color-ink-500)]">
            창작자를 위한 공간
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
