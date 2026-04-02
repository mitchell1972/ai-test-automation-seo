// ============================================================
// EXPANDED COMBINATIONS ENGINE
// Generates ~14,760 cross-combination pages for programmatic SEO
// Combined with 85 base pages = ~14,845 total pages (~15K)
// ============================================================

import { industries, roles, tools, useCases, companySizes } from './seo-data';

// ============================================================
// INTERFACES
// ============================================================

export interface ComboPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  items: string[];
  breadcrumbs: { label: string; href?: string }[];
}

// ============================================================
// HELPER: Slugify a combined slug
// ============================================================
function combineSlug(...parts: string[]): string {
  return parts.join('-');
}

// ============================================================
// 1. INDUSTRY + ROLE (30 x 15 = 450)
// ============================================================
export function generateIndustryRoleCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const industry of industries) {
    for (const role of roles) {
      results.push({
        slug: combineSlug(industry.slug, role.slug),
        title: `AI Test Automation for ${role.name} in ${industry.name}`,
        description: `Discover how ${role.name} in the ${industry.name} industry leverage AI-powered test automation to accelerate testing cycles, reduce manual effort, and deliver higher-quality software faster.`,
        category: 'industry-role',
        items: [industry.slug, role.slug],
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: industry.name, href: `/industry/${industry.slug}` },
          { label: role.name, href: `/role/${role.slug}` },
        ],
      });
    }
  }
  return results;
}

// ============================================================
// 2. INDUSTRY + USE CASE (30 x 20 = 600)
// ============================================================
export function generateIndustryUseCaseCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const industry of industries) {
    for (const useCase of useCases) {
      results.push({
        slug: combineSlug(industry.slug, useCase.slug),
        title: `${useCase.name} for ${industry.name} with AI`,
        description: `Learn how AI test automation transforms ${useCase.name.toLowerCase()} for ${industry.name} teams. Streamline your testing pipeline and catch defects earlier in the ${industry.name.toLowerCase()} software development lifecycle.`,
        category: 'industry-usecase',
        items: [industry.slug, useCase.slug],
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: industry.name, href: `/industry/${industry.slug}` },
          { label: useCase.name, href: `/use-case/${useCase.slug}` },
        ],
      });
    }
  }
  return results;
}

// ============================================================
// 3. INDUSTRY + TOOL (30 x 15 = 450)
// ============================================================
export function generateIndustryToolCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const industry of industries) {
    for (const tool of tools) {
      results.push({
        slug: combineSlug(industry.slug, tool.slug),
        title: `${tool.name} vs AI Testing for ${industry.name}`,
        description: `Compare ${tool.name} with AI-powered test automation solutions for ${industry.name}. See why leading ${industry.name.toLowerCase()} companies are switching to intelligent testing for better coverage and faster releases.`,
        category: 'industry-tool',
        items: [industry.slug, tool.slug],
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: industry.name, href: `/industry/${industry.slug}` },
          { label: tool.name, href: `/tool/${tool.slug}` },
        ],
      });
    }
  }
  return results;
}

// ============================================================
// 4. ROLE + USE CASE (15 x 20 = 300)
// ============================================================
export function generateRoleUseCaseCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const role of roles) {
    for (const useCase of useCases) {
      results.push({
        slug: combineSlug(role.slug, useCase.slug),
        title: `${useCase.name} Guide for ${role.name}`,
        description: `A comprehensive guide to ${useCase.name.toLowerCase()} tailored for ${role.name}. Learn best practices, tools, and AI-driven strategies that help ${role.name.toLowerCase()} implement effective ${useCase.name.toLowerCase()}.`,
        category: 'role-usecase',
        items: [role.slug, useCase.slug],
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: role.name, href: `/role/${role.slug}` },
          { label: useCase.name, href: `/use-case/${useCase.slug}` },
        ],
      });
    }
  }
  return results;
}

// ============================================================
// 5. ROLE + TOOL (15 x 15 = 225)
// ============================================================
export function generateRoleToolCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const role of roles) {
    for (const tool of tools) {
      results.push({
        slug: combineSlug(role.slug, tool.slug),
        title: `${tool.name} Alternative for ${role.name}: AI Testing`,
        description: `Why ${role.name} are choosing AI test automation over ${tool.name}. Explore how intelligent testing tools outperform traditional ${tool.name} workflows for ${role.name.toLowerCase()} teams.`,
        category: 'role-tool',
        items: [role.slug, tool.slug],
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: role.name, href: `/role/${role.slug}` },
          { label: tool.name, href: `/tool/${tool.slug}` },
        ],
      });
    }
  }
  return results;
}

