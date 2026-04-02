import { Metadata } from "next";
import { notFound } from "next/navigation";
import { roles, industries, tools, SITE_CONFIG } from "@/data/seo-data";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPages from "@/components/RelatedPages";
import FAQSection from "@/components/FAQSection";

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) return {};

  const title = `AI Test Automation for ${role.name} | ${SITE_CONFIG.name}`;
  const description = `${role.name}: Learn AI-powered test automation with Playwright, Claude AI, and MCP. ${role.benefits[0]}, ${role.benefits[1]}, and more.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `${SITE_CONFIG.domain}/role/${slug}` },
  };
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) notFound();

  const faqs = [
    {
      question: `Why should ${role.name} learn AI test automation?`,
      answer: `${role.name} benefit from AI test automation through ${role.benefits.join(", ").toLowerCase()}. These skills are increasingly demanded by employers and directly impact career growth.`,
    },
    {
      question: `What challenges do ${role.name} face with testing?`,
      answer: `Common challenges for ${role.name} include ${role.challenges.join(", ").toLowerCase()}. AI test automation with Playwright and Claude AI directly addresses each of these pain points.`,
    },
    {
      question: `Is the AI Test Automation Playbook right for ${role.name}?`,
      answer: `Yes! The playbook is designed for ${role.name} with practical, hands-on content including Playwright setup, Claude AI prompts, MCP integration, and a 30-day implementation roadmap tailored to your role.`,
    },
    {
      question: `How quickly can ${role.name} implement AI test automation?`,
      answer: `The playbook includes a 30-day implementation roadmap. Most ${role.name} can run their first AI-generated tests within the first week and have a comprehensive suite running within 30 days.`,
    },
    {
      question: `What's the ROI of AI test automation for ${role.name}?`,
      answer: `${role.name} typically see 40-80% reduction in test creation time, 60% less maintenance effort, and significantly higher test coverage. The ${SITE_CONFIG.price} investment pays for itself in the first week.`,
    },
  ];

  const relatedRoles = roles
    .filter((r) => r.slug !== slug)
    .slice(0, 6)
    .map((r) => ({ href: `/role/${r.slug}`, title: `AI Testing for ${r.name}`, emoji: r.emoji }));

  const relatedIndustries = industries
    .slice(0, 4)
    .map((i) => ({ href: `/industry/${i.slug}`, title: `AI Testing in ${i.name}`, emoji: i.emoji }));

  const relatedTools = tools
    .slice(0, 4)
    .map((t) => ({ href: `/tool/${t.slug}`, title: `AI Testing with ${t.name}`, emoji: t.emoji }));

  return (
    <article className="seo-page">
      <Breadcrumbs items={[{ label: "Roles", href: "/#roles" }, { label: role.name }]} />

      <header className="page-header">
        <span className="page-emoji">{role.emoji}</span>
        <h1>AI Test Automation for {role.name}</h1>
        <p className="page-subtitle">{role.description}</p>
      </header>

      <section className="content-section">
        <h2>Challenges {role.name} Face Today</h2>
        <p>
          As software delivery accelerates, {role.name} face mounting pressure to maintain quality
          without slowing down releases. Traditional approaches are no longer enough.
        </p>
        <div className="challenge-grid">
          {role.challenges.map((challenge, i) => (
            <div key={i} className="challenge-card">
              <h3>{challenge}</h3>
              <p>
                AI test automation eliminates {challenge.toLowerCase()} through intelligent automation,
                self-healing tests, and AI-powered insights.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>How AI Test Automation Benefits {role.name}</h2>
        <div className="benefit-grid">
          {role.benefits.map((benefit, i) => (
            <div key={i} className="benefit-card">
              <span className="benefit-check">✅</span>
              <div>
                <h3>{benefit}</h3>
                <p>
                  The AI Test Automation Playbook shows {role.name} exactly how to achieve{" "}
                  {benefit.toLowerCase()} with step-by-step guides and real-world examples.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection context={`Your ${role.name.replace(/s$/, "")} Workflow`} />

      <section className="content-section">
        <h2>What {role.name} Get in the Playbook</h2>
        <div className="learn-grid">
          <div className="learn-card">
            <h3>Playwright + TypeScript</h3>
            <p>Production-ready setup with code examples designed for how {role.name} actually work.</p>
          </div>
          <div className="learn-card">
            <h3>10+ AI Prompts</h3>
            <p>Ready-to-use Claude AI prompts for test generation, debugging, and maintenance — tailored for {role.name}.</p>
          </div>
          <div className="learn-card">
            <h3>MCP Autonomous Testing</h3>
            <p>Model Context Protocol deep dive for {role.name} who want to build autonomous testing systems.</p>
          </div>
          <div className="learn-card">
            <h3>30-Day Roadmap</h3>
            <p>Step-by-step implementation plan so {role.name} can show results within the first week.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Career Impact for {role.name}</h2>
        <p>
          AI test automation skills are the most in-demand competency in QA and engineering today.
          {role.name} who master Playwright + Claude AI + MCP position themselves for:
        </p>
        <ul>
          <li>Higher compensation — AI testing skills command 20-40% salary premiums</li>
          <li>Leadership roles — lead your team&apos;s AI testing transformation</li>
          <li>Future-proof career — AI-powered testing is the industry direction</li>
          <li>Competitive advantage — stand out in a crowded job market</li>
        </ul>
      </section>

      <FAQSection faqs={faqs} topic={role.name} />

      <RelatedPages pages={relatedRoles} title="AI Testing for Other Roles" />
      <RelatedPages pages={relatedIndustries} title="AI Testing by Industry" />
      <RelatedPages pages={relatedTools} title="AI Testing with Popular Tools" />
    </article>
  );
}
