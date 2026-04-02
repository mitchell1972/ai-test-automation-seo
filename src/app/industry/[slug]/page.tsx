import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, roles, useCases, SITE_CONFIG } from "@/data/seo-data";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPages from "@/components/RelatedPages";
import FAQSection from "@/components/FAQSection";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  const title = `AI Test Automation for ${industry.name} | ${SITE_CONFIG.name}`;
  const description = `Learn how AI-powered test automation transforms ${industry.name} software testing. Playwright, Claude AI, and MCP for ${industry.testTypes.join(", ").toLowerCase()}.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `${SITE_CONFIG.domain}/industry/${slug}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const faqs = [
    {
      question: `What are the biggest testing challenges in ${industry.name}?`,
      answer: `The main testing challenges in ${industry.name} include ${industry.painPoints.join(", ")}. AI test automation addresses these by providing intelligent test generation, self-healing scripts, and comprehensive coverage.`,
    },
    {
      question: `How does AI test automation help ${industry.name} companies?`,
      answer: `AI test automation helps ${industry.name} companies by automating ${industry.testTypes.join(", ").toLowerCase()}, reducing manual testing effort by up to 80%, and catching bugs before they reach production.`,
    },
    {
      question: `What tools are best for ${industry.name} test automation?`,
      answer: `The AI Test Automation Playbook recommends Playwright with TypeScript for browser automation, Claude AI for intelligent test generation, and MCP (Model Context Protocol) for autonomous testing — a combination ideal for ${industry.name}.`,
    },
    ...(industry.regulations ? [{
      question: `How do you automate compliance testing for ${industry.regulations}?`,
      answer: `AI test automation can validate ${industry.regulations} compliance by generating compliance-focused test cases, automating audit trail validation, and continuously monitoring regulatory requirements. The playbook includes specific strategies for regulated industries.`,
    }] : []),
    {
      question: `How long does it take to implement AI test automation in ${industry.name}?`,
      answer: `The AI Test Automation Playbook includes a 30-day implementation roadmap. Most ${industry.name} teams see initial results within the first week and full ROI within 30 days.`,
    },
  ];

  const relatedIndustries = industries
    .filter((i) => i.slug !== slug)
    .slice(0, 6)
    .map((i) => ({ href: `/industry/${i.slug}`, title: `AI Testing for ${i.name}`, emoji: i.emoji }));

  const relatedRoles = roles
    .slice(0, 4)
    .map((r) => ({ href: `/role/${r.slug}`, title: `AI Testing for ${r.name}`, emoji: r.emoji }));

  const relatedUseCases = useCases
    .filter((u) => industry.testTypes.some((t) => u.name.toLowerCase().includes(t.split(" ")[0].toLowerCase())))
    .slice(0, 4)
    .map((u) => ({ href: `/use-case/${u.slug}`, title: u.name, emoji: u.emoji }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `AI Test Automation for ${industry.name}`,
    author: { "@type": "Person", name: SITE_CONFIG.author },
    description: industry.description,
  };

  return (
    <article className="seo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <Breadcrumbs items={[{ label: "Industries", href: "/#industries" }, { label: industry.name }]} />

      <header className="page-header">
        <span className="page-emoji">{industry.emoji}</span>
        <h1>AI Test Automation for {industry.name}</h1>
        <p className="page-subtitle">{industry.description}</p>
      </header>

      <section className="content-section">
        <h2>Testing Challenges in {industry.name}</h2>
        <p>
          {industry.name} software teams face unique testing challenges that traditional approaches
          struggle to address. As applications grow more complex and regulations tighten, manual testing
          and basic automation frameworks fall short.
        </p>
        <div className="challenge-grid">
          {industry.painPoints.map((point, i) => (
            <div key={i} className="challenge-card">
              <h3>{point}</h3>
              <p>
                AI-powered test automation with Playwright and Claude AI addresses {point.toLowerCase()} through
                intelligent test generation, autonomous validation, and continuous monitoring.
              </p>
            </div>
          ))}
        </div>
      </section>

      {industry.regulations && (
        <section className="content-section">
          <h2>Compliance & Regulatory Testing for {industry.regulations}</h2>
          <p>
            {industry.name} is governed by {industry.regulations}. AI test automation helps ensure compliance by:
          </p>
          <ul>
            <li>Automatically generating compliance test cases from regulatory requirements</li>
            <li>Continuously monitoring compliance across every deployment</li>
            <li>Creating audit-ready test reports with full traceability</li>
            <li>Validating data handling, security, and access controls</li>
          </ul>
        </section>
      )}

      <section className="content-section">
        <h2>Key Testing Types for {industry.name}</h2>
        <div className="test-type-grid">
          {industry.testTypes.map((type, i) => (
            <div key={i} className="test-type-card">
              <h3>{type}</h3>
              <p>
                AI-powered {type.toLowerCase()} for {industry.name} ensures comprehensive coverage with
                intelligent test generation, self-healing scripts, and MCP-driven autonomous execution.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Industry Leaders Using AI Test Automation</h2>
        <p>
          Companies like {industry.examples.join(", ")} are already leveraging AI-powered testing to
          ship faster with higher quality. The AI Test Automation Playbook teaches you the same
          techniques used by leading {industry.name} companies.
        </p>
      </section>

      <CTASection context={`Your ${industry.name} Testing`} />

      <section className="content-section">
        <h2>What You&apos;ll Learn for {industry.name} Testing</h2>
        <div className="learn-grid">
          <div className="learn-card">
            <h3>Playwright Setup</h3>
            <p>Production-ready Playwright configuration with TypeScript, optimized for {industry.name} testing scenarios.</p>
          </div>
          <div className="learn-card">
            <h3>Claude AI Integration</h3>
            <p>10+ AI prompts tailored for generating {industry.name} test cases, test data, and validation logic.</p>
          </div>
          <div className="learn-card">
            <h3>MCP Deep Dive</h3>
            <p>Autonomous testing with Model Context Protocol for 24/7 {industry.name} quality assurance.</p>
          </div>
          <div className="learn-card">
            <h3>CI/CD Pipeline</h3>
            <p>GitHub Actions pipeline setup for continuous {industry.name} testing and deployment validation.</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} topic={industry.name} />

      <RelatedPages pages={relatedIndustries} title="AI Testing for Other Industries" />
      <RelatedPages pages={relatedRoles} title="AI Testing by Role" />
      {relatedUseCases.length > 0 && (
        <RelatedPages pages={relatedUseCases} title="Related Testing Use Cases" />
      )}
    </article>
  );
}