// ============================================================
// 6. TOOL + USE CASE (15 x 20 = 300)
// ============================================================
export function generateToolUseCaseCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const tool of tools) {
    for (const useCase of useCases) {
      results.push({
        slug: combineSlug(tool.slug, useCase.slug),
        title: `AI ${useCase.name} with ${tool.name} Alternative`,
        description: `Upgrade your ${useCase.name.toLowerCase()} workflow beyond ${tool.name}. See how AI-powered testing delivers smarter ${useCase.name.toLowerCase()} with less maintenance and better test coverage.`,
        category: 'tool-usecase',
        items: [tool.slug, useCase.slug],
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: tool.name, href: `/tool/${tool.slug}` },
          { label: useCase.name, href: `/use-case/${useCase.slug}` },
        ],
      });
    }
  }
  return results;
}

// ============================================================
// 7. INDUSTRY + COMPANY SIZE (30 x 5 = 150)
// ============================================================
export function generateIndustryCompanySizeCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const industry of industries) {
    for (const size of companySizes) {
      results.push({
        slug: combineSlug(industry.slug, size.slug),
        title: `AI Test Automation for ${industry.name} ${size.name}`,
        description: `How ${size.name.toLowerCase()} in ${industry.name.toLowerCase()} can implement AI test automation to scale quality assurance. Practical strategies sized for ${size.name.toLowerCase()} budgets and team structures.`,
        category: 'industry-companysize',
        items: [industry.slug, size.slug],
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: industry.name, href: `/industry/${industry.slug}` },
          { label: size.name, href: `/company/${size.slug}` },
        ],
      });
    }
  }
  return results;
}

// ============================================================
// 8. ROLE + COMPANY SIZE (15 x 5 = 75)
// ============================================================
export function generateRoleCompanySizeCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const role of roles) {
    for (const size of companySizes) {
      results.push({
        slug: combineSlug(role.slug, size.slug),
        title: `AI Testing for ${role.name} at ${size.name}`,
        description: `Tailored AI test automation strategies for ${role.name} working at ${size.name.toLowerCase()}. Learn how to maximize testing impact with the resources and constraints typical of ${size.name.toLowerCase()}.`,
        category: 'role-companysize',
        items: [role.slug, size.slug],
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: role.name, href: `/role/${role.slug}` },
          { label: size.name, href: `/company/${size.slug}` },
        ],
      });
    }
  }
  return results;
}

// ============================================================
// 9. INDUSTRY + ROLE + USE CASE (top 10 x 10 x 20 = 2000)
// ============================================================
export function generateIndustryRoleUseCaseCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  const topIndustries = industries.slice(0, 10);
  const topRoles = roles.slice(0, 10);
  for (const industry of topIndustries) {
    for (const role of topRoles) {
      for (const useCase of useCases) {
        results.push({
          slug: combineSlug(industry.slug, role.slug, useCase.slug),
          title: `AI ${useCase.name} for ${role.name} in ${industry.name}`,
          description: `Master ${useCase.name.toLowerCase()} as a ${role.name.toLowerCase().replace(/s$/, '')} in the ${industry.name.toLowerCase()} sector. This guide covers AI-driven strategies for ${useCase.name.toLowerCase()} that address the unique challenges of ${industry.name.toLowerCase()} software.`,
          category: 'industry-role-usecase',
          items: [industry.slug, role.slug, useCase.slug],
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: industry.name, href: `/industry/${industry.slug}` },
            { label: role.name, href: `/role/${role.slug}` },
            { label: useCase.name, href: `/use-case/${useCase.slug}` },
          ],
        });
      }
    }
  }
  return results;
}

