//Navbar transparant to color background desktop and mobile
const nav = document.getElementById('nav');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

window.addEventListener('scroll', function() {
    scrollposistion = window.scrollY;

    if (scrollposistion >= 60) {
        nav.classList.add('nav-bg', 'shadow-sm');
    } else if (scrollposistion < 60) {
        nav.classList.remove('nav-bg', 'shadow-sm');
    }

    if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); 
    }
});

//size mobile bg-color aktif dan tidak aktif saat kurang dari nilai scroll nya
navbarToggler.addEventListener('click', function() {
    if (!navbarCollapse.classList.contains('show')) {
        nav.classList.add('nav-bg', 'shadow-sm');
    } else if (window.scrollY < 60) {
        nav.classList.remove('nav-bg', 'shadow-sm');
    }
});

//navbar aktif navigasi
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove("active"));
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            removeActiveClasses();
            this.classList.add("active");
        });
    });

    // Event Listener untuk scroll
    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        if (current) {
            removeActiveClasses();
            document.querySelector(`.nav-link[href="#${current}"]`).classList.add("active");
        }
    });
});

//funsgi download CV
document.getElementById("downloadCv").addEventListener("click", function() {
    window.location.href = "asset/pdf/CV.pdf";
});