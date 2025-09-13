// TechReviewBlog JavaScript - Scroll animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollAnimations();
    initNavToggle();
    initContactForm();
    initSmoothScrolling();
    initThemeToggle();
    initTechCarousel();
    initBlogsScrollAnimation();
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

// Social Media Sharing Functions
function shareOnTwitter() {
    const pageTitle = document.title || 'The Best NVIDIA RTX 50 Series GPUs - TechReviewBlog';
    const pageUrl = window.location.href;
    const description = 'Discover the top-selling RTX 50 series GPUs and find your perfect gaming upgrade. Performance comparisons, pricing, and buying recommendations included. 🎮';
    
    // Create a more engaging tweet with description
    const shareText = encodeURIComponent(`${pageTitle}\n\n${description}`);
    const shareUrl = encodeURIComponent(pageUrl);
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    return false;
}

function shareOnFacebook() {
    const pageUrl = window.location.href;
    const shareUrl = encodeURIComponent(pageUrl);
    
    // Facebook automatically pulls Open Graph data, so just pass the URL
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    return false;
}

function shareOnReddit() {
    const pageTitle = 'The Best NVIDIA RTX 50 Series GPUs - Complete Review & Buying Guide';
    const pageUrl = window.location.href;
    const shareTitle = encodeURIComponent(pageTitle);
    const shareUrl = encodeURIComponent(pageUrl);
    
    const redditUrl = `https://www.reddit.com/submit?title=${shareTitle}&url=${shareUrl}`;
    window.open(redditUrl, '_blank', 'width=600,height=500,scrollbars=yes,resizable=yes');
    return false;
}

// ===== HERO CAROUSEL FUNCTIONALITY =====
function initTechCarousel() {
    const carousel = document.getElementById('techCarousel');
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carousel || !track || !prevBtn || !nextBtn) return;
    
    // Carousel state
    let translateX = 0;
    let baseSpeed = 0.15;
    let currentSpeed = baseSpeed;
    let targetSpeed = baseSpeed;
    let animationId = null;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartTranslateX = 0;
    let dragVelocity = 0;
    let lastDragTime = 0;
    
    // Get original cards from HTML (5 GPU cards)
    const getOriginalCards = () => {
        const allCards = Array.from(track.querySelectorAll('.tech-product-card'));
        // Take first 5 cards (our GPU cards)
        return allCards.slice(0, 5);
    };
    
    // Get card width with margins
    const getCardWidth = () => {
        const card = track.querySelector('.tech-product-card');
        if (!card) return 360;
        const styles = window.getComputedStyle(card);
        return card.offsetWidth + parseInt(styles.marginLeft) + parseInt(styles.marginRight);
    };
    
    // Create seamless infinite track
    const createInfiniteTrack = () => {
        const originalCards = getOriginalCards();
        const cardWidth = getCardWidth();
        const screenWidth = window.innerWidth;
        
        // Calculate how many complete sets we need to fill screen + buffer
        const cardsPerScreen = Math.ceil(screenWidth / cardWidth);
        const totalSetsNeeded = Math.ceil(cardsPerScreen / originalCards.length) + 3; // Extra buffer
        
        // Clear and rebuild track
        track.innerHTML = '';
        
        // Add multiple complete sets for seamless scrolling
        for (let set = 0; set < totalSetsNeeded; set++) {
            for (let i = 0; i < originalCards.length; i++) {
                const clonedCard = originalCards[i].cloneNode(true);
                track.appendChild(clonedCard);
            }
        }
        
        return originalCards.length * cardWidth; // Width of one complete set
    };
    
    let oneSetWidth = 0;
    
    // Continuous infinite loop animation with smooth transitions
    const infiniteLoop = () => {
        if (!isDragging) {
            // Only use targetSpeed transitions when not manually adjusting currentSpeed
            const speedDiff = targetSpeed - currentSpeed;
            if (Math.abs(speedDiff) > 0.001 && targetSpeed === baseSpeed) {
                currentSpeed += speedDiff * 0.06; // Slower, smoother transitions
            } else if (targetSpeed !== baseSpeed) {
                // For navigation button speed changes, use targetSpeed directly
                currentSpeed = targetSpeed;
            }
            
            // Move continuously to the left
            translateX -= currentSpeed;
        }
        
        // Seamless loop: when we've scrolled one complete set, jump back invisibly
        if (translateX <= -oneSetWidth) {
            translateX += oneSetWidth; // Jump forward by one set width
        }
        
        // Apply transform
        track.style.transform = `translateX(${translateX}px)`;
        
        // Continue animation
        animationId = requestAnimationFrame(infiniteLoop);
    };
    
    // Start the infinite carousel
    const startCarousel = () => {
        if (animationId) cancelAnimationFrame(animationId);
        infiniteLoop();
    };
    
    // Drag functionality - move cards during drag, then resume auto-scroll
    const handleDragStart = (e) => {
        isDragging = true;
        dragStartX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        dragStartTranslateX = translateX;
        dragVelocity = 0;
        lastDragTime = Date.now();
        track.style.cursor = 'grabbing';
        e.preventDefault();
    };
    
    const handleDragMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const deltaX = currentX - dragStartX;
        const currentTime = Date.now();
        
        // Calculate velocity for momentum
        if (currentTime - lastDragTime > 0) {
            dragVelocity = deltaX / (currentTime - lastDragTime);
        }
        lastDragTime = currentTime;
        
        // Move the carousel by the drag amount
        translateX = dragStartTranslateX + deltaX;
        
        // Keep within bounds using the same loop logic
        if (translateX <= -oneSetWidth) {
            translateX += oneSetWidth;
            dragStartTranslateX += oneSetWidth; // Adjust start position too
        } else if (translateX > 0) {
            translateX -= oneSetWidth;
            dragStartTranslateX -= oneSetWidth; // Adjust start position too
        }
    };
    
    const handleDragEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        track.style.cursor = 'grab';
        
        // Calculate momentum from drag velocity
        const momentum = dragVelocity * 150; // Momentum multiplier
        
        if (Math.abs(momentum) > 3) {
            // Apply momentum smoothly
            const momentumSpeed = Math.max(0.05, Math.min(Math.abs(momentum) * 0.008, 2));
            if (momentum > 0) {
                // Dragged right, slow down with momentum
                currentSpeed = Math.max(0.05, baseSpeed - momentumSpeed * 0.4);
            } else {
                // Dragged left, speed up with momentum
                currentSpeed = baseSpeed + momentumSpeed;
            }
            
            // Gradually transition back to base speed over time
            const smoothReturnToBase = () => {
                const speedDiff = baseSpeed - currentSpeed;
                const returnRate = 0.02; // Slow, smooth return rate
                
                if (Math.abs(speedDiff) > 0.005) {
                    currentSpeed += speedDiff * returnRate;
                    setTimeout(smoothReturnToBase, 16); // ~60fps
                } else {
                    currentSpeed = baseSpeed;
                    targetSpeed = baseSpeed;
                }
            };
            
            // Start smooth return after brief momentum period
            setTimeout(smoothReturnToBase, 500);
        } else {
            // No significant momentum, smoothly return to base speed
            targetSpeed = baseSpeed;
        }
    };
    
    // Navigation buttons add smooth temporary speed boost
    const speedBoost = (direction) => {
        const boostAmount = direction === 'next' ? 1.5 : -0.3;
        targetSpeed = Math.max(0.05, baseSpeed + boostAmount);
        
        // Return to base speed smoothly after 1.2 seconds
        setTimeout(() => {
            targetSpeed = baseSpeed;
        }, 1200);
    };
    
    // Event listeners
    nextBtn.addEventListener('click', () => speedBoost('next'));
    prevBtn.addEventListener('click', () => speedBoost('prev'));
    
    // Mouse drag events
    track.addEventListener('mousedown', handleDragStart);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    
    // Touch drag events
    track.addEventListener('touchstart', handleDragStart, { passive: false });
    track.addEventListener('touchmove', handleDragMove, { passive: false });
    track.addEventListener('touchend', handleDragEnd);
    
    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            speedBoost('prev');
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            speedBoost('next');
        }
    });
    
    // Window resize handling
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recreate infinite track for new screen size
            oneSetWidth = createInfiniteTrack();
            translateX = translateX % oneSetWidth;
        }, 150);
    });
    
    // Initialize infinite carousel
    track.style.cursor = 'grab';
    track.style.transition = 'none'; // Remove all transitions for smooth movement
    
    // Create infinite track with multiple sets
    oneSetWidth = createInfiniteTrack();
    
    // Start the carousel
    startCarousel();
    
    // Accessibility
    carousel.setAttribute('tabindex', '0');
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', 'Tech products showcase - continuous slot machine style scrolling');
    
    console.log('Tech Carousel: Slot machine style continuous movement initialized');
}

