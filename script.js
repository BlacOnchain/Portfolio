/* =============================================
   BLAC PORTFOLIO — script.js
   Interactive Whitish / Light Editorial Theme
   ============================================= */

let DATA = {
    hero: {
        brand: "BLAC",
        name: "Odubela Oluwatomiwa",
        title: "Backend Developer & Systems Architect",
        availability: "Open for backend engineering, SQL design & rollout strategy",
        bio: "Backend developer and digital strategist specializing in PHP 8.x, MySQL relational database architecture, and automated workflow systems. Experienced in building production check-in platforms, PWA calculators, and coordinating high-impact digital campaign rollouts.",
        contactBody: "If you need clean modular backend logic, normalized database architecture, or structured rollout operations, let's connect and build it properly from day one.",
        email: "odubelaotomiwa508@gmail.com",
        phone: "09125808797",
        cv: "assets/Oluwatomiwa_CV.pdf"
    },
    typewriterRoles: [
        "Backend Developer",
        "PHP & Laravel Architect",
        "MySQL Database Specialist",
        "Digital Rollout Strategist",
        "PWA & Systems Builder"
    ],
    metrics: [
        { value: "4+", label: "Industry Roles", target: 4, suffix: "+" },
        { value: "4", label: "Featured Builds", target: 4, suffix: "" },
        { value: "C1", label: "EF Advanced English", target: null, raw: "C1" }
    ],
    socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/lifewithblac/", icon: "fa-brands fa-linkedin-in" },
        { label: "GitHub", href: "https://github.com/Blaconchain", icon: "fa-brands fa-github" },
        { label: "X", href: "https://x.com/Lifewithblac", icon: "fa-brands fa-x-twitter" },
        { label: "Instagram", href: "https://www.instagram.com/lifewith_blac/", icon: "fa-brands fa-instagram" },
        { label: "Email", href: "mailto:odubelaotomiwa508@gmail.com", icon: "fa-solid fa-envelope" },
        { label: "Phone", href: "tel:09125808797", icon: "fa-solid fa-phone" }
    ],
    projects: [
        {
            id: "aduke-lagos",
            category: "backend",
            title: "Àdùké Lagos",
            desc: "Contemporary West African luxury gastronomy platform in Victoria Island, Lagos. Features real-time table QR scanning, live hearth order tracking (#ADK-8819), table reservations, and Google Cloud Firestore persistence.",
            badge: "Gastronomy | Firestore & QR",
            badgeClass: "badge-backend",
            icon: "AD",
            tags: ["Full-Stack", "Firestore", "Table QR", "Order System", "Render"],
            impact: "Powers seamless table reservations, culinary order workflows, and real-time hearth dining operations.",
            demo: "https://aduke-75yk.onrender.com/",
            source: "https://github.com/BlacOnchain/ADUKE",
            featured: true,
            screenshots: [
                { src: "images/projects/aduke-landing.jpg", alt: "Àdùké Lagos hearth dining and reservation interface" },
                { src: "images/projects/aduke-menu.jpg", alt: "Àdùké Lagos culinary order system & hearth tracking" }
            ],
            deepDive: {
                problem: "High-end woodfire hearth dining experiences demand zero-friction table ordering, instant QR menu dispatch, and real-time order status tracking without staff bottlenecks.",
                architecture: "Engineered with Google Cloud Firestore real-time state listeners, table QR session binding, modular menu ordering pipelines, and table reservation workflows deployed on Render.",
                highlights: [
                    "Real-time table QR code ordering & live order status updates (#ADK-8819).",
                    "Google Cloud Firestore backend database persistence for reservations, customer orders, and culinary catalog.",
                    "Interactive reservation booking system supporting Dinner Sittings & Lunch Suya Socials in Victoria Island, Lagos."
                ]
            }
        },
        {
            id: "smart-attendance",
            category: "automation",
            title: "Smart Attendance System",
            desc: "Academic QR-code check-in platform built with PHP 8.x and MySQL to automate student logging, eliminate manual paperwork, and provide lecturers with centralized real-time reports.",
            badge: "Academic | Automation",
            badgeClass: "badge-academic",
            icon: "SA",
            tags: ["PHP 8.x", "MySQL", "QR Generator", "Session Auth", "MAPOLY"],
            impact: "Automates student check-ins and normalizes attendance records across lectures.",
            demo: "https://smart-attendance-production-996c.up.railway.app/",
            source: "https://github.com/BlacOnchain/Smart-Attendance",
            featured: true,
            screenshots: [
                { src: "images/projects/smart-attendance-landing.png", alt: "Smart Attendance landing page" },
                { src: "images/projects/smart-attendance-portal.png", alt: "Smart Attendance student portal sign-in page" }
            ],
            deepDive: {
                problem: "Lecturers spent 10-15 minutes manually signing paper logs per class, leading to human error, proxy signing, and misplaced records.",
                architecture: "Designed a relational MySQL database with normalized tables for Students, Courses, Lectures, and CheckInLogs. Implemented time-expiring QR tokens generated via PHP middleware to prevent attendance fraud.",
                highlights: [
                    "Relational foreign key constraints linking student matric IDs to active course rosters.",
                    "Session security & input sanitization preventing SQL injection and duplicate entries.",
                    "Exportable lecturer reporting dashboard generating automated class attendance summaries."
                ]
            }
        },
        {
            id: "blacrate-pro",
            category: "pwa",
            title: "BlacRate Pro",
            desc: "A Progressive Web App engineered for OTC crypto traders to instantly calculate crypto-to-naira exchange rates with offline-first support and zero network latency.",
            badge: "PWA | Trading Tool",
            badgeClass: "badge-pwa",
            icon: "BR",
            tags: ["PWA", "Service Worker", "Offline-First", "JavaScript", "OTC Utility"],
            impact: "Delivers an instant, offline-friendly exchange rate calculator for active OTC transactions.",
            demo: "https://blaconchain.github.io/blacrate-pro/",
            source: "https://github.com/BlacOnchain/blacrate-pro",
            featured: false,
            deepDive: {
                problem: "OTC traders working in regions with spotty mobile data needed a reliable rate calculator that works instantly offline without dropping active customer chats.",
                architecture: "Built with a custom Service Worker caching strategy (`stale-while-revalidate`) for static app shell assets and local storage synchronization for custom rate margins.",
                highlights: [
                    "Instant client-side calculation engine with adjustable margin percentage multipliers.",
                    "PWA Web App Manifest for seamless home screen installation on iOS and Android.",
                    "Fast lightweight bundle requiring zero external framework dependencies."
                ]
            }
        },
        {
            id: "receipt-pro",
            category: "backend",
            title: "Receipt Pro",
            desc: "A backend transaction management system focused on relational SQL data integrity, immutable transaction logging, and automated receipt generation.",
            badge: "Backend | SQL",
            badgeClass: "badge-backend",
            icon: "RP",
            tags: ["PHP", "MySQL", "ACID Transactions", "SQL Integrity", "Audit Logs"],
            impact: "Models dependable financial transaction records with SQL audit integrity.",
            source: "https://github.com/Blaconchain/receipt-pro",
            featured: false,
            deepDive: {
                problem: "Small commerce businesses struggle with missing transaction records and inconsistent order numbering during manual bookkeeping.",
                architecture: "Built with PHP and MySQL employing strict database transactions (`BEGIN`, `COMMIT`, `ROLLBACK`) to guarantee that receipts are generated only when database records successfully write.",
                highlights: [
                    "Database schema enforcing 3NF normalization and unique receipt serial sequence generation.",
                    "Structured system logging tracking timestamped transaction creation and audit trails.",
                    "Sanitized input validation preventing invalid monetary values and SQL injection."
                ]
            }
        },
        {
            id: "crypto-dungeon",
            category: "automation",
            title: "Crypto Dungeon Hub",
            desc: "Web3 community portal & digital campaign hub designed for partnership management, campaign rollout tracking, and engagement operations.",
            badge: "Web3 | Community Portal",
            badgeClass: "badge-academic",
            icon: "CD",
            tags: ["Web3", "Community", "Moderation", "Rollout Strategy"],
            impact: "Drives community engagement, partner onboarding, and event operations.",
            source: "https://github.com/Blaconchain",
            featured: false,
            screenshots: [
                { src: "images/blog.jpg", alt: "Crypto Dungeon Community Hub Interface" }
            ],
            deepDive: {
                problem: "Fast-growing Web3 communities needed a centralized hub to track campaign rollouts, moderate engagement, and verify partner activity.",
                architecture: "Designed structured workflow pipelines and campaign tracking templates to maintain brand consistency and operational oversight.",
                highlights: [
                    "Coordinated partner integrations with AI tools like Create With Me AI.",
                    "Monitored community moderation workflows and digital event rollouts.",
                    "Built structured engagement logs to measure campaign conversion."
                ]
            }
        },
        {
            id: "web3-gaming",
            category: "pwa",
            title: "Web3 Arcade Hub",
            desc: "Interactive browser arcade application built with lightweight JavaScript asset preloading, responsive canvas rendering, and zero-latency score tracking.",
            badge: "PWA | Arcade App",
            badgeClass: "badge-pwa",
            icon: "GA",
            tags: ["JavaScript", "HTML5 Canvas", "PWA", "Interactive UI"],
            impact: "Provides instant browser gaming with zero framework bloat.",
            demo: "https://github.com/Blaconchain",
            source: "https://github.com/Blaconchain",
            featured: false,
            screenshots: [
                { src: "images/game.jpg", alt: "Web3 Arcade Hub Gaming Interface" }
            ],
            deepDive: {
                problem: "Browser mini-games often suffer from heavy load times and sluggish mobile touch controls.",
                architecture: "Built using plain JavaScript and HTML5 Canvas API with custom sprite loop timers and touch input handlers.",
                highlights: [
                    "Ultra-fast bundle size loading under 100kb.",
                    "Responsive canvas scaling for desktop monitors and mobile screens.",
                    "Offline playability enabled via simple asset caching."
                ]
            }
        }
    ],
    techStack: [
        {
            name: "PHP 8.x",
            icon: "fa-brands fa-php",
            category: "backend",
            tier: "Production Core",
            tierClass: "tier-core",
            appNote: "Primary language for server-side logic, session management, QR token generation, and RESTful route handlers.",
            linkedBuild: "Smart Attendance System"
        },
        {
            name: "Laravel Framework",
            icon: "fa-solid fa-layer-group",
            category: "backend",
            tier: "Production Core",
            tierClass: "tier-core",
            appNote: "Architecting structured MVC backend applications, Eloquent ORM queries, database migrations, and middleware pipelines.",
            linkedBuild: "Backend Engineering"
        },
        {
            name: "MySQL & Relational Databases",
            icon: "fa-solid fa-database",
            category: "database",
            tier: "Architecture Level",
            tierClass: "tier-db",
            appNote: "Designing 3NF normalized tables, foreign key constraints, indexing for speed, and transactional audit trails.",
            linkedBuild: "Receipt Pro & Attendance"
        },
        {
            name: "Database Normalization & SQL",
            icon: "fa-solid fa-diagram-project",
            category: "database",
            tier: "Architecture Level",
            tierClass: "tier-db",
            appNote: "Optimizing database schemas at Olak Tech internship to eliminate data redundancy and prevent concurrency anomalies.",
            linkedBuild: "Olak Tech SIWES"
        },
        {
            name: "PWA & Offline-First Tech",
            icon: "fa-solid fa-mobile-screen-button",
            category: "pwa",
            tier: "Advanced",
            tierClass: "tier-pwa",
            appNote: "Implementing Service Worker caching strategies, web app manifests, and offline data persistence for mobile users.",
            linkedBuild: "BlacRate Pro"
        },
        {
            name: "REST APIs & Middleware",
            icon: "fa-solid fa-plug-circle-check",
            category: "backend",
            tier: "Production Core",
            tierClass: "tier-core",
            appNote: "Structuring JSON API endpoints, request validation, authentication headers, and standardized error messaging.",
            linkedBuild: "API System Integration"
        },
        {
            name: "Git & GitHub Version Control",
            icon: "fa-brands fa-github",
            category: "tools",
            tier: "Daily Driver",
            tierClass: "tier-tool",
            appNote: "Managing code repositories, branching workflows, pull request reviews, and continuous Railway deployments.",
            linkedBuild: "GitHub Projects"
        },
        {
            name: "Digital Product Rollout",
            icon: "fa-solid fa-rocket",
            category: "tools",
            tier: "Strategy Core",
            tierClass: "tier-tool",
            appNote: "Planning organic product launches, promotional schedules, campus awareness campaigns, and Web3 growth operations.",
            linkedBuild: "Cowrywise & oSHAMO"
        }
    ],
    experience: [
        {
            company: "Cowrywise",
            role: "Campus Ambassador Lead",
            time: "11/2025 - Present",
            points: [
                "Coordinating campus brand awareness campaigns and digital savings adoption across MAPOLY.",
                "Managing event logistics, promotional material distribution, and student onboarding with structured execution."
            ]
        },
        {
            company: "Crypto Dungeon",
            role: "Partnerships Contributor",
            time: "11/2024 - 11/2025",
            points: [
                "Led community engagement and digital moderation for Web3 enthusiasts and digital collector groups.",
                "Managed partnership growth strategy and integration support for external tools like Create With Me AI."
            ]
        },
        {
            company: "Olak Tech",
            role: "Backend Developer Intern (SIWES)",
            time: "2025 - 2025",
            points: [
                "Collaborated on backend engineering and relational database normalization using PHP 8 and MySQL.",
                "Handled technical documentation, system error logging, and workflow tracking to ensure project delivery."
            ]
        },
        {
            company: "oSHAMO",
            role: "Early Rollout Strategist",
            time: "11/2024 - 08/2025",
            points: [
                "Planned organic digital rollout schedules across social media channels to maximize brand launch reach.",
                "Monitored content delivery timelines and campaign execution metrics with an operations-first mindset."
            ]
        }
    ],
    education: [
        {
            school: "Moshood Abiola Polytechnic (MAPOLY)",
            degree: "ND in Computer Science",
            meta: "2023 - 2025",
            desc: "Core coursework: Database Management Systems, Web Development Logic, Systems Analysis & Design, Data Structures, and Software Engineering."
        }
    ],
    credentials: {
        certifications: [
            {
                title: "C1 Advanced English Certification (EF SET)",
                meta: "Issued 2026",
                desc: "Demonstrated advanced professional fluency in spoken and written English communication."
            }
        ],
        awards: [
            {
                title: "Best Content Strategy Award",
                meta: "Moshood Abiola Polytechnic | 2025",
                desc: "Recognized for innovative digital rollout strategies that significantly increased community engagement and organic reach."
            }
        ]
    },
    contactLinks: [
        {
            title: "LinkedIn",
            value: "linkedin.com/in/lifewithblac",
            href: "https://www.linkedin.com/in/lifewithblac/",
            icon: "fa-brands fa-linkedin-in",
            external: true
        },
        {
            title: "GitHub Repository",
            value: "github.com/Blaconchain",
            href: "https://github.com/Blaconchain",
            icon: "fa-brands fa-github",
            external: true
        },
        {
            title: "X (Formerly Twitter)",
            value: "@Lifewithblac",
            href: "https://x.com/Lifewithblac",
            icon: "fa-brands fa-x-twitter",
            external: true
        },
        {
            title: "Instagram",
            value: "@lifewith_blac",
            href: "https://www.instagram.com/lifewith_blac/",
            icon: "fa-brands fa-instagram",
            external: true
        },
        {
            title: "Direct Phone Call",
            value: "+234 912 580 8797",
            href: "tel:09125808797",
            icon: "fa-solid fa-phone"
        },
        {
            title: "Curriculum Vitae (CV)",
            value: "Download PDF Resume",
            href: "assets/Oluwatomiwa_CV.pdf",
            icon: "fa-solid fa-file-pdf",
            external: true,
            highlight: true
        }
    ]
};

