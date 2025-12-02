Here’s a complete, copy-paste-ready markdown guide for you, Atrajit.
It includes:

* How to structure the project
* Starter **HTML/CSS/JS** (beautiful, modern, responsive)
* Step-by-step **GitHub Pages** hosting
* A **ready-made AI prompt** with your own info filled in

You can save this as `PORTFOLIO_GUIDE.md` and keep it with your project.

---

````md
# Personal Portfolio Website – HTML/CSS/JS + GitHub Pages

This guide will help you create a **static portfolio website** (no backend) using only **HTML, CSS, and JavaScript**, and host it on **GitHub Pages**.

The content and sections are tailored to **Atrajit Sarkar** – MSc in Mathematics (IIT Delhi), Android developer, automation + bots, and writer.

---

## 1. Project Structure

Create a folder on your computer, for example:

```text
atrajit-portfolio/
├── index.html
├── styles.css
└── script.js
````

You will edit these three files.

---

## 2. What Sections Your Portfolio Will Have

We’ll use these main sections:

1. **Home / Hero**

   * Name: **Atrajit Sarkar**
   * Tagline: *Mathematician • Android Developer • Automation & Bots • Writer*
   * Short intro and a “Contact” button.

2. **About Me**

   * MSc in Mathematics from IIT Delhi.
   * PhD aspirant (analysis, number theory, algebra; interest in MZVs).
   * Philosophy: bridging mathematical theory with real-world software.

3. **Mathematics & Research**

   * Interests: analysis, number theory, algebra, multiple zeta values.
   * Mention Morse theory project under **Dr. Biplab Basak**.
   * Mention preparing for PhD (Aug 2025 / later cycles).

4. **Software & Projects**

   * Android development with Jetpack Compose (chat apps, GitHub integration, local DB with Hilt).
   * Python automation: WhatsApp auto-replies, PDF converters, email bots, Telegram bots.
   * C++ for 3D simulations.
   * Telegram/WhatsApp bots, Gmail automation, DNS/SMTP tools, etc.

5. **Teaching**

   * Courses taught/mentored:

     * Real Analysis, Modern Algebra, Linear Algebra, Topology,
       Functional Analysis, Measure Theory, Algebraic Topology.
   * Mentoring students in Android app development and networking apps.

6. **Writing / Literature**

   * Passion for Bengali and English poetry and stories.
   * Author of *Silhouette of Words* (available on Amazon).

7. **Contact**

   * Email, GitHub, Telegram, etc. (you will fill real links).

You can adjust or remove any section later as you wish.

---

## 3. Base HTML (index.html)

Create `index.html` with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>Atrajit Sarkar – Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
  <!-- Google Font -->
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</head>
<body>
  <header class="navbar">
    <div class="logo">Atrajit<span>AI</span></div>
    <nav>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#math">Math & Research</a></li>
        <li><a href="#projects">Software</a></li>
        <li><a href="#teaching">Teaching</a></li>
        <li><a href="#writing">Writing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button id="theme-toggle" class="btn-outline">🌓</button>
    </nav>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="home" class="section hero">
      <div class="hero-text">
        <p class="eyebrow">Hello, I am</p>
        <h1>
          Atrajit <span>Sarkar</span>
        </h1>
        <h2 class="hero-subtitle">
          Mathematician · Android Developer · Automation & Bots · Writer
        </h2>
        <p class="hero-description">
          I bridge rigorous mathematics with real-world software — building
          Android apps, automation tools, and intelligent bots,
          while pursuing research in analysis, number theory, and algebra.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn-primary">Contact Me</a>
          <a href="#projects" class="btn-secondary">View Projects</a>
        </div>
      </div>
      <div class="hero-card">
        <div class="hero-badge">MSc Mathematics · IIT Delhi</div>
        <p class="hero-card-text">
          Preparing for a PhD in mathematics (multiple zeta values, analysis,
          number theory) while actively developing production-grade software
          tools and teaching advanced topics.
        </p>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section">
      <h2 class="section-title">About Me</h2>
      <p class="section-subtitle">
        A short story of maths, code, and words.
      </p>
      <div class="grid-2">
        <div>
          <p>
            I am <strong>Atrajit Sarkar</strong>, an MSc in Mathematics from
            <strong>IIT Delhi</strong> and a PhD aspirant interested in
            analysis, number theory, algebra, and multiple zeta values.
          </p>
          <p>
            My goal is to connect rigorous mathematical thinking with practical
            software engineering — building tools that are both elegant and
            useful. I enjoy designing systems that automate workflows,
            communicate intelligently, and present information clearly.
          </p>
        </div>
        <div>
          <ul class="info-list">
            <li><span>Degree:</span> MSc Mathematics, IIT Delhi</li>
            <li><span>Focus:</span> Analysis, Number Theory, Algebra</li>
            <li><span>Research:</span> Multiple Zeta Values, Morse Theory</li>
            <li><span>Tech:</span> Android (Jetpack Compose), Python, C++</li>
            <li><span>Interests:</span> Automation, Bots, 3D Simulation, Teaching</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Math & Research -->
    <section id="math" class="section section-alt">
      <h2 class="section-title">Mathematics & Research</h2>
      <p class="section-subtitle">
        From Morse theory to multiple zeta values.
      </p>
      <div class="grid-2">
        <div>
          <h3>Interests</h3>
          <ul class="tag-list">
            <li>Real & Functional Analysis</li>
            <li>Number Theory & Multiple Zeta Values</li>
            <li>Algebra & Algebraic Topology</li>
            <li>Topology & Measure Theory</li>
          </ul>
        </div>
        <div>
          <h3>Highlights</h3>
          <p>
            I completed a project on <strong>Morse theory</strong> under
            <strong>Dr. Biplab Basak</strong>, exploring the deep connection
            between critical points of smooth functions and the topology of
            manifolds. I am currently preparing for a PhD with a focus on
            <strong>multiple zeta values (MZVs)</strong> and related structures.
          </p>
        </div>
      </div>
    </section>

    <!-- Software & Projects -->
    <section id="projects" class="section">
      <h2 class="section-title">Software & Projects</h2>
      <p class="section-subtitle">
        Android apps, bots, and automation pipelines.
      </p>

      <div class="cards">
        <article class="card">
          <h3>Android – Jetpack Compose Apps</h3>
          <p>
            Building modern Android apps using Jetpack Compose and Hilt,
            including chat interfaces, GitHub-integrated study apps, and
            local database–driven quiz and content browsers.
          </p>
          <ul class="card-list">
            <li>Chat-style UIs with message history</li>
            <li>Local DB using Room + Hilt</li>
            <li>Integration with remote APIs (GitHub, etc.)</li>
          </ul>
        </article>

        <article class="card">
          <h3>Automation & Bots</h3>
          <p>
            Python-based automation systems and bots that connect with Telegram,
            WhatsApp, Gmail, and DNS/email APIs to simplify everyday workflows.
          </p>
          <ul class="card-list">
            <li>WhatsApp auto-replies & scheduling</li>
            <li>Telegram file upload/download services</li>
            <li>Email parsing, SMTP/IMAP pipelines, tracking pixels</li>
          </ul>
        </article>

        <article class="card">
          <h3>Math + Code Experiments</h3>
          <p>
            Experiments in C++ (including 3D simulation), numerical routines,
            and interactive tools for teaching and visualizing mathematical ideas.
          </p>
          <ul class="card-list">
            <li>3D simulation prototypes in C++</li>
            <li>Teaching aids for analysis and algebra</li>
            <li>Research-oriented scripting and automation</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Teaching -->
    <section id="teaching" class="section section-alt">
      <h2 class="section-title">Teaching & Mentoring</h2>
      <p class="section-subtitle">
        Sharing mathematics and software with the next generation.
      </p>
      <div class="grid-2">
        <div>
          <h3>Mathematics</h3>
          <p>
            I have taught and mentored students in various undergraduate and
            postgraduate courses, including:
          </p>
          <ul class="tag-list">
            <li>Real Analysis</li>
            <li>Modern Algebra & Linear Algebra</li>
            <li>Topology & Algebraic Topology</li>
            <li>Functional Analysis & Measure Theory</li>
          </ul>
        </div>
        <div>
          <h3>Programming</h3>
          <p>
            I mentor students in mobile app development and networking apps,
            focusing on clean architecture, practical problem-solving,
            and connecting mathematical thinking with code.
          </p>
        </div>
      </div>
    </section>

    <!-- Writing -->
    <section id="writing" class="section">
      <h2 class="section-title">Writing & Literature</h2>
      <p class="section-subtitle">
        Mathematics in the mind, poetry on the page.
      </p>
      <div class="grid-2">
        <div>
          <p>
            I write poetry and short stories in both
            <strong>Bengali</strong> and <strong>English</strong>, often
            reflecting on abstraction, identity, and the subtle textures of
            everyday life.
          </p>
          <p>
            My book, <em>Silhouette Of Words</em>, is available on Amazon.
          </p>
        </div>
        <div>
          <ul class="info-list">
            <li><span>Languages:</span> Bengali, English</li>
            <li><span>Forms:</span> Poetry, Short Stories</li>
            <li><span>Theme:</span> Intersection of thought, feeling, and form</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section section-alt">
      <h2 class="section-title">Contact</h2>
      <p class="section-subtitle">
        Open to research collaborations, teaching, and software projects.
      </p>
      <div class="contact-grid">
        <div>
          <ul class="info-list">
            <li><span>Email:</span> <a href="mailto:your-email@example.com">your-email@example.com</a></li>
            <li><span>GitHub:</span> <a href="https://github.com/your-github" target="_blank">github.com/your-github</a></li>
            <li><span>Telegram:</span> <a href="#">@your_telegram</a></li>
            <li><span>Location:</span> India</li>
          </ul>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault(); alert('This is a static site. Please email me directly.');">
          <label>
            Name
            <input type="text" required />
          </label>
          <label>
            Email
            <input type="email" required />
          </label>
          <label>
            Message
            <textarea rows="4" required></textarea>
          </label>
          <button type="submit" class="btn-primary">Send Message</button>
          <p class="form-note">
            This is a static portfolio. Use the email above to contact me.
          </p>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>© <span id="year"></span> Atrajit Sarkar. Built with HTML, CSS, and JavaScript.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

**Things for you to customise:**

* Replace `your-email@example.com`, `your-github`, `@your_telegram` with real data.
* Adjust text anywhere you like.

---

## 4. CSS (styles.css)

Create `styles.css`:

```css
:root {
  --bg: #050816;
  --bg-alt: #0b1020;
  --fg: #f5f5f5;
  --fg-muted: #a3b3d3;
  --accent: #7c3aed;
  --accent-soft: rgba(124, 58, 237, 0.15);
  --border-subtle: rgba(255, 255, 255, 0.06);
  --radius-lg: 18px;
  --radius-xl: 24px;
  --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.45);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: radial-gradient(circle at top, #111827 0, #020617 48%, #000 100%);
  color: var(--fg);
}

