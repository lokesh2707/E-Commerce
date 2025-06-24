import { Product } from '../types';

export const products: Product[] = [
  // Electronics Category (25 products)
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Experience superior sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Premium materials',
      'Touch controls'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1247,
    brand: 'SoundPro'
  },
  {
    id: '2',
    name: '4K Ultra HD Smart TV 55"',
    price: 649.99,
    originalPrice: 799.99,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Immerse yourself in stunning 4K resolution with HDR support and smart TV capabilities.',
    features: [
      '4K Ultra HD Resolution',
      'HDR10 Support',
      'Smart TV Platform',
      'Voice Remote',
      'Multiple HDMI Ports'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 892,
    brand: 'VisionTech'
  },
  {
    id: '3',
    name: 'Wireless Charging Pad',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
    features: [
      'Fast charging',
      'Qi compatible',
      'LED indicator',
      'Non-slip surface',
      'Compact design'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 321,
    brand: 'ChargeTech'
  },
  {
    id: '4',
    name: 'Bluetooth Speaker Portable',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with 360-degree sound, waterproof design, and 20-hour battery life.',
    features: [
      '360-degree sound',
      'Waterproof',
      '20-hour battery',
      'Portable design',
      'Voice assistant'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 667,
    brand: 'SoundWave'
  },
  {
    id: '5',
    name: 'Smartphone 128GB',
    price: 699.99,
    originalPrice: 799.99,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Latest smartphone with advanced camera system, fast processor, and all-day battery life.',
    features: [
      'Triple camera system',
      '128GB storage',
      'Fast charging',
      '6.1-inch display',
      'Face ID'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 1543,
    brand: 'TechPhone'
  },
  {
    id: '6',
    name: 'Laptop 15.6" Intel i7',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'High-performance laptop with Intel i7 processor, 16GB RAM, and 512GB SSD for professional use.',
    features: [
      'Intel i7 processor',
      '16GB RAM',
      '512GB SSD',
      '15.6-inch Full HD',
      'Backlit keyboard'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 756,
    brand: 'ProBook'
  },
  {
    id: '7',
    name: 'Tablet 10.9" WiFi',
    price: 449.99,
    originalPrice: 549.99,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Versatile tablet perfect for work and entertainment with stunning display and long battery life.',
    features: [
      '10.9-inch display',
      'All-day battery',
      'WiFi connectivity',
      'Touch ID',
      'Apple Pencil support'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 432,
    brand: 'TabletPro'
  },
  {
    id: '8',
    name: 'Digital Camera DSLR',
    price: 899.99,
    originalPrice: 1099.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Professional DSLR camera with high-resolution sensor and advanced autofocus system.',
    features: [
      '24.2MP sensor',
      '4K video recording',
      'WiFi connectivity',
      'Dual card slots',
      'Weather sealing'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 289,
    brand: 'PhotoMaster'
  },
  {
    id: '9',
    name: 'Smart Watch Series 8',
    price: 399.99,
    originalPrice: 449.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Advanced smartwatch with health monitoring, GPS, and cellular connectivity.',
    features: [
      'Health monitoring',
      'GPS tracking',
      'Cellular connectivity',
      'Water resistant',
      'Always-on display'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 1876,
    brand: 'WatchTech'
  },
  {
    id: '10',
    name: 'Gaming Console Pro',
    price: 499.99,
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Next-generation gaming console with 4K gaming and ultra-fast loading times.',
    features: [
      '4K gaming',
      'Ultra-fast SSD',
      'Ray tracing',
      'Backward compatibility',
      'Wireless controller'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 2341,
    brand: 'GameStation'
  },
  {
    id: '11',
    name: 'Wireless Earbuds Pro',
    price: 179.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Premium wireless earbuds with active noise cancellation and spatial audio.',
    features: [
      'Active noise cancellation',
      'Spatial audio',
      '6-hour battery',
      'Wireless charging case',
      'Sweat resistant'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 987,
    brand: 'AudioPro'
  },
  {
    id: '12',
    name: 'Smart Home Hub',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Central hub for all your smart home devices with voice control and automation.',
    features: [
      'Voice control',
      'Device automation',
      'WiFi 6 support',
      'Touch display',
      'Privacy controls'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 654,
    brand: 'SmartHome'
  },
  {
    id: '13',
    name: 'Drone with 4K Camera',
    price: 799.99,
    originalPrice: 999.99,
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Professional drone with 4K camera, obstacle avoidance, and intelligent flight modes.',
    features: [
      '4K camera',
      'Obstacle avoidance',
      '30-minute flight time',
      'GPS positioning',
      'Intelligent flight modes'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 423,
    brand: 'SkyTech'
  },
  {
    id: '14',
    name: 'VR Headset Pro',
    price: 599.99,
    originalPrice: 699.99,
    image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Immersive VR headset with high-resolution displays and precise tracking.',
    features: [
      'High-resolution displays',
      'Precise tracking',
      'Wireless connectivity',
      'Comfortable design',
      'Hand tracking'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 567,
    brand: 'VirtualTech'
  },
  {
    id: '15',
    name: 'Portable Power Bank 20000mAh',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'High-capacity power bank with fast charging and multiple device support.',
    features: [
      '20000mAh capacity',
      'Fast charging',
      'Multiple ports',
      'LED display',
      'Compact design'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 1234,
    brand: 'PowerTech'
  },
  {
    id: '16',
    name: 'Smart Doorbell Camera',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Smart doorbell with HD video, two-way audio, and motion detection.',
    features: [
      'HD video',
      'Two-way audio',
      'Motion detection',
      'Night vision',
      'Cloud storage'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 789,
    brand: 'SecureTech'
  },
  {
    id: '17',
    name: 'Wireless Mouse Gaming',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'High-precision gaming mouse with customizable buttons and RGB lighting.',
    features: [
      'High-precision sensor',
      'Customizable buttons',
      'RGB lighting',
      'Wireless connectivity',
      'Long battery life'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 456,
    brand: 'GameGear'
  },
  {
    id: '18',
    name: 'USB-C Hub Multiport',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Versatile USB-C hub with multiple ports for enhanced connectivity.',
    features: [
      'Multiple ports',
      'USB-C connectivity',
      '4K HDMI output',
      'Fast data transfer',
      'Compact design'
    ],
    inStock: true,
    rating: 4.3,
    reviews: 234,
    brand: 'ConnectTech'
  },
  {
    id: '19',
    name: 'Smart Light Bulbs Set',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Smart LED bulbs with color changing, dimming, and voice control features.',
    features: [
      'Color changing',
      'Dimming control',
      'Voice control',
      'Energy efficient',
      'App control'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 678,
    brand: 'SmartLight'
  },
  {
    id: '20',
    name: 'Webcam 4K Ultra HD',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Professional 4K webcam with auto-focus and noise-canceling microphone.',
    features: [
      '4K resolution',
      'Auto-focus',
      'Noise-canceling mic',
      'Wide-angle lens',
      'Privacy shutter'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 345,
    brand: 'WebCamPro'
  },
  {
    id: '21',
    name: 'Mechanical Keyboard RGB',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Professional mechanical keyboard with RGB backlighting and programmable keys.',
    features: [
      'Mechanical switches',
      'RGB backlighting',
      'Programmable keys',
      'Anti-ghosting',
      'Durable construction'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 743,
    brand: 'GamePro'
  },
  {
    id: '22',
    name: 'Portable SSD 1TB',
    price: 179.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Ultra-fast portable SSD with 1TB storage and USB-C connectivity.',
    features: [
      '1TB storage',
      'Ultra-fast speeds',
      'USB-C connectivity',
      'Compact design',
      'Hardware encryption'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 567,
    brand: 'StoragePro'
  },
  {
    id: '23',
    name: 'Smart Thermostat',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Intelligent thermostat with learning capabilities and energy-saving features.',
    features: [
      'Learning capabilities',
      'Energy saving',
      'Remote control',
      'Voice control',
      'Easy installation'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 432,
    brand: 'ClimateTech'
  },
  {
    id: '24',
    name: 'Wireless Router WiFi 6',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'High-speed WiFi 6 router with advanced security and mesh capability.',
    features: [
      'WiFi 6 technology',
      'Advanced security',
      'Mesh capability',
      'Gigabit speeds',
      'Easy setup'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 678,
    brand: 'NetTech'
  },
  {
    id: '25',
    name: 'Action Camera 4K',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Rugged 4K action camera with image stabilization and waterproof design.',
    features: [
      '4K video recording',
      'Image stabilization',
      'Waterproof design',
      'Voice control',
      'Multiple mounts'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 543,
    brand: 'ActionPro'
  },

  // Fashion Category (25 products)
  {
    id: '26',
    name: 'Luxury Leather Handbag',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1058558/pexels-photo-1058558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Elegant genuine leather handbag perfect for any occasion. Crafted with premium materials and attention to detail.',
    features: [
      'Genuine leather',
      'Multiple compartments',
      'Adjustable strap',
      'Gold-tone hardware',
      'Dust bag included'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 564,
    brand: 'LuxStyle'
  },
  {
    id: '27',
    name: 'Designer Sunglasses',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Stylish designer sunglasses with UV protection and premium frames.',
    features: [
      'UV protection',
      'Premium frames',
      'Polarized lenses',
      'Lightweight design',
      'Case included'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 432,
    brand: 'SunStyle'
  },
  {
    id: '28',
    name: 'Casual Cotton T-Shirt',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Comfortable cotton t-shirt perfect for everyday wear with modern fit.',
    features: [
      '100% cotton',
      'Modern fit',
      'Pre-shrunk',
      'Machine washable',
      'Multiple colors'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 876,
    brand: 'ComfortWear'
  },
  {
    id: '29',
    name: 'Denim Jeans Slim Fit',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Premium denim jeans with slim fit and comfortable stretch fabric.',
    features: [
      'Stretch fabric',
      'Slim fit',
      'Premium denim',
      'Five-pocket design',
      'Fade resistant'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 654,
    brand: 'DenimCo'
  },
  {
    id: '30',
    name: 'Leather Wallet Bifold',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Classic leather bifold wallet with multiple card slots and bill compartment.',
    features: [
      'Genuine leather',
      'Multiple card slots',
      'Bill compartment',
      'RFID blocking',
      'Compact design'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 543,
    brand: 'LeatherCraft'
  },
  {
    id: '31',
    name: 'Running Shoes Athletic',
    price: 119.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'High-performance running shoes with advanced cushioning and breathable design.',
    features: [
      'Advanced cushioning',
      'Breathable mesh',
      'Lightweight design',
      'Durable outsole',
      'Arch support'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 987,
    brand: 'SportTech'
  },
  {
    id: '32',
    name: 'Formal Dress Shirt',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Classic formal dress shirt with wrinkle-resistant fabric and tailored fit.',
    features: [
      'Wrinkle-resistant',
      'Tailored fit',
      'Cotton blend',
      'Button-down collar',
      'Machine washable'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 432,
    brand: 'FormalWear'
  },
  {
    id: '33',
    name: 'Winter Jacket Puffer',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Warm winter puffer jacket with water-resistant exterior and down insulation.',
    features: [
      'Down insulation',
      'Water-resistant',
      'Multiple pockets',
      'Adjustable hood',
      'Lightweight'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 678,
    brand: 'WinterGear'
  },
  {
    id: '34',
    name: 'Silk Scarf Designer',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Luxurious silk scarf with elegant patterns and versatile styling options.',
    features: [
      '100% silk',
      'Elegant patterns',
      'Versatile styling',
      'Hand-rolled edges',
      'Gift box included'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    brand: 'SilkLux'
  },
  {
    id: '35',
    name: 'Baseball Cap Adjustable',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Classic baseball cap with adjustable strap and embroidered logo.',
    features: [
      'Adjustable strap',
      'Embroidered logo',
      'Cotton twill',
      'Curved visor',
      'One size fits all'
    ],
    inStock: true,
    rating: 4.3,
    reviews: 567,
    brand: 'CapStyle'
  },
  {
    id: '36',
    name: 'Yoga Pants Leggings',
    price: 39.99,
    originalPrice: 54.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'High-waisted yoga leggings with moisture-wicking fabric and four-way stretch.',
    features: [
      'High-waisted',
      'Moisture-wicking',
      'Four-way stretch',
      'Squat-proof',
      'Side pockets'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 789,
    brand: 'YogaFit'
  },
  {
    id: '37',
    name: 'Dress Shoes Oxford',
    price: 129.99,
    originalPrice: 169.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Classic Oxford dress shoes with genuine leather and comfortable fit.',
    features: [
      'Genuine leather',
      'Comfortable fit',
      'Lace-up design',
      'Rubber sole',
      'Professional look'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 345,
    brand: 'DressShoes'
  },
  {
    id: '38',
    name: 'Cocktail Dress Evening',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Elegant cocktail dress perfect for evening events and special occasions.',
    features: [
      'Elegant design',
      'Flattering fit',
      'Quality fabric',
      'Lined interior',
      'Back zipper'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 456,
    brand: 'EveningWear'
  },
  {
    id: '39',
    name: 'Cashmere Sweater',
    price: 179.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Luxurious cashmere sweater with soft texture and timeless design.',
    features: [
      '100% cashmere',
      'Soft texture',
      'Timeless design',
      'Machine washable',
      'Multiple colors'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 234,
    brand: 'CashmereLux'
  },
  {
    id: '40',
    name: 'Belt Leather Classic',
    price: 39.99,
    originalPrice: 54.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Classic leather belt with reversible design and polished buckle.',
    features: [
      'Genuine leather',
      'Reversible design',
      'Polished buckle',
      'Adjustable size',
      'Gift box included'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 678,
    brand: 'BeltCraft'
  },
  {
    id: '41',
    name: 'Swimwear Bikini Set',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Stylish bikini set with adjustable straps and quick-dry fabric.',
    features: [
      'Adjustable straps',
      'Quick-dry fabric',
      'UV protection',
      'Chlorine resistant',
      'Multiple sizes'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 543,
    brand: 'BeachWear'
  },
  {
    id: '42',
    name: 'Hoodie Pullover',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Comfortable pullover hoodie with soft fleece lining and kangaroo pocket.',
    features: [
      'Soft fleece lining',
      'Kangaroo pocket',
      'Adjustable hood',
      'Ribbed cuffs',
      'Machine washable'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 789,
    brand: 'ComfortWear'
  },
  {
    id: '43',
    name: 'Jewelry Necklace Gold',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Elegant gold-plated necklace with delicate chain and pendant.',
    features: [
      'Gold-plated',
      'Delicate chain',
      'Pendant included',
      'Hypoallergenic',
      'Gift box included'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 345,
    brand: 'JewelryLux'
  },
  {
    id: '44',
    name: 'Boots Ankle Leather',
    price: 149.99,
    originalPrice: 189.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Stylish ankle boots with genuine leather and comfortable heel.',
    features: [
      'Genuine leather',
      'Comfortable heel',
      'Side zipper',
      'Cushioned insole',
      'Durable construction'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 456,
    brand: 'BootCraft'
  },
  {
    id: '45',
    name: 'Pajama Set Silk',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Luxurious silk pajama set with comfortable fit and elegant design.',
    features: [
      '100% silk',
      'Comfortable fit',
      'Elegant design',
      'Button-up top',
      'Elastic waistband'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 234,
    brand: 'SilkSleep'
  },
  {
    id: '46',
    name: 'Watch Smartwatch Sport',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Sport smartwatch with fitness tracking and water resistance.',
    features: [
      'Fitness tracking',
      'Water resistant',
      'Heart rate monitor',
      'GPS tracking',
      'Long battery life'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 678,
    brand: 'SportWatch'
  },
  {
    id: '47',
    name: 'Backpack Travel',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Durable travel backpack with multiple compartments and laptop sleeve.',
    features: [
      'Multiple compartments',
      'Laptop sleeve',
      'Water resistant',
      'Padded straps',
      'TSA friendly'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 543,
    brand: 'TravelGear'
  },
  {
    id: '48',
    name: 'Gloves Winter Touchscreen',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Warm winter gloves with touchscreen compatibility and thermal lining.',
    features: [
      'Touchscreen compatible',
      'Thermal lining',
      'Water resistant',
      'Anti-slip grip',
      'Elastic cuffs'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 789,
    brand: 'WinterWear'
  },
  {
    id: '49',
    name: 'Tie Silk Formal',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'Classic silk tie with elegant patterns perfect for formal occasions.',
    features: [
      '100% silk',
      'Elegant patterns',
      'Standard length',
      'Hand-finished',
      'Gift box included'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 345,
    brand: 'FormalTies'
  },
  {
    id: '50',
    name: 'Socks Athletic Performance',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    description: 'High-performance athletic socks with moisture-wicking and cushioning.',
    features: [
      'Moisture-wicking',
      'Cushioned sole',
      'Arch support',
      'Seamless toe',
      'Pack of 3'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 678,
    brand: 'SportSocks'
  },

  // Home & Garden Category (25 products)
  {
    id: '51',
    name: 'Ergonomic Office Chair',
    price: 349.99,
    originalPrice: 449.99,
    image: 'https://images.pexels.com/photos/586950/pexels-photo-586950.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/586950/pexels-photo-586950.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Premium ergonomic office chair with lumbar support, adjustable height, and breathable mesh design.',
    features: [
      'Lumbar support',
      'Adjustable height',
      'Breathable mesh',
      'Swivel base',
      'Armrest support'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    brand: 'ComfortPro'
  },
  {
    id: '52',
    name: 'Coffee Maker Automatic',
    price: 129.99,
    originalPrice: 169.99,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Programmable coffee maker with thermal carafe and auto-brew timer.',
    features: [
      'Programmable timer',
      'Thermal carafe',
      '12-cup capacity',
      'Auto shut-off',
      'Water filter'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 567,
    brand: 'BrewMaster'
  },
  {
    id: '53',
    name: 'Air Purifier HEPA',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Advanced HEPA air purifier with smart sensors and quiet operation.',
    features: [
      'HEPA filtration',
      'Smart sensors',
      'Quiet operation',
      'Air quality display',
      'Remote control'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 432,
    brand: 'PureAir'
  },
  {
    id: '54',
    name: 'Vacuum Cleaner Cordless',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Powerful cordless vacuum with multiple attachments and long battery life.',
    features: [
      'Cordless design',
      'Multiple attachments',
      'Long battery life',
      'Lightweight',
      'Easy emptying'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 678,
    brand: 'CleanTech'
  },
  {
    id: '55',
    name: 'Blender High-Speed',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'High-speed blender with multiple settings and durable stainless steel blades.',
    features: [
      'High-speed motor',
      'Multiple settings',
      'Stainless steel blades',
      'BPA-free pitcher',
      'Easy cleaning'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 543,
    brand: 'BlendPro'
  },
  {
    id: '56',
    name: 'Dining Table Set',
    price: 599.99,
    originalPrice: 749.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Modern dining table set with 4 chairs, perfect for family meals.',
    features: [
      'Solid wood construction',
      'Seats 4 people',
      'Modern design',
      'Easy assembly',
      'Scratch resistant'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    brand: 'FurniturePlus'
  },
  {
    id: '57',
    name: 'Bed Sheets Cotton Set',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Luxury cotton bed sheet set with deep pockets and wrinkle resistance.',
    features: [
      '100% cotton',
      'Deep pockets',
      'Wrinkle resistant',
      'Hypoallergenic',
      'Machine washable'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 789,
    brand: 'SleepComfort'
  },
  {
    id: '58',
    name: 'Garden Tool Set',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Complete garden tool set with ergonomic handles and storage bag.',
    features: [
      'Ergonomic handles',
      'Durable materials',
      'Storage bag included',
      '10-piece set',
      'Rust resistant'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 345,
    brand: 'GardenPro'
  },
  {
    id: '59',
    name: 'Microwave Oven Countertop',
    price: 149.99,
    originalPrice: 189.99,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Compact countertop microwave with multiple power levels and preset functions.',
    features: [
      'Multiple power levels',
      'Preset functions',
      'Digital display',
      'Child safety lock',
      'Easy cleaning'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 456,
    brand: 'KitchenTech'
  },
  {
    id: '60',
    name: 'Throw Pillows Decorative',
    price: 39.99,
    originalPrice: 54.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Set of decorative throw pillows with removable covers and soft filling.',
    features: [
      'Removable covers',
      'Soft filling',
      'Multiple colors',
      'Machine washable',
      'Set of 2'
    ],
    inStock: true,
    rating: 4.3,
    reviews: 567,
    brand: 'HomeDecor'
  },
  {
    id: '61',
    name: 'Lamp Table LED',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Modern LED table lamp with adjustable brightness and USB charging port.',
    features: [
      'LED lighting',
      'Adjustable brightness',
      'USB charging port',
      'Touch control',
      'Energy efficient'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 432,
    brand: 'LightTech'
  },
  {
    id: '62',
    name: 'Storage Bins Fabric',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Collapsible fabric storage bins with handles and reinforced bottom.',
    features: [
      'Collapsible design',
      'Reinforced bottom',
      'Carrying handles',
      'Multiple sizes',
      'Set of 3'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 678,
    brand: 'OrganizePro'
  },
  {
    id: '63',
    name: 'Curtains Blackout',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Blackout curtains with thermal insulation and noise reduction properties.',
    features: [
      'Blackout design',
      'Thermal insulation',
      'Noise reduction',
      'Easy installation',
      'Multiple colors'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 543,
    brand: 'WindowPro'
  },
  {
    id: '64',
    name: 'Candles Scented Set',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Luxury scented candles set with natural soy wax and long burn time.',
    features: [
      'Natural soy wax',
      'Long burn time',
      'Multiple scents',
      'Glass containers',
      'Set of 4'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 789,
    brand: 'AromaLux'
  },
  {
    id: '65',
    name: 'Mirror Wall Decorative',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Decorative wall mirror with ornate frame and high-quality glass.',
    features: [
      'Ornate frame',
      'High-quality glass',
      'Easy mounting',
      'Distortion-free',
      'Multiple sizes'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    brand: 'ReflectPro'
  },
  {
    id: '66',
    name: 'Plant Pots Ceramic Set',
    price: 44.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Beautiful ceramic plant pots with drainage holes and saucers.',
    features: [
      'Ceramic construction',
      'Drainage holes',
      'Saucers included',
      'Multiple sizes',
      'Set of 3'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 345,
    brand: 'PlantPro'
  },
  {
    id: '67',
    name: 'Rug Area Persian',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Traditional Persian-style area rug with intricate patterns and soft texture.',
    features: [
      'Persian-style design',
      'Intricate patterns',
      'Soft texture',
      'Stain resistant',
      'Multiple sizes'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 456,
    brand: 'RugMaster'
  },
  {
    id: '68',
    name: 'Clock Wall Modern',
    price: 39.99,
    originalPrice: 54.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Modern wall clock with silent movement and contemporary design.',
    features: [
      'Silent movement',
      'Contemporary design',
      'Easy to read',
      'Battery operated',
      'Multiple colors'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 567,
    brand: 'TimePro'
  },
  {
    id: '69',
    name: 'Towel Set Bath',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Luxury bath towel set with high absorbency and soft cotton material.',
    features: [
      'High absorbency',
      '100% cotton',
      'Soft texture',
      'Quick drying',
      'Set of 6'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 678,
    brand: 'BathLux'
  },
  {
    id: '70',
    name: 'Vase Decorative Glass',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Elegant glass vase with unique design perfect for flowers or decoration.',
    features: [
      'Glass construction',
      'Unique design',
      'Perfect for flowers',
      'Easy to clean',
      'Multiple colors'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 432,
    brand: 'GlassArt'
  },
  {
    id: '71',
    name: 'Humidifier Ultrasonic',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Ultrasonic humidifier with essential oil diffuser and LED lighting.',
    features: [
      'Ultrasonic technology',
      'Essential oil diffuser',
      'LED lighting',
      'Auto shut-off',
      'Quiet operation'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 543,
    brand: 'AirComfort'
  },
  {
    id: '72',
    name: 'Basket Storage Wicker',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Natural wicker storage basket with handles and removable liner.',
    features: [
      'Natural wicker',
      'Carrying handles',
      'Removable liner',
      'Durable construction',
      'Multiple sizes'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 789,
    brand: 'WickerCraft'
  },
  {
    id: '73',
    name: 'Fan Ceiling Remote',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Modern ceiling fan with remote control and LED lighting.',
    features: [
      'Remote control',
      'LED lighting',
      'Multiple speeds',
      'Reversible motor',
      'Easy installation'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    brand: 'AirFlow'
  },
  {
    id: '74',
    name: 'Organizer Closet System',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Modular closet organization system with adjustable shelves and rods.',
    features: [
      'Modular design',
      'Adjustable shelves',
      'Hanging rods',
      'Easy assembly',
      'Expandable'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 345,
    brand: 'OrganizePro'
  },
  {
    id: '75',
    name: 'Doormat Welcome Coir',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    description: 'Natural coir doormat with welcome message and non-slip backing.',
    features: [
      'Natural coir fiber',
      'Welcome message',
      'Non-slip backing',
      'Weather resistant',
      'Easy to clean'
    ],
    inStock: true,
    rating: 4.3,
    reviews: 456,
    brand: 'WelcomeMat'
  },

  // Sports & Outdoors Category (25 products)
  {
    id: '76',
    name: 'Yoga Mat Premium',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Premium yoga mat with superior grip and cushioning for all yoga practices.',
    features: [
      'Superior grip',
      'Extra cushioning',
      'Non-toxic materials',
      'Carrying strap',
      'Easy to clean'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 567,
    brand: 'YogaPro'
  },
  {
    id: '77',
    name: 'Dumbbells Adjustable Set',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Adjustable dumbbell set with quick-change weight system and storage rack.',
    features: [
      'Quick-change system',
      'Multiple weights',
      'Storage rack included',
      'Comfortable grip',
      'Space-saving design'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 432,
    brand: 'FitnessPro'
  },
  {
    id: '78',
    name: 'Tent Camping 4-Person',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Spacious 4-person camping tent with waterproof design and easy setup.',
    features: [
      'Waterproof design',
      'Easy setup',
      'Spacious interior',
      'Ventilation system',
      'Carrying bag included'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 678,
    brand: 'OutdoorGear'
  },
  {
    id: '79',
    name: 'Bicycle Mountain 21-Speed',
    price: 399.99,
    originalPrice: 499.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'High-performance mountain bike with 21-speed transmission and durable frame.',
    features: [
      '21-speed transmission',
      'Durable aluminum frame',
      'Front suspension',
      'Disc brakes',
      'All-terrain tires'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 543,
    brand: 'MountainRider'
  },
  {
    id: '80',
    name: 'Sleeping Bag Outdoor',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Warm and comfortable sleeping bag suitable for all seasons camping.',
    features: [
      'All-season design',
      'Warm insulation',
      'Water-resistant',
      'Compression sack',
      'Machine washable'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 789,
    brand: 'SleepWell'
  },
  {
    id: '81',
    name: 'Backpack Hiking 50L',
    price: 129.99,
    originalPrice: 169.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Large capacity hiking backpack with multiple compartments and hydration system.',
    features: [
      '50L capacity',
      'Multiple compartments',
      'Hydration system',
      'Padded straps',
      'Rain cover included'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 234,
    brand: 'HikePro'
  },
  {
    id: '82',
    name: 'Fishing Rod Telescopic',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Portable telescopic fishing rod with reel and tackle box included.',
    features: [
      'Telescopic design',
      'Reel included',
      'Tackle box',
      'Lightweight',
      'Easy to transport'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 345,
    brand: 'FishMaster'
  },
  {
    id: '83',
    name: 'Kayak Inflatable Single',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Inflatable single-person kayak with paddle and pump included.',
    features: [
      'Inflatable design',
      'Paddle included',
      'Pump included',
      'Durable material',
      'Easy storage'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 456,
    brand: 'WaterSport'
  },
  {
    id: '84',
    name: 'Golf Club Set Beginner',
    price: 249.99,
    originalPrice: 329.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Complete golf club set perfect for beginners with carrying bag.',
    features: [
      'Complete set',
      'Beginner-friendly',
      'Carrying bag',
      'Multiple clubs',
      'Lightweight design'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 567,
    brand: 'GolfPro'
  },
  {
    id: '85',
    name: 'Basketball Official Size',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Official size basketball with superior grip and bounce consistency.',
    features: [
      'Official size',
      'Superior grip',
      'Consistent bounce',
      'Durable construction',
      'Indoor/outdoor use'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 678,
    brand: 'SportsBall'
  },
  {
    id: '86',
    name: 'Treadmill Folding Electric',
    price: 599.99,
    originalPrice: 799.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Folding electric treadmill with multiple programs and heart rate monitor.',
    features: [
      'Folding design',
      'Multiple programs',
      'Heart rate monitor',
      'LCD display',
      'Safety key'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 432,
    brand: 'RunTech'
  },
  {
    id: '87',
    name: 'Soccer Ball Professional',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Professional-grade soccer ball with FIFA-approved specifications.',
    features: [
      'FIFA-approved',
      'Professional grade',
      'Durable construction',
      'Perfect weight',
      'All-weather use'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 543,
    brand: 'SoccerPro'
  },
  {
    id: '88',
    name: 'Helmet Bike Safety',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Safety bike helmet with adjustable fit and ventilation system.',
    features: [
      'Adjustable fit',
      'Ventilation system',
      'Lightweight design',
      'Safety certified',
      'Multiple colors'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 789,
    brand: 'SafeRide'
  },
  {
    id: '89',
    name: 'Resistance Bands Set',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Complete resistance bands set with multiple resistance levels and accessories.',
    features: [
      'Multiple resistance levels',
      'Door anchor included',
      'Handles and straps',
      'Exercise guide',
      'Carrying bag'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 234,
    brand: 'FlexFit'
  },
  {
    id: '90',
    name: 'Cooler Portable 50Qt',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Large capacity portable cooler with excellent ice retention and wheels.',
    features: [
      '50-quart capacity',
      'Excellent ice retention',
      'Wheels for transport',
      'Durable construction',
      'Multiple compartments'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 345,
    brand: 'CoolPro'
  },
  {
    id: '91',
    name: 'Skateboard Complete',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Complete skateboard with high-quality deck, trucks, and wheels.',
    features: [
      'Complete setup',
      'High-quality deck',
      'Smooth wheels',
      'Durable trucks',
      'Ready to ride'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 456,
    brand: 'SkateBoard'
  },
  {
    id: '92',
    name: 'Tennis Racket Professional',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Professional tennis racket with carbon fiber construction and perfect balance.',
    features: [
      'Carbon fiber construction',
      'Perfect balance',
      'Professional grade',
      'Comfortable grip',
      'String included'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 567,
    brand: 'TennisPro'
  },
  {
    id: '93',
    name: 'Punching Bag Heavy',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Heavy-duty punching bag with chains and mounting hardware included.',
    features: [
      'Heavy-duty construction',
      'Chains included',
      'Mounting hardware',
      'Durable material',
      'Professional size'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 678,
    brand: 'BoxingGear'
  },
  {
    id: '94',
    name: 'Volleyball Official',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Official volleyball with superior grip and consistent performance.',
    features: [
      'Official specifications',
      'Superior grip',
      'Consistent performance',
      'Durable construction',
      'Indoor/outdoor use'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 432,
    brand: 'VolleyPro'
  },
  {
    id: '95',
    name: 'Foam Roller Muscle',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'High-density foam roller for muscle recovery and injury prevention.',
    features: [
      'High-density foam',
      'Muscle recovery',
      'Injury prevention',
      'Durable construction',
      'Multiple sizes'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 543,
    brand: 'RecoveryPro'
  },
  {
    id: '96',
    name: 'Badminton Set Complete',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Complete badminton set with rackets, shuttlecocks, and carrying case.',
    features: [
      'Complete set',
      '4 rackets included',
      'Shuttlecocks',
      'Carrying case',
      'Net included'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 789,
    brand: 'BadmintonPro'
  },
  {
    id: '97',
    name: 'Jump Rope Speed',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Speed jump rope with adjustable length and comfortable handles.',
    features: [
      'Adjustable length',
      'Comfortable handles',
      'Speed design',
      'Lightweight',
      'Tangle-free'
    ],
    inStock: true,
    rating: 4.3,
    reviews: 234,
    brand: 'JumpFit'
  },
  {
    id: '98',
    name: 'Frisbee Ultimate Disc',
    price: 14.99,
    originalPrice: 19.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Ultimate frisbee disc with perfect weight and aerodynamic design.',
    features: [
      'Perfect weight',
      'Aerodynamic design',
      'Durable plastic',
      'Official size',
      'Multiple colors'
    ],
    inStock: true,
    rating: 4.2,
    reviews: 345,
    brand: 'FrisbeePro'
  },
  {
    id: '99',
    name: 'Water Bottle Insulated',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    features: [
      'Double-wall insulation',
      '24-hour cold retention',
      '12-hour hot retention',
      'Leak-proof design',
      'BPA-free'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 456,
    brand: 'HydratePro'
  },
  {
    id: '100',
    name: 'Exercise Ball Stability',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    description: 'Anti-burst stability ball perfect for core strengthening and balance training.',
    features: [
      'Anti-burst design',
      'Core strengthening',
      'Balance training',
      'Pump included',
      'Multiple sizes'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 567,
    brand: 'CoreFit'
  },

  // Books & Media Category (10 products)
  {
    id: '101',
    name: 'Bestseller Novel Fiction',
    price: 14.99,
    originalPrice: 19.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Captivating bestseller novel with compelling characters and thrilling plot.',
    features: [
      'Bestseller status',
      'Compelling story',
      'Award-winning author',
      'Paperback edition',
      '400+ pages'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 1234,
    brand: 'BookWorld'
  },
  {
    id: '102',
    name: 'Cookbook Healthy Recipes',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Comprehensive cookbook with over 200 healthy and delicious recipes.',
    features: [
      '200+ recipes',
      'Nutritional information',
      'Beautiful photography',
      'Easy instructions',
      'Hardcover edition'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 567,
    brand: 'CookingPro'
  },
  {
    id: '103',
    name: 'Self-Help Motivation Book',
    price: 16.99,
    originalPrice: 22.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Inspiring self-help book with practical strategies for personal growth.',
    features: [
      'Practical strategies',
      'Personal growth',
      'Expert author',
      'Easy to follow',
      'Life-changing content'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 432,
    brand: 'MotivateMe'
  },
  {
    id: '104',
    name: 'Children Picture Book',
    price: 12.99,
    originalPrice: 17.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Beautifully illustrated children\'s picture book with engaging story.',
    features: [
      'Beautiful illustrations',
      'Engaging story',
      'Age-appropriate',
      'Educational content',
      'Hardcover edition'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 789,
    brand: 'KidsBooks'
  },
  {
    id: '105',
    name: 'History Biography Book',
    price: 19.99,
    originalPrice: 26.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Fascinating biography of historical figure with detailed research.',
    features: [
      'Detailed research',
      'Historical accuracy',
      'Engaging narrative',
      'Photo illustrations',
      'Award-winning'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 345,
    brand: 'HistoryPress'
  },
  {
    id: '106',
    name: 'Science Textbook College',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Comprehensive college-level science textbook with latest research.',
    features: [
      'College-level content',
      'Latest research',
      'Comprehensive coverage',
      'Practice problems',
      'Digital resources'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 234,
    brand: 'EduPress'
  },
  {
    id: '107',
    name: 'Art Coffee Table Book',
    price: 39.99,
    originalPrice: 54.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Stunning art coffee table book featuring masterpieces from around the world.',
    features: [
      'High-quality prints',
      'Masterpiece collection',
      'Large format',
      'Art history',
      'Premium paper'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 456,
    brand: 'ArtBooks'
  },
  {
    id: '108',
    name: 'Mystery Thriller Novel',
    price: 13.99,
    originalPrice: 18.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Gripping mystery thriller that will keep you on the edge of your seat.',
    features: [
      'Gripping plot',
      'Suspenseful',
      'Page-turner',
      'Plot twists',
      'Bestselling author'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 678,
    brand: 'ThrillerBooks'
  },
  {
    id: '109',
    name: 'Travel Guide Europe',
    price: 22.99,
    originalPrice: 29.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Comprehensive travel guide to Europe with insider tips and recommendations.',
    features: [
      'Insider tips',
      'Detailed maps',
      'Restaurant recommendations',
      'Cultural insights',
      'Updated edition'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 543,
    brand: 'TravelGuides'
  },
  {
    id: '110',
    name: 'Poetry Collection Modern',
    price: 15.99,
    originalPrice: 21.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Books & Media',
    description: 'Beautiful collection of modern poetry exploring themes of love, life, and nature.',
    features: [
      'Modern poetry',
      'Beautiful language',
      'Diverse themes',
      'Award-winning poet',
      'Elegant design'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 321,
    brand: 'PoetryPress'
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Sports & Outdoors',
  'Books & Media'
];