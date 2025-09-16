// PC Prebuilts by TechReview - JavaScript

// TODO: Update affiliate links
// All amazonUrl properties need to be updated with actual affiliate links
// Current placeholder: 'https://amzn.to/your-affiliate-link'
// AssociateTag in Amazon cart URL needs to be updated: 'techreviewb-20'

// Custom PC Builds Data - All Amazon Components
const customPCs = {
    budget: {
        id: 'budget-gamer',
        name: 'Budget Gamer',
        description: 'Complete 1080p gaming PC with all components from Amazon. Plays Fortnite, Valorant, and Rocket League at 60+ FPS. All parts Prime eligible with free shipping. Perfect starter build with expert component matching.',
        performance: '1080p Gaming',
        price: 899.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg', // Phanteks case image
        components: {
            cpu: {
                name: 'AMD Ryzen 5 5600X',
                asin: 'B08166SLDF',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 4060',
                asin: 'B0C85LPVJH',
                price: 299.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI B550 Gaming Plus',
                asin: 'B089CQFH2Q',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Vengeance LPX 16GB DDR4-3200',
                asin: 'B0143UM4TC',
                price: 59.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Western Digital Blue SN570 1TB NVMe',
                asin: 'B09HKB9R36',
                price: 59.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Seasonic FOCUS GX-650W 80+ Gold',
                asin: 'B077GJBQZ8',
                price: 109.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Phanteks Eclipse G360A ATX',
                asin: 'B08D6PQ9B2',
                price: 79.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Cooler Master Hyper 212 RGB',
                asin: 'B07H25DY89',
                price: 44.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1080p High Settings, 60+ FPS',
            'CPU': 'AMD Ryzen 5 5600X (6 Cores)',
            'GPU': 'NVIDIA RTX 4060 8GB',
            'RAM': '16GB DDR4-3200',
            'Storage': '1TB NVMe SSD',
            'PSU': '650W 80+ Gold',
            'Case': 'Phanteks G360A (3x RGB Fans)'
        }
    },

    midrange: {
        id: 'performance-pro',
        name: 'Performance Pro',
        description: 'Professional 1440p gaming build with premium Amazon components. Handles all AAA games on high settings. DDR5 memory, PCIe 4.0 storage, and latest-gen CPU/GPU. Ships fast with Amazon Prime.',
        performance: '1440p Gaming',
        price: 1599.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg', // Lian Li case image
        components: {
            cpu: {
                name: 'AMD Ryzen 7 7700X',
                asin: 'B0BBHHT8LZ',
                price: 329.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 4070',
                asin: 'B0BZJN5T1J',
                price: 599.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS TUF Gaming B650-PLUS WIFI',
                asin: 'B0BH5K3L9M',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 32GB DDR5-6000',
                asin: 'B0BHKQG5V7',
                price: 189.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 980 Pro 1TB NVMe',
                asin: 'B08GL575DB',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair RM750e 750W 80+ Gold',
                asin: 'B0BFG1N9K2',
                price: 139.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Lian Li LANCOOL 205 Mesh',
                asin: 'B08D6PQ9B1',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Deepcool AK620 Dual Tower',
                asin: 'B09LGY38L4',
                price: 64.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p High-Ultra, 75+ FPS',
            'CPU': 'AMD Ryzen 7 7700X (8 Cores)',
            'GPU': 'NVIDIA RTX 4070 12GB',
            'RAM': '32GB DDR5-6000',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '750W 80+ Gold Modular',
            'Case': 'Lian Li LANCOOL 205 Mesh'
        }
    },

    highend: {
        id: 'gaming-beast',
        name: 'Gaming Beast',
        description: 'Premium 4K gaming system with flagship Amazon components. RTX 4080 SUPER graphics, Ryzen 7800X3D gaming CPU, and 32GB DDR5. Maxes out all games with ray tracing. Amazon Prime shipping included.',
        performance: '4K Gaming',
        price: 2799.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg', // NZXT case image
        components: {
            cpu: {
                name: 'AMD Ryzen 7 7800X3D',
                asin: 'B0BTRH9MNS',
                price: 449.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 4080 SUPER',
                asin: 'B0CQC1RZ2P',
                price: 999.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI MAG X670E Tomahawk WIFI',
                asin: 'B0BH6F1JY1',
                price: 299.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 Neo 32GB DDR5-6000',
                asin: 'B0BHKQG5V7',
                price: 189.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 2TB NVMe',
                asin: 'B0BHJJ9Y77',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair HX850 850W 80+ Platinum',
                asin: 'B08735YQXY',
                price: 164.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'NZXT H7 Flow ATX',
                asin: 'B0BVG9J2N3',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'ARCTIC Liquid Freezer III 360',
                asin: 'B0CGKJ1P7D',
                price: 129.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K High-Ultra, 60+ FPS',
            'CPU': 'AMD Ryzen 7 7800X3D (8 Cores)',
            'GPU': 'NVIDIA RTX 4080 SUPER 16GB',
            'RAM': '32GB DDR5-6000 RGB',
            'Storage': '2TB NVMe PCIe 4.0',
            'PSU': '850W 80+ Platinum',
            'Case': 'NZXT H7 Flow (RGB)'
        }
    },

    workstation: {
        id: 'content-creator',
        name: 'Content Creator',
        description: 'Professional workstation with enterprise-grade Amazon components. Intel i9 CPU, 64GB RAM, and RTX 4080 SUPER for 4K video editing, streaming, and rendering. All parts ship Prime with professional support.',
        performance: 'Workstation',
        price: 3499.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg', // Fractal case image
        components: {
            cpu: {
                name: 'Intel Core i9-14900K',
                asin: 'B0CGJ4MLC2',
                price: 589.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 4080 SUPER',
                asin: 'B0CQC1RZ2P',
                price: 999.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Strix Z790-E Gaming',
                asin: 'B0BCKHWG71',
                price: 499.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Dominator Platinum RGB 64GB DDR5',
                asin: 'B0BHLQG5V9',
                price: 599.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 2TB + 980 Pro 2TB',
                asin: 'B0BHJJ9Y77',
                price: 319.98,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair AX1000 1000W 80+ Titanium',
                asin: 'B07YVVXYFN',
                price: 249.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Fractal Design Define 7 XL',
                asin: 'B085W4L5V1',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'NZXT Kraken Elite 360 RGB',
                asin: 'B0CGKJ1P7E',
                price: 249.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Content Creation',
            'CPU': 'Intel i9-14900K (24 Cores)',
            'GPU': 'NVIDIA RTX 4080 SUPER 16GB',
            'RAM': '64GB DDR5-5600 RGB',
            'Storage': '4TB NVMe (2+2TB)',
            'PSU': '1000W 80+ Titanium',
            'Case': 'Fractal Define 7 XL'
        }
    },

    ultimate: {
        id: 'extreme-edition',
        name: 'Extreme Edition',
        description: 'Ultimate no-compromise build with flagship Amazon components. RTX 4090 graphics, i9-14900KS CPU, 64GB DDR5-6400 RAM, and 4TB NVMe storage. The absolute best available on Amazon with Prime shipping.',
        performance: 'Ultimate',
        price: 4999.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg', // Lian Li O11 case image
        components: {
            cpu: {
                name: 'Intel Core i9-14900KS',
                asin: 'B0CQVN8RZ5',
                price: 699.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 4090',
                asin: 'B0BNRM3X96',
                price: 1599.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Maximus Z790 HERO',
                asin: 'B0BCKHWG72',
                price: 629.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 RGB 64GB DDR5-6400',
                asin: 'B0BHLQG5W1',
                price: 799.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 4TB NVMe',
                asin: 'B0BHJK9Y88',
                price: 399.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'be quiet! Dark Power Pro 12 1200W',
                asin: 'B08BQMZQN8',
                price: 349.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Lian Li O11 Dynamic EVO',
                asin: 'B09Y7MZHY5',
                price: 179.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'NZXT Kraken Z73 360mm RGB',
                asin: 'B082DYT7SM',
                price: 279.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Max Settings, 120+ FPS',
            'CPU': 'Intel i9-14900KS (24 Cores)',
            'GPU': 'NVIDIA RTX 4090 24GB',
            'RAM': '64GB DDR5-6400 RGB',
            'Storage': '4TB NVMe PCIe 4.0',
            'PSU': '1200W 80+ Titanium',
            'Case': 'Lian Li O11 Dynamic EVO'
        }
    },

    // AMD CPU + AMD GPU Builds
    amdBudget: {
        id: 'amd-rdna-budget',
        name: 'AMD RDNA Budget Build',
        description: 'Full AMD gaming system with Ryzen 5 7600X and RX 7600 XT. Perfect 1080p high settings gaming with FSR 3 support. All AMD components for optimal compatibility and value. Prime shipping on all parts.',
        performance: '1080p Gaming',
        price: 1099.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 5 7600X',
                asin: 'B0BBHHT8LY',
                price: 229.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'AMD Radeon RX 7600 XT',
                asin: 'B0D2K8XT7M',
                price: 329.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI B650 Gaming Plus WIFI',
                asin: 'B0BH5K3L9N',
                price: 179.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Flare X5 32GB DDR5-5600',
                asin: 'B0BHKQG5V8',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Western Digital Black SN770 1TB',
                asin: 'B09QV692XS',
                price: 79.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Seasonic FOCUS GX-650W',
                asin: 'B077GJBQZ8',
                price: 109.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Fractal Design Core 1000',
                asin: 'B08D6PQ9B3',
                price: 59.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'AMD Wraith Stealth (Included)',
                asin: 'B0WRAITH01',
                price: 0.00,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1080p High Settings, 80+ FPS',
            'CPU': 'AMD Ryzen 5 7600X (6 Cores)',
            'GPU': 'AMD RX 7600 XT 16GB',
            'RAM': '32GB DDR5-5600',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '650W 80+ Gold',
            'Case': 'Fractal Core 1000'
        }
    },

    amdMidrange: {
        id: 'amd-rdna-performance',
        name: 'AMD RDNA Performance',
        description: 'High-performance AMD build with Ryzen 7 7800X3D and RX 7800 XT. Exceptional 1440p gaming with 3D V-Cache advantage. Pure AMD ecosystem for maximum game optimization and FSR performance.',
        performance: '1440p Gaming',
        price: 1899.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 7 7800X3D',
                asin: 'B0BTRH9MNS',
                price: 449.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'AMD Radeon RX 7800 XT',
                asin: 'B0CD1RHQR7',
                price: 499.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS TUF Gaming X670E-PLUS',
                asin: 'B0BH5K3L9P',
                price: 269.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 Neo 32GB DDR5-6000',
                asin: 'B0BHKQG5V7',
                price: 189.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 980 Pro 2TB',
                asin: 'B08GL575DB',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair RM750x 750W',
                asin: 'B079H6111J',
                price: 129.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Cooler Master MasterBox TD500',
                asin: 'B08D6PQ9B4',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'be quiet! Dark Rock Pro 4',
                asin: 'B07BY6F8D9',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p Ultra Settings, 90+ FPS',
            'CPU': 'AMD Ryzen 7 7800X3D (8 Cores)',
            'GPU': 'AMD RX 7800 XT 16GB',
            'RAM': '32GB DDR5-6000 RGB',
            'Storage': '2TB NVMe PCIe 4.0',
            'PSU': '750W 80+ Gold Modular',
            'Case': 'Cooler Master TD500 RGB'
        }
    },

    amdHighEnd: {
        id: 'amd-rdna-flagship',
        name: 'AMD RDNA Flagship',
        description: 'Ultimate AMD build with Ryzen 9 7950X3D and RX 7900 XTX. Flagship AMD performance for 4K gaming and content creation. 24GB VRAM, 16-core CPU, and DDR5-6400. The ultimate AMD experience.',
        performance: '4K Gaming',
        price: 2899.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 9 7950X3D',
                asin: 'B0BTRRNB8B',
                price: 699.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'AMD Radeon RX 7900 XTX',
                asin: 'B0BNRVZ2D1',
                price: 899.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Crosshair X670E Hero',
                asin: 'B0BH5K3L9Q',
                price: 629.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 Neo 64GB DDR5-6400',
                asin: 'B0BHLQG5W2',
                price: 599.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 4TB',
                asin: 'B0BHJK9Y88',
                price: 399.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Seasonic Prime TX-850W 80+ Titanium',
                asin: 'B082DG1SC4',
                price: 219.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Lian Li PC-O11 Dynamic',
                asin: 'B07JBQZPX1',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Arctic Liquid Freezer III 360',
                asin: 'B0CGKJ1P7D',
                price: 129.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Ultra Settings, 75+ FPS',
            'CPU': 'AMD Ryzen 9 7950X3D (16 Cores)',
            'GPU': 'AMD RX 7900 XTX 24GB',
            'RAM': '64GB DDR5-6400 RGB',
            'Storage': '4TB NVMe PCIe 4.0',
            'PSU': '850W 80+ Titanium',
            'Case': 'Lian Li O11 Dynamic'
        }
    },

    // Intel + RTX 5080/5070 Ti Builds
    intel5080: {
        id: 'intel-rtx5080-build',
        name: 'Intel RTX 5080 Gaming Rig',
        description: 'Powerful Intel i7-14700K paired with RTX 5080 for ultimate 1440p/4K gaming. DLSS 4 support, 16GB GDDR7 VRAM, and Intel Quick Sync for streaming. Perfect balance of gaming and productivity.',
        performance: '1440p/4K Gaming',
        price: 2299.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'Intel Core i7-14700K',
                asin: 'B0CGJ4MLC1',
                price: 409.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5080',
                asin: 'B0DGHJK5080',
                price: 1199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI MAG Z790 Tomahawk MAX WIFI',
                asin: 'B0BCKHWG73',
                price: 279.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Vengeance RGB 32GB DDR5-5600',
                asin: 'B0BHLQG5V6',
                price: 179.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 980 Pro 1TB',
                asin: 'B08GL575DB',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair RM750e 750W',
                asin: 'B0BFG1N9K2',
                price: 139.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'NZXT H5 Flow',
                asin: 'B0BVG9J2N4',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Deepcool AK620 WH',
                asin: 'B09LGY38L5',
                price: 64.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p Ultra, 4K High, 100+ FPS',
            'CPU': 'Intel i7-14700K (20 Cores)',
            'GPU': 'NVIDIA RTX 5080 16GB GDDR7',
            'RAM': '32GB DDR5-5600 RGB',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '750W 80+ Gold Modular',
            'Case': 'NZXT H5 Flow'
        }
    },

    intel5070ti: {
        id: 'intel-rtx5070ti-build',
        name: 'Intel RTX 5070 Ti Performer',
        description: 'Intel i5-14600K with RTX 5070 Ti for excellent 1440p gaming performance. DLSS 4, ray tracing, and 16GB GDDR7. Great price-to-performance for competitive gaming and content creation.',
        performance: '1440p Gaming',
        price: 1799.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'Intel Core i5-14600K',
                asin: 'B0CGH4MLC1',
                price: 319.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5070 Ti',
                asin: 'B0DGHJK5070T',
                price: 899.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS TUF Gaming Z790-PLUS WIFI',
                asin: 'B0BCKHWG74',
                price: 229.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Ripjaws S5 32GB DDR5-5600',
                asin: 'B0BHKQG5V4',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Western Digital Black SN850X 1TB',
                asin: 'B0B3GCZQ7P',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Seasonic FOCUS GX-650W',
                asin: 'B077GJBQZ8',
                price: 109.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Fractal Design Define 7 Compact',
                asin: 'B085W4L5V2',
                price: 129.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Noctua NH-U12S Redux',
                asin: 'B08WRK7WBY',
                price: 49.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p High-Ultra, 85+ FPS',
            'CPU': 'Intel i5-14600K (14 Cores)',
            'GPU': 'NVIDIA RTX 5070 Ti 16GB',
            'RAM': '32GB DDR5-5600',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '650W 80+ Gold',
            'Case': 'Fractal Define 7 Compact'
        }
    },

    // Same CPU Different GPU Tiers - 7800X3D Options
    x3d5090: {
        id: 'x3d-rtx5090-ultimate',
        name: '7800X3D + RTX 5090 Ultimate',
        description: 'AMD Ryzen 7 7800X3D gaming CPU with flagship RTX 5090. Best gaming CPU paired with best gaming GPU. 32GB GDDR7, 4K gaming perfection, and maximum ray tracing performance.',
        performance: '4K Ultimate',
        price: 3399.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 7 7800X3D',
                asin: 'B0BTRH9MNS',
                price: 449.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5090',
                asin: 'B0DGHJK5090',
                price: 1999.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Strix X670E-E Gaming',
                asin: 'B0BH5K3L9R',
                price: 499.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 Neo 32GB DDR5-6000',
                asin: 'B0BHKQG5V7',
                price: 189.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 2TB',
                asin: 'B0BHJJ9Y77',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair HX1000 1000W 80+ Platinum',
                asin: 'B08735YQXY',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Lian Li O11 Dynamic EVO',
                asin: 'B09Y7MZHY5',
                price: 179.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Arctic Liquid Freezer III 360',
                asin: 'B0CGKJ1P7D',
                price: 129.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Max Settings, 120+ FPS',
            'CPU': 'AMD Ryzen 7 7800X3D (8 Cores)',
            'GPU': 'NVIDIA RTX 5090 32GB GDDR7',
            'RAM': '32GB DDR5-6000 RGB',
            'Storage': '2TB NVMe PCIe 4.0',
            'PSU': '1000W 80+ Platinum',
            'Case': 'Lian Li O11 Dynamic EVO'
        }
    },

    x3d5080: {
        id: 'x3d-rtx5080-performance',
        name: '7800X3D + RTX 5080 Performance',
        description: 'AMD Ryzen 7 7800X3D with RTX 5080 for exceptional 1440p and 4K gaming. Perfect gaming CPU with high-end GPU. DLSS 4, ray tracing, and 3D V-Cache gaming advantage.',
        performance: '1440p/4K Gaming',
        price: 2649.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 7 7800X3D',
                asin: 'B0BTRH9MNS',
                price: 449.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5080',
                asin: 'B0DGHJK5080',
                price: 1199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI MAG X670E Tomahawk WIFI',
                asin: 'B0BH6F1JY1',
                price: 299.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 Neo 32GB DDR5-6000',
                asin: 'B0BHKQG5V7',
                price: 189.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 980 Pro 1TB',
                asin: 'B08GL575DB',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair RM850x 850W',
                asin: 'B079H615DG',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'NZXT H7 Flow',
                asin: 'B0BVG9J2N3',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'be quiet! Dark Rock Pro 4',
                asin: 'B07BY6F8D9',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p Ultra, 4K High, 100+ FPS',
            'CPU': 'AMD Ryzen 7 7800X3D (8 Cores)',
            'GPU': 'NVIDIA RTX 5080 16GB GDDR7',
            'RAM': '32GB DDR5-6000 RGB',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '850W 80+ Gold Modular',
            'Case': 'NZXT H7 Flow RGB'
        }
    },

    x3d5070ti: {
        id: 'x3d-rtx5070ti-balanced',
        name: '7800X3D + RTX 5070 Ti Balanced',
        description: 'AMD Ryzen 7 7800X3D with RTX 5070 Ti for optimized 1440p gaming. Best gaming CPU with excellent 1440p GPU. Perfect balance of price and performance for competitive gaming.',
        performance: '1440p Gaming',
        price: 1949.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 7 7800X3D',
                asin: 'B0BTRH9MNS',
                price: 449.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5070 Ti',
                asin: 'B0DGHJK5070T',
                price: 899.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS TUF Gaming X670E-PLUS',
                asin: 'B0BH5K3L9P',
                price: 269.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Flare X5 32GB DDR5-5600',
                asin: 'B0BHKQG5V8',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Western Digital Black SN850X 1TB',
                asin: 'B0B3GCZQ7P',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Seasonic FOCUS GX-750W',
                asin: 'B077GJBQZ9',
                price: 119.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Fractal Design Define 7',
                asin: 'B085W4L5V1',
                price: 169.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Deepcool AK620',
                asin: 'B09LGY38L4',
                price: 64.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p Ultra Settings, 90+ FPS',
            'CPU': 'AMD Ryzen 7 7800X3D (8 Cores)',
            'GPU': 'NVIDIA RTX 5070 Ti 16GB',
            'RAM': '32GB DDR5-5600',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '750W 80+ Gold',
            'Case': 'Fractal Define 7'
        }
    },

    // Latest Gen Components - User Suggestions
    rx9070xtBuild: {
        id: 'amd-rx9070xt-flagship',
        name: 'AMD RX 9070 XT Beast',
        description: 'Latest AMD Ryzen 9 9800X3D paired with PowerColor RX 9070 XT. Next-gen RDNA 4 graphics with 16GB GDDR6 and advanced FSR 4. Ultimate AMD gaming performance for 2025.',
        performance: '4K Gaming',
        price: 2699.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 9 9800X3D',
                asin: 'B0D9800X3D',
                price: 549.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'PowerColor Hellhound RX 9070 XT 16GB',
                asin: 'B0RX9070XT',
                price: 799.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Strix X870E-E Gaming',
                asin: 'B0X870STRIX',
                price: 449.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 Neo 32GB DDR5-6000',
                asin: 'B0BHKQG5V7',
                price: 189.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 2TB',
                asin: 'B0BHJJ9Y77',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair RM850x 850W',
                asin: 'B079H615DG',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Lian Li PC-O11 Dynamic',
                asin: 'B07JBQZPX1',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Arctic Liquid Freezer III 360',
                asin: 'B0CGKJ1P7D',
                price: 129.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Ultra Settings, 80+ FPS',
            'CPU': 'AMD Ryzen 9 9800X3D (8 Cores)',
            'GPU': 'AMD RX 9070 XT 16GB GDDR6',
            'RAM': '32GB DDR5-6000 RGB',
            'Storage': '2TB NVMe PCIe 4.0',
            'PSU': '850W 80+ Gold Modular',
            'Case': 'Lian Li O11 Dynamic'
        }
    },

    rx7700xtBuild: {
        id: 'gigabyte-rx7700xt-gamer',
        name: 'GIGABYTE RX 7700 XT Gamer',
        description: 'AMD Ryzen 7 5800X with GIGABYTE RX 7700 XT Gaming OC. Excellent 1440p gaming build with proven Zen 3 architecture. WINDFORCE cooling and 12GB GDDR6 for smooth high-settings gaming.',
        performance: '1440p Gaming',
        price: 1499.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 7 5800X',
                asin: 'B0815XFSGK',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'GIGABYTE RX 7700 XT Gaming OC 12GB',
                asin: 'B0RX7700XT',
                price: 449.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI B550 Gaming Plus WIFI',
                asin: 'B089CQFH2Q',
                price: 139.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Vengeance LPX 32GB DDR4-3600',
                asin: 'B0143UM4TC',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Western Digital Black SN770 1TB',
                asin: 'B09QV692XS',
                price: 79.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Seasonic FOCUS GX-750W',
                asin: 'B077GJBQZ9',
                price: 119.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Cooler Master MasterBox TD500',
                asin: 'B08D6PQ9B4',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'be quiet! Dark Rock 4',
                asin: 'B074P3JBQD',
                price: 74.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p High-Ultra, 85+ FPS',
            'CPU': 'AMD Ryzen 7 5800X (8 Cores)',
            'GPU': 'GIGABYTE RX 7700 XT 12GB',
            'RAM': '32GB DDR4-3600',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '750W 80+ Gold',
            'Case': 'Cooler Master TD500 RGB'
        }
    },

    intel12900kfBuild: {
        id: 'intel-12900kf-powerhouse',
        name: 'Intel 12900KF Powerhouse',
        description: 'Intel Core i9-12900KF with RTX 5070 for exceptional gaming and productivity. 16-core hybrid architecture with P and E cores. Perfect for streaming, content creation, and AAA gaming.',
        performance: '1440p Gaming',
        price: 2099.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'Intel Core i9-12900KF',
                asin: 'B09FXFJW2F',
                price: 399.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5070',
                asin: 'B0DGHJK5070',
                price: 699.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI MAG Z690 Tomahawk WIFI',
                asin: 'B0BCKHWG75',
                price: 219.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 32GB DDR5-5600',
                asin: 'B0BHKQG5V5',
                price: 169.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 980 Pro 1TB',
                asin: 'B08GL575DB',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair RM750e 750W',
                asin: 'B0BFG1N9K2',
                price: 139.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'NZXT H5 Flow',
                asin: 'B0BVG9J2N4',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Deepcool AK620',
                asin: 'B09LGY38L4',
                price: 64.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p High Settings, 90+ FPS',
            'CPU': 'Intel i9-12900KF (16 Cores)',
            'GPU': 'NVIDIA RTX 5070 12GB',
            'RAM': '32GB DDR5-5600',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '750W 80+ Gold Modular',
            'Case': 'NZXT H5 Flow'
        }
    },

    ryzen9950xBuild: {
        id: 'amd-9950x-workstation',
        name: 'AMD 9950X Content Creator',
        description: 'AMD Ryzen 9 9950X 16-core powerhouse with RTX 5080 for ultimate content creation. 32-thread performance for video editing, 3D rendering, and streaming while gaming at 4K.',
        performance: 'Workstation',
        price: 3199.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 9 9950X',
                asin: 'B0D9950X16',
                price: 649.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5080',
                asin: 'B0DGHJK5080',
                price: 1199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Crosshair X870E Hero',
                asin: 'B0X870HERO',
                price: 699.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 Neo 64GB DDR5-6000',
                asin: 'B0BHLQG5W2',
                price: 599.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 4TB',
                asin: 'B0BHJK9Y88',
                price: 399.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair HX1000 1000W 80+ Platinum',
                asin: 'B08735YQXY',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Fractal Design Define 7 XL',
                asin: 'B085W4L5V1',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'NZXT Kraken Elite 360 RGB',
                asin: 'B0CGKJ1P7E',
                price: 249.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Content Creation + Gaming',
            'CPU': 'AMD Ryzen 9 9950X (16 Cores)',
            'GPU': 'NVIDIA RTX 5080 16GB GDDR7',
            'RAM': '64GB DDR5-6000 RGB',
            'Storage': '4TB NVMe PCIe 4.0',
            'PSU': '1000W 80+ Platinum',
            'Case': 'Fractal Define 7 XL'
        }
    },

    // Premium Airflow Builds with Latest Cases
    nzxtH6Premium: {
        id: 'nzxt-h6-premium-build',
        name: 'NZXT H6 Flow Premium',
        description: 'Premium dual-chamber build with NZXT H6 Flow white case. AMD Ryzen 7 7800X3D with RTX 5070 Ti in a compact, high-airflow design. Panoramic glass panels showcase the clean cable management.',
        performance: '1440p Gaming',
        price: 2149.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 7 7800X3D',
                asin: 'B0BTRH9MNS',
                price: 449.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5070 Ti',
                asin: 'B0DGHJK5070T',
                price: 899.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS TUF Gaming X670E-PLUS WIFI',
                asin: 'B0BH5K3L9P',
                price: 269.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Vengeance RGB 32GB DDR5-6000',
                asin: 'B0BHLQG5V6',
                price: 179.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 980 Pro 1TB',
                asin: 'B08GL575DB',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair RM750e 750W',
                asin: 'B0BFG1N9K2',
                price: 139.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'NZXT H6 Flow Dual-Chamber White',
                asin: 'B0H6FLOW01',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'NZXT Kraken X63 280mm RGB',
                asin: 'B082DYT7SM',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p Ultra Settings, 95+ FPS',
            'CPU': 'AMD Ryzen 7 7800X3D (8 Cores)',
            'GPU': 'NVIDIA RTX 5070 Ti 16GB',
            'RAM': '32GB DDR5-6000 RGB',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '750W 80+ Gold Modular',
            'Case': 'NZXT H6 Flow Dual-Chamber'
        }
    },

    foifkinF600RGB: {
        id: 'foifkin-f600-rgb-showcase',
        name: 'FOIFKIN F600 RGB Showcase',
        description: 'Intel i7-14700K with RTX 5080 in stunning FOIFKIN F600 case. Pre-installed 7 PWM ARGB fans with Type-C connectivity. 270° panoramic glass for maximum RGB showcase. Ultimate airflow and aesthetics.',
        performance: '1440p/4K Gaming',
        price: 2599.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'Intel Core i7-14700K',
                asin: 'B0CGJ4MLC1',
                price: 409.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5080',
                asin: 'B0DGHJK5080',
                price: 1199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI MAG Z790 Tomahawk MAX WIFI',
                asin: 'B0BCKHWG73',
                price: 279.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 RGB 32GB DDR5-6000',
                asin: 'B0BHKQG5V7',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 2TB',
                asin: 'B0BHJJ9Y77',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair RM850x 850W',
                asin: 'B079H615DG',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'FOIFKIN F600 7x ARGB Fans Black',
                asin: 'B0F600ARGB',
                price: 129.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Corsair H100i Elite Capellix RGB',
                asin: 'B08G1FN4XX',
                price: 169.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p Ultra, 4K High, 110+ FPS',
            'CPU': 'Intel i7-14700K (20 Cores)',
            'GPU': 'NVIDIA RTX 5080 16GB GDDR7',
            'RAM': '32GB DDR5-6000 RGB',
            'Storage': '2TB NVMe PCIe 4.0',
            'PSU': '850W 80+ Gold Modular',
            'Case': 'FOIFKIN F600 (7x ARGB Fans)'
        }
    },

    hyxnH1Ultimate: {
        id: 'hyxn-h1-ultimate-cooling',
        name: 'HYXN H1 Ultimate Cooling',
        description: 'AMD Ryzen 9 9950X with RTX 5090 in HYXN H1 dual-cavity case. Pre-installed 7 PWM ARGB fans with support for 3x 360mm radiators simultaneously. Ultimate cooling for maximum performance.',
        performance: '4K Ultimate',
        price: 4299.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 9 9950X',
                asin: 'B0D9950X16',
                price: 649.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5090',
                asin: 'B0DGHJK5090',
                price: 1999.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Crosshair X870E Hero',
                asin: 'B0X870HERO',
                price: 699.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'G.Skill Trident Z5 Neo 64GB DDR5-6400',
                asin: 'B0BHLQG5W2',
                price: 599.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 4TB',
                asin: 'B0BHJK9Y88',
                price: 399.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair AX1200i 1200W 80+ Platinum',
                asin: 'B00A0HZMGA',
                price: 299.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'HYXN H1 Dual-Cavity 7x ARGB Black',
                asin: 'B0H1HYXNPC',
                price: 179.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'NZXT Kraken Z73 360mm RGB',
                asin: 'B082DYT7SM',
                price: 279.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Max Settings, 120+ FPS',
            'CPU': 'AMD Ryzen 9 9950X (16 Cores)',
            'GPU': 'NVIDIA RTX 5090 32GB GDDR7',
            'RAM': '64GB DDR5-6400 RGB',
            'Storage': '4TB NVMe PCIe 4.0',
            'PSU': '1200W 80+ Platinum',
            'Case': 'HYXN H1 (7x ARGB, 3x 360mm Support)'
        }
    },

    corsair3500xWhite: {
        id: 'corsair-3500x-white-elite',
        name: 'Corsair 3500X White Elite',
        description: 'Intel i9-14900K with RTX 5080 in pristine white Corsair 3500X ARGB case. Reverse connection motherboard support with panoramic tempered glass. 3x RS120 ARGB fans included for premium aesthetics.',
        performance: '4K Gaming',
        price: 3399.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'Intel Core i9-14900K',
                asin: 'B0CGJ4MLC2',
                price: 589.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5080',
                asin: 'B0DGHJK5080',
                price: 1199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Strix Z790-E Gaming WIFI',
                asin: 'B0BCKHWG71',
                price: 499.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Dominator Platinum RGB 32GB DDR5-6000',
                asin: 'B0BHLQG5V9',
                price: 299.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 2TB',
                asin: 'B0BHJJ9Y77',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Corsair HX850 850W 80+ Platinum',
                asin: 'B08735YQXY',
                price: 164.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Corsair 3500X ARGB White',
                asin: 'B03500XWHT',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Corsair H150i Elite Capellix White',
                asin: 'B08G1H8BLW',
                price: 189.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K High-Ultra, 90+ FPS',
            'CPU': 'Intel i9-14900K (24 Cores)',
            'GPU': 'NVIDIA RTX 5080 16GB GDDR7',
            'RAM': '32GB DDR5-6000 RGB',
            'Storage': '2TB NVMe PCIe 4.0',
            'PSU': '850W 80+ Platinum',
            'Case': 'Corsair 3500X ARGB White'
        }
    },

    // Latest 2025 PSU & RAM Builds
    msiA850Premium: {
        id: 'msi-a850-premium-build',
        name: 'MSI A850GL Premium Gaming',
        description: 'Intel i7-14700K with RTX 5080 powered by MSI MAG A850GL PSU. Latest PCIe 5.1 & ATX 3.1 standards with compact design. Crucial Pro DDR5-6000 32GB for optimal gaming performance.',
        performance: '1440p/4K Gaming',
        price: 2449.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'Intel Core i7-14700K',
                asin: 'B0CGJ4MLC1',
                price: 409.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5080',
                asin: 'B0DGHJK5080',
                price: 1199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI MAG Z790 Tomahawk MAX WIFI',
                asin: 'B0BCKHWG73',
                price: 279.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Crucial Pro 32GB DDR5-6000 CL36',
                asin: 'BCP2K16G60C36',
                price: 149.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 980 Pro 1TB',
                asin: 'B08GL575DB',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'MSI MAG A850GL PCIe 5.1 850W',
                asin: 'BA850GL2025',
                price: 129.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'NZXT H5 Flow',
                asin: 'B0BVG9J2N4',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'Deepcool AK620',
                asin: 'B09LGY38L4',
                price: 64.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p Ultra, 4K High, 105+ FPS',
            'CPU': 'Intel i7-14700K (20 Cores)',
            'GPU': 'NVIDIA RTX 5080 16GB GDDR7',
            'RAM': '32GB DDR5-6000 CL36',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '850W PCIe 5.1/ATX 3.1',
            'Case': 'NZXT H5 Flow'
        }
    },

    asusStrix1000W: {
        id: 'asus-strix-1000w-flagship',
        name: 'ASUS ROG Strix Flagship',
        description: 'AMD Ryzen 9 9950X with RTX 5090 powered by ASUS ROG Strix 1000W Platinum PSU. GaN MOSFET technology with GPU-First voltage stabilizer. Corsair Vengeance RGB DDR5-6400 64GB for ultimate performance.',
        performance: '4K Ultimate',
        price: 4699.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 9 9950X',
                asin: 'B0D9950X16',
                price: 649.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5090',
                asin: 'B0DGHJK5090',
                price: 1999.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Crosshair X870E Hero',
                asin: 'B0X870HERO',
                price: 699.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Vengeance RGB DDR5-6400 32GB',
                asin: 'BCMH32GX5M2B',
                price: 299.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 4TB',
                asin: 'B0BHJK9Y88',
                price: 399.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'ASUS ROG Strix 1000W Platinum',
                asin: 'BSTRIX1000W',
                price: 249.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Lian Li O11 Dynamic EVO',
                asin: 'B09Y7MZHY5',
                price: 179.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'NZXT Kraken Z73 360mm RGB',
                asin: 'B082DYT7SM',
                price: 279.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Max Settings, 130+ FPS',
            'CPU': 'AMD Ryzen 9 9950X (16 Cores)',
            'GPU': 'NVIDIA RTX 5090 32GB GDDR7',
            'RAM': '32GB DDR5-6400 RGB',
            'Storage': '4TB NVMe PCIe 4.0',
            'PSU': '1000W 80+ Platinum GaN',
            'Case': 'Lian Li O11 Dynamic EVO'
        }
    },

    agt1000Workstation: {
        id: 'agt-1000w-content-beast',
        name: 'AGT 1000W Content Beast',
        description: 'Intel i9-14900K with RTX 5080 powered by AGT Series 1000W Gold PSU. Corsair Vengeance DDR5-5200 64GB for massive content creation projects. Compact 140mm PSU design with 10-year warranty.',
        performance: 'Workstation',
        price: 3799.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'Intel Core i9-14900K',
                asin: 'B0CGJ4MLC2',
                price: 589.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5080',
                asin: 'B0DGHJK5080',
                price: 1199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'ASUS ROG Strix Z790-E Gaming WIFI',
                asin: 'B0BCKHWG71',
                price: 499.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Vengeance DDR5-5200 64GB',
                asin: 'BCMK64GX5M2B',
                price: 499.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Samsung 990 Pro 2TB',
                asin: 'B0BHJJ9Y77',
                price: 159.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'AGT Series 1000W 80+ Gold',
                asin: 'BAGT1000W80',
                price: 179.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Fractal Design Define 7 XL',
                asin: 'B085W4L5V1',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'NZXT Kraken Elite 360 RGB',
                asin: 'B0CGKJ1P7E',
                price: 249.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '4K Content Creation + Gaming',
            'CPU': 'Intel i9-14900K (24 Cores)',
            'GPU': 'NVIDIA RTX 5080 16GB GDDR7',
            'RAM': '64GB DDR5-5200',
            'Storage': '2TB NVMe PCIe 4.0',
            'PSU': '1000W 80+ Gold Compact',
            'Case': 'Fractal Define 7 XL'
        }
    },

    budgetDDR4Build: {
        id: 'corsair-lpx-ddr4-value',
        name: 'Corsair LPX DDR4 Value',
        description: 'AMD Ryzen 7 5800X with RTX 5070 Ti and proven Corsair Vengeance LPX DDR4-3200 32GB. Excellent price-to-performance with mature DDR4 platform. Perfect for 1440p gaming without breaking the bank.',
        performance: '1440p Gaming',
        price: 1899.99,
        image: 'https://m.media-amazon.com/images/I/71K+XAyJJbL._AC_SX679_.jpg',
        components: {
            cpu: {
                name: 'AMD Ryzen 7 5800X',
                asin: 'B0815XFSGK',
                price: 199.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            gpu: {
                name: 'NVIDIA GeForce RTX 5070 Ti',
                asin: 'B0DGHJK5070T',
                price: 899.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            motherboard: {
                name: 'MSI B550 Gaming Plus WIFI',
                asin: 'B089CQFH2Q',
                price: 139.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            ram: {
                name: 'Corsair Vengeance LPX DDR4-3200 32GB',
                asin: 'BCMK32GX4M2E',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            storage: {
                name: 'Western Digital Black SN850X 1TB',
                asin: 'B0B3GCZQ7P',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            psu: {
                name: 'Seasonic FOCUS GX-750W',
                asin: 'B077GJBQZ9',
                price: 119.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            case: {
                name: 'Cooler Master MasterBox TD500',
                asin: 'B08D6PQ9B4',
                price: 99.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            },
            cooler: {
                name: 'be quiet! Dark Rock Pro 4',
                asin: 'B07BY6F8D9',
                price: 89.99,
                amazonUrl: 'https://amzn.to/your-affiliate-link'
            }
        },
        specs: {
            'Performance': '1440p High-Ultra, 90+ FPS',
            'CPU': 'AMD Ryzen 7 5800X (8 Cores)',
            'GPU': 'NVIDIA RTX 5070 Ti 16GB',
            'RAM': '32GB DDR4-3200 CL16',
            'Storage': '1TB NVMe PCIe 4.0',
            'PSU': '750W 80+ Gold',
            'Case': 'Cooler Master TD500 RGB'
        }
    }
};

// Additional Product Categories - Matching Hero Page Products
const techProducts = [
    {
        id: 'rtx-5060-ti',
        name: 'RTX 5060 Ti',
        description: 'Best GPU 2025 for gaming - NVIDIA GeForce RTX 5060 Ti with 16GB GDDR7 VRAM. Top graphics card for 1080p and 1440p gaming with ray tracing and DLSS 4. Best value NVIDIA RTX 50 series GPU.',
        price: 399.99,
        image: 'assets/5060ti.webp',
        amazonUrl: 'https://amzn.to/3JTmfrc',
        asin: 'B0D123TECH'
    },
    {
        id: 'rtx-5070',
        name: 'RTX 5070',
        description: 'Best NVIDIA RTX 5070 graphics card 2025 - Mid-range powerhouse with 12GB GDDR7 VRAM. Top GPU for 1440p ultra settings gaming with ray tracing and DLSS 4. Premium RTX 50 series performance.',
        price: 599.99,
        image: 'assets/5070.webp',
        amazonUrl: 'https://amzn.to/4pm8UYo',
        asin: 'B0D456TECH'
    },
    {
        id: 'ledger-nano-s-plus',
        name: 'Ledger Nano S Plus',
        description: 'Hardware wallet with tamper-resistant Secure Element chip. Ultimate protection for your crypto assets.',
        price: 79.99,
        image: 'assets/Nano.jpg',
        amazonUrl: 'https://amzn.to/3VMd6TI',
        asin: 'B09DJQDHKN'
    },
    {
        id: 'trezor-safe-3',
        name: 'Trezor Safe 3',
        description: 'Open-source hardware wallet with auditable firmware. Advanced passphrase protection for enhanced security.',
        price: 89.99,
        image: 'assets/Trezor.jpg',
        amazonUrl: 'https://amzn.to/47I12u8',
        asin: 'B0CDMC15KP'
    },
    {
        id: 'bitcoin-ticker',
        name: 'Bitcoin Ticker',
        description: 'Real-time crypto price display. Monitor thousands of cryptocurrencies at a glance on your desk.',
        price: 149.99,
        image: 'assets/bitcointicker.jpg',
        amazonUrl: 'https://amzn.to/3VO9MaJ',
        asin: 'B0B6GHPC41'
    }
];

const gamingAccessories = [
    {
        id: 'logitech-g-pro-x',
        name: 'Logitech G PRO X Gaming Headset',
        description: 'Professional gaming headset with Blue Voice technology',
        price: 129.99,
        image: 'https://m.media-amazon.com/images/I/61tzEXNmE-L._AC_SX679_.jpg',
        amazonUrl: 'https://amzn.to/your-affiliate-link',
        asin: 'B07TQM2C7B'
    },
    {
        id: 'razer-deathadder-v3',
        name: 'Razer DeathAdder V3 Gaming Mouse',
        description: 'Ergonomic gaming mouse with Focus Pro sensor',
        price: 89.99,
        image: 'https://m.media-amazon.com/images/I/61mpMUJm2fL._AC_SX679_.jpg',
        amazonUrl: 'https://amzn.to/your-affiliate-link',
        asin: 'B0B1M6J7RC'
    },
    {
        id: 'corsair-k100-rgb',
        name: 'Corsair K100 RGB Gaming Keyboard',
        description: 'Premium mechanical gaming keyboard with RGB lighting',
        price: 229.99,
        image: 'https://m.media-amazon.com/images/I/814RfMaJCcL._AC_SX679_.jpg',
        amazonUrl: 'https://amzn.to/your-affiliate-link',
        asin: 'B08B3MZ6W5'
    },
    {
        id: 'steelseries-arctis-7p',
        name: 'SteelSeries Arctis 7P Wireless',
        description: 'Wireless gaming headset with lossless audio',
        price: 149.99,
        image: 'https://m.media-amazon.com/images/I/81uYjyLGF8L._AC_SX679_.jpg',
        amazonUrl: 'https://amzn.to/your-affiliate-link',
        asin: 'B08H4S6Y6P'
    },
    {
        id: 'elgato-stream-deck',
        name: 'Elgato Stream Deck MK.2',
        description: 'Content creation controller with customizable keys',
        price: 149.99,
        image: 'https://m.media-amazon.com/images/I/71eF6KxtnsL._AC_SX679_.jpg',
        amazonUrl: 'https://amzn.to/your-affiliate-link',
        asin: 'B09738BQPB'
    }
];

// Carousel drag functionality
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = {};

// Function to create carousel card HTML
function createCarouselCard(productData, type = 'pc') {
    const shortDescription = productData.description.split('.')[0] + '.';

    if (type === 'pc') {
        return `
            <div class="carousel-card" data-pc-id="${productData.id}" onclick="viewProduct('${productData.id}')">
                <div class="pc-image">
                    <img src="${productData.image}" alt="${productData.name}">
                    <div class="performance-badge">${productData.performance}</div>
                </div>
                <div class="pc-content">
                    <h3 class="pc-name">${productData.name}</h3>
                    <p class="pc-description">${shortDescription}</p>

                    <div class="pc-pricing">
                        <div class="pc-price">$${productData.price.toFixed(2)}</div>
                        <div class="price-label">All Components Included</div>
                    </div>

                    <div class="card-actions">
                        <button class="view-details-button" onclick="event.stopPropagation(); viewProduct('${productData.id}')">
                            Details
                        </button>
                        <button class="quick-buy-button" onclick="event.stopPropagation(); addPCToAmazonCart('${productData.id}')">
                            Add to Amazon Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Use same design structure as PC cards for all product types
        const badgeText = type === 'tech' ? 'Popular' : type === 'accessories' ? 'Gaming' : 'Popular';
        const priceLabel = type === 'tech' ? 'Amazon Prime Eligible' : type === 'accessories' ? 'Gaming Essential' : 'Amazon Prime Eligible';

        return `
            <div class="carousel-card" data-product-id="${productData.id}" onclick="addSingleProductToCart('${productData.asin}', '${productData.name}', ${productData.price})">
                <div class="pc-image">
                    <img src="${productData.image}" alt="${productData.name}">
                    <div class="performance-badge">${badgeText}</div>
                </div>
                <div class="pc-content">
                    <h3 class="pc-name">${productData.name}</h3>
                    <p class="pc-description">${shortDescription}</p>

                    <div class="pc-pricing">
                        <div class="pc-price">$${productData.price.toFixed(2)}</div>
                        <div class="price-label">${priceLabel}</div>
                    </div>

                    <div class="card-actions">
                        <button class="view-details-button" onclick="event.stopPropagation(); viewProductDetails('${productData.id}', '${type}')">
                            Details
                        </button>
                        <button class="quick-buy-button" onclick="event.stopPropagation(); addSingleProductToCart('${productData.asin}', '${productData.name}', ${productData.price})">
                            Add to Amazon Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Function to add PC components to Amazon cart
function addPCToAmazonCart(pcId) {
    const pc = customPCs[Object.keys(customPCs).find(key => customPCs[key].id === pcId)];
    if (!pc) {
        alert('PC configuration not found.');
        return;
    }

    // Get all component ASINs
    const components = Object.values(pc.components);

    // Create Amazon cart URL with all ASINs
    const amazonCartUrl = `https://www.amazon.com/gp/aws/cart/add.html?AssociateTag=techreviewb-20` +
        components.map((comp, index) =>
            `&ASIN.${index + 1}=${comp.asin}&Quantity.${index + 1}=1`
        ).join('');

    // Show confirmation dialog
    const componentNames = components.map(comp => comp.name).join('\n• ');

    const confirmation = confirm(`🛒 Add "${pc.name}" to Amazon cart?\n\n📦 Components:\n• ${componentNames}\n\n💰 Total: $${pc.price.toFixed(2)}\n\nThis will open Amazon in a new tab with all components in your cart.`);

    if (confirmation) {
        // Open Amazon cart in new window
        window.open(amazonCartUrl, '_blank');

        // Track the cart addition (optional analytics)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'add_to_cart', {
                'event_category': 'Prebuilt PC',
                'event_label': pc.name,
                'value': pc.price
            });
        }

        // Show success message
        setTimeout(() => {
            alert(`🎉 ${pc.name} added to Amazon cart! Check your Amazon tab to proceed with checkout.`);
        }, 1000);
    }
}

// Function to view individual product page
function viewProduct(pcId) {
    window.location.href = `product.html?id=${pcId}`;
}

// Function to view product details for tech products and accessories
function viewProductDetails(productId, type) {
    let product;

    if (type === 'tech') {
        product = techProducts.find(p => p.id === productId);
    } else if (type === 'accessories') {
        product = gamingAccessories.find(p => p.id === productId);
    }

    if (!product) {
        alert('Product details not found.');
        return;
    }

    // Create detailed product info popup
    const detailsHtml = `
        <div style="max-width: 500px; text-align: left;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="${product.image}" alt="${product.name}" style="width: 200px; height: 200px; object-fit: cover; border-radius: 10px;">
            </div>
            <h3 style="color: #00d4ff; margin-bottom: 10px;">${product.name}</h3>
            <p style="color: #fff; margin-bottom: 15px; line-height: 1.5;">${product.description}</p>
            <div style="background: linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(196, 69, 105, 0.1)); padding: 15px; border-radius: 10px; border: 1px solid rgba(255, 107, 157, 0.3); text-align: center;">
                <div style="font-size: 1.8rem; font-weight: 700; color: #ff6b9d; margin-bottom: 5px;">$${product.price.toFixed(2)}</div>
                <div style="color: #fff; opacity: 0.7;">Amazon Prime Eligible</div>
            </div>
        </div>
    `;

    // Show details in alert (you could replace this with a proper modal)
    const confirmation = confirm(`${product.name}\n\n${product.description}\n\nPrice: $${product.price.toFixed(2)}\n\nWould you like to add this to your Amazon cart?`);

    if (confirmation) {
        addSingleProductToCart(product.asin, product.name, product.price);
    }
}

// Function to add single product to Amazon cart
function addSingleProductToCart(asin, name, price) {
    const amazonCartUrl = `https://www.amazon.com/gp/aws/cart/add.html?AssociateTag=techreviewb-20&ASIN.1=${asin}&Quantity.1=1`;

    const confirmation = confirm(`🛒 Add "${name}" to Amazon cart?\n\n💰 Price: $${price.toFixed(2)}\n\nThis will open Amazon in a new tab.`);

    if (confirmation) {
        window.open(amazonCartUrl, '_blank');

        if (typeof gtag !== 'undefined') {
            gtag('event', 'add_to_cart', {
                'event_category': 'Single Product',
                'event_label': name,
                'value': price
            });
        }

        setTimeout(() => {
            alert(`🎉 ${name} added to Amazon cart!`);
        }, 1000);
    }
}

// Function to render carousel
function renderCarousel(containerId, products, type = 'pc') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const carouselCards = products.map(product => createCarouselCard(product, type)).join('');
    container.innerHTML = carouselCards;

    // Initialize drag functionality
    initCarouselDrag(containerId);
}

// Professional carousel scroll functionality
function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const cardWidth = 280; // Width of each card
    const gap = 20; // Gap between cards
    const scrollDistance = (cardWidth + gap) * 2; // Scroll 2 cards at a time

    const currentScroll = carousel.scrollLeft;
    const targetScroll = currentScroll + (scrollDistance * direction);

    carousel.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
}

// Function to initialize carousel drag functionality
function initCarouselDrag(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'default';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'default';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
    });
}

