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
document.querySelectorAll('a[href^="mukeshkannan509@gmail.com"]').forEach(anchor => {
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

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = '';
    
    // Using EmailJS service (recommended approach)
    // First, you'll need to set up EmailJS (free tier available)
    if (typeof emailjs !== 'undefined') {
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'mukeshkannan509@gmail.com'
        })
        .then(function() {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.className = 'success';
            document.getElementById('contactForm').reset();
        }, function(error) {
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.className = 'error';
            console.error('EmailJS Error:', error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
    } 
    // Fallback to Formspree if EmailJS not available
    else {
        const formData = new FormData(this);
        formData.append('_replyto', email);
        formData.append('_subject', subject || 'New message from portfolio contact form');
        formData.append('_to', 'mukeshkannan509@gmail.com');
        
        fetch('https://formspree.io/f/mukeshkannan509@gmail.com', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.className = 'success';
                document.getElementById('contactForm').reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.className = 'error';
            console.error('Formspree Error:', error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
    }
});

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