// Custom Scroll Animation for Blogs Section
function initBlogsScrollAnimation() {
    const blogsSection = document.querySelector('.blogs-section');
    const heroSection = document.querySelector('.hero');
    
    if (!blogsSection || !heroSection) return;
    
    // Set initial state
    blogsSection.style.opacity = '0';
    blogsSection.style.transform = 'translateY(50px)';
    blogsSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    function handleBlogsScroll() {
        const heroRect = heroSection.getBoundingClientRect();
        const blogsRect = blogsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate when hero section is leaving the viewport
        const heroExitPoint = heroRect.bottom;
        
        // Calculate fade trigger points
        const fadeInStart = windowHeight * 0.8; // Start fading when 80% down viewport
        const fadeInComplete = windowHeight * 0.5; // Complete fade when 50% down viewport
        
        // Determine opacity based on scroll position
        let opacity = 0;
        let translateY = 50;
        
        if (heroExitPoint <= fadeInStart && heroExitPoint > fadeInComplete) {
            // Fading in as hero exits
            const progress = (fadeInStart - heroExitPoint) / (fadeInStart - fadeInComplete);
            opacity = Math.min(progress, 1);
            translateY = 50 * (1 - progress);
        } else if (heroExitPoint <= fadeInComplete) {
            // Fully visible
            opacity = 1;
            translateY = 0;
        } else if (blogsRect.top > windowHeight) {
            // Below viewport, hidden
            opacity = 0;
            translateY = 50;
        } else if (blogsRect.bottom < 0) {
            // Above viewport, hidden
            opacity = 0;
            translateY = -20;
        }
        
        // Apply the animation
        blogsSection.style.opacity = opacity;
        blogsSection.style.transform = `translateY(${translateY}px)`;
    }
    
    // Throttled scroll handler for better performance
    let scrollTimeout;
    function throttledScrollHandler() {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(handleBlogsScroll);
    }
    
    // Attach scroll listener
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Initial check
    handleBlogsScroll();
    
    console.log('Blogs scroll animation initialized');
}