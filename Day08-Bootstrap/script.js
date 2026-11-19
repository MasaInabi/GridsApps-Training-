
const pages = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["services.html", "Services"],
  ["solutions.html", "Solutions"],
  ["projects.html", "Projects"],
  ["pricing.html", "Pricing"],
  ["dashboard.html", "Dashboard"],
  ["blog.html", "Blog"],
  ["faq.html", "FAQ"],
  ["contact.html", "Contact"]
];

const pageContent = {
  about: {
    eyebrow: "WHO WE ARE",
    title: "Technology with purpose.",
    subtitle: "We transform ambitious ideas into beautiful, scalable digital experiences.",
    cards: [
      ["01", "Our Mission", "Build innovative digital solutions that make businesses more efficient and connected."],
      ["02", "Our Vision", "Become a trusted technology partner for ambitious companies around the world."],
      ["03", "Our Values", "Creativity, quality, collaboration, transparency, and continuous improvement."]
    ]
  },
  services: {
    eyebrow: "WHAT WE DO",
    title: "Services built for growth.",
    subtitle: "From strategy to launch, we build digital products that work beautifully.",
    cards: [
      ["01", "Web Development", "Fast, responsive, accessible websites and powerful web applications."],
      ["02", "Mobile Applications", "Intuitive mobile experiences designed around real user needs."],
      ["03", "UI/UX Design", "Premium interfaces, thoughtful user journeys, and memorable digital identities."],
      ["04", "Cloud Solutions", "Reliable infrastructure, deployment, hosting, and scalable systems."],
      ["05", "AI Integration", "Smarter workflows, automation, and intelligent digital experiences."],
      ["06", "Technical Consulting", "Practical guidance for architecture, performance, and product strategy."]
    ]
  },
  solutions: {
    eyebrow: "OUR SOLUTIONS",
    title: "Smarter systems. Better outcomes.",
    subtitle: "Modern software solutions tailored to different business challenges.",
    cards: [
      ["01", "CRM Systems", "Manage customer relationships, leads, and sales workflows."],
      ["02", "ERP Platforms", "Connect operations, inventory, finance, and business processes."],
      ["03", "HR Management", "Simplify employee records, attendance, and team workflows."],
      ["04", "E-Commerce", "Create engaging online shopping and order-management experiences."],
      ["05", "Booking Systems", "Manage appointments, availability, and customer reservations."],
      ["06", "Analytics Platforms", "Turn business data into meaningful dashboards and insights."]
    ]
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "Ideas brought to life.",
    subtitle: "Explore concept projects that demonstrate our approach to digital product design.",
    cards: [
      ["01", "Nova Commerce", "A modern e-commerce experience with a polished product catalog."],
      ["02", "Orbit Dashboard", "An analytics dashboard with clear visual hierarchy and actionable insights."],
      ["03", "Pulse Booking", "A streamlined appointment-booking interface for service businesses."],
      ["04", "Vertex CRM", "A customer-management concept focused on usability and efficiency."]
    ]
  },
  pricing: {
    eyebrow: "SIMPLE PRICING",
    title: "Find your perfect plan.",
    subtitle: "Illustrative packages for different stages of business growth.",
    cards: [
      ["STARTER", "Launch", "A professional landing page, responsive layout, and essential sections."],
      ["GROWTH", "Scale", "A multi-page website with advanced UI components and custom interactions."],
      ["ENTERPRISE", "Transform", "A tailored platform concept with dashboards, integrations, and scalable architecture."]
    ]
  },
  blog: {
    eyebrow: "INSIGHTS & IDEAS",
    title: "Explore what's next.",
    subtitle: "Practical ideas and perspectives on design, development, and technology.",
    cards: [
      ["DESIGN", "Why Great UI Matters", "How thoughtful design improves usability and creates stronger digital experiences."],
      ["DEVELOPMENT", "Building Responsive Websites", "A practical look at layouts that adapt across screen sizes."],
      ["TECHNOLOGY", "The Future of AI Tools", "How intelligent tools can support teams and simplify everyday workflows."],
      ["BUSINESS", "Digital Transformation", "Why modern software can improve efficiency and customer experience."]
    ]
  }
};

