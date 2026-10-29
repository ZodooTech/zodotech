# ZodoTech - Professional Website

Advanced, production-grade corporate website for **ZodoTech** — providing enterprise Odoo ERP implementation, custom module development, business process automation, and third-party integrations.

**Tagline:** *Build. Customize. Grow.*  
**Engineering Focus:** 100% Native Odoo ORM models, zero core file modifications, upgrade-safe inheritance, and performant PostgreSQL database architectures.

---

## Technical Stack & Architecture

- **Markup:** Semantic HTML5 documents (`index.html`, `about.html`, `services.html`, `industries.html`, `contact.html`, `privacy.html`, `terms.html`, `404.html`)
- **Styles:** Modular CSS3 with custom properties, modern Grid & Flexbox, fluid clamp typography, and full responsiveness (`assets/css/`)
- **Scripts:** Modern Vanilla JavaScript ES modules (`assets/js/`)
- **Assets:** Original transparent high-resolution brand logo, custom vector ERP illustration, SVG icons, and multi-resolution favicons (`assets/images/`, `favicon.svg`, `favicon.ico`)
- **Zero Build Step:** 100% static, requiring no compiler, no package manager, and no build configuration. Runs directly in any modern browser and deploys seamlessly to GitHub Pages.

---

## Project File Structure

```text
zodotech-website/
├── index.html              # Homepage (Hero, Challenges, Services, Expertise, Process, FAQs, CTA)
├── about.html              # About ZodoTech (Philosophy, Principles, Development Practices)
├── services.html           # Detailed Service Profiles & Quotation Guides
├── industries.html         # Vertical Industry Workflows & Use Cases
├── contact.html            # Contact Form with Client-Side Validation
├── privacy.html            # Editable Privacy Policy Template
├── terms.html              # Editable Terms of Use Template
├── 404.html                # Branded Error Page (GitHub Pages compatible)
├── robots.txt              # Search Engine Crawling Directives
├── sitemap.xml             # XML Sitemap
├── CNAME                   # Custom Domain Binding (e.g., zodotech.com)
├── README.md               # Documentation & Deployment Guide
├── favicon.svg             # Vector Favicon
├── favicon.ico             # Standard 64x64 Browser Favicon
│
└── assets/
    ├── images/
    │   ├── zodotech-logo.png       # Primary Transparent Brand Logo
    │   ├── zodotech-mark.png       # Compact Emblem / Icon
    │   ├── hero-illustration.svg   # Custom Connected ERP Architecture SVG
    │   ├── favicon.svg             # Brand Vector Icon
    │   └── favicon.ico             # Icon Asset
    │
    ├── css/
    │   ├── variables.css           # Brand Tokens (Navy, Blue, Cyan, Purple) & Clamp Scales
    │   ├── reset.css               # Modern CSS Reset & Reduced-Motion Handlers
    │   ├── typography.css          # Typography Hierarchy & Zero-Pill Text Rules
    │   ├── global.css              # Containers, Sections & Screen-Reader Helpers
    │   ├── layout.css              # 2-Column Hero & Responsive Grid Systems
    │   ├── components.css          # Buttons, Cards, Bento Spans, Metric Strips
    │   ├── navigation.css          # Top Bar Contract (Brand - Links - Action) & Mobile Drawer
    │   ├── sections.css            # Challenges, Expertise Grid, Process Timeline, Accordions
    │   ├── animations.css          # Compositor-Only Transitions (Transform/Opacity)
    │   ├── forms.css               # Inputs, Validation States & Loading Spinners
    │   ├── footer.css              # Deep Navy Footer & Dynamic Copyright
    │   └── responsive.css          # Fluid Breakpoints (320px to 1920px+)
    │
    └── js/
        ├── main.js                 # Safe Orchestration Controller
        ├── navigation.js           # Header Scroll Observer & Accessible Mobile Drawer
        ├── animations.js           # IntersectionObserver Scroll Reveals
        ├── interactions.js         # Smooth Anchors & Email Clipboard Copy
        ├── faq.js                  # Accessible FAQ Accordion with Keyboard Navigation
        ├── contact-form.js         # Validation & FormSubmit Submission Handler
        └── utilities.js            # DOM Helpers & Copyright Year Auto-Updater
```

