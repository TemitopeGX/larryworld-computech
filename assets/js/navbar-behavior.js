document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return; // Exit if navbar doesn't exist

    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = navbar.querySelector('.navbar-toggler');
    if (!navbarCollapse || !navbarToggler) return; // Exit if essential elements are missing

    let lastScrollTop = 0;

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbar.contains(event.target);
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });

    // Close navbar when scrolling down
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    // Close navbar when clicking a nav-link (for smoother navigation)
    const navLinks = navbar.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    console.log('Navbar behavior script loaded and executed');
});
