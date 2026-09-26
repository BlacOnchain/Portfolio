/* =============================================
   BLAC PORTFOLIO — script.js
   Odubela Oluwatomiwa (BLAC)
   Backend Systems Engineer & Frontend Developer
   Lagos, Nigeria
   ============================================= */

const DATA = {
    hero: {
        brand: "BLAC",
        name: "Odubela Oluwatomiwa",
        title: "Backend Developer & Systems Builder",
        availability: "Available for Backend, Full-Stack & Systems Roles",
        bio: "Backend developer and systems builder based in Lagos. I architect normalized MySQL databases, construct reliable PHP 8.x/Laravel backends, and build high-performance client-side PWAs with clean, zero-friction user interfaces.",
        contactBody: "Looking for an engineer who writes clean relational schemas, builds resilient APIs, and crafts fast, offline-capable web tools? Let's connect and build something solid.",
        email: "odubelaotomiwa508@gmail.com",
        phone: "+234 912 580 8797",
        rawPhone: "09125808797",
        cv: "assets/Oluwatomiwa_CV.pdf",
        location: "Lagos, Nigeria",
        github: "https://github.com/Blaconchain"
    },
    typewriterRoles: [
        "Backend Developer",
        "PHP & Laravel Architect",
        "MySQL Database Specialist",
        "PWA & Frontend Systems Builder",
        "Digital Rollout Strategist"
    ],
    metrics: [
        { value: "6", label: "Production Builds", target: 6, suffix: "" },
        { value: "4+", label: "Industry Roles", target: 4, suffix: "+" },
        { value: "C1", label: "EF Advanced English", target: null, raw: "C1" },
        { value: "100%", label: "ACID & Schema Integrity", target: null, raw: "100%" }
    ],
    socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/lifewithblac/", icon: "fa-brands fa-linkedin-in" },
        { label: "GitHub", href: "https://github.com/Blaconchain", icon: "fa-brands fa-github" },
        { label: "X / Twitter", href: "https://x.com/Lifewithblac", icon: "fa-brands fa-x-twitter" },
        { label: "Instagram", href: "https://www.instagram.com/lifewith_blac/", icon: "fa-brands fa-instagram" },
        { label: "Email", href: "mailto:odubelaotomiwa508@gmail.com", icon: "fa-regular fa-envelope" },
        { label: "Phone", href: "tel:09125808797", icon: "fa-solid fa-phone" }
    ],
    projects: [
        {
            id: "smart-attendance",
            category: "backend",
            title: "Smart Attendance System",
            stackIcon: "fa-brands fa-php",
            desc: "Academic QR-code verification and check-in platform engineered with PHP 8.x and MySQL. Eliminates manual classroom paperwork, stops proxy attendance with time-expiring cryptographic tokens, and generates instant lecturer audit reports.",
            badge: "PHP 8.x & MySQL",
            badgeClass: "badge-blue",
            icon: "SA",
            tags: ["PHP 8.x", "MySQL 3NF", "Dynamic QR", "Session Security", "MAPOLY"],
            impact: "Automated student lecture sign-ins, cutting lecture start delays from 15 mins to under 60 seconds with tamper-proof token validation.",
            demo: "https://smart-attendance-production-996c.up.railway.app/",
            source: "https://github.com/BlacOnchain/Smart-Attendance",
            featured: true,
            screenshots: [
                { src: "images/projects/smart-attendance-landing.png", alt: "Smart Attendance platform landing page" },
                { src: "images/projects/smart-attendance-portal.png", alt: "Smart Attendance lecturer and student check-in portal" }
            ],
            deepDive: {
                problem: "Lecturers at higher institutions spent 10 to 15 minutes manually passing paper attendance sheets per lecture. This led to pervasive proxy signing, lost attendance sheets, and hours wasted tallying semester examination eligibility.",
                architecture: "Engineered a normalized 3NF MySQL relational database schema linking Students, Courses, LectureSessions, and VerifiedLogs with strict foreign key constraints. Developed custom PHP middleware generating time-expiring, single-use QR verification hashes to eliminate attendance spoofing.",
                highlights: [
                    "Dynamic, time-expiring QR token generation refresh engine.",
                    "Relational 3NF MySQL database with foreign keys and index optimization for instant query responses.",
                    "Automated semester attendance percentage calculation and exportable lecturer audit summaries."
                ]
            }
        },
        {
            id: "aduke-lagos",
            category: "backend",
            title: "Àdùké Lagos",
            stackIcon: "fa-solid fa-fire-flame-curved",
            desc: "Contemporary West African luxury gastronomy platform engineered for hearth dining in Victoria Island, Lagos. Features real-time table QR session dispatch, live woodfire order status tracking (#ADK-8819), table reservations, and Google Cloud Firestore persistence.",
            badge: "Full-Stack | Firestore",
            badgeClass: "badge-indigo",
            icon: "AD",
            tags: ["Full-Stack", "Firestore", "Table QR", "Order Pipeline", "Render"],
            impact: "Powers friction-free woodfire hearth dining operations, live culinary tracking, and digital table reservations in Victoria Island.",
            demo: "https://aduke-75yk.onrender.com/",
            source: "https://github.com/BlacOnchain/ADUKE",
            featured: true,
            screenshots: [
                { src: "images/projects/aduke-landing.jpg", alt: "Àdùké Lagos woodfire dining reservation and hearth interface" },
                { src: "images/projects/aduke-menu.jpg", alt: "Àdùké Lagos live culinary order pipeline and tracking" }
            ],
            deepDive: {
                problem: "High-volume luxury restaurants face severe dining room bottlenecks when guests wait on floor staff for paper menus, order placement, and kitchen updates during peak dinner seatings.",
                architecture: "Built with reactive real-time Google Cloud Firestore listeners, table-specific QR code session binding, and a structured order dispatch state machine. Deployed with automated CI/CD pipelines on Render.",
                highlights: [
                    "Live table-to-kitchen QR order stream with instant hearth tracking (#ADK-8819).",
                    "Google Cloud Firestore document persistence for reservations, catalog items, and order states.",
                    "Interactive booking system supporting VIP Dinner Sittings and Lunch Suya Socials."
                ]
            }
        },
        {
            id: "aura-cv",
            category: "pwa",
            title: "AuraCV Studio",
            stackIcon: "fa-solid fa-file-invoice",
            desc: "Executive ATS-ready resume engineering studio and client-side PDF workspace. Enables job seekers to build, customize, and export recruiter-friendly resumes in real-time with dual-pane live preview and zero account requirements.",
            badge: "PWA & ATS Engine",
            badgeClass: "badge-cyan",
            icon: "AC",
            tags: ["PWA", "JavaScript", "Client-Side PDF Engine", "ATS Compliance", "LocalStorage", "Dynamic CSS Tokens"],
            impact: "Generates ATS-optimized, recruiter-parsed PDF resumes entirely client-side with 100% privacy and zero server latency.",
            demo: "https://blaconchain.github.io/Aura-CV/",
            source: "https://github.com/Blaconchain/Aura-CV",
            featured: true,
            screenshots: [
                { src: "images/projects/auracv-landing.jpg", alt: "AuraCV Studio executive landing page" },
                { src: "images/projects/auracv-editor.jpg", alt: "AuraCV Studio dual-pane live editor and template selector" }
            ],
            deepDive: {
                problem: "Traditional online resume builders enforce predatory subscription paywalls, demand mandatory account registration, or produce heavily nested multi-column PDF layouts that choke Applicant Tracking System (ATS) parsers.",
                architecture: "Engineered as an offline-capable client-side Progressive Web App (PWA) using pure vanilla JavaScript. Features a reactive state architecture syncing form inputs to dynamic CSS typography tokens and client-side DOM-to-PDF rendering pipelines without external API calls.",
                highlights: [
                    "Dual-pane live editor with instantaneous template swapping (Aura Moderna, Compact, Nordic, Split).",
                    "1-click print-ready A4 PDF export adhering strictly to single-column ATS parser standards.",
                    "Zero cloud storage overhead — all user career history auto-saves safely into browser localStorage."
                ]
            }
        },
        {
            id: "blacrate-pro",
            category: "pwa",
            title: "BlacRate Pro",
            stackIcon: "fa-solid fa-money-bill-transfer",
            desc: "Offline-first Progressive Web App built for OTC crypto and currency traders to instantly calculate crypto-to-naira exchange rates with custom spread multipliers and zero network latency.",
            badge: "PWA | Financial Utility",
            badgeClass: "badge-slate",
            icon: "BR",
            tags: ["PWA", "Service Worker", "Offline-First", "JavaScript", "Trading Utility"],
            impact: "Equips active OTC traders with a dependable, sub-millisecond offline calculator during critical trade negotiations.",
            demo: "https://blaconchain.github.io/blacrate-pro/",
            source: "https://github.com/Blaconchain/blacrate-pro",
            featured: false,
            screenshots: [],
            deepDive: {
                problem: "OTC traders operating in areas with unstable cellular connectivity frequently lost rate calculations during active customer chats, causing pricing errors.",
                architecture: "Employs a custom Service Worker stale-while-revalidate caching strategy for shell assets and localStorage for persistent margin presets.",
                highlights: [
                    "Instant client-side arithmetic engine with custom margin percentage toggles.",
                    "Web App Manifest for native-like home screen installation on iOS and Android.",
                    "Zero external framework dependencies for instantaneous load times."
                ]
            }
        },
        {
            id: "receipt-pro",
            category: "backend",
            title: "Receipt Pro",
            stackIcon: "fa-solid fa-receipt",
            desc: "Backend transaction accounting engine built with PHP and MySQL, enforcing relational data integrity, immutable audit logs, and atomic database transaction guarantees.",
            badge: "PHP & ACID SQL",
            badgeClass: "badge-blue",
            icon: "RP",
            tags: ["PHP", "MySQL", "ACID Transactions", "SQL Integrity", "Audit Logs"],
            impact: "Guarantees zero invoice duplication and enforces strict database consistency across commercial transactions.",
            source: "https://github.com/BlacOnchain/receipt-pro",
            featured: false,
            screenshots: [],
            deepDive: {
                problem: "Small commerce workflows face data inconsistencies when transaction receipts are generated before records are safely committed to the database.",
                architecture: "Implemented strict database transactions (BEGIN, COMMIT, ROLLBACK) in PHP and MySQL to guarantee ACID transactional safety.",
                highlights: [
                    "Normalized 3NF schema preventing duplicate invoice sequence collision.",
                    "Structured system logging recording timestamped transaction states.",
                    "Input sanitization preventing invalid monetary precision and SQL injection."
                ]
            }
        }
    ],
    techStack: [
        {
            name: "PHP 8.x Core",
            icon: "fa-brands fa-php",
            category: "backend",
            tier: "Primary Backend",
            tierClass: "tier-core",
            appNote: "Server-side logic, session management, secure QR token issuance, and RESTful routing.",
            linkedBuild: "Smart Attendance & Receipt Pro"
        },
        {
            name: "MySQL & Relational Architecture",
            icon: "fa-solid fa-database",
            category: "database",
            tier: "Database Design",
            tierClass: "tier-db",
            appNote: "3NF normalization, foreign key relations, B-tree indexes, and ACID transaction boundaries.",
            linkedBuild: "Smart Attendance System"
        },
        {
            name: "Laravel MVC Framework",
            icon: "fa-solid fa-layer-group",
            category: "backend",
            tier: "Web Framework",
            tierClass: "tier-core",
            appNote: "Structuring MVC backends, Eloquent ORM relationships, database migrations, and request middleware.",
            linkedBuild: "Backend Engineering"
        },
        {
            name: "PWA & Offline Web Architecture",
            icon: "fa-solid fa-mobile-screen-button",
            category: "pwa",
            tier: "Client Systems",
            tierClass: "tier-pwa",
            appNote: "Service Worker cache strategies, web manifests, and client-side state engines with local storage.",
            linkedBuild: "AuraCV Studio & BlacRate"
        },
        {
            name: "JavaScript & DOM Architecture",
            icon: "fa-brands fa-js",
            category: "pwa",
            tier: "Frontend Core",
            tierClass: "tier-pwa",
            appNote: "Event-driven reactive UI, dynamic CSS tokens, client-side PDF rendering, and async API integrations.",
            linkedBuild: "AuraCV Studio & Àdùké Lagos"
        },
        {
            name: "Google Cloud Firestore",
            icon: "fa-solid fa-fire-flame-curved",
            category: "database",
            tier: "Real-time DB",
            tierClass: "tier-db",
            appNote: "NoSQL document collections, real-time snapshot listeners, and live table ordering synchronization.",
            linkedBuild: "Àdùké Lagos"
        },
        {
            name: "Git, GitHub & Cloud CI/CD",
            icon: "fa-brands fa-github",
            category: "tools",
            tier: "DevOps & Versioning",
            tierClass: "tier-tool",
            appNote: "Git version control, feature branching, pull request reviews, and cloud deployment pipelines (Railway, Render).",
            linkedBuild: "GitHub Projects"
        },
        {
            name: "Product & Campaign Rollout",
            icon: "fa-solid fa-chart-line",
            category: "tools",
            tier: "Operations & Strategy",
            tierClass: "tier-tool",
            appNote: "Structuring product launches, organic rollout schedules, and campus adoption initiatives.",
            linkedBuild: "Cowrywise & oSHAMO"
        }
    ],
    architectureSpecs: {
        attendance: {
            title: "Smart Attendance — 3NF MySQL Schema & QR Token Lifecycle",
            badge: "SQL Architecture",
            tables: [
                { name: "students", cols: "id (PK), matric_no (UNIQUE), full_name, department_id (FK), created_at" },
                { name: "course_rosters", cols: "id (PK), course_code, lecturer_id (FK), semester, academic_year" },
                { name: "lecture_sessions", cols: "id (PK), course_id (FK), session_token (HASH), expires_at, status" },
                { name: "attendance_logs", cols: "id (PK), session_id (FK), student_id (FK), verified_at, device_hash" }
            ],
            security: "PHP 8.x token engine creates cryptographically salted, 90-second expiring QR tokens. Prevents screenshot forwarding and proxy check-ins."
        },
        auracv: {
            title: "AuraCV Studio — Client-Side ATS PDF & Reactive State Pipeline",
            badge: "Frontend Architecture",
            flow: [
                "Form Input Event -> Debounced State Dispatcher",
                "State Object -> CSS Custom Properties Reactive Binder",
                "Dual-Pane DOM Virtualization -> Instant A4 Print Preview",
                "LocalStorage Sync -> Zero-Latency Auto-Save",
                "Native Canvas / PDF Pipeline -> Clean 1-Page ATS Document"
            ],
            security: "100% Client-side. Zero telemetry, zero external network queries during resume authoring."
        }
    },
    experience: {
        tech: [
            {
                company: "Olak Tech",
                role: "Backend Developer Intern (SIWES)",
                time: "2025",
                points: [
                    "Engineered modular backend logic and normalized relational MySQL database schemas using PHP 8.x.",
                    "Maintained technical documentation, structured error logging, and schema migration tracking."
                ]
            }
        ],
        strategy: [
            {
                company: "Cowrywise",
                role: "Campus Ambassador Lead",
                time: "11/2025 - Present",
                points: [
                    "Leading campus brand awareness campaigns and digital savings adoption across MAPOLY.",
                    "Organizing student workshops, managing promotional distribution, and facilitating user onboarding."
                ]
            },
            {
                company: "Crypto Dungeon",
                role: "Partnerships Contributor",
                time: "11/2024 - 11/2025",
                points: [
                    "Managed community engagement and moderation workflows for digital creator groups.",
                    "Coordinated partnership outreach and integration support for developer tools like Create With Me AI."
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
        ]
    },
    education: [
        {
            school: "Moshood Abiola Polytechnic (MAPOLY)",
            degree: "ND in Computer Science",
            meta: "2023 - 2025 &middot; Abeokuta, Nigeria",
            desc: "Coursework: Database Management Systems, Web Application Development, Systems Analysis & Design, Data Structures & Algorithms, and Software Engineering."
        }
    ],
    credentials: {
        certifications: [
            {
                title: "C1 Advanced English Certification (EF SET)",
                meta: "Issued 2026 &middot; EF Standard English Test",
                desc: "Demonstrated advanced professional fluency in spoken and written English communication."
            }
        ],
        awards: [
            {
                title: "Best Content Strategy Award",
                meta: "Moshood Abiola Polytechnic | 2025",
                desc: "Recognized for digital campaign execution that significantly increased student community engagement and organic reach."
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
            title: "GitHub",
            value: "github.com/Blaconchain",
            href: "https://github.com/Blaconchain",
            icon: "fa-brands fa-github",
            external: true
        },
        {
            title: "X (Twitter)",
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
            title: "Direct Phone / WhatsApp",
            value: "+234 912 580 8797",
            href: "tel:09125808797",
            icon: "fa-solid fa-phone"
        },
        {
            title: "Curriculum Vitae (CV)",
            value: "Download Official PDF",
            href: "assets/Oluwatomiwa_CV.pdf",
            icon: "fa-solid fa-file-pdf",
            external: true,
            highlight: true
        }
    ]
};

/* =============== TOAST NOTIFICATIONS =============== */
function showToast(message, icon = "fa-check-circle", type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(6px)";
        setTimeout(() => toast.remove(), 200);
    }, 3200);
}

