// Initialize AOS animation library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 🚀 REAL Web3Forms Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                submitButton.textContent = 'Message Sent! 🎉';
                submitButton.style.backgroundColor = '#27ae60';
                this.reset();
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.backgroundColor = '';
                    submitButton.disabled = false;
                }, 3000);
            } else {
                throw new Error(data.message);
            }
        })
        .catch(error => {
            console.error('Form Error:', error);
            submitButton.textContent = 'Failed - Try Again';
            submitButton.style.backgroundColor = '#e74c3c';
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 3000);
        });
    });
}

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.project-image img').style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.project-image img').style.transform = 'scale(1)';
    });
});

// Certification card hover effect
const certificationCards = document.querySelectorAll('.certification-card');
certificationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.certification-image img').style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.certification-image img').style.transform = 'scale(1)';
    });
});
