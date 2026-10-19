import type { MetadataRoute } from "next";
import { CATALOG_SITE } from "@/lib/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${CATALOG_SITE}/sitemap.xml`,
  };
}