/* =============== TOAST NOTIFICATIONS =============== */
function showToast(message, icon = "fa-check-circle") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* =============== LIGHT CANVAS BACKGROUND PARTICLES =============== */
function initCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (canvas) canvas.style.display = "none";
        return;
    }
    const ctx = canvas.getContext("2d");
    let width, height, particles;
    const colors = ["#059669", "#10B981", "#D97706", "#1E293B"];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function makeParticle() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.8 + 0.6,
            c: colors[Math.floor(Math.random() * colors.length)],
            a: Math.random() * 0.25 + 0.08
        };
    }

    function initParticles() {
        particles = Array.from({ length: window.innerWidth < 768 ? 32 : 64 }, makeParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(5, 150, 105, ${0.04 * (1 - dist / 110)})`;
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
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.c; ctx.globalAlpha = p.a;
            ctx.fill(); ctx.globalAlpha = 1;
        });
        requestAnimationFrame(draw);
    }

    resize(); initParticles(); draw();
    window.addEventListener("resize", () => { resize(); initParticles(); });
}

/* =============== NAVBAR & MOBILE MENU =============== */
function initNavbar() {
    const nav = document.getElementById("navbar");
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");

    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });

    if (toggle && links) {
        toggle.addEventListener("click", () => {
            const isOpen = links.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.innerHTML = `<i class="fa-solid fa-${isOpen ? "xmark" : "bars"}"></i>`;
        });
        links.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                links.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    }
}

/* =============== STATIC CONTENT POPULATION =============== */
function populateStaticContent() {
    const { hero } = DATA;
    document.title = `${hero.brand} | Backend Developer & Systems Architect`;

    document.getElementById("hero-profile-label").textContent = hero.brand;
    document.getElementById("hero-profile-sub").textContent = hero.name;
    document.getElementById("availability-text").textContent = hero.availability;
    document.getElementById("hero-name").textContent = hero.brand;
    document.getElementById("hero-bio").textContent = hero.bio;
    document.getElementById("contact-body").textContent = hero.contactBody;

    const emailLink = document.getElementById("contact-email-big");
    if (emailLink) {
        emailLink.href = `mailto:${hero.email}`;
        emailLink.textContent = hero.email;
    }

    document.querySelectorAll("[data-cv-link]").forEach((link) => {
        link.href = hero.cv;
    });

    const socials = document.getElementById("hero-socials");
    if (socials) {
        socials.innerHTML = DATA.socials.map((item) => `
            <a href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""} title="${item.label}">
                <i class="${item.icon}"></i>
            </a>
        `).join("");
    }

    const metricsRow = document.getElementById("metrics-row");
    if (metricsRow) {
        metricsRow.innerHTML = DATA.metrics.map((m, idx) => `
            <div class="metric-pill" data-metric-idx="${idx}">
                <span class="metric-val" id="metric-val-${idx}">${m.raw || m.value}</span>
                <span class="metric-label">${m.label}</span>
            </div>
        `).join("");
    }
}

/* =============== ANIMATED METRICS COUNTER =============== */
function animateMetrics() {
    DATA.metrics.forEach((m, idx) => {
        if (m.target === null) return;
        const el = document.getElementById(`metric-val-${idx}`);
        if (!el) return;

        let start = 0;
        const duration = 1200;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = m.target / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= m.target) {
                el.textContent = `${m.target}${m.suffix}`;
                clearInterval(timer);
            } else {
                el.textContent = `${Math.floor(start)}${m.suffix}`;
            }
        }, stepTime);
    });
}

/* =============== TYPEWRITER EFFECT =============== */
function initTypewriter() {
    const element = document.getElementById("typewriter");
    if (!element) return;
    const roles = DATA.typewriterRoles;
    let roleIdx = 0, charIdx = 0, deleting = false;

    function tick() {
        const role = roles[roleIdx];
        if (!deleting) {
            element.textContent = role.slice(0, charIdx + 1);
            charIdx++;
            if (charIdx === role.length) {
                deleting = true;
                setTimeout(tick, 2000);
                return;
            }
        } else {
            element.textContent = role.slice(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                roleIdx = (roleIdx + 1) % roles.length;
            }
        }
        setTimeout(tick, deleting ? 35 : 70);
    }
    tick();
}

/* =============== INTERACTIVE TERMINAL CONSOLE =============== */
function initTerminal() {
    const body = document.getElementById("term-body");
    const input = document.getElementById("term-input");
    if (!body) return;

    function appendLine(html) {
        const span = document.createElement("span");
        span.className = "t-line";
        span.innerHTML = html;
        body.appendChild(span);
        body.scrollTop = body.scrollHeight;
    }

    function printWelcome() {
        appendLine('<span class="t-prompt">&gt;</span> <span class="t-cmd">blac --version</span>');
        appendLine('<span class="t-str">BLAC Systems Console v2.6.0 [PHP 8.x / MySQL / PWA]</span>');
        appendLine('<span class="t-info">Type "help" or click quick command buttons above.</span>');
    }

    function runCommand(cmd) {
        const c = cmd.trim().toLowerCase();
        appendLine(`<span class="t-prompt">&gt;</span> <span class="t-cmd">${c}</span>`);

        if (c === "clear") {
            body.innerHTML = "";
            return;
        }

        if (c === "profile" || c === "cat profile.json") {
            appendLine('<span class="t-key">{</span>');
            appendLine('  <span class="t-key">"name"</span>: <span class="t-str">"Odubela Oluwatomiwa"</span>,');
            appendLine('  <span class="t-key">"title"</span>: <span class="t-str">"Backend Developer &amp; Systems Architect"</span>,');
            appendLine('  <span class="t-key">"languages"</span>: [<span class="t-str">"PHP 8.x"</span>, <span class="t-str">"SQL"</span>, <span class="t-str">"JavaScript"</span>],');
            appendLine('  <span class="t-key">"databases"</span>: [<span class="t-str">"MySQL"</span>, <span class="t-str">"Relational Schemas"</span>],');
            appendLine('  <span class="t-key">"status"</span>: <span class="t-bool">"Available for Hire"</span>');
            appendLine('<span class="t-key">}</span>');
        } else if (c === "stack" || c === "stack.sh") {
            appendLine('<span class="t-str">Primary Backend:</span> PHP 8.x, Laravel, REST Middleware');
            appendLine('<span class="t-str">Database Layer:</span> MySQL, Relational Normalization, Indexing');
            appendLine('<span class="t-str">Frontend/PWA:</span> JavaScript, Service Workers, Offline Storage');
            appendLine('<span class="t-str">Operations:</span> Git, GitHub, Railway, Rollout Strategy');
        } else if (c === "projects" || c === "projects.list") {
            DATA.projects.forEach((p) => {
                appendLine(`<span class="t-key">• ${p.title}</span> — <span class="t-str">${p.badge}</span>`);
            });
        } else if (c === "contact") {
            appendLine(`<span class="t-str">Email: ${DATA.hero.email}</span>`);
            appendLine(`<span class="t-str">Phone: ${DATA.hero.phone}</span>`);
            appendLine('<span class="t-str">GitHub: https://github.com/Blaconchain</span>');
        } else if (c === "help") {
            appendLine('<span class="t-info">Available commands:</span>');
            appendLine('  <span class="t-cmd">profile</span>   - View profile JSON');
            appendLine('  <span class="t-cmd">stack</span>     - View core technology stack');
            appendLine('  <span class="t-cmd">projects</span>  - List featured production builds');
            appendLine('  <span class="t-cmd">contact</span>   - Get direct contact channels');
            appendLine('  <span class="t-cmd">clear</span>     - Clear terminal screen');
        } else {
            appendLine(`<span class="t-info">Command not recognized: "${c}". Type "help" for command list.</span>`);
        }
    }

    printWelcome();

    document.querySelectorAll(".term-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const cmd = btn.dataset.cmd;
            runCommand(cmd);
        });
    });

    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && input.value.trim()) {
                runCommand(input.value);
                input.value = "";
            }
        });
    }
}

/* =============== PROJECTS GRID & FILTERING =============== */
function renderProjects(filter = "all") {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const list = filter === "all" ? DATA.projects : DATA.projects.filter((p) => p.category === filter);

    list.forEach((project, idx) => {
        const card = document.createElement("article");
        card.className = `project-card${project.featured ? " featured-project" : ""}`;
        card.style.animationDelay = `${idx * 0.08}s`;

        const primaryImg = project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : null;
        const hasMultiple = project.screenshots && project.screenshots.length > 1;

        card.innerHTML = `
            ${primaryImg ? `
                <div class="project-media-showcase">
                    <span class="media-overlay-badge">${project.badge}</span>
                    <div class="media-preview-container">
                        <img src="${primaryImg.src}" alt="${primaryImg.alt}" class="media-preview-img" id="preview-img-${project.id}" loading="lazy">
                    </div>
                    ${hasMultiple ? `
                        <div class="media-gallery-thumbs">
                            ${project.screenshots.map((s, sIdx) => `
                                <button class="thumb-btn ${sIdx === 0 ? "active" : ""}" data-project="${project.id}" data-src="${s.src}" data-alt="${s.alt}" title="View ${s.alt}">
                                    <img src="${s.src}" alt="Thumb ${sIdx + 1}">
                                </button>
                            `).join("")}
                        </div>
                    ` : ""}
                </div>
            ` : ""}

            <div class="project-card-top">
                <div class="project-icon-badge-wrap">
                    <div class="project-icon">${project.icon}</div>
                    <span class="project-badge ${project.badgeClass}">${project.badge}</span>
                </div>
            </div>

            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.desc}</p>
            <p class="project-impact"><span>Outcome:</span> ${project.impact}</p>

            <div class="project-tags">
                ${project.tags.map((t) => `<span class="p-tag">${t}</span>`).join("")}
            </div>

            <div class="project-actions">
                ${project.demo ? `<a class="project-action project-demo" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
                ${project.source ? `<a class="project-action project-source" href="${project.source}" target="_blank" rel="noreferrer">GitHub <i class="fa-brands fa-github"></i></a>` : ""}
            </div>
        `;

        grid.appendChild(card);
    });

    // Attach Thumbnail Switching Listeners
    document.querySelectorAll(".thumb-btn").forEach((thumb) => {
        thumb.addEventListener("click", (e) => {
            e.stopPropagation();
            const pId = thumb.dataset.project;
            const src = thumb.dataset.src;
            const alt = thumb.dataset.alt;
            const mainImg = document.getElementById(`preview-img-${pId}`);
            if (mainImg) {
                mainImg.src = src;
                mainImg.alt = alt;
            }
            const parent = thumb.closest(".media-gallery-thumbs");
            if (parent) {
                parent.querySelectorAll(".thumb-btn").forEach((b) => b.classList.remove("active"));
                thumb.classList.add("active");
            }
        });
    });
}

