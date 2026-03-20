import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById, getSalonsByRegion, regions, salons as allSalons } from "@nextedge/mock-data";

import { Header } from "@/components/header";
import { SalonCard } from "@/components/salon-card";
import { RegionCard } from "@/components/region-card";
import { FilterBar } from "@/components/filter-bar";
import {
  getDistrictOptions,
  matchesDistrict,
  matchesService,
  sortSalons,
} from "@/lib/discovery";
import { ArrowLeft } from "lucide-react";

export default async function SalonsPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string; service?: string; district?: string; sort?: string; q?: string }>;
}) {
  const { region: regionId, service = "all", district = "all", sort = "recommended", q = "" } = await searchParams;

  if (!regionId && !q) {
    return (
      <main className="bg-white min-h-screen pb-32">
        <Header />
        <section className="pt-40 pb-16 px-6 lg:px-12 mx-auto max-w-[1400px]">
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gray-400 mb-4">Destination</p>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-black">選擇探索區域</h1>
            <p className="mt-4 text-sm font-light tracking-widest text-gray-500 uppercase">Select a region to explore our curated salons.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, idx) => (
              <RegionCard key={region.id} region={region} index={idx} />
            ))}
          </div>
        </section>
      </main>
    );
  }

  type RegionType = ReturnType<typeof getRegionById>;
  let region: RegionType;
  let regionSalons = allSalons;
  
  if (regionId) {
    region = getRegionById(regionId);
    if (!region) notFound();
    regionSalons = getSalonsByRegion(regionId);
  }

  let filteredSalons = sortSalons(
    regionSalons.filter((salon) => matchesService(salon, service) && matchesDistrict(salon, district)),
    sort,
  );

  if (q) {
    filteredSalons = filteredSalons.filter((salon) => salon.name.toLowerCase().includes(q.toLowerCase()));
  }

  const districtOptions = region ? getDistrictOptions(region, regionSalons) : [];

  return (
    <main className="bg-white min-h-screen pb-32">
      <Header />
      
      {/* Huge Editorial Header */}
      <section className="pt-40 pb-16 px-6 lg:px-12 mx-auto max-w-[1400px]">
        <Link href="/salons" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mb-12 hover:opacity-60 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> 返回區域
        </Link>
        <p className="text-[11px] font-light tracking-[0.3em] uppercase opacity-50 mb-2">Destination / {region ? region.name : 'Global Search'}</p>
        <h1 className="font-display text-7xl md:text-9xl uppercase tracking-tighter leading-none break-words">
          {q ? `Search: ${q}` : (region?.name ?? 'Salons')}
        </h1>
        <div className="mt-12 flex flex-wrap gap-12 border-t border-black pt-8">
          <div className="w-full md:w-auto">
             <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">總店家數</p>
             <p className="font-display text-4xl">{filteredSalons.length}</p>
          </div>
          {region && (
            <div className="w-full md:w-auto max-w-sm">
               <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">編輯推薦</p>
               <p className="text-sm font-light leading-relaxed">{region.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Auto-Submit Filter Bar */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 mb-16">
        <FilterBar 
          regionId={region?.id}
          districtOptions={districtOptions}
          currentDistrict={district}
          currentSort={sort}
          q={q}
        />
      </section>

      {/* Editoral List */}
      <section className="mx-auto max-w-[1400px] relative">
        <div className="border-b border-black">
          {filteredSalons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} region={region} />
          ))}
        </div>
        
        {filteredSalons.length === 0 && (
          <div className="py-32 text-center text-gray-400">
            <h3 className="font-display text-4xl mb-4 text-black">NO RESULTS FOUND</h3>
            <p className="text-sm font-light uppercase tracking-widest">請嘗試調整您的篩選條件或搜尋關鍵字。</p>
          </div>
        )}
      </section>
    </main>
  );
}
