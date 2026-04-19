🔗 **Live Demo:** [https://lasyagovindwar.github.io/internship-task-doc/](https://lasyagovindwar.github.io/internship-task-doc/)

# 📄 Internship Task Document

A professional frontend project built with **Handlebars** (templating) and **Vite** (bundler). All page content is driven dynamically from `content.json` — no hardcoded HTML copy.

---

## 🚀 Tech Stack

| Tool | Role |
|------|------|
| [Handlebars.js](https://handlebarsjs.com/) | Semantic templating with partials, helpers, and `{{expression}}` binding |
| [Vite](https://vitejs.dev/) | Dev server with HMR + optimised production build |
| [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars) | Bridge between Vite's pipeline and Handlebars |
| CSS3 | Custom properties, Grid/Flexbox, responsive design |
| Vanilla JS | Scroll-to-top, active-nav highlighting, mobile menu |

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (hot reload)
npm run dev

# 3. Build for production → output goes to /dist
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 📁 Folder Structure

```
project-root/
├── public/
│   └── favicon.svg               # SVG favicon served at root
├── src/
│   ├── index.html                # Entry point — references .hbs template via Vite plugin
│   ├── templates/
│   │   └── partials/
│   │       ├── header.hbs        # Reusable sticky header partial
│   │       └── footer.hbs        # Reusable footer partial
│   ├── assets/
│   │   ├── css/style.css         # All styles (custom properties, responsive, animations)
│   │   ├── js/main.js            # Scroll-to-top, nav highlight, mobile menu
│   │   └── images/               # (place any images here)
│   └── data/
│       └── content.json          # Single source of truth for ALL page content
├── dist/                         # Auto-generated production build output
├── package.json
├── vite.config.js                # Vite config with Handlebars plugin + context injection
└── README.md
```

---

## 🔑 How It Works

1. **`vite.config.js`** reads `content.json` at startup and passes it as context to every Handlebars template via `vite-plugin-handlebars`.
2. **`src/index.html`** contains Handlebars expressions like `{{meta.title}}` and `{{#each sections}}` — Vite processes these before serving/building.
3. **Partials** (`header.hbs`, `footer.hbs`) are registered automatically from the `partialDirectory` and called with `{{> header}}` / `{{> footer}}`.
4. **`content.json`** is the **single source of truth** — change it and every rendered page element updates immediately.

---

## ✅ Features

- ✅ Handlebars templating (`.hbs` partials, `{{#each}}`, `{{#if}}`, custom `eq` helper)
- ✅ Vite dev server with hot module replacement
- ✅ Dynamic content from `content.json` (zero hardcoded copy)
- ✅ Reusable header + footer partials
- ✅ 6 section types: prose, cards, checklist, numbered, file-tree, links
- ✅ Responsive layout (mobile nav, collapsing grids)
- ✅ Hover effects on all interactive elements
- ✅ Scroll-to-top button + active nav highlighting
- ✅ SVG favicon + full meta tags
- ✅ Production build outputs to `/dist`

---

## 📝 Adding New Sections

Edit `src/data/content.json` and add a new object to the `sections` array:

```json
{
  "id": "my-section",
  "emoji": "🚀",
  "title": "My New Section",
  "type": "checklist",
  "items": ["Item one", "Item two"]
}
```

The template automatically handles rendering via `{{#if (eq this.type "checklist")}}`.

---

*Built for the Frontend Internship Assessment · Handlebars + Vite · 2025*
