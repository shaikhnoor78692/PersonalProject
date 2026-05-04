# AGENT 7 — Weekly Website Health Check
# Owner: Nooralam Shaikh | ScaleSnap | Created: May 4, 2026

# ════════════════════════════════════════════════════
# WHAT THIS AGENT DOES
# ════════════════════════════════════════════════════

Agent 7 is a deep weekly health check for scalesnap.in.
It runs every Monday after Agent Z.
It catches broken links, missing files, SEO regressions, payment
link issues, and design system drift BEFORE clients see them.

Time: 5–10 minutes
Cost: ₹0 (uses GitHub MCP + web_fetch — no paid tools)
Trigger: Type "Run Agent 7" every Monday

# ════════════════════════════════════════════════════
# WHEN TO RUN AGENT 7
# ════════════════════════════════════════════════════

Primary: Every Monday after Agent Z
Also run: After ANY website PR is merged (sanity check)
Also run: Before sending a proposal to a high-value lead
         (so they don't visit a broken site)

# ════════════════════════════════════════════════════
# HOW AGENT 7 WORKS — THE 4-STEP DEEP CHECK
# ════════════════════════════════════════════════════

## STEP 1 — FETCH THE SOURCE (GitHub MCP)

Claude uses GitHub MCP to fetch these files from the
shaikhnoor78692/PersonalProject repo, main branch:
  - docs/index.html
  - docs/style.css
  - docs/script.js
  - docs/CNAME
  - docs/privacy-policy.html
  - docs/terms-of-service.html
  - docs/scalesnap_logo_transparent.svg (verify exists)
  - docs/scalesnap_sample_blog.pdf (verify exists)

If GitHub MCP fails for any reason, fallback:
  Claude says: "GitHub MCP unavailable. Please paste the
  raw URL of docs/index.html and I'll fetch it directly."

## STEP 2 — FETCH THE LIVE SITE

Claude uses web_fetch to load https://scalesnap.in
This catches things the source code can't show:
  - HTTPS certificate status (active or pending?)
  - Actual page load (does it render?)
  - Real-world status codes for all linked URLs

## STEP 3 — RUN ALL 31 CHECKS

Claude runs each check below and marks PASS / WARN / FAIL.
Format: ✅ pass · ⚠️ warning · 🔴 fail

### CATEGORY A — SEO & METADATA (7 checks)
  A1. Page title present and under 60 chars
  A2. Meta description present and 120–160 chars
  A3. Canonical URL set to https://scalesnap.in
  A4. JSON-LD ProfessionalService schema present
  A5. og:image meta tag present and points to a real file
  A6. og:title and og:description match page title/desc
  A7. Twitter card meta present (twitter:card, :title, :description)

### CATEGORY B — NAVIGATION & SECTIONS (4 checks)
  B1. All 6 nav links present (Services, How It Works,
      Pricing, FAQ, About, Contact)
  B2. Each nav link points to a section ID that exists
  B3. All 8 expected sections present (#navbar, #hero,
      #services, #how-it-works, #about, #pricing, #faq, #contact)
  B4. Mobile hamburger has aria-expanded + aria-controls

### CATEGORY C — PAYMENT & EXTERNAL LINKS (5 checks)
  C1. Razorpay Starter link → rzp.io/rzp/5ettcpbh
  C2. Razorpay Growth link → rzp.io/rzp/rXSdDJ0
  C3. Razorpay Agency link → rzp.io/rzp/xz3E1vG
  C4. WhatsApp link → wa.me/918356012566 with rel=noopener
  C5. Blog sample PDF link works (file exists in docs/)

### CATEGORY D — CONTACT FORM (4 checks)
  D1. Formspree action URL → formspree.io/f/mojrjlkk
  D2. All 5 required fields present (name, email, service,
      budget, message) with aria-required
  D3. Success message div #formSuccess present
  D4. novalidate attribute set (custom JS validation)

### CATEGORY E — ACCESSIBILITY (4 checks)
  E1. Every <img> tag has alt attribute
  E2. At least 15 aria-labels across page
  E3. Required semantic roles present (navigation,
      contentinfo, alert, status)
  E4. Viewport meta tag set with width=device-width

### CATEGORY F — FOOTER (3 checks)
  F1. Privacy Policy link points to privacy-policy.html
      (NOT placeholder #)
  F2. Terms of Service link points to terms-of-service.html
      (NOT placeholder #)
  F3. Copyright year matches current year (auto-update reminder)

### CATEGORY G — PERFORMANCE (3 checks)
  G1. Google Fonts preconnect set
  G2. External dependencies count under 5
  G3. All <img> tags have loading="lazy"

### CATEGORY H — HOSTING & HTTPS (1 check)
  H1. https://scalesnap.in returns 200 OK with valid SSL
      (if returns 404/500/SSL error → 🔴 FAIL urgent)

## STEP 4 — DELIVER THE REPORT

Claude shows the result in this exact format:

```
📊 AGENT 7 — Weekly Website Health Check
Date: [Today's date]
Site: scalesnap.in

OVERALL: [X/31 pass] | [Y warnings] | [Z fails]
Health: 🟢 Excellent / 🟡 Good / 🔴 Needs attention

🔴 URGENT FIXES (if any)
  [list with exact file:line + what to change]

⚠️ THIS WEEK'S WARNINGS
  [list with priority — high/medium/low]

✅ ALL PASSING (collapsed)
  [count by category]

📈 CHANGES SINCE LAST WEEK
  [Compare with last Monday's report — what's new,
   what got fixed, what regressed]

NEXT ACTIONS:
  1. [Specific Claude Code prompt if fixes needed]
  2. [Or: "All clean — see you next Monday!"]
```

# ════════════════════════════════════════════════════
# WHAT AGENT 7 IS *NOT*
# ════════════════════════════════════════════════════

❌ Agent 7 does NOT:
  - Fix anything automatically (always asks first)
  - Run on its own (Nooralam triggers it)
  - Replace Agent 4 Audit (Agent 4 is bi-weekly deep
    config audit; Agent 7 is weekly link/health check)
  - Test JavaScript behavior (form validation, accordion
    open/close) — that requires browser automation, not
    static analysis

# ════════════════════════════════════════════════════
# DIFFERENCE FROM AGENT 4 AUDIT
# ════════════════════════════════════════════════════

Agent 4 (every 2 weeks):
  - Deep config review (DNS, GitHub Pages settings,
    Formspree quota, Razorpay account, Fiverr profile)
  - Strategic — "is the website still aligned with
    Phase 1 goals?"

Agent 7 (every Monday):
  - Tactical — "did anything break this week?"
  - Source code + live URL only
  - Quick pass/fail report

Both agents complement each other — never duplicate.

# ════════════════════════════════════════════════════
# CONTEXT MEMORY — UPDATE EVERY RUN
# ════════════════════════════════════════════════════

After every Agent 7 run, update this section:

## Last Run
Date: [Will be updated each Monday]
Score: [X/31]
Fails fixed: [list]
Warnings carried forward: [list]

## Run History (last 4 weeks)
Week 1 (May 4, 2026): [first run — establish baseline]
Week 2: [pending]
Week 3: [pending]
Week 4: [pending]

# ════════════════════════════════════════════════════
# MCPs NEEDED
# ════════════════════════════════════════════════════

✅ GitHub (already connected) — to fetch source files
✅ Web fetch (built-in) — to verify live URL
❌ No paid tools needed
❌ No browser automation needed
