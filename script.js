const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const logoName = document.querySelector(".logo-name");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navLinks.classList.remove("active");
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    if (window.scrollY < 100) {
        logoName.classList.add("active");
    } else {
        logoName.classList.remove("active");
    }

    const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});

