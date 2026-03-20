import type { Region, Salon } from "@nextedge/schemas";

export const serviceOptions = [
  { value: "all", label: "全部服務" },
  { value: "cut", label: "剪髮" },
  { value: "color", label: "染髮" },
  { value: "perm", label: "燙髮" },
  { value: "barber", label: "男士理容" },
  { value: "bridal", label: "新娘 / 宴會" },
  { value: "treatment", label: "修護保養" },
] as const;

export const sortOptions = [
  { value: "recommended", label: "平台推薦" },
  { value: "rating", label: "評分最高" },
  { value: "availability", label: "最近可約" },
  { value: "price", label: "起始價最低" },
] as const;

export type ServiceValue = (typeof serviceOptions)[number]["value"];
export type SortValue = (typeof sortOptions)[number]["value"];

const serviceMatchers: Record<Exclude<ServiceValue, "all">, string[]> = {
  cut: ["剪", "鮑伯", "層次", "短裁", "理容"],
  color: ["染", "漂", "霧", "奶茶", "校色"],
  perm: ["燙", "捲", "髮根", "perm"],
  barber: ["男士", "理容", "fade", "修鬍"],
  bridal: ["新娘", "宴會", "盤髮", "吹整"],
  treatment: ["修護", "護理", "頭皮", "gloss"],
};

function getSearchCorpus(salon: Salon): string {
  return [
    salon.name,
    salon.vibe,
    salon.description,
    ...salon.tags,
    ...salon.stylists.flatMap((stylist) => [
      stylist.title,
      stylist.bio,
      ...stylist.specialty,
      ...stylist.pricing.map((item) => item.name),
      ...stylist.portfolio.map((item) => item.title),
      ...stylist.portfolio.map((item) => item.tag),
    ]),
  ]
    .join(" ")
    .toLowerCase();
}

export function matchesService(salon: Salon, service: string): boolean {
  if (!service || service === "all") {
    return true;
  }

  const normalized = service as Exclude<ServiceValue, "all">;
  const keywords = serviceMatchers[normalized];

  if (!keywords) {
    return true;
  }

  const corpus = getSearchCorpus(salon);
  return keywords.some((keyword) => corpus.includes(keyword.toLowerCase()));
}

export function matchesDistrict(salon: Salon, district?: string): boolean {
  if (!district || district === "all") {
    return true;
  }

  return salon.district === district;
}

export function getStartingPrice(salon: Salon): number {
  return Math.min(...salon.stylists.flatMap((stylist) => stylist.pricing.map((item) => item.priceTwd)));
}

export function getEarliestAvailableLabel(salon: Salon): string {
  const available = salon.stylists.flatMap((stylist) =>
    stylist.bookingSlots.filter((slot) => slot.available).map((slot) => slot.label),
  );

  return available[0] ?? "請先登入查看";
}

function rankAvailability(label: string): number {
  if (label.includes("今天")) return 0;
  if (label.includes("明天")) return 1;
  if (label.includes("週五")) return 2;
  if (label.includes("週六")) return 3;
  if (label.includes("週日")) return 4;
  return 9;
}

export function sortSalons(salons: Salon[], sort: string): Salon[] {
  const cloned = [...salons];

  switch (sort) {
    case "rating":
      return cloned.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    case "availability":
      return cloned.sort(
        (a, b) =>
          rankAvailability(getEarliestAvailableLabel(a)) - rankAvailability(getEarliestAvailableLabel(b)),
      );
    case "price_asc":
      return cloned.sort((a, b) => getStartingPrice(a) - getStartingPrice(b));
    case "price_desc":
      return cloned.sort((a, b) => getStartingPrice(b) - getStartingPrice(a));
    case "recommended":
    default:
      return cloned.sort((a, b) => b.reviewCount - a.reviewCount || b.rating - a.rating);
  }
}

export function getDistrictOptions(region: Region, salons: Salon[]): string[] {
  const fromData = new Set(region.featuredDistricts);
  salons.forEach((salon) => fromData.add(salon.district));
  return Array.from(fromData);
}
