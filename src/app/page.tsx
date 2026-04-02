import Link from "next/link";
import { industries, roles, tools, useCases, companySizes, getTotalPageCount, SITE_CONFIG } from "@/data/seo-data";

export default function Home() {
  const totalPages = getTotalPageCount();

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    description: "The definitive resource for AI-powered test automation with Playwright, Claude AI, and MCP.",
    author: { "@type": "Person", name: SITE_CONFIG.author, jobTitle: SITE_CONFIG.authorTitle },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1>
            AI Test Automation
            <span className="hero-highlight"> for Every Team</span>
          </h1>
          <p className="hero-subtitle">
            {totalPages}+ guides on AI-powered test automation with <strong>Playwright</strong>,{" "}
            <strong>Claude AI</strong>, and <strong>MCP</strong>. Find your industry, role, or use
            case below.
          </p>
          <a
            href={SITE_CONFIG.ctaUrl}
            className="cta-button hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the AI Test Automation Playbook &mdash; {SITE_CONFIG.price}
          </a>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">{industries.length}</span>
              <span className="stat-label">Industries</span>
            </div>
            <div className="stat">
              <span className="stat-value">{roles.length}</span>
              <span className="stat-label">Roles</span>
            </div>
            <div className="stat">
              <span className="stat-value">{tools.length}</span>
              <span className="stat-label">Tools</span>
            </div>
            <div className="stat">
              <span className="stat-value">{useCases.length}</span>
              <span className="stat-label">Use Cases</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="index-section" id="industries">
        <h2>AI Test Automation by Industry</h2>
        <p className="section-subtitle">
          Every industry has unique testing challenges. Find yours and learn how AI automation solves them.
        </p>
        <div className="card-grid">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industry/${industry.slug}`} className="index-card">
              <span className="card-emoji">{industry.emoji}</span>
              <h3>{industry.name}</h3>
              <p>{industry.painPoints[0]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="index-section" id="roles">
        <h2>AI Test Automation by Role</h2>
        <p className="section-subtitle">
          Whether you are a QA Engineer, SDET, Developer, or CTO &mdash; AI testing transforms your workflow.
        </p>
        <div className="card-grid">
          {roles.map((role) => (
            <Link key={role.slug} href={`/role/${role.slug}`} className="index-card">
              <span className="card-emoji">{role.emoji}</span>
              <h3>{role.name}</h3>
              <p>{role.benefits[0]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="index-section" id="tools">
        <h2>AI Test Automation vs Popular Tools</h2>
        <p className="section-subtitle">
          See how AI-powered Playwright compares to your current testing framework.
        </p>
        <div className="card-grid">
          {tools.map((tool) => (
            <Link key={tool.slug} href={`/tool/${tool.slug}`} className="index-card">
              <span className="card-emoji">{tool.emoji}</span>
              <h3>{tool.name}</h3>
              <p>{tool.aiEnhancements[0]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="index-section" id="use-cases">
        <h2>AI Test Automation Use Cases</h2>
        <p className="section-subtitle">
          From regression testing to autonomous testing with MCP &mdash; AI transforms every testing practice.
        </p>
        <div className="card-grid">
          {useCases.map((useCase) => (
            <Link key={useCase.slug} href={`/use-case/${useCase.slug}`} className="index-card">
              <span className="card-emoji">{useCase.emoji}</span>
              <h3>{useCase.name}</h3>
              <p>{useCase.metrics[0]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Company Size */}
      <section className="index-section" id="company">
        <h2>AI Test Automation by Company Size</h2>
        <p className="section-subtitle">
          The right approach depends on your team size and stage. Find your fit.
        </p>
        <div className="card-grid">
          {companySizes.map((company) => (
            <Link key={company.slug} href={`/company/${company.slug}`} className="index-card">
              <span className="card-emoji">{company.emoji}</span>
              <h3>{company.name}</h3>
              <p>{company.approach[0]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section className="index-section whats-inside">
        <h2>What&apos;s Inside the AI Test Automation Playbook</h2>
        <div className="inside-grid">
          <div className="inside-card">
            <h3>🎭 Playwright Setup</h3>
            <p>Production-ready Playwright configuration with TypeScript code examples you can use immediately.</p>
          </div>
          <div className="inside-card">
            <h3>🤖 Claude AI Integration</h3>
            <p>AI-powered testing strategies using Claude for intelligent test generation, debugging, and maintenance.</p>
          </div>
          <div className="inside-card">
            <h3>🔗 MCP Deep Dive</h3>
            <p>Model Context Protocol for autonomous testing &mdash; the cutting edge of AI-powered QA.</p>
          </div>
          <div className="inside-card">
            <h3>📐 Page Object Model</h3>
            <p>Advanced architecture patterns and Page Object Model design for scalable test suites.</p>
          </div>
          <div className="inside-card">
            <h3>💡 10+ AI Prompts</h3>
            <p>Ready-to-use AI prompts for test generation that you can copy and paste into Claude.</p>
          </div>
          <div className="inside-card">
            <h3>🚀 CI/CD Pipeline</h3>
            <p>GitHub Actions setup for continuous testing, deployment validation, and automated reporting.</p>
          </div>
          <div className="inside-card">
            <h3>📅 30-Day Roadmap</h3>
            <p>Step-by-step implementation plan from zero to fully autonomous AI-powered testing.</p>
          </div>
          <div className="inside-card">
            <h3>♿ Accessibility & Performance</h3>
            <p>Performance, accessibility, and visual regression testing with AI-powered analysis.</p>
          </div>
        </div>
        <div className="inside-cta">
          <a
            href={SITE_CONFIG.ctaUrl}
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the Playbook &mdash; {SITE_CONFIG.price}
          </a>
          <p>
            By {SITE_CONFIG.author}, {SITE_CONFIG.authorTitle} with {SITE_CONFIG.authorExp} of experience
          </p>
        </div>
      </section>
    </>
  );
}
