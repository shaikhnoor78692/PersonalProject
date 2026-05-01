# ScaleSnap — AI Services Agency
**Website:** https://scalesnap.in | **Fiverr:** https://fiverr.com/scalesnap

---

## 🚀 Project Overview
ScaleSnap is an AI-powered content writing and digital marketing agency. Built to generate freelance income using Claude AI to create and deliver content services.

## 📁 Project Structure
```
scalesnap/
├── index.html              → Main landing page (8 sections)
├── style.css               → Dark theme, animations, responsive
├── script.js               → Form validation, scroll effects
├── thank-you.html          → Order confirmation page
├── netlify.toml            → Auto-deploy configuration
├── README.md               → This file
├── SCALESNAP_HANDOVER.md   → Full session handover doc
├── MEMORY.md               → Quick Claude session starter
└── SETUP.sh                → New laptop auto-setup script
```

## 🎨 Design System
```
Background:  #0a0a0f | Surface: #111118 | Cards: #1a1a24
Purple:      #7c6ef2 | Orange: #e4845a
Text:        #f0f0f5 | Muted: #8888a0
Headings:    Syne (800 weight) via Google Fonts
Body:        DM Sans (400/500) via Google Fonts
```

## 🚀 Deployment
Auto-deploys via GitHub → Netlify on every push.
```bash
git add .
git commit -m "your change"
git push
# scalesnap.in updates in ~30 seconds
```

## 💻 New Developer / New Laptop Setup

### Prerequisites
```
1. Install Node.js LTS → nodejs.org
2. Install Claude Code → npm install -g @anthropic-ai/claude-code
3. Clone this repo
4. Get gcp-oauth.keys.json from project owner
```

### Step 1 — PowerShell Policy (Windows only)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Step 2 — Install Claude Code Skills
```bash
mkdir -p ~/.config/claude/skills
git clone --depth=1 --filter=blob:none --sparse \
  https://github.com/ComposioHQ/awesome-claude-skills /tmp/awesome-skills
cd /tmp/awesome-skills
git sparse-checkout set content-research-writer lead-research-assistant
cp -r content-research-writer lead-research-assistant ~/.config/claude/skills/
```

### Step 3 — Install MCPs
```bash
claude mcp add github -s local -- npx -y @modelcontextprotocol/server-github
claude mcp add gdrive -s local -- npx -y @modelcontextprotocol/server-gdrive
claude mcp add gmail -s local -- npx @gongrzhe/server-gmail-autoauth-mcp
claude mcp add tavily -s local -- npx -y tavily-mcp
```

### Step 4 — Set API Keys
```bash
# GitHub (get from github.com/settings/tokens)
# Scopes: repo, read:org, workflow | Expiry: No expiration
export GITHUB_PERSONAL_ACCESS_TOKEN=your_token

# Tavily (get from tavily.com - free)
export TAVILY_API_KEY=your_key
```

### Step 5 — Authenticate Google Drive
```powershell
mkdir C:\Users\USERNAME\.gdrive-server-credentials
$env:GDRIVE_OAUTH_PATH="PATH\TO\gcp-oauth.keys.json"
$env:GDRIVE_CREDENTIALS_PATH="C:\Users\USERNAME\.gdrive-server-credentials.json"
npx @modelcontextprotocol/server-gdrive auth
# Browser opens → login scalesnap.in@gmail.com → Allow
```

### Step 6 — Authenticate Gmail
```powershell
mkdir C:\Users\USERNAME\.gmail-mcp
$env:GMAIL_OAUTH_PATH="PATH\TO\gcp-oauth.keys.json"
npx @gongrzhe/server-gmail-autoauth-mcp auth
# Copy URL → paste in browser → login → Allow
```

### Step 7 — Verify Everything
```bash
claude mcp list
# Expected:
# ✅ github  → Connected
# ✅ gdrive  → Connected
# ✅ gmail   → Connected
# ✅ tavily  → Connected

ls ~/.config/claude/skills/
# Expected:
# content-research-writer
# lead-research-assistant
```

### Step 8 — Configure Git
```bash
git config user.name "shaikhnoor78692"
git config user.email "scalesnap.in@gmail.com"
```

## 💳 Payment Links
```
Starter ₹4,000/mo → https://rzp.io/rzp/5ettcpbh
Growth ₹12,000/mo → https://rzp.io/rzp/rXSdDJ0
Agency ₹29,000/mo → https://rzp.io/rzp/xz3E1vG
UPI:   shaikhnoor78692@okhdfcbank
```

## 🔧 MCP Capabilities
```
GitHub MCP    → Auto commit/push website changes
Google Drive  → Save/read client work files
Gmail MCP     → Read client emails, draft replies
Tavily MCP    → Research topics for content
```

## 📞 Contact
```
Business Email: scalesnap.in@gmail.com
UPI:            shaikhnoor78692@okhdfcbank
Website:        scalesnap.in
Fiverr:         fiverr.com/scalesnap
```

## 🔮 Pending / Future
```
[ ] PayPal verification (check bank deposits)
[ ] Instagram business account @scalesnap.in
[ ] Google Business Profile
[ ] Tidio chatbot integration
[ ] Blog section for SEO
[ ] More Fiverr gigs after first reviews
```
