/**
 * Odubela Oluwatomiwa (Blac) — Developer Portfolio
 * Minimal, dependency-free vanilla JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
    // Flag JS initialization for safe progressive enhancement
    document.documentElement.classList.add("js-loaded");

    initTypingAnimation();
    initWordmarkScramble();
    initScrollReveal();
    initLightboxModal();
    initCopyActions();
    initMobileNav();
    initScrollSpy();
    initBackToTop();
    initLagosClock();
    initTelemetryTabs();
    resolveSocialMetadata();
});

/* =============== TYPING / ERASING HERO ANIMATION =============== */
function initTypingAnimation() {
    const typingElement = document.getElementById("role-typing");
    if (!typingElement) return;

    // Respect reduced motion settings
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
        typingElement.textContent = "Backend Developer";
        return;
    }

    const roles = [
        "Backend Developer",
        "Systems Builder",
        "PHP / Laravel Engineer",
        "Relational Database Architect"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const holdTime = 2000;

    function typeLoop() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentDelay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            currentDelay = holdTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            currentDelay = 400;
        }

        setTimeout(typeLoop, currentDelay);
    }

    typeLoop();
}

/* =============== WORDMARK HOVER SCRAMBLE GLITCH =============== */
function initWordmarkScramble() {
    const logoText = document.getElementById("logo-text");
    const logoLink = document.getElementById("brand-logo");
    if (!logoText || !logoLink) return;

    const originalText = "BLAC";
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let isScrambling = false;

    logoLink.addEventListener("mouseenter", () => {
        if (isScrambling) return;
        isScrambling = true;

        let iteration = 0;
        const maxIterations = 8;
        const interval = setInterval(() => {
            logoText.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration / 2) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            iteration++;

            if (iteration >= maxIterations) {
                clearInterval(interval);
                logoText.innerText = originalText;
                isScrambling = false;
            }
        }, 40);
    });
}

/* =============== SCROLL REVEAL (INTERSECTION OBSERVER) =============== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (!revealElements.length) return;

    if (!("IntersectionObserver" in window)) {
        // Fallback for older environments
        revealElements.forEach((el) => el.classList.add("is-revealed"));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                obs.unobserve(entry.target); // Fire once per section
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((el) => observer.observe(el));
}

/* =============== LIGHTBOX MODAL FOR SCREENSHOTS =============== */
function initLightboxModal() {
    const modal = document.getElementById("lightbox-modal");
    const modalImage = document.getElementById("lightbox-full-image");
    const modalTitle = document.getElementById("lightbox-title");
    const closeBtn = document.getElementById("lightbox-close-btn");
    const backdrop = document.getElementById("lightbox-backdrop");
    const mediaFrames = document.querySelectorAll(".media-frame");

    if (!modal || !modalImage || !closeBtn || !backdrop) return;

    let lastFocusedElement = null;

    function openModal(src, title, triggerElement) {
        lastFocusedElement = triggerElement;
        modalImage.src = src;
        modalImage.alt = title || "Project preview screenshot";
        modalTitle.textContent = title || "Screenshot Preview";
        modal.classList.add("is-active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove("is-active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        modalImage.src = "";
        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    mediaFrames.forEach((frame) => {
        const src = frame.getAttribute("data-lightbox-src");
        const title = frame.getAttribute("data-lightbox-title");

        frame.addEventListener("click", () => openModal(src, title, frame));

        frame.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(src, title, frame);
            }
        });
    });

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-active")) {
            closeModal();
        }
    });
}

