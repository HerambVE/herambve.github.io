# personal0website (herambve)

Personal portfolio, systems & AI engineering writeups, worklogs, and photography by **Heramb Vengurlekar**.

Live Website: [https://herambve.github.io/personal0website/](https://herambve.github.io/personal0website/)

---

## 🛠️ Stack & Technologies

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** Custom CSS with typography design tokens & dark/light theme toggle
- **Content:** MDX, KaTeX math typesetting (`rehype-katex`), Shiki syntax highlighting
- **Icons:** `lucide-astro`
- **Hosting:** GitHub Pages

---

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HerambVE/personal0website.git
   cd personal0website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## 📂 Site Structure

- `src/pages/index.astro` — Homepage with GitHub activity graph and current focus areas
- `src/content/pages/about.mdx` — Personal background, engineering philosophy, and offline pursuits
- `src/pages/research/` — Systems architecture and machine learning project writeups
- `src/pages/blog/` — Engineering articles and technical logs
- `src/pages/photography/` — Interactive masonry card photo gallery with full-screen lightbox
