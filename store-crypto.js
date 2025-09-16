// Crypto Hardware Data
const cryptoProducts = {
    wallets: [
        {
            name: "Ledger Nano X - Bluetooth Hardware Wallet",
            price: "$149.00",
            specs: {
                "Connectivity": "Bluetooth + USB-C",
                "Supported Coins": "5,500+ cryptocurrencies",
                "Battery": "100 mAh (8 hours)",
                "Security": "CC EAL5+ secure chip",
                "Screen": "128x64 pixels"
            },
            asin: "B07M6R4NK3",
            securityLevel: "Bank Grade"
        },
        {
            name: "Trezor Model T Hardware Wallet",
            price: "$219.00",
            specs: {
                "Screen": "Color touchscreen",
                "Supported Coins": "1,800+ cryptocurrencies",
                "Connectivity": "USB-C",
                "Security": "Open-source firmware",
                "Recovery": "Shamir Backup"
            },
            asin: "B07FXS4T6T",
            securityLevel: "Military Grade"
        },
        {
            name: "Ledger Nano S Plus Hardware Wallet",
            price: "$79.00",
            specs: {
                "Screen": "128x64 pixel display",
                "Supported Coins": "5,500+ cryptocurrencies",
                "Connectivity": "USB-C",
                "Security": "CC EAL5+ certified",
                "Storage": "1.5MB for apps"
            },
            asin: "B09QNXY3YH",
            securityLevel: "Bank Grade"
        },
        {
            name: "BitBox02 Hardware Wallet - Bitcoin Only",
            price: "$109.00",
            specs: {
                "Focus": "Bitcoin Only",
                "Screen": "OLED display",
                "Connectivity": "USB-C",
                "Security": "Secure chip + Open source",
                "Backup": "microSD card"
            },
            asin: "B082VH3QDQ",
            securityLevel: "Swiss Security"
        },
        {
            name: "KeepKey Hardware Wallet",
            price: "$49.00",
            specs: {
                "Screen": "3.12\" OLED display",
                "Supported Coins": "40+ cryptocurrencies",
                "Connectivity": "USB",
                "Security": "PIN protection",
                "Size": "Large form factor"
            },
            asin: "B0143M2A5S",
            securityLevel: "Standard"
        },
        {
            name: "SafePal S1 Hardware Wallet",
            price: "$49.99",
            specs: {
                "Screen": "1.3\" color screen",
                "Connectivity": "Air-gapped (QR codes)",
                "Supported Coins": "20,000+ tokens",
                "Battery": "Rechargeable",
                "Security": "EAL5+ secure element"
            },
            asin: "B08DHBZ7QC",
            securityLevel: "Air-Gapped"
        }
    ],
    mining: [
        {
            name: "Antminer S19 Pro Bitcoin ASIC Miner",
            price: "$1,899.99",
            specs: {
                "Hash Rate": "110 TH/s",
                "Power": "3250W",
                "Algorithm": "SHA-256",
                "Efficiency": "29.5 J/TH",
                "Noise Level": "75db"
            },
            asin: "B08Y5XKWZN",
            securityLevel: "Industrial"
        },
        {
            name: "WhatsMiner M30S++ Bitcoin ASIC Miner",
            price: "$2,299.99",
            specs: {
                "Hash Rate": "112 TH/s",
                "Power": "3472W",
                "Algorithm": "SHA-256",
                "Efficiency": "31 J/TH",
                "Cooling": "4 fans"
            },
            asin: "B08Z7MCHQR",
            securityLevel: "Industrial"
        },
        {
            name: "Goldshell KD5 Kadena ASIC Miner",
            price: "$899.99",
            specs: {
                "Hash Rate": "18 TH/s",
                "Power": "2250W",
                "Algorithm": "Blake2S",
                "Efficiency": "125 J/TH",
                "Cryptocurrency": "Kadena (KDA)"
            },
            asin: "B09QCWX8VY",
            securityLevel: "Commercial"
        },
        {
            name: "IceRiver KS0 Kaspa ASIC Miner",
            price: "$599.99",
            specs: {
                "Hash Rate": "100 GH/s",
                "Power": "100W",
                "Algorithm": "kHeavyHash",
                "Efficiency": "1 J/GH",
                "Cryptocurrency": "Kaspa (KAS)"
            },
            asin: "B0CXYW9ZLM",
            securityLevel: "Home Use"
        },
        {
            name: "Bobcat Miner 300 Helium Hotspot",
            price: "$429.99",
            specs: {
                "Network": "Helium (HNT)",
                "Frequency": "868MHz EU / 915MHz US",
                "Power": "5W",
                "Connectivity": "WiFi + Ethernet",
                "Antenna": "4dBi included"
            },
            asin: "B08XZJVR9Q",
            securityLevel: "IoT Secure"
        },
        {
            name: "Nebra Indoor Helium Hotspot Miner",
            price: "$389.99",
            specs: {
                "Network": "Helium Network",
                "Coverage": "Up to 10 miles",
                "Power": "5W",
                "CPU": "Quad-core ARM Cortex A53",
                "Storage": "64GB eMMC"
            },
            asin: "B08XLBC2T8",
            securityLevel: "IoT Secure"
        }
    ],
    security: [
        {
            name: "YubiKey 5 NFC Security Key",
            price: "$45.00",
            specs: {
                "Authentication": "FIDO2, U2F, OTP",
                "Connectivity": "USB-A + NFC",
                "Protocols": "WebAuthn, FIDO U2F",
                "Apps": "6 applications",
                "Durability": "Crush resistant"
            },
            asin: "B07HBD71HL",
            securityLevel: "FIDO2 Certified"
        },
        {
            name: "Google Titan Security Key USB-C",
            price: "$30.00",
            specs: {
                "Authentication": "FIDO U2F",
                "Connectivity": "USB-C",
                "Protocols": "WebAuthn, FIDO",
                "Built-in": "Hardware security chip",
                "Compatibility": "Chrome OS, Android, Windows"
            },
            asin: "B07BYSB7FK",
            securityLevel: "Google Secure"
        },
        {
            name: "FIDO2 Security Key by SoloKeys",
            price: "$20.00",
            specs: {
                "Authentication": "FIDO2, U2F",
                "Connectivity": "USB-A",
                "Open Source": "Fully open source",
                "Protocols": "WebAuthn",
                "Form": "Keychain friendly"
            },
            asin: "B07Q1L4J8P",
            securityLevel: "Open Source"
        },
        {
            name: "HyperFIDO K5 Titanium Security Key",
            price: "$39.99",
            specs: {
                "Material": "Titanium alloy",
                "Authentication": "FIDO U2F",
                "Connectivity": "USB-A",
                "Durability": "Waterproof IP68",
                "Size": "Ultra compact"
            },
            asin: "B08K7WXBQM",
            securityLevel: "Military Spec"
        },
        {
            name: "Nitrokey 3A NFC Security Key",
            price: "$29.00",
            specs: {
                "Authentication": "FIDO2, OpenPGP",
                "Connectivity": "USB-A + NFC",
                "Privacy": "No tracking",
                "Open Source": "Hardware & software",
                "Made in": "Germany"
            },
            asin: "B09WLQM8QT",
            securityLevel: "Privacy First"
        },
        {
            name: "OnlyKey Password Manager & 2FA Device",
            price: "$46.00",
            specs: {
                "Features": "Password manager + 2FA",
                "Storage": "24 accounts",
                "Authentication": "FIDO U2F, TOTP",
                "Encryption": "Hardware encrypted",
                "Self-destruct": "PIN attempts protection"
            },
            asin: "B01LYV0BQX",
            securityLevel: "All-in-One"
        }
    ]
};

