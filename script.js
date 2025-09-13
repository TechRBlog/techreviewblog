// TechReviewBlog JavaScript - Scroll animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollAnimations();
    initNavToggle();
    initContactForm();
    initSmoothScrolling();
    initThemeToggle();
});

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes based on element type
                if (entry.target.classList.contains('featured-card')) {
                    entry.target.classList.add('animate');
                    entry.target.style.animationDelay = `${Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.2}s`;
                } else if (entry.target.classList.contains('fade-in')) {
                    entry.target.classList.add('visible');
                } else {
                    // Generic fade in animation for other elements
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const elementsToObserve = [
        '.featured-card',
        '.blog-card',
        '.fade-in',
        '.about-section',
        '.contact-method'
    ];

    elementsToObserve.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // Set initial state for animation
            if (selector === '.featured-card' || selector === '.blog-card') {
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            } else if (!el.classList.contains('fade-in')) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
            observer.observe(el);
        });
    });
}

// Mobile Navigation Toggle
function initNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form
        if (!validateForm(data)) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you within 24-48 hours.', 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Form validation
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.subject) {
        errors.push('Please select a subject');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message with at least 10 characters');
    }
    
    if (errors.length > 0) {
        showFormMessage(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form messages
function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // Style the message
    messageElement.style.padding = '15px 20px';
    messageElement.style.borderRadius = '10px';
    messageElement.style.marginBottom = '20px';
    messageElement.style.fontWeight = '500';
    messageElement.style.animation = 'slideInDown 0.3s ease';
    
    if (type === 'success') {
        messageElement.style.backgroundColor = 'rgba(0, 255, 136, 0.1)';
        messageElement.style.border = '1px solid #00ff88';
        messageElement.style.color = '#00ff88';
    } else {
        messageElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        messageElement.style.border = '1px solid #ff0000';
        messageElement.style.color = '#ff6666';
    }
    
    // Insert message at the top of the form
    const contactForm = document.getElementById('contactForm');
    contactForm.insertBefore(messageElement, contactForm.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.style.animation = 'slideOutUp 0.3s ease';
            setTimeout(() => messageElement.remove(), 300);
        }
    }, 5000);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
}


// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if there are lazy images
if (document.querySelectorAll('img[data-src]').length > 0) {
    initLazyLoading();
}

// Note: Dynamic CSS has been moved to the main CSS file to avoid CSP issues

// Add loading animation for page transitions
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.8';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    // Scroll-dependent code here
}, 10));

// Console welcome message for developers
console.log(`
    🚀 TechReviewBlog - Built with modern web technologies
    
    This site features:
    ✅ Responsive design
    ✅ Smooth animations
    ✅ Modern CSS Grid/Flexbox
    ✅ Intersection Observer API
    ✅ Optimized performance
    
    Built by Claude Code
`);

// Error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('Non-critical error caught:', e.error);
});

// Add focus management for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the saved theme
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const isLightMode = document.body.classList.contains('light-mode');
        
        if (isLightMode) {
            // Switch to dark mode
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light mode
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
        
        // Add a small animation to the button
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });

    // Keyboard accessibility
    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            themeToggle.click();
        }
    });
}

// Add skip link functionality
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}