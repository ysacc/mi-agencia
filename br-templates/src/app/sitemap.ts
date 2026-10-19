import type { MetadataRoute } from "next";
import { CATALOG_SITE } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${CATALOG_SITE}/`, changeFrequency: "monthly", priority: 1 }];
}
