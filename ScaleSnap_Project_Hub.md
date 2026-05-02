# ScaleSnap — Project Hub
**Owner:** Nooralam Shaikh | Mumbai
**Last updated:** May 2, 2026

---

## 1. PROJECT OVERVIEW

| Field | Details |
|-------|---------|
| **Business** | ScaleSnap — AI Content Agency |
| **Website** | scalesnap.in |
| **Phase** | Phase 1 — Getting First Client |
| **Monthly Cost** | ₹92/month (domain only) |
| **Revenue** | ₹0 so far |
| **Target** | ₹15,000/month |
| **Active Leads** | Dipti Mohite, Aalok Choubey, Abhisek Dey |
| **Follow-up Due** | May 4, 2026 |
| **Next Action** | Check email/LinkedIn replies → follow up if no reply |

### Business Status At a Glance

| Platform | Status |
|----------|--------|
| Website (scalesnap.in) | ✅ Live |
| Fiverr (fiverr.com/scalesnap) | ✅ Live — 10/12 profile score |
| LinkedIn (linkedin.com/in/nooralam-scalesnap) | ✅ Live |
| Razorpay (3 payment links) | ✅ Active |
| PayPal | ⏳ Pending bank verification |
| GitHub MCP | ✅ Connected |
| Google Drive MCP | ✅ Connected |
| Gmail MCP | ✅ Connected |
| Tavily MCP | ✅ Connected |

### Phase Roadmap

| Phase | Revenue Trigger | Monthly Cost | Focus |
|-------|----------------|-------------|-------|
| **Phase 1 (NOW)** | — | ₹92/mo | Get first 3 clients manually |
| Phase 2 | ₹15,000/mo | ₹800/mo | Buffer — social media scheduling |
| Phase 3 | ₹30,000/mo | ₹1,500/mo | n8n — full workflow automation |
| Phase 4 | ₹50,000/mo | Custom | Full AI agent system |

---

## 2. AGENTS FOLDER

### How to Use
1. Open Claude.ai
2. Paste MEMORY.md at the top of the chat
3. Type the trigger phrase below
4. Copy-paste output and execute

---

### AGENT Z — Daily LinkedIn Manager
**Trigger:** `Run Agent Z`
**When:** Every morning (10 minutes)
**What it does:** Researches market trends → gives daily post + 3 connections + 3 comments + reply templates + priority actions

**Run with this context:**
```
Run Agent Z

Today's date: [DATE e.g. May 3, 2026]

WHAT I DID YESTERDAY:
- [Outreach done / posts published / other actions]

REPLIES RECEIVED:
- [Name + what they said, OR "No replies yet"]

CURRENT STATUS:
- Clients: [number]
- Active leads: [names]
- LinkedIn followers: [number]
```

**Output you get:**
- Section 1: Ready-to-post LinkedIn content
- Section 2: 3 targeted people to connect with (search terms + connection note)
- Section 3: 3 comments to leave (search terms + comment copy)
- Section 4: Reply templates for common responses
- Section 5: Top 3 priority actions for today
- Section 6: Tomorrow's preview

---

### AGENT W — Weekly Business Analyst
**Trigger:** `Run Agent W`
**When:** Every Sunday morning (15 minutes)
**What it does:** Market pricing research + phase upgrade analysis + website health check + LinkedIn review + budget optimization

**Run with this context:**
```
Run Agent W

Today's date: [SUNDAY DATE]

BUSINESS STATUS THIS WEEK:
- Clients: [number]
- Revenue this week: ₹[amount]
- Total revenue: ₹[amount]
- New leads: [names]
- LinkedIn followers: [number]
- Fiverr orders: [number]
- What worked: [what got response]
- What didn't work: [what got no response]
```

**Output you get:**
- Weekly scorecard (🔴🟡🟢 per area)
- Top 3 decisions with GO / NO GO
- Exact website change instructions for Agent 4
- Next week priority list (top 5 actions)
- Phase progress percentage

---

### AGENT 1 — Email Reply Agent
**Trigger:** When a client emails you
**Time:** 2 minutes

**Prompt:**
```
You are my professional email assistant for ScaleSnap,
an AI content agency based in Mumbai.

A client has sent me this email:
[PASTE CLIENT EMAIL HERE]

Write a professional, warm reply that:
- Thanks them for reaching out
- Addresses their question directly
- Mentions our services (SEO blogs, social media, email sequences)
- Ends with a clear next step
- Tone: Friendly but professional. Max 150 words.

Sign off as:
Nooralam Shaikh
Founder, ScaleSnap
scalesnap.in | scalesnap.in@gmail.com
```

---

### AGENT 2 — Weekly Content Writer
**Trigger:** Every Monday morning
**Time:** 15 minutes

