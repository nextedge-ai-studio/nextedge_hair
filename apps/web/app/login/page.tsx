import Link from "next/link";

import { Header } from "@/components/header";

export default function LoginPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] shadow-[var(--shadow-elegant)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)] p-8 lg:border-b-0 lg:border-r lg:p-12">
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--brand-primary)]">會員入口</p>
            <h1 className="mt-6 text-5xl text-[color:var(--text-primary)]">登入後就能預約喜歡的設計師。</h1>
            <p className="mt-6 max-w-[42ch] text-sm leading-7 text-[color:var(--text-secondary)]">
              目前是 prototype。Google 登入按鈕先直接導向地區選擇頁，之後再接真實 OAuth。
            </p>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="mx-auto w-full max-w-md space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--text-muted)]">快速登入</p>
                <h2 className="mt-3 text-3xl text-[color:var(--text-primary)]">Google 帳號</h2>
              </div>
              <Link
                href="/regions"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-[color:var(--text-primary)] px-6 text-sm uppercase tracking-[0.24em] text-[color:var(--text-primary)] transition hover:bg-[color:var(--text-primary)] hover:text-[color:var(--bg-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus-ring)]"
              >
                <span className="text-lg">G</span>
                使用 Google 繼續
              </Link>
              <p className="text-sm leading-7 text-[color:var(--text-secondary)]">
                這一步只做導頁示意，還不會驗證帳號。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
