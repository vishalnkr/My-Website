document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = hamburger.querySelectorAll('span');
        spans[0].classList.toggle('rotate-45');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-negative-45');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = hamburger.contains(event.target) || navLinks.contains(event.target);
        
        if (!isClickInside && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            
            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans[0].classList.remove('rotate-45');
            spans[1].classList.remove('opacity-0');
            spans[2].classList.remove('rotate-negative-45');
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            
            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans[0].classList.remove('rotate-45');
            spans[1].classList.remove('opacity-0');
            spans[2].classList.remove('rotate-negative-45');
        }
    });
}); 