import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById, getSalonBySlug } from "@nextedge/mock-data";

import { Header } from "@/components/header";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { formatTwd } from "@/lib/utils";

export default async function SalonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const salon = getSalonBySlug(slug);

  if (!salon) {
    notFound();
  }

  const region = getRegionById(salon.regionId);

  return (
    <main>
      <Header />
      <section className="relative border-b border-[color:var(--border-subtle)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(28,28,28,0.34), rgba(28,28,28,0.6)), url(${salon.coverImage})`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-[color:var(--bg-primary)] sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--brand-accent)]">
            {region?.name} / {salon.district}
          </p>
          <h1 className="mt-5 text-7xl">{salon.name}</h1>
          <p className="mt-5 max-w-[54ch] text-base leading-8 text-[color:rgba(250,248,245,0.82)]">
            {salon.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {salon.tags.map((tag) => (
              <span key={tag} className="border border-[color:rgba(250,248,245,0.35)] px-3 py-1 text-xs uppercase tracking-[0.18em]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="sticky top-[96px] z-20 mb-10 border border-[color:var(--border-subtle)] bg-[color:rgb(250_248_245_/_0.94)] p-6 shadow-[var(--shadow-soft)] backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">店家資訊</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{salon.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">評分</p>
                <p className="mt-3 text-3xl text-[color:var(--text-primary)]">{salon.rating.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">評論數</p>
                <p className="mt-3 text-3xl text-[color:var(--text-primary)]">{salon.reviewCount}</p>
              </div>
            </div>
            <Link
              href={`/salons?region=${salon.regionId}`}
              className="inline-flex min-h-11 items-center justify-center border border-[color:var(--text-primary)] px-5 text-sm uppercase tracking-[0.24em] text-[color:var(--text-primary)] transition hover:bg-[color:var(--text-primary)] hover:text-[color:var(--bg-primary)]"
            >
              回店家列表
            </Link>
          </div>
        </div>

        <div className="space-y-10">
          {salon.stylists.map((stylist) => (
            <article key={stylist.id} className="overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] shadow-[var(--shadow-soft)]">
              <div className="grid gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div className="space-y-6">
                  <div
                    className="aspect-[4/5] bg-cover bg-center"
                    style={{ backgroundImage: `url(${stylist.portrait})` }}
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">{stylist.title}</p>
                    <h2 className="mt-3 text-5xl text-[color:var(--text-primary)]">{stylist.name}</h2>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">{stylist.bio}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stylist.specialty.map((item) => (
                      <span
                        key={item}
                        className="border border-[color:var(--border-subtle)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--text-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">可預約時段</p>
                        <h3 className="mt-3 text-3xl text-[color:var(--text-primary)]">最近可預約：{stylist.nextAvailable}</h3>
                      </div>
                      <Link
                        href="/login"
                        className="inline-flex min-h-11 items-center justify-center bg-[color:var(--text-primary)] px-5 text-sm uppercase tracking-[0.24em] text-[color:var(--bg-primary)] transition hover:bg-[color:var(--brand-primary)]"
                      >
                        登入後預約
                      </Link>
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {stylist.bookingSlots.map((slot) => (
                        <Link
                          key={slot.id}
                          href={slot.available ? "/login" : "#"}
                          aria-disabled={!slot.available}
                          className={`min-h-12 border px-4 text-xs uppercase tracking-[0.2em] ${
                            slot.available
                              ? "border-[color:var(--border-strong)] text-[color:var(--text-primary)] transition hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--bg-primary)]"
                              : "pointer-events-none border-[color:var(--border-subtle)] text-[color:var(--text-muted)]"
                          }`}
                        >
                          {slot.available ? `${slot.label} / 登入預約` : slot.label}
                        </Link>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">作品集</p>
                    <PortfolioGallery items={stylist.portfolio} />
                  </section>

                  <section>
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">價目表</p>
                    <div className="mt-5 overflow-hidden border border-[color:var(--border-subtle)]">
                      {stylist.pricing.map((item) => (
                        <div
                          key={item.name}
                          className="grid gap-3 border-b border-[color:var(--border-subtle)] p-4 last:border-b-0 sm:grid-cols-[1fr_auto_auto]"
                        >
                          <p className="text-base text-[color:var(--text-primary)]">{item.name}</p>
                          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                            {item.durationMinutes} 分鐘
                          </p>
                          <p className="text-base text-[color:var(--text-primary)]">{formatTwd(item.priceTwd)}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