/* =============== COPY ACTIONS & TOAST NOTIFICATION =============== */
function initCopyActions() {
    const copyButtons = document.querySelectorAll(".copy-btn, .copy-badge-btn");
    const toast = document.getElementById("toast-notice");
    let toastTimeout = null;

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("is-visible");

        if (toastTimeout) clearTimeout(toastTimeout);

        toastTimeout = setTimeout(() => {
            toast.classList.remove("is-visible");
        }, 2600);
    }

    copyButtons.forEach((btn) => {
        btn.addEventListener("click", async () => {
            const isBadge = btn.classList.contains("copy-badge-btn");
            const textToCopy = btn.getAttribute("data-badge") || btn.getAttribute("data-copy");
            const badgeName = btn.getAttribute("data-badge-name") || "Badge";
            if (!textToCopy) return;

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(textToCopy);
                } else {
                    const tempInput = document.createElement("textarea");
                    tempInput.value = textToCopy;
                    tempInput.style.position = "fixed";
                    tempInput.style.opacity = "0";
                    document.body.appendChild(tempInput);
                    tempInput.focus();
                    tempInput.select();
                    document.execCommand("copy");
                    document.body.removeChild(tempInput);
                }

                if (isBadge) {
                    const originalContent = btn.innerHTML;
                    btn.classList.add("is-copied");
                    btn.innerHTML = `
                        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>Copied!</span>
                    `;
                    setTimeout(() => {
                        btn.classList.remove("is-copied");
                        btn.innerHTML = originalContent;
                    }, 2200);
                    showToast(`Copied Markdown badge for ${badgeName}!`);
                } else {
                    const originalContent = btn.innerHTML;
                    btn.classList.add("is-copied");
                    btn.innerHTML = `
                        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>Copied!</span>
                    `;
                    setTimeout(() => {
                        btn.classList.remove("is-copied");
                        btn.innerHTML = originalContent;
                    }, 2000);
                    showToast(`Copied: ${textToCopy}`);
                }
            } catch (err) {
                showToast(`Copied value to clipboard.`);
            }
        });
    });
}

/* =============== MOBILE NAVIGATION TOGGLE =============== */
function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("site-nav");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

/* =============== SCROLL-SPY HEADER NAVIGATION =============== */
function initScrollSpy() {
    const navLinks = document.querySelectorAll(".site-nav .nav-link");
    if (!navLinks.length) return;

    // Collect section elements linked in navigation
    const navItems = [];
    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
            const section = document.querySelector(href);
            if (section) {
                navItems.push({
                    id: href.substring(1),
                    element: section,
                    link: link
                });
            }
        }
    });

    if (!navItems.length) return;

    function setActiveSection(activeId) {
        navItems.forEach((item) => {
            const isMatch = item.id === activeId;
            item.link.classList.toggle("active", isMatch);
            item.link.classList.toggle("is-active", isMatch);
            if (isMatch) {
                item.link.setAttribute("aria-current", "page");
            } else {
                item.link.removeAttribute("aria-current");
            }
        });
    }

    // Immediate highlight on link click for responsive feel
    navItems.forEach((item) => {
        item.link.addEventListener("click", () => {
            setActiveSection(item.id);
        });
    });

    let isScrolling = false;

    function onScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateActiveSpy();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }

    function updateActiveSpy() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const headerOffset = 100; // 64px header + padding

        // 1. If at bottom of page, highlight the last section (Contact)
        if (scrollY + windowHeight >= documentHeight - 60) {
            setActiveSection(navItems[navItems.length - 1].id);
            return;
        }

        // 2. If at very top / hero section, clear menu active states
        if (scrollY < 180) {
            setActiveSection(null);
            return;
        }

        // 3. Find the section currently in view
        let currentId = null;

        for (let i = 0; i < navItems.length; i++) {
            const item = navItems[i];
            const top = item.element.offsetTop - headerOffset;
            const bottom = top + item.element.offsetHeight;

            if (scrollY >= top && scrollY < bottom) {
                currentId = item.id;
                break;
            }
        }

        // Fallback: If in transition gaps, select the section above current scroll position
        if (!currentId) {
            for (let i = navItems.length - 1; i >= 0; i--) {
                const item = navItems[i];
                const top = item.element.offsetTop - headerOffset;
                if (scrollY >= top) {
                    currentId = item.id;
                    break;
                }
            }
        }

        setActiveSection(currentId);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial check on page load
    updateActiveSpy();
}

/* =============== SMOOTH SCROLL BACK TO TOP =============== */
function initBackToTop() {
    const topButtons = document.querySelectorAll(".back-to-top, a.brand-logo[href='#hero']");
    if (!topButtons.length) return;

    topButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (btn.getAttribute("href") === "#hero") {
                e.preventDefault();

                const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: prefersReducedMotion ? "auto" : "smooth"
                });

                if (window.history && window.history.pushState) {
                    window.history.pushState(null, "", "#hero");
                }

                const targetHeader = document.querySelector(".hero-name") || document.getElementById("hero");
                if (targetHeader) {
                    targetHeader.setAttribute("tabindex", "-1");
                    targetHeader.focus({ preventScroll: true });
                }
            }
        });
    });
}

