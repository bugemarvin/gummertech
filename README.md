# Production-Ready Multi-Disciplinary Portfolio

## 1. Project Functionality/Overview
This application is a professional, high-performance web portfolio built for technical multi-hyphenates (Software Engineers, DevOps, Designers, and IT Consultants). It provides a centralized hub to showcase technical expertise across various disciplines using a clean, modern aesthetic. 

**Key Highlights:**
- **Multi-Page Experience:** Dedicated routes for all professional facets.
- **Dynamic Project Gallery:** Interactive filtering based on technology stack or role.
- **Dark Mode Native:** Full implementation of system-preference or manual toggle dark/light themes.
- **Mobile First:** Fully responsive layout optimized for all screen sizes.
- **Accessible Design:** High color contrast and semantic HTML structure.
- **Vercel Ready:** Pre-configured for seamless SPA deployment with custom routing rules.

## 2. Setup and Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Steps
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run Development Server:**
   ```bash
   npm run dev
   ```
3. **Production Build:**
   ```bash
   npm run build
   ```

## 3. Vercel Deployment

This project includes a `vercel.json` file to ensure that client-side routing (React Router) works correctly after deployment. 

### Quick Deploy
1. Push this project to a **GitHub/GitLab/Bitbucket** repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Vercel will automatically detect **Vite** as the framework.
5. Click **Deploy**.

### Framework Settings
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 4. Architecture
- **Layout Engine:** Handles navigation persistence and global theme state.
- **Project Filtering:** Dynamic state-managed gallery processing JSON data.
- **Data Store:** Content is separated into `src/data/portfolioData.js` for easy updates without touching logic.
- **UI Components:** Built with Tailwind CSS and Lucide React icons.