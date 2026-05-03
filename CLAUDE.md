# Claude Code — Standing Instructions
# ScaleSnap Project — Nooralam Shaikh

## CRITICAL RULE
After completing ANY task or activity 
in this project, you MUST automatically 
update these 4 files:

### 1. SCALESNAP_HANDOVER.md
- Move completed task to "COMPLETED WORK" 
  section with today's date
- Remove from "PENDING TASKS" if done
- Add any new pending tasks discovered
- Update any changed account details
- Update last updated date at top

### 2. MEMORY.md
- Update "WHAT TO DO NEXT" section
- Remove completed items
- Add new pending items
- Keep it SHORT and scannable

### 3. README.md
- Update if any new setup steps added
- Update if any new MCPs or skills added
- Update pending/future section

### 4. SETUP.sh
- Update if any new MCPs added
- Update if any new skills added
- Update if setup process changes

## WHEN TO UPDATE
Update ALL 4 files after:
- Any website change
- Any new account created
- Any MCP added or removed
- Any skill added or removed
- Any task completed
- Any new issue discovered
- Any payment link changed
- Any configuration changed

## GIT WORKFLOW — BRANCH PROTECTION ACTIVE
main branch is protected. Direct push to main will be REJECTED.

For ALL changes:
1. `git checkout dev` or `git checkout -b dev`
2. Make all changes on dev only
3. `git push origin dev`
4. Create PR: dev → main (via GitHub MCP or `gh pr create`)
5. End every task with: "Changes pushed to dev branch. Pull Request created. Please review before merging."
6. NEVER merge the PR — user merges manually

## HOW TO UPDATE
After every completed task run:
git checkout dev
git add SCALESNAP_HANDOVER.md MEMORY.md README.md SETUP.sh
git commit -m "docs: update handover after [task name]"
git push origin dev
# Then create PR from dev → main

## PROJECT CONTEXT
- Owner: Nooralam Shaikh
- Business: ScaleSnap (scalesnap.in)
- Stack: HTML + CSS + JS + Netlify + GitHub
- MCPs: github, gdrive, gmail, tavily
- Skills: content-research-writer, lead-research-assistant
- Goal: AI content agency earning ₹15,000-20,000/month

## COMMUNICATION STYLE
- Give exact prompts to copy-paste
- Keep steps small and simple
- Create files directly when possible
- No paid tools unless critical
- Nooralam is shy — no personal social media
