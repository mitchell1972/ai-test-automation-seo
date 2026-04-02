import { Metadata } from "next";
import { notFound } from "next/navigation";
import { tools, roles, useCases, SITE_CONFIG } from "@/data/seo-data";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPages from "@/components/RelatedPages";
import FAQSection from "@/components/FAQSection";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};

  const title = `AI Test Automation with ${tool.name} | Upgrade to Playwright + Claude AI`;
  const description = `Move beyond ${tool.name} limitations with AI-powered test automation. ${tool.aiEnhancements[0]}, ${tool.aiEnhancements[1]}, and more with Playwright + Claude AI.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `${SITE_CONFIG.domain}/tool/${slug}` },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const isPlaywright = tool.slug === "playwright";

  const faqs = [
    {
      question: isPlaywright
        ? `How does AI enhance Playwright testing?`
        : `Should I switch from ${tool.name} to Playwright?`,
      answer: isPlaywright
        ? `AI enhances Playwright through ${tool.aiEnhancements.join(", ").toLowerCase()}. Claude AI generates test code, MCP enables autonomous execution, and intelligent patterns reduce maintenance.`
        : `${tool.name} has limitations including ${tool.limitations.join(", ").toLowerCase()}. Playwright with AI addresses all of these while adding ${tool.aiEnhancements[0].toLowerCase()} and ${tool.aiEnhancements[1].toLowerCase()}.`,
    },
    {
      question: `What are the limitations of ${tool.name}?`,
      answer: `Common ${tool.name} limitations include ${tool.limitations.join(", ").toLowerCase()}. AI-powered test automation with Playwright addresses these through modern architecture and AI capabilities.`,
    },
    {
      question: `How does AI improve ${tool.name} testing workflows?`,
      answer: `AI improves testing workflows by providing ${tool.aiEnhancements.join(", ").toLowerCase()}. The AI Test Automation Playbook teaches you how to leverage these capabilities step by step.`,
    },
    {
      question: `How long does it take to migrate from ${tool.name} to AI test automation?`,
      answer: `The playbook's 30-day roadmap covers migration from any framework including ${tool.name}. Most teams see initial results within the first week with full migration in 30 days.`,
    },
  ];

  const relatedTools = tools
    .filter((t) => t.slug !== slug)
    .slice(0, 6)
    .map((t) => ({ href: `/tool/${t.slug}`, title: `AI Testing vs ${t.name}`, emoji: t.emoji }));

  const relatedRoles = roles
    .slice(0, 4)
    .map((r) => ({ href: `/role/${r.slug}`, title: `AI Testing for ${r.name}`, emoji: r.emoji }));

  const relatedUseCases = useCases
    .slice(0, 4)
    .map((u) => ({ href: `/use-case/${u.slug}`, title: u.name, emoji: u.emoji }));

  return (
    <article className="seo-page">
      <Breadcrumbs items={[{ label: "Tools", href: "/#tools" }, { label: tool.name }]} />

      <header className="page-header">
        <span className="page-emoji">{tool.emoji}</span>
        <h1>
          {isPlaywright
            ? `Supercharge ${tool.name} with AI Test Automation`
            : `${tool.name} vs AI-Powered Playwright Testing`}
        </h1>
        <p className="page-subtitle">{tool.description}</p>
      </header>

      <section className="content-section">
        <h2>{tool.name} Limitations</h2>
        <p>
          {tool.name} {isPlaywright ? "is powerful but" : ""} has known limitations that teams struggle
          with as their testing needs grow:
        </p>
        <div className="challenge-grid">
          {tool.limitations.map((limitation, i) => (
            <div key={i} className="challenge-card">
              <h3>{limitation}</h3>
              <p>
                AI test automation {isPlaywright ? "solves" : "eliminates"} {limitation.toLowerCase()} through
                intelligent automation and modern testing patterns.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>AI-Powered Enhancements {isPlaywright ? "for" : "Over"} {tool.name}</h2>
        <div className="benefit-grid">
          {tool.aiEnhancements.map((enhancement, i) => (
            <div key={i} className="benefit-card">
              <span className="benefit-check">🚀</span>
              <div>
                <h3>{enhancement}</h3>
                <p>
                  {enhancement} {isPlaywright ? "takes your Playwright tests to the next level" : `replaces ${tool.name}'s approach`} with
                  Claude AI and MCP-driven automation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {!isPlaywright && (
        <section className="content-section">
          <h2>{tool.name} to Playwright Migration Path</h2>
          <p>Migrating from {tool.name} to AI-powered Playwright testing follows a clear path:</p>
          <ol className="migration-steps">
            <li><strong>Week 1:</strong> Set up Playwright with TypeScript alongside {tool.name}</li>
            <li><strong>Week 2:</strong> Integrate Claude AI for test generation from existing {tool.name} tests</li>
            <li><strong>Week 3:</strong> Implement MCP for autonomous test maintenance</li>
            <li><strong>Week 4:</strong> Complete migration with CI/CD pipeline integration</li>
          </ol>
        </section>
      )}

      <CTASection context={`Your ${tool.name} Testing`} />

      <section className="content-section">
        <h2>Comparison: {tool.name} vs Playwright + AI</h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>{tool.name}</th>
                <th>Playwright + AI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test Generation</td>
                <td>Manual</td>
                <td>AI-powered with Claude</td>
              </tr>
              <tr>
                <td>Test Maintenance</td>
                <td>Manual updates</td>
                <td>Self-healing with MCP</td>
              </tr>
              <tr>
                <td>Browser Support</td>
                <td>{tool.slug === "cypress" ? "Limited" : tool.slug === "puppeteer" ? "Chrome only" : "Varies"}</td>
                <td>Chrome, Firefox, Safari, Edge</td>
              </tr>
              <tr>
                <td>Execution Speed</td>
                <td>{tool.slug === "selenium" ? "Slower" : "Standard"}</td>
                <td>3x faster with auto-wait</td>
              </tr>
              <tr>
                <td>AI Integration</td>
                <td>None / Limited</td>
                <td>Native Claude AI + MCP</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td>{tool.slug === "katalon" ? "Licensed" : "Free"}</td>
                <td>Free + open source</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <FAQSection faqs={faqs} topic={tool.name} />

      <RelatedPages pages={relatedTools} title="Compare Other Testing Tools" />
      <RelatedPages pages={relatedRoles} title="AI Testing by Role" />
      <RelatedPages pages={relatedUseCases} title="Testing Use Cases" />
    </article>
  );
}
