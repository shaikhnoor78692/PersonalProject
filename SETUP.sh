#!/bin/bash
# ScaleSnap — New Laptop Auto Setup Script
# Run this on any new machine to get fully set up
# Owner: Nooralam Shaikh | scalesnap.in@gmail.com
# Usage: bash SETUP.sh

echo "🚀 ScaleSnap Setup Starting..."
echo "================================"

# Step 1 — Check Node.js
echo "📦 Step 1: Checking Node.js..."
if command -v node &> /dev/null; then
    echo "✅ Node.js $(node --version) found"
else
    echo "❌ Node.js not found!"
    echo "Please install from: nodejs.org"
    echo "Then run this script again"
    exit 1
fi

# Step 2 — Check Claude Code
echo ""
echo "🤖 Step 2: Checking Claude Code..."
if command -v claude &> /dev/null; then
    echo "✅ Claude Code found"
else
    echo "Installing Claude Code..."
    npm install -g @anthropic-ai/claude-code
    echo "✅ Claude Code installed"
fi

# Step 3 — Install Skills
echo ""
echo "🧠 Step 3: Installing Claude Skills..."
mkdir -p ~/.config/claude/skills
git clone --depth=1 --filter=blob:none --sparse \
    https://github.com/ComposioHQ/awesome-claude-skills /tmp/awesome-skills 2>/dev/null
cd /tmp/awesome-skills
git sparse-checkout set content-research-writer lead-research-assistant 2>/dev/null
cp -r content-research-writer lead-research-assistant ~/.config/claude/skills/
echo "✅ Skills installed:"
echo "   - content-research-writer"
echo "   - lead-research-assistant"

# Step 4 — Install MCPs
echo ""
echo "🔌 Step 4: Installing MCPs..."
claude mcp add github -s local -- npx -y @modelcontextprotocol/server-github
echo "✅ GitHub MCP installed"
claude mcp add gdrive -s local -- npx -y @modelcontextprotocol/server-gdrive
echo "✅ Google Drive MCP installed"
claude mcp add gmail -s local -- npx @gongrzhe/server-gmail-autoauth-mcp
echo "✅ Gmail MCP installed"
claude mcp add tavily -s local -- npx -y tavily-mcp
echo "✅ Tavily MCP installed"

# Step 5 — Git Config
echo ""
echo "⚙️  Step 5: Configuring Git..."
git config user.name "shaikhnoor78692"
git config user.email "scalesnap.in@gmail.com"
echo "✅ Git configured"

# Step 6 — Reminder for manual steps
echo ""
echo "================================"
echo "✅ AUTO SETUP COMPLETE!"
echo "================================"
echo ""
echo "⚠️  MANUAL STEPS STILL NEEDED:"
echo ""
echo "1. Set GitHub token:"
echo "   export GITHUB_PERSONAL_ACCESS_TOKEN=your_token"
echo "   Get from: github.com/settings/tokens"
echo "   Scopes: repo, read:org, workflow"
echo ""
echo "2. Set Tavily API key:"
echo "   export TAVILY_API_KEY=your_key"
echo "   Get from: tavily.com (free)"
echo ""
echo "3. Authenticate Google Drive:"
echo "   Copy gcp-oauth.keys.json to this machine"
echo "   Run: npx @modelcontextprotocol/server-gdrive auth"
echo ""
echo "4. Authenticate Gmail:"
echo "   Run: npx @gongrzhe/server-gmail-autoauth-mcp auth"
echo ""
echo "5. Verify everything:"
echo "   claude mcp list"
echo ""
echo "📖 See SCALESNAP_HANDOVER.md for full details"
echo "🚀 scalesnap.in is ready to go!"
