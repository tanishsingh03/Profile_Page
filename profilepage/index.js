// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect
window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    let background = document.querySelector('#top');
    let rate = scrolled * 0.5;

    background.style.backgroundPositionY = -rate + 'px';
});
