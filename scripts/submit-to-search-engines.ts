/**
 * Search Engine Submission & Backlink Starter Script
 *
 * Submits sitemap to multiple search engines and generates a list of
 * free backlink opportunities to kickstart domain authority.
 *
 * Run: npx tsx scripts/submit-to-search-engines.ts
 */

const SITE_URL = 'https://www.aitestplaybook.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// ============================================================
// 1. SEARCH ENGINE SITEMAP SUBMISSIONS
// ============================================================
async function submitSitemaps() {
  console.log('🔍 Submitting sitemap to search engines...\n');

  // IndexNow - instant indexing for Bing, Yandex, Seznam, Naver
  // Requires an API key file at /indexnow-key.txt
  const indexNowKey = 'your-indexnow-key-here'; // Replace with real key
  const indexNowEndpoints = [
    `https://api.indexnow.org/indexnow?url=${encodeURIComponent(SITE_URL)}&key=${indexNowKey}&urlList=${encodeURIComponent(SITEMAP_URL)}`,
  ];

  // Yandex Webmaster ping
  const yandexPing = `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;

  const endpoints = [
    { name: 'Yandex', url: yandexPing },
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint.url);
      console.log(`  ${response.ok ? '✅' : '❌'} ${endpoint.name}: ${response.status}`);
    } catch (error) {
      console.log(`  ❌ ${endpoint.name}: ${error}`);
    }
  }

  console.log();
}

// ============================================================
// 2. INDEXNOW BATCH SUBMISSION (Bing, Yandex, etc.)
// ============================================================
async function submitIndexNow(urls: string[], apiKey: string) {
  console.log(`📡 Submitting ${urls.length} URLs via IndexNow...\n`);

  const body = {
    host: 'www.aitestplaybook.com',
    key: apiKey,
    keyLocation: `${SITE_URL}/${apiKey}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    console.log(`  ${response.ok ? '✅' : '❌'} IndexNow: ${response.status}`);
  } catch (error) {
    console.log(`  ❌ IndexNow: ${error}`);
  }
}

// ============================================================
// 3. FREE BACKLINK OPPORTUNITIES
// ============================================================
function printBacklinkOpportunities() {
  console.log('🔗 Free Backlink Opportunities — Do These Manually:\n');

  const opportunities = [
    {
      category: '📝 Developer/Tech Profiles',
      items: [
        'GitHub profile README — link to site in bio and pinned repo',
        'Dev.to — create a profile and publish articles about AI testing',
        'Hashnode — write blog posts linking back to your playbook',
        'Medium — publish articles with links to specific pages',
        'HackerNoon — submit tech articles about AI test automation',
        'Stack Overflow — answer testing questions, link in profile',
      ],
    },
    {
      category: '📂 Directory Submissions',
      items: [
        'Product Hunt — launch the AI Test Automation Playbook',
        'Indie Hackers — share your product/project',
        'BetaList — submit as a new product',
        'AlternativeTo — list as alternative to traditional testing tools',
        'ToolFinder.io — submit your playbook',
        'There\'s An AI For That — submit under testing category',
        'AI Tool Directory — submit to multiple AI tool aggregators',
      ],
    },
    {
      category: '💬 Community Engagement',
      items: [
        'Reddit — post in r/QualityAssurance, r/softwaretesting, r/devops',
        'LinkedIn — publish articles about AI testing, link to pages',
        'Twitter/X — share individual pages with relevant hashtags',
        'Testing community Slack/Discord — share relevant resources',
        'Ministry of Testing — engage in forums',
        'QA subreddit — answer questions and share insights',
      ],
    },
    {
      category: '🎓 Educational & Content',
      items: [
        'YouTube — create videos about AI test automation, link in description',
        'Slideshare — upload presentations about AI testing',
        'Quora — answer testing questions with links to relevant pages',
        'Wikipedia — add citations if your content supports existing articles',
      ],
    },
    {
      category: '🏢 Business Listings',
      items: [
        'Google Business Profile — if applicable',
        'Crunchbase — create a profile',
        'AngelList — list the product',
      ],
    },
  ];

  for (const opp of opportunities) {
    console.log(`  ${opp.category}`);
    for (const item of opp.items) {
      console.log(`    • ${item}`);
    }
    console.log();
  }
}

// ============================================================
// 4. QUICK GSC MANUAL SUBMISSION GUIDE
// ============================================================
function printGSCGuide() {
  console.log('📋 Google Search Console — Manual Steps:\n');
  console.log('  1. Go to https://search.google.com/search-console');
  console.log(`  2. Select property: ${SITE_URL}`);
  console.log('  3. Go to "Sitemaps" → Submit: /sitemap.xml');
  console.log('     (Next.js will serve a sitemap index with sub-sitemaps)');
  console.log('  4. Go to "URL Inspection" → Submit these priority URLs:');
  console.log();

  const priorityUrls = [
    SITE_URL,
    `${SITE_URL}/industry/healthcare`,
    `${SITE_URL}/industry/fintech`,
    `${SITE_URL}/industry/saas`,
    `${SITE_URL}/industry/ecommerce`,
    `${SITE_URL}/role/qa-engineer`,
    `${SITE_URL}/role/sdet`,
    `${SITE_URL}/role/developer`,
    `${SITE_URL}/tool/playwright`,
    `${SITE_URL}/tool/selenium`,
    `${SITE_URL}/tool/cypress`,
    `${SITE_URL}/use-case/regression-testing`,
    `${SITE_URL}/use-case/api-testing`,
    `${SITE_URL}/use-case/e2e-testing`,
    `${SITE_URL}/company/startups`,
    `${SITE_URL}/company/enterprise`,
  ];

  for (const url of priorityUrls) {
    console.log(`    ${url}`);
  }

  console.log('\n  5. Click "Request Indexing" for each URL');
  console.log('     (Limit: ~10-12 requests per day)\n');
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('='.repeat(60));
  console.log(' AI Test Playbook — Search Engine Submission & Backlinks');
  console.log('='.repeat(60));
  console.log();

  await submitSitemaps();
  printGSCGuide();
  printBacklinkOpportunities();

  console.log('='.repeat(60));
  console.log(' INDEXNOW SETUP (for instant Bing/Yandex indexing)');
  console.log('='.repeat(60));
  console.log();
  console.log('  1. Generate an API key at https://www.indexnow.org/');
  console.log('  2. Create a file: public/<your-key>.txt containing the key');
  console.log('  3. Update the indexNowKey variable in this script');
  console.log('  4. Run again to submit URLs to Bing/Yandex instantly');
  console.log();
}

main().catch(console.error);
