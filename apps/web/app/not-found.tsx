import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] p-10 text-center shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--brand-primary)]">404</p>
        <h1 className="mt-4 text-5xl text-[color:var(--text-primary)]">找不到這個頁面。</h1>
        <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
          請回到首頁重新選擇地區或店家。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center border border-[color:var(--text-primary)] px-5 text-sm uppercase tracking-[0.24em] text-[color:var(--text-primary)] transition hover:bg-[color:var(--text-primary)] hover:text-[color:var(--bg-primary)]"
        >
          回首頁
        </Link>
      </div>
    </main>
  );
}