/* Navbar */

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7vw;
  backdrop-filter: blur(18px);
  background: linear-gradient(
    to bottom,
    rgba(2, 6, 23, 0.92),
    rgba(2, 6, 23, 0.6),
    transparent
  );
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.logo {
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.95rem;
}

.logo span {
  color: var(--accent);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.1rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--fg-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid transparent;
}

.nav-links a:hover {
  color: var(--fg);
  border-bottom-color: var(--accent);
}

/* Buttons */

.btn-primary,
.btn-secondary,
.btn-outline {
  border-radius: 999px;
  padding: 0.6rem 1.3rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.btn-primary {
  background: linear-gradient(135deg, #7c3aed, #22c1c3);
  color: #fff;
  box-shadow: var(--shadow-soft);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.6);
}

.btn-secondary {
  background: rgba(15, 23, 42, 0.8);
  color: var(--fg-muted);
  border-color: rgba(148, 163, 184, 0.4);
}

.btn-secondary:hover {
  background: rgba(15, 23, 42, 1);
  color: var(--fg);
}

.btn-outline {
  background: transparent;
  color: var(--fg-muted);
  border: 1px solid rgba(148, 163, 184, 0.6);
  font-size: 0.85rem;
}

/* Layout */

.section {
  padding: 5rem 7vw;
  max-width: 1120px;
  margin: 0 auto;
}

.section-alt {
  background: radial-gradient(circle at top left, #111827 0, #020617 55%, #000 100%);
  border-radius: 32px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.section-title {
  font-size: 1.9rem;
  margin: 0;
}

.section-subtitle {
  margin: 0.3rem 0 2.4rem;
  color: var(--fg-muted);
  font-size: 0.95rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 2.5rem;
  align-items: flex-start;
}

/* Hero */

.hero {
  padding-top: 6rem;
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(0, 1.1fr);
  gap: 2.8rem;
  align-items: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  color: var(--fg-muted);
}

.hero h1 {
  font-size: clamp(2.4rem, 4vw, 3rem);
  margin: 0.6rem 0 0.3rem;
}

.hero h1 span {
  background: linear-gradient(135deg, #7c3aed, #22c1c3);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  margin: 0;
  font-size: 1rem;
  color: var(--fg-muted);
}

.hero-description {
  margin-top: 1.4rem;
  color: var(--fg-muted);
  max-width: 36rem;
  line-height: 1.6;
}

.hero-actions {
  margin-top: 1.8rem;
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.hero-card {
  background: radial-gradient(circle at top, #1e293b 0, #020617 55%);
  border-radius: var(--radius-xl);
  padding: 1.6rem 1.5rem;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: var(--shadow-soft);
}

.hero-badge {
  display: inline-flex;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 1rem;
  color: var(--fg-muted);
}

.hero-card-text {
  margin: 0;
  font-size: 0.9rem;
  color: var(--fg-muted);
}

/* Cards */

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.8rem;
}

.card {
  background: rgba(15, 23, 42, 0.9);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.4rem;
  border: 1px solid var(--border-subtle);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);
}

.card h3 {
  margin-top: 0;
  margin-bottom: 0.6rem;
}

.card p {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: var(--fg-muted);
  font-size: 0.92rem;
}

.card-list {
  padding-left: 1.1rem;
  margin: 0;
  color: var(--fg-muted);
  font-size: 0.9rem;
}

.card-list li + li {
  margin-top: 0.25rem;
}

/* Lists */

.info-list {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.92rem;
}

.info-list li {
  margin-bottom: 0.4rem;
  color: var(--fg-muted);
}

.info-list span {
  display: inline-block;
  min-width: 90px;
  color: var(--fg);
}

.tag-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tag-list li {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: var(--accent-soft);
  border: 1px solid rgba(124, 58, 237, 0.4);
  font-size: 0.8rem;
}

/* Contact */

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 2.2rem;
  align-items: flex-start;
}

.contact-form {
  background: rgba(15, 23, 42, 0.9);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.4rem;
  border: 1px solid var(--border-subtle);
}

.contact-form label {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 0.9rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  margin-top: 0.3rem;
  padding: 0.55rem 0.7rem;
  border-radius: 0.7rem;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.9);
  color: var(--fg);
  font-family: inherit;
  font-size: 0.9rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 1px rgba(124, 58, 237, 0.6);
}

.form-note {
  margin-top: 0.7rem;
  font-size: 0.78rem;
  color: var(--fg-muted);
}

/* Footer */

.footer {
  padding: 1.5rem 7vw 2.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--fg-muted);
}

/* Responsive */

@media (max-width: 900px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-grid,
  .grid-2 {
    grid-template-columns: minmax(0, 1fr);
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .section,
  .footer {
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

@media (max-width: 640px) {
  .section {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  .hero {
    padding-top: 4.5rem;
  }

  .nav-links {
    gap: 0.7rem;
  }

  .navbar {
    padding-inline: 5vw;
  }
}
```

---

## 5. JavaScript (script.js)

Create `script.js`:

```js
// Set current year in footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Simple theme toggle (light/dark-ish)
const toggle = document.getElementById("theme-toggle");
let dark = true;

toggle.addEventListener("click", () => {
  dark = !dark;
  document.body.classList.toggle("light-theme", !dark);
});
```

You can optionally add a light theme in CSS later with:

```css
body.light-theme {
  background: #f3f4f6;
  color: #020617;
}

body.light-theme .section-alt {
  background: #e5e7eb;
}

body.light-theme .card,
body.light-theme .contact-form {
  background: #ffffff;
  color: #020617;
}
```

---

## 6. Host on GitHub Pages

### 6.1 Create a GitHub Repository

1. Go to GitHub and log in.
2. Click **New repository**.
3. Name it (for example): `atrajit-portfolio`.
4. Set **Public**.
5. Don’t add any files (you can, but not required).
6. Click **Create repository**.

### 6.2 Upload Your Files

Option A – Through Web Interface:

1. Inside the new repo, click **Add file → Upload files**.
2. Upload `index.html`, `styles.css`, `script.js`.
3. Scroll down and click **Commit changes**.

Option B – Using Git (local):

1. In your `atrajit-portfolio` folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/atrajit-portfolio.git
   git push -u origin main
   ```

2. Replace `YOUR_USERNAME` with your GitHub username.

### 6.3 Enable GitHub Pages

1. Go to your repo’s **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Source**, select:

   * **Branch:** `main`
   * **Folder:** `/ (root)`
4. Click **Save**.

GitHub will build the site. After a short while, you’ll get a URL like:

```text
https://YOUR_USERNAME.github.io/atrajit-portfolio/
```

That is your **live portfolio**.

---

## 7. Ready-Made AI Prompt (with Your Info)

Use this prompt in any AI code/design tool (including ChatGPT) to generate improvements or alternate designs for your portfolio:

```text
You are a senior front-end designer and developer. 
Design and write production-ready HTML, CSS, and minimal JavaScript 
for a single-page personal portfolio website that can be hosted as a static site on GitHub Pages.

Person details (use this content in the site):
- Name: Atrajit Sarkar
- Background: MSc in Mathematics from IIT Delhi; PhD aspirant in analysis, number theory, algebra, and multiple zeta values.
- Research: Project in Morse theory under Dr. Biplab Basak; preparing for research in multiple zeta values.
- Technical skills: 
  - Android development with Jetpack Compose and Hilt.
  - Python automation (WhatsApp auto-replies, PDF converters, email pipelines, Telegram bots, DNS/email management tools).
  - C++ (including experiments with 3D simulation).
- Teaching:
  - Has taught and mentored in Real Analysis, Modern Algebra, Linear Algebra,
    Topology, Functional Analysis, Measure Theory, and Algebraic Topology.
  - Mentors students in mobile app development and networking apps.
- Writing:
  - Writes poetry and stories in Bengali and English.
  - Author of the book "Silhouette Of Words" available on Amazon.
- Philosophy:
  - Wants to bridge mathematical theory with real-world software applications,
    using rigorous reasoning to design clean, reliable systems.

Design requirements:
- Must be pure HTML, CSS, and JavaScript (no frameworks, no build tools).
- Clean, modern, slightly futuristic aesthetic, suitable for a mathematician + developer.
- Sections: Hero, About, Mathematics & Research, Software & Projects, Teaching, Writing, Contact.
- Responsive layout with mobile-first considerations.
- Navigation bar with smooth scrolling to sections.
- No external CSS frameworks (like Bootstrap or Tailwind). Google Fonts allowed.
- Emphasize readability, good spacing, and elegant use of gradients and subtle shadows.
- Add a very small amount of JavaScript only for:
  - Smooth scroll or section interactions.
  - Optional theme toggle (light/dark).

Output:
- A complete HTML file
- A separate CSS file
- A small JS file
that can be used directly in a GitHub Pages static site repository.
Use my details naturally in the text and make it sound professional but human.
```

---

## 8. Next Steps & Customisation Ideas

* Add a **Projects** section with individual cards linking to:

  * Your GitHub repos.
  * Any live apps or demos.
* Add **Math Notes / Blog** (even static) later.
* Link to:

  * OSF profile (when ready),
  * Google Scholar (when ready),
  * Amazon page for *Silhouette Of Words*.

You now have a complete, working starting point for a beautiful static portfolio site tailored to your profile.

```

---

If you want, next step I can do is: refine this design for a **specific color palette** or add a separate **“Research” page** with LaTeX-style styling.
```
