const fs = require('fs');
const path = require('path');

const blogFile = path.join(__dirname, '..', 'src', 'data', 'blog-posts.ts');
let content = fs.readFileSync(blogFile, 'utf8');

// Convert JSON-format posts back to TypeScript format (unquoted keys)
// Match the JSON-style posts that were just inserted
const jsonMarker = 'export const BLOG_POSTS: BlogPost[] = [\n{';
const tsMarker = 'export const BLOG_POSTS: BlogPost[] = [\n{';

// Read the current state — we need to find the JSON posts and unquote their keys
// The JSON posts start after the BLOG_POSTS declaration

// Strategy: find "slug": pattern and unquote top-level keys
// Pattern: replace "key": with key: for top-level object keys in the post definitions
// But only in the first two posts which are JSON-formatted

// Let's identify the boundary — the third post starts with the old format
// Find the position of the third occurrence of '"slug":' or 'slug:' after BLOG_POSTS

const arrStart = content.indexOf('export const BLOG_POSTS: BlogPost[] = [');
let searchFrom = content.indexOf('{\n  "slug":', arrStart);
let endOfSecondPost = -1;

// Find the third post (first original-format post)
// Look for the pattern that signals end of JSON posts
// JSON posts have "relatedSlugs": [...] pattern ending with ]
// Then followed by comma and new JSON post or original post

// Simpler approach: convert ALL "key": patterns to key: but only at the top level of objects
// This is complex. Let me just rewrite the two posts in proper TS format.

// Actually the simplest fix: find the two JSON posts and replace quoted keys
// The JSON posts use 2-space indentation and have "key": format
// The original posts use 4-space indentation and have key: format

// Let me locate the boundaries
let pos = arrStart;
// Skip past 'export const BLOG_POSTS: BlogPost[] = [\n'
pos = content.indexOf('{\n', pos);
if (pos === -1) { console.error('Cannot find first post'); process.exit(1); }

// Find the start of the third post (first old-format post)
// After the JSON posts, the old format starts with '{\n    slug:'
const oldFormatStart = content.indexOf('{\n    slug:', pos);
if (oldFormatStart === -1) { console.error('Cannot find old-format posts'); process.exit(1); }

// Extract the JSON portion and the rest
const before = content.substring(0, pos);
const jsonPostsSection = content.substring(pos, oldFormatStart);
const after = content.substring(oldFormatStart);

// Convert JSON keys to unquoted TS keys for top-level object properties
// Match patterns like \n  "key": → \n    key:
// And \n    "key": → \n        key: (nested)
// And the opening {"slug": pattern
function jsonKeysToTS(str) {
  // Top-level keys: 2-space indent followed by "key":
  str = str.replace(/\n {2}"(\w+)":/g, '\n    $1:');
  // Nested keys (inside content, arrays): 4-space indent followed by "key":
  str = str.replace(/\n {4}"(\w+)":/g, '\n        $1:');
  // First key in an object
  str = str.replace(/\n\{"(\w+)":/g, '\n{ $1:');
  // Handle opening brace with key: {\n  "slug" → {\n    slug
  // Handle faqs array items: {\n          "q":
  str = str.replace(/\n {6}"(\w+)":/g, '\n            $1:');
  str = str.replace(/\n {8}"(\w+)":/g, '\n                $1:');
  str = str.replace(/\n {10}"(\w+)":/g, '\n                    $1:');
  // Content string — leave as-is, it's inside backticks
  // Fix author: SITE_CONFIG.author (already correct from our replacement)
  return str;
}

const tsJsonPosts = jsonKeysToTS(jsonPostsSection);

// Also the opening of the first JSON post has {\n  "slug"
// Let's also handle the specific case for the very first key
// The pattern is: [\n{\n  "slug": → [\n{\n    slug:
let finalSection = tsJsonPosts;

content = before + finalSection + after;
fs.writeFileSync(blogFile, content, 'utf8');
console.log('Fixed JSON keys to TypeScript format');