// ============================================================
// 10. INDUSTRY + TOOL + USE CASE (top 10 x 15 x 20 = 3000)
// ============================================================
export function generateIndustryToolUseCaseCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  const topIndustries = industries.slice(0, 10);
  for (const industry of topIndustries) {
    for (const tool of tools) {
      for (const useCase of useCases) {
        results.push({
          slug: combineSlug(industry.slug, tool.slug, useCase.slug),
          title: `${useCase.name} in ${industry.name}: ${tool.name} vs AI`,
          description: `Compare ${tool.name} against AI-powered solutions for ${useCase.name.toLowerCase()} in ${industry.name.toLowerCase()}. Discover which approach delivers better test coverage, faster execution, and lower maintenance for ${industry.name.toLowerCase()} teams.`,
          category: 'industry-tool-usecase',
          items: [industry.slug, tool.slug, useCase.slug],
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: industry.name, href: `/industry/${industry.slug}` },
            { label: tool.name, href: `/tool/${tool.slug}` },
            { label: useCase.name, href: `/use-case/${useCase.slug}` },
          ],
        });
      }
    }
  }
  return results;
}

// ============================================================
// 11. ROLE + TOOL + USE CASE (15 x 15 x 20 = 4500)
// ============================================================
export function generateRoleToolUseCaseCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  for (const role of roles) {
    for (const tool of tools) {
      for (const useCase of useCases) {
        results.push({
          slug: combineSlug(role.slug, tool.slug, useCase.slug),
          title: `${useCase.name} for ${role.name}: Beyond ${tool.name}`,
          description: `How ${role.name} can supercharge ${useCase.name.toLowerCase()} by moving beyond ${tool.name} to AI-driven testing. Step-by-step migration guide with real-world examples and ROI analysis.`,
          category: 'role-tool-usecase',
          items: [role.slug, tool.slug, useCase.slug],
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: role.name, href: `/role/${role.slug}` },
            { label: tool.name, href: `/tool/${tool.slug}` },
            { label: useCase.name, href: `/use-case/${useCase.slug}` },
          ],
        });
      }
    }
  }
  return results;
}

// ============================================================
// 12. INDUSTRY + ROLE + COMPANY SIZE (top 15 x 15 x 5 = 1125)
// ============================================================
export function generateIndustryRoleCompanySizeCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  const topIndustries = industries.slice(0, 15);
  for (const industry of topIndustries) {
    for (const role of roles) {
      for (const size of companySizes) {
        results.push({
          slug: combineSlug(industry.slug, role.slug, size.slug),
          title: `AI Testing for ${role.name} in ${industry.name} for ${size.name}`,
          description: `Practical AI test automation playbook for ${role.name} at ${size.name.toLowerCase()} in the ${industry.name.toLowerCase()} industry. Covers tool selection, team structure, and implementation strategies scaled for ${size.name.toLowerCase()}.`,
          category: 'industry-role-companysize',
          items: [industry.slug, role.slug, size.slug],
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: industry.name, href: `/industry/${industry.slug}` },
            { label: role.name, href: `/role/${role.slug}` },
            { label: size.name, href: `/company/${size.slug}` },
          ],
        });
      }
    }
  }
  return results;
}

// ============================================================
// 13. INDUSTRY + USE CASE + COMPANY SIZE (top 15 x 20 x 5 = 1500)
// ============================================================
export function generateIndustryUseCaseCompanySizeCombos(): ComboPage[] {
  const results: ComboPage[] = [];
  const topIndustries = industries.slice(0, 15);
  for (const industry of topIndustries) {
    for (const useCase of useCases) {
      for (const size of companySizes) {
        results.push({
          slug: combineSlug(industry.slug, useCase.slug, size.slug),
          title: `${useCase.name} for ${industry.name} ${size.name} with AI`,
          description: `How ${size.name.toLowerCase()} in ${industry.name.toLowerCase()} can implement AI-powered ${useCase.name.toLowerCase()}. Budget-friendly strategies and tool recommendations tailored to the needs of ${industry.name.toLowerCase()} ${size.name.toLowerCase()}.`,
          category: 'industry-usecase-companysize',
          items: [industry.slug, useCase.slug, size.slug],
          breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: industry.name, href: `/industry/${industry.slug}` },
            { label: useCase.name, href: `/use-case/${useCase.slug}` },
            { label: size.name, href: `/company/${size.slug}` },
          ],
        });
      }
    }
  }
  return results;
}

// ============================================================
// MASTER FUNCTIONS
// ============================================================

