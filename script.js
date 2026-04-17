/* =============================================
   BLAC PORTFOLIO - script.js
   ============================================= */

const DATA = {
    typewriterRoles: [
        "Backend Engineer",
        "PHP & MySQL Architect",
        "Web3 Community Strategist",
        "Database Designer",
        "Digital Systems Builder"
    ],
    terminalLines: [
        { type: "prompt", text: "cat profile.json" },
        { type: "obj-open", text: "{" },
        { type: "pair", key: '  "name"', val: '"Odubela Oluwatomiwa"', valType: "str" },
        { type: "pair", key: '  "alias"', val: '"BLAC"', valType: "str" },
        { type: "pair", key: '  "role"', val: '"Backend Dev & Web3 Strategist"', valType: "str" },
        { type: "pair", key: '  "school"', val: '"MAPOLY - Computer Science"', valType: "str" },
        { type: "pair", key: '  "twitter"', val: '"@Lifewithblac"', valType: "str" },
        { type: "pair", key: '  "followers"', val: "3500", valType: "num" },
        { type: "pair", key: '  "available"', val: "true", valType: "bool" },
        { type: "obj-close", text: "}" }
    ],
    projects: [
        {
            title: "BlacRate Pro",
            desc: "PWA-powered crypto-to-Naira calculator built for OTC traders. Real-time rates, profit margins, and offline support - zero fluff, all function.",
            badge: "PWA | Backend",
            badgeClass: "badge-pwa",
            icon: "&#9783;",
            tags: ["PHP", "JavaScript", "PWA", "Crypto API"],
            link: "https://blaconchain.github.io/blacrate-pro/",
            external: true
        },
        {
            title: "Receipt Pro",
            desc: "Transactional backend system with enforced SQL data integrity. Built with PHP prepared statements, rollback logic, and bulletproof receipt generation.",
            badge: "Backend",
            badgeClass: "badge-backend",
            icon: "&#128203;",
            tags: ["PHP", "MySQL", "Transactions", "SQL"],
            link: "https://github.com/BlacOnchain/receipt-pro",
            external: true
        },
        {
            title: "Web3 Game Reviews",
            desc: "Deep tokenomics analysis and P2E mechanics breakdowns for blockchain gamers. Research-grade content that drove community growth across Discord and Twitter.",
            badge: "Content | Web3",
            badgeClass: "badge-web3",
            icon: "&#9670;",
            tags: ["Research", "DeFi", "P2E", "Tokenomics"],
            link: "assets/Case_Study_Web3_Gaming.pdf",
            external: true
        }
    ],
    experience: [
        {
            company: "Crypto Dungeon",
            role: "Web3 Community & Partnerships Contributor",
            time: "Nov 2024 - Present",
            points: [
                "Architected community engagement systems for NFT collectors and Web3 builders.",
                "Closed strategic partnership with Create With Me AI for NFT integrations.",
                "Executed high-conversion Twitter campaigns increasing project visibility.",
                "Ran due diligence research on Web3 projects before collaboration deals."
            ]
        },
        {
            company: "Independent Web3 Projects",
            role: "Community Moderator & Content Creator",
            time: "Oct 2023 - Present",
            points: [
                "Maintained 24/7 global moderation across Discord and Telegram for P2E platforms.",
                "Authored Twitter threads and blog deep-dives on DeFi, NFTs, and blockchain gaming.",
                "Organised AMA sessions and giveaway campaigns that drove measurable user signups.",
                "Delivered real-time trend reports to project leadership for strategic pivots."
            ]
        }
    ],
    education: [
        {
            school: "Moshood Abiola Polytechnic (MAPOLY)",
            degree: "ND Computer Science - In Progress",
            desc: "Database management systems, backend engineering, and core computing fundamentals."
        },
        {
            school: "Federal Science & Technical College, Ijebu Imushin",
            degree: "WAEC & Technical Certificate",
            desc: "Foundational technology training that set the trajectory for a career in engineering."
        }
    ],
    coreStack: [
        { name: "PHP & Laravel", pct: 90 },
        { name: "SQL & Database Design", pct: 92 },
        { name: "Web3 Community Growth", pct: 95 },
        { name: "Content Strategy", pct: 80 },
        { name: "JavaScript / Node.js", pct: 65 }
    ],
    skills: [
        "PHP", "MySQL", "SQL", "Node.js", "Laravel", "Git",
        "Discord API", "REST APIs", "Community Management",
        "Content Strategy", "Twitter Campaigns", "Web3 Ecosystem",
        "Figma (UI review)", "X Analytics", "DeFi Research"
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
                window.setTimeout(tick, 2000);
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

        window.setTimeout(tick, deleting ? 40 : 80);
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
        window.setTimeout(nextLine, lineIndex === 1 ? 600 : 120);
    }

    window.setTimeout(nextLine, 900);
}

function buildProjects() {
    const grid = document.getElementById("projects-grid");

    DATA.projects.forEach((project, index) => {
        const card = document.createElement("a");
        card.href = project.link;
        card.target = project.external ? "_blank" : "_self";
        card.rel = "noopener noreferrer";
        card.className = "project-card reveal";
        card.style.transitionDelay = `${index * 0.08}s`;
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
                <div class="project-arrow"><i class="fa-solid fa-arrow-right"></i></div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function buildExperience() {
    const timeline = document.getElementById("timeline");

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
    DATA.education.forEach((entry, index) => {
        const card = document.createElement("div");
        card.className = "edu-card reveal";
        card.style.transitionDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="edu-school">${entry.school}</div>
            <div class="edu-degree">${entry.degree}</div>
            <p class="edu-desc">${entry.desc}</p>
        `;
        eduCards.appendChild(card);
    });
}

function buildStack() {
    const barsWrap = document.getElementById("stack-bars");

    DATA.coreStack.forEach((item, index) => {
        const barItem = document.createElement("div");
        barItem.className = "stack-bar-item reveal";
        barItem.style.transitionDelay = `${index * 0.07}s`;
        barItem.innerHTML = `
            <div class="stack-bar-header">
                <span>${item.name}</span>
                <span class="stack-bar-pct">${item.pct}%</span>
            </div>
            <div class="bar-track">
                <div class="bar-fill-anim" data-pct="${item.pct}"></div>
            </div>
        `;
        barsWrap.appendChild(barItem);
    });

    const pillsWrap = document.getElementById("stack-pills");
    DATA.skills.forEach((skill) => {
        const pill = document.createElement("span");
        pill.className = "s-pill";
        pill.textContent = skill;
        pillsWrap.appendChild(pill);
    });
}

function initReveal() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");
            const bars = entry.target.querySelectorAll(".bar-fill-anim");
            bars.forEach((bar) => {
                window.setTimeout(() => {
                    bar.style.width = `${bar.dataset.pct}%`;
                }, 100);
            });
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const bar = entry.target.querySelector(".bar-fill-anim");
            if (bar) {
                window.setTimeout(() => {
                    bar.style.width = `${bar.dataset.pct}%`;
                }, 100);
            }
            barObserver.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".stack-bar-item").forEach((element) => barObserver.observe(element));
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
    }, { threshold: 0.4 });

    sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
    initCanvas();
    initNavbar();
    initTypewriter();
    initTerminal();
    buildProjects();
    buildExperience();
    buildStack();
    initClock();
    initActiveNav();

    window.requestAnimationFrame(() => {
        initReveal();
    });
});
