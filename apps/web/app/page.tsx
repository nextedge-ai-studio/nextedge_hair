import Link from "next/link";
import { regions } from "@nextedge/mock-data";

import { Header } from "@/components/header";
import { HeroSearch } from "@/components/hero-search";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section: Full Screen Minimal Editorial */}
      <section className="relative h-screen min-h-[800px] w-full pt-20">
        <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden">
          <div 
            className="h-full w-full bg-cover bg-[center_top] image-reveal"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-20 lg:px-12">
          <div className="flex flex-col-reverse items-start justify-between gap-12 lg:flex-row lg:items-end">
            <div className="w-full lg:w-1/2 fade-up stagger-1 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              <h1 className="font-display text-[12vw] leading-[0.85] text-white lg:text-[140px] tracking-tighter">
                ELEVATED<br/>
                <span className="italic font-light text-[#D8CBB6]">BEAUTY.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg font-light leading-relaxed tracking-widest text-[#F5F2EC]">
                全台最具指標性的高端美髮沙龍探索平台。<br/>在城市中尋找最懂您的質感設計師。
              </p>
            </div>
            
            <div className="w-full max-w-md bg-white p-8 shadow-2xl fade-up stagger-2 lg:mb-10 lg:w-[450px]">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                L'Art de la Coiffure
              </p>
              <h2 className="mb-8 font-display text-4xl leading-tight text-black">
                尋找塑造您獨特美學的頂尖工匠
              </h2>
              <HeroSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#fcfbf9] border-t border-black/5">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Image Anchor */}
            <div className="lg:col-span-5 fade-up stagger-1">
              <div className="aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1500&auto=format&fit=crop" 
                  alt="Editorial Philosophy" 
                  className="h-full w-full object-cover grayscale transition duration-1000 hover:scale-105 hover:grayscale-0"
                />
              </div>
            </div>

            {/* Right Typography Content */}
            <div className="lg:col-span-7 flex flex-col justify-center fade-up stagger-2">
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400 mb-8">
                The Philosophy
              </p>
              
              <h3 className="text-4xl leading-[1.4] tracking-[0.1em] text-black sm:text-5xl lg:text-[56px] font-light">
                這不僅是髮型設計，<br />
                更是為您量身打造的<br />
                <span className="italic font-serif text-gray-500 tracking-widest">個人建築美學。</span>
              </h3>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16 items-start border-t border-black/10 pt-12">
                <p className="text-base md:text-lg font-light leading-loose tracking-[0.15em] text-gray-600 max-w-lg">
                  我們相信每一縷髮絲都蘊藏著獨特的結構語言。結合頂級匠藝與細膩品味，在城市的脈絡中，我們為您篩選出最具指標性的質感沙龍，重新定義屬於您的自信輪廓。
                </p>
                
                <Link href="/salons" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity mt-4 lg:mt-0 lg:ml-auto">
                探索精選版圖
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black transition-transform group-hover:bg-black group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Regions Showcase */}
      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-20 grid grid-cols-1 items-end gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400">Locations</p>
              <h2 className="mt-4 font-display text-6xl text-black md:text-8xl">DESTINATION</h2>
            </div>
            <p className="max-w-md text-lg font-light leading-relaxed text-gray-600 md:justify-self-end">
              我們嚴選的頂級沙龍皆坐落於最具影響力的文化樞紐。請選擇您的地區以開始探索。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:gap-20">
            {regions.slice(0, 4).map((region, idx) => (
              <div 
                key={region.id} 
                className={`group flex flex-col hover-clip ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
              >
                <Link href={`/salons`} className="relative block overflow-hidden bg-black aspect-[3/4] sm:aspect-[4/5]">
                  <img 
                    src={region.heroImage} 
                    alt={region.name} 
                    className="clip-image h-full w-full object-cover opacity-80 transition hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-[50ms] group-hover:opacity-100">
                    <span className="font-display text-4xl text-white italic tracking-wider px-8 py-4 border border-white/30 backdrop-blur-sm bg-black/20">
                      探索
                    </span>
                  </div>
                </Link>
                
                <div className="mt-8 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-4xl uppercase text-black">
                      {region.name}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-500">
                      {region.featuredDistricts.slice(0, 3).map(d => (
                        <span key={d} className="after:content-[','] last:after:content-['']">{d}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-black uppercase tracking-widest border-b border-black pb-1">
                    {region.salonCount} Salons
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