// Category management
let currentCategory = 'wallets';

// Crypto icons (SVG)
const cryptoIcons = {
    wallets: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><circle cx="12" cy="10" r="3"/><path d="m9 9 2 2 4-4"/>`,
    mining: `<path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01-.01.99V22h12v-5.99l-.01-.01L18 16l-4-4 4-3.99-.01-.01.01-.99V2H6z"/><path d="M12 8v8"/><path d="M8 12h8"/>`,
    security: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><circle cx="12" cy="16" r="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    setupCategoryFilters();
    renderProducts(currentCategory);
});

function setupCategoryFilters() {
    const filters = document.querySelectorAll('.category-filter');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.dataset.category;

            // Update active filter
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            // Show/hide sections
            const sections = document.querySelectorAll('.products-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(category).classList.add('active');
            currentCategory = category;

            // Render products for this category
            renderProducts(category);
        });
    });
}

function renderProducts(category) {
    const grid = document.getElementById(`${category}-grid`);
    const products = cryptoProducts[category] || [];

    grid.innerHTML = products.map(product => createProductCard(product, category)).join('');
}

function createProductCard(product, category) {
    const specsHtml = Object.entries(product.specs)
        .map(([key, value]) => `
            <div class="spec-item">
                <span class="spec-label">${key}:</span>
                <span class="spec-value">${value}</span>
            </div>
        `).join('');

    const amazonUrl = `https://www.amazon.com/dp/${product.asin}`;

    return `
        <div class="product-card">
            <div class="product-image">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    ${cryptoIcons[category]}
                </svg>
            </div>
            <div class="product-name">${product.name}</div>
            <div class="security-badge">${product.securityLevel}</div>
            <div class="product-specs">
                ${specsHtml}
            </div>
            <div class="product-price">${product.price}</div>
            <div class="product-buttons">
                <button class="buy-button" onclick="window.open('${amazonUrl}', '_blank')">
                    Buy on Amazon
                </button>
                <button class="wishlist-button" onclick="addToWishlist('${product.name}')">
                    ♡
                </button>
            </div>
        </div>
    `;
}

function addToWishlist(productName) {
    alert(`${productName} added to wishlist!`);
    // Implement wishlist functionality here
}