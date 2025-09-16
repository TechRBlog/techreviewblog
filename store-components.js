// PC Components Data
const components = {
    cpus: [
        {
            name: "AMD Ryzen 9 9950X",
            price: "$649.99",
            image: "assets/AMD Ryzen™ 9 9950X.jpg",
            specs: {
                "Cores": "16",
                "Threads": "32",
                "Base Clock": "4.3 GHz",
                "Boost Clock": "5.7 GHz",
                "Socket": "AM5"
            },
            amazonUrl: "https://amzn.to/42yt1sB"
        },
        {
            name: "AMD Ryzen 7 9800X3D",
            price: "$479.99",
            image: "assets/AMD RYZEN 7 9800X3D.jpg",
            specs: {
                "Cores": "8",
                "Threads": "16",
                "Base Clock": "4.2 GHz",
                "Boost Clock": "5.2 GHz",
                "Socket": "AM5"
            },
            amazonUrl: "https://amzn.to/4puAVxi"
        },
        {
            name: "AMD Ryzen 7 7800X3D",
            price: "$399.99",
            image: "assets/AMD Ryzen 7 7800X3D 8-Core.jpg",
            specs: {
                "Cores": "8",
                "Threads": "16",
                "Base Clock": "4.2 GHz",
                "Boost Clock": "5.0 GHz",
                "Socket": "AM5"
            },
            amazonUrl: "https://amzn.to/4gAdDBV"
        },
        {
            name: "Intel Core i9-14900K",
            price: "$549.99",
            image: "assets/Intel® Core™ i9-14900K.jpg",
            specs: {
                "Cores": "24",
                "Threads": "32",
                "Base Clock": "3.2 GHz",
                "Boost Clock": "6.0 GHz",
                "Socket": "LGA1700"
            },
            amazonUrl: "https://amzn.to/4n69msw"
        },
        {
            name: "Intel Core i7-14700K",
            price: "$409.99",
            image: "assets/ntel® Core™ i7-14700K.jpg",
            specs: {
                "Cores": "20",
                "Threads": "28",
                "Base Clock": "3.4 GHz",
                "Boost Clock": "5.6 GHz",
                "Socket": "LGA1700"
            },
            amazonUrl: "https://amzn.to/4plh5V7"
        },
        {
            name: "AMD Ryzen 5 7600X",
            price: "$199.99",
            image: "assets/AMD Ryzen 5 7600X 6-Core.jpg",
            specs: {
                "Cores": "6",
                "Threads": "12",
                "Base Clock": "4.7 GHz",
                "Boost Clock": "5.3 GHz",
                "Socket": "AM5"
            },
            amazonUrl: "https://amzn.to/47Ktsni"
        },
        {
            name: "AMD Ryzen 7 5800X",
            price: "$249.99",
            image: "assets/AMD Ryzen 7 5800X 8-core.jpg",
            specs: {
                "Cores": "8",
                "Threads": "16",
                "Base Clock": "3.8 GHz",
                "Boost Clock": "4.7 GHz",
                "Socket": "AM4"
            },
            amazonUrl: "https://amzn.to/48h0fjR"
        },
        {
            name: "AMD Ryzen 5 5600X",
            price: "$159.99",
            image: "assets/AMD Ryzen 5 5600X.jpg",
            specs: {
                "Cores": "6",
                "Threads": "12",
                "Base Clock": "3.7 GHz",
                "Boost Clock": "4.6 GHz",
                "Socket": "AM4"
            },
            amazonUrl: "https://amzn.to/4mlJasy"
        }
    ],
    gpus: [
        {
            name: "MSI Gaming RTX 5090 32G Gaming Trio OC Graphics Card",
            price: "$1,999.99",
            image: "assets/5090.webp",
            specs: {
                "Memory": "32GB GDDR7",
                "Core Clock": "2.41 GHz",
                "Memory Speed": "28 Gbps",
                "Interface": "PCIe 5.0",
                "Power": "575W"
            },
            amazonUrl: "https://amzn.to/3IoSe1R"
        },
        {
            name: "GIGABYTE GeForce RTX 5080 Gaming OC 16G Graphics Card",
            price: "$999.99",
            image: "assets/5080.webp",
            specs: {
                "Memory": "16GB GDDR7",
                "Core Clock": "2.62 GHz",
                "Memory Speed": "30 Gbps",
                "Interface": "PCIe 5.0",
                "Power": "360W"
            },
            amazonUrl: "https://amzn.to/47FFBd9"
        },
        {
            name: "GIGABYTE GeForce RTX 5070 Ti Gaming OC 16G Graphics Card",
            price: "$799.99",
            image: "assets/5070ti.jpg",
            specs: {
                "Memory": "16GB GDDR7",
                "Core Clock": "2.45 GHz",
                "Memory Speed": "28 Gbps",
                "Interface": "PCIe 5.0",
                "Power": "285W"
            },
            amazonUrl: "https://amzn.to/46rNZe4"
        },
        {
            name: "GIGABYTE GeForce RTX 5070 WINDFORCE OC SFF 12G Graphics Card",
            price: "$549.99",
            image: "assets/5070.webp",
            specs: {
                "Memory": "12GB GDDR7",
                "Core Clock": "2.48 GHz",
                "Memory Speed": "28 Gbps",
                "Interface": "PCIe 5.0",
                "Power": "220W"
            },
            amazonUrl: "https://amzn.to/3IoJCby"
        },
        {
            name: "ASUS TUF Gaming GeForce RTX™ 5070 12GB GDDR7 OC Edition Gaming Graphics Card",
            price: "$549.99",
            image: "assets/AsusRTX507012gb.jpg",
            specs: {
                "Memory": "12GB GDDR7",
                "Core Clock": "2.48 GHz",
                "Memory Speed": "28 Gbps",
                "Interface": "PCIe 5.0",
                "Power": "220W"
            },
            amazonUrl: "https://amzn.to/3Kpuxac"
        },
        {
            name: "GIGABYTE GeForce RTX 5060 Ti WINDFORCE OC 16G Graphics Card",
            price: "$399.99",
            image: "assets/5060ti.webp",
            specs: {
                "Memory": "16GB GDDR7",
                "Core Clock": "2.30 GHz",
                "Memory Speed": "28 Gbps",
                "Interface": "PCIe 5.0",
                "Power": "200W"
            },
            amazonUrl: "https://amzn.to/4mbxwjP"
        },
        {
            name: "PowerColor Reaper AMD Radeon RX 9070 XT 16GB GDDR6",
            price: "$649.99",
            image: "assets/AMD Radeon RX 9070 XT.jpg",
            specs: {
                "Memory": "16GB GDDR6",
                "Core Clock": "2.5 GHz",
                "Memory Speed": "20 Gbps",
                "Interface": "PCIe 4.0",
                "Power": "315W"
            },
            amazonUrl: "https://amzn.to/46obipa"
        },
        {
            name: "XFX Radeon RX 7900XT Gaming Graphics Card",
            price: "$699.99",
            image: "assets/AMD Radeon RX 7900 XTX.jpg",
            specs: {
                "Memory": "20GB GDDR6",
                "Core Clock": "2.4 GHz",
                "Memory Speed": "20 Gbps",
                "Interface": "PCIe 4.0",
                "Power": "315W"
            },
            amazonUrl: "https://amzn.to/4mhhipy"
        },
        {
            name: "XFX Speedster SWFT210 Radeon RX 7700XT Gaming Graphics Card",
            price: "$399.99",
            image: "assets/XFX Speedster SWFT210 Radeon RX 7700XT Gaming Graphics Card.jpg",
            specs: {
                "Memory": "12GB GDDR6",
                "Core Clock": "2.5 GHz",
                "Memory Speed": "18 Gbps",
                "Interface": "PCIe 4.0",
                "Power": "245W"
            },
            amazonUrl: "https://amzn.to/3K2Lwzb"
        },
        {
            name: "XFX Speedster QICK308 Radeon RX 7600 Black Gaming Graphics Card",
            price: "$249.99",
            image: "assets/XFX Speedster QICK308 Radeon RX 7600 Black Gaming Graphics Card.jpg",
            specs: {
                "Memory": "8GB GDDR6",
                "Core Clock": "2.7 GHz",
                "Memory Speed": "18 Gbps",
                "Interface": "PCIe 4.0",
                "Power": "165W"
            },
            amazonUrl: "https://amzn.to/3VUWZmQ"
        }
    ],
    ram: [
        {
            name: "Corsair Vengeance RGB Pro 32GB DDR5-6000",
            price: "$159.99",
            specs: {
                "Capacity": "32GB (2x16GB)",
                "Speed": "DDR5-6000",
                "Timings": "CL30",
                "Voltage": "1.35V",
                "RGB": "Yes"
            },
            asin: "B09NCRQ4L8"
        },
        {
            name: "G.SKILL Trident Z5 RGB 32GB DDR5-6400",
            price: "$199.99",
            specs: {
                "Capacity": "32GB (2x16GB)",
                "Speed": "DDR5-6400",
                "Timings": "CL32",
                "Voltage": "1.4V",
                "RGB": "Yes"
            },
            asin: "B098Q9PVJY"
        },
        {
            name: "Crucial Pro DDR5-5600 32GB",
            price: "$139.99",
            specs: {
                "Capacity": "32GB (2x16GB)",
                "Speed": "DDR5-5600",
                "Timings": "CL46",
                "Voltage": "1.1V",
                "RGB": "No"
            },
            asin: "B0BFQYW1H5"
        },
        {
            name: "Kingston Fury Beast DDR5-5600 64GB",
            price: "$279.99",
            specs: {
                "Capacity": "64GB (2x32GB)",
                "Speed": "DDR5-5600",
                "Timings": "CL36",
                "Voltage": "1.25V",
                "RGB": "No"
            },
            asin: "B09RJ5JG8Z"
        },
        {
            name: "Corsair Dominator Platinum RGB 32GB DDR5-6600",
            price: "$299.99",
            specs: {
                "Capacity": "32GB (2x16GB)",
                "Speed": "DDR5-6600",
                "Timings": "CL32",
                "Voltage": "1.4V",
                "RGB": "Yes"
            },
            asin: "B09WCZJ4N7"
        },
        {
            name: "TeamGroup T-Force Delta RGB 16GB DDR5-5200",
            price: "$79.99",
            specs: {
                "Capacity": "16GB (2x8GB)",
                "Speed": "DDR5-5200",
                "Timings": "CL40",
                "Voltage": "1.1V",
                "RGB": "Yes"
            },
            asin: "B09WHHSS7P"
        }
    ],
    storage: [
        {
            name: "Samsung 990 PRO 2TB NVMe SSD",
            price: "$169.99",
            specs: {
                "Capacity": "2TB",
                "Interface": "PCIe 4.0 x4",
                "Read Speed": "7,450 MB/s",
                "Write Speed": "6,900 MB/s",
                "Form Factor": "M.2 2280"
            },
            asin: "B0BHJJ9Y77"
        },
        {
            name: "WD Black SN850X 1TB NVMe SSD",
            price: "$89.99",
            specs: {
                "Capacity": "1TB",
                "Interface": "PCIe 4.0 x4",
                "Read Speed": "7,300 MB/s",
                "Write Speed": "6,350 MB/s",
                "Form Factor": "M.2 2280"
            },
            asin: "B0B7CQ2CHH"
        },
        {
            name: "Crucial P5 Plus 4TB NVMe SSD",
            price: "$279.99",
            specs: {
                "Capacity": "4TB",
                "Interface": "PCIe 4.0 x4",
                "Read Speed": "6,600 MB/s",
                "Write Speed": "5,000 MB/s",
                "Form Factor": "M.2 2280"
            },
            asin: "B098WL46RS"
        },
        {
            name: "Seagate FireCuda 530 2TB NVMe SSD",
            price: "$199.99",
            specs: {
                "Capacity": "2TB",
                "Interface": "PCIe 4.0 x4",
                "Read Speed": "7,300 MB/s",
                "Write Speed": "6,900 MB/s",
                "Form Factor": "M.2 2280"
            },
            asin: "B093DNV47J"
        },
        {
            name: "WD Black 4TB HDD",
            price: "$129.99",
            specs: {
                "Capacity": "4TB",
                "Interface": "SATA 6Gb/s",
                "RPM": "7,200 RPM",
                "Cache": "256MB",
                "Form Factor": "3.5 inch"
            },
            asin: "B0B25NXWC7"
        },
        {
            name: "Samsung 980 PRO 1TB NVMe SSD",
            price: "$79.99",
            specs: {
                "Capacity": "1TB",
                "Interface": "PCIe 4.0 x4",
                "Read Speed": "7,000 MB/s",
                "Write Speed": "5,000 MB/s",
                "Form Factor": "M.2 2280"
            },
            asin: "B08GLX7TNT"
        }
    ],
    motherboards: [
        {
            name: "ASUS ROG Crosshair X670E Hero",
            price: "$699.99",
            specs: {
                "Socket": "AM5",
                "Chipset": "X670E",
                "Form Factor": "ATX",
                "RAM Slots": "4 (Max 128GB)",
                "PCIe 5.0": "2 slots"
            },
            asin: "B0BDTN8SNJ"
        },
        {
            name: "MSI MAG B650 TOMAHAWK WIFI",
            price: "$229.99",
            specs: {
                "Socket": "AM5",
                "Chipset": "B650",
                "Form Factor": "ATX",
                "RAM Slots": "4 (Max 128GB)",
                "WiFi": "WiFi 6E"
            },
            asin: "B0BG6M5YLX"
        },
        {
            name: "ASUS ROG Strix Z790-E Gaming WiFi",
            price: "$479.99",
            specs: {
                "Socket": "LGA1700",
                "Chipset": "Z790",
                "Form Factor": "ATX",
                "RAM Slots": "4 (Max 128GB)",
                "WiFi": "WiFi 6E"
            },
            asin: "B0BG6K7MLX"
        },
        {
            name: "Gigabyte B650 AORUS Elite AX",
            price: "$199.99",
            specs: {
                "Socket": "AM5",
                "Chipset": "B650",
                "Form Factor": "ATX",
                "RAM Slots": "4 (Max 128GB)",
                "WiFi": "WiFi 6"
            },
            asin: "B0BG7C1P4K"
        },
        {
            name: "MSI PRO Z790-A WiFi",
            price: "$219.99",
            specs: {
                "Socket": "LGA1700",
                "Chipset": "Z790",
                "Form Factor": "ATX",
                "RAM Slots": "4 (Max 128GB)",
                "WiFi": "WiFi 6"
            },
            asin: "B0BG7D2Q5L"
        },
        {
            name: "ASRock X670E Taichi",
            price: "$499.99",
            specs: {
                "Socket": "AM5",
                "Chipset": "X670E",
                "Form Factor": "ATX",
                "RAM Slots": "4 (Max 128GB)",
                "PCIe 5.0": "2 slots"
            },
            asin: "B0BG7E3R6M"
        }
    ],
    psu: [
        {
            name: "MSI A850GL 850W 80+ Gold Modular",
            price: "$129.99",
            specs: {
                "Wattage": "850W",
                "Efficiency": "80+ Gold",
                "Modular": "Fully Modular",
                "Form Factor": "ATX",
                "Warranty": "10 Years"
            },
            asin: "B0C3J7Y8K9"
        },
        {
            name: "ASUS ROG Strix 1000W 80+ Gold",
            price: "$199.99",
            specs: {
                "Wattage": "1000W",
                "Efficiency": "80+ Gold",
                "Modular": "Fully Modular",
                "Form Factor": "ATX",
                "Warranty": "10 Years"
            },
            asin: "B0C4K8Z9L0"
        },
        {
            name: "Corsair RM1000x 1000W 80+ Gold",
            price: "$179.99",
            specs: {
                "Wattage": "1000W",
                "Efficiency": "80+ Gold",
                "Modular": "Fully Modular",
                "Form Factor": "ATX",
                "Warranty": "10 Years"
            },
            asin: "B015YEI7LK"
        },
        {
            name: "EVGA SuperNOVA 750W 80+ Gold",
            price: "$109.99",
            specs: {
                "Wattage": "750W",
                "Efficiency": "80+ Gold",
                "Modular": "Fully Modular",
                "Form Factor": "ATX",
                "Warranty": "10 Years"
            },
            asin: "B077J9X8T7"
        },
        {
            name: "Seasonic Focus GX-1000 1000W 80+ Gold",
            price: "$169.99",
            specs: {
                "Wattage": "1000W",
                "Efficiency": "80+ Gold",
                "Modular": "Fully Modular",
                "Form Factor": "ATX",
                "Warranty": "10 Years"
            },
            asin: "B077J4TTBY"
        },
        {
            name: "be quiet! Straight Power 11 850W",
            price: "$149.99",
            specs: {
                "Wattage": "850W",
                "Efficiency": "80+ Gold",
                "Modular": "Fully Modular",
                "Form Factor": "ATX",
                "Warranty": "5 Years"
            },
            asin: "B077HJBQZK"
        }
    ],
    cases: [
        {
            name: "NZXT H9 Elite Mid-Tower",
            price: "$219.99",
            specs: {
                "Type": "Mid-Tower",
                "Motherboard": "ATX, mATX, Mini-ITX",
                "GPU Length": "435mm",
                "CPU Cooler": "185mm",
                "Side Panel": "Tempered Glass"
            },
            asin: "B0BFZM3N4P"
        },
        {
            name: "Lian Li O11 Vision Compact",
            price: "$199.99",
            specs: {
                "Type": "Mid-Tower",
                "Motherboard": "ATX, mATX, Mini-ITX",
                "GPU Length": "435mm",
                "CPU Cooler": "170mm",
                "Side Panel": "Tempered Glass"
            },
            asin: "B0BG8F4Q5R"
        },
        {
            name: "Corsair 3500X RGB Mid-Tower",
            price: "$149.99",
            specs: {
                "Type": "Mid-Tower",
                "Motherboard": "ATX, mATX, Mini-ITX",
                "GPU Length": "370mm",
                "CPU Cooler": "160mm",
                "Side Panel": "Tempered Glass"
            },
            asin: "B08C7BGV3D"
        },
        {
            name: "Fractal Design Define 7 Compact",
            price: "$129.99",
            specs: {
                "Type": "Mid-Tower",
                "Motherboard": "ATX, mATX, Mini-ITX",
                "GPU Length": "315mm",
                "CPU Cooler": "169mm",
                "Side Panel": "Solid"
            },
            asin: "B08C7CJD4L"
        },
        {
            name: "Phanteks Eclipse P500A",
            price: "$139.99",
            specs: {
                "Type": "Mid-Tower",
                "Motherboard": "E-ATX, ATX, mATX, Mini-ITX",
                "GPU Length": "435mm",
                "CPU Cooler": "190mm",
                "Side Panel": "Tempered Glass"
            },
            asin: "B087CDXCRW"
        },
        {
            name: "be quiet! Pure Base 500DX",
            price: "$99.99",
            specs: {
                "Type": "Mid-Tower",
                "Motherboard": "ATX, mATX, Mini-ITX",
                "GPU Length": "369mm",
                "CPU Cooler": "190mm",
                "Side Panel": "Tempered Glass"
            },
            asin: "B087D64QN2"
        }
    ],
    cooling: [
        {
            name: "NZXT Kraken X73 360mm AIO",
            price: "$199.99",
            specs: {
                "Type": "Liquid Cooler",
                "Radiator": "360mm",
                "Fans": "3x 120mm",
                "RGB": "Yes",
                "Socket Support": "AM4, AM5, LGA1700"
            },
            asin: "B082DYR131"
        },
        {
            name: "Corsair H100i Elite Capellix 240mm",
            price: "$149.99",
            specs: {
                "Type": "Liquid Cooler",
                "Radiator": "240mm",
                "Fans": "2x 120mm",
                "RGB": "Yes",
                "Socket Support": "AM4, AM5, LGA1700"
            },
            asin: "B08G1FN1QS"
        },
        {
            name: "Noctua NH-D15 Dual Tower",
            price: "$109.99",
            specs: {
                "Type": "Air Cooler",
                "Height": "165mm",
                "Fans": "2x 140mm",
                "RGB": "No",
                "Socket Support": "AM4, AM5, LGA1700"
            },
            asin: "B00L7UZMAK"
        },
        {
            name: "be quiet! Dark Rock Pro 4",
            price: "$89.99",
            specs: {
                "Type": "Air Cooler",
                "Height": "163mm",
                "Fans": "2x 120mm",
                "RGB": "No",
                "Socket Support": "AM4, AM5, LGA1700"
            },
            asin: "B07BY6F8D9"
        },
        {
            name: "Arctic Liquid Freezer II 280mm",
            price: "$89.99",
            specs: {
                "Type": "Liquid Cooler",
                "Radiator": "280mm",
                "Fans": "2x 140mm",
                "RGB": "No",
                "Socket Support": "AM4, AM5, LGA1700"
            },
            asin: "B07WNJCVNW"
        },
        {
            name: "Cooler Master Hyper 212 RGB",
            price: "$39.99",
            specs: {
                "Type": "Air Cooler",
                "Height": "158mm",
                "Fans": "1x 120mm",
                "RGB": "Yes",
                "Socket Support": "AM4, AM5, LGA1700"
            },
            asin: "B07H9JL1P8"
        }
    ]
};

