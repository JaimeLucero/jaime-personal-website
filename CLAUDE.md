# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with Next.js 15 and React 19. Features a responsive homepage showcasing skills and projects, with a Supabase-backed admin panel for managing project data. The site uses inline styles for most components rather than separate CSS files.

## Development Commands

```bash
# Start development server with Turbopack bundler (hot reload enabled)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint to check code quality
npm lint
```

The dev server runs on `http://localhost:3000` by default.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Main homepage (client component)
│   │   ├── admin/
│   │   │   └── page.tsx         # Admin panel for project management
│   │   └── _app.tsx             # Legacy app wrapper
│   ├── data/
│   │   └── supabase.ts          # Supabase client initialization
│   ├── hooks/
│   │   └── windowContextProvider.tsx  # Mobile detection hook (useWindowSize)
│   └── styles/
│       └── globals.css          # Global styles
├── components/                  # Root-level client components
│   ├── header.tsx              # Fixed navigation header with active section tracking
│   ├── footer.tsx              # Footer component
│   └── project-card.tsx        # Project card display
├── public/                      # Static assets (icons, images, fonts)
├── package.json
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration with @ alias to src/
└── tailwind.config.ts          # Tailwind CSS configuration
```

## Key Architecture Details

### Directory Organization
- **Components in root `components/`**: Unlike the typical Next.js app router pattern, components are placed in the root-level `/components` directory, NOT in `src/components/`. When adding new components, follow this convention.
- **src/ usage**: Contains app pages, hooks, styles, and data utilities. The `@/*` path alias in tsconfig points to `./src/*`.

### Homepage Structure (`src/app/page.tsx`)
A 'use client' component with multiple full-viewport sections:
- **Home**: Hero section with profile photo and introduction
- **Skills**: Grid of skill icons (git, figma, next, python, java, typescript)
- **Projects**: Fetched dynamically from Supabase, displayed as ProjectCard components
- **Talk (Contact)**: Social links with click handlers for email copy and external links

The page fetches projects from Supabase on mount and handles responsive layouts using the `useWindowSize` hook for mobile detection (breakpoint: 1080px).

### Admin Page (`src/app/admin/page.tsx`)
Full project CRUD interface with:
- Email/password authentication via Supabase Auth
- Real-time project list display with inline images
- Create/Edit/Delete operations
- Form validation (title required) and user feedback via alerts

### Data Layer
**Supabase Client** (`src/data/supabase.ts`):
- Single exported instance for all data operations
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Throws on missing configuration (required for development and production)

**Projects Table** schema (Supabase):
```typescript
type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;           // Optional project URL
  thumbnail?: string;      // Optional image URL (supports google.com images)
  created_at?: timestamp;  // Auto-managed by Supabase
}
```

### Responsive Design
- **Mobile breakpoint**: 1080px (via `useWindowSize` hook)
- **Styling approach**: Primarily inline styles with limited CSS files
- **Header**: Fixed navigation with hamburger menu on mobile, smooth scroll-to-section navigation with active section highlighting

### Image Handling
- `next/image` used for optimized images
- Google Drive images allowed in config (domains: ['drive.google.com'])
- Public folder icons imported as static SVG/image assets

## Environment Setup

Create a `.env.local` file in the project root with:
```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

The Supabase client will throw an error at initialization if these are missing.

## Code Style & Patterns

- **TypeScript strict mode**: Enabled in tsconfig.json
- **ESLint config**: Uses `next/core-web-vitals` and `next/typescript` (see eslint.config.mjs)
- **Client components**: Most interactive components use `'use client'` directive (app router pattern)
- **State management**: React hooks (useState, useEffect, useMemo) for local state; no Redux or Context API in core components
- **Error handling**: Basic try-catch with console.error and alert fallbacks in async operations

## Dependencies

- **next**: 15.1.11 (App Router, SSR/SSG)
- **react/react-dom**: 19.0.0
- **@supabase/supabase-js**: 2.88.0 (Database & Auth)
- **styled-components**: 6.1.14 (installed but not heavily used; mostly inline styles)
- **tailwindcss**: 3.4.1 (configured but mostly inline styles in practice)

## Common Tasks

### Adding a New Project Section to Homepage
1. Add a new `<section id="your-section">` to `src/app/page.tsx`
2. Use the `useWindowSize()` hook for responsive layouts
3. Import any new components from the root `components/` directory

### Modifying Projects Display
1. Update the `Project` type definition in `src/app/page.tsx` if adding fields
2. Ensure Supabase table schema matches the TypeScript type
3. Update the admin form in `src/app/admin/page.tsx` to support new fields

### Styling Guidelines
- Most components use inline styles via React's `style` prop
- CSS classes from globals.css are used sparingly (e.g., `hover-effect`, `responsive-container`)
- When adding new components, prefer inline styles for consistency with the codebase

### Deploying to Vercel
The project is configured for Vercel deployment. Set environment variables in the Vercel dashboard with `NEXT_PUBLIC_` prefix for client-side access.
