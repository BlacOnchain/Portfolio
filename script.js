/* =============================================
   BLAC PORTFOLIO - script.js
   ============================================= */

const DATA = {
    hero: {
        brand: "BLAC",
        name: "Odubela Oluwatomiwa",
        title: "Backend Developer | Digital Strategist",
        availability: "Open to backend, operations, and digital rollout work",
        bio: "Backend developer and digital strategist focused on PHP, MySQL, database architecture, and rollout systems that keep products clear, useful, and organised. I bring together backend engineering, workflow discipline, and growth execution across internships, campus campaigns, and Web3 partnerships.",
        contactBody: "If you need clean backend logic, stronger database structure, rollout support, or organised digital execution, let&apos;s build it properly from day one.",
        email: "odubelaotomiwa508@gmail.com",
        phone: "09125808797",
        cv: "assets/Oluwatomiwa_CV.pdf"
    },
    typewriterRoles: [
        "Backend Developer",
        "PHP & Laravel Builder",
        "MySQL Database Architect",
        "Digital Rollout Strategist",
        "Web3 Growth Strategist"
    ],
    metrics: [
        {
            value: "4",
            label: "CV Roles"
        },
        {
            value: "3",
            label: "Featured Builds"
        },
        {
            value: "C1",
            label: "English Level"
        }
    ],
    terminalLines: [
        { type: "prompt", text: "cat profile.json" },
        { type: "obj-open", text: "{" },
        { type: "pair", key: '  "name"', val: '"Odubela Oluwatomiwa"', valType: "str" },
        { type: "pair", key: '  "role"', val: '"Backend Developer | Digital Strategist"', valType: "str" },
        { type: "pair", key: '  "focus"', val: '"PHP, MySQL, rollout systems"', valType: "str" },
        { type: "pair", key: '  "instagram"', val: '"@lifewith_blac"', valType: "str" },
        { type: "pair", key: '  "english"', val: '"C1 Advanced"', valType: "str" },
        { type: "pair", key: '  "available"', val: "true", valType: "bool" },
        { type: "obj-close", text: "}" }
    ],
    socials: [
        {
            label: "GitHub",
            href: "https://github.com/Blaconchain",
            icon: "fa-brands fa-github"
        },
        {
            label: "X",
            href: "https://x.com/Lifewithblac",
            icon: "fa-brands fa-x-twitter"
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/lifewith_blac/",
            icon: "fa-brands fa-instagram"
        },
        {
            label: "Email",
            href: "mailto:odubelaotomiwa508@gmail.com",
            icon: "fa-solid fa-envelope"
        },
        {
            label: "Phone",
            href: "tel:09125808797",
            icon: "fa-solid fa-phone"
        }
    ],
    projects: [
        {
            title: "BlacRate Pro",
            desc: "A Progressive Web App for OTC traders to calculate crypto-to-naira rates with fast, practical access and offline-first support.",
            badge: "PWA | Trading Tool",
            badgeClass: "badge-pwa",
            icon: "BR",
            tags: ["PWA", "Rates", "Utility"],
            link: "https://github.com/Blaconchain/blacrate-pro",
            external: true
        },
        {
            title: "Receipt Pro",
            desc: "A backend receipt management concept focused on SQL data integrity, secure transaction logging, and cleaner operational records.",
            badge: "Backend | SQL",
            badgeClass: "badge-backend",
            icon: "RP",
            tags: ["PHP", "MySQL", "Integrity"],
            link: "https://github.com/Blaconchain/receipt-pro",
            external: true
        },
        {
            title: "Smart Attendance System",
            desc: "An academic QR-code attendance system built with PHP and MySQL to automate student logging and remove manual paperwork for lecturers.",
            badge: "Academic | Automation",
            badgeClass: "badge-academic",
            icon: "SA",
            tags: ["PHP", "QR", "MAPOLY"],
            cta: "Internal academic project"
        }
    ],
    experience: [
        {
            company: "Crypto Dungeon",
            role: "Partnerships Contributor",
            time: "11/2024 - 11/2025",
            points: [
                "Led community engagement and digital moderation for Web3 enthusiasts and NFT collectors.",
                "Managed partnership conversations and growth strategy support for integrations like Create With Me AI."
            ]
        },
        {
            company: "Cowrywise",
            role: "Campus Ambassador Lead",
            time: "11/2025 - Present",
            points: [
                "Selected to coordinate brand awareness and digital savings adoption across the campus community.",
                "Managed campaign logistics, promotional materials, and event operations with a structured execution mindset."
            ]
        },
        {
            company: "Olak Tech",
            role: "Backend Developer Intern (SIWES)",
            time: "2025 - 2025",
            points: [
                "Collaborated on backend engineering and relational database normalization with PHP and MySQL.",
                "Handled technical documentation, system logging, and workflow tracking to support project delivery."
            ]
        },
        {
            company: "oSHAMO",
            role: "Early Rollout Strategist",
            time: "11/2024 - 08/2025",
            points: [
                "Planned organic digital rollout schedules across social channels to maximise promotional reach.",
                "Tracked content deliverables and launch timing with an operations-first approach to execution."
            ]
        }
    ],
    education: [
        {
            school: "Moshood Abiola Polytechnic (MAPOLY)",
            degree: "ND in Computer Science",
            meta: "2023 - 2025",
            desc: "Core coursework includes Database Management Systems, Systems Analysis & Design, Web Development, and Digital Marketing Logic."
        }
    ],
    skillCategories: [
        {
            title: "Backend",
            items: [
                { name: "PHP", icon: "fa-brands fa-php", pct: 92 },
                { name: "Laravel", icon: "fa-solid fa-layer-group", pct: 88 },
                { name: "MySQL", icon: "fa-solid fa-database", pct: 94 },
                { name: "Database Design", icon: "fa-solid fa-diagram-project", pct: 93 },
                { name: "API Workflows", icon: "fa-solid fa-plug-circle-check", pct: 84 }
            ]
        },
        {
            title: "Growth & Rollout",
            items: [
                { name: "Digital Rollout", icon: "fa-solid fa-rocket", pct: 88 },
                { name: "Community Ops", icon: "fa-solid fa-users-gear", pct: 86 },
                { name: "Content Strategy", icon: "fa-solid fa-pen-ruler", pct: 82 },
                { name: "Partnerships", icon: "fa-solid fa-handshake-angle", pct: 80 }
            ]
        },
        {
            title: "Tools, Workflow & Communication",
            items: [
                { name: "Git / GitHub", icon: "fa-brands fa-github", pct: 85 },
                { name: "Project Tracking", icon: "fa-solid fa-list-check", pct: 83 },
                { name: "Documentation", icon: "fa-solid fa-file-lines", pct: 84 },
                { name: "PWA Support", icon: "fa-solid fa-mobile-screen-button", pct: 79 },
                { name: "English C1", icon: "fa-solid fa-language", pct: 91 }
            ]
        }
    ],
    credentials: {
        certifications: [
            {
                title: "Backend Engineering & Database Architecture",
                meta: "2025"
            },
            {
                title: "C1 Advanced English Certification (EF SET)",
                meta: "2026"
            },
            {
                title: "Google Digital Marketing & E-commerce Professional Certificate",
                meta: "Google"
            },
            {
                title: "Social Media Marketing Certification",
                meta: "HubSpot Academy"
            },
            {
                title: "Google Project Management Professional Certificate",
                meta: "Google"
            },
            {
                title: "Asana Project Management Certificate",
                meta: "Asana"
            }
        ],
        awards: [
            {
                title: "Best Content Strategy Award",
                meta: "Moshood Abiola Polytechnic | 2025",
                desc: "Recognized for innovative rollout plans that improved community retention and organic growth."
            },
            {
                title: "Cowrywise Campus Ambassador",
                meta: "Cowrywise | 2025",
                desc: "Selected for a leadership role supporting financial literacy and digital savings adoption at MAPOLY."
            },
            {
                title: "Web3 Contributor of the Year",
                meta: "Moshood Abiola Polytechnic | 2025",
                desc: "Recognized for strong technical and community contributions within decentralized ecosystems."
            }
        ],
        volunteer: [
            {
                title: "Open Source Contributor",
                meta: "GitHub",
                desc: "Maintains and contributes to backend repositories with a focus on PHP and SQL integrity."
            }
        ]
    },
    contactLinks: [
        {
            title: "Phone",
            value: "09125808797",
            href: "tel:09125808797",
            icon: "fa-solid fa-phone"
        },
        {
            title: "GitHub",
            value: "github.com/Blaconchain",
            href: "https://github.com/Blaconchain",
            icon: "fa-brands fa-github",
            external: true
        },
        {
            title: "X",
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
            title: "Full Resume / CV",
            value: "Download PDF",
            href: "assets/Oluwatomiwa_CV.pdf",
            icon: "fa-solid fa-file-lines",
            external: true,
            highlight: true
        }
    ]
};

