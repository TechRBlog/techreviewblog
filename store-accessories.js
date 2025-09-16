// Gaming Accessories Data
const accessories = {
    keyboards: [
        {
            name: "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard",
            price: "$199.99",
            specs: {
                "Switch Type": "Cherry MX Speed",
                "Backlight": "RGB LED",
                "Connection": "USB-C",
                "Features": "Macro Keys, Media Controls",
                "Layout": "Full Size"
            },
            asin: "B08HR74WV4"
        },
        {
            name: "Logitech G Pro X Mechanical Gaming Keyboard",
            price: "$129.99",
            specs: {
                "Switch Type": "GX Blue Clicky",
                "Backlight": "RGB LED",
                "Connection": "USB-A",
                "Features": "Detachable Cable, Tournament",
                "Layout": "Tenkeyless"
            },
            asin: "B07QQB9VCV"
        },
        {
            name: "Razer BlackWidow V4 Pro Mechanical Gaming Keyboard",
            price: "$229.99",
            specs: {
                "Switch Type": "Razer Green",
                "Backlight": "Chroma RGB",
                "Connection": "USB-A + Wireless",
                "Features": "Command Dial, Wrist Rest",
                "Layout": "Full Size"
            },
            asin: "B0C7JQMM92"
        },
        {
            name: "SteelSeries Apex Pro TKL Mechanical Gaming Keyboard",
            price: "$189.99",
            specs: {
                "Switch Type": "OmniPoint 2.0",
                "Backlight": "RGB LED",
                "Connection": "USB-A",
                "Features": "Adjustable Actuation, OLED",
                "Layout": "Tenkeyless"
            },
            asin: "B07TBCXGZ9"
        },
        {
            name: "HyperX Alloy FPS Pro Mechanical Gaming Keyboard",
            price: "$69.99",
            specs: {
                "Switch Type": "Cherry MX Red",
                "Backlight": "Red LED",
                "Connection": "USB-A",
                "Features": "Compact Design, Solid Frame",
                "Layout": "Tenkeyless"
            },
            asin: "B074F5L8B5"
        },
        {
            name: "ASUS ROG Azoth Wireless Gaming Keyboard",
            price: "$249.99",
            specs: {
                "Switch Type": "ROG NX Red",
                "Backlight": "Aura RGB",
                "Connection": "2.4GHz + Bluetooth + USB",
                "Features": "OLED Display, Hot-swap",
                "Layout": "75%"
            },
            asin: "B0BWNXZ847"
        }
    ],
    mice: [
        {
            name: "Logitech G Pro X Superlight Wireless Gaming Mouse",
            price: "$149.99",
            specs: {
                "DPI": "25,600 DPI",
                "Sensor": "HERO 25K",
                "Connection": "Lightspeed Wireless",
                "Weight": "63g",
                "Battery": "70 hours"
            },
            asin: "B087LXCTFJ"
        },
        {
            name: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
            price: "$149.99",
            specs: {
                "DPI": "30,000 DPI",
                "Sensor": "Focus Pro 30K",
                "Connection": "HyperSpeed Wireless",
                "Weight": "88g",
                "Battery": "90 hours"
            },
            asin: "B0B2L3XZSJ"
        },
        {
            name: "SteelSeries Rival 650 Wireless Gaming Mouse",
            price: "$99.99",
            specs: {
                "DPI": "12,000 DPI",
                "Sensor": "TrueMove3+",
                "Connection": "2.4GHz Wireless",
                "Weight": "121g (Adjustable)",
                "Battery": "24+ hours"
            },
            asin: "B07DBY47MK"
        },
        {
            name: "Corsair M65 RGB Elite Gaming Mouse",
            price: "$59.99",
            specs: {
                "DPI": "18,000 DPI",
                "Sensor": "PixArt PMW3391",
                "Connection": "USB Wired",
                "Weight": "97g (Adjustable)",
                "Features": "Sniper Button"
            },
            asin: "B07D962ZP1"
        },
        {
            name: "Glorious Model O Wireless Gaming Mouse",
            price: "$79.99",
            specs: {
                "DPI": "19,000 DPI",
                "Sensor": "PixArt PAW3370",
                "Connection": "2.4GHz Wireless",
                "Weight": "69g",
                "Battery": "71 hours"
            },
            asin: "B08F7PTF53"
        },
        {
            name: "Finalmouse Starlight-12 Small Wireless Gaming Mouse",
            price: "$189.99",
            specs: {
                "DPI": "26,000 DPI",
                "Sensor": "PixArt PAW3370",
                "Connection": "2.4GHz Wireless",
                "Weight": "47g",
                "Material": "Magnesium Alloy"
            },
            asin: "B09D3H6T7Q"
        }
    ],
    headsets: [
        {
            name: "SteelSeries Arctis 7P+ Wireless Gaming Headset",
            price: "$169.99",
            specs: {
                "Connection": "2.4GHz Wireless + 3.5mm",
                "Battery": "30+ hours",
                "Microphone": "ClearCast Bidirectional",
                "Drivers": "40mm Neodymium",
                "Compatibility": "PS5, PC, Switch"
            },
            asin: "B08XBHBL8P"
        },
        {
            name: "HyperX Cloud Alpha S Gaming Headset",
            price: "$99.99",
            specs: {
                "Connection": "3.5mm + USB",
                "Drivers": "50mm Dynamic",
                "Microphone": "Detachable Noise-Cancelling",
                "Features": "7.1 Surround Sound",
                "Weight": "310g"
            },
            asin: "B07TYLW85F"
        },
        {
            name: "Corsair Virtuoso RGB Wireless SE Gaming Headset",
            price: "$179.99",
            specs: {
                "Connection": "2.4GHz + Bluetooth + 3.5mm",
                "Battery": "20 hours",
                "Microphone": "Broadcast-grade",
                "Drivers": "50mm High-density Neodymium",
                "Features": "Hi-Res Audio"
            },
            asin: "B07X8SJ8HM"
        },
        {
            name: "Razer BlackShark V2 Pro Wireless Gaming Headset",
            price: "$179.99",
            specs: {
                "Connection": "2.4GHz Wireless + 3.5mm",
                "Battery": "24 hours",
                "Microphone": "HyperClear Supercardioid",
                "Drivers": "50mm TriForce Titanium",
                "Features": "THX Spatial Audio"
            },
            asin: "B08FBL6C7R"
        },
        {
            name: "Audio-Technica ATH-G1WL Wireless Gaming Headset",
            price: "$199.99",
            specs: {
                "Connection": "2.4GHz Wireless + 3.5mm",
                "Battery": "15 hours",
                "Microphone": "Flexible Boom",
                "Drivers": "45mm",
                "Features": "Hi-Res Audio, Low Latency"
            },
            asin: "B08G1DJL8D"
        },
        {
            name: "Logitech G733 Lightspeed Wireless Gaming Headset",
            price: "$129.99",
            specs: {
                "Connection": "Lightspeed 2.4GHz Wireless",
                "Battery": "29 hours",
                "Microphone": "Blue VO!CE Filter",
                "Drivers": "40mm PRO-G",
                "Features": "LIGHTSYNC RGB"
            },
            asin: "B08CDNBZG2"
        }
    ],
    monitors: [
        {
            name: "ASUS ROG Swift PG279QM 27\" 1440p 240Hz Gaming Monitor",
            price: "$699.99",
            specs: {
                "Size": "27 inches",
                "Resolution": "2560x1440 (QHD)",
                "Refresh Rate": "240Hz",
                "Panel Type": "Fast IPS",
                "Response Time": "1ms GTG"
            },
            asin: "B093LJLF9R"
        },
        {
            name: "Samsung Odyssey G7 32\" 1440p 240Hz Curved Gaming Monitor",
            price: "$599.99",
            specs: {
                "Size": "32 inches",
                "Resolution": "2560x1440 (QHD)",
                "Refresh Rate": "240Hz",
                "Panel Type": "VA Curved (1000R)",
                "Response Time": "1ms GTG"
            },
            asin: "B088HHZBGJ"
        },
        {
            name: "LG 27GP850-B 27\" 1440p 165Hz Nano IPS Gaming Monitor",
            price: "$399.99",
            specs: {
                "Size": "27 inches",
                "Resolution": "2560x1440 (QHD)",
                "Refresh Rate": "165Hz",
                "Panel Type": "Nano IPS",
                "Response Time": "1ms GTG"
            },
            asin: "B093MTSTKD"
        },
        {
            name: "Alienware AW2521H 25\" 1080p 360Hz Gaming Monitor",
            price: "$499.99",
            specs: {
                "Size": "25 inches",
                "Resolution": "1920x1080 (FHD)",
                "Refresh Rate": "360Hz",
                "Panel Type": "Fast IPS",
                "Response Time": "1ms GTG"
            },
            asin: "B08JHVLJJ5"
        },
        {
            name: "AOC AGON AG273QCX 27\" 1440p 165Hz Curved Gaming Monitor",
            price: "$329.99",
            specs: {
                "Size": "27 inches",
                "Resolution": "2560x1440 (QHD)",
                "Refresh Rate": "165Hz",
                "Panel Type": "VA Curved (1500R)",
                "Response Time": "1ms MPRT"
            },
            asin: "B08JG2X1P7"
        },
        {
            name: "MSI MAG274QRF-QD 27\" 1440p 165Hz Gaming Monitor",
            price: "$449.99",
            specs: {
                "Size": "27 inches",
                "Resolution": "2560x1440 (QHD)",
                "Refresh Rate": "165Hz",
                "Panel Type": "Quantum Dot IPS",
                "Response Time": "1ms GTG"
            },
            asin: "B08T6GC75H"
        }
    ],
    chairs: [
        {
            name: "Secretlab TITAN Evo 2022 Gaming Chair",
            price: "$519.00",
            specs: {
                "Material": "NEO Hybrid Leatherette",
                "Weight Capacity": "290 lbs",
                "Height Range": "5'7\" - 6'2\"",
                "Features": "4-Way L-ADAPT Lumbar",
                "Warranty": "5 Years"
            },
            asin: "B09H4T91X7"
        },
        {
            name: "Herman Miller x Logitech G Embody Gaming Chair",
            price: "$1,595.00",
            specs: {
                "Material": "Sync Fabric",
                "Weight Capacity": "300 lbs",
                "Height Range": "5'0\" - 6'6\"",
                "Features": "Cooling Foam, PostureFit",
                "Warranty": "12 Years"
            },
            asin: "B08LVRZX7G"
        },
        {
            name: "RESPAWN 110 Racing Style Gaming Chair",
            price: "$149.99",
            specs: {
                "Material": "Bonded Leather",
                "Weight Capacity": "275 lbs",
                "Features": "Segmented Padding",
                "Adjustment": "Height, Tilt, Armrests",
                "Colors": "Multiple Options"
            },
            asin: "B01N2RJ0HI"
        },
        {
            name: "Steelcase Leap V2 Gaming Chair",
            price: "$415.00",
            specs: {
                "Material": "3D Knit Fabric",
                "Weight Capacity": "300 lbs",
                "Features": "Live Back Technology",
                "Adjustments": "9 Adjustment Points",
                "Warranty": "12 Years"
            },
            asin: "B006H1QYBA"
        },
        {
            name: "DXRacer Formula Series Gaming Chair",
            price: "$299.99",
            specs: {
                "Material": "PU Leather",
                "Weight Capacity": "265 lbs",
                "Height Range": "5'1\" - 5'11\"",
                "Features": "Multi-functional Tilt",
                "Warranty": "2 Years"
            },
            asin: "B00XTKCZTE"
        },
        {
            name: "Noblechairs EPIC Gaming Chair",
            price: "$449.99",
            specs: {
                "Material": "Real Leather",
                "Weight Capacity": "265 lbs",
                "Features": "Cold Foam Padding",
                "Adjustments": "4D Armrests",
                "Warranty": "5 Years"
            },
            asin: "B01M8F8PJP"
        }
    ],
    streaming: [
        {
            name: "Elgato Stream Deck XL - 32 Key Stream Controller",
            price: "$249.99",
            specs: {
                "Keys": "32 LCD Keys",
                "Software": "Stream Deck Software",
                "Compatibility": "OBS, Streamlabs, Twitch",
                "Connection": "USB-C",
                "Dimensions": "7.6\" x 4.6\""
            },
            asin: "B07RL8H1RY"
        },
        {
            name: "Blue Yeti X Professional USB Microphone",
            price: "$169.99",
            specs: {
                "Type": "Condenser USB Microphone",
                "Patterns": "4 Pickup Patterns",
                "Features": "Blue VO!CE Software",
                "LED Meter": "Real-time LED Meter",
                "Compatibility": "PC, Mac"
            },
            asin: "B07QBBC9QT"
        },
        {
            name: "Elgato HD60 S+ 4K Capture Card",
            price: "$199.99",
            specs: {
                "Resolution": "4K60 HDR10 Passthrough",
                "Recording": "1080p60 Recording",
                "Latency": "Ultra-Low Latency",
                "Connection": "USB 3.0",
                "Software": "4K Capture Utility"
            },
            asin: "B07XB6VNLJ"
        },
        {
            name: "Razer Kiyo Pro Ultra 4K Webcam",
            price: "$299.99",
            specs: {
                "Resolution": "4K30 / 1080p60",
                "Sensor": "1/1.2\" CMOS",
                "Features": "Auto Focus, HDR",
                "FOV": "90° / 70° / 58°",
                "Compatibility": "OBS, XSplit, Streamlabs"
            },
            asin: "B0C7KLDPZ5"
        },
        {
            name: "Elgato Key Light Air LED Panel",
            price: "$129.99",
            specs: {
                "Output": "1400 lumens",
                "Temperature": "2900K to 7000K",
                "Control": "WiFi Control",
                "Power": "USB-C",
                "Mounting": "Desk Clamp Included"
            },
            asin: "B08PNHXQWM"
        },
        {
            name: "Audio-Technica AT2020USB+ Cardioid Condenser Microphone",
            price: "$149.00",
            specs: {
                "Type": "Cardioid Condenser",
                "Connection": "USB + XLR",
                "Frequency Response": "20-20,000 Hz",
                "Features": "Side-address Design",
                "Compatibility": "Mac, PC"
            },
            asin: "B00B5ZX9FM"
        }
    ]
};

// Category management
let currentCategory = 'keyboards';

// Accessory icons (SVG)
const accessoryIcons = {
    keyboards: `<path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8"/>`,
    mice: `<path d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z"/><path d="M12 2v6"/>`,
    headsets: `<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3z"/><path d="M8 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"/><path d="M12 14v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7"/>`,
    monitors: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
    chairs: `<path d="M12 2l-2 7h4l-2-7z"/><path d="M12 9v4"/><path d="M8 13h8"/><path d="M8 17v4"/><path d="M16 17v4"/>`,
    streaming: `<circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16 10,8"/>`
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
    const products = accessories[category] || [];

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
                    ${accessoryIcons[category]}
                </svg>
            </div>
            <div class="product-name">${product.name}</div>
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