**Prompt:**
```
You are my social media content writer for ScaleSnap.

Step 1: Research 3 trending topics this week in content
marketing, AI tools for business, or digital marketing
for Indian SMBs.

Step 2: Write 7 LinkedIn/Instagram posts (Mon–Sun).

Format for each:
- Day: Monday / Tuesday etc.
- Hook: (scroll-stopping first line)
- Body: (2–4 lines of value)
- CTA: (one clear action)
- Hashtags: 5–8 relevant ones

Tone: Expert but conversational. Indian audience.
Brand: ScaleSnap — AI-powered content for businesses.
Output all 7 posts ready to copy-paste.
```

---

### AGENT 3 — Client Delivery Agent
**Trigger:** When you receive a client order
**Time:** 5 minutes

**Step 1 — Create content:**
```
You are a professional content writer for ScaleSnap.

Client name: [NAME]
Business type: [e.g. coaching, ecommerce, restaurant]
Content type: [blog / social media pack / email sequence]
Topic/Keywords: [TOPIC]
Word count / quantity: [e.g. 1000 words / 30 captions]
Tone: [professional / friendly / bold]
Target audience: [WHO THEY SELL TO]

Deliver full content, ready to use.
No placeholders. SEO optimized if blog post.
Add relevant emojis if social media.
```

**Step 2 — Save to Drive:**
```
Save the content above to Google Drive.
Create folder: ScaleSnap_Clients/[CLIENT NAME]
Save as: [CLIENT NAME]_[Content Type]_[Date]
Share the link so I can send it to the client.
```

---

### AGENT 4 — Website Update Agent
**Trigger:** When website needs changes (or after Agent W gives instructions)
**Time:** 2 minutes

**Prompt:**
```
You are my website editor for scalesnap.in.

I need to make this change:
[DESCRIBE EXACTLY WHAT TO CHANGE]

After making the change:
1. Show me the exact code edit
2. Commit to GitHub: "Update: [what changed]"
3. Confirm scalesnap.in auto-updates in 30 seconds
```

---

### AGENT 5 — Lead Research Agent
**Trigger:** When you need new prospects
**Time:** 10 minutes

**Prompt:**
```
You are my lead research assistant for ScaleSnap.

Find 10 potential clients who need content writing.

Search for:
- Indian small businesses with no/weak blog
- Coaches active on Instagram but no website content
- Ecommerce brands with thin product descriptions
- Startups that recently launched

For each lead provide:
1. Business name
2. Website / Instagram / LinkedIn
3. Why they need content help
4. What service to pitch
5. Opening message (DM or email, copy-paste ready)

Focus: Mumbai, Pune, Bangalore, Delhi
Budget segment: ₹4,000–₹15,000/month
```

---

### AGENT 6 — Fiverr Order Fulfillment
**Trigger:** When a Fiverr order comes in
**Time:** 20–30 minutes

**Prompt:**
```
You are a professional content writer.
I have a Fiverr order to fulfill.

Package: [Basic $10 / Standard $25 / Premium $60]
Client requirement: [PASTE CLIENT BRIEF HERE]
Deadline: [X days]

Package deliverables:
- Basic ($10): 1 blog post, 800 words, 1 revision
- Standard ($25): 2 blog posts, 1000 words, 3 revisions
- Premium ($60): 4 blog posts, 1200 words, unlimited revisions + SEO

Deliver complete, polished, SEO-optimized content ready to publish.

Also write the Fiverr delivery message:
"Hi [Name], your order is ready! [1-line summary].
Please let me know if you need any revisions.
Thank you for choosing ScaleSnap! 🙏"
```

---

## 3. CLIENT TRACKER

| # | Name | Business | Contact | Outreach Date | Method | Status | Follow-up Date | Outcome |
|---|------|----------|---------|--------------|--------|--------|---------------|---------|
| 1 | Dipti Mohite | — | LinkedIn | May 2, 2026 | Comment on post | ⏳ Awaiting reply | May 4, 2026 | — |
| 2 | Aalok Choubey | Fragreto | info.fragreto@gmail.com | May 2, 2026 | Email | ⏳ Awaiting reply | May 4, 2026 | — |
| 3 | Abhisek Dey | — | abhisekdey.net@gmail.com | May 2, 2026 | Email | ⏳ Awaiting reply | May 4, 2026 | — |
| 4 | | | | | | | | |
| 5 | | | | | | | | |

### Status Key
| Symbol | Meaning |
|--------|---------|
| ⏳ | Awaiting reply |
| 📞 | In conversation |
| 🤝 | Proposal sent |
| ✅ | Converted to client |
| ❌ | Not interested |

### Follow-up Message (copy-paste):
> Hi [Name], just following up on my message about content writing for [Business].
> Happy to share a free sample to show you the quality first. 🙏
> — Nooralam, ScaleSnap (scalesnap.in)

---

## 4. CONTENT CALENDAR

### Weekly Template (powered by Agent Z)

| Day | Post Type | Topic Area | Status |
|-----|-----------|-----------|--------|
| Monday | Educational | Content marketing tip for Indian SMBs | ☐ |
| Tuesday | Problem/Solution | Pain point of business owners | ☐ |
| Wednesday | Social Proof / Story | ScaleSnap value or insight | ☐ |
| Thursday | Educational | AI tools / productivity tip | ☐ |
| Friday | Engagement | Poll or question for audience | ☐ |
| Saturday | Behind the scenes | Process / agency life | ☐ |
| Sunday | *(Rest — no post)* | — | — |

