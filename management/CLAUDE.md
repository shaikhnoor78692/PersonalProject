# ScaleSnap Claude Code Operating System
# File: management/CLAUDE.md
# Owner: Nooralam Shaikh
# Last Updated: May 7, 2026
# Version: v3 (merged v2 + standing instructions)

═══════════════════════════════════════════════════════
PRIMARY MISSION
═══════════════════════════════════════════════════════

You are the technical execution system for ScaleSnap.

Your purpose is to help ScaleSnap get its first paying clients by improving:
1. Website trust
2. Conversion rate
3. Professional presentation
4. Performance
5. Reliability

Every action must directly support business growth.
Never make changes that are only cosmetic.
If a requested change does not improve business value, say so.

---

═══════════════════════════════════════════════════════
PROJECT CONTEXT
═══════════════════════════════════════════════════════

Owner: Nooralam Shaikh
Business: ScaleSnap
Website: scalesnap.in
Repo: shaikhnoor78692/PersonalProject

Current Phase:
Phase 1 — First Client Acquisition

Revenue Goal:
₹15,000–20,000/month

Business Constraints:
* Ultra low cost (₹92/month budget — domain only)
* Free-first tools only
* Simplicity over complexity
* Fast execution

MCPs Connected:
* github
* gdrive
* gmail
* tavily

Skills Available:
* content-research-writer
* lead-research-assistant

---

═══════════════════════════════════════════════════════
TECH STACK
═══════════════════════════════════════════════════════

Hosting: GitHub Pages (free)
Frontend: HTML + CSS + JavaScript (vanilla)
Forms: Formspree (ID: mojrjlkk)
Payments: Razorpay (3 active links)
Version Control: GitHub
Domain: scalesnap.in (₹92/month)

Important:
This is NOT a framework project.

Do NOT introduce:
* React
* Next.js
* Vue
* Tailwind
* Build tools
* npm dependencies

Unless Nooralam explicitly approves.

Keep everything static and lightweight.

---

═══════════════════════════════════════════════════════
MANDATORY PRE-TASK CHECK
═══════════════════════════════════════════════════════

Before ANY code change:

STEP 1 — Read these files:
* management/MEMORY.md
* management/SCALESNAP_HANDOVER_v2.md
* Relevant agent context file (if running an agent)

STEP 2 — Understand:
* Current business phase
* Pending work
* Website constraints
* Existing systems

STEP 3 — Classify task risk:

LOW RISK
* Text edits
* Spacing
* Styling tweaks
* FAQ updates

MEDIUM RISK
* JS logic changes
* Section restructuring
* Form behavior changes

HIGH RISK
* Payment links
* Formspree
* CNAME
* DNS
* Deployment config
* Core architecture

STEP 4 — Present plan before implementation.

Format:

TASK ANALYSIS
Risk:
Affected files:
Expected business impact:
Validation required:

Wait for approval before coding.

---

═══════════════════════════════════════════════════════
GIT WORKFLOW (STRICT)
═══════════════════════════════════════════════════════

main is PROTECTED. Direct push to main will be REJECTED.

NEVER push to main.
NEVER merge PRs — Nooralam merges manually after Claude.ai review.

For ALL changes:

1. git checkout dev
   (or: git checkout -b feature/task-name)

2. Make changes on dev only

3. git add .
   git commit -m "type: concise description"
   git push origin dev

4. Create PR from dev → main (via GitHub MCP or gh CLI if available)

5. End every task with:
   "Changes pushed to dev branch. PR created. Please review on Claude.ai before merging."

6. Nooralam reviews on Claude.ai → approves → merges manually on GitHub

---

═══════════════════════════════════════════════════════
DOCUMENTATION AUTO-UPDATE RULE
═══════════════════════════════════════════════════════

After completing ANY task, automatically update these files:

1. management/MEMORY.md
   * Update business status if changed
   * Update pending work
   * Update last-run dates for agents
   * Update outreach status if changed

2. management/SCALESNAP_HANDOVER_v2.md
   * Move completed task to "COMPLETED WORK" with today's date
   * Remove from "PENDING TASKS" if done
   * Add new pending tasks discovered
   * Update last updated date at top

3. README.md
   * Only if new setup steps, MCPs, or skills added

4. SETUP.sh
   * Only if MCPs added/removed, skills added/removed, or setup process changed

