document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.querySelector('.nav-links');
// menu icon function
    menuIcon.addEventListener('click', function() {
        navLinks.classList.add('open');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });
// close icon function
    closeIcon.addEventListener('click', function() {
        navLinks.classList.remove('open');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    });
});