function initCanvas() {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    let width;
    let height;
    let particles;

    const colors = ["#00ff88", "#00d4ff", "#00cc6a"];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function makeParticle() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.5 + 0.4,
            c: colors[Math.floor(Math.random() * colors.length)],
            a: Math.random() * 0.5 + 0.15
        };
    }

    function initParticles() {
        particles = Array.from({ length: 120 }, makeParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i += 1) {
            for (let j = i + 1; j < particles.length; j += 1) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0,255,136,${0.06 * (1 - dist / 130)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > width) {
                particle.vx *= -1;
            }

            if (particle.y < 0 || particle.y > height) {
                particle.vy *= -1;
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
            ctx.fillStyle = particle.c;
            ctx.globalAlpha = particle.a;
            ctx.fill();
            ctx.globalAlpha = 1;
        });

        window.requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();
    window.addEventListener("resize", resize);
}

function initNavbar() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
}

function setElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

function populateStaticContent() {
    const { hero } = DATA;

    document.title = `${hero.brand} | Backend Developer & Digital Strategist`;
    setElementText("hero-profile-label", hero.brand);
    setElementText("hero-profile-sub", hero.name);
    setElementText("availability-text", hero.availability);
    setElementText("hero-bio", hero.bio);
    setElementText("footer-summary", "BACKEND DEVELOPER | DIGITAL STRATEGIST | SYSTEMS, ROLLOUT, GROWTH");

    const heroName = document.getElementById("hero-name");
    if (heroName) {
        heroName.textContent = hero.brand;
        heroName.setAttribute("data-text", hero.brand);
    }

    const contactBody = document.getElementById("contact-body");
    if (contactBody) {
        contactBody.innerHTML = hero.contactBody;
    }

    const heroEmailLink = document.getElementById("hero-email-link");
    if (heroEmailLink) {
        heroEmailLink.href = `mailto:${hero.email}`;
    }

    const contactEmailBig = document.getElementById("contact-email-big");
    if (contactEmailBig) {
        contactEmailBig.href = `mailto:${hero.email}`;
        contactEmailBig.innerHTML = `${hero.email}<i class="fa-solid fa-arrow-up-right-from-square"></i>`;
    }

    document.querySelectorAll("[data-cv-link]").forEach((link) => {
        link.href = hero.cv;
    });
}