const faqs = [
  ["What services do you provide?", "We offer web development, mobile applications, UI/UX design, cloud solutions, AI integration, and technical consulting."],
  ["Can you build a custom website?", "Yes. We can design a website concept around specific business goals, content, and functionality."],
  ["Are your websites responsive?", "Yes. Our interfaces are designed to adapt to mobile, tablet, and desktop screen sizes."],
  ["How do I get started?", "Visit the Contact page and send a message describing your project requirements."],
  ["Can you redesign an existing website?", "Yes. We can improve layouts, navigation, accessibility, and visual consistency."]
];

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[char]));

function renderHeader() {
  const current = location.pathname.split("/").pop() || "index.html";

  return `
    <header class="site-header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid px-4 px-xl-5">
          <a class="brand" href="index.html">
            <span class="brand-symbol">G</span>
            <span>GRIDS<span class="accent">APPS</span></span>
          </a>

          <button class="navbar-toggler custom-toggler" type="button"
            data-bs-toggle="offcanvas" data-bs-target="#mobileNav"
            aria-controls="mobileNav" aria-label="Open navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="desktopNav">
            <div class="navbar-nav align-items-lg-center gap-lg-2">
              ${pages.map(([href, name]) => `
                <a class="nav-link ${href === current ? "active" : ""}"
                   href="${href}" ${href === current ? 'aria-current="page"' : ""}>
                  ${name}
                </a>
              `).join("")}
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="mobileNav"
      aria-labelledby="mobileNavTitle">
      <div class="offcanvas-header">
        <h2 class="offcanvas-title fs-5" id="mobileNavTitle">GRIDS APPS</h2>
        <button type="button" class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas" aria-label="Close navigation"></button>
      </div>
      <div class="offcanvas-body">
        <nav class="d-flex flex-column gap-2">
          ${pages.map(([href, name]) => `
            <a class="mobile-link ${href === current ? "active" : ""}" href="${href}">
              ${name}
            </a>
          `).join("")}
        </nav>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="row gy-4 justify-content-between">
          <div class="col-lg-5">
            <div class="footer-brand">GRIDS<span class="accent">APPS</span></div>
            <p>We build digital experiences that inspire, connect, and grow.</p>
          </div>
          <div class="col-lg-5">
            <div class="footer-links">
              <a href="about.html">About</a>
              <a href="services.html">Services</a>
              <a href="projects.html">Projects</a>
              <a href="contact.html">Contact</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Grids Apps. Training project.</span>
          <span>Designed with Bootstrap 5.3</span>
        </div>
      </div>
    </footer>
  `;
}