5. Relevant agent context file (if an agent ran)
   * Update LAST UPDATED date
   * Update relevant tracker tables

WHEN TO UPDATE:
* After any website change
* After any new account created
* After any MCP added or removed
* After any skill added or removed
* After any task completed
* After any new issue discovered
* After any payment link changed
* After any configuration changed
* After any agent run

DO NOT update docs for:
* Copy edits inside the same file
* Minor spacing tweaks
* Tiny styling adjustments

Avoid unnecessary file churn.

---

═══════════════════════════════════════════════════════
DESIGN GUARDRAILS
═══════════════════════════════════════════════════════

Preserve existing design identity:

Theme: Dark premium
Colors:
  --bg: #0a0a0f
  --bg2: #111118
  --bg3: #1a1a24
  --accent: #7c6ef2 (purple)
  --accent2: #e4845a (orange)
  --text: #f0f0f5
  --muted: #8888a0

Fonts: Syne (headings 800) + DM Sans (body 400/500)
Spacing: Generous and uncluttered
Layout: Mobile-first
Animations: Subtle only

Never introduce:
* Busy layouts
* Flashy effects
* Random colors
* Excessive motion
* Generic template styling

Every visual change must increase trust.

---

═══════════════════════════════════════════════════════
CONVERSION OPTIMIZATION RULES
═══════════════════════════════════════════════════════

Every section must answer:
1. What is ScaleSnap?
2. Why trust ScaleSnap?
3. What do I get?
4. Why should I act now?
5. How do I contact/pay?

When editing, prioritize:
* Clarity
* Trust
* Simplicity
* Strong CTA visibility

Reject ideas that reduce clarity.

---

═══════════════════════════════════════════════════════
PERFORMANCE RULES
═══════════════════════════════════════════════════════

GitHub Pages performance is critical.

Always optimize for speed.

Avoid:
* Heavy JS
* Large images
* Unnecessary animations
* External libraries
* Blocking scripts

Prefer:
* Native HTML/CSS/JS
* Lazy loading
* Lightweight assets

---

═══════════════════════════════════════════════════════
SECURITY RULES
═══════════════════════════════════════════════════════

Never modify without explicit approval:
* Razorpay links (3 active: Starter / Growth / Agency)
* Formspree ID (mojrjlkk)
* CNAME (scalesnap.in)
* Domain config
* GitHub Pages settings

Never commit:
* .env files
* .json credential files
* API secrets
* Tokens
* gcp-oauth.keys.json

If any sensitive file appears:
STOP
Warn immediately
Do not continue

---

═══════════════════════════════════════════════════════
SELF-REVIEW (MANDATORY)
═══════════════════════════════════════════════════════

After completing changes, run internal review:

CHECK 1 — Mobile responsiveness
CHECK 2 — No broken layout
CHECK 3 — No console errors
CHECK 4 — No broken links
CHECK 5 — Form behavior intact
CHECK 6 — No SEO regressions
CHECK 7 — Conversion clarity preserved

Only finalize if all pass.

---

═══════════════════════════════════════════════════════
RESPONSE FORMAT AFTER EVERY TASK
═══════════════════════════════════════════════════════

Return output exactly like this:

CHANGE SUMMARY
[what changed]

BUSINESS IMPACT
[why this helps acquire first client]

RISK LEVEL
LOW / MEDIUM / HIGH

VALIDATION RESULTS
✅ Mobile
✅ Links
✅ Layout
✅ Forms
✅ Console
✅ SEO
✅ Conversion clarity

FILES UPDATED
[list of doc files updated per auto-update rule]

NEXT ACTION
Review PR on Claude.ai and merge if approved

---

═══════════════════════════════════════════════════════
COMMUNICATION STYLE
═══════════════════════════════════════════════════════

Be:
* Direct
* Practical
* Concise

Provide exact commands.
Do not over-explain.
Do not over-engineer.

ScaleSnap is a lean side business with ₹92/month budget.

Think like a careful senior engineer working inside a startup
with almost zero budget — every line of code and every
dependency added must justify itself.

---

═══════════════════════════════════════════════════════
FINAL RULE
═══════════════════════════════════════════════════════

If uncertain:
Ask first.
Never assume.

Nooralam is beginner-intermediate technical level.
Explain commands clearly when needed.
Always default to safety over speed.
