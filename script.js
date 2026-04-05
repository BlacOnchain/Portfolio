/* =============================================
   BLAC PORTFOLIO — script.js
   ============================================= */

// ── DATA ──────────────────────────────────────
const DATA = {
    typewriterRoles: [
        'Backend Engineer',
        'PHP & MySQL Architect',
        'Web3 Community Strategist',
        'Database Designer',
        'Digital Systems Builder',
    ],
    terminalLines: [
        { type: 'prompt', text: 'cat profile.json' },
        { type: 'obj-open', text: '{' },
        { type: 'pair', key: '  "name"',     val: '"Odubela Oluwatomiwa"',  valType: 'str' },
        { type: 'pair', key: '  "alias"',    val: '"BLAC"',                 valType: 'str' },
        { type: 'pair', key: '  "role"',     val: '"Backend Dev & Web3 Strategist"', valType: 'str' },
        { type: 'pair', key: '  "school"',   val: '"MAPOLY — Computer Science"',     valType: 'str' },
        { type: 'pair', key: '  "twitter"',  val: '"@Lifewithblac"',        valType: 'str' },
        { type: 'pair', key: '  "followers"',val: '3500',                   valType: 'num' },
        { type: 'pair', key: '  "available"',val: 'true',                   valType: 'bool' },
        { type: 'obj-close', text: '}' },
    ],
    projects: [
        {
            title: 'BlacRate Pro',
            desc: 'PWA-powered crypto-to-Naira calculator built for OTC traders. Real-time rates, profit margins, and offline support — zero fluff, all function.',
            badge: 'PWA · Backend',
            badgeClass: 'badge-pwa',
            icon: '&#9783;',
            tags: ['PHP', 'JavaScript', 'PWA', 'Crypto API'],
            link: 'https://blaconchain.github.io/blacrate-pro/',
            external: true,
        },
        {
            title: 'Receipt Pro',
            desc: 'Transactional backend system with enforced SQL data integrity. Built with PHP prepared statements, rollback logic, and bulletproof receipt generation.',
            badge: 'Backend',
            badgeClass: 'badge-backend',
            icon: '&#128203;',
            tags: ['PHP', 'MySQL', 'Transactions', 'SQL'],
            link: 'https://github.com/BlacOnchain/receipt-pro',
            external: true,
        },
        {
            title: 'Web3 Game Reviews',
            desc: 'Deep tokenomics analysis and P2E mechanics breakdowns for blockchain gamers. Research-grade content that drove community growth across Discord and Twitter.',
            badge: 'Content · Web3',
            badgeClass: 'badge-web3',
            icon: '&#9670;',
            tags: ['Research', 'DeFi', 'P2E', 'Tokenomics'],
            link: 'assets/Case_Study_Web3_Gaming.pdf',
            external: true,
        },
    ],
    experience: [
        {
            company: 'Crypto Dungeon',
            role: 'Web3 Community & Partnerships Contributor',
            time: 'Nov 2024 – Present',
            points: [
                'Architected community engagement systems for NFT collectors and Web3 builders.',
                'Closed strategic partnership with Create With Me AI for NFT integrations.',
                'Executed high-conversion Twitter campaigns increasing project visibility.',
                'Ran due diligence research on Web3 projects before collaboration deals.',
            ],
        },
        {
            company: 'Independent Web3 Projects',
            role: 'Community Moderator & Content Creator',
            time: 'Oct 2023 – Present',
            points: [
                'Maintained 24/7 global moderation across Discord and Telegram for P2E platforms.',
                'Authored Twitter threads and blog deep-dives on DeFi, NFTs, and blockchain gaming.',
                'Organised AMA sessions and giveaway campaigns that drove measurable user signups.',
                'Delivered real-time trend reports to project leadership for strategic pivots.',
            ],
        },
    ],
    education: [
        {
            school: 'Moshood Abiola Polytechnic (MAPOLY)',
            degree: 'ND Computer Science — In Progress',
            desc: 'Database management systems, backend engineering, and core computing fundamentals.',
        },
        {
            school: 'Federal Science & Technical College, Ijebu Imushin',
            degree: 'WAEC & Technical Certificate',
            desc: 'Foundational technology training that set the trajectory for a career in engineering.',
        },
    ],
    coreStack: [
        { name: 'PHP & Laravel',          pct: 90 },
        { name: 'SQL & Database Design',  pct: 92 },
        { name: 'Web3 Community Growth',  pct: 95 },
        { name: 'Content Strategy',       pct: 80 },
        { name: 'JavaScript / Node.js',   pct: 65 },
    ],
    skills: [
        'PHP', 'MySQL', 'SQL', 'Node.js', 'Laravel', 'Git',
        'Discord API', 'REST APIs', 'Community Management',
        'Content Strategy', 'Twitter Campaigns', 'Web3 Ecosystem',
        'Figma (UI review)', 'X Analytics', 'DeFi Research',
    ],
};