function initProjectFilters() {
    const bar = document.getElementById("project-filter-bar");
    if (!bar) return;

    bar.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            e.target.classList.add("active");
            renderProjects(e.target.dataset.filter);
        }
    });
}

/* =============== TECH STACK MATRIX & FILTERING =============== */
function renderStack(filter = "all") {
    const grid = document.getElementById("stack-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const list = filter === "all" ? DATA.techStack : DATA.techStack.filter((s) => s.category === filter);

    list.forEach((item) => {
        const card = document.createElement("article");
        card.className = "stack-card hover-lift";

        card.innerHTML = `
            <div class="stack-card-head">
                <div class="stack-card-icon-wrap">
                    <i class="${item.icon} stack-card-icon"></i>
                    <span class="stack-card-name">${item.name}</span>
                </div>
                <span class="stack-tier-badge ${item.tierClass}">${item.tier}</span>
            </div>
            <p class="stack-card-app">${item.appNote}</p>
            <span class="stack-card-link"><i class="fa-solid fa-link"></i> ${item.linkedBuild}</span>
        `;
        grid.appendChild(card);
    });
}

function initStackFilters() {
    const bar = document.getElementById("stack-filter-bar");
    if (!bar) return;

    bar.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            e.target.classList.add("active");
            renderStack(e.target.dataset.stackFilter);
        }
    });
}

