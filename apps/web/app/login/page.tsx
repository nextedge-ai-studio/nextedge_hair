import Link from "next/link";
import { Header } from "@/components/header";

export default function LoginPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Col: Imagery */}
        <div className="hidden lg:block relative w-full h-full bg-gray-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop" 
            alt="Editorial Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" 
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
          <div className="absolute inset-x-12 bottom-12">
             <p className="font-display text-6xl uppercase tracking-tighter leading-none text-white">
               JOIN<br/>THE PLATFORM.
             </p>
          </div>
        </div>

        {/* Right Col: Minimal Login Form */}
        <div className="flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 w-full h-full">
          <div className="w-full max-w-sm">
             <h1 className="font-display text-5xl uppercase tracking-tighter mb-2">Access</h1>
             <p className="text-sm font-medium tracking-widest text-gray-400 mb-16">
               精選沙龍專屬體驗
             </p>

             <div className="space-y-4">
               <Link
                 href="/salons"
                 className="flex w-full items-center justify-between border border-white px-6 py-4 transition hover:bg-white hover:text-black group"
               >
                 <span className="text-sm font-bold tracking-[0.1em]">使用 Google 繼續</span>
                 <span className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
               </Link>
               
               <Link
                 href="/salons"
                 className="flex w-full items-center justify-between border border-white/20 px-6 py-4 text-gray-300 transition hover:border-white hover:text-white group"
               >
                 <span className="text-sm font-bold tracking-[0.1em]">使用 Apple 繼續</span>
                 <span className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
               </Link>
             </div>

             <div className="mt-16 pt-8 border-t border-white/10">
               <p className="text-sm leading-relaxed tracking-widest text-gray-500">
                 繼續即表示您同意我們的服務條款與隱私權政策。此為專屬的測試版體驗入口。
               </p>
             </div>
          </div>
        </div>

      </div>
    </main>
  );
}
