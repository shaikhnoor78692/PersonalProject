# ScaleSnap Business Handover — Nooralam Shaikh
**Last updated:** 2026-05-01 (Session 1 — Complete business setup. Website live, Fiverr gig published, Razorpay active, PayPal pending verification.)
**Owner:** Nooralam Shaikh (shaikhnoor78692)
**Business Email:** scalesnap.in@gmail.com
**UPI:** shaikhnoor78692@okhdfcbank
**Website:** https://scalesnap.in
**Fiverr:** https://fiverr.com/scalesnap

> **IMPORTANT: Read this entire file before doing anything. All context is here.**

---

## COMPLETED WORK

### Business Setup (May 1, 2026)
- **Concept decided:** AI-powered content writing & digital marketing agency
- **Business name:** ScaleSnap
- **Model:** Use Claude AI to create content → deliver to clients → collect payment
- **Target:** Indian clients (website/Razorpay) + International clients (Fiverr)
- **Monthly cost:** ₹92/month (domain only — everything else free)

### Website Built (May 1, 2026)
- Built complete 5-file website from scratch:
  - `index.html` — Main page with 8 sections
  - `style.css` — Dark theme, purple accent, fully responsive
  - `script.js` — Animations, form validation, hamburger menu
  - `thank-you.html` — Post-submission confirmation page
  - `netlify.toml` — Auto-deploy configuration
- **Design system:**
  - Background: `#0a0a0f` | Surface: `#111118` | Purple: `#7c6ef2` | Orange: `#e4845a`
  - Fonts: Syne (headings 800wt) + DM Sans (body)
- **Sections:** Nav → Hero → Stats → Services (6 cards) → How It Works → Pricing (3 tiers) → Contact Form → Footer
- **5 bugs fixed after audit:**
  1. `script.js:88` — navbar declared locally in initHamburger IIFE
  2. `style.css` — .stats-grid at ≤1024px changed to repeat(2, 1fr)
  3. `thank-you.html` — padding-top added for fixed nav overlap
  4. `index.html` — iOS Safari select placeholder fix (disabled selected hidden)
  5. Both HTML files — emoji favicon added

### Branding Update (May 1, 2026)
- Original name was NexaMind → fully rebranded to ScaleSnap
- All 5 files updated — zero NexaMind references remaining
- Razorpay placeholder URLs updated to scalesnap branding

### Domain Setup (May 1, 2026)
- **Domain:** scalesnap.in purchased on GoDaddy
- **Cost:** ₹1,100/year
- **Nameservers pointed to Netlify:**
  ```
  dns1.p04.nsone.net
  dns2.p04.nsone.net
  dns3.p04.nsone.net
  dns4.p04.nsone.net
  ```
- DNS propagated successfully — scalesnap.in live ✅

### Netlify Hosting Setup (May 1, 2026)
- **Plan:** Free
- **Initial deploy:** Drag & drop → lambent-klepon-5feddb.netlify.app
- **GitHub connected:** Auto-deploy on every git push
- **Custom domain:** scalesnap.in connected and SSL active
- **Git config fixed:**
  ```bash
  git config user.name "shaikhnoor78692"
  git config user.email "scalesnap.in@gmail.com"
  ```
- **Deploy workflow:**
  ```bash
  git add .
  git commit -m "description"
  git push
  # scalesnap.in updates in ~30 seconds
  ```

### SEO Setup (May 1, 2026)
- Added to `index.html` head:
  - Meta description and keywords
  - Open Graph tags (og:title, og:description, og:url, og:type)
  - Canonical URL tag
  - Schema markup JSON-LD (LocalBusiness type, Mumbai location)
- Added to `thank-you.html`:
  - `noindex, nofollow` meta robots tag
- `netlify.toml` updated with publish = "." for auto-deploy fix

### Claude Code Skills Installed (May 1, 2026)
- Cloned from: github.com/ComposioHQ/awesome-claude-skills
- Installed using sparse checkout (token efficient):
  ```
  ~/.config/claude/skills/content-research-writer
  ~/.config/claude/skills/lead-research-assistant
  ```

