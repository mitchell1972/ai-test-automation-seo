import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/seo-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Test Automation Hub | Playwright + Claude AI + MCP",
    template: "%s | AI Test Automation Hub",
  },
  description:
    "Master AI-powered test automation with Playwright, Claude AI, and MCP. Get the playbook used by 8+ year SDET veterans to automate testing at scale.",
  keywords: [
    "AI test automation",
    "Playwright",
    "Claude AI",
    "MCP",
    "test automation",
    "software testing",
    "QA automation",
    "AI testing",
    "automated testing",
    "Playwright tutorial",
  ],
  authors: [{ name: SITE_CONFIG.author }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <nav className="site-nav">
            <Link href="/" className="site-logo">
              <span className="logo-icon">🤖</span>
              <span className="logo-text">AI Test Automation Hub</span>
            </Link>
            <div className="nav-links">
              <Link href="/#industries">Industries</Link>
              <Link href="/#roles">Roles</Link>
              <Link href="/#tools">Tools</Link>
              <Link href="/#use-cases">Use Cases</Link>
              <a
                href={SITE_CONFIG.ctaUrl}
                className="nav-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the Playbook
              </a>
            </div>
          </nav>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-grid">
              <div className="footer-col">
                <h3>AI Test Automation Hub</h3>
                <p>
                  The definitive resource for AI-powered test automation with
                  Playwright, Claude AI, and MCP.
                </p>
              </div>
              <div className="footer-col">
                <h4>By Industry</h4>
                <Link href="/industry/healthcare">Healthcare</Link>
                <Link href="/industry/fintech">Fintech</Link>
                <Link href="/industry/ecommerce">E-Commerce</Link>
                <Link href="/industry/saas">SaaS</Link>
                <Link href="/industry/banking">Banking</Link>
              </div>
              <div className="footer-col">
                <h4>By Role</h4>
                <Link href="/role/qa-engineers">QA Engineers</Link>
                <Link href="/role/sdets">SDETs</Link>
                <Link href="/role/developers">Developers</Link>
                <Link href="/role/ctos">CTOs</Link>
                <Link href="/role/devops-engineers">DevOps</Link>
              </div>
              <div className="footer-col">
                <h4>By Use Case</h4>
                <Link href="/use-case/regression-testing">Regression Testing</Link>
                <Link href="/use-case/api-testing">API Testing</Link>
                <Link href="/use-case/e2e-testing">E2E Testing</Link>
                <Link href="/use-case/performance-testing">Performance Testing</Link>
                <Link href="/use-case/autonomous-testing">Autonomous Testing</Link>
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                Created by {SITE_CONFIG.author} &mdash; {SITE_CONFIG.authorTitle}
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