/* =============== PROJECT DEEP DIVE MODAL =============== */
function openProjectModal(projectId) {
    const project = DATA.projects.find((p) => p.id === projectId);
    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-content");
    if (!project || !modal || !content) return;

    content.innerHTML = `
        <div class="modal-proj-head">
            <div>
                <h3 class="modal-proj-title">${project.title}</h3>
                <span class="project-badge ${project.badgeClass}">${project.badge}</span>
            </div>
        </div>
        <p class="modal-proj-desc">${project.desc}</p>
        
        ${project.screenshots ? `
            <div class="modal-proj-imgs">
                ${project.screenshots.map((s) => `<img src="${s.src}" alt="${s.alt}">`).join("")}
            </div>
        ` : ""}

        <div class="modal-proj-sec">
            <h4>Problem &amp; Motivation</h4>
            <p>${project.deepDive.problem}</p>
        </div>

        <div class="modal-proj-sec">
            <h4>System Architecture</h4>
            <p>${project.deepDive.architecture}</p>
        </div>

        <div class="modal-proj-sec">
            <h4>Key Accomplishments &amp; Features</h4>
            <ul>
                ${project.deepDive.highlights.map((h) => `<li>${h}</li>`).join("")}
            </ul>
        </div>

        <div class="project-actions" style="margin-top: 20px;">
            ${project.demo ? `<a class="project-action project-demo" href="${project.demo}" target="_blank" rel="noreferrer">Open Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
            ${project.source ? `<a class="project-action project-source" href="${project.source}" target="_blank" rel="noreferrer">GitHub Repository <i class="fa-brands fa-github"></i></a>` : ""}
        </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
}