### Fiverr Account Setup (May 1, 2026)
- **Username:** scalesnap
- **Display name:** Nooralam Shaikh (real name required by Fiverr)
- **Profile email:** scalesnap.in@gmail.com
- **Profile score:** 10/12
- **Gig title:** "I will write SEO blog posts and AI powered content for your business"
- **Category:** Writing & Translation → Articles & Blog Posts → SEO Writing
- **Tags:** content writing, blog writing, article writing, copywriting, blog post
- **Packages:**
  ```
  Basic (Starter):   $10 — 1 article, 500 words, 1 revision, 2 days
  Standard (Growth): $25 — 2 articles, 1000 words each, 3 revisions, 2 days
  Premium (Authority):$60 — 3 articles, 1500 words each, unlimited revisions, 3 days
  ```
- **Extras:**
  ```
  Extra Fast Delivery:    $10-20 (reduces by 1 day)
  Additional Revision:    $5 + 0 days
  SEO Keyword Research:   $15 + 1 day
  ```
- **Profile completed:**
  - ✅ Real photo uploaded
  - ✅ Description (200 words)
  - ✅ Skills: Content Writing, SEO, Blog Writing, Social Media Marketing, Email Marketing (all Intermediate)
  - ✅ Languages: English (Conversational) + Hindi
  - ✅ Experience: Freelance Content Writer at Freelancer.com (2026–present)
  - ✅ Education: Real details added
  - ✅ Portfolio: 3 gig images + project added
  - ✅ Trust & Safety training completed
  - ✅ Tax forms completed (India GST: Export category)
  - ✅ W-9: Declared not a US person
  - ✅ TCS under GST: Export selected
  - ✅ Gig images created (1280x769px PNG files):
    - fiverr_gig_1_main.png (purple bg — main service)
    - fiverr_gig_2_benefits.png (dark bg — why choose us)
    - fiverr_gig_3_process.png (dark bg — how it works)
  - ✅ Sample blog PDF created and uploaded to portfolio

- **⚠️ SCAM WARNING (encountered May 1, 2026):**
  - User `iwib1kee7wsg` sent fake "I placed an order" message with Google Doc link
  - Reported and blocked immediately
  - Real Fiverr orders ONLY appear in Orders tab — never via message
  - Never click external links from Fiverr messages

### Razorpay Setup (May 1, 2026)
- **Plan:** Free (2% per transaction)
- **Business type:** Unregistered (individual/sole proprietor)
- **Website verified:** scalesnap.in ✅
- **Payment handle:** razorpay.me/@scalesnap
- **3 Payment links created and added to website:**
  ```
  Starter Plan  ₹4,000/mo → https://rzp.io/rzp/5ettcpbh
  Growth Plan  ₹12,000/mo → https://rzp.io/rzp/rXSdDJ0
  Agency Plan  ₹29,000/mo → https://rzp.io/rzp/xz3E1vG
  ```
- Fee: 2% per transaction (e.g. ₹4,000 → you receive ₹3,920)
- Links tested and working ✅

### PayPal Setup (May 1, 2026)
- **Email:** scalesnap.in@gmail.com
- **Business name:** ScaleSnap
- **Status:** ⏳ Pending bank verification
- **Action required:** PayPal sent 2 small deposits (< ₹1.50 each) to bank account
  - Check bank account in 3-5 days
  - Login to PayPal → Payment Methods → Select bank → Enter 2 deposit amounts
  - Account fully verified after this step

### Pricing Structure (May 1, 2026)
- Website shows USD prices (international appeal)
- Razorpay charges INR (Indian clients)
- Prices set independently (not tied to exchange rate):
  ```
  Plan      USD      INR
  Starter   $49/mo   ₹4,000/mo
  Growth    $149/mo  ₹12,000/mo
  Agency    $349/mo  ₹29,000/mo
  ```

