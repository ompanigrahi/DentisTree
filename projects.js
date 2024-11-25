$(document).ready(function() {
    // Smooth Scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        gsap.to(window, { scrollTo: this.hash, duration: 1 });
    });

    // Hover effect on sidebar links
    $('.sidebar-links a').hover(function() {
        gsap.to(this, { scale: 1.1, duration: 0.3 });
    }, function() {
        gsap.to(this, { scale: 1, duration: 0.3 });
    });
 gsap.from(".section", { opacity: 0, duration: 1, y: 50, stagger: 0.3 });
    
    // Simulate a dynamic testimonial slider
    const testimonials = [
        { text: "This service saved my life!", author: "John Doe" },
        { text: "I love the convenience of remote care!", author: "Jane Smith" },
        { text: "A truly life-changing experience!", author: "Mary Johnson" }
    ];

    testimonials.forEach(function(testimonial, index) {
        $(".testimonial-slider").append(`
            <div class="testimonial">
                <p>"${testimonial.text}"</p>
                <p>- ${testimonial.author}</p>
            </div>
        `);
    });

    // Make the testimonial slider scrollable
    $(".testimonial-slider").css('scrollBehavior', 'smooth');
});

    // Animations for content sections
    gsap.from(".hero", { opacity: 0, duration: 1, y: -50 });
   // Hero Section Animation
    gsap.from(".hero h1", { opacity: 0, duration: 1.5, y: -100, ease: "power3.out" });
    gsap.from(".hero p", { opacity: 0, duration: 1.5, delay: 0.5, y: 50, ease: "power3.out" });
    gsap.from(".cta-button", { opacity: 0, duration: 1, delay: 1, y: 100, ease: "power3.out" });
    // Features Section Animation
gsap.from(".feature", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    y: 50,
    ease: "power3.out"
});
// Pricing Section Animation
gsap.from(".pricing-card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    delay: 0.5,
    rotationY: 90,
    ease: "power3.out"
});
// Testimonials Section Animation
gsap.from(".testimonial", {
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    x: -200,
    ease: "power3.out"
});

// Hover effect for testimonial cards
$(".testimonial").hover(function() {
    gsap.to(this, { scale: 1.05, duration: 0.3 });
}, function() {
    gsap.to(this, { scale: 1, duration: 0.3 });
});
// Call-to-action button hover effect
$(".cta-button").hover(function() {
    gsap.to(this, {
        scale: 1.1,
        boxShadow: "0 0 15px 3px rgba(0, 204, 122, 0.7)",
        duration: 0.3
    });
}, function() {
    gsap.to(this, {
        scale: 1,
        boxShadow: "0 0 5px 2px rgba(0, 204, 122, 0.3)",
        duration: 0.3
    });
});
gsap.registerPlugin(ScrollTrigger);

// Hero Section ScrollTrigger
gsap.from(".hero", {
    opacity: 0,
    duration: 1.5,
    y: -100,
    scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Features Section ScrollTrigger
gsap.from(".feature", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    y: 50,
    scrollTrigger: {
        trigger: ".features",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000" },
        },
        opacity: { value: 0.5, anim: { enable: true, speed: 1, opacity_min: 0 } },
        size: { value: 3, anim: { enable: false, speed: 40, size_min: 0.1 } },
        links: { enable: true, distance: 150, color: "#fff", opacity: 0.4, width: 1 },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
        },
    },
});


