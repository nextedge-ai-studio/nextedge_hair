import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Region } from "@nextedge/schemas";

export function RegionCard({ region, index }: { region: Region; index?: number }) {
  return (
    <div className={`group flex flex-col hover-clip ${index !== undefined && index % 2 === 1 ? 'md:mt-32' : ''}`}>
      <Link href={`/salons?region=${region.id}`} className="relative block overflow-hidden bg-black aspect-[3/4] sm:aspect-[4/5]">
        <img 
          src={region.heroImage} 
          alt={region.name} 
          className="clip-image h-full w-full object-cover opacity-80 transition hover:opacity-100"
        />
        <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-transparent">
          <span className="font-display text-2xl text-white italic tracking-wider">
            Explore
          </span>
          <ArrowRight className="h-6 w-6 text-white" />
        </div>
      </Link>
      
      <div className="mt-8 flex items-start justify-between">
        <div>
          <h3 className="font-display text-4xl uppercase text-black">
            {region.name}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-500 font-light">
            {region.featuredDistricts.slice(0, 3).map(d => (
              <span key={d} className="after:content-[','] last:after:content-['']">{d}</span>
            ))}
          </div>
        </div>
        <span className="text-sm font-semibold text-black uppercase tracking-[0.2em] border-b border-black pb-1 lowercase">
          {region.salonCount} salons
        </span>
      </div>
    </div>
  );
}