### Documents Created (May 1, 2026)
- `README.md` — Project overview for GitHub
- `ScaleSnap_Complete_Setup_Guide.md` — Full business bible
- `SCALESNAP_HANDOVER.md` — This file (session handover)
- `MEMORY.md` — Quick session starter for Claude

---

## PENDING TASKS (in priority order)

### 1. HIGH — PayPal Bank Verification
**Status:** Waiting for 2 small deposits from PayPal
**Action:**
```
1. Check bank account daily for next 3-5 days
2. Find 2 small PayPal deposits (< ₹1.50 each)
3. Login to paypal.com
4. Go to Payment Methods → Select bank account
5. Enter the exact 2 deposit amounts
6. Account verified! ✅
```

### 2. HIGH — Get First Client
**Status:** Not started — this is #1 priority
**Why urgent:** Every day without a client = lost revenue
**Action options:**
```
Option A — Share Fiverr link directly:
"Hey! I started a content writing service.
Check it out: fiverr.com/scalesnap
Would love your support! 🙏"

Option B — Join WhatsApp business groups
Share Fiverr gig in relevant groups

Option C — Wait for organic Fiverr traffic
New gigs take 1-3 days to get indexed
```
**Note:** Nooralam is shy — prefers not to market on personal social media

### 3. HIGH — ScaleSnap Instagram Business Account
**Status:** Not started
**Action:**
```
1. Go to instagram.com
2. Create new account (NOT personal)
3. Username: @scalesnap.in or @scalesnap_agency
4. Email: scalesnap.in@gmail.com
5. Switch to Business Account in settings
6. Bio: "AI-powered content agency | scalesnap.in"
7. Post AI/marketing tips only (no personal content)
```

### 4. MEDIUM — Google Business Profile
**Status:** Not started
**Action:**
```
1. Go to business.google.com
2. Sign in with scalesnap.in@gmail.com
3. Add business: ScaleSnap
4. Category: Content Marketing Agency
5. Location: Mumbai, Maharashtra
6. Website: scalesnap.in
7. Verify via postcard or phone
```
**Why:** Helps appear in "content writing Mumbai" Google searches

### 5. MEDIUM — Add Tidio Chatbot to Website
**Status:** Not started (decided to add after getting first client)
**Action when ready:**
```
1. Sign up free at tidio.com
2. Create greeting chatbot flow:
   Bot: "Welcome to ScaleSnap! What do you need?"
   Options → Send Google Form link or UPI ID
3. Get Tidio script code
4. Add to index.html before </body>
5. git push → auto deploys
```

### 6. LOW — Raise Fiverr Prices
**Status:** Not started — do after 5 reviews
**Current:** $10/$25/$60
**Target after 5 reviews:** $15/$35/$80

### 7. LOW — Create More Fiverr Gigs
**Status:** Not started — do after first gig gets reviews
**Planned gigs:**
```
Gig 2: Social media content pack
Gig 3: Email marketing sequences
Gig 4: Video scripts for YouTube/Reels
```

### 8. LOW — Add Blog to Website
**Status:** Not started — Month 2-3
**Why:** Long-term SEO strategy to get organic Google traffic

---

## HOW TO DELIVER CLIENT ORDERS

### Blog Post / Article
```
Client sends: topic, audience, keywords, tone, length
Claude prompt:
"Write a [X] word SEO blog post about [TOPIC]
for a [BUSINESS TYPE] targeting [AUDIENCE].
Include these keywords naturally: [KEYWORDS].
Tone: [PROFESSIONAL/FRIENDLY/CONVERSATIONAL]
Structure: intro, 5 subheadings, conclusion, CTA"

Delivery: Google Doc or .docx file
Time: 15-20 minutes total
```

### Social Media Pack (30 posts)
```
Claude prompt:
"Write 30 Instagram captions for a [BUSINESS]
in [CITY/NICHE]. Mix:
- 10 promotional posts
- 10 educational/tip posts
- 10 engaging/question posts
Add 5-8 relevant hashtags to each.
Tone: [TONE]"

Delivery: Google Sheets or PDF
Time: 20-30 minutes total
```