/**
 * Returns all combination pages across all categories.
 * Total: ~14,760 pages
 *
 * Breakdown:
 *  1. industry-role:              30 x 15       =    450
 *  2. industry-usecase:           30 x 20       =    600
 *  3. industry-tool:              30 x 15       =    450
 *  4. role-usecase:               15 x 20       =    300
 *  5. role-tool:                  15 x 15       =    225
 *  6. tool-usecase:               15 x 20       =    300
 *  7. industry-companysize:       30 x 5        =    150
 *  8. role-companysize:           15 x 5        =     75
 *  9. industry-role-usecase:      10 x 10 x 20  =  2,000
 * 10. industry-tool-usecase:      10 x 15 x 20  =  3,000
 * 11. role-tool-usecase:          15 x 15 x 20  =  4,500
 * 12. industry-role-companysize:  15 x 15 x 5   =  1,125
 * 13. industry-usecase-companysize: 15 x 20 x 5 =  1,500
 *                                         Total = 14,675
 *  + 85 base pages                        Grand = ~14,760
 */
export function getAllCombinations(): ComboPage[] {
  return [
    ...generateIndustryRoleCombos(),
    ...generateIndustryUseCaseCombos(),
    ...generateIndustryToolCombos(),
    ...generateRoleUseCaseCombos(),
    ...generateRoleToolCombos(),
    ...generateToolUseCaseCombos(),
    ...generateIndustryCompanySizeCombos(),
    ...generateRoleCompanySizeCombos(),
    ...generateIndustryRoleUseCaseCombos(),
    ...generateIndustryToolUseCaseCombos(),
    ...generateRoleToolUseCaseCombos(),
    ...generateIndustryRoleCompanySizeCombos(),
    ...generateIndustryUseCaseCompanySizeCombos(),
  ];
}

/**
 * Look up a single combination page by its category and slug.
 */
export function getCombinationBySlug(category: string, slug: string): ComboPage | undefined {
  const generatorMap: Record<string, () => ComboPage[]> = {
    'industry-role': generateIndustryRoleCombos,
    'industry-usecase': generateIndustryUseCaseCombos,
    'industry-tool': generateIndustryToolCombos,
    'role-usecase': generateRoleUseCaseCombos,
    'role-tool': generateRoleToolCombos,
    'tool-usecase': generateToolUseCaseCombos,
    'industry-companysize': generateIndustryCompanySizeCombos,
    'role-companysize': generateRoleCompanySizeCombos,
    'industry-role-usecase': generateIndustryRoleUseCaseCombos,
    'industry-tool-usecase': generateIndustryToolUseCaseCombos,
    'role-tool-usecase': generateRoleToolUseCaseCombos,
    'industry-role-companysize': generateIndustryRoleCompanySizeCombos,
    'industry-usecase-companysize': generateIndustryUseCaseCompanySizeCombos,
  };

  const generator = generatorMap[category];
  if (!generator) return undefined;

  return generator().find((page) => page.slug === slug);
}

/**
 * Get all available combination categories with their expected counts.
 */
export function getCombinationCategories(): { category: string; count: number; label: string }[] {
  return [
    { category: 'industry-role', count: industries.length * roles.length, label: 'Industry + Role' },
    { category: 'industry-usecase', count: industries.length * useCases.length, label: 'Industry + Use Case' },
    { category: 'industry-tool', count: industries.length * tools.length, label: 'Industry + Tool' },
    { category: 'role-usecase', count: roles.length * useCases.length, label: 'Role + Use Case' },
    { category: 'role-tool', count: roles.length * tools.length, label: 'Role + Tool' },
    { category: 'tool-usecase', count: tools.length * useCases.length, label: 'Tool + Use Case' },
    { category: 'industry-companysize', count: industries.length * companySizes.length, label: 'Industry + Company Size' },
    { category: 'role-companysize', count: roles.length * companySizes.length, label: 'Role + Company Size' },
    { category: 'industry-role-usecase', count: 10 * 10 * useCases.length, label: 'Industry + Role + Use Case' },
    { category: 'industry-tool-usecase', count: 10 * tools.length * useCases.length, label: 'Industry + Tool + Use Case' },
    { category: 'role-tool-usecase', count: roles.length * tools.length * useCases.length, label: 'Role + Tool + Use Case' },
    { category: 'industry-role-companysize', count: 15 * roles.length * companySizes.length, label: 'Industry + Role + Company Size' },
    { category: 'industry-usecase-companysize', count: 15 * useCases.length * companySizes.length, label: 'Industry + Use Case + Company Size' },
  ];
}