### Daily LinkedIn Checklist (10 minutes)
```
Morning:
☐ Run Agent Z with yesterday's context
☐ Publish the post Agent Z writes
☐ Send 3 connection requests (from Agent Z list)
☐ Leave 3 comments (from Agent Z list)

Evening:
☐ Check email for replies
☐ Check LinkedIn notifications
☐ If someone replied → run Agent 1 for response
☐ Check Fiverr for new briefs
```

### Sunday Checklist (15 minutes)
```
☐ Run Agent W with weekly status
☐ Review the scorecard
☐ Execute GO decisions
☐ Apply Agent 4 website instructions
☐ Plan next week based on Agent W output
```

---

## 5. PAYMENT & ACCOUNTS

### Payment Links

| Plan | Price | Link |
|------|-------|------|
| Starter | ₹4,000/month | https://rzp.io/rzp/5ettcpbh |
| Growth | ₹12,000/month | https://rzp.io/rzp/rXSdDJ0 |
| Agency | ₹29,000/month | https://rzp.io/rzp/xz3E1vG |
| UPI | Any amount | shaikhnoor78692@okhdfcbank |
| Fiverr | USD (international) | fiverr.com/scalesnap |
| PayPal | USD (international) | scalesnap.in@gmail.com ⏳ |
| Razorpay Handle | Direct | razorpay.me/@scalesnap |

### All Accounts

| Service | Account / URL | Notes |
|---------|--------------|-------|
| Gmail | scalesnap.in@gmail.com | Main business email |
| Website | scalesnap.in | Auto-deploys from GitHub |
| Netlify | lambent-klepon-5feddb | Hosting (free) |
| GitHub | shaikhnoor78692 | Auto-deploy connected |
| GoDaddy | scalesnap.in | Domain — ₹1,100/year (₹92/mo) |
| Fiverr | fiverr.com/scalesnap | Profile score 10/12 |
| LinkedIn | linkedin.com/in/nooralam-scalesnap | Live ✅ |
| Razorpay | razorpay.me/@scalesnap | Free plan (2% per transaction) |
| PayPal | scalesnap.in@gmail.com | ⏳ Pending bank verification |
| Tavily | scalesnap.in@gmail.com | Free — 1,000 searches/month |
| Google Cloud | ScaleSnap MCP project | OAuth for Drive + Gmail MCPs |
| Canva | scalesnap.in@gmail.com | Logo / graphics (free) |

### Monthly Costs

| Item | Cost |
|------|------|
| GoDaddy domain | ₹92/month |
| Everything else | ₹0 |
| **Total** | **₹92/month** |

---

## 6. FILE INDEX

### In GitHub Repo (auto-deploys to scalesnap.in)

| File | Purpose |
|------|---------|
| index.html | Main website — all 8 sections |
| style.css | Dark theme, animations, responsive layout |
| script.js | Form validation, scroll effects, hamburger menu |
| thank-you.html | Confirmation page after form submit |
| netlify.toml | Auto-deploy configuration |
| scalesnap_logo_transparent.svg | Website logo (navbar + footer) |
| SCALESNAP_HANDOVER_v2.md | Full session details + all agent prompts |
| MEMORY.md | Quick session starter — paste at top of Claude.ai |
| ScaleSnap_Agent_Templates.md | All 6 agent prompts (original) |
| ScaleSnap_Project_Hub.md | This file — master project organiser |
| README.md | Developer setup guide |
| SETUP.sh | New laptop auto-setup script |
| CLAUDE.md | Claude Code standing instructions |

### Local Files (keep these safe — NOT in repo)

| File | Purpose |
|------|---------|
| gcp-oauth.keys.json | Google OAuth credentials (Drive + Gmail MCPs) |
| scalesnap_logo.svg | Original logo (non-transparent) |
| scalesnap_logo.png | Social media version |
| scalesnap_facebook_cover.png | Facebook cover photo |
| scalesnap_sample_blog.pdf | Portfolio sample for client pitches |
| ScaleSnap_Complete_Setup_Guide.md | Full business bible |
| fiverr_gig_1_main.png | Fiverr gig image 1 |
| fiverr_gig_2_benefits.png | Fiverr gig image 2 |
| fiverr_gig_3_process.png | Fiverr gig image 3 |

---

## SCAM WARNINGS

> ⚠️ **Fiverr:** Real orders ONLY appear in the Orders tab. Never click Google Doc links from strangers. Report and block suspicious users. (Scam encountered May 1, 2026 — user iwib1kee7wsg)

> ⚠️ **Facebook:** "Mumbai Business Network" group asks for WhatsApp to admin before posting — this is a scam. Do not join.

---

*ScaleSnap Project Hub v1.0 — Created May 2, 2026*
*Prepared by Claude (Anthropic) for Nooralam Shaikh*
