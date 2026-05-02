# Logging Off — Fixed Prompt for Claude Code
# When Nooralam says "logging off" in Claude.ai,
# Claude.ai asks 3 questions and formats the answers.
# Then Nooralam pastes ONLY the formatted answers here.
# Claude Code reads them and does everything automatically.

---

## How to use this every evening:

STEP 1 — In Claude.ai say "logging off"
STEP 2 — Answer 3 questions
STEP 3 — Copy the formatted output Claude.ai gives
STEP 4 — Open Claude Code and type:
          "Run logging off: [paste answers here]"
STEP 5 — Claude Code does everything automatically

---

## What Claude Code does automatically:

When you receive "Run logging off: [answers]", do this:

1. Read the answers provided
2. Update MEMORY.md:
   - Business status if anything changed
   - Outreach status if any replies received
   - Security rules if any issues flagged
3. Update AGENT_Z_CONTEXT.md:
   - Yesterday's actions → today's completed actions
   - Replies received → any new replies
   - Active leads → update status if changed
4. Update AGENT_W_CONTEXT.md:
   - Revenue if any payment received
   - Clients if any new client added
   - Last week summary if relevant
5. Update AGENT_S_CONTEXT.md:
   - Only if security issue mentioned
6. Update SCALESNAP_HANDOVER_v2.md:
   - Add today's date to completed work
   - Update pending tasks if anything resolved
7. Commit ALL changed files with message:
   "auto: end of day update [TODAY'S DATE]"
8. Push to GitHub
9. Confirm:
   "✅ All done Nooralam!
   Files updated: [list]
   Committed and pushed to GitHub.
   See you tomorrow! 🚀
   First thing: paste MEMORY.md → Run Agent Z"
