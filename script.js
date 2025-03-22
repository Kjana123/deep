// Navigation Toggle for Mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Form Submission Handling (Basic Example)
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality would be implemented here!');
});

document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Sign-up functionality would be implemented here!');
    }
});

document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});