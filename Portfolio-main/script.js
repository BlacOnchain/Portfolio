/* =============================================
   BLAC PORTFOLIO - script.js
   ============================================= */

const DATA = {
    hero: {
        brand: "BLAC",
        name: "Odubela Oluwatomiwa",
        title: "Backend Developer",
        availability: "Open to backend & freelance work",
        valueProp: "I build backend systems in PHP and MySQL — clean schemas, secure transaction logic — and run rollout strategy for Web3 communities.",
        email: "odubelaotomiwa508@gmail.com",
        phone: "09125808797",
        cv: "assets/Oluwatomiwa_CV.pdf"
    },
    metrics: [
        { value: "4", label: "CV Roles" },
        { value: "3", label: "Featured Builds" },
        { value: "C1", label: "English Level" }
    ],
    terminalLines: [
        { type: "prompt", text: "cat stack.json" },
        { type: "obj-open", text: "{" },
        { type: "pair", key: '  "backend"', val: '["PHP", "MySQL", "Laravel"]', valType: "str" },
        { type: "pair", key: '  "community"', val: '["Web3", "X", "Discord"]', valType: "str" },
        { type: "pair", key: '  "focus"', val: '"data integrity"', valType: "str" },
        { type: "pair", key: '  "available"', val: "true", valType: "bool" },
        { type: "obj-close", text: "}" }
    ],
    socials: [
        { label: "GitHub", href: "https://github.com/Blaconchain", icon: "fa-brands fa-github" },
        { label: "X", href: "https://x.com/Lifewithblac", icon: "fa-brands fa-x-twitter" },
        { label: "Instagram", href: "https://www.instagram.com/lifewith_blac/", icon: "fa-brands fa-instagram" },
        { label: "Email", href: "mailto:odubelaotomiwa508@gmail.com", icon: "fa-solid fa-envelope" }
    ],
    // NEEDS INPUT: "role" and a numeric/concrete "metric" are missing for every
    // project except the outcome line already on the CV. Screenshots are only
    // confirmed for Smart Attendance — BlacRate Pro and Receipt Pro need a
    // screenshot or short GIF before they can ship per the "no project without
    // visual proof" rule.
    projects: [
        {
            title: "Smart Attendance System",
            problem: "Lecturers tracked attendance on paper, with no central record.",
            role: null,
            stack: ["PHP", "MySQL"],
            metric: "Removed manual attendance paperwork for lecturers.",
            metricIsConcrete: false,
            badge: "Academic",
            demo: "https://smart-attendance-production-996c.up.railway.app/",
            source: "https://github.com/BlacOnchain/Smart-Attendance",
            featured: true,
            screenshot: { src: "images/projects/smart-attendance-landing.png", alt: "Smart Attendance landing page" }
        },
        {
            title: "BlacRate Pro",
            problem: "OTC traders needed a fast, offline-capable crypto-to-naira rate lookup.",
            role: null,
            stack: ["PWA", "JavaScript"],
            metric: null,
            metricIsConcrete: false,
            badge: "PWA",
            demo: "https://blaconchain.github.io/blacrate-pro/",
            source: "https://github.com/BlacOnchain/blacrate-pro",
            screenshot: null
        },
        {
            title: "Receipt Pro",
            problem: "Receipt/transaction records needed stronger SQL data integrity.",
            role: null,
            stack: ["PHP", "MySQL"],
            metric: null,
            metricIsConcrete: false,
            badge: "Backend",
            demo: null,
            source: "https://github.com/Blaconchain/receipt-pro",
            screenshot: null
        }
    ],
    experienceTechnical: [
        {
            company: "Olak Tech",
            role: "Backend Developer Intern (SIWES)",
            time: "2025",
            points: [
                "Built backend logic and normalized relational databases with PHP and MySQL.",
                "Maintained technical documentation and workflow tracking for project delivery."
            ]
        }
    ],
    experienceStrategy: [
        {
            company: "Cowrywise",
            role: "Campus Ambassador Lead",
            time: "11/2025 - Present",
            points: [
                "Coordinate brand awareness and digital savings adoption across MAPOLY.",
                "Manage campaign logistics and event operations for the campus team."
            ]
        },
        {
            company: "Crypto Dungeon",
            role: "Partnerships Contributor",
            time: "11/2024 - 11/2025",
            points: [
                "Led community moderation for Web3 enthusiasts and NFT collectors.",
                "Supported partnership conversations for integrations like Create With Me AI."
            ]
        },
        {
            company: "oSHAMO",
            role: "Early Rollout Strategist",
            time: "11/2024 - 08/2025",
            points: [
                "Planned organic rollout schedules across social channels.",
                "Tracked content deliverables against launch timing."
            ]
        }
    ],
    education: [
        {
            school: "Moshood Abiola Polytechnic (MAPOLY)",
            degree: "ND in Computer Science",
            meta: "2023 - 2025",
            desc: "Core coursework: Database Management Systems, Systems Analysis & Design, Web Development."
        }
    ],
    credentials: [
        { icon: "fa-solid fa-certificate", text: "C1 Advanced English (EF SET), 2026" },
        { icon: "fa-solid fa-award", text: "Best Content Strategy Award, MAPOLY 2025" }
    ],
    stackCategories: [
        {
            title: "Backend",
            items: [
                { name: "PHP", icon: "fa-brands fa-php" },
                { name: "Laravel", icon: "fa-solid fa-layer-group" },
                { name: "MySQL", icon: "fa-solid fa-database" },
                { name: "Database Design", icon: "fa-solid fa-diagram-project" },
                { name: "API Workflows", icon: "fa-solid fa-plug-circle-check" }
            ]
        },
        {
            title: "Growth & Community",
            items: [
                { name: "Digital Rollout", icon: "fa-solid fa-rocket" },
                { name: "Community Ops", icon: "fa-solid fa-users-gear" },
                { name: "Content Strategy", icon: "fa-solid fa-pen-ruler" },
                { name: "Partnerships", icon: "fa-solid fa-handshake-angle" }
            ]
        },
        {
            title: "Tools",
            items: [
                { name: "Git / GitHub", icon: "fa-brands fa-github" },
                { name: "PWA", icon: "fa-solid fa-mobile-screen-button" }
            ]
        }
    ],
    contactLinks: [
        { title: "Phone", value: "09125808797", href: "tel:09125808797", icon: "fa-solid fa-phone" },
        { title: "GitHub", value: "github.com/Blaconchain", href: "https://github.com/Blaconchain", icon: "fa-brands fa-github", external: true },
        { title: "X", value: "@Lifewithblac", href: "https://x.com/Lifewithblac", icon: "fa-brands fa-x-twitter", external: true },
        { title: "CV", value: "Download PDF", href: "assets/Oluwatomiwa_CV.pdf", icon: "fa-solid fa-file-lines", external: true, highlight: true }
    ]
};

