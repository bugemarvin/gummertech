# Production-Ready Multi-Disciplinary Portfolio

## 1. Project Functionality/Overview
This application is a professional, high-performance web portfolio built for technical multi-hyphenates (Software Engineers, DevOps, Designers, and IT Consultants). It provides a centralized hub to showcase technical expertise across various disciplines using a clean, modern aesthetic. 

**Key Highlights:**
- **Multi-Page Experience:** Dedicated routes for all professional facets.
- **Dynamic Project Gallery:** Interactive filtering based on technology stack or role.
- **Dark Mode Native:** Full implementation of system-preference or manual toggle dark/light themes.
- **Mobile First:** Fully responsive layout optimized for all screen sizes.
- **Accessible Design:** High color contrast and semantic HTML structure.

## 2. Core Components
- **Layout Engine:** A wrapper component utilizing `react-router-dom` and `framer-motion` to handle navigation persistence and global state (theme).
- **Project Filtering:** A dynamic state-managed gallery that processes raw JSON data to render categorizable project cards.
- **Global Data Store:** Centralized `portfolioData.js` to ensure content is separated from the presentation logic, making updates easy.
- **UI Atoms:** Reusable Tailwind-driven components including Buttons, Section Wrappers, and Information Cards.

## 3. Architectural Workflows
1.  **Request Cycle:** The user lands on the Home route. React Router resolves the path and renders the specific page within the `Layout` wrapper.
2.  **Theme Logic:** The theme state is managed in `App.jsx` and injected into the DOM root, affecting Tailwind's `dark:` utility classes globally.
3.  **Data Flow:** Component logic imports data from `src/data/`. This allows for a "Headless" approach where content can eventually be swapped with a CMS API without changing component structures.

## 4. Setup and Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Steps
1.  **Extract the project files** into a directory.
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
4.  **Production Build:**
    ```bash
    npm run build
    ```
    The production-ready assets will be available in the `dist/` folder.

### Tech Stack
- **React 18** (UI Library)
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling Framework)
- **Lucide React** (Icons)
- **React Router DOM** (Routing)
- **Flowbite** (Component Utilities)