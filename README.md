# GummerTech Portfolio

Professional multi-page company portfolio built with **React 18**, **TypeScript**, and **Tailwind CSS**.

## Project Overview

This application serves as the digital front for GummerTech, showcasing its expertise in software engineering, DevOps, and systems design. It utilizes a dynamic data-driven architecture where all content is managed centrally, making it easily maintainable and scalable.

### Core Components
- **Router-Based Navigation**: Fluid SPA transitions using `react-router-dom`.
- **Dynamic Data Injection**: No hardcoded text in components; all data originates from `src/data/siteData.ts`.
- **Custom UI System**: A purpose-built component library using Tailwind primitives (Buttons, Cards, Sections).
- **Responsive Architecture**: Mobile-first design principles applied throughout.

### Architectural Workflows
1. **Data Layer**: Centralized site content in TypeScript interfaces.
2. **Component Layer**: Stateless UI components consuming data via props.
3. **Style Layer**: Tailwind CSS custom theme extension for GummerTech visual identity.

## Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Development Mode**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Deployment**:
   The project includes a `vercel.json` file for immediate deployment on Vercel. Simply connect your repository to the Vercel dashboard.