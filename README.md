# GummerTech Portfolio

Professional multi-page company portfolio for GummerTech built with React 18, Vite, and Tailwind CSS.

## Tech Stack
- **Framework:** React 18 (Functional Components, Hooks)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Utility-first, responsive, dark mode)
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Type Safety:** TypeScript

## Architecture
- **Modular Data:** All content is managed in `src/data/content.ts` for easy updates.
- **Component-Driven:** Atomic UI components (`Button`, etc.) used across pages.
- **Responsive Design:** Mobile-first approach using Tailwind's breakpoint system.
- **Dark Mode:** Integrated using Tailwind's `dark` class variant, toggled via a global class on `body`.

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Deployment (Vercel)
The project includes a `vercel.json` for SPA routing configuration. Simply connect your repository to Vercel and it will build using `npm run build` with the `dist` output directory.