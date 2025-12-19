# GummerTech Portfolio Application

## Project Overview
A production-ready, multi-page company portfolio for **GummerTech**, a technology consulting firm. Built with React 18, Vite, and Tailwind CSS, focusing on a deep tech-blue aesthetic and a data-driven architecture.

## Core Components
- **Static Data Layer**: All application content is stored in `src/data/siteContent.ts` to facilitate easy updates without UI modifications.
- **Responsive Layout**: Persistent Navbar and Footer with mobile optimization.
- **Modular Pages**: Individual views for Home, Services, Pricing, Projects, Skills, and Contact.
- **Animated UI**: Subtle entry transitions using Framer Motion.

## Architectural Workflows
1. **Data Injection**: Components consume objects from `siteContent.ts` using structured types.
2. **Routing**: Managed by React Router DOM with path aliases for clean URLs.
3. **Styling**: Utility-first CSS using a custom Tailwind theme extension for brand consistency.

## Setup & Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Local Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Production Build
1. Build the project:
   ```bash
   npm run build
   ```
2. The output will be in the `dist/` folder, ready for deployment.

### Vercel Deployment
- The project includes a `vercel.json` for SPA routing support.
- Connect your GitHub repository to Vercel and it will auto-detect the Vite configuration.