import { Metadata } from "next";
import { notFound } from "next/navigation";
import { companySizes, industries, roles, SITE_CONFIG } from "@/data/seo-data";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPages from "@/components/RelatedPages";
import FAQSection from "@/components/FAQSection";

export function generateStaticParams() {
  return companySizes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const company = companySizes.find((c) => c.slug === slug);
  if (!company) return {};

  const title = `AI Test Automation for ${company.name} | ${SITE_CONFIG.name}`;
  const description = `AI test automation strategy for ${company.name.toLowerCase()}. ${company.approach[0]}, ${company.approach[1]}. Playwright + Claude AI + MCP.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = companySizes.find((c) => c.slug === slug);
  if (!company) notFound();

  const faqs = [
    {
      question: `Is AI test automation right for ${company.name.toLowerCase()}?`,
      answer: `Absolutely. ${company.description} The playbook's 30-day roadmap is adaptable to ${company.name.toLowerCase()} of any size.`,
    },
    {
      question: `What challenges do ${company.name.toLowerCase()} face with testing?`,
      answer: `${company.name} typically face ${company.challenges.join(", ").toLowerCase()}. AI test automation addresses each of these with practical, scalable solutions.`,
    },
    {
      question: `What's the best approach for ${company.name.toLowerCase()}?`,
      answer: `For ${company.name.toLowerCase()}, we recommend ${company.approach.join(", ").toLowerCase()}. The playbook provides the exact implementation strategy.`,
    },
  ];

  const relatedCompanies = companySizes
    .filter((c) => c.slug !== slug)
    .map((c) => ({ href: `/company/${c.slug}`, title: `AI Testing for ${c.name}`, emoji: c.emoji }));

  const relatedIndustries = industries
    .slice(0, 4)
    .map((i) => ({ href: `/industry/${i.slug}`, title: `AI Testing in ${i.name}`, emoji: i.emoji }));

  const relatedRoles = roles
    .slice(0, 4)
    .map((r) => ({ href: `/role/${r.slug}`, title: `AI Testing for ${r.name}`, emoji: r.emoji }));

  return (
    <article className="seo-page">
      <Breadcrumbs items={[{ label: "Company Size", href: "/#company" }, { label: company.name }]} />

      <header className="page-header">
        <span className="page-emoji">{company.emoji}</span>
        <h1>AI Test Automation for {company.name}</h1>
        <p className="page-subtitle">{company.description}</p>
      </header>

      <section className="content-section">
        <h2>Testing Challenges for {company.name}</h2>
        <div className="challenge-grid">
          {company.challenges.map((challenge, i) => (
            <div key={i} className="challenge-card">
              <h3>{challenge}</h3>
              <p>AI test automation directly addresses {challenge.toLowerCase()} with intelligent, scalable solutions.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Recommended Approach for {company.name}</h2>
        <div className="benefit-grid">
          {company.approach.map((item, i) => (
            <div key={i} className="benefit-card">
              <span className="benefit-check">✅</span>
              <div>
                <h3>{item}</h3>
                <p>The playbook provides step-by-step implementation of {item.toLowerCase()} tailored for {company.name.toLowerCase()}.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection context={`Your ${company.name.replace(/s$/, "")} Team`} />

      <FAQSection faqs={faqs} topic={company.name} />

      <RelatedPages pages={relatedCompanies} title="AI Testing by Company Size" />
      <RelatedPages pages={relatedIndustries} title="AI Testing by Industry" />
      <RelatedPages pages={relatedRoles} title="AI Testing by Role" />
    </article>
  );
}
