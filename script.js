// You can add interactive features here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a class to the header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add animation to nav links on hover
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hovered');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('hovered');
        });
    });
});