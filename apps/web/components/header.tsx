import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--border-subtle)] bg-[color:rgb(250_248_245_/_0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl tracking-[0.08em] text-[color:var(--text-primary)]">
          霧鏡 MUIR
        </Link>
        <nav className="flex items-center gap-5 text-sm text-[color:var(--text-secondary)] md:gap-8">
          <Link href="/regions" className="transition hover:text-[color:var(--text-primary)]">
            地區
          </Link>
          <Link href="/salons?region=taipei-city" className="transition hover:text-[color:var(--text-primary)]">
            看店家
          </Link>
          <a href="/#collections" className="hidden transition hover:text-[color:var(--text-primary)] md:block">
            本週精選
          </a>
        </nav>
        <Link
          href="/login"
          className="inline-flex min-h-11 items-center justify-center border border-[color:var(--border-strong)] px-5 text-sm tracking-[0.2em] uppercase text-[color:var(--text-primary)] transition hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--bg-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus-ring)]"
        >
          會員登入
        </Link>
      </div>
    </header>
  );
}
