"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSearch() {
  const router = useRouter();
  const [salonName, setSalonName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (salonName.trim()) {
      // In a real app, this would search the backend or filter the salons page by query
      router.push(`/salons?region=taipei-city&q=${encodeURIComponent(salonName)}`);
    } else {
      router.push("/salons");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group relative flex w-full max-w-2xl items-center border-b border-black/20 pb-4 transition-colors focus-within:border-black"
    >
      <input
        type="text"
        placeholder="搜尋特定店家名稱，如：Maison Hair..."
        className="w-full bg-transparent text-xl font-light text-black placeholder:text-black/30 placeholder:font-light outline-none sm:text-3xl"
        value={salonName}
        onChange={(e) => setSalonName(e.target.value)}
      />
      <button
        type="submit"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 hover:rotate-12 hover:scale-110"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
}
