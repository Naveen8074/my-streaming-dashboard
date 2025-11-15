
---

## `AI_Report.md` (template)

```md
# AI Usage Report

**Project:** My Streaming Dashboard  
**Repo:** (paste your GitHub repo URL)  
**Vercel:** (paste your Vercel URL)

## What I asked the AI to help with
- Generate a complete Next.js 14 + TypeScript + Tailwind project skeleton.
- Provide server/client component separation examples (App Router).
- Produce working `lib/tmdb.ts` fetch helpers and type definitions.
- Create homepage with hero and horizontal movie rows, and dynamic movie detail page.
- Suggest deployment steps, `.gitignore`, and Vercel environment variable setup.
- Create README and this AI_Report.

## How the AI was used
- The AI (ChatGPT) provided code snippets, full file contents, and suggested commands for:
  - Project scaffolding
  - Tailwind setup
  - Image domain config
  - Server-side fetch helpers and types
  - UI components (Header, HeroBanner, MovieRow, dynamic detail page)
  - Deploy instructions and checklist

## Human work required / manual steps I performed
- Created TMDB account and obtained an API key.
- Created GitHub repository and pushed initial commit.
- Configured environment variable `TMDB_API_KEY` in Vercel.
- Verified images load (image domain is configured in `next.config.js`).

## Limitations / things to review
- The UI is a minimal scaffold; production apps require:
  - Proper error handling and loading states
  - Rate limiting and caching strategies
  - Accessibility audits and tests
  - Unit/e2e tests
  - Secrets management for production

## Attribution / model used
- Code and guidance generated with ChatGPT (GPT-based assistant). Use responsibly and review code before production deployment.
