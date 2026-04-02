import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCases, industries, roles, SITE_CONFIG } from "@/data/seo-data";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPages from "@/components/RelatedPages";
import FAQSection from "@/components/FAQSection";

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const useCase = useCases.find((u) => u.slug === slug);
  if (!useCase) return {};

  const title = `AI-Powered ${useCase.name} | ${SITE_CONFIG.name}`;
  const description = `Transform ${useCase.name.toLowerCase()} with AI. ${useCase.aiSolutions[0]}, ${useCase.aiSolutions[1]}. Achieve ${useCase.metrics[0].toLowerCase()}.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `${SITE_CONFIG.domain}/use-case/${slug}` },
  };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = useCases.find((u) => u.slug === slug);
  if (!useCase) notFound();

  const faqs = [
    {
      question: `How does AI improve ${useCase.name.toLowerCase()}?`,
      answer: `AI improves ${useCase.name.toLowerCase()} through ${useCase.aiSolutions.join(", ").toLowerCase()}. These capabilities enable teams to achieve ${useCase.metrics[0].toLowerCase()}.`,
    },
    {
      question: `What are the main problems with traditional ${useCase.name.toLowerCase()}?`,
      answer: `Traditional ${useCase.name.toLowerCase()} struggles with ${useCase.problems.join(", ").toLowerCase()}. AI test automation addresses all of these with intelligent, autonomous solutions.`,
    },
    {
      question: `What metrics can I expect from AI-powered ${useCase.name.toLowerCase()}?`,
      answer: `Teams using AI-powered ${useCase.name.toLowerCase()} typically see ${useCase.metrics.join(", ").toLowerCase()}.`,
    },
    {
      question: `What tools do I need for AI ${useCase.name.toLowerCase()}?`,
      answer: `The AI Test Automation Playbook uses Playwright for browser automation, Claude AI for intelligent test generation, and MCP (Model Context Protocol) for autonomous ${useCase.name.toLowerCase()}.`,
    },
  ];

  const relatedUseCases = useCases
    .filter((u) => u.slug !== slug)
    .slice(0, 6)
    .map((u) => ({ href: `/use-case/${u.slug}`, title: `AI ${u.name}`, emoji: u.emoji }));

  const relatedIndustries = industries
    .slice(0, 4)
    .map((i) => ({ href: `/industry/${i.slug}`, title: `${useCase.name} in ${i.name}`, emoji: i.emoji }));

  const relatedRoles = roles
    .slice(0, 4)
    .map((r) => ({ href: `/role/${r.slug}`, title: `${useCase.name} for ${r.name}`, emoji: r.emoji }));

  return (
    <article className="seo-page">
      <Breadcrumbs items={[{ label: "Use Cases", href: "/#use-cases" }, { label: useCase.name }]} />

      <header className="page-header">
        <span className="page-emoji">{useCase.emoji}</span>
        <h1>AI-Powered {useCase.name}</h1>
        <p className="page-subtitle">{useCase.description}</p>
      </header>

      <section className="content-section">
        <h2>The Problem with Traditional {useCase.name}</h2>
        <p>
          Traditional {useCase.name.toLowerCase()} approaches are breaking under the demands of modern
          software development. Teams struggle with fundamental limitations:
        </p>
        <div className="challenge-grid">
          {useCase.problems.map((problem, i) => (
            <div key={i} className="challenge-card">
              <h3>{problem}</h3>
              <p>
                This challenge costs teams hours of productivity every week and leads to
                lower quality releases and delayed deployments.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>AI Solutions for {useCase.name}</h2>
        <div className="benefit-grid">
          {useCase.aiSolutions.map((solution, i) => (
            <div key={i} className="benefit-card">
              <span className="benefit-check">🤖</span>
              <div>
                <h3>{solution}</h3>
                <p>
                  Claude AI and MCP enable {solution.toLowerCase()} for {useCase.name.toLowerCase()} that
                  operates autonomously and improves over time.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Measurable Results</h2>
        <div className="metrics-grid">
          {useCase.metrics.map((metric, i) => (
            <div key={i} className="metric-card">
              <span className="metric-value">{metric}</span>
            </div>
          ))}
        </div>
      </section>

      <CTASection context={`Your ${useCase.name}`} />

      <section className="content-section">
        <h2>How the Playbook Covers {useCase.name}</h2>
        <div className="learn-grid">
          <div className="learn-card">
            <h3>Playwright Implementation</h3>
            <p>Step-by-step Playwright setup optimized for {useCase.name.toLowerCase()} with TypeScript examples.</p>
          </div>
          <div className="learn-card">
            <h3>AI Prompt Library</h3>
            <p>Ready-to-use Claude AI prompts specifically designed for {useCase.name.toLowerCase()} scenarios.</p>
          </div>
          <div className="learn-card">
            <h3>MCP Automation</h3>
            <p>Autonomous {useCase.name.toLowerCase()} using Model Context Protocol for 24/7 coverage.</p>
          </div>
          <div className="learn-card">
            <h3>CI/CD Integration</h3>
            <p>{useCase.name} integrated into your GitHub Actions pipeline for continuous validation.</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} topic={useCase.name} />

      <RelatedPages pages={relatedUseCases} title="Related Testing Use Cases" />
      <RelatedPages pages={relatedIndustries} title={`${useCase.name} by Industry`} />
      <RelatedPages pages={relatedRoles} title={`${useCase.name} by Role`} />
    </article>
  );
}