---

## Local Development & Preview

Because this is a pure static website with no build step:

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer to open it in Chrome, Firefox, Safari, or Edge. (Note: ES module imports require an HTTP server).

### Option 2: Simple Local HTTP Server
Run any lightweight static server:
```bash
# Python 3
python3 -m http.server 8000

# or Node npx (serve)
npx serve .
```
Then navigate to `http://localhost:8000`.

---

## GitHub Pages Deployment Guide

Deploying ZodoTech to GitHub Pages takes under two minutes:

1. **Create a GitHub Repository:**
   - Log in to your GitHub account.
   - Click **New Repository**.
   - Name it (e.g., `zodotech` or `zodotech.github.io`).
   - Set visibility to **Public**.

2. **Upload Website Files:**
   - Push or upload all files from this project directory to the repository's root (`main` or `master` branch).
   - Ensure `index.html` is located at the repository root.

3. **Enable GitHub Pages:**
   - Go to repository **Settings** &rarr; **Pages** (under Code and automation in the left sidebar).
   - Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
   - Select branch `main` (or `master`) and folder `/(root)`.
   - Click **Save**.

4. **Verify Live Deployment:**
   - In 30–60 seconds, GitHub Pages will publish the site at:  
     `https://<your-username>.github.io/<repository-name>/` (or `https://<your-username>.github.io/` for user sites).

---

## Custom Domain Configuration

To connect a custom domain (e.g., `zodotech.com`):

1. **Edit the `CNAME` File:**
   - Open the `CNAME` file in the root directory.
   - Replace its contents with your registered domain (e.g., `zodotech.com` or `www.zodotech.com`).

2. **Configure DNS Records with Your Domain Registrar:**
   - For an **Apex Domain** (`zodotech.com`), add four `A` records pointing to GitHub Pages IP addresses:
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For a **Subdomain** (`www.zodotech.com`), add a `CNAME` record:
     ```text
     Host: www
     Target: <your-username>.github.io
     ```

3. **Enable HTTPS in GitHub Settings:**
   - Go to **Settings** &rarr; **Pages**.
   - Under **Custom domain**, enter your domain name.
   - Check **Enforce HTTPS** once the DNS check succeeds.

4. **Update Canonical URLs:**
   - Update the `<meta property="og:url">` tags and `sitemap.xml` with your final domain.

---

## Contact Form Integration (FormSubmit)

The contact form is pre-configured to deliver submissions directly to:
`odoodeveloper10@gmail.com`

### FormSubmit One-Time Activation Step:
1. Submit a test message through the live contact form on your deployed site.
2. FormSubmit will immediately send a verification email to `odoodeveloper10@gmail.com`.
3. Open the email and click **Activate Form**.
4. Future form submissions will arrive directly in your inbox.
5. Inquiries include the client's Name, Email, Company, Odoo Version, Service Category, Budget, and Project Description in a structured table.

---

## Testing & Quality Checklist

- [x] **Zero JSON Files:** The deployment directory contains strictly 0 files ending in `.json`.
- [x] **No Build Tools Required:** Pure standard HTML5, CSS3, and Vanilla JavaScript.
- [x] **Brand Color Compliance:** Anchored to Deep Navy (`#071A42`), Electric Blue (`#0878F9`), Cyan (`#00D5F2`), and Vibrant Purple (`#8B18F5`).
- [x] **Accessibility (WCAG 2.2 AA):** Semantic landmarks, keyboard-navigable accordions, visible focus rings, and skip-link.
- [x] **Responsive Across Viewports:** Fluid layout tested from 320px, 375px, 430px, 768px, 1024px to 1440px+.
- [x] **Clean Upgrades:** Respects standard Odoo architecture conventions.
