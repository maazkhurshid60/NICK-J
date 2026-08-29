import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.nickjain.org/sitemap.xml",
    host: "https://www.nickjain.org",
  };
}
