/* ==========================================================================
   BlacPortfolio Dynamic Renderer & Interactivity Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking nav links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 2. Data Definitions for Skills, Projects, and Experience
    const skillsData = [
        {
            category: "Backend Development",
            icon: "fa-solid fa-server",
            skills: ["PHP", "Laravel", "Python", "FastAPI", "RESTful APIs", "Node.js"]
        },
        {
            category: "Database & Architecture",
            icon: "fa-solid fa-database",
            skills: ["MySQL", "Database Modeling", "Query Optimization", "Data Integrity", "ORM"]
        },
        {
            category: "Web3 & Digital Strategy",
            icon: "fa-solid fa-cube",
            skills: ["Web3 Strategy", "Smart Contract Integration", "P2P & OTC Workflows", "Digital Marketing", "Meta Pixel Tracking"]
        },
        {
            category: "DevOps & Tools",
            icon: "fa-solid fa-toolbox",
            skills: ["Docker", "Git & GitHub", "VS Code", "PowerShell", "Progressive Web Apps (PWA)"]
        }
    ];

    const projectsData = [
        {
            title: "Smart Attendance System",
            description: "An automated QR-code based attendance tracking system built with Laravel and MySQL to streamline academic and event check-ins for Moshood Abiola Polytechnic.",
            icon: "fa-solid fa-qrcode",
            tags: ["Laravel", "MySQL", "QR Technology", "Tailwind CSS"],
            github: "https://github.com/Blaconchain",
            live: "#"
        },
        {
            title: "BlacRate Pro PWA",
            description: "A high-performance Progressive Web App tailored for OTC and P2P traders featuring real-time coin mapping, granular trade history, and offline service worker caching.",
            icon: "fa-solid fa-chart-line",
            tags: ["JavaScript", "PWA", "Service Workers", "CSS3"],
            github: "https://github.com/Blaconchain",
            live: "#"
        },
        {
            title: "Nebula Token Launcher",
            description: "A full-stack Web3 token deployment application equipped with React frontend components, Laravel API controllers, and secure database architecture.",
            icon: "fa-solid fa-rocket",
            tags: ["React", "Laravel", "MySQL", "Web3"],
            github: "https://github.com/Blaconchain",
            live: "#"
        },
        {
            title: "Cyber-Intelligence Dashboard",
            description: "A glassmorphic full-stack dashboard featuring real-time IP geolocation tracking, threat metric visualization, and high-speed asynchronous FastAPI endpoints.",
            icon: "fa-solid fa-shield-halved",
            tags: ["React", "FastAPI", "Python", "Tailwind CSS"],
            github: "https://github.com/Blaconchain",
            live: "#"
        }
    ];

    const experienceData = [
        {
            date: "September 2026 – Present",
            role: "Software Engineering Trainee",
            company: "Cardtonic Upskill Program (Software Engineering C Batch)",
            description: "Selected for intensive software engineering training focused on advanced backend principles, testing assessments, and scalable system design."
        },
        {
            date: "August 2025 – September 2026",
            role: "Lead Developer & Systems Creator",
            company: "Moshood Abiola Polytechnic (MAPOLY)",
            description: "Designed and implemented automated campus systems including the QR Code Attendance Manager and academic resource portals using Laravel and MySQL."
        },
        {
            date: "June 2026",
            role: "Campus Ambassador & Tech Promoter",
            company: "Tixdorm",
            description: "Promoted event ticketing solutions and integrated Meta Pixel event tracking workflows for student-led digital events."
        },
        {
            date: "April 2025",
            role: "Backend Engineering Intern",
            company: "Olak Tech (SIWES Program)",
            description: "Completed comprehensive backend development training, building database-driven applications and task schedulers with PHP and MySQL."
        }
    ];

    // 3. Render Skills
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skillsData.map(group => `
            <div class="skill-category-card">
                <h3><i class="${group.icon}"></i> ${group.category}</h3>
                <div class="skill-tags">
                    ${group.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // 4. Render Projects
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <div class="project-icon">
                        <i class="${project.icon}"></i>
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" aria-label="GitHub Repository"><i class="fa-brands fa-github"></i></a>
                        <a href="${project.live}" target="_blank" aria-label="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="project-body">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 5. Render Experience Timeline
    const timelineContainer = document.getElementById('timelineContainer');
    if (timelineContainer) {
        timelineContainer.innerHTML = experienceData.map(item => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${item.date}</span>
                    <h3>${item.role}</h3>
                    <div class="timeline-company">${item.company}</div>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    // 6. Header Scroll Shadow Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});