function initModals() {
    const projectModal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");

    if (closeBtn && projectModal) {
        closeBtn.addEventListener("click", () => {
            projectModal.classList.remove("active");
            projectModal.setAttribute("aria-hidden", "true");
        });
        projectModal.addEventListener("click", (e) => {
            if (e.target === projectModal) {
                projectModal.classList.remove("active");
                projectModal.setAttribute("aria-hidden", "true");
            }
        });
    }

    const resumeModal = document.getElementById("resume-modal");
    const resumeBtn = document.getElementById("quick-resume-btn");
    const resumeClose = document.getElementById("resume-modal-close");

    if (resumeBtn && resumeModal) {
        resumeBtn.addEventListener("click", () => {
            resumeModal.classList.add("active");
            resumeModal.setAttribute("aria-hidden", "false");
        });
    }
    if (resumeClose && resumeModal) {
        resumeClose.addEventListener("click", () => {
            resumeModal.classList.remove("active");
            resumeModal.setAttribute("aria-hidden", "true");
        });
        resumeModal.addEventListener("click", (e) => {
            if (e.target === resumeModal) {
                resumeModal.classList.remove("active");
                resumeModal.setAttribute("aria-hidden", "true");
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (projectModal) projectModal.classList.remove("active");
            if (resumeModal) resumeModal.classList.remove("active");
        }
    });
}

/* =============== TIMELINE & CREDENTIALS =============== */
function buildExperience() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    DATA.experience.forEach((entry) => {
        const card = document.createElement("div");
        card.className = "timeline-card reveal";
        card.innerHTML = `
            <div class="tl-time">${entry.time}</div>
            <div class="tl-company">${entry.company}</div>
            <div class="tl-role">${entry.role}</div>
            <ul class="tl-list">
                ${entry.points.map((p) => `<li>${p}</li>`).join("")}
            </ul>
        `;
        timeline.appendChild(card);
    });

    const eduCards = document.getElementById("edu-cards");
    if (eduCards) {
        DATA.education.forEach((entry) => {
            const card = document.createElement("div");
            card.className = "edu-card hover-lift";
            card.innerHTML = `
                <div class="edu-school">${entry.school}</div>
                <div class="edu-degree">${entry.degree}</div>
                <div class="edu-meta">${entry.meta}</div>
                <p class="edu-desc">${entry.desc}</p>
            `;
            eduCards.appendChild(card);
        });
    }
}