function initCanvas() {
    const canvas = document.getElementById("bg-canvas");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canvas || prefersReducedMotion) { if (canvas) canvas.style.display = "none"; return; }
    const ctx = canvas.getContext("2d");
    let width, height, particles;
    const color = "87,217,163";

    function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
    function makeParticle() {
        return { x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.2 + 0.4, a: Math.random() * 0.35 + 0.1 };
    }
    function initParticles() { particles = Array.from({ length: window.innerWidth < 768 ? 30 : 60 }, makeParticle); }
    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i += 1) {
            for (let j = i + 1; j < particles.length; j += 1) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${color},${0.04 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        particles.forEach((p) => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color},${p.a})`; ctx.fill();
        });
        window.requestAnimationFrame(draw);
    }
    resize(); initParticles(); draw();
    window.addEventListener("resize", resize);
}

function initNavbar() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => { nav.classList.toggle("scrolled", window.scrollY > 40); }, { passive: true });
}

function setElementText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }

function populateStaticContent() {
    const { hero } = DATA;
    document.title = `${hero.brand} | ${hero.title}`;
    setElementText("availability-text", hero.availability);
    setElementText("hero-value-prop", hero.valueProp);
    setElementText("footer-identity", `${hero.name} — ${hero.title}`);

    const contactEmailBig = document.getElementById("contact-email-big");
    if (contactEmailBig) {
        contactEmailBig.href = `mailto:${hero.email}`;
        contactEmailBig.innerHTML = `${hero.email}<i class="fa-solid fa-arrow-up-right-from-square"></i>`;
    }
}

function buildHeroSocials() {
    const el = document.getElementById("hero-socials");
    if (!el) return;
    el.innerHTML = DATA.socials.map((item) => `
        <a href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""} title="${item.label}">
            <i class="${item.icon}"></i>
        </a>`).join("");
}

function buildMetrics() {
    const el = document.getElementById("metrics-row");
    if (!el) return;
    el.innerHTML = DATA.metrics.map((m) => `
        <div class="metric-pill"><span class="metric-val">${m.value}</span><span class="metric-label">${m.label}</span></div>`).join("");
}

function initTerminal() {
    const body = document.getElementById("term-body");
    const lines = DATA.terminalLines;
    let i = 0;
    function renderLine(line) {
        const span = document.createElement("span");
        span.className = "t-line";
        if (line.type === "prompt") span.innerHTML = `<span class="t-prompt">&gt; </span><span class="t-cmd">${line.text}</span>`;
        else if (line.type === "obj-open" || line.type === "obj-close") span.innerHTML = `<span class="t-cmd">${line.text}</span>`;
        else if (line.type === "pair") {
            const valueHtml = line.valType === "bool" ? `<span class="t-bool">${line.val}</span>` : `<span class="t-str">${line.val}</span>`;
            span.innerHTML = `<span class="t-key">${line.key}</span><span class="t-cmd">: </span>${valueHtml}<span class="t-cmd">,</span>`;
        }
        body.appendChild(span);
    }
    function nextLine() {
        if (i >= lines.length) return;
        renderLine(lines[i]); i += 1;
        window.setTimeout(nextLine, i === 1 ? 400 : 90);
    }
    window.setTimeout(nextLine, 300);
}

function buildProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    DATA.projects.forEach((project, index) => {
        const card = document.createElement("article");
        card.className = `project-card reveal${project.featured ? " featured-project" : ""}`;
        card.style.transitionDelay = `${index * 0.05}s`;

        const media = project.screenshot
            ? `<div class="project-media"><img src="${project.screenshot.src}" alt="${project.screenshot.alt}" loading="lazy"></div>`
            : `<div class="project-media is-empty">Screenshot / GIF needed</div>`;

        const roleRow = project.role
            ? `<dt>Role</dt><dd>${project.role}</dd>`
            : `<dt>Role</dt><dd class="needs-input">needs input</dd>`;

        const metricRow = project.metric
            ? `<dt>Outcome</dt><dd${project.metricIsConcrete ? "" : ' class="needs-input"'}>${project.metric}</dd>`
            : `<dt>Outcome</dt><dd class="needs-input">add a metric here</dd>`;

        const action = (label, href, variant) => href
            ? `<a class="project-action ${variant}" href="${href}" target="_blank" rel="noopener noreferrer">${label}<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`
            : `<span class="is-unavailable">${label} unavailable</span>`;

        card.innerHTML = `
            ${media}
            <div class="project-body">
                <span class="project-badge">${project.badge}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.problem}</p>
                <dl class="project-meta-grid">
                    ${roleRow}
                    <dt>Stack</dt><dd>${project.stack.join(", ")}</dd>
                    ${metricRow}
                </dl>
                <div class="project-actions">
                    ${action("Live demo", project.demo, "project-demo")}
                    ${action("Source", project.source, "project-source")}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function buildExperience() {
    const renderTrack = (containerId, entries) => {
        const el = document.getElementById(containerId);
        if (!el) return;
        entries.forEach((entry, index) => {
            const card = document.createElement("div");
            card.className = "timeline-card reveal";
            card.style.transitionDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="tl-time">${entry.time}</div>
                <div class="tl-company">${entry.company}</div>
                <div class="tl-role">${entry.role}</div>
                <ul class="tl-list">${entry.points.map((p) => `<li>${p}</li>`).join("")}</ul>`;
            el.appendChild(card);
        });
    };
    renderTrack("timeline-technical", DATA.experienceTechnical);
    renderTrack("timeline-strategy", DATA.experienceStrategy);

    const eduCards = document.getElementById("edu-cards");
    if (eduCards) {
        DATA.education.forEach((entry) => {
            const card = document.createElement("div");
            card.className = "edu-card";
            card.innerHTML = `
                <div class="edu-school">${entry.school}</div>
                <div class="edu-degree">${entry.degree}</div>
                <div class="edu-meta">${entry.meta}</div>
                <p class="edu-desc">${entry.desc}</p>`;
            eduCards.appendChild(card);
        });
    }

    const credStrip = document.getElementById("credentials-strip");
    if (credStrip) {
        credStrip.innerHTML = DATA.credentials.map((c) => `<span><i class="${c.icon}"></i>${c.text}</span>`).join("");
    }
}

function buildStack() {
    const el = document.getElementById("stack-categories");
    if (!el) return;
    el.innerHTML = DATA.stackCategories.map((cat) => `
        <section class="reveal">
            <h3 class="stack-category-title">${cat.title}</h3>
            <div class="stack-card-grid">
                ${cat.items.map((item) => `<span class="skill-chip"><i class="${item.icon}"></i>${item.name}</span>`).join("")}
            </div>
        </section>`).join("");
}

function buildContactLinks() {
    const el = document.getElementById("contact-links");
    if (!el) return;
    DATA.contactLinks.forEach((item) => {
        const card = document.createElement("a");
        card.className = `contact-link-card${item.highlight ? " highlight-card" : ""}`;
        card.href = item.href;
        if (item.external) { card.target = "_blank"; card.rel = "noreferrer"; }
        card.innerHTML = `
            <i class="${item.icon}"></i>
            <div><strong>${item.title}</strong><span>${item.value}</span></div>
            <i class="fa-solid fa-arrow-right arrow-r"></i>`;
        el.appendChild(card);
    });
}

function initMobileMenu() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => {
        const isOpen = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.innerHTML = `<i class="fa-solid fa-${isOpen ? "xmark" : "bars"}" aria-hidden="true"></i>`;
    });
    links.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            links.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        }
    });
}

function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initClock() {
    const el = document.getElementById("live-clock");
    function update() {
        if (!el) return;
        const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Lagos" });
        el.textContent = `WAT ${time}`;
    }
    update();
    window.setInterval(update, 30000);
}

document.addEventListener("DOMContentLoaded", () => {
    populateStaticContent();
    initCanvas();
    initNavbar();
    initMobileMenu();
    buildHeroSocials();
    buildMetrics();
    initTerminal();
    buildProjects();
    buildExperience();
    buildStack();
    buildContactLinks();
    initClock();
    window.requestAnimationFrame(initReveal);
});