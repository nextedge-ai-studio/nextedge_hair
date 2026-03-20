import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById, getSalonBySlug } from "@nextedge/mock-data";
import { ArrowLeft, MapPin } from "lucide-react";

import { Header } from "@/components/header";
import { formatTwd } from "@/lib/utils";
import { PortfolioCarousel } from "@/components/portfolio-carousel";

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
    <main className="bg-white pb-32">
      <Header />
      
      {/* Editorial Hero Layout */}
      <section className="pt-32 lg:pt-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 lg:mb-32">
           <div className="lg:col-span-5 flex flex-col justify-end fade-up stagger-1">
             <Link href={`/salons?region=${salon.regionId}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] mb-12 hover:opacity-60 transition-opacity w-fit">
               <ArrowLeft className="h-4 w-4" /> 返回列表
             </Link>
             <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-50 mb-4">{region?.name} / {salon.district}</p>
             <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] mb-8 break-words text-balance">
               {salon.name}
             </h1>
             <p className="text-base font-light leading-relaxed text-gray-700 max-w-md">
               {salon.description}
             </p>
             <div className="mt-8 flex flex-wrap gap-3 text-sm uppercase tracking-widest font-semibold border-t border-black/10 pt-8">
               {salon.tags.map(t => <span key={t}>{t}</span>)}
             </div>
           </div>

           <div className="lg:col-span-7 fade-up stagger-2">
             <div className="aspect-[3/4] sm:aspect-[4/3] w-full overflow-hidden bg-gray-100">
               <img src={salon.coverImage} alt={salon.name} className="w-full h-full object-cover grayscale transition hover:grayscale-0 duration-1000" />
             </div>
           </div>
        </div>
      </section>

      {/* Details & Information Minimal List */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12 mb-32">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-black py-16">
            <div>
               <p className="text-sm uppercase tracking-[0.2em] opacity-50 mb-2">Location</p>
               <p className="font-medium mb-4">{salon.address}</p>
               <a 
                 href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salon.address)}`} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] border border-black/20 rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors"
               >
                 <MapPin className="h-3 w-3" />
                 Open in Maps
               </a>
            </div>
            <div>
               <p className="text-sm uppercase tracking-[0.2em] opacity-50 mb-2">Aesthetic Vibe</p>
               <p className="font-medium uppercase tracking-widest">{salon.vibe}</p>
            </div>
            <div>
               <p className="text-sm uppercase tracking-[0.2em] opacity-50 mb-2">Curator Rating</p>
               <p className="font-display text-4xl">{salon.rating.toFixed(1)} <span className="text-sm font-sans tracking-widest uppercase opacity-40">({salon.reviewCount})</span></p>
            </div>
         </div>
      </section>

      {/* Directory of Artisans (Stylists) */}
      <section className="mx-auto max-w-[1400px]">
        <div className="px-6 lg:px-12 mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter">The Artisans</h2>
        </div>

        <div>
          {salon.stylists.map((stylist) => (
            <article key={stylist.id} className="border-t border-black p-6 lg:p-12 hover:bg-gray-50 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Profile */}
                <div className="lg:col-span-4 flex flex-col">
                  <div className="aspect-[3/4] w-full max-w-sm overflow-hidden mb-8">
                     <img src={stylist.portrait} alt={stylist.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-50 mb-2">{stylist.title}</p>
                  <h3 className="font-display text-5xl uppercase mb-6">{stylist.name}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-700">{stylist.bio}</p>
                </div>

                {/* Pricing & Booking */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div className="mb-12">
                     <h4 className="text-sm uppercase tracking-[0.2em] opacity-50 mb-6 border-b border-black/10 pb-4">Service Menu</h4>
                     <ul className="space-y-4">
                       {stylist.pricing.map(item => (
                         <li key={item.name} className="flex justify-between items-end">
                           <span className="text-lg md:text-xl font-light">{item.name}</span>
                           <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-2"></span>
                           <span className="font-display text-2xl">{formatTwd(item.priceTwd)}</span>
                         </li>
                       ))}
                     </ul>
                  </div>

                  <div>
                     <h4 className="text-sm uppercase tracking-[0.2em] opacity-50 mb-6 border-b border-black/10 pb-4">Availability</h4>
                     <div className="flex flex-wrap gap-4">
                       {stylist.bookingSlots.map(slot => (
                         <Link 
                           key={slot.id} 
                           href={slot.available ? "/login" : "#"}
                           className={`px-6 py-4 border text-sm font-bold uppercase tracking-widest transition-all ${
                             slot.available ? "border-black bg-white hover:bg-black hover:text-white" : "border-gray-200 bg-gray-50 text-gray-300 pointer-events-none"
                           }`}
                         >
                           {slot.label} {slot.available ? '' : '(Booked)'}
                         </Link>
                       ))}
                     </div>
                  </div>
                </div>

              </div>

              {/* Portfolio Gallery Strip */}
              <PortfolioCarousel portfolio={stylist.portfolio} />

            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