/* =============== CANVAS PARTICLES =============== */
function initCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (canvas) canvas.style.display = "none";
        return;
    }
    const ctx = canvas.getContext("2d");
    let width, height, particles;
    const colors = ["#1e40af", "#3b82f6", "#6b7280", "#cbd5e1"];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function makeParticle() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.16,
            vy: (Math.random() - 0.5) * 0.16,
            r: Math.random() * 1.2 + 0.4,
            c: colors[Math.floor(Math.random() * colors.length)],
            a: Math.random() * 0.14 + 0.03
        };
    }

    function initParticles() {
        const count = window.innerWidth < 768 ? 14 : 32;
        particles = Array.from({ length: count }, makeParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 75) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(30, 64, 175, ${0.03 * (1 - dist / 75)})`;
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

    resize();
    initParticles();
    draw();
    window.addEventListener("resize", () => {
        resize();
        initParticles();
    }, { passive: true });
}

/* =============== NAVBAR & MOBILE MENU & SCROLL-SPY =============== */
function initNavbar() {
    const nav = document.getElementById("navbar");
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    const mobileTabs = document.querySelectorAll(".mobile-tab-item");

    // Scroll styling
    window.addEventListener("scroll", () => {
        if (nav) {
            nav.classList.toggle("scrolled", window.scrollY > 25);
        }
        updateActiveSection();
    }, { passive: true });

    // Mobile slide-out drawer
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

        document.addEventListener("click", (e) => {
            if (links.classList.contains("is-open") && !links.contains(e.target) && !toggle.contains(e.target)) {
                links.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    }

    // Scroll-Spy for both desktop links and mobile tab bar
    const sections = ["home", "projects", "architecture", "stack", "experience", "credentials", "contact"];
    function updateActiveSection() {
        const scrollPos = window.scrollY + 160;
        let currentId = "home";

        for (const secId of sections) {
            const el = document.getElementById(secId);
            if (el) {
                const top = el.offsetTop;
                const height = el.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentId = secId;
                    break;
                }
            }
        }

        // Update mobile bottom tab bar
        mobileTabs.forEach(tab => {
            const tabTarget = tab.dataset.tab;
            if (tabTarget === currentId) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        // Update desktop links
        if (links) {
            links.querySelectorAll("a").forEach(a => {
                const href = a.getAttribute("href");
                if (href === `#${currentId}`) {
                    a.style.color = "var(--accent)";
                } else {
                    a.style.color = "";
                }
            });
        }
    }
}

