# ScaleSnap Business Handover — Nooralam Shaikh
**Last updated:** 2026-05-02 (Session 2 — Agent templates created. ScaleSnap_Agent_Templates.md added to repo.)
**Owner:** Nooralam Shaikh (shaikhnoor78692)
**Business Email:** scalesnap.in@gmail.com
**UPI:** shaikhnoor78692@okhdfcbank
**Website:** https://scalesnap.in
**Fiverr:** https://fiverr.com/scalesnap

> **IMPORTANT: Read this entire file before doing anything. All context is here.**

---

## COMPLETED WORK

### Business Setup (May 1, 2026)
- **Concept:** AI-powered content writing & digital marketing agency
- **Business name:** ScaleSnap
- **Model:** Use Claude AI to create content → deliver to clients → collect payment
- **Target:** Indian clients (website/Razorpay) + International (Fiverr)
- **Monthly cost:** ₹92/month (domain only — everything else free)

### Website Built (May 1, 2026)
- 5 files: index.html, style.css, script.js, thank-you.html, netlify.toml
- Dark theme: bg #0a0a0f | purple #7c6ef2 | orange #e4845a
- Fonts: Syne (headings) + DM Sans (body)
- 8 sections: Nav → Hero → Stats → Services → How It Works → Pricing → Contact → Footer
- 5 bugs fixed after full audit
- Rebranded from NexaMind → ScaleSnap

### Domain & Hosting (May 1, 2026)
- Domain: scalesnap.in on GoDaddy (₹1,100/year)
- Hosting: Netlify Free Plan
- GitHub connected for auto-deploy
- SSL active via Netlify
- Nameservers: dns1-4.p04.nsone.net

### SEO Setup (May 1, 2026)
- Meta description, keywords, Open Graph tags
- Schema markup JSON-LD (LocalBusiness, Mumbai)
- Canonical URL, noindex on thank-you.html

### Fiverr Setup (May 1, 2026)
- Username: scalesnap | Profile: fiverr.com/scalesnap
- Gig: "I will write SEO blog posts and AI powered content"
- Packages: $10 / $25 / $60
- Profile score: 10/12
- Trust & Safety: Completed
- Tax forms: Completed (Export category)

### Razorpay Setup (May 1, 2026)
- Plan: Free (2% per transaction)
- Website verified: scalesnap.in ✅
- Payment handle: razorpay.me/@scalesnap
- 3 payment links created and added to website:
  ```
  Starter  ₹4,000/mo → https://rzp.io/rzp/5ettcpbh
  Growth  ₹12,000/mo → https://rzp.io/rzp/rXSdDJ0
  Agency  ₹29,000/mo → https://rzp.io/rzp/xz3E1vG
  ```

### PayPal Setup (May 1, 2026)
- Email: scalesnap.in@gmail.com
- Status: ⏳ Pending bank verification (3-5 days)
- Action: Check bank for 2 small PayPal deposits → enter in PayPal

### Claude Code Skills (May 1, 2026)
- Installed from: github.com/ComposioHQ/awesome-claude-skills
  ```
  ~/.config/claude/skills/content-research-writer
  ~/.config/claude/skills/lead-research-assistant
  ```

### MCP Setup (May 1, 2026)
All 4 MCPs installed and connected:

```
✅ GitHub       → Auto commit/push website changes
✅ Google Drive → Save/read client files
✅ Gmail        → Read/draft client emails
✅ Tavily       → Research for client content
```

#### GitHub MCP
```
Status: Connected ✅
Token: Stored in local environment
Scope: repo, read:org, workflow
Usage: Claude can edit and push 
       website changes directly
```

#### Google Drive MCP
```
Status: Connected ✅
Auth: OAuth via gcp-oauth.keys.json
Credentials: C:\Users\Neebal\.gdrive-server-credentials.json
OAuth file: D:\devops\personalproject\gcp-oauth.keys.json
Usage: Claude can save/read client 
       work files directly
```

#### Gmail MCP
```
Status: Connected ✅
Auth: OAuth via gcp-oauth.keys.json
Credentials: C:\Users\Neebal\.gmail-mcp\credentials.json
Package: @gongrzhe/server-gmail-autoauth-mcp
Usage: Claude can read client emails
       and draft replies
```

#### Tavily Search MCP
```
Status: Connected ✅
API Key: Stored in local config
Free tier: 1,000 searches/month
Usage: Claude researches topics
       for client content
```