function buildCredentials() {
    const certsList = document.getElementById("certifications-list");
    const awardsList = document.getElementById("awards-list");

    if (certsList) {
        certsList.innerHTML = DATA.credentials.certifications.map((item) => `
            <div class="credential-item">
                <strong>${item.title}</strong>
                <span class="credential-meta">${item.meta}</span>
                ${item.desc ? `<p class="credential-desc">${item.desc}</p>` : ""}
            </div>
        `).join("");
    }

    if (awardsList) {
        awardsList.innerHTML = DATA.credentials.awards.map((item) => `
            <div class="credential-item">
                <strong>${item.title}</strong>
                <span class="credential-meta">${item.meta}</span>
                ${item.desc ? `<p class="credential-desc">${item.desc}</p>` : ""}
            </div>
        `).join("");
    }
}

/* =============== CONTACT LINKS & FORM =============== */
function buildContactLinks() {
    const container = document.getElementById("contact-links");
    if (!container) return;

    DATA.contactLinks.forEach((item) => {
        const card = document.createElement("a");
        card.className = `contact-link-card hover-lift${item.highlight ? " highlight-card" : ""}`;
        card.href = item.href;
        if (item.external && item.href.startsWith("http")) {
            card.target = "_blank"; card.rel = "noreferrer";
        }

        card.innerHTML = `
            <i class="${item.icon}"></i>
            <div>
                <strong>${item.title}</strong>
                <span>${item.value}</span>
            </div>
            <i class="fa-solid fa-arrow-right arrow-r"></i>
        `;
        container.appendChild(card);
    });
}

