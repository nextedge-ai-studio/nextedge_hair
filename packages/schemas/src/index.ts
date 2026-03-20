import { z } from "zod";

export const priceItemSchema = z.object({
  name: z.string(),
  durationMinutes: z.number().int().positive(),
  priceTwd: z.number().int().positive(),
});

export const portfolioItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string().url(),
  tag: z.string(),
  caption: z.string(),
});

export const bookingSlotSchema = z.object({
  id: z.string(),
  label: z.string(),
  available: z.boolean(),
});

export const stylistSchema = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string(),
  specialty: z.array(z.string()).min(1),
  bio: z.string(),
  portrait: z.string().url(),
  nextAvailable: z.string(),
  bookingSlots: z.array(bookingSlotSchema).min(1),
  portfolio: z.array(portfolioItemSchema).min(1),
  pricing: z.array(priceItemSchema).min(1),
});

export const salonSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  regionId: z.string(),
  district: z.string(),
  address: z.string(),
  coverImage: z.string().url(),
  vibe: z.string(),
  rating: z.number().min(0).max(5),
  reviewCount: z.number().int().nonnegative(),
  description: z.string(),
  tags: z.array(z.string()).min(1),
  stylists: z.array(stylistSchema).min(1),
});

export const regionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  heroImage: z.string().url(),
  featuredDistricts: z.array(z.string()).min(1),
  salonCount: z.number().int().nonnegative(),
});

export const platformDataSchema = z.object({
  regions: z.array(regionSchema).min(1),
  salons: z.array(salonSchema).min(1),
});

export type PriceItem = z.infer<typeof priceItemSchema>;
export type PortfolioItem = z.infer<typeof portfolioItemSchema>;
export type BookingSlot = z.infer<typeof bookingSlotSchema>;
export type Stylist = z.infer<typeof stylistSchema>;
export type Salon = z.infer<typeof salonSchema>;
export type Region = z.infer<typeof regionSchema>;
export type PlatformData = z.infer<typeof platformDataSchema>;
