# Logging Off — Fixed Prompt for Claude Code
# When Nooralam says "logging off" in Claude.ai,
# Claude.ai asks 2 questions and formats the answers.
# Then Nooralam pastes ONLY the formatted answers here.
# Claude Code reads them and does everything automatically.

---

## Logging Off Check-in — Only 2 Questions:
1. Any replies received from leads today?
2. Anything you did today not logged yet?
Claude figures out tomorrow's priorities automatically
from context files — no need to ask Nooralam.

---

## How to use this every evening:

STEP 1 — In Claude.ai say "logging off"
STEP 2 — Answer 2 questions
STEP 3 — Copy the formatted output Claude.ai gives
STEP 4 — Open Claude Code and type:
          "Run logging off: [paste answers here]"
STEP 5 — Claude Code does everything automatically

---

## When you receive "Run logging off: [answers]"
do exactly this:

STEP 1 — Read the 2 answers provided

STEP 2 — Update files based on answers:

If "No replies yet":
→ No changes to outreach status

If any lead replied:
→ Update AGENT_Z_CONTEXT.md active leads table
→ Update MEMORY.md outreach status
→ Update ScaleSnap_Project_Hub.md client tracker

If "Nothing extra logged":
→ No additional action needed

If something extra was done:
→ Add it to AGENT_Z_CONTEXT.md yesterday's actions
→ Add it to SCALESNAP_HANDOVER_v2.md completed work

STEP 3 — Always update these regardless of answers:
→ MEMORY.md → tomorrow's priorities section
   Based on context files, figure out top 3 priorities
   for tomorrow automatically
→ AGENT_Z_CONTEXT.md → last updated date

STEP 4 — Commit all changed files:
Message: "auto: end of day update [TODAY'S DATE]"

STEP 5 — Push to GitHub

STEP 6 — Confirm with:
"✅ All done Nooralam!
Updated: [list files changed]
Pushed to GitHub ✅
---
Tomorrow's priorities:
1. [priority 1]
2. [priority 2]
3. [priority 3]
---
See you tomorrow! Get some rest. 🙏
First thing: paste MEMORY.md → Claude reminds you automatically"
