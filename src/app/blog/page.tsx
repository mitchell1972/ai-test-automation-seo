import { Metadata } from "next";
import Link from "next/link";
import { getLatestPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "AI Test Automation Blog | AI Test Automation Hub",
  description:
    "Read about AI test automation, SDET interview preparation, Playwright + Claude AI, manual QA to SDET career transitions, and the future of software testing.",
  keywords: [
    "AI test automation blog",
    "SDET interview blog",
    "test automation blog",
    "Playwright AI blog",
    "SDET career blog",
    "QA to automation blog",
  ],
  openGraph: {
    title: "AI Test Automation Blog | AI Test Automation Hub",
    description:
      "Articles on AI test automation, SDET interview prep, Playwright + Claude AI, and career transitions in software testing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Test Automation Blog | AI Test Automation Hub",
    description:
      "Articles on AI test automation, SDET interview prep, Playwright + Claude AI, and career transitions in software testing.",
  },
  alternates: {
    canonical: "https://www.aitestplaybook.com/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getLatestPosts();

  return (
    <article className="seo-page">
      <header className="page-header">
        <h1>AI Test Automation Blog</h1>
        <p className="page-subtitle">
          Deep dives into AI-powered test automation, SDET interview preparation,
          career transitions from manual QA, and the future of software testing.
        </p>
      </header>

      <section className="content-section">
        {posts.length === 0 ? (
          <p>No posts yet. Check back soon.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {posts.map((post) => (
              <article
                key={post.slug}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  background: "#fff",
                }}
              >
                <time
                  dateTime={post.date}
                  style={{
                    fontSize: "0.8rem",
                    color: "#64748b",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: "#1a365d", textDecoration: "none" }}
                  >
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: "#475569", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    color: "#2563eb",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                  }}
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