#### Note on claude.ai Google Drive
```
Shows in MCP list but cannot be removed
It is Claude Code's built-in Drive integration
Harmless — ignore it completely
```

---

## MCP SETUP FOR NEW LAPTOP

### Prerequisites
```
1. Install Node.js LTS from nodejs.org
2. Install Claude Code: npm install -g @anthropic-ai/claude-code
3. Copy gcp-oauth.keys.json to new machine
```

### Step 1 — PowerShell Execution Policy
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Step 2 — Install All MCPs
```bash
# GitHub MCP
claude mcp add github -s local -- npx -y @modelcontextprotocol/server-github

# Google Drive MCP
claude mcp add gdrive -s local -- npx -y @modelcontextprotocol/server-gdrive

# Gmail MCP
claude mcp add gmail -s local -- npx @gongrzhe/server-gmail-autoauth-mcp

# Tavily MCP
claude mcp add tavily -s local -- npx -y tavily-mcp
```

### Step 3 — Set API Keys
```powershell
# GitHub token (get from github.com/settings/tokens)
# Scopes needed: repo, read:org, workflow, gist, read:user
# Expiration: No expiration
export GITHUB_PERSONAL_ACCESS_TOKEN=your_token_here

# Tavily API key (get from tavily.com - free)
export TAVILY_API_KEY=your_key_here
```

### Step 4 — Authenticate Google Drive
```powershell
# Create credentials folder
mkdir C:\Users\USERNAME\.gdrive-server-credentials

# Run OAuth flow
$env:GDRIVE_OAUTH_PATH="PATH\TO\gcp-oauth.keys.json"
$env:GDRIVE_CREDENTIALS_PATH="C:\Users\USERNAME\.gdrive-server-credentials.json"
npx @modelcontextprotocol/server-gdrive auth
# Browser opens → login with scalesnap.in@gmail.com → Allow
```

### Step 5 — Authenticate Gmail
```powershell
# Create credentials folder
mkdir C:\Users\USERNAME\.gmail-mcp

# Run OAuth flow
$env:GMAIL_OAUTH_PATH="PATH\TO\gcp-oauth.keys.json"
npx @gongrzhe/server-gmail-autoauth-mcp auth
# Copy URL from terminal → paste in browser → login → Allow
```

### Step 6 — Google Cloud Console Setup
```
Only needed once per Google account:
1. Go to console.cloud.google.com
2. Create project: ScaleSnap MCP
3. Enable Google Drive API
4. Enable Gmail API
5. Create OAuth 2.0 Client ID:
   - Type: Desktop app
   - Name: ScaleSnap MCP
6. Add test user: scalesnap.in@gmail.com
   (OAuth consent screen → Audience → Test users)
7. Download JSON → rename to gcp-oauth.keys.json
```

### Step 7 — Install Claude Code Skills
```bash
mkdir -p ~/.config/claude/skills
git clone --depth=1 --filter=blob:none --sparse https://github.com/ComposioHQ/awesome-claude-skills /tmp/awesome-skills
cd /tmp/awesome-skills
git sparse-checkout set content-research-writer lead-research-assistant
cp -r content-research-writer lead-research-assistant ~/.config/claude/skills/
```

### Step 8 — Verify Everything
```bash
claude mcp list
ls ~/.config/claude/skills/
```

Expected output:
```
✅ github  → Connected
✅ gdrive  → Connected
✅ gmail   → Connected
✅ tavily  → Connected

Skills:
content-research-writer
lead-research-assistant
```

---

## PENDING TASKS (in priority order)

### 1. HIGH — PayPal Bank Verification
```
Check bank account for 2 small PayPal deposits
Login to paypal.com → Payment Methods → 
Select bank → Enter 2 deposit amounts → Verified!
```

### 2. HIGH — Get First Client
```
Share: fiverr.com/scalesnap
Message: "I started a content writing service.
Check it out: fiverr.com/scalesnap 🙏"
Note: Nooralam prefers not to post on 
personal social media — use Fiverr organic
```

### 3. HIGH — ScaleSnap Instagram Business
```
Username: @scalesnap.in or @scalesnap_agency
Email: scalesnap.in@gmail.com
Type: Business account
Content: AI/marketing tips only (no personal)
Bio: "AI-powered content agency | scalesnap.in"
```

