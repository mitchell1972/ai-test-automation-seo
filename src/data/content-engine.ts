// ============================================================
// CONTENT ENGINE
// Generates unique, indexable content for each combination page
// Uses deterministic content variation based on entity properties
// ============================================================

import {
  industries,
  roles,
  tools,
  useCases,
  companySizes,
  Industry,
  Role,
  Tool,
  UseCase,
  CompanySize,
  SITE_CONFIG,
} from "./seo-data";

// Simple deterministic hash for consistent but varied content
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick<T>(arr: T[], hash: number, count: number = 1): T[] {
  const result: T[] = [];
  const len = arr.length;
  for (let i = 0; i < count && i < len; i++) {
    result.push(arr[(hash + i * 7) % len]);
  }
  return result;
}

// ============================================================
// CONTENT BLOCK TYPES
// ============================================================
export interface ContentBlock {
  type: "intro" | "challenges" | "solutions" | "comparison" | "implementation" | "metrics" | "faq" | "checklist" | "timeline" | "testimonial-style";
  title: string;
  content: string;
  items?: { title: string; description: string }[];
  tableRows?: { feature: string; before: string; after: string }[];
  steps?: { week: string; action: string; outcome: string }[];
}

// ============================================================
// LOOKUP HELPERS
// ============================================================
function findIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
function findRole(slug: string): Role | undefined {
  return roles.find((r) => r.slug === slug);
}
function findTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
function findUseCase(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
function findCompanySize(slug: string): CompanySize | undefined {
  return companySizes.find((c) => c.slug === slug);
}

// ============================================================
// INTRO PARAGRAPH VARIATIONS
// ============================================================
const introTemplates = [
  (ctx: string) =>
    `In today's fast-paced software landscape, ${ctx} requires a fundamentally different approach to quality assurance. Traditional manual testing and basic automation frameworks can no longer keep pace with the demands of modern development. AI-powered test automation with Playwright, Claude AI, and Model Context Protocol (MCP) provides the breakthrough needed to achieve comprehensive test coverage while dramatically reducing maintenance overhead.`,
  (ctx: string) =>
    `The intersection of ${ctx} presents unique challenges that demand intelligent, adaptive testing solutions. With AI test automation, teams can generate, execute, and maintain thousands of test cases autonomously. This guide explores exactly how to leverage Playwright's modern architecture, Claude AI's test generation capabilities, and MCP's autonomous testing features for ${ctx}.`,
  (ctx: string) =>
    `Software testing for ${ctx} has evolved beyond simple script execution. The most effective teams are now using AI to write tests, detect bugs proactively, and maintain test suites without manual intervention. Here's your complete guide to implementing AI test automation for ${ctx}, based on proven strategies from the AI Test Automation Playbook.`,
  (ctx: string) =>
    `If you're responsible for ${ctx}, you already know that testing is both the most critical and most time-consuming part of the development lifecycle. AI test automation changes this equation entirely. By combining Playwright's reliable browser automation with Claude AI's intelligence and MCP's autonomous capabilities, you can achieve 10x the coverage in a fraction of the time.`,
  (ctx: string) =>
    `The future of ${ctx} is autonomous, AI-driven quality assurance. Teams that adopt AI test automation today gain a significant competitive advantage through faster releases, fewer production bugs, and dramatically lower testing costs. This comprehensive guide shows you how to get there.`,
];

// ============================================================
// MAIN CONTENT GENERATOR
// ============================================================
export function generatePageContent(
  itemSlugs: string[],
  category: string,
  pageSlug: string
): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const hash = simpleHash(pageSlug);

  const industry = itemSlugs.map(findIndustry).find(Boolean);
  const role = itemSlugs.map(findRole).find(Boolean);
  const tool = itemSlugs.map(findTool).find(Boolean);
  const useCase = itemSlugs.map(findUseCase).find(Boolean);
  const companySize = itemSlugs.map(findCompanySize).find(Boolean);

  // Build context string
  const contextParts: string[] = [];
  if (role) contextParts.push(role.name);
  if (industry) contextParts.push(`in ${industry.name}`);
  if (useCase) contextParts.push(`doing ${useCase.name.toLowerCase()}`);
  if (tool) contextParts.push(`using ${tool.name}`);
  if (companySize) contextParts.push(`at ${companySize.name.toLowerCase()}`);
  const contextStr = contextParts.join(" ") || "modern software testing";

  // 1. INTRO
  const introFn = introTemplates[hash % introTemplates.length];
  blocks.push({
    type: "intro",
    title: "",
    content: introFn(contextStr),
  });

  // 2. CHALLENGES (unique per combination)
  if (industry || role || tool) {
    const challengeItems: { title: string; description: string }[] = [];

    if (industry) {
      industry.painPoints.forEach((p) => {
        challengeItems.push({
          title: p,
          description: `In ${industry.name}, ${p.toLowerCase()} is a critical testing concern. ${
            role ? `${role.name} must address this` : "Teams must address this"
          } through automated validation, continuous monitoring, and AI-powered regression detection. ${
            useCase
              ? `When combined with ${useCase.name.toLowerCase()}, this becomes even more important.`
              : ""
          }`,
        });
      });
    }

    if (role && !industry) {
      role.challenges.forEach((c) => {
        challengeItems.push({
          title: c,
          description: `${role.name} frequently encounter ${c.toLowerCase()} in their daily workflow. AI test automation eliminates this through ${
            pick(role.benefits, hash, 1)[0]?.toLowerCase() || "intelligent automation"
          }.`,
        });
      });
    }

    if (tool) {
      tool.limitations.forEach((l) => {
        challengeItems.push({
          title: `${tool.name}: ${l}`,
          description: `${tool.name}'s ${l.toLowerCase()} limits testing effectiveness${
            industry ? ` in ${industry.name}` : ""
          }. AI-powered Playwright addresses this with ${
            pick(tool.aiEnhancements, hash, 1)[0]?.toLowerCase() || "modern automation"
          }.`,
        });
      });
    }

    blocks.push({
      type: "challenges",
      title: `Key Testing Challenges${industry ? ` in ${industry.name}` : ""}${
        role ? ` for ${role.name}` : ""
      }`,
      content: `Understanding the specific challenges is the first step to solving them. Here are the critical testing pain points that AI automation addresses:`,
      items: challengeItems.slice(0, 6),
    });
  }

  // 3. SOLUTIONS
  const solutionItems: { title: string; description: string }[] = [];

  if (useCase) {
    useCase.aiSolutions.forEach((s) => {
      solutionItems.push({
        title: s,
        description: `${s} ${
          industry ? `for ${industry.name} teams` : ""
        } enables ${
          role ? role.name : "teams"
        } to achieve ${
          pick(useCase.metrics, hash, 1)[0]?.toLowerCase() || "measurable improvements"
        }. The AI Test Automation Playbook provides step-by-step implementation guides.`,
      });
    });
  }

  if (role && !useCase) {
    role.benefits.forEach((b) => {
      solutionItems.push({
        title: b,
        description: `${b} transforms how ${role.name} approach quality assurance${
          industry ? ` in ${industry.name}` : ""
        }. Playwright + Claude AI makes this achievable within the first 30 days of implementation.`,
      });
    });
  }

  if (solutionItems.length > 0) {
    blocks.push({
      type: "solutions",
      title: `AI-Powered Solutions${useCase ? ` for ${useCase.name}` : ""}`,
      content: `Here's how AI test automation specifically addresses these challenges:`,
      items: solutionItems,
    });
  }

  // 4. COMPARISON TABLE (when tool is present)
  if (tool) {
    const tableRows = [
      {
        feature: "Test Generation",
        before: `Manual with ${tool.name}`,
        after: "AI-powered with Claude",
      },
      {
        feature: "Test Maintenance",
        before: tool.limitations[0] || "Manual updates",
        after: "Self-healing with MCP",
      },
      {
        feature: "Execution Speed",
        before: tool.slug === "selenium" ? "5-10x slower" : "Standard",
        after: "3x faster with auto-wait",
      },
      {
        feature: "Coverage",
        before: "Limited by manual effort",
        after: "AI discovers edge cases",
      },
      {
        feature: "CI/CD Integration",
        before: "Configuration-heavy",
        after: "GitHub Actions ready",
      },
      {
        feature: "Learning Curve",
        before: tool.limitations[tool.limitations.length - 1] || "Steep",
        after: "30-day guided roadmap",
      },
    ];

    blocks.push({
      type: "comparison",
      title: `${tool.name} vs AI-Powered Playwright`,
      content: `See how ${tool.name} compares to modern AI-powered testing with Playwright:`,
      tableRows,
    });
  }

  // 5. IMPLEMENTATION TIMELINE
  const timelineSteps: { week: string; action: string; outcome: string }[] = [];

  if (industry && role) {
    timelineSteps.push(
      {
        week: "Week 1",
        action: `Set up Playwright for ${industry.name} ${industry.testTypes[0]?.toLowerCase() || "testing"}`,
        outcome: `${role.name} have a working test framework with initial test cases`,
      },
      {
        week: "Week 2",
        action: `Integrate Claude AI for ${industry.painPoints[0]?.toLowerCase() || "test generation"}`,
        outcome: `AI-generated tests covering ${industry.testTypes.slice(0, 2).join(" and ").toLowerCase()}`,
      },
      {
        week: "Week 3",
        action: `Implement MCP for autonomous ${useCase?.name.toLowerCase() || "testing"}`,
        outcome: `Autonomous test execution and self-healing for ${industry.name} workflows`,
      },
      {
        week: "Week 4",
        action: "CI/CD pipeline integration with GitHub Actions",
        outcome: `Fully automated ${industry.name} testing pipeline with ${role.benefits[0]?.toLowerCase() || "maximum efficiency"}`,
      }
    );
  } else if (useCase) {
    timelineSteps.push(
      {
        week: "Week 1",
        action: `Playwright setup for ${useCase.name.toLowerCase()}`,
        outcome: `Working ${useCase.name.toLowerCase()} framework with TypeScript`,
      },
      {
        week: "Week 2",
        action: `Claude AI integration for ${useCase.aiSolutions[0]?.toLowerCase() || "test generation"}`,
        outcome: `AI-powered ${useCase.name.toLowerCase()} achieving ${useCase.metrics[0]?.toLowerCase() || "significant improvements"}`,
      },
      {
        week: "Week 3",
        action: `MCP autonomous ${useCase.name.toLowerCase()}`,
        outcome: `Self-maintaining test suite with ${useCase.aiSolutions[1]?.toLowerCase() || "continuous validation"}`,
      },
      {
        week: "Week 4",
        action: "CI/CD pipeline and reporting",
        outcome: `Production-ready ${useCase.name.toLowerCase()} pipeline with automated reporting`,
      }
    );
  } else {
    timelineSteps.push(
      {
        week: "Week 1",
        action: "Playwright + TypeScript setup",
        outcome: "Working test framework with initial tests",
      },
      {
        week: "Week 2",
        action: "Claude AI test generation integration",
        outcome: "AI-powered test creation and maintenance",
      },
      {
        week: "Week 3",
        action: "MCP autonomous testing implementation",
        outcome: "Self-healing, autonomous test execution",
      },
      {
        week: "Week 4",
        action: "CI/CD pipeline with GitHub Actions",
        outcome: "Fully automated testing pipeline",
      }
    );
  }

  blocks.push({
    type: "timeline",
    title: `30-Day Implementation Roadmap${industry ? ` for ${industry.name}` : ""}`,
    content: `Follow this proven roadmap to implement AI test automation${
      companySize ? ` at your ${companySize.name.toLowerCase()} organization` : ""
    }:`,
    steps: timelineSteps,
  });

  // 6. METRICS (when use case is present)
  if (useCase) {
    blocks.push({
      type: "metrics",
      title: "Expected Results",
      content: `Teams implementing AI ${useCase.name.toLowerCase()}${
        industry ? ` in ${industry.name}` : ""
      } typically achieve:`,
      items: useCase.metrics.map((m) => ({
        title: m,
        description: `Measured across ${
          industry ? industry.name : "enterprise"
        } teams using the AI Test Automation Playbook methodology.`,
      })),
    });
  }

  // 7. CHECKLIST
  const checklistItems: { title: string; description: string }[] = [
    {
      title: "Playwright + TypeScript setup",
      description: `Production-ready configuration${
        industry ? ` optimized for ${industry.name}` : ""
      }${tool ? `, migrating from ${tool.name}` : ""}.`,
    },
    {
      title: "Claude AI prompt library",
      description: `10+ ready-to-use prompts for ${
        useCase ? useCase.name.toLowerCase() : "test generation"
      }${role ? `, tailored for ${role.name}` : ""}.`,
    },
    {
      title: "MCP autonomous testing",
      description: `Model Context Protocol deep dive for 24/7 autonomous ${
        industry ? industry.testTypes[0]?.toLowerCase() || "testing" : "testing"
      }.`,
    },
    {
      title: "Page Object Model architecture",
      description: `Advanced patterns for scalable test suites${
        companySize ? ` designed for ${companySize.name.toLowerCase()}` : ""
      }.`,
    },
    {
      title: "CI/CD with GitHub Actions",
      description: `Pipeline setup for continuous ${
        useCase ? useCase.name.toLowerCase() : "testing"
      } and deployment validation.`,
    },
    {
      title: "Performance & accessibility testing",
      description: `AI-powered performance, accessibility, and visual regression testing${
        industry?.regulations ? ` meeting ${industry.regulations} compliance` : ""
      }.`,
    },
  ];

  blocks.push({
    type: "checklist",
    title: "What's in the AI Test Automation Playbook",
    content: `Everything you need to implement AI-powered testing${
      companySize ? ` at your ${companySize.name.toLowerCase()} organization` : ""
    }:`,
    items: checklistItems,
  });

  // 8. FAQ (unique per combination)
  const faqItems: { title: string; description: string }[] = [];

  if (industry && role) {
    faqItems.push({
      title: `How do ${role.name} in ${industry.name} benefit from AI test automation?`,
      description: `${role.name} in ${industry.name} benefit through ${role.benefits
        .slice(0, 2)
        .join(" and ")
        .toLowerCase()}, while addressing ${industry.name}-specific challenges like ${industry.painPoints[0]?.toLowerCase()}. The playbook's 30-day roadmap is specifically designed for this combination.`,
    });
  }

  if (tool) {
    faqItems.push({
      title: `Should I migrate from ${tool.name} to AI-powered Playwright?`,
      description: `${tool.name} has limitations including ${tool.limitations
        .slice(0, 2)
        .join(" and ")
        .toLowerCase()}. AI-powered Playwright addresses these with ${tool.aiEnhancements
        .slice(0, 2)
        .join(" and ")
        .toLowerCase()}. The playbook includes a complete migration guide.`,
    });
  }

  if (useCase) {
    faqItems.push({
      title: `What results can I expect from AI ${useCase.name.toLowerCase()}?`,
      description: `Teams typically see ${useCase.metrics.join(", ").toLowerCase()} when implementing AI-powered ${useCase.name.toLowerCase()} with Playwright and Claude AI.`,
    });
  }

  if (companySize) {
    faqItems.push({
      title: `Is AI test automation right for ${companySize.name.toLowerCase()}?`,
      description: `Absolutely. ${companySize.description} The playbook provides ${companySize.approach
        .slice(0, 2)
        .join(" and ")
        .toLowerCase()} specifically designed for ${companySize.name.toLowerCase()}.`,
    });
  }

  faqItems.push(
    {
      title: `How long does it take to implement AI test automation${
        industry ? ` for ${industry.name}` : ""
      }?`,
      description: `The playbook includes a 30-day implementation roadmap. Most teams see initial results within the first week and full ROI within 30 days. The ${SITE_CONFIG.price} investment pays for itself quickly through reduced manual testing effort.`,
    },
    {
      title: "What's included in the AI Test Automation Playbook?",
      description: `Playwright setup with TypeScript, Claude AI integration with 10+ prompts, MCP deep dive for autonomous testing, Page Object Model architecture, CI/CD pipeline with GitHub Actions, 30-day implementation roadmap, and performance/accessibility/visual regression testing guides.`,
    }
  );

  blocks.push({
    type: "faq",
    title: `Frequently Asked Questions`,
    content: "",
    items: faqItems,
  });

  return blocks;
}