function initContactActions() {
    const copyBtn = document.getElementById("copy-email-btn");
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(DATA.hero.email).then(() => {
                showToast("Email address copied to clipboard!");
            });
        });
    }

    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Message sent! Thanks for reaching out.", "fa-paper-plane");
            form.reset();
        });
    }
}

/* =============== LIVE LAGOS WAT CLOCK =============== */
function initClock() {
    const element = document.getElementById("live-clock");
    function update() {
        if (!element) return;
        const now = new Date();
        const time = now.toLocaleTimeString("en-GB", {
            hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Africa/Lagos"
        });
        element.textContent = `WAT ${time}`;
    }
    update(); setInterval(update, 1000);
}

/* =============== 3D MAGNETIC CARD TILT =============== */
function initCardTilt() {
    if (!window.matchMedia("(hover: hover)").matches) return;

    document.addEventListener("mousemove", (e) => {
        const card = e.target.closest(".project-card, .stack-card, .hover-lift");
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    document.addEventListener("mouseout", (e) => {
        const card = e.target.closest(".project-card, .stack-card, .hover-lift");
        if (card && !card.contains(e.relatedTarget)) {
            card.style.transform = "";
        }
    });
}

/* =============== CURSOR GLOW EFFECT =============== */
function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (!glow || !window.matchMedia("(hover: hover)").matches) return;

    window.addEventListener("mousemove", (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
        glow.classList.add("is-active");
    }, { passive: true });

    document.addEventListener("mouseleave", () => glow.classList.remove("is-active"));
}

/* =============== NON-BLOCKING REVEAL ON SCROLL =============== */
function initReveal() {
    let animatedMetricsDone = false;
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);

                if (!animatedMetricsDone && entry.target.id === "home") {
                    animatedMetricsDone = true;
                    animateMetrics();
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    const heroEl = document.getElementById("home");
    if (heroEl) revealObserver.observe(heroEl);
}

/* =============== DOM READY =============== */
async function loadDataAndInit() {
    try {
        const response = await fetch("data.json");
        const json = await response.json();
        Object.assign(DATA, json);

        const totalProjects = DATA.projects ? DATA.projects.length : 0;
        if (DATA.metrics) {
            DATA.metrics.forEach(m => {
                if (m.label === "Featured Builds") {
                    m.value = String(totalProjects);
                    m.target = totalProjects;
                }
            });
        }
    } catch (err) {
        console.error("Failed to load data.json:", err);
    }

    populateStaticContent();
    initCanvas();
    initNavbar();
    initTypewriter();
    initTerminal();
    renderProjects("all");
    initProjectFilters();
    renderStack("all");
    initStackFilters();
    buildExperience();
    buildCredentials();
    buildContactLinks();
    initContactActions();
    initModals();
    initClock();
    initCursorGlow();
    initCardTilt();

    requestAnimationFrame(() => {
        initReveal();
        animateMetrics();
    });
}

document.addEventListener("DOMContentLoaded", loadDataAndInit);
