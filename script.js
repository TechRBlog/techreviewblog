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
    // initStickFigureAnimation(); // Disabled - now controlled by visitor counter
    initVisitorCounter();
    initLiveCryptoPrices();
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

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

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
    try {
        const pageTitle = document.title || 'Tech Reviews & Buying Guides - TechReviewBlog';
        const pageUrl = window.location.href;

        // Get dynamic description based on page content
        const metaDescription = document.querySelector('meta[name="description"]');
        const description = metaDescription ? metaDescription.getAttribute('content') : 'Latest tech reviews, buying guides, and performance comparisons. Find the best GPUs, hardware wallets, and tech deals. 🎮💻';

        // Get relevant hashtags based on page content
        const hashtags = getRelevantHashtags();

        // Truncate content to fit Twitter's character limit (280 chars, minus URL length ~23 chars)
        const maxLength = 220;
        let tweetText = `${pageTitle}\n\n${description}\n\n${hashtags}`;

        if (tweetText.length > maxLength) {
            const availableDescLength = maxLength - pageTitle.length - hashtags.length - 10;
            if (availableDescLength > 20) {
                const truncatedDescription = description.substring(0, availableDescLength) + '...';
                tweetText = `${pageTitle}\n\n${truncatedDescription}\n\n${hashtags}`;
            } else {
                // If too long, just use title and hashtags
                tweetText = `${pageTitle}\n\n${hashtags}`;
            }
        }

        const shareText = encodeURIComponent(tweetText);
        const shareUrl = encodeURIComponent(pageUrl);

        const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
        const popup = window.open(twitterUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');

        if (!popup) {
            alert('Pop-up blocked. Please allow pop-ups for this site and try again.');
        }
    } catch (error) {
        console.error('Twitter sharing error:', error);
        alert('Error sharing to Twitter. Please try again.');
    }
    return false;
}

function shareOnFacebook() {
    try {
        const pageUrl = window.location.href;
        const shareUrl = encodeURIComponent(pageUrl);

        // Enhanced Facebook sharing - Facebook automatically pulls Open Graph data for rich preview
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

        // Open in popup window
        const popup = window.open(facebookUrl, 'facebook-share', 'width=626,height=436,scrollbars=yes,resizable=yes');

        if (!popup) {
            alert('Pop-up blocked. Please allow pop-ups for this site and try again.');
        } else if (popup.focus) {
            popup.focus();
        }
    } catch (error) {
        console.error('Facebook sharing error:', error);
        alert('Error sharing to Facebook. Please try again.');
    }
    return false;
}

function shareOnReddit() {
    try {
        const pageTitle = document.title || 'Tech Reviews & Buying Guides - TechReviewBlog';
        const pageUrl = window.location.href;

        // Get description for Reddit context
        const metaDescription = document.querySelector('meta[name="description"]');
        const description = metaDescription ? metaDescription.getAttribute('content') : '';

        // Create Reddit-friendly title (Reddit has a 300 character title limit)
        let redditTitle = pageTitle;
        if (description && pageTitle.length < 250) {
            const maxDescLength = 280 - pageTitle.length;
            const descPart = description.substring(0, maxDescLength);
            redditTitle = `${pageTitle} - ${descPart}${description.length > maxDescLength ? '...' : ''}`;
        }

        const shareTitle = encodeURIComponent(redditTitle);
        const shareUrl = encodeURIComponent(pageUrl);

        const redditUrl = `https://www.reddit.com/submit?title=${shareTitle}&url=${shareUrl}`;
        const popup = window.open(redditUrl, '_blank', 'width=700,height=500,scrollbars=yes,resizable=yes');

        if (!popup) {
            alert('Pop-up blocked. Please allow pop-ups for this site and try again.');
        }
    } catch (error) {
        console.error('Reddit sharing error:', error);
        alert('Error sharing to Reddit. Please try again.');
    }
    return false;
}

// New function for LinkedIn sharing
function shareOnLinkedIn() {
    const pageTitle = document.title || 'Tech Reviews & Buying Guides - TechReviewBlog';
    const pageUrl = window.location.href;
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = metaDescription ? metaDescription.getAttribute('content') : 'Latest tech reviews and buying guides';

    const shareUrl = encodeURIComponent(pageUrl);

    // LinkedIn's updated sharing URL format
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    return false;
}

