import { regions } from "@nextedge/mock-data";

import { Header } from "@/components/header";
import { RegionCard } from "@/components/region-card";

export default function RegionsPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--brand-primary)]">選地區</p>
            <h1 className="mt-4 text-6xl text-[color:var(--text-primary)]">今天想在哪一區整理頭髮？</h1>
          </div>
          <p className="max-w-[46ch] text-sm leading-7 text-[color:var(--text-secondary)]">
            從主要地區開始，下一步會直接進入該區域的店家列表。
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {regions.map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>
      </section>
    </main>
  );
}