function buildHeroSocials() {
    const socials = document.getElementById("hero-socials");
    if (!socials) {
        return;
    }

    socials.innerHTML = DATA.socials.map((item) => `
        <a href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""} title="${item.label}">
            <i class="${item.icon}"></i>
        </a>
    `).join("");
}

function buildMetrics() {
    const metricsRow = document.getElementById("metrics-row");
    if (!metricsRow) {
        return;
    }

    metricsRow.innerHTML = DATA.metrics.map((metric) => `
        <div class="metric-pill">
            <span class="metric-val">${metric.value}</span>
            <span class="metric-label">${metric.label}</span>
        </div>
    `).join("");
}

function initTypewriter() {
    const element = document.getElementById("typewriter");
    const roles = DATA.typewriterRoles;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        const role = roles[roleIndex];

        if (!deleting) {
            element.textContent = role.slice(0, charIndex + 1);
            charIndex += 1;

            if (charIndex === role.length) {
                deleting = true;
                window.setTimeout(tick, 1800);
                return;
            }
        } else {
            element.textContent = role.slice(0, charIndex - 1);
            charIndex -= 1;

            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        window.setTimeout(tick, deleting ? 40 : 75);
    }

    tick();
}

function initTerminal() {
    const body = document.getElementById("term-body");
    const lines = DATA.terminalLines;
    let lineIndex = 0;

    function renderLine(line) {
        const span = document.createElement("span");
        span.className = "t-line";

        if (line.type === "prompt") {
            span.innerHTML = `<span class="t-prompt">&gt; </span><span class="t-cmd">${line.text}</span>`;
        } else if (line.type === "obj-open" || line.type === "obj-close") {
            span.innerHTML = `<span class="t-cmd">${line.text}</span>`;
        } else if (line.type === "pair") {
            let valueHtml;

            if (line.valType === "str") {
                valueHtml = `<span class="t-str">${line.val}</span>`;
            } else if (line.valType === "num") {
                valueHtml = `<span class="t-num">${line.val}</span>`;
            } else if (line.valType === "bool") {
                valueHtml = `<span class="t-bool">${line.val}</span>`;
            } else {
                valueHtml = `<span class="t-val">${line.val}</span>`;
            }

            span.innerHTML = `<span class="t-key">${line.key}</span><span class="t-cmd">: </span>${valueHtml}<span class="t-cmd">,</span>`;
        }

        body.appendChild(span);
    }

    function nextLine() {
        if (lineIndex >= lines.length) {
            return;
        }

        renderLine(lines[lineIndex]);
        lineIndex += 1;
        window.setTimeout(nextLine, lineIndex === 1 ? 650 : 140);
    }

    window.setTimeout(nextLine, 900);
}

function buildProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) {
        return;
    }

    DATA.projects.forEach((project, index) => {
        const card = document.createElement(project.link ? "a" : "article");
        card.className = `project-card reveal${project.link ? "" : " static-card"}`;
        card.style.transitionDelay = `${index * 0.08}s`;

        if (project.link) {
            card.href = project.link;
            card.target = project.external ? "_blank" : "_self";
            card.rel = project.external ? "noopener noreferrer" : "";
        }

        card.innerHTML = `
            <div class="project-card-top">
                <div class="project-icon">${project.icon}</div>
                <span class="project-badge ${project.badgeClass}">${project.badge}</span>
            </div>
            <div class="project-title">${project.title}</div>
            <p class="project-desc">${project.desc}</p>
            <div class="project-footer">
                <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="p-tag">${tag}</span>`).join("")}
                </div>
                <div class="project-arrow${project.link ? "" : " project-note"}">${project.link ? '<i class="fa-solid fa-arrow-right"></i>' : project.cta}</div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function buildExperience() {
    const timeline = document.getElementById("timeline");
    if (!timeline) {
        return;
    }

    DATA.experience.forEach((entry, index) => {
        const card = document.createElement("div");
        card.className = "timeline-card reveal";
        card.style.transitionDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="tl-time">${entry.time}</div>
            <div class="tl-company">${entry.company}</div>
            <div class="tl-role">${entry.role}</div>
            <ul class="tl-list">
                ${entry.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
        `;
        timeline.appendChild(card);
    });

    const eduCards = document.getElementById("edu-cards");
    if (!eduCards) {
        return;
    }

    DATA.education.forEach((entry) => {
        const card = document.createElement("div");
        card.className = "edu-card";
        card.innerHTML = `
            <div class="edu-school">${entry.school}</div>
            <div class="edu-degree">${entry.degree}</div>
            <div class="edu-meta">${entry.meta}</div>
            <p class="edu-desc">${entry.desc}</p>
        `;
        eduCards.appendChild(card);
    });
}

function buildCredentials() {
    const sections = [
        { id: "certifications-list", items: DATA.credentials.certifications },
        { id: "awards-list", items: DATA.credentials.awards },
        { id: "volunteer-list", items: DATA.credentials.volunteer }
    ];

    sections.forEach((section) => {
        const container = document.getElementById(section.id);
        if (!container) {
            return;
        }

        container.innerHTML = section.items.map((item) => `
            <div class="credential-item">
                <strong>${item.title}</strong>
                <span class="credential-meta">${item.meta}</span>
                ${item.desc ? `<p class="credential-desc">${item.desc}</p>` : ""}
            </div>
        `).join("");
    });
}

function buildStack() {
    const categoriesWrap = document.getElementById("stack-categories");
    if (!categoriesWrap) {
        return;
    }

    categoriesWrap.innerHTML = DATA.skillCategories.map((category, categoryIndex) => `
        <section class="stack-category reveal" style="transition-delay: ${categoryIndex * 0.08}s">
            <h3 class="stack-category-title">${category.title}</h3>
            <div class="stack-card-grid">
                ${category.items.map((item, itemIndex) => `
                    <article class="skill-card reveal" style="transition-delay: ${(categoryIndex * 0.08) + (itemIndex * 0.05)}s; --glow-delay: ${(categoryIndex * 0.35) + (itemIndex * 0.12)}s;">
                        <div class="skill-card-head">
                            <i class="${item.icon} skill-card-icon"></i>
                            <span class="skill-card-name">${item.name}</span>
                        </div>
                        <div class="skill-card-meta">
                            <span>Proficiency</span>
                            <strong>${item.pct}%</strong>
                        </div>
                        <div class="skill-progress">
                            <div class="skill-progress-fill" data-width="${item.pct}"></div>
                        </div>
                    </article>
                `).join("")}
            </div>
        </section>
    `).join("");
}

function buildContactLinks() {
    const contactLinks = document.getElementById("contact-links");
    if (!contactLinks) {
        return;
    }

    DATA.contactLinks.forEach((item) => {
        const card = document.createElement(item.href ? "a" : "article");
        card.className = `contact-link-card${item.highlight ? " highlight-card" : ""}${item.href ? "" : " static-card"}`;

        if (item.href) {
            card.href = item.href;
            if (item.external && item.href.startsWith("http")) {
                card.target = "_blank";
                card.rel = "noreferrer";
            } else if (item.external) {
                card.target = "_blank";
                card.rel = "noreferrer";
            }
        }

        card.innerHTML = `
            <i class="${item.icon}"></i>
            <div>
                <strong>${item.title}</strong>
                <span>${item.value}</span>
            </div>
            <i class="fa-solid ${item.href ? "fa-arrow-right" : "fa-circle"} arrow-r"></i>
        `;

        contactLinks.appendChild(card);
    });
}

function initReveal() {
    function animateBars(scope) {
        const bars = scope.querySelectorAll(".bar-fill-anim, .skill-progress-fill");
        bars.forEach((bar) => {
            if (bar.dataset.animated === "true") {
                return;
            }

            bar.dataset.animated = "true";
            window.setTimeout(() => {
                bar.style.width = `${bar.dataset.width}%`;
            }, 100);
        });
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");
            animateBars(entry.target);
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

function initClock() {
    const element = document.getElementById("live-clock");

    function update() {
        if (!element) {
            return;
        }

        const now = new Date();
        const time = now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "Africa/Lagos"
        });
        element.textContent = `WAT ${time}`;
    }

    update();
    window.setInterval(update, 1000);
}

function initActiveNav() {
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            links.forEach((link) => {
                link.style.color = "";
            });

            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (active) {
                active.style.color = "var(--green)";
            }
        });
    }, { threshold: 0.35 });

    sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
    populateStaticContent();
    initCanvas();
    initNavbar();
    buildHeroSocials();
    buildMetrics();
    initTypewriter();
    initTerminal();
    buildProjects();
    buildExperience();
    buildCredentials();
    buildStack();
    buildContactLinks();
    initClock();
    initActiveNav();

    window.requestAnimationFrame(() => {
        initReveal();
    });
});

