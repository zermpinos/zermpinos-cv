// Scroll progress indicator
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollIndicator').style.width = scrolled + '%';
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.site-nav')?.offsetHeight || 60;
            const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
            // Close mobile menu on nav link click
            closeMenu();
        }
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

// Hamburger menu
const hamburger = document.getElementById('navHamburger');
const navList = document.getElementById('navLinksList');

function closeMenu() {
    navList.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-nav')) closeMenu();
});

// Dynamic footer year
const footerEl = document.getElementById('footerCopy');
if (footerEl) {
    const year = new Date().getFullYear();
    footerEl.textContent = `$ echo "${year} Panagiotis Zermpinos. All rights reserved."`;
    footerEl.setAttribute('aria-label', `Copyright ${year} Panagiotis Zermpinos`);
}
