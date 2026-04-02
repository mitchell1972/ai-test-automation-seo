import Link from "next/link";

interface RelatedPage {
  href: string;
  title: string;
  emoji: string;
}

export default function RelatedPages({ pages, title }: { pages: RelatedPage[]; title: string }) {
  return (
    <section className="related-pages">
      <h2>{title}</h2>
      <div className="related-grid">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="related-card">
            <span className="related-emoji">{page.emoji}</span>
            <span className="related-title">{page.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
