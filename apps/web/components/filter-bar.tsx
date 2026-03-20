"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function FilterBar({ 
  regionId, 
  districtOptions, 
  currentDistrict, 
  currentSort, 
  q 
}: { 
  regionId?: string; 
  districtOptions: string[]; 
  currentDistrict: string; 
  currentSort: string; 
  q: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all" && key === "district") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}` as any);
  };

  return (
    <div className="flex flex-wrap items-center gap-12 border-y border-black/10 py-6">
      {regionId && (
        <div className="flex flex-col group relative">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-1">地區篩選</span>
          <select 
            value={currentDistrict} 
            onChange={(e) => updateParam("district", e.target.value)}
            className="bg-transparent text-sm font-medium uppercase tracking-widest outline-none cursor-pointer appearance-none pr-4"
          >
            <option value="all">所有區域</option>
            {districtOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      )}

      <div className="flex flex-col group relative">
         <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-1">排序方式</span>
         <select 
           value={currentSort} 
           onChange={(e) => updateParam("sort", e.target.value)}
           className="bg-transparent text-sm font-medium uppercase tracking-widest outline-none cursor-pointer appearance-none pr-4"
         >
           <option value="recommended">編輯嚴選</option>
           <option value="rating">最高評價</option>
           <option value="price_asc">價格：低至高</option>
           <option value="price_desc">價格：高至低</option>
         </select>
      </div>
    </div>
  );
}
