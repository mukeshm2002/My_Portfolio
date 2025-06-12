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

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        
        // Change button text and disable it
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (in a real scenario, you would use fetch or XMLHttpRequest)
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            submitButton.style.backgroundColor = 'var(--success-color)';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                this.reset();
                submitButton.textContent = 'Send Message';
                submitButton.style.backgroundColor = 'var(--primary-color)';
                submitButton.disabled = false;
                
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
            }, 2000);
        }, 1500);
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
