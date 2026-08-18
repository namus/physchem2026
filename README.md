# Frontiers of Physical Chemistry 2026 Website

Website for the flagship national conference **"Frontiers of Physical Chemistry: Experiments, Computations and Theory"**, hosted at the **S. N. Bose National Centre for Basic Sciences (SNBNCBS), Kolkata** from **October 28 – 31, 2026**.

## 🌐 Live URL on GitHub Pages
- Planned URL: `https://namus.github.io/physchem2026/` (or user root domain `https://namus.github.io/`)

---

## 📁 Repository & Directory Structure

```
.
├── index.html                   # Master single-page conference website
├── css/
│   ├── style.css                # Color variables, typography, hero banner & layout
│   └── components.css           # UI components, countdown, speaker cards, tabs, modal, FAQ
├── js/
│   ├── main.js                  # Navigation, sticky header, scrollspy, mobile drawer, modal
│   ├── countdown.js             # Live countdown to Oct 28, 2026 + Google Cal / .ICS export
│   ├── speakers.js              # 34 pre-populated speakers + real-time search & filter
│   └── schedule.js              # Tabbed scientific program day-switcher
├── images/
│   ├── conference_logo.jpeg     # Conference logo
│   ├── physchem-hero-banner.jpg # Hero banner scientific collage
│   ├── SNBNCBS_banner.jpg       # SNBNCBS banner image
│   └── S-N-Bose-Centre-scaled.jpg # SNBNCBS campus photo
└── README.md                    # Deployment and management instructions
```

---

## 🚀 How to Deploy to GitHub Pages

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Frontiers of Physical Chemistry 2026 website"
   ```

2. **Create a GitHub Repository**:
   Create a repository named `physchem2026` under your GitHub account (`namus`):
   ```bash
   git branch -M main
   git remote add origin https://github.com/namus/physchem2026.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/namus/physchem2026/settings/pages`
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
   - Your website will be live in ~1-2 minutes at: `https://namus.github.io/physchem2026/`

---

## 💻 Local Preview

Because this website uses 100% standard static HTML5, CSS3, and modern vanilla JavaScript with no build steps or bundlers required, you can preview it immediately:

- **Option 1**: Double-click `index.html` to open in any web browser.
- **Option 2** (Python Local Server):
  ```bash
  python3 -m http.server 8000
  ```
  Then visit `http://localhost:8000` in your browser.

---

## ✏️ Updating Content

### 1. Updating Speakers & Talk Titles
Open `js/speakers.js` and add/edit the objects inside `speakersData`:
```javascript
{
  name: "Prof. Speaker Name",
  institution: "Institution Name",
  category: "iits", // options: 'iits', 'iisers', 'iisc-tifr-jncasr', 'research-institutes', 'universities', 'snbncbs'
  categoryLabel: "IITs",
  topic: "Specific Talk Title"
}
```

### 2. Updating Registration / Google Form Links
In `index.html`, search for `href="#registration"` or `href="#contact"` and replace with your live Google Form URL or payment gateway link.

### 3. Updating Dates or Schedule
- **Dates**: Edit the `dates-timeline` section in `index.html`.
- **Program Details**: Edit the `schedule-pane` sections in `index.html`.
