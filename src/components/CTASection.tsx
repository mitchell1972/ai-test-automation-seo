import { SITE_CONFIG } from "@/data/seo-data";

export default function CTASection({ context }: { context: string }) {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2>Ready to Transform {context}?</h2>
        <p>
          The <strong>AI Test Automation Playbook</strong> gives you everything
          you need: Playwright setup, Claude AI integration, MCP deep dive, 10+
          ready-to-use prompts, CI/CD pipeline setup, and a 30-day implementation
          roadmap.
        </p>
        <div className="cta-features">
          <span>✅ Playwright + TypeScript</span>
          <span>✅ Claude AI Prompts</span>
          <span>✅ MCP Deep Dive</span>
          <span>✅ CI/CD with GitHub Actions</span>
          <span>✅ 30-Day Roadmap</span>
          <span>✅ Page Object Patterns</span>
        </div>
        <a
          href={SITE_CONFIG.ctaUrl}
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {SITE_CONFIG.ctaText} — {SITE_CONFIG.price}
        </a>
        <p className="cta-subtext">
          By {SITE_CONFIG.author}, {SITE_CONFIG.authorTitle} with{" "}
          {SITE_CONFIG.authorExp} of experience
        </p>
      </div>
    </section>
  );
}
