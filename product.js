// Product Page JavaScript

let currentProductId = null;
let currentProduct = null;

// Function to get URL parameter
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load product data
function loadProductData() {
    currentProductId = getURLParameter('id');
    if (!currentProductId) {
        // Redirect to store if no product ID
        window.location.href = 'store.html';
        return;
    }

    // Find product in customPCs data (from store.js)
    currentProduct = Object.values(customPCs).find(pc => pc.id === currentProductId);

    if (!currentProduct) {
        // Redirect to store if product not found
        window.location.href = 'store.html';
        return;
    }

    // Load product information
    loadProductInfo();
    loadProductImages();
    loadSpecifications();
    loadComponents();
    loadPerformanceInfo();
    updatePageTitle();
}

// Function to load basic product info
function loadProductInfo() {
    document.getElementById('productTitle').textContent = currentProduct.name;
    document.getElementById('productDescription').textContent = currentProduct.description;
    document.getElementById('productPrice').textContent = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('performanceRating').textContent = currentProduct.performance;
    document.getElementById('productBreadcrumb').textContent = currentProduct.name;
}

// Function to load product images
function loadProductImages() {
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = currentProduct.image;
    mainImage.alt = currentProduct.name;

    // Create thumbnails (we'll use the same image for now, but in a real scenario, you'd have multiple angles)
    const thumbnailsContainer = document.querySelector('.image-thumbnails');
    const thumbnailImages = [
        currentProduct.image, // Main view
        currentProduct.image, // Side view (placeholder)
        currentProduct.image, // Interior view (placeholder)
        currentProduct.image  // Back view (placeholder)
    ];

    thumbnailsContainer.innerHTML = thumbnailImages.map((src, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="switchMainImage('${src}', this)">
            <img src="${src}" alt="${currentProduct.name} view ${index + 1}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;">
        </div>
    `).join('');
}

// Function to switch main image
function switchMainImage(src, thumbnailElement) {
    document.getElementById('mainProductImage').src = src;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnailElement.classList.add('active');
}

// Function to load specifications
function loadSpecifications() {
    const specsTable = document.getElementById('specificationsTable');
    specsTable.innerHTML = Object.entries(currentProduct.specs).map(([label, value]) => `
        <div class="component-row">
            <div class="component-type">${label}</div>
            <div class="component-name">${value}</div>
            <div class="component-price">✓</div>
        </div>
    `).join('');
}

// Function to load detailed components
function loadComponents() {
    const componentsTable = document.getElementById('componentsTable');
    componentsTable.innerHTML = Object.entries(currentProduct.components).map(([type, component]) => `
        <div class="component-row">
            <div class="component-type">${type.toUpperCase()}</div>
            <div class="component-name">${component.name}</div>
            <div class="component-price">$${component.price.toFixed(2)}</div>
        </div>
    `).join('');
}

// Function to load performance information
function loadPerformanceInfo() {
    const performance = currentProduct.specs.Performance || 'High Performance Gaming';
    const resolution = getResolutionFromPerformance(currentProduct.performance);

    document.getElementById('gamingPerformance').textContent = performance;
    document.getElementById('resolutionSupport').textContent = resolution;
}

// Helper function to get resolution info from performance category
function getResolutionFromPerformance(performance) {
    switch(performance.toLowerCase()) {
        case '1080p gaming':
            return '1920x1080 (Full HD) - 60+ FPS on High Settings';
        case '1440p gaming':
            return '2560x1440 (QHD) - 60+ FPS on High-Ultra Settings';
        case '4k gaming':
            return '3840x2160 (4K UHD) - 60+ FPS on Ultra Settings';
        case 'workstation':
            return '4K+ Multi-monitor support, Professional Applications';
        case 'ultimate':
            return '4K 120Hz, 8K capable, No Compromises';
        default:
            return 'Multi-resolution support';
    }
}

// Function to update page title
function updatePageTitle() {
    document.title = `${currentProduct.name} | TechReview Store`;
}

// Function to show specific tab
function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Function to add current product to Amazon cart
function addCurrentPCToCart() {
    if (!currentProduct) return;

    // Get all component ASINs
    const components = Object.values(currentProduct.components);

    // Create Amazon cart URL with all ASINs
    const amazonCartUrl = `https://www.amazon.com/gp/aws/cart/add.html?AssociateTag=techreviewb-20` +
        components.map((comp, index) =>
            `&ASIN.${index + 1}=${comp.asin}&Quantity.${index + 1}=1`
        ).join('');

    // Show confirmation dialog
    const componentNames = components.map(comp => comp.name).join('\n• ');

    const confirmation = confirm(`🛒 Add "${currentProduct.name}" to Amazon cart?\n\n📦 Components:\n• ${componentNames}\n\n💰 Total: $${currentProduct.price.toFixed(2)}\n\nThis will open Amazon in a new tab with all components in your cart.`);

    if (confirmation) {
        // Open Amazon cart in new window
        window.open(amazonCartUrl, '_blank');

        // Track the cart addition (optional analytics)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'add_to_cart', {
                'event_category': 'Product Page',
                'event_label': currentProduct.name,
                'value': currentProduct.price
            });
        }

        // Show success message
        setTimeout(() => {
            alert(`🎉 ${currentProduct.name} added to Amazon cart! Check your Amazon tab to proceed with checkout.`);
        }, 1000);
    }
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProductData();
});

// Export functions for global access
window.showTab = showTab;
window.switchMainImage = switchMainImage;
window.addCurrentPCToCart = addCurrentPCToCart;