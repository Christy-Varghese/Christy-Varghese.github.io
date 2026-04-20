# Christy Varghese — Mamba Portfolio 🐍

A Kobe Bryant "Mamba Mentality" themed personal portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **GSAP**.

🔗 **Live:** [https://christy-varghese.github.io](https://christy-varghese.github.io)

---

## ✨ Features

- **Mamba-themed design** — Dark/light mode with Lakers-inspired color palette
- **Smooth animations** — Page loader, scroll indicators, GSAP & Framer Motion transitions
- **Responsive** — Fully mobile-friendly layout
- **Sections** — Hero, Stats Sheet, Playbook (Experience), Training Log (Projects), Shot Chart (Skills), Awards & Education

## 🛠 Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 14 (Static Export)          |
| Styling     | Tailwind CSS                        |
| Animation   | Framer Motion, GSAP                 |
| Icons       | Lucide React                        |
| Deployment  | GitHub Pages via GitHub Actions     |

## 📁 Project Structure

```
app/
  layout.js          ← Root layout with theme provider
  page.js            ← Home page composing all sections
  globals.css        ← Global styles & Tailwind imports
components/
  Navbar.jsx         ← Navigation bar
  Hero.jsx           ← Hero/intro section
  StatsSheet.jsx     ← Key metrics & stats
  Playbook.jsx       ← Work experience
  TrainingLog.jsx    ← Projects showcase
  ShotChart.jsx      ← Skills visualization
  AwardsEducation.jsx← Awards & education
  Footer.jsx         ← Footer
  ModeToggle.jsx     ← Dark/light theme toggle
  PageLoader.jsx     ← Loading animation
  ScrollIndicator.jsx← Scroll progress indicator
  ProjectCard.jsx    ← Individual project card
context/
  ThemeContext.jsx    ← Theme state management
```

## 🚀 Local Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## 📦 Build & Deploy

Deployment is automated via GitHub Actions on push to `main`.

To build locally:
```bash
npm run build      # Outputs static site to ./out
```

## 👤 Author

**Christy Varghese**
- GitHub: [@Christy-Varghese](https://github.com/Christy-Varghese)
- Website: [christy-varghese.github.io](https://christy-varghese.github.io)
