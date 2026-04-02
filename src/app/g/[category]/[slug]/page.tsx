import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCombinations,
  getCombinationBySlug,
  getCombinationCategories,
} from "@/data/expanded-combinations";
import { SITE_CONFIG } from "@/data/seo-data";
import { generatePageContent } from "@/data/content-engine";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPages from "@/components/RelatedPages";

export function generateStaticParams() {
  const combos = getAllCombinations();
  return combos.map((c) => ({
    category: c.category,
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const page = getCombinationBySlug(category, slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    openGraph: { title: page.title, description: page.description, type: "article" },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default async function CombinationPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const page = getCombinationBySlug(category, slug);
  if (!page) notFound();

  // Generate unique content for this page
  const contentBlocks = generatePageContent(page.items, category, slug);

  // Build related pages
  const categories = getCombinationCategories();
  const currentCat = categories.find((c) => c.category === category);

  const relatedSameCategory = getAllCombinations()
    .filter(
      (c) =>
        c.category === category &&
        c.slug !== slug &&
        c.items.some((item) => page.items.includes(item))
    )
    .slice(0, 6)
    .map((c) => ({
      href: `/g/${c.category}/${c.slug}`,
      title: c.title.length > 50 ? c.title.substring(0, 47) + "..." : c.title,
      emoji: "📖",
    }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    author: { "@type": "Person", name: SITE_CONFIG.author },
    description: page.description,
  };

  const faqBlock = contentBlocks.find((b) => b.type === "faq");
  const faqSchema = faqBlock?.items
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqBlock.items.map((item) => ({
          "@type": "Question",
          name: item.title,
          acceptedAnswer: { "@type": "Answer", text: item.description },
        })),
      }
    : null;

  return (
    <article className="seo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Breadcrumbs
        items={page.breadcrumbs
          .filter((b) => b.label !== "Home")
          .map((b) => ({ label: b.label, href: b.href }))}
      />

      <header className="page-header">
        <h1>{page.title}</h1>
        <p className="page-subtitle">{page.description}</p>
      </header>

      {contentBlocks.map((block, blockIdx) => {
        switch (block.type) {
          case "intro":
            return (
              <section key={blockIdx} className="content-section">
                <p>{block.content}</p>
              </section>
            );

          case "challenges":
            return (
              <section key={blockIdx} className="content-section">
                <h2>{block.title}</h2>
                <p>{block.content}</p>
                <div className="challenge-grid">
                  {block.items?.map((item, i) => (
                    <div key={i} className="challenge-card">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "solutions":
            return (
              <section key={blockIdx} className="content-section">
                <h2>{block.title}</h2>
                <p>{block.content}</p>
                <div className="benefit-grid">
                  {block.items?.map((item, i) => (
                    <div key={i} className="benefit-card">
                      <span className="benefit-check">🤖</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "comparison":
            return (
              <section key={blockIdx} className="content-section">
                <h2>{block.title}</h2>
                <p>{block.content}</p>
                <div className="comparison-table-wrapper">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Before</th>
                        <th>With AI + Playwright</th>
                      </tr>
                    </thead>
                    <tbody>
                      {block.tableRows?.map((row, i) => (
                        <tr key={i}>
                          <td><strong>{row.feature}</strong></td>
                          <td>{row.before}</td>
                          <td>{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );

          case "timeline":
            return (
              <section key={blockIdx} className="content-section">
                <h2>{block.title}</h2>
                <p>{block.content}</p>
                <div className="timeline">
                  {block.steps?.map((step, i) => (
                    <div key={i} className="timeline-step">
                      <div className="timeline-week">{step.week}</div>
                      <div className="timeline-content">
                        <h3>{step.action}</h3>
                        <p>{step.outcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "metrics":
            return (
              <section key={blockIdx} className="content-section">
                <h2>{block.title}</h2>
                <p>{block.content}</p>
                <div className="metrics-grid">
                  {block.items?.map((item, i) => (
                    <div key={i} className="metric-card">
                      <span className="metric-value">{item.title}</span>
                      <p style={{ fontSize: "0.8rem", marginTop: "0.5rem", color: "#64748b" }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "checklist":
            return (
              <section key={blockIdx} className="content-section">
                <h2>{block.title}</h2>
                <p>{block.content}</p>
                <div className="benefit-grid">
                  {block.items?.map((item, i) => (
                    <div key={i} className="benefit-card">
                      <span className="benefit-check">✅</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "faq":
            return (
              <section key={blockIdx} className="faq-section">
                <h2>{block.title}</h2>
                <div className="faq-list">
                  {block.items?.map((item, i) => (
                    <details key={i} className="faq-item">
                      <summary>{item.title}</summary>
                      <p>{item.description}</p>
                    </details>
                  ))}
                </div>
              </section>
            );

          default:
            return null;
        }
      })}

      <CTASection context="Your Testing" />

      {relatedSameCategory.length > 0 && (
        <RelatedPages
          pages={relatedSameCategory}
          title={`More ${currentCat?.label || "Related"} Guides`}
        />
      )}
    </article>
  );
}
