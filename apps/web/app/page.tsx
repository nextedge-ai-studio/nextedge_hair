import Link from "next/link";
import { regions, salons } from "@nextedge/mock-data";

import { Header } from "@/components/header";
import { RegionCard } from "@/components/region-card";
import { formatTwd } from "@/lib/utils";

const curatedStats = [
  { label: "精選店家", value: "39+" },
  { label: "可瀏覽設計師", value: "120+" },
  { label: "可預約時段", value: "每日更新" },
];

const featureRows = [
  {
    title: "先用地區與風格縮小範圍",
    body: "從台北、新北到台中、台南，先看生活圈，再用風格標籤快速篩選。",
  },
  {
    title: "直接看設計師空檔",
    body: "每位設計師都顯示最近可預約時段，不用先私訊才知道有沒有位子。",
  },
  {
    title: "作品與價格放在同一頁",
    body: "看完作品集，再一起比對服務內容、價位與時間，做決定比較快。",
  },
];

const featuredSalons = salons.slice(0, 2);
const featuredPrice = featuredSalons[0]?.stylists[0]?.pricing[0];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="border-b border-[color:var(--border-subtle)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.36em] text-[color:var(--brand-primary)]">
                台灣沙龍選店指南
              </p>
              <div className="space-y-6">
                <h1 className="max-w-[12ch] text-6xl leading-none text-[color:var(--text-primary)] sm:text-7xl lg:text-8xl">
                  先看作品，
                  <br />
                  再決定把頭髮交給誰。
                </h1>
                <p className="max-w-[48ch] text-base leading-8 text-[color:var(--text-secondary)] sm:text-lg">
                  霧鏡 MUIR 把地區、店家、設計師、空檔、作品集與價位整理成一條順的瀏覽路線。先找到喜歡的風格，再決定要不要預約。
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/salons?region=taipei-city"
                  className="inline-flex min-h-11 items-center justify-center bg-[color:var(--text-primary)] px-6 text-sm uppercase tracking-[0.24em] text-[color:var(--bg-primary)] transition hover:bg-[color:var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus-ring)]"
                >
                  直接看店家
                </Link>
                <Link
                  href="/login"
                  className="inline-flex min-h-11 items-center justify-center border border-[color:var(--border-strong)] px-6 text-sm uppercase tracking-[0.24em] text-[color:var(--text-primary)] transition hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--bg-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus-ring)]"
                >
                  登入後預約
                </Link>
              </div>
            </div>
            <div className="mt-12 grid gap-6 border-t border-[color:var(--border-subtle)] pt-8 sm:grid-cols-3">
              {curatedStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl text-[color:var(--text-primary)] sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)] p-3 shadow-[var(--shadow-elegant)]">
            <div
              className="min-h-[640px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(28,28,28,0.08), rgba(28,28,28,0.38)), url(https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=80)",
              }}
            />
            <div className="absolute inset-x-8 bottom-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border border-[color:rgba(232,224,213,0.5)] bg-[color:rgba(250,248,245,0.9)] p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">本週主打</p>
                <h2 className="mt-3 text-3xl text-[color:var(--text-primary)]">{featuredSalons[0]?.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {featuredSalons[0]?.description}
                </p>
              </div>
              <div className="border border-[color:rgba(232,224,213,0.5)] bg-[color:rgba(28,28,28,0.88)] p-6 text-[color:var(--bg-primary)] backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-accent)]">起始價</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-5xl">
                  {featuredPrice ? formatTwd(featuredPrice.priceTwd) : "TWD 0"}
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:rgba(250,248,245,0.78)]">
                  剪髮、染髮與特殊造型服務透明列出，不需要反覆私訊確認。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--brand-primary)]">平台特色</p>
            <h2 className="mt-4 text-5xl text-[color:var(--text-primary)]">不是一直滑，而是更快挑到對的人。</h2>
          </div>
          <p className="max-w-[46ch] text-sm leading-7 text-[color:var(--text-secondary)]">
            目前版本先聚焦在公開瀏覽主線：選地區、看店家、看設計師、看空檔、看作品與價格；只有預約時才登入。
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--border-subtle)] lg:grid-cols-3">
          {featureRows.map((feature) => (
            <article key={feature.title} className="bg-[color:var(--bg-primary)] p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">01</p>
              <h3 className="mt-5 text-3xl text-[color:var(--text-primary)]">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="regions" className="border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--brand-primary)]">地區選店</p>
              <h2 className="mt-4 text-5xl text-[color:var(--text-primary)]">先選城市，再慢慢看風格。</h2>
            </div>
            <p className="max-w-[46ch] text-sm leading-7 text-[color:var(--text-secondary)]">
              進入後先選地區，再以沙龍卡片快速看氛圍、評分、標籤與最近可預約時段。
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {regions.map((region) => (
              <RegionCard key={region.id} region={region} />
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--brand-primary)]">編輯精選</p>
            <h2 className="mt-4 text-5xl text-[color:var(--text-primary)]">像看風格誌一樣挑店，不用盲約。</h2>
          </div>
          <Link
            href="/regions"
            className="inline-flex min-h-11 items-center justify-center border border-[color:var(--border-strong)] px-6 text-sm uppercase tracking-[0.24em] text-[color:var(--text-primary)] transition hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--bg-primary)]"
          >
            開始瀏覽
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {featuredSalons.map((salon) => (
            <article key={salon.id} className="overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)]">
              <div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(28,28,28,0.1), rgba(28,28,28,0.32)), url(${salon.coverImage})` }}
              />
              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-4xl text-[color:var(--text-primary)]">{salon.name}</h3>
                  <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">{salon.district}</span>
                </div>
                <p className="text-sm leading-7 text-[color:var(--text-secondary)]">{salon.description}</p>
                <Link href={`/salons/${salon.slug}`} className="inline-flex min-h-11 items-center text-sm uppercase tracking-[0.24em] text-[color:var(--text-primary)] underline decoration-[color:var(--brand-primary)] underline-offset-8">
                  看完整頁面
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
