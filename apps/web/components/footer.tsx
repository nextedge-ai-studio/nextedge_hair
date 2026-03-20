import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-20 text-white mt-auto">
      <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-12">
        <h2 className="font-display text-6xl tracking-[0.2em] mb-12">MUIR</h2>
        <p className="text-xs font-light uppercase tracking-[0.2em] text-gray-400">
          © {new Date().getFullYear()} MUIR PLATFORM. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