### 4. MEDIUM — Google Business Profile
```
Go to: business.google.com
Business: ScaleSnap
Category: Content Marketing Agency
Location: Mumbai, Maharashtra
Website: scalesnap.in
```

### 5. MEDIUM — Add Tidio Chatbot
```
Sign up free: tidio.com
Create greeting flow
Add script to index.html before </body>
git push → auto deploys
```

### 6. LOW — After 5 Fiverr Reviews
```
Raise prices: $10→$15 / $25→$35 / $60→$80
Create new gigs: Social media, Email, Video scripts
```

---

## HOW TO DELIVER CLIENT ORDERS

### Blog Post
```
Prompt to Claude:
"Write a [X] word SEO blog post about [TOPIC]
for a [BUSINESS TYPE] targeting [AUDIENCE].
Keywords: [KEYWORDS]. Tone: [TONE]
Structure: intro, 5 subheadings, conclusion, CTA"
Time: 15-20 mins | Deliver: Google Doc
```

### Social Media Pack
```
Prompt to Claude:
"Write 30 Instagram captions for [BUSINESS].
Mix: 10 promotional, 10 educational, 10 engaging.
Add hashtags. Tone: [TONE]"
Time: 20-30 mins | Deliver: Spreadsheet/PDF
```

### Email Sequence
```
Prompt to Claude:
"Write 5-email welcome sequence for [BUSINESS].
Email 1: Welcome | 2: Story | 3: Best tip
4: Social proof | 5: Special offer + CTA"
Time: 20-30 mins | Deliver: Google Doc
```

---

## FINANCIAL SUMMARY

### Monthly Costs
```
Domain (GoDaddy): ₹92/month
Everything else:  ₹0 (Free)
Total:            ₹92/month only!
```

### Payment Links
```
UPI:     shaikhnoor78692@okhdfcbank
Starter: https://rzp.io/rzp/5ettcpbh (₹4,000)
Growth:  https://rzp.io/rzp/rXSdDJ0 (₹12,000)
Agency:  https://rzp.io/rzp/xz3E1vG (₹29,000)
Fiverr:  Handles international payments
PayPal:  scalesnap.in@gmail.com (pending)
```

### Revenue Target
```
Month 1: ₹15,000-20,000
3 Indian clients × ₹4,000 = ₹12,000
3 Fiverr orders  × $25    = ~₹7,000
```

---

## ALL ACCOUNTS

```
Gmail:      scalesnap.in@gmail.com
GoDaddy:    scalesnap.in (₹1,100/yr)
Netlify:    lambent-klepon-5feddb / scalesnap.in
GitHub:     auto-deploy connected
Fiverr:     fiverr.com/scalesnap (10/12)
Razorpay:   razorpay.me/@scalesnap (free)
PayPal:     scalesnap.in@gmail.com (pending)
Canva:      scalesnap.in@gmail.com
Tavily:     scalesnap.in@gmail.com (free)
GCP:        ScaleSnap MCP project
```

---

## FILES IN THIS PROJECT

### Website (GitHub repo)
```
index.html                    → Main landing page
style.css                     → All styles
script.js                     → JavaScript
thank-you.html                → Confirmation page
netlify.toml                  → Deploy config
README.md                     → Project overview
SCALESNAP_HANDOVER.md         → This file
MEMORY.md                     → Quick session starter
SETUP.sh                      → Auto setup script
ScaleSnap_Agent_Templates.md  → 6 agent prompt templates
```

### Local Files (save these safely!)
```
gcp-oauth.keys.json           → Google OAuth credentials
fiverr_gig_1_main.png         → Fiverr image 1
fiverr_gig_2_benefits.png     → Fiverr image 2
fiverr_gig_3_process.png      → Fiverr image 3
scalesnap_sample_blog.pdf     → Portfolio sample
ScaleSnap_Complete_Setup_Guide.md → Full business bible
```

---

## STANDING INSTRUCTIONS FOR NEXT SESSION

```
1. Read all pending tasks — start from top
2. First check PayPal verification status
3. Priority #1 = Get first client
4. Always give exact prompts to copy-paste
5. Create files directly — don't send to Canva
6. Keep steps small and simple
7. Budget: ₹92/month — no paid tools unless critical
8. Website edits → give Claude Code prompt
9. Content needed → create directly in Claude.ai
10. Nooralam is shy — no personal social media marketing
```

---

