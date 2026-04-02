import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ai-test-automation-seo-git-main-upwork-product.vercel.app/sitemap.xml",
  };
}
