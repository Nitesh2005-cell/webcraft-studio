# WebCraft Studio

A modern, high-converting agency website for WebCraft Studio — a premium web design and development agency. Built with Next.js, TypeScript, and Tailwind CSS, the site showcases services, portfolio projects, team members, and includes a blog and admin panel.

## Features

- **Hero Section** — Eye-catching landing with CTAs
- **Services** — Business Websites, E-Commerce, Landing Pages, UI/UX Design, SEO & Performance, Maintenance & Support
- **Portfolio** — Filterable showcase of client projects
- **Stats** — Social proof metrics (50+ projects, 40+ clients, 98% satisfaction)
- **Team** — Meet the team with photos and roles
- **Process** — 4-step workflow: Discovery → Design & Plan → Development → Launch & Support
- **Testimonials** — Client success stories
- **Blog** — Full blog with individual post pages
- **Contact** — Contact form with Nodemailer email integration
- **Admin Panel** — Manage blog posts and portfolio projects
- **WhatsApp Button** — Floating WhatsApp CTA for quick client contact

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Email | Nodemailer |

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── blog/             # Blog listing and post pages
│   ├── contact/          # Contact form page
│   └── admin/            # Admin panel for managing content
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, Services, Portfolio, Team, etc.
│   └── ui/               # Cursor, ScrollReveal, WhatsAppButton
├── lib/
│   ├── data.ts           # Static data and fallbacks
│   └── db.ts             # Data access utilities
data/
├── projects.json         # Portfolio projects
└── blogs.json            # Blog posts
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
