const data = {
    name: "BLAC",
    handle: "@Lifewithblac",
    title: "Backend Developer and Web3 Strategist",
    photo: "images/profile.jpg",
    email: "Odubelatomiwa508@gmail.com",
    github: "https://github.com/BlacOnchain",
    discord: "https://discord.com/users/1131931766299566150",
    twitter: "https://x.com/lifewithblac",
    cvLink: "assets/Oluwatomiwa_CV.pdf",
    about: "I am Blac, a backend developer focused on PHP, Laravel, and database architecture, with practical experience in Web3 community strategy and growth. I build systems that stay reliable behind the scenes and help projects communicate clearly in public.",
    coreStack: [
        { id: "php", name: "PHP and Laravel", level: "90%" },
        { id: "sql", name: "SQL and DB Architecture", level: "92%" },
        { id: "web3", name: "Web3 Community Growth", level: "95%" },
        { id: "content", name: "Content Strategy", level: "80%" }
    ],
    education: [
        {
            school: "Moshood Abiola Polytechnic (MAPOLY), Abeokuta",
            degree: "ND in Computer Science - In Progress",
            desc: "Focused on computing fundamentals, database systems, and backend engineering."
        },
        {
            school: "Federal Science and Technical College",
            degree: "WAEC and Technical Certificate",
            desc: "Built an early foundation in technology and hands-on problem solving."
        }
    ],
    experience: [
        {
            company: "Crypto Dungeon",
            role: "Web3 Community and Partnerships Contributor",
            time: "Nov 2024 - Present",
            points: [
                "Led engagement for Web3 enthusiasts and NFT collectors.",
                "Negotiated strategic partnerships for NFT integrations.",
                "Researched emerging Web3 projects for collaboration opportunities.",
                "Executed Twitter campaigns to improve visibility and adoption."
            ]
        },
        {
            company: "Independent Web3 Project",
            role: "Community Moderator and Content Creator",
            time: "Oct 2023 - Present",
            points: [
                "Managed discussions for gaming communities across active channels.",
                "Created Twitter threads and blog content with educational focus.",
                "Organized AMA sessions and giveaways to attract new members.",
                "Tracked community trends and surfaced insights to project leads."
            ]
        }
    ],
    projects: [
        {
            title: "BlacRate Pro",
            desc: "PWA-enabled crypto-to-naira rate and profit calculator for OTC traders.",
            img: "images/blacrate.jpg.jfif",
            link: "https://blaconchain.github.io/blacrate-pro/",
            cta: "Launch Project",
            placeholder: "https://via.placeholder.com/400x200?text=BlacRate+Pro"
        },
        {
            title: "Web3 Game Reviews",
            desc: "Case study content analyzing tokenomics and mechanics for blockchain gamers.",
            img: "images/game.jpg",
            link: "assets/Case_Study_Web3_Gaming.pdf",
            cta: "Open Case Study",
            placeholder: "https://via.placeholder.com/400x200?text=Web3+Game+Reviews"
        },
        {
            title: "Receipt Pro",
            desc: "Backend system concept centered on SQL data integrity and transaction safety.",
            img: "images/receipt.jpg",
            link: "assets/Case_Study_Receipt_Pro.pdf",
            cta: "Open Case Study",
            placeholder: "https://via.placeholder.com/400x200?text=Receipt+Pro"
        }
    ],
    skills: [
        { name: "Backend Logic", target: "php" },
        { name: "Database Design", target: "sql" },
        { name: "Web3 Ecosystem", target: "web3" },
        { name: "Community Strategy", target: "web3" },
        { name: "Content Strategy", target: "content" },
        { name: "Social Media Marketing", target: "content" },
        { name: "Data Integrity", target: "sql" },
        { name: "PHP and MySQL", target: "php" }
    ],
    awards: [
        {
            title: "Web3 Contributor of the Year",
            desc: "Recognized for exceptional community-building efforts."
        },
        {
            title: "Best Content Strategy Award",
            desc: "Acknowledged for innovative content across multiple projects."
        }
    ]
};

function renderExperienceCard(item) {
    return `
        <div class="card span-2">
            <h3>${item.time}</h3>
            <h2>${item.company}</h2>
            <p class="inline-accent">${item.role}</p>
            <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </div>
    `;
}

function renderEducationCard(item) {
    return `
        <article class="education-item">
            <h4>${item.school}</h4>
            <p class="education-meta">${item.degree}</p>
            <p>${item.desc}</p>
        </article>
    `;
}

function renderProjectCard(project) {
    return `
        <a class="project-item" href="${project.link}" target="_blank" rel="noreferrer">
            <div class="project-overlay">
                <div class="view-btn">${project.cta}</div>
            </div>
            <img
                src="${project.img}"
                class="project-img"
                alt="${project.title} preview"
                onerror="this.src='${project.placeholder}'"
            >
            <div class="project-content">
                <h4>${project.title}</h4>
                <p>${project.desc}</p>
            </div>
        </a>
    `;
}

