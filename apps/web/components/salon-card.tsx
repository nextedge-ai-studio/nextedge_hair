import Link from "next/link";

import type { Region, Salon } from "@nextedge/schemas";

export function SalonCard({ salon, region }: { salon: Salon; region?: Region }) {
  const firstStylist = salon.stylists[0];
  const previewShots = firstStylist.portfolio.slice(0, 3);

  return (
    <Link
      href={`/salons/${salon.slug}`}
      className="group grid overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div
        className="min-h-72 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(28,28,28,0.1), rgba(28,28,28,0.32)), url(${salon.coverImage})` }}
      />
      <div className="flex flex-col justify-between p-6 sm:p-8">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">
            <span>{region?.name ?? salon.regionId}</span>
            <span className="text-[color:var(--border-strong)]">/</span>
            <span>{salon.district}</span>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-4xl text-[color:var(--text-primary)]">
              {salon.name}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
              {salon.vibe}
            </p>
          </div>
          <p className="max-w-[48ch] text-sm leading-7 text-[color:var(--text-secondary)]">
            {salon.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {salon.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[color:var(--border-subtle)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 border-t border-[color:var(--border-subtle)] pt-6 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">評分</p>
            <p className="mt-2 text-2xl text-[color:var(--text-primary)]">{salon.rating.toFixed(1)}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">主打設計師</p>
            <p className="mt-2 text-base text-[color:var(--text-primary)]">{firstStylist.name}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">最近空檔</p>
            <p className="mt-2 text-base text-[color:var(--text-primary)]">{firstStylist.nextAvailable}</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">作品集預覽</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {previewShots.map((item) => (
              <div key={item.id} className="overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]">
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
