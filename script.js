document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Tambahkan efek shrink saat scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });

    // Efek Navbar Transparan ke Solid saat di-scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");
        navbar.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            darkModeToggle.textContent = "☀️";
        } else {
            darkModeToggle.textContent = "🌙";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
        gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1.2, ease: "power4.out" });
        gsap.from(".hero-content p", { opacity: 0, y: -40, duration: 1.2, delay: 0.3, ease: "power4.out" });
        gsap.from(".cta-button", { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.6, ease: "elastic.out(1, 0.5)" });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero-video", {
        scale: 0.85, // Video mengecil 85%
        borderRadius: "40px", // Membulatkan sudut
        duration: 1,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            scrub: true, // Animasi smooth saat scroll
        }
    });
    
    gsap.to(".hero-video", {
        scale: 1, // Kembali ke ukuran normal
        borderRadius: "0px", // Sudut kembali normal
        duration: 1,
        scrollTrigger: {
            trigger: ".hero",
            start: "bottom top",
            scrub: true,
        }
    });
    



    // GSAP: Efek Parallax Hero Content Saat Scroll
    gsap.to(".hero-content", {
        y: -60,
        opacity: 0.7,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            scrub: true
        }
    });

    gsap.from(".scroll-down", { 
        opacity: 0, 
        y: 20, 
        duration: 1.5, 
        ease: "power2.out", 
        delay: 1 
    });    

    // Carousel Slider - iPhone Style
    const carousel = document.querySelector(".carousel");
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
        isDown = false;
        carousel.classList.remove("active");
    });

    carousel.addEventListener("mouseup", () => {
        isDown = false;
        carousel.classList.remove("active");
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Kecepatan geser
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Smooth scrolling with snap effect
    carousel.style.scrollSnapType = "x mandatory";
    carousel.style.overflowX = "scroll";
    carousel.style.scrollBehavior = "smooth";
    carousel.style.gap = "20px"; // Menambahkan jarak antar item
    
    document.querySelectorAll(".carousel-item").forEach(item => {
        item.style.scrollSnapAlign = "center";
        item.style.padding = "10px"; // Memberikan padding agar lebih rapi
    });

    // Auto-scroll effect like iPhone UI
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    function autoScroll() {
        if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        const scrollPosition = items[currentIndex].offsetLeft - carousel.offsetLeft;
        carousel.scrollTo({ left: scrollPosition, behavior: "smooth" });
        currentIndex++;
    }
    setInterval(autoScroll, 3000);
});

document.addEventListener("scroll", () => {
    const products = document.querySelectorAll(".product-item");
    products.forEach(product => {
        const position = product.getBoundingClientRect().top;
        if (position < window.innerHeight * 0.8) {
            product.classList.add("show");
        } else {
            product.classList.remove("show");
        }
    });
});