// New function for WhatsApp sharing
function shareOnWhatsApp() {
    const pageTitle = document.title || 'Tech Reviews & Buying Guides - TechReviewBlog';
    const pageUrl = window.location.href;
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = metaDescription ? metaDescription.getAttribute('content') : '';

    const message = `*${pageTitle}*\n\n${description}\n\n${pageUrl}`;
    const shareText = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/?text=${shareText}`;
    window.open(whatsappUrl, '_blank');
    return false;
}

// Function to get relevant hashtags based on page content
function getRelevantHashtags() {
    const url = window.location.href.toLowerCase();
    const title = document.title.toLowerCase();

    let hashtags = ['#TechReview', '#TechReviewBlog'];

    // Add specific hashtags based on content
    if (url.includes('rtx') || title.includes('rtx') || title.includes('gpu')) {
        hashtags.push('#RTX50Series', '#NVIDIA', '#GPU', '#Gaming', '#4KGaming');
    }

    if (url.includes('crypto') || title.includes('crypto') || title.includes('wallet')) {
        hashtags.push('#Crypto', '#Bitcoin', '#Ethereum', '#HardwareWallet', '#CryptoSecurity');
    }

    if (url.includes('cpu') || title.includes('cpu') || title.includes('processor')) {
        hashtags.push('#CPU', '#Processor', '#Gaming', '#PCBuild');
    }

    if (title.includes('best') || title.includes('review')) {
        hashtags.push('#BestOf2025', '#BuyingGuide');
    }

    return hashtags.join(' ');
}

// Function to copy link to clipboard
function copyLinkToClipboard() {
    const pageUrl = window.location.href;

    // Check if clipboard API is available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(pageUrl).then(function() {
            showCopyNotification('✅ Link copied to clipboard!');
        }).catch(function(err) {
            console.log('Clipboard API failed, using fallback:', err);
            fallbackCopyToClipboard(pageUrl);
        });
    } else {
        // Use fallback for older browsers or non-secure contexts
        fallbackCopyToClipboard(pageUrl);
    }

    return false;
}

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text) {
    try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (successful) {
            showCopyNotification('✅ Link copied to clipboard!');
        } else {
            showCopyNotification('❌ Copy failed. Please copy manually: ' + text.substring(0, 50) + '...');
        }
    } catch (err) {
        console.error('Fallback copy failed:', err);
        showCopyNotification('❌ Copy not supported. Please copy manually.');
    }
}

// Function to show copy notification
function showCopyNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00d4ff, #00ff88);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
        animation: fadeInOut 2s ease-in-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// ===== HERO CAROUSEL FUNCTIONALITY =====
function initTechCarousel() {
    const carousel = document.getElementById('techCarousel');
    const track = document.getElementById('carouselTrack');

    if (!carousel || !track) return;
    
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

        // Calculate how many complete sets we need to fill screen + generous buffer
        const cardsPerScreen = Math.ceil(screenWidth / cardWidth);
        const setsNeededForScreen = Math.ceil(cardsPerScreen / originalCards.length);
        const totalSetsNeeded = Math.max(setsNeededForScreen + 4, 6); // Minimum 6 sets for smooth infinite scroll

        // Clear and rebuild track
        track.innerHTML = '';

        // Add multiple complete sets for seamless scrolling
        for (let set = 0; set < totalSetsNeeded; set++) {
            for (let i = 0; i < originalCards.length; i++) {
                const clonedCard = originalCards[i].cloneNode(true);
                // Add a data attribute to track which set this belongs to
                clonedCard.setAttribute('data-set', set);
                clonedCard.setAttribute('data-original-index', i);
                track.appendChild(clonedCard);
            }
        }

        const oneSetWidth = originalCards.length * cardWidth;

        // Start from the middle set to allow scrolling in both directions
        const middleSetOffset = Math.floor(totalSetsNeeded / 2) * oneSetWidth;
        translateX = -middleSetOffset;

        return oneSetWidth; // Width of one complete set
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
        // Use modulo to ensure truly seamless infinite scrolling
        if (Math.abs(translateX) >= oneSetWidth) {
            translateX = translateX % oneSetWidth;
            if (translateX > 0) translateX -= oneSetWidth; // Keep negative direction
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
        // Don't prevent default if the target is a product link or inside one
        if (e.target.closest('.product-link')) {
            return;
        }

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

        // Don't prevent default if the target is a product link
        if (e.target.closest('.product-link')) {
            return;
        }

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

        // Keep within bounds using the same seamless loop logic
        if (Math.abs(translateX) >= oneSetWidth) {
            const adjustment = Math.floor(Math.abs(translateX) / oneSetWidth) * oneSetWidth;
            if (translateX < 0) {
                translateX += adjustment;
                dragStartTranslateX += adjustment;
            } else {
                translateX -= adjustment;
                dragStartTranslateX -= adjustment;
            }
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
    
    // Event listeners (buttons removed - carousel auto-scrolls)
    
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

// ===== STICK FIGURE ANIMATION SYSTEM =====
function initStickFigureAnimation() {
    const container = document.getElementById('stickFigureContainer');
    if (!container) return;

    let activeFigures = 0;
    const maxFigures = 10;
    let figureCounter = 0;

    // Animation types weighted toward entering store (slower, no standing)
    const animationTypes = [
        {
            name: 'walkToStore',
            duration: 18000,
            weight: 40 // High chance to walk to store
        },
        {
            name: 'walkToStore',
            duration: 20000,
            weight: 30 // Another chance for walkToStore (different timing)
        },
        {
            name: 'exitLeft',
            duration: 12000,
            weight: 15 // Lower chance to just exit
        },
        {
            name: 'exitRight',
            duration: 12000,
            weight: 15 // Lower chance to just exit
        }
    ];

    function createStickFigure() {
        if (activeFigures >= maxFigures) return;

        const figure = document.createElement('div');
        figure.className = 'stick-figure';
        figure.id = `stick-figure-${figureCounter++}`;

        // Create stick figure body parts
        figure.innerHTML = `
            <div class="head"></div>
            <div class="body"></div>
            <div class="arm left-arm"></div>
            <div class="arm right-arm"></div>
            <div class="leg left-leg"></div>
            <div class="leg right-leg"></div>
        `;

        // Weighted random animation selection
        const totalWeight = animationTypes.reduce((sum, type) => sum + type.weight, 0);
        let randomValue = Math.random() * totalWeight;
        let selectedType = animationTypes[0];

        for (const type of animationTypes) {
            randomValue -= type.weight;
            if (randomValue <= 0) {
                selectedType = type;
                break;
            }
        }

        const startDirection = Math.random() > 0.5 ? 'left' : 'right';

        // Set initial position based on animation type and direction (prevent center spawning)
        if (selectedType.name === 'walkToStore' && startDirection === 'left') {
            figure.style.left = '-60px';
            figure.style.top = '150px';
        } else if (selectedType.name === 'walkToStore' && startDirection === 'right') {
            figure.style.right = '-60px';
            figure.style.top = '150px';
            figure.style.left = 'auto';
        } else if (selectedType.name.includes('exit') && startDirection === 'left') {
            figure.style.left = '400px';
            figure.style.top = '150px';
        } else if (selectedType.name.includes('exit') && startDirection === 'right') {
            figure.style.right = '400px';
            figure.style.top = '150px';
            figure.style.left = 'auto';
        }

        // Make figure initially invisible to prevent flash
        figure.style.opacity = '0';

        // Apply animation with slower, more varied timing
        figure.style.animationName = `${selectedType.name}_${startDirection}`;
        figure.style.animationDuration = `${selectedType.duration + Math.random() * 8000}ms`;
        figure.style.animationTimingFunction = 'linear';
        figure.style.animationIterationCount = '1';
        figure.style.animationFillMode = 'forwards';

        container.appendChild(figure);
        activeFigures++;

        // Remove figure when animation completes
        const totalDuration = selectedType.duration + Math.random() * 8000;
        setTimeout(() => {
            if (figure && figure.parentNode) {
                figure.parentNode.removeChild(figure);
                activeFigures--;
            }
        }, totalDuration + 2000);
    }

    function generateRandomFigures() {
        // Random interval between 2-8 seconds
        const nextInterval = 2000 + Math.random() * 6000;

        // Sometimes create multiple people at once
        const numPeople = Math.random() > 0.7 ? 2 : 1;

        for (let i = 0; i < numPeople && activeFigures < maxFigures; i++) {
            setTimeout(() => createStickFigure(), i * 1000);
        }

        setTimeout(generateRandomFigures, nextInterval);
    }

    // Start the system
    generateRandomFigures();
    console.log('Stick figure animation system initialized');
}

// ===== WEBSITE VISITOR COUNTER =====
function initVisitorCounter() {
    const counterElement = document.getElementById('visitorCount');
    if (!counterElement) return;

    let currentVisitorCount = 1;

    // Weighted random number generator (1-10 common, 11-30 uncommon, 31-50 rare)
    function getWeightedRandomVisitors() {
        const random = Math.random() * 100;

        if (random < 70) {
            // 70% chance: 1-10 visitors (most common)
            return Math.floor(Math.random() * 10) + 1;
        } else if (random < 90) {
            // 20% chance: 11-30 visitors (uncommon)
            return Math.floor(Math.random() * 20) + 11;
        } else {
            // 10% chance: 31-50 visitors (rare)
            return Math.floor(Math.random() * 20) + 31;
        }
    }

    // Function to spawn people when count increases
    function spawnPeopleEntering(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                // Force walkToStore animation (people entering)
                const container = document.getElementById('stickFigureContainer');
                if (!container) return;

                const figure = document.createElement('div');
                figure.className = 'stick-figure';
                figure.innerHTML = `
                    <div class="head"></div>
                    <div class="body"></div>
                    <div class="arm left-arm"></div>
                    <div class="arm right-arm"></div>
                    <div class="leg left-leg"></div>
                    <div class="leg right-leg"></div>
                `;

                const startDirection = Math.random() > 0.5 ? 'left' : 'right';

                // Set initial position for entering people
                if (startDirection === 'left') {
                    figure.style.left = '-60px';
                    figure.style.top = '150px';
                } else {
                    figure.style.right = '-60px';
                    figure.style.top = '150px';
                    figure.style.left = 'auto';
                }

                figure.style.opacity = '0';
                figure.style.animationName = `walkToStore_${startDirection}`;
                figure.style.animationDuration = `${18000 + Math.random() * 8000}ms`;
                figure.style.animationTimingFunction = 'linear';
                figure.style.animationIterationCount = '1';
                figure.style.animationFillMode = 'forwards';

                container.appendChild(figure);

                // Remove after animation
                setTimeout(() => {
                    if (figure && figure.parentNode) {
                        figure.parentNode.removeChild(figure);
                    }
                }, 28000);

            }, i * 500); // Stagger spawning
        }
    }

    // Function to spawn people leaving when count decreases
    function spawnPeopleLeaving(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                // Force exit animation (people leaving)
                const container = document.getElementById('stickFigureContainer');
                if (!container) return;

                const figure = document.createElement('div');
                figure.className = 'stick-figure';
                figure.innerHTML = `
                    <div class="head"></div>
                    <div class="body"></div>
                    <div class="arm left-arm"></div>
                    <div class="arm right-arm"></div>
                    <div class="leg left-leg"></div>
                    <div class="leg right-leg"></div>
                `;

                const exitDirection = Math.random() > 0.5 ? 'left' : 'right';

                // Set initial position for exiting people (start from store)
                if (exitDirection === 'left') {
                    figure.style.left = '400px';
                    figure.style.top = '150px';
                } else {
                    figure.style.right = '400px';
                    figure.style.top = '150px';
                    figure.style.left = 'auto';
                }

                figure.style.opacity = '0';
                figure.style.animationName = `exit${exitDirection === 'left' ? 'Left' : 'Right'}_${exitDirection}`;
                figure.style.animationDuration = `${12000 + Math.random() * 5000}ms`;
                figure.style.animationTimingFunction = 'linear';
                figure.style.animationIterationCount = '1';
                figure.style.animationFillMode = 'forwards';

                container.appendChild(figure);

                // Remove after animation
                setTimeout(() => {
                    if (figure && figure.parentNode) {
                        figure.parentNode.removeChild(figure);
                    }
                }, 18000);

            }, i * 300); // Stagger spawning
        }
    }

    function updateVisitorCount() {
        const previousCount = currentVisitorCount;

        // Only change by 1-3 visitors at a time
        const change = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
        const goUp = Math.random() > 0.3; // 70% chance to go up, 30% to go down

        let newCount;
        if (goUp) {
            newCount = currentVisitorCount + change;
            // Cap at reasonable maximum, allow higher numbers
            if (newCount > 15) newCount = Math.max(1, currentVisitorCount - change);
        } else {
            newCount = currentVisitorCount - change;
            // Don't go below 1
            if (newCount < 1) newCount = currentVisitorCount + change;
        }

        currentVisitorCount = newCount;
        counterElement.textContent = newCount;

        // Add a subtle animation when count changes
        counterElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
        }, 200);

        // Spawn people based on count change
        const countDifference = newCount - previousCount;

        if (countDifference > 0) {
            // Count increased - spawn people entering
            const peopleToSpawn = Math.min(countDifference, 3); // Max 3 at once
            spawnPeopleEntering(peopleToSpawn);
        } else if (countDifference < 0) {
            // Count decreased - spawn people leaving
            const peopleToSpawn = Math.min(Math.abs(countDifference), 2); // Max 2 leaving at once
            spawnPeopleLeaving(peopleToSpawn);
        }
    }

    // Set initial count
    counterElement.textContent = currentVisitorCount;

    // Update counter every 4-8 seconds randomly (much more active)
    function scheduleNextUpdate() {
        const nextUpdate = 4000 + Math.random() * 4000;
        setTimeout(() => {
            updateVisitorCount();
            scheduleNextUpdate();
        }, nextUpdate);
    }

    scheduleNextUpdate();
    console.log('Visitor counter with synced people spawning initialized');
}

// Live Crypto Prices Functionality
function initLiveCryptoPrices() {
    const cryptoSymbols = {
        'bitcoin': 'BTC',
        'ethereum': 'ETH',
        'ripple': 'XRP',
        'binancecoin': 'BNB',
        'solana': 'SOL',
        'cardano': 'ADA',
        'avalanche-2': 'AVAX',
        'polkadot': 'DOT',
        'litecoin': 'LTC'
    };

    const fallbackPrices = {
        'bitcoin': { price: 67234.58, change: 2.34 },
        'ethereum': { price: 2467.92, change: 1.89 },
        'ripple': { price: 2.4127, change: -0.67 },
        'binancecoin': { price: 714.83, change: 3.21 },
        'solana': { price: 211.67, change: 4.56 },
        'cardano': { price: 1.0942, change: 2.87 },
        'avalanche-2': { price: 39.7834, change: -1.23 },
        'polkadot': { price: 8.1256, change: 1.45 },
        'litecoin': { price: 85.42, change: 1.82 }
    };

    async function fetchCryptoPrices() {
        try {
            const coinIds = Object.keys(cryptoSymbols).join(',');
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd&include_24hr_change=true&precision=4`);

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.warn('Failed to fetch live crypto prices, using fallback data:', error);
            return null;
        }
    }

    function formatPrice(price, symbol) {
        // Format price based on value for realistic display
        if (price >= 1000) {
            return price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        } else if (price >= 1) {
            return price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 4
            });
        } else {
            return price.toLocaleString('en-US', {
                minimumFractionDigits: 4,
                maximumFractionDigits: 6
            });
        }
    }

    function createSlotAnimation(element, oldText, newText) {
        // Store current values for comparison
        if (!element.dataset.lastValue) {
            element.dataset.lastValue = oldText;
        }

        // Only animate if the value actually changed
        if (element.dataset.lastValue === newText) {
            return;
        }

        element.dataset.lastValue = newText;

        // Simple fade and scale animation that doesn't interfere with carousel
        element.style.transition = 'all 0.2s ease';
        element.style.transform = 'scale(1.05)';
        element.style.opacity = '0.7';

        setTimeout(() => {
            element.textContent = newText;
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            element.style.transition = '';
        }, 200);
    }

    function updatePriceElements(priceData) {
        const priceElements = document.querySelectorAll('[data-symbol]');

        priceElements.forEach(element => {
            const symbol = element.getAttribute('data-symbol');
            const changeElement = element.nextElementSibling;
            const oldPrice = element.textContent;

            if (priceData && priceData[symbol]) {
                // Use live data
                const price = priceData[symbol].usd;
                const change = priceData[symbol].usd_24h_change;
                const newPrice = '$' + formatPrice(price, symbol);

                // Animate price change
                createSlotAnimation(element, oldPrice, newPrice);

                if (changeElement && changeElement.classList.contains('crypto-change')) {
                    const changeFormatted = change >= 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`;
                    const oldChange = changeElement.textContent;

                    // Animate change percentage
                    createSlotAnimation(changeElement, oldChange, changeFormatted);

                    // Update change styling
                    changeElement.classList.remove('positive', 'negative');
                    changeElement.classList.add(change >= 0 ? 'positive' : 'negative');
                }
            } else if (fallbackPrices[symbol]) {
                // Use fallback data
                const fallback = fallbackPrices[symbol];
                const newPrice = '$' + formatPrice(fallback.price, symbol);

                createSlotAnimation(element, oldPrice, newPrice);

                if (changeElement && changeElement.classList.contains('crypto-change')) {
                    const changeFormatted = fallback.change >= 0 ? `+${fallback.change}%` : `${fallback.change}%`;
                    const oldChange = changeElement.textContent;

                    createSlotAnimation(changeElement, oldChange, changeFormatted);

                    changeElement.classList.remove('positive', 'negative');
                    changeElement.classList.add(fallback.change >= 0 ? 'positive' : 'negative');
                }
            }
        });
    }

    async function updateCryptoPrices() {
        const priceData = await fetchCryptoPrices();
        updatePriceElements(priceData);
    }

    // Store last update times for each crypto
    const lastUpdateTimes = {};
    const updateIntervals = {
        'bitcoin': 15000 + Math.random() * 10000,      // 15-25 seconds
        'ethereum': 18000 + Math.random() * 12000,     // 18-30 seconds
        'ripple': 12000 + Math.random() * 8000,        // 12-20 seconds
        'binancecoin': 20000 + Math.random() * 15000,  // 20-35 seconds
        'solana': 16000 + Math.random() * 9000,        // 16-25 seconds
        'cardano': 14000 + Math.random() * 11000,      // 14-25 seconds
        'avalanche-2': 22000 + Math.random() * 13000,  // 22-35 seconds
        'polkadot': 17000 + Math.random() * 10000      // 17-27 seconds
    };

    // Initialize last update times
    Object.keys(updateIntervals).forEach(symbol => {
        lastUpdateTimes[symbol] = Date.now() - updateIntervals[symbol]; // Allow immediate first update
    });

    async function updateIndividualCrypto(symbol) {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd&include_24hr_change=true&precision=4`);

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();

            // Update only this specific crypto
            const priceElements = document.querySelectorAll(`[data-symbol="${symbol}"]`);

            priceElements.forEach(element => {
                const changeElement = element.nextElementSibling;
                const oldPrice = element.textContent;

                if (data[symbol]) {
                    const price = data[symbol].usd;
                    const change = data[symbol].usd_24h_change;

                    // Create a realistic price variation (small change)
                    const currentPriceNum = parseFloat(oldPrice.replace(/[$,]/g, ''));
                    let newPriceNum;

                    if (Math.abs(price - currentPriceNum) > currentPriceNum * 0.1) {
                        // If API price is too different, create a small realistic change instead
                        const changePercent = (Math.random() - 0.5) * 0.006; // ±0.3% max change
                        newPriceNum = currentPriceNum * (1 + changePercent);
                    } else {
                        // Use the actual API price if it's within reasonable range
                        newPriceNum = price;
                    }

                    const realisticNewPrice = '$' + formatPrice(newPriceNum, symbol);

                    // Only animate if price actually changed
                    if (oldPrice !== realisticNewPrice) {
                        createSlotAnimation(element, oldPrice, realisticNewPrice);

                        if (changeElement && changeElement.classList.contains('crypto-change')) {
                            // Calculate realistic change percentage based on our price movement
                            const currentChangeNum = parseFloat(changeElement.textContent.replace(/[+%]/g, ''));
                            const priceChangePercent = ((newPriceNum - currentPriceNum) / currentPriceNum) * 100;
                            const newChangePercent = currentChangeNum + (priceChangePercent * 0.5); // Moderate the change

                            const changeFormatted = newChangePercent >= 0 ? `+${newChangePercent.toFixed(2)}%` : `${newChangePercent.toFixed(2)}%`;
                            const oldChange = changeElement.textContent;

                            createSlotAnimation(changeElement, oldChange, changeFormatted);

                            changeElement.classList.remove('positive', 'negative');
                            changeElement.classList.add(newChangePercent >= 0 ? 'positive' : 'negative');
                        }
                    }
                }
            });

            lastUpdateTimes[symbol] = Date.now();
        } catch (error) {
            console.warn(`Failed to update ${symbol}:`, error);
        }
    }

    function checkForUpdates() {
        const now = Date.now();

        Object.keys(updateIntervals).forEach(symbol => {
            const timeSinceLastUpdate = now - lastUpdateTimes[symbol];
            const updateInterval = updateIntervals[symbol];

            if (timeSinceLastUpdate >= updateInterval) {
                updateIndividualCrypto(symbol);
                // Randomize next update interval slightly
                updateIntervals[symbol] = updateInterval + (Math.random() - 0.5) * 5000;
            }
        });
    }

    // Initial price update for all cryptos
    updateCryptoPrices();

    // Check for individual updates every 3 seconds
    setInterval(checkForUpdates, 3000);

    console.log('Live crypto prices initialized with individual update intervals');
}

// Cart Management Functions - Global cart functionality
let cart = JSON.parse(localStorage.getItem('techReviewCart')) || [];

function addToCart(productName, price, amazonUrl, image) {
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            amazonUrl: amazonUrl,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem('techReviewCart', JSON.stringify(cart));
    updateCartCount();
    showCartNotification(productName);
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('techReviewCart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

function updateCartQuantity(productName, quantity) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productName);
        } else {
            item.quantity = quantity;
            localStorage.setItem('techReviewCart', JSON.stringify(cart));
            updateCartCount();
            renderCartItems();
        }
    }
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = cartCount;
        el.style.display = cartCount > 0 ? 'inline' : 'none';
    });
}

