//navmenu
const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMenu = document.getElementById('close-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileNav.classList.remove('-translate-y-full');
    });

    closeMenu.addEventListener('click', () => {
        mobileNav.classList.add('-translate-y-full');
    });




// Add scroll animations
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});