// Category management
let currentCategory = 'cpus';

// Component icons (SVG)
const componentIcons = {
    cpus: `<path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 3h8v2H8v-2zm0 3h6v2H8v-2z"/>`,
    gpus: `<path d="M2 6h20v12H2V6zm2 2v8h16V8H4zm2 2h12v2H6v-2zm0 3h8v2H6v-2z"/>`,
    ram: `<path d="M3 7v10h18V7H3zm2 2h14v6H5V9zm2 1v4h2v-4H7zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z"/>`,
    storage: `<path d="M4 6h16v12H4V6zm2 2v8h12V8H6zm1 2h10v1H7v-1zm0 2h10v1H7v-1zm0 2h6v1H7v-1z"/>`,
    motherboards: `<path d="M3 3v18h18V3H3zm2 2h14v14H5V5zm2 2v2h2V7H7zm4 0v2h2V7h-2zm4 0v2h2V7h-2zM7 11v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 15v2h2v-2H7zm4 0v2h2v-2h-2z"/>`,
    psu: `<path d="M4 8h16v8H4V8zm2 2v4h12v-4H6zm2 1h8v2H8v-2z"/>`,
    cases: `<path d="M6 2v20h12V2H6zm2 2h8v16H8V4zm2 2v2h4V6h-4zm0 4v2h4v-2h-4zm0 4v2h4v-2h-4z"/>`,
    cooling: `<path d="M12 2l3.09 6.26L22 9.27l-5 4.73L18.18 22 12 18.77 5.82 22 7 14l-5-4.73 6.91-1.01L12 2z"/>`
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    setupCategoryFilters();
    renderProducts(currentCategory);
    updateCartCount();
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
    const products = components[category] || [];

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

    const amazonUrl = product.amazonUrl || `https://www.amazon.com/dp/${product.asin}`;

    const imageHtml = product.image ?
        `<img src="${product.image}" alt="${product.name}" loading="lazy">` :
        `<svg viewBox="0 0 24 24" fill="currentColor">${componentIcons[category]}</svg>`;

    return `
        <div class="product-card">
            <div class="product-image">
                ${imageHtml}
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
                <button class="add-to-cart-button" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', '${product.price}', '${amazonUrl}', '${product.image || ''}')">
                    🛒 Add to Cart
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

// Cart Management Functions
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

    console.log('Cart length:', cart.length);
    console.log('Full cart data:', cart);

    if (cart.length === 0) {
        alert('Your cart is empty after refresh!');
        return;
    }

    // Open all affiliate links in separate Amazon tabs
    const confirmMessage = `This will open ${cart.length} Amazon tabs with your selected items. Continue?`;

    if (confirm(confirmMessage)) {
        // Create a simple approach - open all tabs with staggered delays
        cart.forEach((item, index) => {
            console.log(`Scheduling tab ${index + 1}:`, item.name, 'URL:', item.amazonUrl);

            setTimeout(() => {
                console.log(`Actually opening tab ${index + 1}:`, item.name);
                const newTab = window.open(item.amazonUrl, '_blank');

                if (!newTab) {
                    console.error(`Failed to open tab ${index + 1} - browser may have blocked it`);
                    alert(`Please allow pop-ups for this site to open all tabs. Tab ${index + 1} was blocked.`);
                } else {
                    console.log(`Successfully opened tab ${index + 1}`);
                }
            }, index * 1500); // 1.5 second delay between each tab
        });

        // Show success message after all tabs should be opened
        setTimeout(() => {
            alert(`Opened ${cart.length} Amazon tabs with your selected items. Check if any were blocked by your browser's pop-up blocker.`);
        }, cart.length * 1500 + 1000);
    }
}

// Search functionality
function searchProducts(query) {
    if (!query.trim()) {
        renderProducts(currentCategory);
        return;
    }

    const products = components[currentCategory] || [];
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        Object.values(product.specs).some(spec =>
            spec.toLowerCase().includes(query.toLowerCase())
        )
    );

    const grid = document.getElementById(`${currentCategory}-grid`);
    grid.innerHTML = filtered.map(product => createProductCard(product, currentCategory)).join('');
}

// Price filter functionality
function filterByPrice(minPrice, maxPrice) {
    const products = components[currentCategory] || [];
    const filtered = products.filter(product => {
        const price = parseFloat(product.price.replace(/[\$,]/g, ''));
        return price >= minPrice && price <= maxPrice;
    });

    const grid = document.getElementById(`${currentCategory}-grid`);
    grid.innerHTML = filtered.map(product => createProductCard(product, currentCategory)).join('');
}

