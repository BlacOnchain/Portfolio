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
    const copyButtons = document.querySelectorAll(".copy-btn");
    const toast = document.getElementById("toast-notice");
    let toastTimeout = null;

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("is-visible");

        if (toastTimeout) clearTimeout(toastTimeout);

        toastTimeout = setTimeout(() => {
            toast.classList.remove("is-visible");
        }, 2400);
    }

    copyButtons.forEach((btn) => {
        btn.addEventListener("click", async () => {
            const textToCopy = btn.getAttribute("data-copy");
            if (!textToCopy) return;

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(textToCopy);
                } else {
                    const tempInput = document.createElement("input");
                    tempInput.value = textToCopy;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand("copy");
                    document.body.removeChild(tempInput);
                }
                showToast(`Copied to clipboard: ${textToCopy}`);
            } catch (err) {
                showToast(`Value: ${textToCopy}`);
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