function renderAwardCard(item) {
    return `
        <div>
            <h4 style="color: var(--accent);">${item.title}</h4>
            <p>${item.desc}</p>
        </div>
    `;
}

function renderPortfolio() {
    const grid = document.getElementById("main-grid");
    if (!grid) {
        return;
    }

    grid.innerHTML = `
        <section class="card span-4 hero-flex">
            <div class="pfp-container">
                <img
                    src="${data.photo}"
                    class="pfp-img"
                    alt="${data.name} profile photo"
                    onerror="this.src='https://via.placeholder.com/220'"
                >
            </div>

            <div class="hero-left">
                <div class="status-pill">Available for IT Projects</div>
                <h3>Identity and Vision</h3>
                <h1>${data.name}</h1>
                <p class="eyebrow-text">${data.about}</p>
                <a
                    href="${data.cvLink}"
                    target="_blank"
                    rel="noreferrer"
                    class="footer-link email-glow"
                    style="width: fit-content;"
                >
                    <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
                    <span>Download CV / Resume</span>
                </a>
            </div>

            <aside class="hero-right">
                <h2 style="font-size: 1.5rem; letter-spacing: -1px; margin-bottom: 20px;">Technical Proficiency</h2>
                <div>
                    ${data.coreStack.map((item) => `
                        <div class="stack-item" id="bar-${item.id}">
                            <div class="stack-label">
                                <span>${item.name}</span>
                                <span>${item.level}</span>
                            </div>
                            <div class="bar-bg">
                                <div class="bar-fill" style="width: ${item.level}"></div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </aside>
        </section>

        ${data.experience.map(renderExperienceCard).join("")}

        <section class="card span-4">
            <h3>Academic Background</h3>
            <div class="education-grid">
                ${data.education.map(renderEducationCard).join("")}
            </div>
        </section>

        <section class="card span-2">
            <h2>Technical Skills</h2>
            <div class="tag-cloud">
                ${data.skills.map((skill) => `
                    <button class="tag" type="button" data-target="${skill.target}">
                        ${skill.name}
                    </button>
                `).join("")}
            </div>
            <h3 style="margin-top: 30px;">Languages</h3>
            <p>English (Fluent) | Yoruba (Native)</p>
        </section>

        <section class="card span-2">
            <h2>Recognition</h2>
            <div style="display: grid; gap: 18px;">
                ${data.awards.map(renderAwardCard).join("")}
            </div>
        </section>

        <section class="card span-4">
            <h3>Featured Projects</h3>
            <h2>Live Systems</h2>
            <div class="project-gallery">
                ${data.projects.map(renderProjectCard).join("")}
            </div>
        </section>

        <footer class="card span-4 footer-box">
            <div class="footer-top">
                <div>
                    <h2 style="font-size: 2.6rem; letter-spacing: -2px; margin-bottom: 0;">${data.handle}</h2>
                    <p style="margin-top: 8px;">${data.title}</p>
                    <div id="footer-clock" aria-live="polite"></div>
                </div>

                <div class="footer-links">
                    <a href="mailto:${data.email}" class="footer-link email-glow">
                        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                        <span>Email Me</span>
                    </a>
                    <a href="${data.twitter}" target="_blank" rel="noreferrer" class="footer-link">
                        <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
                        <span>Twitter</span>
                    </a>
                    <a href="${data.github}" target="_blank" rel="noreferrer" class="footer-link">
                        <i class="fa-brands fa-github" aria-hidden="true"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="${data.discord}" target="_blank" rel="noreferrer" class="footer-link">
                        <i class="fa-brands fa-discord" aria-hidden="true"></i>
                        <span>Discord</span>
                    </a>
                </div>
            </div>

            <div class="footer-bottom-meta">
                <span>(c) 2026 BLAC | All Rights Reserved</span>
                <span>Backend Architect and Web3 Strategist</span>
                <span>MAPOLY 2026</span>
            </div>
        </footer>
    `;
}

function highlight(id, active) {
    const element = document.getElementById(`bar-${id}`);
    if (!element) {
        return;
    }

    element.classList.toggle("highlight-bar", active);
}

function attachSkillInteractions() {
    const tags = document.querySelectorAll(".tag[data-target]");
    tags.forEach((tag) => {
        const target = tag.getAttribute("data-target");
        if (!target) {
            return;
        }

        tag.addEventListener("mouseenter", () => highlight(target, true));
        tag.addEventListener("mouseleave", () => highlight(target, false));
        tag.addEventListener("focus", () => highlight(target, true));
        tag.addEventListener("blur", () => highlight(target, false));
    });
}

function updateClock() {
    const clockElement = document.getElementById("footer-clock");
    if (!clockElement) {
        return;
    }

    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderPortfolio();
    attachSkillInteractions();
    updateClock();
    window.setInterval(updateClock, 1000);
});
