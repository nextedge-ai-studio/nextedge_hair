import Link from "next/link";

import type { Region } from "@nextedge/schemas";

export function RegionCard({ region }: { region: Region }) {
  return (
    <Link
      href={`/salons?region=${region.id}`}
      className="group block overflow-hidden border border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--focus-ring)]"
    >
      <div
        className="h-60 bg-cover bg-center transition duration-700 group-hover:scale-[1.02]"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(28,28,28,0.12), rgba(28,28,28,0.38)), url(${region.heroImage})` }}
      />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--text-primary)]">
            {region.name}
          </h3>
          <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--brand-primary)]">
            {region.salonCount} 間精選
          </span>
        </div>
        <p className="max-w-[44ch] text-sm leading-6 text-[color:var(--text-secondary)]">
          {region.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {region.featuredDistricts.map((district) => (
            <span
              key={district}
              className="border border-[color:var(--border-subtle)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--text-secondary)]"
            >
              {district}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