### Email Sequence
```
Claude prompt:
"Write a 5-email welcome sequence for [BUSINESS].
Email 1: Welcome + what to expect
Email 2: Brand story/about us
Email 3: Most valuable tip or insight
Email 4: Case study or social proof
Email 5: Special offer + CTA
Tone: [TONE] | Audience: [AUDIENCE]"

Delivery: Google Doc with each email labeled
Time: 20-30 minutes total
```

---

## FINANCIAL SUMMARY

### Monthly Costs
```
Domain (GoDaddy scalesnap.in): ₹92/month (₹1,100/year)
Netlify hosting:                ₹0 (Free plan)
Fiverr account:                 ₹0 (Free + 20% commission on sales)
Razorpay:                       ₹0 (Free + 2% per transaction)
Claude AI:                      ₹0 (Free tier — upgrade if needed)
All other tools:                ₹0 (Free)
─────────────────────────────────────────────
Total fixed monthly cost:       ₹92/month only!
```

### Revenue Potential
```
3 Indian clients × ₹4,000  = ₹12,000/month
3 Fiverr orders  × $25     = $75 (~₹7,000/month)
─────────────────────────────────────────────
Realistic Month 1 target:    ₹15,000-20,000/month
```

### Payment Methods Active
```
Indian clients:        Razorpay (3 links) + UPI direct
International clients: Fiverr (handles payment automatically)
Direct UPI:            shaikhnoor78692@okhdfcbank
PayPal:                Pending verification (3-5 days)
```

---

## IMPORTANT ACCOUNT DETAILS

### All Accounts Summary
```
Business Gmail:    scalesnap.in@gmail.com
GoDaddy:           scalesnap.in domain (₹1,100/yr)
Netlify:           Free plan — scalesnap.in
GitHub:            Auto-deploy connected to Netlify
Fiverr:            fiverr.com/scalesnap (score: 10/12)
Razorpay:          Free plan — razorpay.me/@scalesnap
PayPal:            scalesnap.in@gmail.com (⏳ pending)
Canva:             scalesnap.in@gmail.com
Instamojo:         Backup payment (setup initiated)
```

### Razorpay Payment Links
```
Starter  ₹4,000/mo → https://rzp.io/rzp/5ettcpbh
Growth  ₹12,000/mo → https://rzp.io/rzp/rXSdDJ0
Agency  ₹29,000/mo → https://rzp.io/rzp/xz3E1vG
```

### Netlify Details
```
Site name:    lambent-klepon-5feddb
Custom domain: scalesnap.in
SSL:          Active (auto by Netlify)
Deploy:       Auto via GitHub push
```

---

## FILES IN THIS PROJECT

### Website Files (GitHub repo)
```
index.html          → Main landing page
style.css           → All styles
script.js           → JavaScript functionality
thank-you.html      → Order confirmation page
netlify.toml        → Netlify deploy config
README.md           → Project overview
SCALESNAP_HANDOVER.md → This file
MEMORY.md           → Quick Claude session starter
```

### Asset Files (saved locally)
```
fiverr_gig_1_main.png       → Fiverr gallery image 1
fiverr_gig_2_benefits.png   → Fiverr gallery image 2
fiverr_gig_3_process.png    → Fiverr gallery image 3
scalesnap_sample_blog.pdf   → Portfolio sample
ScaleSnap_Complete_Setup_Guide.md → Full business bible
```

---

## STANDING INSTRUCTIONS FOR NEXT SESSION

1. Always check pending tasks list above first
2. Start with PayPal verification status
3. Priority is getting FIRST CLIENT
4. Nooralam prefers: exact prompts to copy-paste, small steps, files created directly
5. Never suggest paid tools unless absolutely necessary (budget: ₹92/month)
6. If website edits needed → give Claude Code prompt
7. If content needed → create directly in Claude.ai chat

---

*Last session: May 1, 2026*
*Session duration: Full day (complete business setup)*
*Next focus: PayPal verification + Instagram + First Client*
*Prepared by: Claude (Anthropic) for Nooralam Shaikh*
