// =========================
// Portfolio JavaScript
// =========================

// Navbar background on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    } else {

        header.style.background = "#111827";
        header.style.boxShadow = "none";

    }

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// Scroll to Top Button
// =========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.padding = "12px 16px";
topButton.style.fontSize = "22px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.background = "#38bdf8";
topButton.style.color = "#000";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// Fade Animation
// =========================

const cards = document.querySelectorAll(
".skill-card,.project-card,.about-box,.education-box");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// =========================
// Contact Form
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

// =========================
// Console Message
// =========================

console.log("Anuj Pandey Portfolio Loaded Successfully");