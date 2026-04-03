/**
 * Google Indexing API Submission Script
 *
 * Submits priority URLs to Google for faster indexing.
 *
 * SETUP:
 * 1. Go to Google Cloud Console → Create a project
 * 2. Enable the "Web Search Indexing API" (previously "Indexing API")
 * 3. Create a Service Account → Download the JSON key
 * 4. In Google Search Console, add the service account email as an Owner
 * 5. Save the key as `google-service-account.json` in the project root
 * 6. Run: npx tsx scripts/submit-to-google-indexing-api.ts
 *
 * NOTE: The Indexing API is officially for JobPosting/BroadcastEvent pages,
 * but submitting other URLs can still trigger faster crawling.
 * For non-job pages, also use the URL Inspection API or manual GSC submission.
 */

import { industries, roles, tools, useCases, companySizes } from '../src/data/seo-data';

const BASE_URL = 'https://www.aitestplaybook.com';
const KEY_FILE = './google-service-account.json';
const BATCH_SIZE = 100; // Google allows 200/day for new sites
const DELAY_MS = 1000; // 1 second between requests

// Priority URLs - base 85 pages first
function getPriorityUrls(): string[] {
  const urls: string[] = [BASE_URL];

  for (const industry of industries) {
    urls.push(`${BASE_URL}/industry/${industry.slug}`);
  }
  for (const role of roles) {
    urls.push(`${BASE_URL}/role/${role.slug}`);
  }
  for (const tool of tools) {
    urls.push(`${BASE_URL}/tool/${tool.slug}`);
  }
  for (const useCase of useCases) {
    urls.push(`${BASE_URL}/use-case/${useCase.slug}`);
  }
  for (const company of companySizes) {
    urls.push(`${BASE_URL}/company/${company.slug}`);
  }

  return urls;
}

async function getAccessToken(): Promise<string> {
  // Dynamic import to avoid issues if not installed
  const { google } = await import('googleapis');
  const key = await import(KEY_FILE, { with: { type: 'json' } });

  const auth = new google.auth.GoogleAuth({
    credentials: key.default,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  return token.token!;
}

async function submitUrl(url: string, token: string): Promise<{ url: string; status: string }> {
  const response = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      url,
      type: 'URL_UPDATED',
    }),
  });

  if (response.ok) {
    return { url, status: 'OK' };
  } else {
    const error = await response.text();
    return { url, status: `FAILED: ${response.status} - ${error}` };
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const urls = getPriorityUrls();
  console.log(`\n📋 ${urls.length} priority URLs to submit (base pages first)\n`);

  let token: string;
  try {
    token = await getAccessToken();
    console.log('✅ Authenticated with Google\n');
  } catch {
    console.error('❌ Failed to authenticate. Make sure google-service-account.json exists.');
    console.error('   See setup instructions at the top of this file.\n');
    console.log('--- URLs ready to submit manually via GSC ---');
    urls.slice(0, 20).forEach(u => console.log(u));
    console.log(`... and ${urls.length - 20} more\n`);
    return;
  }

  const batch = urls.slice(0, BATCH_SIZE);
  let success = 0;
  let failed = 0;

  for (const url of batch) {
    const result = await submitUrl(url, token);
    if (result.status === 'OK') {
      console.log(`  ✅ ${result.url}`);
      success++;
    } else {
      console.log(`  ❌ ${result.url} — ${result.status}`);
      failed++;
    }
    await sleep(DELAY_MS);
  }

  console.log(`\n📊 Results: ${success} submitted, ${failed} failed`);
  console.log(`   Remaining: ${urls.length - batch.length} URLs (run again tomorrow for next batch)\n`);
}

main().catch(console.error);