/* =============== STATIC CONTENT POPULATION =============== */
function populateStaticContent() {
    const { hero } = DATA;

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
            <a href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""} title="${item.label}" aria-label="${item.label}">
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
        if (m.target === null || typeof m.target === "undefined") return;
        const el = document.getElementById(`metric-val-${idx}`);
        if (!el) return;

        let start = 0;
        const target = m.target;
        const duration = 900;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                el.textContent = `${target}${m.suffix}`;
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
                setTimeout(tick, 2200);
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
        setTimeout(tick, deleting ? 30 : 60);
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

    function runCommand(cmd) {
        const c = cmd.trim().toLowerCase();
        appendLine(`<span class="t-prompt">&gt;</span> <span class="t-cmd">${escapeHtml(cmd.trim())}</span>`);

        if (c === "clear") {
            body.innerHTML = "";
            return;
        }

        if (c === "profile" || c === "cat profile.json" || c === "whoami") {
            appendLine('<span class="t-key">{</span>');
            appendLine('  <span class="t-key">"name"</span>: <span class="t-str">"Odubela Oluwatomiwa (BLAC)"</span>,');
            appendLine('  <span class="t-key">"role"</span>: <span class="t-str">"Backend Systems Engineer &amp; PWA Builder"</span>,');
            appendLine('  <span class="t-key">"location"</span>: <span class="t-str">"Lagos, Nigeria"</span>,');
            appendLine('  <span class="t-key">"coreStack"</span>: [<span class="t-str">"PHP 8.x"</span>, <span class="t-str">"MySQL 3NF"</span>, <span class="t-str">"Laravel"</span>, <span class="t-str">"JavaScript"</span>, <span class="t-str">"PWA"</span>],');
            appendLine('  <span class="t-key">"status"</span>: <span class="t-bool">"Available for High-Impact Projects"</span>');
            appendLine('<span class="t-key">}</span>');
        } else if (c === "stack" || c === "stack.sh") {
            appendLine('<span class="t-str">Backend:</span> PHP 8.x, Laravel, REST API design, session auth');
            appendLine('<span class="t-str">Databases:</span> MySQL 3NF schemas, foreign key indexing, ACID transactions');
            appendLine('<span class="t-str">Frontend/PWA:</span> Vanilla JS, Service Workers, offline storage, dynamic PDF engines');
            appendLine('<span class="t-str">DevOps:</span> Git, GitHub, Linux, Railway, Render CI/CD');
        } else if (c === "projects" || c === "projects.list" || c === "ls") {
            DATA.projects.forEach((p) => {
                appendLine(`<span class="t-key">• ${p.title}</span> — <span class="t-str">${p.badge}</span>`);
            });
            appendLine('<span class="t-info">Click any project below for live architecture specs.</span>');
        } else if (c === "schema" || c === "db") {
            appendLine('<span class="t-key">Database Schema Standard:</span> 3NF normalized tables with foreign keys and ACID guards.');
            appendLine('<span class="t-str">Flagship Model:</span> Smart Attendance System (students, rosters, lecture_sessions, attendance_logs).');
        } else if (c === "contact" || c === "email" || c === "hire") {
            appendLine(`<span class="t-str">Email:</span> ${DATA.hero.email}`);
            appendLine(`<span class="t-str">Phone:</span> ${DATA.hero.phone}`);
            appendLine('<span class="t-str">GitHub:</span> https://github.com/Blaconchain');
            appendLine('<span class="t-str">LinkedIn:</span> https://www.linkedin.com/in/lifewithblac/');
        } else if (c === "help") {
            appendLine('<span class="t-info">Available commands:</span>');
            appendLine('  <span class="t-cmd">profile</span>   - View developer profile JSON');
            appendLine('  <span class="t-cmd">stack</span>     - View core technology matrix');
            appendLine('  <span class="t-cmd">projects</span>  - List production applications');
            appendLine('  <span class="t-cmd">schema</span>    - View relational database blueprint');
            appendLine('  <span class="t-cmd">contact</span>   - Show direct contact channels');
            appendLine('  <span class="t-cmd">clear</span>     - Clear terminal history');
        } else {
            appendLine(`<span class="t-info">Command not recognized: "${escapeHtml(c)}". Type "help" for valid commands.</span>`);
        }
    }

    function escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    document.querySelectorAll(".term-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const cmd = btn.dataset.cmd;
            if (cmd) runCommand(cmd);
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

function getTagClass(tag) {
    const t = tag.toLowerCase();
    if (t.includes("php")) return "tag-php";
    if (t.includes("mysql") || t.includes("sql") || t.includes("3nf") || t.includes("acid")) return "tag-mysql";
    if (t.includes("pwa") || t.includes("service worker") || t.includes("offline")) return "tag-pwa";
    if (t.includes("js") || t.includes("javascript")) return "tag-js";
    if (t.includes("laravel")) return "tag-laravel";
    if (t.includes("firestore") || t.includes("firebase")) return "tag-firestore";
    if (t.includes("pdf") || t.includes("ats")) return "tag-pdf";
    return "tag-default";
}

/* =============== PROJECTS GRID & FILTERING =============== */
function renderProjects(filter = "all") {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const list = filter === "all" ? DATA.projects : DATA.projects.filter((p) => p.category === filter);

    list.forEach((project, idx) => {
        const card = document.createElement("article");
        card.className = "project-card reveal";
        card.style.animationDelay = `${idx * 0.05}s`;

        const primaryImg = project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : null;
        const hasMultiple = project.screenshots && project.screenshots.length > 1;

        card.innerHTML = `
            ${primaryImg ? `
                <div class="project-img-frame">
                    <img src="${primaryImg.src}" alt="${primaryImg.alt}" class="project-img" id="preview-img-${project.id}" loading="lazy">
                    ${hasMultiple ? `
                        <div class="project-gallery-nav">
                            ${project.screenshots.map((s, sIdx) => `
                                <button class="thumb-btn ${sIdx === 0 ? "active" : ""}" data-project="${project.id}" data-src="${s.src}" data-alt="${s.alt}" title="View ${s.alt}" aria-label="View ${s.alt}">
                                    <img src="${s.src}" alt="Thumb ${sIdx + 1}">
                                </button>
                            `).join("")}
                        </div>
                    ` : ""}
                </div>
            ` : ""}

            <div class="project-header-row">
                <h3 class="project-title">
                    <i class="${project.stackIcon || "fa-solid fa-code"} project-title-icon" aria-hidden="true"></i>
                    <span>${project.title}</span>
                </h3>
                <span class="project-category-badge font-mono">${project.badge}</span>
            </div>

            <div class="project-tags">
                ${project.tags.map((t) => `<span class="p-tag font-mono">${t}</span>`).join("")}
            </div>

            <p class="project-desc">${project.desc}</p>

            <div class="project-actions">
                ${project.demo ? `<a class="project-action project-demo font-mono" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
                ${project.source ? `<a class="project-action project-source font-mono" href="${project.source}" target="_blank" rel="noreferrer">GitHub <i class="fa-brands fa-github"></i></a>` : ""}
                <button class="project-action project-details-btn font-mono" data-project-id="${project.id}" type="button">
                    <span>Architecture Deep Dive</span> <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    document.querySelectorAll(".thumb-btn").forEach((thumb) => {
        thumb.addEventListener("click", (e) => {
            e.stopPropagation();
            const pId = thumb.dataset.project;
            const src = thumb.dataset.src;
            const alt = thumb.dataset.alt;
            const mainImg = document.getElementById(`preview-img-${pId}`);
            if (mainImg && src) {
                mainImg.src = src;
                if (alt) mainImg.alt = alt;
            }
            const parent = thumb.closest(".project-gallery-nav");
            if (parent) {
                parent.querySelectorAll(".thumb-btn").forEach((b) => b.classList.remove("active"));
                thumb.classList.add("active");
            }
        });
    });

    document.querySelectorAll(".project-details-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const pId = btn.dataset.projectId;
            if (pId) openProjectModal(pId);
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
        const chip = document.createElement("div");
        chip.className = "stack-chip hover-lift";

        chip.innerHTML = `
            <div class="stack-chip-icon-box">
                <i class="${item.icon}"></i>
            </div>
            <div class="stack-chip-content">
                <div class="stack-chip-title-row">
                    <span class="stack-chip-title">${item.name}</span>
                    <span class="stack-tier-badge font-mono ${item.tierClass}">${item.tier}</span>
                </div>
                <p class="stack-chip-desc">${item.appNote}</p>
                <div class="stack-chip-meta font-mono">
                    <i class="fa-solid fa-code-commit"></i>
                    <span>${item.linkedBuild}</span>
                </div>
            </div>
        `;
        grid.appendChild(chip);
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
    const content = document.getElementById("modal-content-body");
    if (!project || !modal || !content) return;

    content.innerHTML = `
        <div class="modal-proj-head">
            <div>
                <h3 class="modal-proj-title"><i class="${project.stackIcon || "fa-solid fa-code"}" style="color:var(--accent); margin-right:8px;"></i>${project.title}</h3>
                <span class="project-badge ${project.badgeClass}">${project.badge}</span>
            </div>
        </div>
        <p class="modal-proj-desc">${project.desc}</p>
        
        ${project.screenshots && project.screenshots.length > 0 ? `
            <div class="modal-proj-imgs">
                ${project.screenshots.map((s) => `<img src="${s.src}" alt="${s.alt}">`).join("")}
            </div>
        ` : ""}

        <div class="modal-proj-sec">
            <h4>Problem &amp; Engineering Challenge</h4>
            <p>${project.deepDive.problem}</p>
        </div>

        <div class="modal-proj-sec">
            <h4>System Architecture &amp; Database Design</h4>
            <p>${project.deepDive.architecture}</p>
        </div>

        <div class="modal-proj-sec">
            <h4>Key Highlights &amp; Accomplishments</h4>
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
    document.body.style.overflow = "hidden";
}

function initModals() {
    const projectModal = document.getElementById("project-modal");
    const modalCard = document.getElementById("modal-card-element");
    const closeBtn = document.getElementById("modal-close-btn");

    function closeModal() {
        if (projectModal) {
            projectModal.classList.remove("active");
            projectModal.setAttribute("aria-hidden", "true");
        }
        document.body.style.overflow = "";
    }

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (projectModal) {
        projectModal.addEventListener("click", (e) => {
            if (e.target === projectModal) closeModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // Touch gesture dismiss for bottom sheet on mobile
    if (modalCard) {
        let startY = 0;
        let currentY = 0;
        let isDragging = false;

        modalCard.addEventListener("touchstart", (e) => {
            if (modalCard.scrollTop === 0) {
                startY = e.touches[0].clientY;
                isDragging = true;
            }
        }, { passive: true });

        modalCard.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            currentY = e.touches[0].clientY;
            const diff = currentY - startY;
            if (diff > 0 && modalCard.scrollTop === 0) {
                modalCard.style.transform = `translateY(${Math.min(diff, 200)}px)`;
            }
        }, { passive: true });

        modalCard.addEventListener("touchend", () => {
            if (!isDragging) return;
            isDragging = false;
            const diff = currentY - startY;
            if (diff > 90) {
                modalCard.style.transform = "";
                closeModal();
            } else {
                modalCard.style.transform = "";
            }
        }, { passive: true });
    }
}

/* =============== TIMELINE & CREDENTIALS =============== */
function buildExperience() {
    const timeline = document.getElementById("timeline");
    if (timeline && DATA.experience.tech) {
        timeline.innerHTML = "";
        DATA.experience.tech.forEach((entry) => {
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
    }

    const stratTimeline = document.getElementById("strategy-timeline");
    if (stratTimeline && DATA.experience.strategy) {
        stratTimeline.innerHTML = "";
        DATA.experience.strategy.forEach((entry) => {
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
            stratTimeline.appendChild(card);
        });
    }

    const eduCards = document.getElementById("edu-cards");
    if (eduCards) {
        eduCards.innerHTML = "";
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

    if (certsList && DATA.credentials.certifications) {
        certsList.innerHTML = DATA.credentials.certifications.map((item) => `
            <div class="credential-item">
                <strong>${item.title}</strong>
                <span class="credential-meta">${item.meta}</span>
                ${item.desc ? `<p class="credential-desc">${item.desc}</p>` : ""}
            </div>
        `).join("");
    }

    if (awardsList && DATA.credentials.awards) {
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
    const container = document.getElementById("contact-links-col");
    if (!container) return;
    container.innerHTML = "";

    DATA.contactLinks.forEach((item) => {
        const card = document.createElement("a");
        const t = item.title.toLowerCase();
        const netClass = t.includes("linkedin") ? "net-linkedin"
            : t.includes("github") ? "net-github"
            : t.includes("x") || t.includes("twitter") ? "net-twitter"
            : t.includes("instagram") ? "net-instagram"
            : t.includes("phone") || t.includes("whatsapp") ? "net-whatsapp"
            : "net-cv";

        card.className = `contact-link-card hover-lift ${netClass}${item.highlight ? " highlight-card" : ""}`;
        card.href = item.href;
        if (item.external && item.href.startsWith("http")) {
            card.target = "_blank";
            card.rel = "noreferrer";
        }

        card.innerHTML = `
            <div class="contact-icon-frame">
                <i class="${item.icon}"></i>
            </div>
            <div class="contact-card-text">
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
                showToast("Email address copied to clipboard!", "fa-copy");
                const span = copyBtn.querySelector("span");
                if (span) {
                    span.textContent = "Copied!";
                    setTimeout(() => { span.textContent = "Copy"; }, 2000);
                }
            }).catch(() => {
                showToast("Email: " + DATA.hero.email, "fa-envelope");
            });
        });
    }

    const topicChips = document.getElementById("topic-chips");
    const subjectInput = document.getElementById("sender-subject");
    if (topicChips && subjectInput) {
        topicChips.addEventListener("click", (e) => {
            const btn = e.target.closest(".topic-chip");
            if (btn) {
                topicChips.querySelectorAll(".topic-chip").forEach(c => c.classList.remove("active"));
                btn.classList.add("active");
                const topic = btn.dataset.topic;
                if (topic) {
                    subjectInput.value = `${topic} Inquiry`;
                }
            }
        });
    }

    const form = document.getElementById("direct-message-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("sender-name").value.trim();
            const email = document.getElementById("sender-email").value.trim();
            const subject = subjectInput ? subjectInput.value.trim() : "Portfolio Engineering Inquiry";
            const msg = document.getElementById("sender-msg").value.trim();

            if (!name || !email || !msg) {
                showToast("Please fill in all fields before sending.", "fa-triangle-exclamation", "warning");
                return;
            }

            showToast(`Thank you, ${name}! Your message is prepared.`, "fa-paper-plane");
            
            const mailtoUrl = `mailto:${DATA.hero.email}?subject=${encodeURIComponent(subject + " — from " + name)}&body=${encodeURIComponent(msg + "\n\nFrom: " + name + " (" + email + ")")}`;
            
            setTimeout(() => {
                window.location.href = mailtoUrl;
            }, 500);

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
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "Africa/Lagos"
        });
        element.textContent = `Lagos (WAT) ${time}`;
    }
    update();
    setInterval(update, 1000);
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
function loadDataAndInit() {
    const totalProjects = DATA.projects ? DATA.projects.length : 0;
    if (DATA.metrics) {
        DATA.metrics.forEach(m => {
            if (m.label === "Production Builds" || m.label === "Featured Projects" || m.label === "Featured Builds") {
                m.value = String(totalProjects);
                m.target = totalProjects;
            }
        });
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

    requestAnimationFrame(() => {
        initReveal();
        animateMetrics();
    });
}

document.addEventListener("DOMContentLoaded", loadDataAndInit);