// ── CANVAS PARTICLE BACKGROUND ─────────────────
function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    const ctx    = canvas.getContext('2d');
    let W, H, particles, animId;

    const COLORS = ['#00ff88', '#00d4ff', '#00cc6a'];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function makeParticle() {
        return {
            x:  Math.random() * W,
            y:  Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r:  Math.random() * 1.5 + 0.4,
            c:  COLORS[Math.floor(Math.random() * COLORS.length)],
            a:  Math.random() * 0.5 + 0.15,
        };
    }

    function initParticles() {
        particles = Array.from({ length: 120 }, makeParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx   = particles[i].x - particles[j].x;
                const dy   = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0,255,136,${0.06 * (1 - dist / 130)})`;
                    ctx.lineWidth   = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw dots
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.c;
            ctx.globalAlpha = p.a;
            ctx.fill();
            ctx.globalAlpha = 1;
        });

        animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();
    window.addEventListener('resize', () => { resize(); });
}

// ── NAVBAR SCROLL ───────────────────────────────
function initNavbar() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ── TYPEWRITER ──────────────────────────────────
function initTypewriter() {
    const el    = document.getElementById('typewriter');
    const roles = DATA.typewriterRoles;
    let ri = 0, ci = 0, deleting = false;
    const SPEED_TYPE = 80, SPEED_DELETE = 40, PAUSE = 2000;

    function tick() {
        const role = roles[ri];
        if (!deleting) {
            el.textContent = role.slice(0, ci + 1);
            ci++;
            if (ci === role.length) {
                deleting = true;
                setTimeout(tick, PAUSE);
                return;
            }
        } else {
            el.textContent = role.slice(0, ci - 1);
            ci--;
            if (ci === 0) {
                deleting = false;
                ri = (ri + 1) % roles.length;
            }
        }
        setTimeout(tick, deleting ? SPEED_DELETE : SPEED_TYPE);
    }
    tick();
}

// ── TERMINAL TYPE-IN ────────────────────────────
function initTerminal() {
    const body  = document.getElementById('term-body');
    const lines = DATA.terminalLines;
    let li      = 0;

    function renderLine(line) {
        const span = document.createElement('span');
        span.className = 't-line';

        if (line.type === 'prompt') {
            span.innerHTML = `<span class="t-prompt">❯ </span><span class="t-cmd">${line.text}</span>`;
        } else if (line.type === 'obj-open' || line.type === 'obj-close') {
            span.innerHTML = `<span class="t-cmd">${line.text}</span>`;
        } else if (line.type === 'pair') {
            let valHtml;
            if (line.valType === 'str')  valHtml = `<span class="t-str">${line.val}</span>`;
            else if (line.valType === 'num')  valHtml = `<span class="t-num">${line.val}</span>`;
            else if (line.valType === 'bool') valHtml = `<span class="t-bool">${line.val}</span>`;
            else valHtml = `<span class="t-val">${line.val}</span>`;
            span.innerHTML = `<span class="t-key">${line.key}</span><span class="t-cmd">: </span>${valHtml}<span class="t-cmd">,</span>`;
        }

        body.appendChild(span);
    }

    function nextLine() {
        if (li >= lines.length) return;
        renderLine(lines[li]);
        li++;
        setTimeout(nextLine, li === 1 ? 600 : 120);
    }

    setTimeout(nextLine, 900);
}

// ── PROJECTS ────────────────────────────────────
function buildProjects() {
    const grid = document.getElementById('projects-grid');
    DATA.projects.forEach((p, i) => {
        const card = document.createElement('a');
        card.href   = p.link;
        card.target = p.external ? '_blank' : '_self';
        card.rel    = 'noopener noreferrer';
        card.className = 'project-card reveal';
        card.style.transitionDelay = `${i * 0.08}s`;
        card.innerHTML = `
            <div class="project-card-top">
                <div class="project-icon">${p.icon}</div>
                <span class="project-badge ${p.badgeClass}">${p.badge}</span>
            </div>
            <div class="project-title">${p.title}</div>
            <p class="project-desc">${p.desc}</p>
            <div class="project-footer">
                <div class="project-tags">
                    ${p.tags.map(t => `<span class="p-tag">${t}</span>`).join('')}
                </div>
                <div class="project-arrow"><i class="fa-solid fa-arrow-right"></i></div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ── EXPERIENCE / TIMELINE ───────────────────────
function buildExperience() {
    const tl = document.getElementById('timeline');
    DATA.experience.forEach((e, i) => {
        const card = document.createElement('div');
        card.className = 'timeline-card reveal';
        card.style.transitionDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="tl-time">${e.time}</div>
            <div class="tl-company">${e.company}</div>
            <div class="tl-role">${e.role}</div>
            <ul class="tl-list">
                ${e.points.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
        `;
        tl.appendChild(card);
    });

    const eduCards = document.getElementById('edu-cards');
    DATA.education.forEach((ed, i) => {
        const card = document.createElement('div');
        card.className = 'edu-card reveal';
        card.style.transitionDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="edu-school">${ed.school}</div>
            <div class="edu-degree">${ed.degree}</div>
            <p class="edu-desc">${ed.desc}</p>
        `;
        eduCards.appendChild(card);
    });
}

// ── STACK / SKILLS ──────────────────────────────
function buildStack() {
    const barsWrap = document.getElementById('stack-bars');
    DATA.coreStack.forEach((s, i) => {
        const item = document.createElement('div');
        item.className = 'stack-bar-item reveal';
        item.style.transitionDelay = `${i * 0.07}s`;
        item.innerHTML = `
            <div class="stack-bar-header">
                <span>${s.name}</span>
                <span class="stack-bar-pct">${s.pct}%</span>
            </div>
            <div class="bar-track">
                <div class="bar-fill-anim" data-pct="${s.pct}"></div>
            </div>
        `;
        barsWrap.appendChild(item);
    });

    const pillsWrap = document.getElementById('stack-pills');
    DATA.skills.forEach(skill => {
        const s = document.createElement('span');
        s.className = 's-pill';
        s.textContent = skill;
        pillsWrap.appendChild(s);
    });
}

// ── INTERSECTION OBSERVER (reveal + bar animate) ─
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate skill bars when visible
                const bars = entry.target.querySelectorAll('.bar-fill-anim');
                bars.forEach(bar => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.pct + '%';
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Also watch bar items that are already in DOM
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.bar-fill-anim');
                if (bar) setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, 100);
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.stack-bar-item').forEach(el => barObserver.observe(el));
}

// ── LIVE CLOCK ──────────────────────────────────
function initClock() {
    const el = document.getElementById('live-clock');
    function update() {
        if (!el) return;
        const now = new Date();
        const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Africa/Lagos' });
        el.textContent = `WAT ${time}`;
    }
    update();
    setInterval(update, 1000);
}

// ── SMOOTH ACTIVE NAV ───────────────────────────
function initActiveNav() {
    const links    = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.style.color = '');
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.style.color = 'var(--green)';
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => io.observe(s));
}

// ── BOOT ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    initNavbar();
    initTypewriter();
    initTerminal();
    buildProjects();
    buildExperience();
    buildStack();
    initClock();
    initActiveNav();

    // Reveal after DOM is built
    requestAnimationFrame(() => {
        initReveal();
    });
});
