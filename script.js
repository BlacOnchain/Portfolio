const data = {
    name: "BLAC",
    handle: "@Lifewithblac",
    photo: "images/profile.jpg", 
    email: "Odubelatomiwa508@gmail.com",
    github: "https://github.com/BlacOnchain",
    discord: "https://discord.com/users/1131931766299566150",
    cvLink: "assets/Oluwatomiwa_CV.pdf", 
    about: "I’m Blac, A Backend Developer specializing in PHP and Database Architecture, with a strong background in Web3 Community Strategy and Growth. I bridge the gap between technical logic and community engagement, whether I'm architecting databases or scaling digital ecosystems. Driven by impact, powered by code.",
    coreStack: [
        { id: "php", name: "PHP & Laravel", level: "90%" },
        { id: "sql", name: "SQL & DB Architecture", level: "92%" },
        { id: "web3", name: "Web3 Community Growth", level: "95%" },
        { id: "content", name: "Content Strategy", level: "80%" }
    ],
    education: [
        {
            school: "Moshood Abiola Polytechnic (MAPOLY), Abeokuta",
            degree: "ND in Computer Science — In Progress",
            desc: "Focusing on core computing principles, database management systems, and backend engineering."
        },
        {
            school: "Federal Science and Technical College",
            degree: "WAEC & Technical Certificate",
            desc: "Foundational technology training that sparked my interest in professional programming."
        }
    ],
    experience: [
        {
            company: "Crypto Dungeon",
            role: "Web3 Community & Partnerships Contributor",
            time: "Nov 2024 – Present",
            points: [
                "Led community engagement for Web3 enthusiasts and NFT collectors.",
                "Negotiated strategic partnerships with Create With Me AI for NFT integrations.",
                "Conducted deep research on emerging Web3 projects for collaboration.",
                "Executed Twitter campaigns to boost project visibility and adoption."
            ]
        },
        {
            company: "Independent Web3 Project",
            role: "Community Moderator & Content Creator",
            time: "Oct 2023 – Present",
            points: [
                "Managed interactive and informative discussions for gaming communities.",
                "Created high-quality Twitter threads and blog content.",
                "Organized AMA sessions and giveaways to attract new members.",
                "Monitored community trends to provide insights to project leaders."
            ]
        }
    ],
    projects: [
        {
            title: "BlacRate Pro",
            desc: "PWA-enabled Crypto-to-Naira rate & profit calculator for OTC traders.",
            img: "images/blacrate.jpg", 
            link: "https://github.com/BlacOnchain/blacrate-pro",
            placeholder: "https://via.placeholder.com/400x200?text=BlacRate+Pro"
        },
        {
            title: "Web3 Game Reviews",
            desc: "Analyzing tokenomics and mechanics for blockchain gamers.",
            img: "images/game.jpg",
            link: "https://github.com/BlacOnchain/Portfolio/blob/main/assets/Case_Study_Web3_Gaming.pdf",
            placeholder: "https://via.placeholder.com/400x200?text=Web3+Game+Reviews"
        },
        {
            title: "Receipt Pro",
            desc: "Backend system focusing on SQL data integrity.",
            img: "images/receipt.jpg",
            link: "https://github.com/BlacOnchain/receipt-pro",
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
        { name: "PHP / MySQL", target: "php" }
    ],
    awards: [
        { title: "Web3 Contributor of the Year", desc: "Recognized for exceptional community-building efforts." },
        { title: "Best Content Strategy Award", desc: "Acknowledged for innovative content across multiple projects." }
    ]
};

window.onload = () => {
    const grid = document.getElementById('main-grid');
    
    grid.innerHTML = `
        <div class="card span-4 hero-flex">
            <div class="pfp-container">
                <img src="${data.photo}" class="pfp-img" onerror="this.src='https://via.placeholder.com/220'">
            </div>

            <div class="hero-left">
                <div class="status-pill">● Available for IT / Projects</div>
                <h3>Identity & Vision</h3>
                <h1>${data.name}</h1>
                <p style="margin-top:25px; font-size:1.3rem; max-width:650px; margin-bottom: 30px;">${data.about}</p>
                
                <a href="${data.cvLink}" target="_blank" class="footer-link email-glow" style="display: inline-flex; width: fit-content; text-decoration: none;">
                    <i class="fa-solid fa-file-pdf"></i> Download CV / Resume
                </a>
            </div>
            
            <div class="hero-right">
                <h2 style="font-size: 1.5rem; letter-spacing: -1px; margin-bottom:20px;">Technical Proficiency</h2>
                <div style="margin-top:20px;">
                    ${data.coreStack.map(s => `
                        <div class="stack-item" id="bar-${s.id}">
                            <div class="stack-label">
                                <span>${s.name}</span>
                                <span>${s.level}</span>
                            </div>
                            <div class="bar-bg">
                                <div class="bar-fill" style="width: ${s.level}"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="card span-2">
            <h3>${data.experience[0].time}</h3>
            <h2>${data.experience[0].company}</h2>
            <p style="color:var(--accent); font-weight:bold; margin-bottom:10px;">${data.experience[0].role}</p>
            <ul>${data.experience[0].points.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>

        <div class="card span-2">
            <h3>${data.experience[1].time}</h3>
            <h2>${data.experience[1].company}</h2>
            <p style="color:var(--accent); font-weight:bold; margin-bottom:10px;">${data.experience[1].role}</p>
            <ul>${data.experience[1].points.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>

        <div class="card span-4">
            <h3>Academic Background</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:40px;">
                ${data.education.map(e => `
                    <div>
                        <h4 style="margin:0; font-size:1.2rem;">${e.school}</h4>
                        <p style="opacity:0.5; font-size:0.9rem; margin:5px 0;">${e.degree}</p>
                        <p style="font-size:0.9rem;">${e.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="card span-2">
            <h2>Technical Skills</h2>
            <div class="tag-cloud">
                ${data.skills.map(s => `
                    <span class="tag" 
                          onmouseover="highlight('${s.target}', true)" 
                          onmouseout="highlight('${s.target}', false)">
                        ${s.name}
                    </span>
                `).join('')}
            </div>
            <h3 style="margin-top:30px;">Languages</h3>
            <p>English (Fluent) • Yoruba (Native)</p>
        </div>

        <div class="card span-2">
            <h2>Recognition</h2>
            ${data.awards.map(a => `
                <div style="margin-bottom:20px;">
                    <h4 style="margin:0; color:var(--accent);">${a.title}</h4>
                    <p style="font-size:0.9rem;">${a.desc}</p>
                </div>
            `).join('')}
        </div>

        <div class="card span-4">
            <h3>Featured Projects</h3>
            <h2>Live Systems</h2>
            <div class="project-gallery">
                ${data.projects.map(p => `
                    <div class="project-item" onclick="window.open('${p.link}', '_blank')" style="cursor: pointer;">
                        <div class="project-overlay">
                            <div class="view-btn">Launch Project</div>
                        </div>
                        <img src="${p.img}" class="project-img" onerror="this.src='${p.placeholder}'">
                        <h4>${p.title}</h4>
                        <p style="font-size:0.85rem; opacity:0.6;">${p.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="card span-4 footer-box">
            <div style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%;">
                <div>
                    <h2 style="margin:0; font-size: 2.8rem; letter-spacing: -2px;">${data.handle}</h2>
                    <div id="footer-clock" style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px; font-weight: 800;"></div>
                </div>

                <div style="display:flex; gap: 15px; align-items: center; flex-wrap: wrap; justify-content: flex-end;">
                    <a href="mailto:${data.email}" class="footer-link email-glow">
                        <i class="fa-solid fa-envelope"></i> Email Me
                    </a>
                    <a href="https://x.com/lifewithblac" target="_blank" class="footer-link">
                        <i class="fa-brands fa-x-twitter"></i> Twitter
                    </a>
                    <a href="${data.github}" target="_blank" class="footer-link">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="${data.discord}" target="_blank" class="footer-link">
                        <i class="fa-brands fa-discord"></i> Discord
                    </a>
                </div>
            </div>

            <div class="footer-bottom-meta">
                <span>© 2026 BLAC • ALL RIGHTS RESERVED</span>
                <span>BACKEND ARCHITECT & WEB3 STRATEGIST</span>
                <span>MAPOLY '26</span>
            </div>
        </div>
    `;
    
    updateClock();
    setInterval(updateClock, 1000);
};

function highlight(id, active) {
    const el = document.getElementById(`bar-${id}`);
    if (el) {
        active ? el.classList.add('highlight-bar') : el.classList.remove('highlight-bar');
    }
}

function updateClock() {
    const clockElement = document.getElementById('footer-clock');
    if (clockElement) {
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    }
}
