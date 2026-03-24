# 互动全程使用中文

# Charades Generator - Project Context & Guidelines

## Project Overview

Charades Generator is a high-performance, SEO-optimized web application built with Next.js 15. It provides a suite of tools for party games, including a customizable charades word generator and a real-time "Imposter Game." The project is designed with a "SEO-first" mentality, featuring deep internationalization (English and Spanish) and comprehensive structured data.

### Primary Goals

- Provide the best user experience for finding charades ideas and words.
- Rank highly for charades-related search queries through targeted landing pages.
- Offer a seamless, real-time "Imposter Game" experience for groups.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State/Real-time**: Pusher (for Imposter Game rooms)
- **Internationalization**: Custom dictionary-based i18n (`src/i18n`)
- **SEO**: Structured Data (JSON-LD), Metadata API, Dynamic Sitemaps
- **Deployment**: Cloudflare / Vercel

## Key Directories

- `src/app/[locale]`: Core routing and page components with locale support.
- `src/components`: UI components, including SEO structured data components.
- `src/data`: Game word lists (`categories/`) and SEO metadata.
- `src/i18n`: Dictionaries (`en`, `es`) and config.
- `src/utils`: Game logic (`charades.ts`) and SEO helpers (`seo.ts`).

## Core Features

1. **Charades Generator**: `src/components/CharadesGeneratorOptimized.tsx`
   - Filter by: Category (Disney, Movies, Kids, etc.), Difficulty, Age Group.
   - Smart word picking with exclusion logic to avoid repeats.
2. **Imposter Game**: `src/components/imposter/ImposterGameRoom.tsx`
   - Real-time multiplayer game using Pusher.
   - Local QR code generation for easy invites.
   - Adaptive polling (5s active / 15s hidden) to save resources.
3. **SEO Landing Pages**:
   - Dedicated pages for specific niches (e.g., `/disney-charades-generator`).
   - Rich content: rules, use cases, examples, and FAQs.

## Development Mandates

### SEO & I18n

- **Never hardcode strings**: Always use the dictionary system (`getDictionary(locale)`).
- **Structured Data**: Every main landing page must include appropriate structured data components (Breadcrumb, FAQ, WebApplication, etc.).
- **Metadata**: Use `generateMetadata` in `page.tsx` files to handle canonicals, alternates, and OG tags properly.

### Performance & Optimization

- **Polling**: For real-time features, use the adaptive polling pattern (detect `document.hidden`).
- **Builds**: Ensure `npm run build` passes; pay attention to `generateStaticParams` for locale-based pages.
- **Dependencies**: Keep the footprint small. Use local libraries (like `qrcode`) over external APIs when possible.

### Code Style (from CLAUDE.md)

- **Incremental Progress**: Small, compilable changes.
- **Clear Intent**: Prefer "boring" and obvious code over clever abstractions.
- **Fail Fast**: Include context in error handling.
- **Max 3 Attempts**: If stuck on a bug for 3 tries, STOP and reassess (Research -> Document -> Pivot).

## Current Roadmap (Highlights)

- **Promotion**: Share best pages in relevant communities (Teachers, ESL, Parents).
- **Monitoring**: Review GSC every 28 days for ranking changes.
- **Monetization**: Maintain light AdSense load and relevant Amazon affiliate blocks.
- **Real-time Evolution**: Consider migrating from polling to Server-Sent Events (SSE) if scale requires.

## How to Help

- When adding new categories: Update `src/data/categories/`, add translations in `src/i18n/dictionaries/`, and create the corresponding page in `src/app/[locale]/`.
- When fixing bugs: Always check the impacts on both `en` and `es` locales.
- When improving SEO: Refer to `BRUTAL_SEO_REPORT.md` and `SEO_EXECUTION_CHECKLIST.md`.
