import { MetadataRoute } from "next";
import { industries, roles, tools, useCases, companySizes } from "@/data/seo-data";
import { getAllCombinations } from "@/data/expanded-combinations";

const BASE_URL = "https://www.aitestplaybook.com";
const URLS_PER_SITEMAP = 5000;

// Build the full list of all sitemap entries
function getAllEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  });

  // Industry pages
  for (const industry of industries) {
    entries.push({
      url: `${BASE_URL}/industry/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Role pages
  for (const role of roles) {
    entries.push({
      url: `${BASE_URL}/role/${role.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Tool pages
  for (const tool of tools) {
    entries.push({
      url: `${BASE_URL}/tool/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Use case pages
  for (const useCase of useCases) {
    entries.push({
      url: `${BASE_URL}/use-case/${useCase.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Company size pages
  for (const company of companySizes) {
    entries.push({
      url: `${BASE_URL}/company/${company.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // All combination pages
  const combos = getAllCombinations();
  for (const combo of combos) {
    entries.push({
      url: `${BASE_URL}/g/${combo.category}/${combo.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: combo.items.length === 2 ? 0.7 : 0.6,
    });
  }

  return entries;
}

// Next.js uses this to create a sitemap index with multiple sitemaps
// e.g. /sitemap/0.xml, /sitemap/1.xml, /sitemap/2.xml
export async function generateSitemaps() {
  const totalEntries = getAllEntries().length;
  const numSitemaps = Math.ceil(totalEntries / URLS_PER_SITEMAP);

  return Array.from({ length: numSitemaps }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const allEntries = getAllEntries();
  const start = id * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;

  return allEntries.slice(start, end);
}
