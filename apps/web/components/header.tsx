import Link from "next/link";
import { User, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-black/85 backdrop-blur-xl text-white py-5 border-b border-white/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-[family-name:var(--font-display)] text-2xl font-light tracking-[0.2em] uppercase">
            Muir
          </Link>
          <nav className="hidden items-center gap-10 text-sm font-medium tracking-[0.15em] uppercase md:flex">
            <Link href="/salons" className="transition-opacity hover:opacity-60 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              美髮 Hair
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="hidden items-center gap-2 text-sm font-medium tracking-[0.1em] uppercase transition-opacity hover:opacity-60 sm:flex"
          >
            登入 Login
          </Link>
          <button className="flex items-center justify-center text-white md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
