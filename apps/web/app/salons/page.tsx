import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById, getSalonsByRegion, regions } from "@nextedge/mock-data";

import { Header } from "@/components/header";
import { SalonCard } from "@/components/salon-card";

export default async function SalonsPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string }>;
}) {
  const { region: regionId } = await searchParams;

  if (!regionId) {
    notFound();
  }

  const region = getRegionById(regionId);

  if (!region) {
    notFound();
  }

  const regionSalons = getSalonsByRegion(regionId);

  return (
    <main>
      <Header />
      <section className="border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--brand-primary)]">店家列表</p>
              <h1 className="mt-4 text-6xl text-[color:var(--text-primary)]">{region.name}</h1>
              <p className="mt-4 max-w-[44ch] text-sm leading-7 text-[color:var(--text-secondary)]">
                {region.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((item) => (
                <Link
                  key={item.id}
                  href={`/salons?region=${item.id}`}
                  className={`inline-flex min-h-11 items-center justify-center border px-4 text-xs uppercase tracking-[0.24em] transition ${
                    item.id === region.id
                      ? "border-[color:var(--text-primary)] bg-[color:var(--text-primary)] text-[color:var(--bg-primary)]"
                      : "border-[color:var(--border-subtle)] text-[color:var(--text-secondary)] hover:border-[color:var(--border-strong)] hover:text-[color:var(--text-primary)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-8">
          {regionSalons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} region={region} />
          ))}
        </div>
      </section>
    </main>
  );
}
