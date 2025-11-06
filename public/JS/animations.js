document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navigation');
    const header = document.querySelector('header');
    const headerBottom = header.offsetTop + header.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerBottom) {
            nav.classList.add('navigation-scroll');
        } else {
            nav.classList.remove('navigation-scroll');
        }
    });
});