// Function to render all carousels
function renderAllCarousels() {
    // Render PC carousel
    renderCarousel('pcCarousel', Object.values(customPCs), 'pc');

    // Render tech products carousel
    renderCarousel('techCarousel', techProducts, 'tech');

    // Render gaming accessories carousel
    renderCarousel('accessoriesCarousel', gamingAccessories, 'accessories');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderAllCarousels();
});

// Store Navigation Functions
function navigateToPage(page) {
    switch(page) {
        case 'components':
            window.location.href = 'store-components.html';
            break;
        case 'trending':
            window.location.href = 'store-trending.html';
            break;
        case 'accessories':
            window.location.href = 'store-accessories.html';
            break;
        case 'crypto':
            window.location.href = 'store-crypto.html';
            break;
        default:
            console.log('Unknown page:', page);
    }
}

// Render featured products for homepage
function renderFeaturedProducts() {
    const featuredProducts = [
        customPCs.x3d5090, // 7800X3D + RTX 5090 Ultimate
        customPCs.asusStrix1000W, // ASUS ROG Strix Flagship
        customPCs.rx9070xtBuild, // AMD RX 9070 XT Beast
        customPCs.foifkinF600RGB, // FOIFKIN F600 RGB Showcase
        customPCs.nzxtH6Premium, // NZXT H6 Flow Premium
        techProducts[0], // RTX 5060 Ti
        techProducts[1], // RTX 5070
        gamingAccessories[0] // Logitech G PRO X
    ];

    const container = document.getElementById('featuredCarousel');
    if (!container) return;

    const featuredCards = featuredProducts.map(product => {
        if (product.components) {
            // It's a PC build
            return createCarouselCard(product, 'pc');
        } else {
            // It's a single product
            return createCarouselCard(product, 'tech');
        }
    }).join('');

    container.innerHTML = featuredCards;
    initCarouselDrag('featuredCarousel');
}

// Update the main render function
function renderAllCarousels() {
    // Check if we're on the main store page
    if (document.getElementById('featuredCarousel')) {
        renderFeaturedProducts();
    }

    // Render other carousels if they exist (for other pages)
    if (document.getElementById('pcCarousel')) {
        renderCarousel('pcCarousel', Object.values(customPCs).slice(0, 8), 'pc');
    }

    if (document.getElementById('techCarousel')) {
        renderCarousel('techCarousel', techProducts, 'tech');
    }

    if (document.getElementById('accessoriesCarousel')) {
        renderCarousel('accessoriesCarousel', gamingAccessories, 'accessories');
    }
}

// Export functions for global access
window.addPCToAmazonCart = addPCToAmazonCart;
window.addSingleProductToCart = addSingleProductToCart;
window.viewProduct = viewProduct;
window.viewProductDetails = viewProductDetails;
window.scrollCarousel = scrollCarousel;
window.navigateToPage = navigateToPage;
window.customPCs = customPCs;
window.techProducts = techProducts;
window.gamingAccessories = gamingAccessories;