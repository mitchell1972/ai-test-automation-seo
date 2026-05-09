import { SITE_CONFIG } from "./seo-data";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
  content: string; // HTML content
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sdet-interview-coach-app-guide",
    title: "SDET Interview Coach — The Mobile App That Prepares You for Real SDET Interviews",
    description: "SDET Interview Coach is a mobile interview-prep app with 800+ questions, mock interviews, AI-graded feedback, and Job Match. Built for manual QAs transitioning to automation and experienced SDETs targeting senior roles.",
    date: "2026-05-10",
    author: SITE_CONFIG.author,
    keywords: [
      "SDET interview prep",
      "SDET interview app",
      "QA to SDET transition",
      "test automation interview questions",
      "SDET Interview Coach",
      "mobile interview prep app",
    ],
    content: `
<section class="content-section">
  <p>The SDET interview is unlike any other technical interview. You're tested on coding, test strategy, framework design, CI/CD, behavioural scenarios, and increasingly — AI in testing. Most candidates walk in underprepared because generic interview prep resources don't cover the breadth of what real interviewers ask.</p>
  <p><strong>SDET Interview Coach</strong> was built to solve this — by an SDET with 20 years of experience hiring and being hired. It's a mobile app that prepares you for exactly what interviewers ask, in the format they ask it, with feedback that points at your gaps.</p>
</section>

<section class="content-section">
  <h2>What Makes SDET Interview Coach Different</h2>
  <p>Most SDET interview prep goes like this: you Google "SDET interview questions," find a listicle of 20 generic questions with one-sentence answers, and hope for the best. That's not how real interviews work.</p>
  <p>SDET Interview Coach takes a structured, multi-layered approach:</p>

  <div class="benefit-grid">
    <div class="benefit-card">
      <span class="benefit-check">📚</span>
      <div>
        <h3>800+ Question Bank Across 32 Topics</h3>
        <p>Every question includes a short answer, detailed long answer, code samples in the relevant language, follow-up questions an interviewer would ask, watch-outs for common mistakes, and real-world context. The bank grows every night with ~150 new AI-generated questions.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">⏱️</span>
      <div>
        <h3>Mock Interviews That Feel Real</h3>
        <p>Five seniority levels from Junior to Lead, plus a dedicated QA→SDET career-change track. Timed sessions with adaptive follow-ups mirror the pressure of a real on-site loop. Six tech stacks to choose from including Playwright, Selenium, and AI-native testing.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">🤖</span>
      <div>
        <h3>AI-Graded Answer Feedback</h3>
        <p>Type your answer to any question and get instant feedback scored across four dimensions: technical accuracy, completeness, communication, and code quality. Learn not just what to say, but how to say it the way interviewers expect.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">🎯</span>
      <div>
        <h3>Job Match — Bespoke Questions for Your Role</h3>
        <p>Paste a real job description (or photograph it) and the AI generates 50 interview questions tailored to that exact role — matching the stack, seniority, and frameworks in the JD you're applying for.</p>
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <h2>Built for the Manual QA → SDET Transition</h2>
  <p>The hardest jump in software testing isn't learning a new framework — it's learning to think like an SDET. Manual testers know how to find bugs. They don't necessarily know how to articulate test strategy, discuss flakiness root causes, or explain why they'd choose Playwright over Selenium for a given project.</p>
  <p>SDET Interview Coach bridges this gap with features built specifically for career changers:</p>
  <ul style="margin: 1rem 0 1rem 1.5rem; line-height: 2;">
    <li><strong>Onboarding assessment</strong> — tell the app you're a manual QA targeting junior SDET, and it reorganises around you. No wading through Lead-level content.</li>
    <li><strong>QA→SDET mock interview</strong> — 50-minute sessions with questions that bridge existing testing knowledge with automation concepts.</li>
    <li><strong>Bootcamp tracks with AI mentors</strong> — Playwright + TypeScript for QAs, Playwright + Python, and more. The AI mentor meets you at your level and walks through concepts step by step.</li>
    <li><strong>Spaced repetition system</strong> — questions you get wrong come back at the right interval so automation concepts stick long-term, not just for 24 hours of cramming.</li>
  </ul>
</section>

<section class="content-section">
  <h2>AI in Testing — The Category Interviewers Are Adding Right Now</h2>
  <p>By late 2026, AI-in-testing questions will be standard in SDET interviews. Most candidates haven't prepared for them at all. SDET Interview Coach covers:</p>
  <div class="challenge-grid">
    <div class="challenge-card">
      <h3>Playwright MCP</h3>
      <p>How Model Context Protocol enables autonomous browser testing with Claude AI. What MCP means for test architecture and how to discuss it in interviews.</p>
    </div>
    <div class="challenge-card">
      <h3>LLM Test Generation</h3>
      <p>How to evaluate AI-generated tests, when to trust them, when to override, and how to build a human-in-the-loop review process that scales.</p>
    </div>
    <div class="challenge-card">
      <h3>Prompt Injection Testing</h3>
      <p>Testing AI systems for prompt injection vulnerabilities. An entirely new testing discipline that forward-thinking organisations are already hiring for.</p>
    </div>
    <div class="challenge-card">
      <h3>Self-Healing Locators</h3>
      <p>How AI-powered locator strategies work, the tradeoffs between reliability and fragility, and how to discuss them credibly with a technical interviewer.</p>
    </div>
  </div>
</section>

<section class="content-section">
  <h2>Spaced Repetition — Why Last-Minute Cramming Fails</h2>
  <p>Interview prep isn't a memorisation exercise. If you cram 50 questions the night before and get the job, you still need to perform on day one. The spaced repetition engine in SDET Interview Coach is calibrated specifically for technical interview prep:</p>
  <div class="benefit-grid">
    <div class="benefit-card">
      <span class="benefit-check">🔄</span>
      <div>
        <h3>Questions You Get Wrong Come Back Sooner</h3>
        <p>The SM-2 algorithm adjusts intervals based on your self-grading (Confident, Partial, Don't Know). Weak areas surface more frequently until you've mastered them.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">📊</span>
      <div>
        <h3>Topic Heatmaps Show Your Gaps</h3>
        <p>The progress dashboard visualises which topics are strong and which need work. No guessing where to focus your study time.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">📅</span>
      <div>
        <h3>Activity Calendar Tracks Consistency</h3>
        <p>GitHub-style contribution grid showing your daily practice. Streak milestones at 7, 30, 100, and 365 days keep motivation high.</p>
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <h2>What Sets SDET Interview Coach Apart</h2>
  <div class="comparison-table-wrapper">
    <table class="comparison-table">
      <thead>
        <tr><th>Feature</th><th>Generic Prep Sites</th><th>SDET Interview Coach</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Question format</strong></td><td>One-line answers</td><td>Short answer + long answer + code + follow-ups + watch-outs</td></tr>
        <tr><td><strong>AI feedback</strong></td><td>Multiple choice quizzes</td><td>4-dimension scored feedback on your written answers</td></tr>
        <tr><td><strong>Job-specific prep</strong></td><td>None</td><td>Job Match generates 50 questions from your actual JD</td></tr>
        <tr><td><strong>Mock interviews</strong></td><td>Static Q&A lists</td><td>Timed sessions with adaptive follow-ups, 5 seniority levels</td></tr>
        <tr><td><strong>AI in testing</strong></td><td>Not covered</td><td>Dedicated category: MCP, LLM test gen, prompt injection</td></tr>
        <tr><td><strong>QA→SDET track</strong></td><td>Doesn't exist</td><td>Career-change mock level + bootcamp tracks + onboarding</td></tr>
        <tr><td><strong>Spaced repetition</strong></td><td>None</td><td>SM-2 algorithm calibrated for technical interview retention</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="content-section">
  <h2>Get Started with SDET Interview Coach</h2>
  <p>Whether you're a manual QA making the leap to automation, a mid-level SDET targeting a senior role, or a lead preparing for a principal interview — the app adapts to where you are and builds a path from there.</p>
  <p>Available on the iOS App Store. The onboarding assessment takes 2 minutes. After that, every question, every mock interview, and every recommendation is tuned to your role, your stack, and your goals.</p>
</section>
`,
    faqs: [
      {
        q: "What is SDET Interview Coach?",
        a: "SDET Interview Coach is a mobile interview preparation app for Software Development Engineers in Test. It includes an 800+ question bank covering 32 topics, timed mock interviews across five seniority levels, AI-graded answer feedback, a Job Match feature that generates bespoke questions from a real job description, spaced repetition for long-term retention, and dedicated learning paths for manual QAs transitioning to SDET roles.",
      },
      {
        q: "How does the Job Match feature work?",
        a: "You paste a job description (or upload a PDF, or photograph it), and the AI extracts the skill tags, frameworks, and seniority level from the JD. It then generates 50 interview questions tailored specifically to that role — matching the exact tech stack and level of the position you're applying for. Raw documents are never stored, only anonymised tags.",
      },
      {
        q: "Is SDET Interview Coach suitable for manual testers transitioning to automation?",
        a: "Yes, it was specifically built with this transition in mind. The onboarding assessment lets you identify as a manual QA, and the app reorganises around that — surfacing junior-level content, providing a dedicated QA→SDET career-change mock interview level, and offering bootcamp tracks where AI mentors explain automation concepts using language manual testers already understand.",
      },
      {
        q: "Does the app cover AI in testing topics?",
        a: "Yes. SDET Interview Coach has a dedicated AI in Testing category covering Playwright MCP (Model Context Protocol), LLM-powered test generation, prompt injection testing, self-healing locator strategies, AI test review, RAG testing, and AI agents. These are increasingly common in SDET interviews and most candidates are unprepared for them.",
      },
      {
        q: "How does the spaced repetition system help with interview prep?",
        a: "The SM-2 spaced repetition algorithm tracks which questions you answer confidently, partially, or not at all. Questions you struggle with reappear sooner, while mastered questions surface less frequently. This ensures you retain technical knowledge long-term rather than cramming the night before an interview and forgetting everything afterwards.",
      },
    ],
    relatedSlugs: [],
  },
  {
    slug: "manual-qa-to-sdet-career-change",
    title: "From Manual QA to SDET — How to Make the Career Transition Without a CS Degree",
    description: "How to transition from manual QA to SDET without a computer science degree. Covers the skills gap, interview preparation, frameworks to learn, and how SDET Interview Coach helps bridge the gap.",
    date: "2026-05-10",
    author: SITE_CONFIG.author,
    keywords: [
      "manual QA to SDET",
      "QA to automation engineer",
      "become SDET without CS degree",
      "career change to test automation",
      "SDET career transition",
      "manual tester to automation",
    ],
    content: `
<section class="content-section">
  <p>Every week, manual testers watch job postings for SDET roles scroll past — Playwright, TypeScript, CI/CD, test framework design — and think: "I don't have a CS degree. I can't make that jump."</p>
  <p>They're wrong. Manual testers bring something CS graduates don't: years of experience finding bugs, understanding user behaviour, and knowing what a well-tested product actually looks like. The missing piece isn't intelligence or aptitude — it's knowing what to learn and how to articulate it in an interview.</p>
</section>

<section class="content-section">
  <h2>The Real Gap Between Manual QA and SDET</h2>
  <p>Let's be specific about what needs to change. It's not "learn to code." It's five concrete things:</p>
  <ol style="margin: 1rem 0 1rem 1.5rem; line-height: 2.2;">
    <li><strong>Learn one automation framework deeply.</strong> Not five frameworks at surface level. Pick Playwright or Selenium and learn it properly — locators, waits, fixtures, CI integration, parallel execution.</li>
    <li><strong>Learn to discuss test strategy.</strong> Interviewers ask: "How would you test this?" They don't want a list of test cases. They want your reasoning about risk, priority, and coverage tradeoffs.</li>
    <li><strong>Understand CI/CD and how tests fit.</strong> Tests that run locally are half the job. You need to articulate where tests live in the pipeline, how they block deploys, and how to handle flakiness at scale.</li>
    <li><strong>Learn to read and write basic code.</strong> Not full-stack engineering. But you need to read application code to understand what you're testing, and write maintainable test code.</li>
    <li><strong>Learn to talk like an engineer.</strong> This is the one nobody mentions. Manual testers describe bugs. Engineers describe root causes, tradeoffs, and architectural implications. The language shift is as important as the technical skills.</li>
  </ol>
</section>

<section class="content-section">
  <h2>The Interview Is the Hardest Part — Here's How to Prepare</h2>
  <p>Most manual testers spend months learning Playwright or Selenium, then fail the interview because they couldn't articulate why they chose explicit waits over implicit waits, or explain what makes a test framework maintainable at scale. The technical skill was there — the interview skill wasn't.</p>
  <p>SDET Interview Coach was designed to prevent exactly this. Key features for career changers:</p>

  <div class="benefit-grid">
    <div class="benefit-card">
      <span class="benefit-check">🧭</span>
      <div>
        <h3>Onboarding Assessment</h3>
        <p>5 steps. Tell the app you're a manual QA targeting junior SDET. It surfaces junior-level questions in your target framework. No senior-level content to overwhelm you.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">🎤</span>
      <div>
        <h3>QA→SDET Career-Change Mock Interview</h3>
        <p>A dedicated 50-minute mock interview level that bridges manual testing experience with automation concepts. Questions are designed to help you "talk like an SDET" before you get in the room.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">📝</span>
      <div>
        <h3>AI-Graded Feedback</h3>
        <p>Type your answers and get scored on technical accuracy, completeness, communication, and code quality. Learn how to articulate concepts the way interviewers expect.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">🛤️</span>
      <div>
        <h3>Bootcamp Tracks with AI Mentors</h3>
        <p>Playwright + TypeScript for QAs, Playwright + Python, and more. The AI mentor assumes zero automation background and builds concepts step by step with real code examples.</p>
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <h2>The Framework Question — Which One Should You Learn First?</h2>
  <p>If you're coming from manual testing and can choose, start with <strong>Playwright + TypeScript</strong>. Here's why:</p>
  <ul style="margin: 1rem 0 1rem 1.5rem; line-height: 2;">
    <li>Playwright has auto-waiting built in — fewer flaky tests while you're learning</li>
    <li>TypeScript catches errors at compile time, not runtime — faster feedback when you make mistakes</li>
    <li>Playwright is the fastest-growing framework in UK job postings for SDET roles</li>
    <li>Microsoft maintains it, so documentation and community are excellent</li>
  </ul>
  <p>That said, Selenium still dominates in enterprise environments. If the companies you're targeting use Java and Selenium, learn those. SDET Interview Coach supports both stacks, plus Cypress, Appium, and AI-native testing.</p>
</section>

<section class="content-section">
  <h2>The Timeline — How Long Does the Transition Actually Take?</h2>
  <p>With consistent daily practice (30-60 minutes), here's a realistic timeline:</p>
  <div class="timeline">
    <div class="timeline-step">
      <div class="timeline-week">Month 1</div>
      <div class="timeline-content">
        <h3>Foundation</h3>
        <p>Learn one framework's core API. Write your first 20 tests. Understand locators, assertions, and basic CI integration. Use the bootcamp track in SDET Interview Coach to stay focused.</p>
      </div>
    </div>
    <div class="timeline-step">
      <div class="timeline-week">Month 2</div>
      <div class="timeline-content">
        <h3>Depth & Strategy</h3>
        <p>Learn test design patterns. Understand flakiness root causes. Practice behavioural/STAR questions about testing scenarios. Start using mock interviews to simulate real pressure.</p>
      </div>
    </div>
    <div class="timeline-step">
      <div class="timeline-week">Month 3</div>
      <div class="timeline-content">
        <h3>Interview Ready</h3>
        <p>Drill weak areas identified by the progress dashboard. Use Job Match to prepare for specific roles. Complete full mock interviews at your target seniority level. Take interviews for real.</p>
      </div>
    </div>
  </div>
  <p style="margin-top: 1.5rem;">Some people do it in 8 weeks. Some take 6 months. What makes the difference isn't raw intelligence — it's consistency and practicing the right things. SDET Interview Coach removes the guesswork from "what should I study today?"</p>
</section>

<section class="content-section">
  <h2>Start the Transition</h2>
  <p>The hardest step is the first one. Download SDET Interview Coach, complete the 2-minute onboarding assessment, and let the app build your path. Every day you practice is a day closer to your first SDET interview — and your first SDET offer.</p>
</section>
`,
    faqs: [
      {
        q: "Can I become an SDET without a computer science degree?",
        a: "Yes. Many successful SDETs come from manual QA backgrounds without CS degrees. What matters in interviews is your ability to demonstrate testing knowledge, articulate test strategy, write maintainable automation code, and discuss tradeoffs — none of which require a CS degree. SDET Interview Coach was built specifically for this career path.",
      },
      {
        q: "How long does it take to transition from manual QA to SDET?",
        a: "With consistent daily practice (30-60 minutes), most manual testers can be interview-ready in 3-4 months. Some achieve it in 8 weeks with intensive study. The key factors are: choosing one framework and going deep rather than spreading across many, practicing mock interviews under timed conditions, and using spaced repetition to retain what you learn.",
      },
      {
        q: "Which test automation framework should a manual tester learn first?",
        a: "Playwright + TypeScript is the recommended starting point for most career changers because of its built-in auto-waiting (fewer flaky tests while learning), compile-time error catching with TypeScript, excellent documentation, and its position as the fastest-growing framework in UK SDET job listings. However, if your target companies use Selenium + Java, learn that stack instead — SDET Interview Coach supports both.",
      },
      {
        q: "What's the hardest part of the manual QA to SDET transition?",
        a: "Most career changers find the interview itself harder than learning the technical skills. You may know how to write Playwright tests, but if you can't articulate why you chose a particular locator strategy or explain your approach to reducing CI pipeline flakiness, the interviewer won't see your competence. This is why SDET Interview Coach emphasises mock interviews and AI-graded feedback on your communication, not just your technical accuracy.",
      },
    ],
    relatedSlugs: ["sdet-interview-coach-app-guide"],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getLatestPosts(count?: number): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count ?? BLOG_POSTS.length);
}
