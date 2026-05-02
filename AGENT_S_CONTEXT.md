# Agent S — Security & Health Context File
# Read automatically every time Agent S runs
# Auto-updated by Agent S after every session

## LAST UPDATED
Date: May 2, 2026

## LAST RUN SUMMARY
Date: May 2, 2026
Overall Status: 🔴 Critical issue found and fixed
Issues Found: 1 critical, 0 medium, 0 low
Issues Fixed: 1 (gcp-oauth.keys.json exposed on GitHub)
Issues Pending: 1 (revoke old OAuth client — blocked, Google account disabled)

## KNOWN PENDING ISSUES
| # | Issue | Severity | Status | Action Needed |
|---|-------|----------|--------|---------------|
| 1 | Revoke old OAuth client in Google Cloud | 🔴 High | Pending | Do when Google account restored |
| 2 | Google account disabled | 🔴 High | Appeal submitted May 2 | Wait for Google response |

## GITHUB SECURITY STATUS
Last checked: May 2, 2026
Exposed files found: gcp-oauth.keys.json (FIXED — purged from all history)
.gitignore status: ✅ Correct
Secret scanning: Not enabled yet
Files to never commit:
- gcp-oauth.keys.json
- *.keys.json
- .env
- *.env
- *.pem
- *.p12
- *credentials*.json
- *secret*.json

## ACCOUNT STATUS
| Account | Status | Last Verified | Notes |
|---------|--------|---------------|-------|
| scalesnap.in@gmail.com | 🔴 Disabled | May 2, 2026 | Appeal submitted |
| GitHub | ✅ Active | May 2, 2026 | — |
| Netlify | ✅ Active | May 2, 2026 | — |
| Fiverr | ✅ Active | May 2, 2026 | — |
| LinkedIn | ✅ Active | May 2, 2026 | — |
| Razorpay | ✅ Active | May 2, 2026 | — |
| PayPal | ⏳ Pending | May 2, 2026 | Bank verification pending |
| Google Cloud | 🔴 Blocked | May 2, 2026 | Linked to disabled Gmail |

## MCP STATUS
| MCP | Status | Last Working | Notes |
|-----|--------|--------------|-------|
| GitHub MCP | ✅ Working | May 2, 2026 | — |
| Google Drive MCP | 🔴 Broken | May 2, 2026 | Gmail disabled |
| Gmail MCP | 🔴 Broken | May 2, 2026 | Gmail disabled |
| Tavily MCP | ✅ Working | May 2, 2026 | — |

## WEBSITE HEALTH
Last checked: May 2, 2026
scalesnap.in: ✅ Live
Contact form: ✅ Working
Payment links: ✅ Working
SSL certificate: ✅ Valid
Mobile responsive: ✅ Yes
Last issue: None

## SECURITY INCIDENTS LOG
| Date | Incident | Severity | Resolution |
|------|----------|----------|------------|
| May 1, 2026 | Fiverr fake order (iwib1kee7wsg) | 🟡 Medium | Blocked + reported |
| May 2, 2026 | gcp-oauth.keys.json exposed on GitHub | 🔴 Critical | Purged from all history |
| May 2, 2026 | Google account disabled | 🔴 Critical | Appeal submitted |
| May 2, 2026 | Facebook scam group | 🟡 Medium | Left group immediately |

## SECURITY CHECKLIST (Agent S checks every run)
GitHub:
- [ ] No sensitive files in repo
- [ ] .gitignore correct and complete
- [ ] No hardcoded passwords or API keys in code
- [ ] Check index.html and script.js for exposed keys
- [ ] Secret scanning enabled

Accounts:
- [ ] All platforms accessible
- [ ] No suspicious login alerts
- [ ] 2FA enabled where possible
- [ ] Payment links working

Website:
- [ ] scalesnap.in loading correctly
- [ ] SSL certificate valid
- [ ] Contact form working
- [ ] No broken links

MCPs:
- [ ] All 4 MCPs connected and working
- [ ] No expired tokens

Business:
- [ ] Fiverr profile active
- [ ] LinkedIn accessible
- [ ] Razorpay links working

## NEXT RUN DUE
Date: May 16, 2026 (every 2nd Sunday)
