// script.js
document.addEventListener("DOMContentLoaded", () => {
    //Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('.contact form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const comment = form.querySelector('textarea').value.trim();

        if (name === '' || email === '' || comment === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Toggle navigation menu for smaller screens
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});