function renderCards(cards) {
  return `
    <div class="row g-4">
      ${cards.map(([number, title, description]) => `
        <div class="col-md-6 col-xl-4">
          <article class="premium-card h-100">
            <span class="card-number">${escapeHTML(number)}</span>
            <h2>${escapeHTML(title)}</h2>
            <p>${escapeHTML(description)}</p>
            <a class="card-link" href="contact.html">Let's talk <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      `).join("")}
    </div>
  `;
}

function renderStandardPage(type) {
  const content = pageContent[type];
  return `
    <section class="page-hero">
      <div class="container text-center">
        <span class="eyebrow">${content.eyebrow}</span>
        <h1>${content.title}</h1>
        <p class="hero-description mx-auto">${content.subtitle}</p>
        <div class="hero-actions justify-content-center">
          <a href="contact.html" class="premium-button">Start a Project <span>↗</span></a>
          <a href="services.html" class="outline-button">Explore Services</a>
        </div>
      </div>
      <div class="hero-orb orb-one"></div>
      <div class="hero-orb orb-two"></div>
    </section>
    <section class="content-section">
      <div class="container">${renderCards(content.cards)}</div>
    </section>
    ${renderCTA()}
  `;
}

function renderCTA() {
  return `
    <section class="cta-section">
      <div class="container">
        <div class="cta-panel text-center">
          <span class="eyebrow">LET'S CREATE SOMETHING GREAT</span>
          <h2>Your next big idea starts here.</h2>
          <p>Tell us about your vision and let's explore what we can build.</p>
          <a href="contact.html" class="premium-button">Get in Touch ↗</a>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="page-hero home-hero">
      <div class="container">
        <div class="row align-items-center gy-5">
          <div class="col-lg-7">
            <span class="eyebrow">PREMIUM DIGITAL EXPERIENCES</span>
            <h1>We build the <span class="gradient-text">extraordinary.</span></h1>
            <p class="hero-description">
              From powerful software to unforgettable digital experiences,
              we turn bold ideas into real products.
            </p>
            <div class="hero-actions">
              <a class="premium-button" href="projects.html">Explore Our Work ↗</a>
              <a class="outline-button" href="contact.html">Let's Talk</a>
            </div>
            <div class="hero-metrics">
              <div><strong>10</strong><span>Website Pages</span></div>
              <div><strong>100%</strong><span>Responsive Design</span></div>
              <div><strong>5.3</strong><span>Bootstrap Version</span></div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="showcase-panel">
              <div class="showcase-top">
                <span class="status-dot"></span>
                <span>Digital Workspace</span>
                <span class="ms-auto">LIVE PREVIEW</span>
              </div>
              <div class="showcase-chart">
                <div style="height:38%"></div>
                <div style="height:62%"></div>
                <div style="height:48%"></div>
                <div style="height:82%"></div>
                <div style="height:66%"></div>
                <div style="height:94%"></div>
                <div style="height:76%"></div>
              </div>
              <div class="showcase-bottom">
                <span>Creative Performance</span>
                <strong>↗ +24.8%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-orb orb-one"></div>
      <div class="hero-orb orb-two"></div>
    </section>
    <section class="content-section">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">WHAT WE OFFER</span>
          <h2>Everything your business needs.</h2>
        </div>
        ${renderCards(pageContent.services.cards.slice(0, 3))}
      </div>
    </section>
    ${renderCTA()}
  `;
}

function renderDashboard() {
  return `
    <section class="page-hero compact-hero">
      <div class="container text-center">
        <span class="eyebrow">BUSINESS INTELLIGENCE</span>
        <h1>Dashboard overview.</h1>
        <p class="hero-description mx-auto">
          An interactive demonstration dashboard with sample business metrics.
        </p>
      </div>
    </section>
    <section class="content-section pt-0">
      <div class="container">
        <div class="row g-4">
          ${[
            ["Revenue", "$48,250", "+12.5%"],
            ["Active Users", "8,420", "+8.2%"],
            ["Projects", "36", "+4.1%"],
            ["Conversion", "6.8%", "+2.3%"]
          ].map(([label, value, change]) => `
            <div class="col-sm-6 col-xl-3">
              <div class="metric-card">
                <span>${label}</span>
                <strong>${value}</strong>
                <small>${change} sample change</small>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="row g-4 mt-2">
          <div class="col-lg-8">
            <div class="premium-card dashboard-panel">
              <div class="d-flex justify-content-between align-items-center">
                <h2>Performance</h2>
                <span class="dashboard-tag">Demo Data</span>
              </div>
              <div class="dashboard-bars">
                ${[42, 68, 54, 78, 64, 92, 73, 86, 69, 96, 82, 100].map((height, i) => `
                  <div class="dashboard-bar-item">
                    <div class="dashboard-bar" style="height:${height}%"></div>
                    <span>${i + 1}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="premium-card dashboard-panel">
              <h2>Project Status</h2>
              ${[
                ["UI Design", 90],
                ["Development", 72],
                ["Testing", 58],
                ["Deployment", 35]
              ].map(([label, progress]) => `
                <div class="progress-row">
                  <div class="d-flex justify-content-between">
                    <span>${label}</span><span>${progress}%</span>
                  </div>
                  <div class="progress-track">
                    <div style="width:${progress}%"></div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFAQ() {
  return `
    <section class="page-hero compact-hero">
      <div class="container text-center">
        <span class="eyebrow">HELP CENTER</span>
        <h1>Frequently asked questions.</h1>
        <p class="hero-description mx-auto">
          Everything you need to know about our digital services.
        </p>
      </div>
    </section>
    <section class="content-section pt-0">
      <div class="container faq-container">
        <div class="accordion premium-accordion" id="faqAccordion">
          ${faqs.map(([question, answer], index) => `
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button ${index ? "collapsed" : ""}"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq${index}"
                  aria-expanded="${index === 0}"
                  aria-controls="faq${index}">
                  ${escapeHTML(question)}
                </button>
              </h2>
              <div id="faq${index}" class="accordion-collapse collapse ${index === 0 ? "show" : ""}"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">${escapeHTML(answer)}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
    ${renderCTA()}
  `;
}

function renderContact() {
  return `
    <section class="page-hero compact-hero">
      <div class="container text-center">
        <span class="eyebrow">CONTACT US</span>
        <h1>Let's build something amazing.</h1>
        <p class="hero-description mx-auto">
          Have a project in mind? We'd love to hear about it.
        </p>
      </div>
    </section>
    <section class="content-section pt-0">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-5">
            <div class="premium-card h-100">
              <span class="eyebrow">START A CONVERSATION</span>
              <h2>Big ideas begin with a simple hello.</h2>
              <p>Tell us what you want to create, and share your goals and challenges.</p>
              <div class="contact-feature">✦ Creative digital solutions</div>
              <div class="contact-feature">✦ Responsive modern websites</div>
              <div class="contact-feature">✦ Thoughtful user experiences</div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="premium-card">
              <h2>Send a message</h2>
              <form id="contactForm" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="contactName" class="form-label">Full Name</label>
                    <input id="contactName" name="name" class="form-control" required minlength="2">
                    <div class="invalid-feedback">Enter your name (at least 2 characters).</div>
                  </div>
                  <div class="col-md-6">
                    <label for="contactEmail" class="form-label">Email Address</label>
                    <input id="contactEmail" name="email" type="email" class="form-control" required>
                    <div class="invalid-feedback">Enter a valid email address.</div>
                  </div>
                  <div class="col-12">
                    <label for="contactSubject" class="form-label">Subject</label>
                    <input id="contactSubject" name="subject" class="form-control" required>
                    <div class="invalid-feedback">Enter a subject.</div>
                  </div>
                  <div class="col-12">
                    <label for="contactMessage" class="form-label">Your Message</label>
                    <textarea id="contactMessage" name="message" rows="6"
                      class="form-control" required minlength="10"></textarea>
                    <div class="invalid-feedback">Enter at least 10 characters.</div>
                  </div>
                  <div class="col-12">
                    <button class="premium-button w-100" type="submit">Validate Message ↗</button>
                    <div id="formFeedback" class="mt-3" role="status" aria-live="polite"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initializeForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    form.classList.add("was-validated");

    const feedback = document.querySelector("#formFeedback");

    if (!form.checkValidity()) {
      feedback.textContent = "Please correct the highlighted fields.";
      feedback.className = "mt-3 text-warning";
      form.querySelector(":invalid")?.focus();
      return;
    }

    feedback.textContent = "Form validated successfully. This is a frontend demo; no message was sent.";
    feedback.className = "mt-3 text-success";
  });
}

function initializePage() {
  const root = document.querySelector("#app");
  if (!root) return;

  const type = document.body.dataset.page || "home";

  const content = type === "home"
    ? renderHome()
    : type === "dashboard"
    ? renderDashboard()
    : type === "faq"
    ? renderFAQ()
    : type === "contact"
    ? renderContact()
    : pageContent[type]
    ? renderStandardPage(type)
    : renderHome();

  root.innerHTML = renderHeader() + `<main id="mainContent">${content}</main>` + renderFooter();

  initializeForm();
}

document.addEventListener("DOMContentLoaded", initializePage);