/* =============== LAGOS LOCAL TIME CLOCK =============== */
function initLagosClock() {
    const timeValueEl = document.getElementById("lagos-live-time");
    const statusEl = document.getElementById("lagos-working-status");
    if (!timeValueEl) return;

    function updateTime() {
        try {
            const now = new Date();
            // Format time specifically in Africa/Lagos timezone (WAT / UTC+1)
            const timeFormatter = new Intl.DateTimeFormat("en-GB", {
                timeZone: "Africa/Lagos",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            });

            const hourFormatter = new Intl.DateTimeFormat("en-GB", {
                timeZone: "Africa/Lagos",
                hour: "numeric",
                hour12: false
            });

            const timeStr = timeFormatter.format(now);
            const hour = parseInt(hourFormatter.format(now), 10);

            timeValueEl.textContent = `${timeStr} WAT`;

            if (statusEl) {
                // Typical working hours: 08:00 - 18:00 WAT
                if (hour >= 8 && hour < 18) {
                    statusEl.textContent = "Online / Business hours";
                    statusEl.style.color = "#22C55E";
                } else if (hour >= 18 && hour < 23) {
                    statusEl.textContent = "Evening / Flexible availability";
                    statusEl.style.color = "var(--accent)";
                } else {
                    statusEl.textContent = "Offline / Asynchronous response";
                    statusEl.style.color = "var(--text-dim)";
                }
            }
        } catch (e) {
            // Fallback for environments lacking full Intl timezone database
            const utcTime = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
            const lagosDate = new Date(utcTime + (3600000 * 1)); // UTC+1
            const pad = (n) => String(n).padStart(2, "0");
            timeValueEl.textContent = `${pad(lagosDate.getHours())}:${pad(lagosDate.getMinutes())}:${pad(lagosDate.getSeconds())} WAT`;
        }
    }

    updateTime();
    setInterval(updateTime, 1000);
}

/* =============== HERO TELEMETRY TABS SWITCHER =============== */
function initTelemetryTabs() {
    const tabs = document.querySelectorAll(".terminal-tabs .t-tab");
    if (!tabs.length) return;

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetId = `pane-${tab.getAttribute("data-tab")}`;
            const targetPane = document.getElementById(targetId);
            if (!targetPane) return;

            // Update tab states
            tabs.forEach((t) => {
                t.classList.remove("is-active");
                t.setAttribute("aria-selected", "false");
            });
            tab.classList.add("is-active");
            tab.setAttribute("aria-selected", "true");

            // Update pane visibility
            const allPanes = document.querySelectorAll(".terminal-body .terminal-pane");
            allPanes.forEach((pane) => pane.classList.add("is-hidden"));
            targetPane.classList.remove("is-hidden");
        });
    });
}

/* =============== RESOLVE SOCIAL SHARE META URLS =============== */
function resolveSocialMetadata() {
    try {
        const origin = window.location.origin;
        if (!origin || origin.startsWith("file:")) return;

        // Resolve og:image and twitter:image to absolute URLs for social crawlers
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogSecureImage = document.querySelector('meta[property="og:image:secure_url"]');
        const twitterImage = document.querySelector('meta[name="twitter:image"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');

        const absoluteImageUrl = `${origin}/images/og-card.jpg`;

        if (ogImage && !ogImage.getAttribute("content").startsWith("http")) {
            ogImage.setAttribute("content", absoluteImageUrl);
        }
        if (ogSecureImage && !ogSecureImage.getAttribute("content").startsWith("http")) {
            ogSecureImage.setAttribute("content", absoluteImageUrl);
        }
        if (twitterImage && !twitterImage.getAttribute("content").startsWith("http")) {
            twitterImage.setAttribute("content", absoluteImageUrl);
        }
        if (ogUrl) {
            ogUrl.setAttribute("content", window.location.href);
        }
    } catch (err) {
        // Silent catch for sandboxed environments
    }
}



