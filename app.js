/* =================================================
   MOBILE MENU
================================================= */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}


/* =================================================
   CLOSE MENU
================================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});


/* =================================================
   SCROLL TOP
================================================= */

const scrollTop = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        scrollTop.classList.add("show-scroll");
    } else {
        scrollTop.classList.remove("show-scroll");
    }
});


/* =================================================
   ACTIVE NAVIGATION
================================================= */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute("id");
        const sectionLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink?.classList.add("active");
        } else {
            sectionLink?.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", scrollActive);


/* =================================================
   CURRENT YEAR
================================================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =================================================
   HERO ROLE TYPEWRITER
   Cycles through the roles Andika is open to, so the
   hero communicates versatility (not "just" IT) without
   needing extra paragraphs of copy.
================================================= */

const roleTypeEl = document.getElementById("role-type");

const roles = [
    "Web Developer",
    "IT Support",
    "Staff Administrasi",
    "HR Staff",
    "Data Entry"
];

const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (roleTypeEl) {

    if (prefersReducedMotion) {

        roleTypeEl.textContent = roles[0];

    } else {

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const TYPE_SPEED = 70;
        const DELETE_SPEED = 40;
        const HOLD_TIME = 1400;

        function tick() {
            const currentRole = roles[roleIndex];

            if (!isDeleting) {
                charIndex++;
                roleTypeEl.textContent = currentRole.slice(0, charIndex);

                if (charIndex === currentRole.length) {
                    isDeleting = true;
                    setTimeout(tick, HOLD_TIME);
                    return;
                }

                setTimeout(tick, TYPE_SPEED);

            } else {
                charIndex--;
                roleTypeEl.textContent = currentRole.slice(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }

                setTimeout(tick, DELETE_SPEED);
            }
        }

        tick();

    }

}