## GIT WORKFLOW

```bash
# After any website change:
git add .
git commit -m "describe change"
git push
# scalesnap.in updates in ~30 seconds ✅

# Git config:
git config user.name "shaikhnoor78692"
git config user.email "scalesnap.in@gmail.com"
```

---

## DESIGN SYSTEM

```css
--bg:      #0a0a0f  /* main background */
--bg2:     #111118  /* surface */
--bg3:     #1a1a24  /* cards */
--accent:  #7c6ef2  /* purple primary */
--accent2: #e4845a  /* orange secondary */
--text:    #f0f0f5  /* main text */
--muted:   #8888a0  /* secondary text */
Fonts: Syne (headings 800) + DM Sans (body)
```

---

## SCAM WARNING

```
⚠️ Fiverr scam encountered May 1, 2026
User iwib1kee7wsg sent fake order via message
Real orders ONLY appear in Orders tab!
Never click Google Doc links from strangers!
Always report and block suspicious users!
```

---

*Last session: May 2, 2026*
*Next focus: PayPal verification + Instagram + First Client*
*Prepared by: Claude (Anthropic) for Nooralam Shaikh*

---

## AI AGENT SYSTEM PLAN

### Vision
Full automation system where AI agents manage:
- Email replies
- Fiverr order management
- Google Drive file management
- Instagram daily/weekly posting
- LinkedIn posting
- Other marketing platforms

### Honest Phase Roadmap

#### Phase 1 — NOW (₹92/month) 🔴 CURRENT
```
Status: IN PROGRESS
Target Revenue: ₹15,000/month
Focus: Get first client manually
Tools: MCPs already installed
Action items:
→ Get first client via Fiverr
→ Use Gmail MCP for email drafts
→ Use GDrive MCP for file saving
→ Use Tavily for content research
→ Use GitHub MCP for website updates
DO NOT spend more money in this phase!
```

#### Phase 2 — After ₹15,000/month 🟡 PENDING
```
Status: NOT STARTED
Target Revenue: ₹25,000/month
Focus: Semi-automated social media
Tools to add:
→ Buffer (Instagram + LinkedIn scheduling)
   Cost: ~₹800/month
Action items:
→ Create ScaleSnap Instagram business account
→ Create ScaleSnap LinkedIn page
→ Connect both to Buffer
→ Schedule 1 week of content at a time
→ Claude writes all content (15 mins/week)
Trigger: Start this phase when earning
         ₹15,000/month consistently
```

#### Phase 3 — After ₹30,000/month 🟢 PENDING
```
Status: NOT STARTED
Target Revenue: ₹50,000/month
Focus: Full platform automation
Tools to add:
→ n8n or Make.com for workflows
   Cost: ~₹1,500/month
→ Fiverr MCP (when useful)
Action items:
→ Connect all platforms via n8n
→ Auto-save client briefs to Drive
→ Auto-send delivery emails
→ Auto-post content on schedule
→ Build proper agent workflows
Trigger: Start when earning
         ₹30,000/month consistently
```

#### Phase 4 — After ₹50,000/month 🔵 FUTURE
```
Status: NOT STARTED
Target Revenue: ₹1,00,000/month
Focus: Full AI agent system
Tools to add:
→ Custom AI agents for everything
→ 1 virtual assistant (part time)
Agents to build:
→ Email Agent (auto reply to clients)
→ Content Agent (weekly posts)
→ Delivery Agent (auto send work)
→ Website Agent (auto updates)
→ Instagram Agent (daily posts)
→ LinkedIn Agent (daily posts)
→ Fiverr Agent (when API available)
Trigger: Start when earning
         ₹50,000/month consistently
```

### 4 Free Agent Templates Built (Session 2 — May 2, 2026)

File: ScaleSnap_Agent_Templates.md (committed to repo)

```
✅ Agent 1 — Email Reply Agent (Gmail MCP)
✅ Agent 2 — Weekly Content Agent (Tavily MCP)
✅ Agent 3 — Client Delivery Agent (GDrive MCP)
✅ Agent 4 — Website Update Agent (GitHub MCP)
✅ Bonus  — Lead Research Subagent
✅ Bonus  — Order Fulfillment Subagent
```

### Session 3 Plan
```
Priority 1: Check PayPal verification status
Priority 2: Create Instagram business account
Priority 3: Share Fiverr gig to get first client
```

---
