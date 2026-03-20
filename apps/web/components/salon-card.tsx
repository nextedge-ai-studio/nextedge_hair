import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Region, Salon } from "@nextedge/schemas";
import { getEarliestAvailableLabel, getStartingPrice } from "@/lib/discovery";
import { formatTwd } from "@/lib/utils";

export function SalonCard({ salon, region }: { salon: Salon; region?: Region }) {
  const startingPrice = getStartingPrice(salon);
  const earliest = getEarliestAvailableLabel(salon);

  return (
    <Link
      href={`/salons/${salon.slug}`}
      className="group block border-t border-black py-8 transition-colors hover:bg-black hover:text-white"
    >
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12 px-4 transition-colors">
        
        {/* Sequence & Vibe (Left Col) */}
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-50">
            {salon.district}
          </p>
          <p className="mt-auto text-sm uppercase tracking-[0.3em] font-light hidden md:block">
            {salon.vibe}
          </p>
        </div>

        {/* Huge Title & Tags (Mid Col) */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <h3 className="font-display text-4xl leading-none uppercase tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl group-hover:italic transition-all duration-[50ms]">
            {salon.name}
          </h3>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-light uppercase tracking-widest opacity-60">
            {salon.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Pricing & Availability (Right Col) */}
        <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end text-left md:text-right h-full">
          <div className="space-y-1">
            <p className="font-display text-2xl">{formatTwd(startingPrice)}</p>
            <p className="text-sm font-medium tracking-widest opacity-60 border-b border-current pb-1 inline-block">
              起步價格
            </p>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="text-left md:text-right">
              <p className="text-sm uppercase tracking-[0.2em] opacity-50">最近空檔</p>
              <p className="text-sm font-medium mt-1">{earliest}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>

      </div>
      
      {/* Hidden Hover Image Reveal */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 z-50 h-[400px] w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden lg:block shadow-2xl">
        <img src={salon.coverImage} alt={salon.name} className="h-full w-full object-cover" />
      </div>
    </Link>
  );
}