function showCartNotification(productName) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <div class="notification-content">
            ✅ ${productName} added to cart!
            <button onclick="viewCart()" class="view-cart-btn">View Cart</button>
        </div>
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Create cart modal
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal';
    cartModal.innerHTML = `
        <div class="cart-modal-content">
            <div class="cart-header">
                <h2>Your Cart</h2>
                <button class="close-cart" onclick="closeCart()">&times;</button>
            </div>
            <div class="cart-items" id="cartItems">
                <!-- Cart items will be rendered here -->
            </div>
            <div class="cart-footer">
                <button class="clear-cart-btn" onclick="clearCart()">Clear Cart</button>
                <button class="checkout-btn" onclick="checkoutToAmazon()">🛒 Open Items in Amazon</button>
            </div>
        </div>
    `;

    document.body.appendChild(cartModal);
    renderCartItems();
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                ${item.image ? `<img src="${item.image}" alt="${item.name}" loading="lazy">` : '<div class="no-image">📦</div>'}
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">${item.price}</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateCartQuantity('${item.name.replace(/'/g, "\\'")}', ${item.quantity - 1})">-</button>
                <span class="quantity">${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.name.replace(/'/g, "\\'")}', ${item.quantity + 1})">+</button>
                <button class="remove-item" onclick="removeFromCart('${item.name.replace(/'/g, "\\'")}')">🗑️</button>
            </div>
        </div>
    `).join('');
}

function closeCart() {
    const cartModal = document.querySelector('.cart-modal');
    if (cartModal) cartModal.remove();
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        localStorage.setItem('techReviewCart', JSON.stringify(cart));
        updateCartCount();
        closeCart();
    }
}

function checkoutToAmazon() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Refresh cart from localStorage to make sure we have latest data
    cart = JSON.parse(localStorage.getItem('techReviewCart')) || [];

    if (cart.length === 0) {
        alert('Your cart is empty after refresh!');
        return;
    }

    // Open all affiliate links in separate Amazon tabs
    const confirmMessage = `This will open ${cart.length} Amazon tabs with your selected items. Continue?`;

    if (confirm(confirmMessage)) {
        cart.forEach((item, index) => {
            setTimeout(() => {
                const newTab = window.open(item.amazonUrl, '_blank');
                if (!newTab) {
                    alert(`Please allow pop-ups for this site to open all tabs. Tab ${index + 1} was blocked.`);
                }
            }, index * 1500); // 1.5 second delay between each tab
        });

        setTimeout(() => {
            alert(`Opened ${cart.length} Amazon tabs with your selected items. Check if any were blocked by your browser's pop-up blocker.`);
        }, cart.length * 1500 + 1000);
    }
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});