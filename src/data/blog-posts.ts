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
    relatedSlugs: ["manual-qa-to-sdet-career-change", "playwright-interview-questions-2026"],
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
    relatedSlugs: ["sdet-interview-coach-app-guide", "playwright-interview-questions-2026"],
  },
  {
    slug: "playwright-interview-questions-2026",
    title: "Playwright Interview Questions — What SDET Interviewers Actually Ask in 2026",
    description: "Real Playwright interview questions from actual SDET interview panels. Covers locator strategies, auto-waiting, CI/CD integration, API testing, trace viewer, and the Playwright vs Selenium decision that trips up most candidates.",
    date: "2026-05-10",
    author: SITE_CONFIG.author,
    keywords: [
      "Playwright interview questions",
      "Playwright SDET interview",
      "Playwright automation testing interview",
      "Playwright interview questions 2026",
      "Playwright interview prep",
      "Playwright TypeScript interview",
      "Playwright test automation framework",
    ],
    content: `
<section class="content-section">
  <p>It's 11pm. You've got a Playwright SDET interview tomorrow morning. You've written tests with Playwright for a year. You know <code>page.locator()</code>, you can write a fixture in your sleep. But then the doubt creeps in: <em>what are they actually going to ask?</em></p>
  <p>You open a search tab. "Playwright interview questions." 50 results. All different. Some say study locators. Some say understand the architecture. Some list 70 questions you won't have time to memorise. None of them tell you what interviewers at HMRC, Accenture, Nationwide, and the MoD <em>really</em> care about.</p>
  <p>This guide is different. It's built from 20 years of sitting on both sides of the SDET interview table — asking the questions and answering them. It covers the <em>categories</em> interviewers probe, not just individual Q&As, so you can handle whatever variation comes your way. And it shows you exactly how <a href="/blog/sdet-interview-coach-app-guide">SDET Interview Coach</a> can drill you on these topics until they're second nature.</p>
</section>

<section class="content-section">
  <h2>Why Playwright Questions Keep Changing — and Why Most Candidates Are Stuck in 2023</h2>
  <p>Three years ago, Playwright interview questions were straightforward: "What's a locator?" "How do you run tests in parallel?" "What's the difference between Playwright and Selenium?"</p>
  <p>In 2026, that won't get you past the phone screen. Here's what's changed:</p>
  <ul style="margin: 1rem 0 1rem 1.5rem; line-height: 2;">
    <li><strong>Playwright now dominates enterprise hiring.</strong> In panels I've sat on at HMRC and the MoD, Playwright has replaced Selenium as the default framework for new test architecture. Interviewers expect depth, not surface knowledge.</li>
    <li><strong>AI testing questions are in the mix.</strong> Interviewers are adding questions about Playwright MCP (Model Context Protocol), AI-generated locators, and self-healing tests. If you can't speak to these, you'll look behind the curve.</li>
    <li><strong>CI/CD integration is table stakes.</strong> Running <code>npx playwright test</code> locally isn't enough. You need to explain how tests fit into a GitHub Actions pipeline, how you handle flakiness at scale, and what retry + reporter strategy you'd implement.</li>
  </ul>
  <p>Are you prepared for the AI-testing questions that 40% of panels now ask? Most candidates aren't — which means those who <em>are</em> stand out immediately.</p>
</section>

<section class="content-section">
  <h2>The 6 Categories Every Playwright Interview Tests</h2>
  <p>After conducting and sitting in hundreds of SDET interviews across HMRC, Nationwide, Accenture, and the Ministry of Defence, I've noticed a pattern. Playwright questions cluster into six categories. Interviewers don't ask one from each — but they will probe at least three. Master all six, and you can handle any panel.</p>

  <div class="challenge-grid">
    <div class="challenge-card">
      <h3>1. Locator Strategy & Selector Hierarchy</h3>
      <p>"How do you decide which locator to use?" The trap here is saying "I use CSS selectors." The right answer discusses the Playwright locator hierarchy: role-based → text-based → test IDs → CSS/XPath as last resort. Interviewers want to hear you prioritise accessibility-first, user-facing locators over brittle DOM selectors.</p>
    </div>
    <div class="challenge-card">
      <h3>2. Auto-Waiting & Actionability</h3>
      <p>"How does Playwright's auto-waiting work, and when does it fail?" Most candidates know Playwright auto-waits. Few can explain the actionability checks (visible, stable, enabled, receives events) or diagnose why a test that should pass is timing out. This is where mid-level candidates separate from senior.</p>
    </div>
    <div class="challenge-card">
      <h3>3. Fixtures, Hooks & Test Isolation</h3>
      <p>"Walk me through your test setup pattern." Senior interviewers want to hear about custom fixtures, worker-scoped vs test-scoped setup, auth state reuse, and how you prevent test pollution. They'll push you on what happens when two tests share state and one fails.</p>
    </div>
    <div class="challenge-card">
      <h3>4. CI/CD Pipeline Integration</h3>
      <p>"Your Playwright suite takes 20 minutes. How do you get it under 5?" This tests whether you understand sharding, parallel workers, retry strategy, failure triage with Trace Viewer, and how to balance coverage against pipeline speed. The most common trap candidates fall into: suggesting test deletion instead of intelligent parallelisation.</p>
    </div>
    <div class="challenge-card">
      <h3>5. API Testing with Playwright</h3>
      <p>"When would you use <code>request</code> context instead of browser automation?" Playwright's API testing capabilities catch many candidates off-guard. If you don't know you can mock API responses, intercept network calls, and validate contract schemas without opening a browser, you're leaving capability on the table.</p>
    </div>
    <div class="challenge-card">
      <h3>6. Playwright vs Selenium — The Decision Framework</h3>
      <p>"Why Playwright and not Selenium for this project?" Don't just list features. An interviewer testing for Lead SDET wants to hear a decision framework: when Playwright's auto-waiting and multi-browser support justify the migration cost, and when an existing Selenium suite with 5,000 tests should stay put. It's a tradeoffs question, not a features question.</p>
    </div>
  </div>
</section>

<section class="content-section">
  <h2>3 Playwright Interview Traps Most Candidates Fall Into</h2>
  <p>These are the questions that make interviewers lean back in their chairs and wait. They're not trick questions — but they separate people who've only written tests from people who understand the engineering.</p>

  <div class="benefit-grid">
    <div class="benefit-card">
      <span class="benefit-check">⚠️</span>
      <div>
        <h3>Trap #1: "Playwright auto-waits, so I don't need to handle waiting."</h3>
        <p>Auto-waiting covers actionability — but not data loading, API responses, or state changes from async operations. If you're testing a dashboard that fetches data after login, auto-waiting won't save you from a race condition. The winning answer discusses <code>waitForResponse</code>, <code>waitForURL</code>, and network idle strategies — and when <em>not</em> to use them (over-waiting bloats test time).</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">⚠️</span>
      <div>
        <h3>Trap #2: "I use the Trace Viewer to debug failures."</h3>
        <p>Using Trace Viewer is table stakes. The question that follows is: "How do you use traces <em>at scale</em> across 200 tests in CI?" The answer isn't opening traces one by one — it's about integrating trace-on-failure into your <code>playwright.config.ts</code>, pushing traces to an artifact store, and building a triage workflow that lets you diagnose without downloading 50MB snapshots for every failure.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">⚠️</span>
      <div>
        <h3>Trap #3: "Playwright is better than Selenium, so we should migrate everything."</h3>
        <p>A Lead-level interviewer will immediately push back: "What's the cost of migrating 5,000 Selenium tests? What happens to the test knowledge in those scripts? How do you validate migration accuracy?" The right answer weighs ROI, proposes a strangler-fig migration (new features in Playwright, legacy tests in Selenium until retired), and acknowledges that some test suites aren't worth the migration cost.</p>
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <h2>The AI-Testing Questions That 40% of Panels Now Ask</h2>
  <p>By mid-2026, AI-in-testing questions have moved from "nice to have" to "expected." In recent interview panels at Accenture, I've watched candidates who aced the Playwright fundamentals lose offers because they couldn't discuss AI testing concepts. Here's what's coming:</p>

  <div class="challenge-grid">
    <div class="challenge-card">
      <h3>Playwright MCP</h3>
      <p>"How would you use Model Context Protocol with Playwright?" Interviewers want to know you understand that MCP lets Claude AI control a browser directly — navigating, asserting, and debugging autonomously. The follow-up question is always about the human-in-the-loop: "When would you let AI run tests unattended, and when would you require human review?"</p>
    </div>
    <div class="challenge-card">
      <h3>AI-Generated Locators</h3>
      <p>"Would you let an LLM write your locators?" The sophisticated answer isn't yes or no — it's about the review pipeline. AI can generate role-based locators from component code faster than a human, but they need validation against dynamic states, i18n variations, and accessibility tree changes. Describe the review process, not the generation.</p>
    </div>
    <div class="challenge-card">
      <h3>Self-Healing Tests</h3>
      <p>"Your locator breaks because a developer renamed a button. What's your strategy?" Traditional answer: fix the locator. 2026 answer: implement AI-powered self-healing that maps broken locators to the closest semantic match, flags the change for human review, and learns from corrections over time. The key phrase interviewers want to hear: "confidence threshold."</p>
    </div>
  </div>
  <p style="margin-top: 1.5rem;">If your Playwright interview prep hasn't touched AI testing concepts, you're walking in with a gap that 4 in 10 panels will expose. <a href="/blog/sdet-interview-coach-app-guide">SDET Interview Coach</a> has a dedicated AI in Testing category that covers these exact topics — with the depth and follow-up questions you'd face in a real panel.</p>
</section>

<section class="content-section">
  <h2>How to Prepare: From Knowing to Performing Under Pressure</h2>
  <p>Knowing the answers is half the battle. Delivering them under interview pressure — when you've got 45 minutes to impress a panel of three — is the other half. Here's what works:</p>

  <div class="benefit-grid">
    <div class="benefit-card">
      <span class="benefit-check">🎯</span>
      <div>
        <h3>Practice Out Loud, Not in Your Head</h3>
        <p>Reading answers silently creates the illusion of mastery. Saying them out loud exposes gaps. You'll stumble on "auto-waiting actionability checks" the first five times. By the tenth, it'll roll off your tongue. SDET Interview Coach's mock interview mode forces this — 50-minute timed sessions with adaptive follow-ups that simulate the real thing.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">🔄</span>
      <div>
        <h3>Use Spaced Repetition, Not Cramming</h3>
        <p>If you cram Playwright concepts the night before, you might recall them in the interview. But you won't recall them on day one of the job — and interviewers can tell the difference between memorised answers and real understanding. The SM-2 spaced repetition system in SDET Interview Coach brings weak topics back at the right intervals so knowledge sticks.</p>
      </div>
    </div>
    <div class="benefit-card">
      <span class="benefit-check">📝</span>
      <div>
        <h3>Get AI Feedback on Your Answers</h3>
        <p>You can't grade your own interview answers. AI-graded feedback scores your responses on technical accuracy, completeness, communication, and code quality — showing you not just what you got wrong, but how to phrase it the way interviewers expect. It's like having a coach who's sat on 200+ interview panels giving you notes after every mock.</p>
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <h2>What a Real Playwright SDET Interview Looks Like — Timed Breakdown</h2>
  <p>Here's how most 60-minute SDET interview slots actually flow, based on panels I've conducted at HMRC, Nationwide, and consulting for Accenture:</p>

  <div class="timeline">
    <div class="timeline-step">
      <div class="timeline-week">0–10 min</div>
      <div class="timeline-content">
        <h3>Warm-Up & Experience Probe</h3>
        <p>"Tell us about a Playwright project you built." They're listening for framework ownership — did you set it up from scratch, or inherit an existing suite? Did you make architectural decisions? Expect follow-ups on why you chose specific patterns.</p>
      </div>
    </div>
    <div class="timeline-step">
      <div class="timeline-week">10–30 min</div>
      <div class="timeline-content">
        <h3>Technical Deep-Dive</h3>
        <p>Locator strategy, fixtures, parallel execution, CI/CD integration. You'll likely be asked to whiteboard a test for a given scenario. Don't just write the code — narrate your thinking. Interviewers are evaluating your engineering judgment, not your typing speed.</p>
      </div>
    </div>
    <div class="timeline-step">
      <div class="timeline-week">30–45 min</div>
      <div class="timeline-content">
        <h3>System Design & Tradeoffs</h3>
        <p>"Design a test framework for a microservices app with Playwright." This is where seniority is determined. Discuss fixture scoping, auth state management, test data strategy, reporting, and — importantly — what you'd do differently if the app had 50 services vs 5.</p>
      </div>
    </div>
    <div class="timeline-step">
      <div class="timeline-week">45–55 min</div>
      <div class="timeline-content">
        <h3>Behavioural & Culture Fit</h3>
        <p>STAR-format questions about flaky test incidents, disagreements with developers about test ownership, and how you mentor junior testers. The Playwright-specific angle: "Tell us about a time you had to convince a team to adopt Playwright."</p>
      </div>
    </div>
    <div class="timeline-step">
      <div class="timeline-week">55–60 min</div>
      <div class="timeline-content">
        <h3>Your Questions</h3>
        <p>Ask about their current test infrastructure, their biggest testing pain point, and what success looks like in the first 90 days. This shows you're thinking like an engineer who'll solve their problems, not just someone who wants a job.</p>
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <h2>How to Prepare for Your Playwright Interview — Starting Tonight</h2>
  <p>You don't need to memorise 70 answers. You need to understand the six categories, practice articulating your reasoning out loud, and get feedback on where your gaps are. Here's the 3-step plan:</p>

  <ol style="margin: 1rem 0 1rem 1.5rem; line-height: 2.2;">
    <li><strong>Download SDET Interview Coach</strong> and complete the 2-minute onboarding assessment. Select Playwright + TypeScript as your stack and your target seniority level. The app surfaces the questions that matter for <em>your</em> interview, not generic ones.</li>
    <li><strong>Run one mock interview today.</strong> Pick the Playwright stack, set a 30-minute timer, and answer the questions out loud — even if you stumble. The AI feedback will show you exactly which of the six categories needs work.</li>
    <li><strong>Use Job Match for your target role.</strong> Got a specific company in mind? Paste their job description into Job Match and get 50 questions tailored to their exact stack and seniority level. No more guessing what they'll ask.</li>
  </ol>

  <p style="margin-top: 1.5rem;">The window for being early to AI-testing interview prep is closing. By late 2026, every SDET panel will expect Playwright candidates to discuss MCP, AI locator strategies, and self-healing tests. The candidates who prepare now will be the ones setting the curve — not chasing it.</p>

  <p>If you're coming from a manual QA background, start with our guide on <a href="/blog/manual-qa-to-sdet-career-change">transitioning from manual QA to SDET</a> — it covers the full career-change roadmap, including which framework to learn first and how long the journey realistically takes.</p>
</section>
`,
    faqs: [
      {
        q: "What are the most important Playwright interview topics to study?",
        a: "The six categories interviewers consistently probe are: locator strategy and selector hierarchy (prioritising role-based and accessible locators over CSS/XPath), auto-waiting and actionability checks, fixtures and test isolation patterns, CI/CD pipeline integration including sharding and retry strategies, API testing with Playwright's request context, and the Playwright vs Selenium decision framework. Additionally, by mid-2026, expect questions about Playwright MCP, AI-generated locators, and self-healing test strategies.",
      },
      {
        q: "How should I answer 'Why Playwright over Selenium?' in an interview?",
        a: "Don't just list features. For junior/mid-level roles, discuss auto-waiting (reducing flakiness), multi-browser support (Chromium, Firefox, WebKit from one API), and built-in trace viewer. For senior/lead roles, present a decision framework: evaluate existing suite size, team expertise, migration cost, CI/CD pipeline compatibility, and whether the project benefits from Playwright-specific capabilities like API testing within the same test run. Propose a strangler-fig migration pattern where appropriate rather than a big-bang rewrite.",
      },
      {
        q: "Does the SDET Interview Coach app cover Playwright interview questions?",
        a: "Yes. SDET Interview Coach includes Playwright-specific questions across all five seniority levels, from Junior to Lead. The Playwright + TypeScript stack is one of six supported tech stacks. Questions include short and long answers, code samples, interviewer follow-ups, and common mistakes to avoid. The app also offers timed Playwright mock interviews and AI-graded feedback on your responses. Use Job Match to generate 50 bespoke questions from any Playwright SDET job description.",
      },
      {
        q: "What's the hardest Playwright interview question candidates get wrong?",
        a: "The question that trips up most candidates isn't a technical one — it's a system-design question: 'Design a test framework for a microservices app using Playwright.' Candidates who've only written tests struggle with fixture scoping, auth state management across services, test data strategy, reporting architecture, and how to balance test coverage with pipeline execution time. Senior candidates are expected to discuss these tradeoffs, not just write passing tests.",
      },
      {
        q: "How do I handle Playwright CI/CD questions in an interview?",
        a: "Be prepared to discuss: (1) How you configure parallel workers and sharding in playwright.config.ts, (2) Your retry strategy — how many retries, when to retry vs fail fast, (3) Trace-on-failure configuration and how you triage failures at scale, (4) How you handle flaky tests — quarantine suites, automatic retry thresholds, and flakiness dashboards, (5) Integration with GitHub Actions, Jenkins, or GitLab CI, including artifact storage for traces and reports. Avoid suggesting you'd remove tests to speed up the pipeline — interviewers want to hear about intelligent parallelisation and sharding.",
      },
    ],
    relatedSlugs: ["sdet-interview-coach-app-guide", "manual-qa-to-sdet-career-change"],
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
