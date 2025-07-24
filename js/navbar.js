// navbar.js

// Example: Sticky effect on scroll (optional, can be extended later)
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


lottie.loadAnimation({
    container: document.getElementById('lottie-hero'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'work.json' // replace with your Lottie JSON path
});