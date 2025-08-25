// Product Database - All products from the current page
const PRODUCTS_DATABASE = [
  // Appliances
  {
    id: 'ac001',
    name: 'Air Conditioner',
    category: 'appliances',
    price: 29999,
    originalPrice: 45000,
    discount: 33,
    image: 'images/Air Conditioners.jpg',
    description: '1.5 Ton 3 Star Split Inverter AC with Copper Condenser, 4-in-1 Convertible, Anti-Viral Filter, 2024 Model',
    features: ['1.5 Ton Cooling', '3 Star Rating', 'Split Inverter', 'Copper Condenser', '4-in-1 Convertible'],
    specifications: {
      'Cooling Capacity': '1.5 Ton',
      'Energy Rating': '3 Star',
      'Type': 'Split Inverter',
      'Filter': 'Anti-Viral + PM 2.5',
      'Warranty': '1 Year Comprehensive + 5 Years Compressor'
    },
    rating: 4.2,
    reviews: 1247,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹1,500/month'
  },
  {
    id: 'ref001',
    name: 'Refrigerator',
    category: 'appliances',
    price: 18999,
    originalPrice: 28000,
    discount: 32,
    image: 'images/Refrigerators.jpg',
    description: '190L Direct Cool Single Door Refrigerator with Base Drawer, 2024 Model',
    features: ['190L Capacity', 'Direct Cool', 'Single Door', 'Base Drawer', 'Energy Efficient'],
    specifications: {
      'Capacity': '190L',
      'Cooling System': 'Direct Cool',
      'Door Type': 'Single Door',
      'Energy Rating': '3 Star',
      'Warranty': '2 Years Comprehensive'
    },
    rating: 4.1,
    reviews: 892,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹950/month'
  },
  {
    id: 'mic001',
    name: 'Microwave Oven',
    category: 'appliances',
    price: 6499,
    originalPrice: 8999,
    discount: 28,
    image: 'images/Microwaves.jpg',
    description: '20L Convection Microwave Oven with Grill, 1000W, Auto Cook Menu, 2024 Model',
    features: ['20L Capacity', 'Convection + Grill', '1000W Power', 'Auto Cook Menu', 'Child Lock'],
    specifications: {
      'Capacity': '20L',
      'Power': '1000W',
      'Functions': 'Convection + Grill + Microwave',
      'Control': 'Digital',
      'Warranty': '2 Years'
    },
    rating: 4.3,
    reviews: 567,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹325/month'
  },
  {
    id: 'wash001',
    name: 'Washing Machine',
    category: 'appliances',
    price: 15999,
    originalPrice: 22000,
    discount: 27,
    image: 'images/Washing machines.jpg',
    description: '6.5 Kg Front Load Washing Machine with In-Built Heater, 2024 Model',
    features: ['6.5 Kg Capacity', 'Front Load', 'In-Built Heater', '15 Programs', 'Energy Efficient'],
    specifications: {
      'Capacity': '6.5 Kg',
      'Type': 'Front Load',
      'Programs': '15',
      'Energy Rating': '4 Star',
      'Warranty': '2 Years Comprehensive'
    },
    rating: 4.0,
    reviews: 445,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹325/month'
  },
  
  // Home & Kitchen
  {
    id: 'bed001',
    name: 'Bedding Collection',
    category: 'home-kitchen',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: 'images/bedding.jpg',
    description: 'Premium Cotton Bedding Set with Cushion Covers, Bedsheets & More',
    features: ['100% Cotton', 'Multiple Sizes', 'Various Designs', 'Easy Care', 'Breathable'],
    specifications: {
      'Material': '100% Cotton',
      'Thread Count': '200 TC',
      'Care': 'Machine Washable',
      'Design': 'Multiple Patterns',
      'Warranty': '1 Year'
    },
    rating: 4.4,
    reviews: 1234,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹65/month'
  },
  {
    id: 'dec001',
    name: 'Home Decor Collection',
    category: 'home-kitchen',
    price: 899,
    originalPrice: 1499,
    discount: 40,
    image: 'images/decor.jpg',
    description: 'Elegant Figurines, Vases & Home Decoration Items',
    features: ['Premium Quality', 'Multiple Styles', 'Perfect Gifting', 'Easy Maintenance', 'Versatile Use'],
    specifications: {
      'Material': 'Ceramic/Glass',
      'Height': 'Various Sizes',
      'Care': 'Hand Wash',
      'Style': 'Modern & Traditional',
      'Warranty': '6 Months'
    },
    rating: 4.2,
    reviews: 678,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹45/month'
  },
  
  // Electronics
  {
    id: 'phone001',
    name: 'Smartphone',
    category: 'electronics',
    price: 15999,
    originalPrice: 22000,
    discount: 27,
    image: 'images/phone.jpg',
    description: 'Latest Smartphone with 6.7" Display, 108MP Camera, 5000mAh Battery',
    features: ['6.7" AMOLED Display', '108MP Camera', '5000mAh Battery', '5G Ready', '128GB Storage'],
    specifications: {
      'Display': '6.7" AMOLED',
      'Camera': '108MP + 8MP + 2MP',
      'Battery': '5000mAh',
      'Processor': 'Octa-core',
      'Storage': '128GB'
    },
    rating: 4.5,
    reviews: 2341,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹800/month'
  },
  {
    id: 'laptop001',
    name: 'Laptop',
    category: 'electronics',
    price: 45999,
    originalPrice: 65000,
    discount: 29,
    image: 'images/laptop.jpg',
    description: '15.6" FHD Laptop with Intel i5 Processor, 8GB RAM, 512GB SSD',
    features: ['15.6" FHD Display', 'Intel i5 Processor', '8GB RAM', '512GB SSD', 'Windows 11'],
    specifications: {
      'Display': '15.6" FHD (1920x1080)',
      'Processor': 'Intel Core i5-12th Gen',
      'RAM': '8GB DDR4',
      'Storage': '512GB SSD',
      'OS': 'Windows 11 Home'
    },
    rating: 4.3,
    reviews: 1567,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹2,300/month'
  },
  {
    id: 'ipad001',
    name: 'Tablet',
    category: 'electronics',
    price: 24999,
    originalPrice: 35000,
    discount: 29,
    image: 'images/ipad.jpg',
    description: '10.1" Tablet with 4GB RAM, 64GB Storage, Android 13',
    features: ['10.1" HD Display', '4GB RAM', '64GB Storage', 'Android 13', 'Long Battery Life'],
    specifications: {
      'Display': '10.1" HD (1280x800)',
      'RAM': '4GB',
      'Storage': '64GB',
      'OS': 'Android 13',
      'Battery': '6000mAh'
    },
    rating: 4.1,
    reviews: 892,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹1,250/month'
  },
  
  // Headphones
  {
    id: 'boat001',
    name: 'boAt Headphones',
    category: 'electronics',
    price: 249,
    originalPrice: 999,
    discount: 75,
    image: 'images/boAt.jpg',
    description: 'Wireless Bluetooth Headphones with 40 Hours Playback, ENx Technology',
    features: ['Wireless Bluetooth', '40 Hours Playback', 'ENx Technology', 'Lightweight', 'Quick Charge'],
    specifications: {
      'Connectivity': 'Bluetooth 5.0',
      'Playback Time': '40 Hours',
      'Charging Time': '2 Hours',
      'Driver Size': '40mm',
      'Warranty': '1 Year'
    },
    rating: 4.2,
    reviews: 3456,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹12/month'
  },
  {
    id: 'boult001',
    name: 'BOULT Headphones',
    category: 'electronics',
    price: 349,
    originalPrice: 1299,
    discount: 73,
    image: 'images/BOULT.jpg',
    description: 'True Wireless Earbuds with 32 Hours Total Playback, AI ENC',
    features: ['True Wireless', '32 Hours Playback', 'AI ENC', 'Touch Controls', 'IPX5 Waterproof'],
    specifications: {
      'Connectivity': 'Bluetooth 5.2',
      'Playback Time': '32 Hours Total',
      'Charging Time': '1.5 Hours',
      'Waterproof': 'IPX5',
      'Warranty': '1 Year'
    },
    rating: 4.0,
    reviews: 2341,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹17/month'
  },
  
  // TVs
  {
    id: 'tv001',
    name: '4K Smart TV',
    category: 'electronics',
    price: 24999,
    originalPrice: 45000,
    discount: 44,
    image: 'images/4K TVs.jpg',
    description: '55" 4K Ultra HD Smart LED TV with Android TV, HDR, Dolby Audio',
    features: ['55" 4K Display', 'Android TV', 'HDR Support', 'Dolby Audio', 'Voice Control'],
    specifications: {
      'Display': '55" 4K UHD (3840x2160)',
      'Smart Features': 'Android TV',
      'HDR': 'HDR10+',
      'Audio': 'Dolby Audio',
      'Warranty': '2 Years'
    },
    rating: 4.4,
    reviews: 1892,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹1,250/month'
  },
  
  // Beauty & Personal Care
  {
    id: 'lip001',
    name: 'Lipstick Collection',
    category: 'beauty',
    price: 399,
    originalPrice: 999,
    discount: 60,
    image: 'images/lipstick.jpg',
    description: 'Long-lasting Matte Lipstick Collection with 12 Shades, Cruelty-free',
    features: ['Long-lasting', 'Matte Finish', '12 Shades', 'Cruelty-free', 'Vegan'],
    specifications: {
      'Finish': 'Matte',
      'Shades': '12 Available',
      'Longevity': '8-10 Hours',
      'Ingredients': 'Vegan & Cruelty-free',
      'Weight': '3.5g'
    },
    rating: 4.3,
    reviews: 1234,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹20/month'
  },
  
  // Bikes
  {
    id: 'bike001',
    name: 'Sport Bike',
    category: 'automotive',
    price: 70348,
    originalPrice: 85000,
    discount: 17,
    image: 'images/Bike1.jpg',
    description: '150cc Sport Bike with ABS, LED Lighting, Digital Instrument Cluster',
    features: ['150cc Engine', 'ABS System', 'LED Lighting', 'Digital Cluster', 'Sporty Design'],
    specifications: {
      'Engine': '150cc Single Cylinder',
      'Fuel System': 'Fuel Injection',
      'Brakes': 'ABS (Front & Rear)',
      'Lighting': 'Full LED',
      'Warranty': '3 Years'
    },
    rating: 4.2,
    reviews: 567,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹3,517/month'
  },
  
  // Additional products for better search coverage
  {
    id: 'noise001',
    name: 'Noise Headphones',
    category: 'electronics',
    price: 649,
    originalPrice: 1299,
    discount: 50,
    image: 'images/Noise.jpg',
    description: 'Wireless Bluetooth Headphones with Active Noise Cancellation',
    features: ['Active Noise Cancellation', 'Bluetooth 5.0', '40 Hours Playback', 'Quick Charge', 'Touch Controls'],
    specifications: {
      'Connectivity': 'Bluetooth 5.0',
      'Playback Time': '40 Hours',
      'Noise Cancellation': 'Active ANC',
      'Waterproof': 'IPX4',
      'Warranty': '1 Year'
    },
    rating: 4.1,
    reviews: 1892,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹32/month'
  },
  {
    id: 'zeb001',
    name: 'Zebronics Headphones',
    category: 'electronics',
    price: 649,
    originalPrice: 1299,
    discount: 50,
    image: 'images/Zebronics.jpg',
    description: 'Gaming Headphones with RGB Lighting and 7.1 Surround Sound',
    features: ['7.1 Surround Sound', 'RGB Lighting', 'Gaming Design', 'Noise Cancelling Mic', 'Comfortable Fit'],
    specifications: {
      'Audio': '7.1 Surround Sound',
      'Microphone': 'Noise Cancelling',
      'Lighting': 'RGB Customizable',
      'Compatibility': 'PC, PS4, Xbox, Mobile',
      'Warranty': '1 Year'
    },
    rating: 4.0,
    reviews: 1234,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹32/month'
  },
  {
    id: 'frag001',
    name: 'Premium Fragrances',
    category: 'beauty',
    price: 1299,
    originalPrice: 2999,
    discount: 57,
    image: 'images/fragrance.jpg',
    description: 'Luxury Fragrance Collection with Long-lasting Scents',
    features: ['Long-lasting', 'Premium Ingredients', 'Multiple Scents', 'Elegant Packaging', 'Unisex Appeal'],
    specifications: {
      'Volume': '50ml',
      'Longevity': '8-12 Hours',
      'Ingredients': 'Premium Natural',
      'Packaging': 'Glass Bottle',
      'Warranty': '1 Year'
    },
    rating: 4.4,
    reviews: 892,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹65/month'
  },
  
  // Home & Kitchen - Additional Products
  {
    id: 'storage001',
    name: 'Home Storage Solutions',
    category: 'home-kitchen',
    price: 599,
    originalPrice: 999,
    discount: 40,
    image: 'images/storage.jpg',
    description: 'Multi-purpose Storage Solutions for Home Organization',
    features: ['Space Saving', 'Multiple Sizes', 'Easy Assembly', 'Durable Material', 'Versatile Use'],
    specifications: {
      'Material': 'Premium Plastic',
      'Capacity': 'Various Sizes',
      'Assembly': 'Tool-free',
      'Weight Capacity': 'Up to 10kg',
      'Warranty': '1 Year'
    },
    rating: 4.1,
    reviews: 456,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹30/month'
  },
  {
    id: 'lighting001',
    name: 'LED Lighting Solutions',
    category: 'home-kitchen',
    price: 799,
    originalPrice: 1499,
    discount: 47,
    image: 'images/Lighting solutions.jpg',
    description: 'Energy Efficient LED Lighting for Modern Homes',
    features: ['Energy Efficient', 'Long Life', 'Multiple Colors', 'Smart Control', 'Easy Installation'],
    specifications: {
      'Power': '9W LED',
      'Lifespan': '25,000 Hours',
      'Color Temperature': '3000K-6500K',
      'Warranty': '2 Years',
      'Certification': 'BIS Approved'
    },
    rating: 4.3,
    reviews: 678,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹40/month'
  },
  
  // Home Improvement Products
  {
    id: 'cleaning001',
    name: 'Cleaning Supplies Kit',
    category: 'home-improvement',
    price: 299,
    originalPrice: 499,
    discount: 40,
    image: 'images/cleaning.jpg',
    description: 'Complete Cleaning Kit for Home and Office',
    features: ['Multi-surface Cleaner', 'Eco-friendly', 'Long-lasting', 'Easy to Use', 'Safe for Kids'],
    specifications: {
      'Volume': '500ml Each',
      'Surfaces': 'Multi-surface',
      'Ingredients': 'Eco-friendly',
      'Safety': 'Kid-safe',
      'Warranty': '6 Months'
    },
    rating: 4.2,
    reviews: 1234,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹15/month'
  },
  {
    id: 'bathroom001',
    name: 'Bathroom Accessories Set',
    category: 'home-improvement',
    price: 399,
    originalPrice: 699,
    discount: 43,
    image: 'images/Bathroom accessories.jpg',
    description: 'Complete Bathroom Accessories Set with Modern Design',
    features: ['Modern Design', 'Rust-resistant', 'Easy Installation', 'Complete Set', 'Space Saving'],
    specifications: {
      'Material': 'Stainless Steel',
      'Finish': 'Chrome',
      'Installation': 'Tool-free',
      'Warranty': '1 Year',
      'Set Contents': '6 Pieces'
    },
    rating: 4.0,
    reviews: 567,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹20/month'
  },
  {
    id: 'tools001',
    name: 'Home Tools Kit',
    category: 'home-improvement',
    price: 449,
    originalPrice: 799,
    discount: 44,
    image: 'images/Home tools.jpg',
    description: 'Essential Home Tools Kit for DIY Projects',
    features: ['Complete Kit', 'Professional Quality', 'Durable', 'Easy to Use', 'Portable'],
    specifications: {
      'Tools Included': '15 Pieces',
      'Material': 'High-grade Steel',
      'Storage': 'Carrying Case',
      'Warranty': '2 Years',
      'Weight': '2.5kg'
    },
    rating: 4.4,
    reviews: 892,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹22/month'
  },
  {
    id: 'wallpaper001',
    name: 'Premium Wallpapers',
    category: 'home-improvement',
    price: 199,
    originalPrice: 399,
    discount: 50,
    image: 'images/Wallpapers.jpg',
    description: 'Beautiful Wallpapers for Home Decoration',
    features: ['Self-adhesive', 'Easy Installation', 'Multiple Designs', 'Water-resistant', 'Removable'],
    specifications: {
      'Size': '10m x 0.5m',
      'Material': 'Vinyl',
      'Installation': 'Self-adhesive',
      'Washable': 'Yes',
      'Warranty': '1 Year'
    },
    rating: 4.1,
    reviews: 345,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹10/month'
  },
  
  // Baby Care Products
  {
    id: 'diapers001',
    name: 'Premium Diapers & Wipes',
    category: 'baby-care',
    price: 899,
    originalPrice: 1499,
    discount: 40,
    image: 'images/Daipers & Wipes.jpg',
    description: 'Premium Diapers and Wipes for Baby Care',
    features: ['Hypoallergenic', 'Super Absorbent', 'Soft Material', 'Wetness Indicator', '12 Hour Protection'],
    specifications: {
      'Size': 'M (6-11kg)',
      'Count': '72 Diapers',
      'Material': 'Cotton Soft',
      'Absorbency': '12 Hours',
      'Warranty': '1 Year'
    },
    rating: 4.5,
    reviews: 2341,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹45/month'
  },
  {
    id: 'babyfurniture001',
    name: 'Baby Furniture Set',
    category: 'baby-care',
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    image: 'images/High chairs, cradles & more.jpg',
    description: 'Complete Baby Furniture Set with High Chair and Cradle',
    features: ['Adjustable Height', 'Safety Straps', 'Easy Clean', 'Foldable', 'Convertible'],
    specifications: {
      'Age Range': '6 months - 3 years',
      'Weight Capacity': 'Up to 25kg',
      'Material': 'Food-grade Plastic',
      'Safety': '5-point Harness',
      'Warranty': '2 Years'
    },
    rating: 4.3,
    reviews: 678,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹125/month'
  },
  {
    id: 'toys001',
    name: 'Soft Toys Collection',
    category: 'baby-care',
    price: 599,
    originalPrice: 999,
    discount: 40,
    image: 'images/Soft toys.jpg',
    description: 'Safe and Soft Toys for Babies and Toddlers',
    features: ['Safe Material', 'Machine Washable', 'Multiple Characters', 'Educational', 'Age Appropriate'],
    specifications: {
      'Age': '0-3 years',
      'Material': 'Hypoallergenic',
      'Size': 'Various Sizes',
      'Washable': 'Machine Safe',
      'Warranty': '1 Year'
    },
    rating: 4.4,
    reviews: 1234,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹30/month'
  },
  {
    id: 'games001',
    name: 'Indoor & Outdoor Games',
    category: 'baby-care',
    price: 799,
    originalPrice: 1299,
    discount: 38,
    image: 'images/Indoor & outdoor games.jpg',
    description: 'Educational Games for Indoor and Outdoor Play',
    features: ['Educational', 'Safe Material', 'Multiple Games', 'Portable', 'Age Appropriate'],
    specifications: {
      'Age Range': '3-8 years',
      'Games Included': '5 Games',
      'Material': 'Child-safe Plastic',
      'Portable': 'Yes',
      'Warranty': '1 Year'
    },
    rating: 4.2,
    reviews: 567,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹40/month'
  },
  
  // TV Products
  {
    id: 'redmitv001',
    name: 'Redmi F Series Smart TV',
    category: 'electronics',
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    image: 'images/Redmi F Series firetv.jpg',
    description: '32" HD Smart TV with Fire TV Stick Built-in',
    features: ['32" HD Display', 'Fire TV Built-in', 'Voice Control', 'Multiple Apps', 'HDMI Ports'],
    specifications: {
      'Display': '32" HD (1366x768)',
      'Smart Features': 'Fire TV Built-in',
      'Connectivity': 'WiFi + Bluetooth',
      'Ports': '3 HDMI, 2 USB',
      'Warranty': '2 Years'
    },
    rating: 4.3,
    reviews: 1892,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹350/month'
  },
  {
    id: 'premiumtv001',
    name: 'Ultra Premium Smart TV',
    category: 'electronics',
    price: 89999,
    originalPrice: 129999,
    discount: 31,
    image: 'images/Ultra Premium TVs.jpg',
    description: '65" 4K Ultra HD Smart TV with OLED Display',
    features: ['65" 4K OLED', 'HDR10+', 'Dolby Vision', 'Smart Features', 'Premium Audio'],
    specifications: {
      'Display': '65" 4K OLED',
      'Resolution': '3840x2160',
      'HDR': 'HDR10+ & Dolby Vision',
      'Audio': 'Dolby Atmos',
      'Warranty': '3 Years'
    },
    rating: 4.6,
    reviews: 456,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹4,500/month'
  },
  {
    id: 'bigscreen001',
    name: 'Big Screen Smart TV',
    category: 'electronics',
    price: 15999,
    originalPrice: 24999,
    discount: 36,
    image: 'images/Big Screens | Free installation.jpg',
    description: '55" 4K Smart TV with Free Installation',
    features: ['55" 4K Display', 'Free Installation', 'Smart Features', 'Multiple Ports', 'Wall Mountable'],
    specifications: {
      'Display': '55" 4K UHD',
      'Installation': 'Free',
      'Smart Features': 'Android TV',
      'Ports': '4 HDMI, 2 USB',
      'Warranty': '2 Years'
    },
    rating: 4.4,
    reviews: 1234,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹800/month'
  },
  
  // Additional Electronics
  {
    id: 'headset001',
    name: 'Gaming Headset',
    category: 'electronics',
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    image: 'images/headset.jpg',
    description: 'Professional Gaming Headset with Noise Cancelling Mic',
    features: ['7.1 Surround Sound', 'Noise Cancelling Mic', 'RGB Lighting', 'Comfortable', 'Multi-platform'],
    specifications: {
      'Audio': '7.1 Surround',
      'Microphone': 'Noise Cancelling',
      'Connectivity': 'USB + 3.5mm',
      'Compatibility': 'PC, PS4, Xbox',
      'Warranty': '1 Year'
    },
    rating: 4.2,
    reviews: 892,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹75/month'
  },
  
  // Additional Beauty Products
  {
    id: 'keyboard001',
    name: 'Mechanical Keyboard',
    category: 'electronics',
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    image: 'images/keyboard.jpg',
    description: 'RGB Mechanical Gaming Keyboard with Customizable Keys',
    features: ['Mechanical Switches', 'RGB Backlight', 'Programmable Keys', 'Wrist Rest', 'Anti-ghosting'],
    specifications: {
      'Switches': 'Blue Mechanical',
      'Backlight': 'RGB Customizable',
      'Keys': '104 Keys',
      'Connectivity': 'USB-C',
      'Warranty': '1 Year'
    },
    rating: 4.3,
    reviews: 567,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹125/month'
  },
  {
    id: 'beautyacc001',
    name: 'Beauty Accessories Set',
    category: 'beauty',
    price: 399,
    originalPrice: 699,
    discount: 43,
    image: 'images/decor.jpg',
    description: 'Complete Beauty Accessories Set for Makeup Application',
    features: ['Professional Quality', 'Multiple Brushes', 'Travel Case', 'Easy Clean', 'Soft Bristles'],
    specifications: {
      'Brushes Included': '12 Pieces',
      'Material': 'Synthetic Bristles',
      'Case': 'Travel-friendly',
      'Cleaning': 'Easy Clean',
      'Warranty': '6 Months'
    },
    rating: 4.1,
    reviews: 345,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹20/month'
  },
  
  // Additional Bikes
  {
    id: 'bike002',
    name: 'Sport Bike 200cc',
    category: 'automotive',
    price: 85499,
    originalPrice: 95000,
    discount: 10,
    image: 'images/Bike2.jpg',
    description: '200cc Sport Bike with Advanced Features',
    features: ['200cc Engine', 'ABS System', 'LED Lighting', 'Digital Cluster', 'Sporty Design'],
    specifications: {
      'Engine': '200cc Single Cylinder',
      'Fuel System': 'Fuel Injection',
      'Brakes': 'ABS (Front & Rear)',
      'Lighting': 'Full LED',
      'Warranty': '3 Years'
    },
    rating: 4.3,
    reviews: 234,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹4,275/month'
  },
  {
    id: 'bike003',
    name: 'Adventure Bike 250cc',
    category: 'automotive',
    price: 125999,
    originalPrice: 145000,
    discount: 13,
    image: 'images/Bike3.jpg',
    description: '250cc Adventure Bike for Long Rides',
    features: ['250cc Engine', 'Adventure Ready', 'Comfortable Seating', 'Large Fuel Tank', 'Off-road Capable'],
    specifications: {
      'Engine': '250cc Single Cylinder',
      'Fuel Tank': '15L',
      'Ground Clearance': '200mm',
      'Seat Height': '820mm',
      'Warranty': '3 Years'
    },
    rating: 4.4,
    reviews: 189,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹6,300/month'
  },
  {
    id: 'bike004',
    name: 'Cruiser Bike 300cc',
    category: 'automotive',
    price: 185999,
    originalPrice: 210000,
    discount: 11,
    image: 'images/Bike4.jpg',
    description: '300cc Cruiser Bike for Comfortable Riding',
    features: ['300cc Engine', 'Cruiser Stance', 'Comfortable Seating', 'Classic Design', 'Smooth Ride'],
    specifications: {
      'Engine': '300cc V-twin',
      'Fuel Tank': '18L',
      'Seat Height': '700mm',
      'Weight': '185kg',
      'Warranty': '3 Years'
    },
    rating: 4.2,
    reviews: 156,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹9,300/month'
  },
  {
    id: 'bike005',
    name: 'Touring Bike 400cc',
    category: 'automotive',
    price: 245999,
    originalPrice: 275000,
    discount: 11,
    image: 'images/Bike5.jpg',
    description: '400cc Touring Bike for Long Distance Travel',
    features: ['400cc Engine', 'Touring Comfort', 'Large Storage', 'Wind Protection', 'Premium Features'],
    specifications: {
      'Engine': '400cc Parallel Twin',
      'Fuel Tank': '20L',
      'Storage': '60L Side Cases',
      'Seat Height': '800mm',
      'Warranty': '3 Years'
    },
    rating: 4.5,
    reviews: 123,
    inStock: true,
    delivery: 'Free delivery by Tomorrow',
    emi: 'EMI from ₹12,300/month'
  }
];

// Realtime location for delivery using Geolocation API and manual update
async function updateDeliveryLocation(showLoading = true) {
  const deliveryLabel = document.getElementById('deliveryLabel');
  if (!deliveryLabel) return;
  if (!navigator.geolocation) {
    deliveryLabel.textContent = 'Location not available';
    return;
  }
  if (showLoading) deliveryLabel.textContent = 'Detecting your location...';
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      if (data && data.address) {
        const city = data.address.city || data.address.town || data.address.village || '';
        const region = data.address.state || '';
        const postcode = data.address.postcode || '';
        deliveryLabel.textContent = `Delivering to ${city ? city + ', ' : ''}${region}${postcode ? ' ' + postcode : ''}`;
      } else {
        deliveryLabel.textContent = 'Delivering to your area';
      }
    } catch (err) {
      deliveryLabel.textContent = 'Delivering to your area';
    }
  }, () => {
    deliveryLabel.textContent = 'Location permission denied';
  });
}

// Single DOMContentLoaded initializer
document.addEventListener('DOMContentLoaded', () => {
  // Performance: lazy-load most images and prioritize above-the-fold
  try {
    const heroImgs = Array.from(document.querySelectorAll('.hero-carousel img'));
    if (heroImgs.length > 0) {
      heroImgs.forEach((img, idx) => {
        img.decoding = 'async';
        if (idx === 0) {
          img.loading = 'eager';
          img.setAttribute('fetchpriority', 'high');
        } else {
          img.loading = 'lazy';
          img.setAttribute('fetchpriority', 'low');
        }
      });
    }
    document.querySelectorAll('.product-grid img').forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
      img.setAttribute('fetchpriority', 'low');
    });
  } catch (_) {}
  // Initialize delivery label
  updateDeliveryLocation();
  const updateLocationLink = document.querySelector('.update-location');
  if (updateLocationLink) updateLocationLink.addEventListener('click', (e) => { e.preventDefault(); updateDeliveryLocation(true); });

  // ---------- Carousel (hero) ----------
  const carouselContainer = document.querySelector('.carousel-container');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dots = Array.from(document.querySelectorAll('.carousel-dots .dot'));
  let currentIndex = 0;
  let autoSlideInterval = null;

  function showSlide(index) {
    if (!carouselContainer || slides.length === 0) return;
    currentIndex = (index + slides.length) % slides.length;
  const slidePercent = 100 / slides.length;
  const offset = -currentIndex * slidePercent;
  carouselContainer.style.transform = `translateX(${offset}%)`;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  function nextSlide() { showSlide(currentIndex + 1); }
  function prevSlide() { showSlide(currentIndex - 1); }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

  dots.forEach((dot, idx) => { dot.addEventListener('click', () => { showSlide(idx); resetAutoSlide(); }); });

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
  function stopAutoSlide() { if (autoSlideInterval) { clearInterval(autoSlideInterval); autoSlideInterval = null; } }
  function resetAutoSlide() { stopAutoSlide(); startAutoSlide(); }

  // Pause carousel when tab not visible to save CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoSlide(); else startAutoSlide();
  });

  // Pause on hover
  const hero = document.querySelector('.hero-carousel');
  if (hero) {
    hero.addEventListener('mouseenter', stopAutoSlide);
    hero.addEventListener('mouseleave', startAutoSlide);
  }

  // Initialize positions (use percent translate because slides are 100% width)
  carouselContainer.style.width = `${slides.length * 100}%`;
  slides.forEach(s => s.style.width = `${100 / slides.length}%`);
  showSlide(0);
  startAutoSlide();

  // ---------- Prime popover (mobile toggle) ----------
  const primeTrigger = document.getElementById('primeTrigger');
  const primePopover = document.getElementById('primePopover');
  if (primeTrigger && primePopover) {
    let primeOpen = false;
    function openPrime(){ primePopover.style.opacity = '1'; primePopover.style.visibility = 'visible'; primePopover.style.transform = 'translate(-50%, 0)'; primeTrigger.setAttribute('aria-expanded','true'); primeOpen = true; }
    function closePrime(){ primePopover.style.opacity = ''; primePopover.style.visibility = ''; primePopover.style.transform = ''; primeTrigger.setAttribute('aria-expanded','false'); primeOpen = false; }
    primeTrigger.addEventListener('click', (e) => { const isTouch = matchMedia('(hover: none)').matches; if (!isTouch) return; e.preventDefault(); e.stopPropagation(); primeOpen ? closePrime() : openPrime(); });
    document.addEventListener('click', (e)=>{ if (!primeOpen) return; if (!primePopover.contains(e.target) && !primeTrigger.contains(e.target)) closePrime(); });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape' && primeOpen) closePrime(); });
  }

  // ---------- Hamburger / All menu ----------
  const hamburgerBtn = document.querySelector('.hamburger-menu');
  const allMenu = document.getElementById('allMenu');
  const allMenuOverlay = document.getElementById('allMenuOverlay');
  const allMenuClose = document.querySelector('.drawer-close');
  function openAllMenu(){ if(!allMenu || !allMenuOverlay) return; allMenu.classList.add('show'); allMenu.setAttribute('aria-hidden','false'); allMenuOverlay.classList.add('show'); allMenuOverlay.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; }
  function closeAllMenu(){ if(!allMenu || !allMenuOverlay) return; allMenu.classList.remove('show'); allMenu.setAttribute('aria-hidden','true'); allMenuOverlay.classList.remove('show'); allMenuOverlay.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openAllMenu);
  if (allMenuOverlay) allMenuOverlay.addEventListener('click', closeAllMenu);
  if (allMenuClose) allMenuClose.addEventListener('click', closeAllMenu);
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeAllMenu(); });

  // ---------- Account dropdown (simplified and fixed) ----------
  const account = document.getElementById('loginBtn');
  const accountDropdown = document.getElementById('accountDropdown');
  if (account && accountDropdown) {
    let isDropdownOpen = false;
    
    function openAccount() {
      console.log('Opening account dropdown');
      accountDropdown.style.visibility = 'visible';
      accountDropdown.style.opacity = '1';
      accountDropdown.setAttribute('aria-hidden', 'false');
      isDropdownOpen = true;
    }
    
    function closeAccount() {
      console.log('Closing account dropdown');
      accountDropdown.style.visibility = 'hidden';
      accountDropdown.style.opacity = '';
      accountDropdown.setAttribute('aria-hidden', 'true');
      accountDropdown.classList.remove('keep-open');
      isDropdownOpen = false;
    }
    
    // Toggle dropdown on click for all devices
    account.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Account clicked, current state:', isDropdownOpen);
      
      if (isDropdownOpen) {
        closeAccount();
      } else {
        openAccount();
      }
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!account.contains(e.target) && !accountDropdown.contains(e.target)) {
        closeAccount();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isDropdownOpen) {
        closeAccount();
      }
    });
    
    // Handle input focus and blur
    const signinInput = document.getElementById('signin-identifier');
    if (signinInput) {
      signinInput.addEventListener('focus', () => {
        console.log('Input focused, adding keep-open class');
        accountDropdown.classList.add('keep-open');
        openAccount();
      });
      
      signinInput.addEventListener('blur', () => {
        console.log('Input blurred, checking if should remove keep-open');
        // Small delay to allow button clicks
        setTimeout(() => {
          if (!accountDropdown.contains(document.activeElement)) {
            console.log('Removing keep-open class');
            accountDropdown.classList.remove('keep-open');
          }
        }, 100);
      });
    }
    
    // Handle Continue button
    const continueBtn = document.getElementById('continueSignin');
    if (continueBtn && signinInput) {
      continueBtn.addEventListener('click', () => {
        console.log('Continue button clicked');
        const val = signinInput.value.trim();
        if (!val) {
          console.log('No value entered, showing error');
          signinInput.classList.add('error');
          signinInput.focus();
          return;
        }
        
        console.log('Value entered:', val);
        // Show confirmation
        alert(`Continue with: ${val}`);
        
        // Clear input and close dropdown
        signinInput.value = '';
        signinInput.classList.remove('error');
        closeAccount();
      });
    }
  }

  // ---------- Search functionality ----------
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  
  // Search function that shows results inline on the same page
  function searchProducts(query) {
    console.log('searchProducts function called with:', query);
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) return;
    
    console.log(`Searching for: "${query}"`);
    
    // Track search analytics
    trackSearch(trimmedQuery);
    
    // Show loading state
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
      const originalHTML = searchButton.innerHTML;
      searchButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
      searchButton.disabled = true;
      
      // Reset button after search
      setTimeout(() => {
        searchButton.innerHTML = originalHTML;
        searchButton.disabled = false;
      }, 1000);
    }
    
    // Search in product database
    const searchResults = PRODUCTS_DATABASE.filter(product => 
      product.name.toLowerCase().includes(trimmedQuery) ||
      product.category.toLowerCase().includes(trimmedQuery) ||
      product.description.toLowerCase().includes(trimmedQuery) ||
      product.features.some(feature => feature.toLowerCase().includes(trimmedQuery))
    );
    
    console.log(`Found ${searchResults.length} results:`, searchResults);
    
    if (searchResults.length > 0) {
      // Show search results inline on the same page
      showInlineSearchResults(trimmedQuery, searchResults);
    } else {
      // No results found
      console.log('No products found');
      showNoSearchResults(trimmedQuery);
    }
  }
  
  // Function to track search analytics
  function trackSearch(query) {
    try {
      let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
      const existingIndex = searchHistory.findIndex(item => item.query === query);
      
      if (existingIndex >= 0) {
        searchHistory[existingIndex].count++;
        searchHistory[existingIndex].lastSearched = new Date().toISOString();
      } else {
        searchHistory.push({
          query: query,
          count: 1,
          firstSearched: new Date().toISOString(),
          lastSearched: new Date().toISOString()
        });
      }
      
      // Sort by count (most popular first)
      searchHistory.sort((a, b) => b.count - a.count);
      
      // Keep only top 20 searches
      searchHistory = searchHistory.slice(0, 20);
      
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      console.log('Search tracked:', query);
    } catch (error) {
      console.error('Error tracking search:', error);
    }
  }
  
  // Function to open product details in new tab
  function openProductDetails(product) {
    const productDetailsHTML = generateProductDetailsHTML(product);
    const newTab = window.open('', '_blank');
    newTab.document.write(productDetailsHTML);
    newTab.document.close();
  }
  
  // Function to open product from main page by ID
  window.openProductFromMain = function(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (product) {
      // Show single product in search results
      showInlineSearchResults(product.name, [product]);
    }
  };

  // Functions to show all products from each category
  window.showAllHomeKitchen = function() {
    const homeKitchenProducts = PRODUCTS_DATABASE.filter(p => 
      p.category === 'Home & Kitchen' || 
      p.category === 'Home Improvement' ||
      p.id.includes('ac') || p.id.includes('refrigerator') || p.id.includes('washing') || 
      p.id.includes('microwave') || p.id.includes('bedding') || p.id.includes('decor') || 
      p.id.includes('lighting') || p.id.includes('storage') || p.id.includes('cleaning') || 
      p.id.includes('bathroom') || p.id.includes('tools') || p.id.includes('wallpaper')
    );
    showInlineSearchResults('Home & Kitchen Products', homeKitchenProducts);
  };

  window.showAllBabyCare = function() {
    const babyCareProducts = PRODUCTS_DATABASE.filter(p => 
      p.category === 'Baby Care' || 
      p.id.includes('diapers') || p.id.includes('baby') || p.id.includes('toys') || 
      p.id.includes('games') || p.id.includes('furniture')
    );
    showInlineSearchResults('Baby Care & Toys', babyCareProducts);
  };

  window.showAllHeadphones = function() {
    const headphoneProducts = PRODUCTS_DATABASE.filter(p => 
      p.category === 'Electronics' && 
      (p.name.toLowerCase().includes('headphone') || p.name.toLowerCase().includes('earphone') || 
       p.name.toLowerCase().includes('boat') || p.name.toLowerCase().includes('boult') || 
       p.name.toLowerCase().includes('noise') || p.name.toLowerCase().includes('zebronics'))
    );
    showInlineSearchResults('Headphones', headphoneProducts);
  };

  window.showAllTVs = function() {
    const tvProducts = PRODUCTS_DATABASE.filter(p => 
      p.category === 'Electronics' && 
      (p.name.toLowerCase().includes('tv') || p.name.toLowerCase().includes('television') || 
       p.name.toLowerCase().includes('redmi') || p.name.toLowerCase().includes('4k') || 
       p.name.toLowerCase().includes('premium') || p.name.toLowerCase().includes('big screen'))
    );
    showInlineSearchResults('TVs & Screens', tvProducts);
  };

  window.showAllElectronics = function() {
    const electronicsProducts = PRODUCTS_DATABASE.filter(p => 
      p.category === 'Electronics' && 
      (p.name.toLowerCase().includes('phone') || p.name.toLowerCase().includes('laptop') || 
       p.name.toLowerCase().includes('tablet') || p.name.toLowerCase().includes('ipad') || 
       p.name.toLowerCase().includes('computer'))
    );
    showInlineSearchResults('Electronics', electronicsProducts);
  };

  window.showAllBeauty = function() {
    const beautyProducts = PRODUCTS_DATABASE.filter(p => 
      p.category === 'Beauty & Personal Care' || 
      p.id.includes('lip') || p.id.includes('frag') || p.id.includes('beauty') || 
      p.id.includes('keyboard') || p.id.includes('accessories')
    );
    showInlineSearchResults('Beauty & Personal Care', beautyProducts);
  };

  window.showAllBikes = function() {
    const bikeProducts = PRODUCTS_DATABASE.filter(p => 
      p.category === 'Automotive' || p.id.includes('bike')
    );
    showInlineSearchResults('Bikes & Motorcycles', bikeProducts);
  };
  
  // Function to show search results inline on the same page
  function showInlineSearchResults(query, results) {
    const searchResultsSection = document.getElementById('searchResults');
    const searchQueryTitle = document.getElementById('searchQueryTitle');
    const searchResultsCount = document.getElementById('searchResultsCount');
    const searchResultsGrid = document.getElementById('searchResultsGrid');
    const productGridSection = document.querySelector('.product-grid');
    
    // Update search results header
    searchQueryTitle.textContent = `Search results for "${query}"`;
    searchResultsCount.textContent = `${results.length} product${results.length !== 1 ? 's' : ''} found`;
    
    // Generate search results HTML
    const resultsHTML = results.map(product => `
      <div class="search-result-card">
        <img src="${product.image}" alt="${product.name}" class="search-result-image">
        <h3 class="search-result-title">${product.name}</h3>
        
        <div class="search-result-price">₹${product.price.toLocaleString()}</div>
        <div class="search-result-original-price">₹${product.originalPrice.toLocaleString()}</div>
        <div class="search-result-discount">-${product.discount}%</div>
        
        <div class="search-result-rating">
          <div class="search-result-stars">
            ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '☆' : ''}
          </div>
          <span class="search-result-rating-text">${product.rating} (${product.reviews.toLocaleString()})</span>
        </div>
        
        <div class="search-result-delivery">${product.delivery}</div>
        <div class="search-result-emi">${product.emi}</div>
        
        <div class="search-result-features">
          <ul>
            ${product.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        
        <div class="search-result-actions">
          <button class="search-result-btn buy-now" onclick="buyNow('${product.id}')">
            <i class="fa fa-shopping-cart"></i> Buy Now
          </button>
          <button class="search-result-btn add-cart" onclick="addToCart('${product.id}')">
            <i class="fa fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    `).join('');
    
    // Update the search results grid
    searchResultsGrid.innerHTML = resultsHTML;
    
    // Show search results section and hide product grid
    searchResultsSection.style.display = 'block';
    if (productGridSection) {
      productGridSection.style.display = 'none';
    }
    
    // Scroll to search results
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Function to show no search results
  function showNoSearchResults(query) {
    const searchResultsSection = document.getElementById('searchResults');
    const searchQueryTitle = document.getElementById('searchQueryTitle');
    const searchResultsCount = document.getElementById('searchResultsCount');
    const searchResultsGrid = document.getElementById('searchResultsGrid');
    const productGridSection = document.querySelector('.product-grid');
    
    // Update search results header
    searchQueryTitle.textContent = `No results found for "${query}"`;
    searchResultsCount.textContent = '0 products found';
    
    // Show no results message
    searchResultsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
        <i class="fa fa-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
        <h3 style="color: #565959; margin-bottom: 10px;">No products found</h3>
        <p style="color: #565959; margin-bottom: 20px;">We couldn't find any products matching "${query}".</p>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
          <button class="search-result-btn buy-now" onclick="searchProducts('laptop')" style="max-width: 150px;">
            <i class="fa fa-laptop"></i> Try "laptop"
          </button>
          <button class="search-result-btn add-cart" onclick="searchProducts('phone')" style="max-width: 150px;">
            <i class="fa fa-mobile"></i> Try "phone"
          </button>
          <button class="search-result-btn buy-now" onclick="searchProducts('headphones')" style="max-width: 150px;">
            <i class="fa fa-headphones"></i> Try "headphones"
          </button>
        </div>
      </div>
    `;
    
    // Show search results section and hide product grid
    searchResultsSection.style.display = 'block';
    if (productGridSection) {
      productGridSection.style.display = 'none';
    }
    
    // Scroll to search results
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });
  }
  

  
  // Function to open search results in new tab (kept for backward compatibility)
  function openSearchResults(query, results) {
    const searchResultsHTML = generateSearchResultsHTML(query, results);
    const newTab = window.open('', '_blank');
    newTab.document.write(searchResultsHTML);
    newTab.document.close();
  }
  
  // Generate HTML for product details page
  function generateProductDetailsHTML(product) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${product.name} - Amazon.in</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Amazon Ember', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: #f5f5f5;
            color: #0f1111;
            line-height: 1.6;
          }
          
          .header {
            background: #131921;
            padding: 10px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          
          .header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            padding: 0 20px;
          }
          
          .amazon-logo {
            height: 30px;
            margin-right: 20px;
          }
          
          .back-btn {
            background: #37475a;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
          }
          
          .back-btn:hover {
            background: #485769;
          }
          
          .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
          }
          
          .product-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            background: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          
          .product-images {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          .main-image {
            width: 100%;
            height: 400px;
            object-fit: contain;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: white;
          }
          
          .thumbnail-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }
          
          .thumbnail {
            width: 100%;
            height: 80px;
            object-fit: contain;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            transition: border-color 0.2s;
            background: white;
          }
          
          .thumbnail:hover {
            border-color: #e77600;
          }
          
          .product-info {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          .product-title {
            font-size: 24px;
            font-weight: 600;
            color: #0f1111;
            line-height: 1.3;
          }
          
          .product-rating {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .stars {
            color: #ffa41c;
            font-size: 18px;
          }
          
          .rating-text {
            color: #007185;
            font-size: 14px;
            cursor: pointer;
          }
          
          .price-section {
            display: flex;
            align-items: baseline;
            gap: 15px;
            margin: 20px 0;
          }
          
          .current-price {
            font-size: 28px;
            font-weight: 600;
            color: #0f1111;
          }
          
          .original-price {
            font-size: 18px;
            color: #565959;
            text-decoration: line-through;
          }
          
          .discount {
            background: #cc0c39;
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
          }
          
          .delivery-info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #00a8e1;
          }
          
          .delivery-text {
            color: #007185;
            font-size: 14px;
            font-weight: 500;
          }
          
          .emi-info {
            color: #565959;
            font-size: 14px;
            margin-top: 5px;
          }
          
          .product-description {
            color: #0f1111;
            font-size: 16px;
            line-height: 1.6;
          }
          
          .features-list {
            list-style: none;
            margin: 20px 0;
          }
          
          .features-list li {
            padding: 8px 0;
            border-bottom: 1px solid #f0f0f0;
            position: relative;
            padding-left: 25px;
          }
          
          .features-list li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #00a8e1;
            font-weight: bold;
          }
          
          .specifications {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
          }
          
          .spec-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #0f1111;
          }
          
          .spec-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          
          .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e0e0e0;
          }
          
          .spec-label {
            font-weight: 500;
            color: #565959;
          }
          
          .spec-value {
            color: #0f1111;
            font-weight: 500;
          }
          
          .action-buttons {
            display: flex;
            gap: 15px;
            margin: 30px 0;
          }
          
          .btn-buy-now {
            background: #ffd814;
            color: #0f1111;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
            flex: 1;
          }
          
          .btn-buy-now:hover {
            background: #f7ca00;
          }
          
          .btn-add-cart {
            background: #ffa41c;
            color: #0f1111;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
            flex: 1;
          }
          
          .btn-add-cart:hover {
            background: #f08804;
          }
          
          .stock-status {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 20px 0;
          }
          
          .in-stock {
            color: #007600;
            font-weight: 500;
          }
          
          .stock-icon {
            color: #007600;
          }
          
          @media (max-width: 768px) {
            .product-container {
              grid-template-columns: 1fr;
              gap: 20px;
              padding: 20px;
            }
            
            .spec-grid {
              grid-template-columns: 1fr;
            }
            
            .action-buttons {
              flex-direction: column;
            }
          }
        </style>
      </head>
      <body>
        <header class="header">
          <div class="header-content">
            <img src="images/amazon-logo.jpg" alt="Amazon.in" class="amazon-logo">
            <button class="back-btn" onclick="window.close()">
              <i class="fa fa-arrow-left"></i> Back to Amazon
            </button>
          </div>
        </header>
        
        <div class="container">
          <div class="product-container">
            <div class="product-images">
              <img src="${product.image}" alt="${product.name}" class="main-image" id="mainImage">
              <div class="thumbnail-grid">
                <img src="${product.image}" alt="${product.name}" class="thumbnail" onclick="changeMainImage(this.src)">
                <img src="${product.image}" alt="${product.name}" class="thumbnail" onclick="changeMainImage(this.src)">
                <img src="${product.image}" alt="${product.name}" class="thumbnail" onclick="changeMainImage(this.src)">
                <img src="${product.image}" alt="${product.name}" class="thumbnail" onclick="changeMainImage(this.src)">
              </div>
            </div>
            
            <div class="product-info">
              <h1 class="product-title">${product.name}</h1>
              
              <div class="product-rating">
                <div class="stars">
                  ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '☆' : ''}
                </div>
                <span class="rating-text">${product.rating} out of 5</span>
                <span class="rating-text">${product.reviews.toLocaleString()} ratings</span>
              </div>
              
              <div class="price-section">
                <span class="current-price">₹${product.price.toLocaleString()}</span>
                <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                <span class="discount">-${product.discount}%</span>
              </div>
              
              <div class="delivery-info">
                <div class="delivery-text">${product.delivery}</div>
                <div class="emi-info">${product.emi}</div>
              </div>
              
              <div class="stock-status">
                <i class="fa fa-check-circle stock-icon"></i>
                <span class="in-stock">In Stock</span>
              </div>
              
              <p class="product-description">${product.description}</p>
              
              <ul class="features-list">
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
              
              <div class="specifications">
                <h3 class="spec-title">Technical Specifications</h3>
                <div class="spec-grid">
                  ${Object.entries(product.specifications).map(([key, value]) => 
                    `<div class="spec-item">
                       <span class="spec-label">${key}</span>
                       <span class="spec-value">${value}</span>
                     </div>`
                  ).join('')}
                </div>
              </div>
              
              <div class="action-buttons">
                <button class="btn-buy-now" onclick="buyNow('${product.id}')">
                  <i class="fa fa-shopping-cart"></i> Buy Now
                </button>
                <button class="btn-add-cart" onclick="addToCart('${product.id}')">
                  <i class="fa fa-cart-plus"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <script>
          function changeMainImage(src) {
            document.getElementById('mainImage').src = src;
          }
          
          function buyNow(productId) {
            alert('Redirecting to checkout for product: ' + productId);
            // Here you would typically redirect to a checkout page
          }
          
          function addToCart(productId) {
            alert('Product added to cart: ' + productId);
            // Here you would typically add the product to cart
          }
        </script>
      </body>
      </html>
    `;
  }
  
  // Generate HTML for search results page
  function generateSearchResultsHTML(query, results) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Search Results for "${query}" - Amazon.in</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amazon+Ember:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Amazon Ember', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: #f5f5f5;
            color: #0f1111;
            line-height: 1.6;
          }
          
          .header {
            background: #131921;
            padding: 10px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
          }
          
          .header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            padding: 0 20px;
          }
          
          .amazon-logo {
            height: 30px;
            margin-right: 20px;
          }
          
          .back-btn {
            background: #37475a;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
          }
          
          .back-btn:hover {
            background: #485769;
          }
          
          .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
          }
          
          .search-header {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          
          .search-query {
            font-size: 24px;
            font-weight: 600;
            color: #0f1111;
            margin-bottom: 10px;
          }
          
          .results-count {
            color: #565959;
            font-size: 14px;
          }
          
          .results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }
          
          .result-card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
          }
          
          .result-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          }
          
          .result-image {
            width: 100%;
            height: 200px;
            object-fit: contain;
            border: 1px solid #ddd;
            border-radius: 6px;
            background: white;
            margin-bottom: 15px;
          }
          
          .result-title {
            font-size: 16px;
            font-weight: 600;
            color: #0f1111;
            margin-bottom: 10px;
            line-height: 1.4;
          }
          
          .result-price {
            font-size: 20px;
            font-weight: 600;
            color: #0f1111;
            margin-bottom: 5px;
          }
          
          .result-original-price {
            color: #565959;
            text-decoration: line-through;
            font-size: 14px;
            margin-bottom: 10px;
          }
          
          .result-discount {
            background: #cc0c39;
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 10px;
          }
          
          .result-rating {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 15px;
          }
          
          .result-stars {
            color: #ffa41c;
            font-size: 14px;
          }
          
          .result-rating-text {
            color: #007185;
            font-size: 12px;
          }
          
          .result-delivery {
            color: #007185;
            font-size: 12px;
            font-weight: 500;
          }
          
          .view-details-btn {
            background: #ffd814;
            color: #0f1111;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
            width: 100%;
          }
          
          .view-details-btn:hover {
            background: #f7ca00;
          }
          
          @media (max-width: 768px) {
            .results-grid {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>
      <body>
        <header class="header">
          <div class="header-content">
            <img src="images/amazon-logo.jpg" alt="Amazon.in" class="amazon-logo">
            <button class="back-btn" onclick="window.close()">
              <i class="fa fa-arrow-left"></i> Back to Amazon
            </button>
          </div>
        </header>
        
        <div class="container">
          <div class="search-header">
            <h1 class="search-query">Search results for "${query}"</h1>
            <p class="results-count">${results.length} product${results.length !== 1 ? 's' : ''} found</p>
          </div>
          
          <div class="results-grid">
            ${results.map(product => `
              <div class="result-card" onclick="openProductDetails('${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="result-image">
                <h3 class="result-title">${product.name}</h3>
                <div class="result-price">₹${product.price.toLocaleString()}</div>
                <div class="result-original-price">₹${product.originalPrice.toLocaleString()}</div>
                <div class="result-discount">-${product.discount}%</div>
                <div class="result-rating">
                  <div class="result-stars">
                    ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '☆' : ''}
                  </div>
                  <span class="result-rating-text">${product.rating} (${product.reviews.toLocaleString()})</span>
                </div>
                <div class="result-delivery">${product.delivery}</div>
                <button class="view-details-btn">View Details</button>
              </div>
            `).join('')}
          </div>
        </div>
        
        <script>
          function openProductDetails(productId) {
            const product = ${JSON.stringify(results.find(p => p.id === productId))};
            if (product) {
              const productDetailsHTML = \`${generateProductDetailsHTML.toString().replace(/`/g, '\\`')}\`;
              const newTab = window.open('', '_blank');
              newTab.document.write(productDetailsHTML(product));
              newTab.document.close();
            }
          }
        </script>
      </body>
      </html>
    `;
  }
  
  if (searchForm && searchInput) {
    console.log('Search form and input found:', { searchForm, searchInput });
    
    searchForm.addEventListener('submit', (e) => { 
      e.preventDefault(); 
      const query = searchInput.value.trim(); 
      if (query) searchProducts(query); 
    });
    
    // Add search button click handler
    const searchButton = searchForm.querySelector('.search-button');
    if (searchButton) {
      searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) searchProducts(query);
      });
    }
    
    // Add search suggestions
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (query.length > 1) {
        showSearchSuggestions(query);
      } else {
        hideSearchSuggestions();
      }
    });
    
    // Add keyboard navigation for search suggestions
    searchInput.addEventListener('keydown', (e) => {
      const suggestionsDropdown = document.querySelector('.search-suggestions');
      if (!suggestionsDropdown || suggestionsDropdown.style.display === 'none') return;
      
      const suggestions = suggestionsDropdown.querySelectorAll('.search-suggestion:not(.no-results)');
      if (suggestions.length === 0) return;
      
      let currentIndex = -1;
      suggestions.forEach((suggestion, index) => {
        if (suggestion.classList.contains('selected')) {
          currentIndex = index;
          suggestion.classList.remove('selected');
        }
      });
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % suggestions.length;
        suggestions[currentIndex].classList.add('selected');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentIndex = currentIndex <= 0 ? suggestions.length - 1 : currentIndex - 1;
        suggestions[currentIndex].classList.add('selected');
      } else if (e.key === 'Enter' && currentIndex >= 0) {
        e.preventDefault();
        selectSuggestion(suggestions[currentIndex].querySelector('span').textContent);
      } else if (e.key === 'Escape') {
        hideSearchSuggestions();
      }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchForm.contains(e.target)) {
        hideSearchSuggestions();
      }
    });
  }
  
  // Function to show search suggestions
  function showSearchSuggestions(query) {
    const suggestions = PRODUCTS_DATABASE.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    
    let suggestionsHTML = '';
    
    // Add recent searches if query is empty or short
    if (query.length <= 1) {
      const recentSearches = getRecentSearches();
      if (recentSearches.length > 0) {
        suggestionsHTML += recentSearches.map(item => `
          <div class="search-suggestion recent" onclick="selectSuggestion('${item.query}')">
            <i class="fa fa-history"></i>
            <span>${item.query}</span>
            <small>Searched ${item.count} time${item.count !== 1 ? 's' : ''}</small>
          </div>
        `).join('');
      }
    }
    
    if (suggestions.length > 0) {
      suggestionsHTML += suggestions.map(product => `
        <div class="search-suggestion" onclick="selectSuggestion('${product.name}')">
          <i class="fa fa-search"></i>
          <span>${product.name}</span>
          <small>${product.category} - ₹${product.price.toLocaleString()}</small>
        </div>
      `).join('');
    } else if (query.length > 1) {
      // Show popular searches when no results
      const popularSearches = ['laptop', 'phone', 'headphones', 'TV', 'bike', 'bedding'];
      suggestionsHTML += popularSearches.map(term => `
        <div class="search-suggestion popular" onclick="selectSuggestion('${term}')">
          <i class="fa fa-fire"></i>
          <span>Try "${term}"</span>
          <small>Popular search</small>
        </div>
      `).join('');
    }
    
    // Create or update suggestions dropdown
    let suggestionsDropdown = document.querySelector('.search-suggestions');
    if (!suggestionsDropdown) {
      suggestionsDropdown = document.createElement('div');
      suggestionsDropdown.className = 'search-suggestions';
      searchForm.appendChild(suggestionsDropdown);
    }
    
    suggestionsDropdown.innerHTML = suggestionsHTML;
    suggestionsDropdown.style.display = 'block';
  }
  
  // Function to get recent searches
  function getRecentSearches() {
    try {
      const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
      return searchHistory.slice(0, 3); // Show top 3 recent searches
    } catch (error) {
      console.error('Error getting recent searches:', error);
      return [];
    }
  }
  
  // Function to hide search suggestions
  function hideSearchSuggestions() {
    const suggestionsDropdown = document.querySelector('.search-suggestions');
    if (suggestionsDropdown) {
      suggestionsDropdown.style.display = 'none';
    }
  }
  
  // Function to select a search suggestion
  function selectSuggestion(productName) {
    searchInput.value = productName;
    hideSearchSuggestions();
    searchProducts(productName);
  }
  
  // Global functions for product actions
  window.buyNow = function(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (product) {
      alert(`Redirecting to checkout for: ${product.name}\nPrice: ₹${product.price.toLocaleString()}`);
      // Here you would typically redirect to a checkout page
      console.log('Buy Now clicked for product:', productId);
    }
  };
  
  // Professional Cart Management System
  class CartManager {
    constructor() {
      this.cart = this.loadCart();
      this.init();
    }

    loadCart() {
      try {
        return JSON.parse(localStorage.getItem('cart') || '[]');
      } catch (error) {
        console.error('Error loading cart:', error);
        return [];
      }
    }

    saveCart() {
      try {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    }

    getCartCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getCartTotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    addToCart(productId) {
      const product = PRODUCTS_DATABASE.find(p => p.id === productId);
      if (!product) return false;

      const existingItem = this.cart.find(item => item.id === productId);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({
          id: productId,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        });
      }

      this.saveCart();
      this.updateCartDisplay();
      this.showAddToCartNotification(product);
      return true;
    }

    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
      this.saveCart();
      this.updateCartDisplay();
    }

    updateQuantity(productId, newQuantity) {
      if (newQuantity <= 0) {
        this.removeFromCart(productId);
        return;
      }

      const item = this.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = newQuantity;
        this.saveCart();
        this.updateCartDisplay();
      }
    }

    clearCart() {
      this.cart = [];
      this.saveCart();
      this.updateCartDisplay();
    }

    updateCartDisplay() {
      const cartCountElement = document.querySelector('.cart-count');
      const cartItemsCountElement = document.querySelector('.cart-items-count');
      const cartTotalElement = document.querySelector('.cart-total-amount');
      const cartItemsElement = document.getElementById('cartItems');
      const cartCheckoutBtn = document.querySelector('.cart-checkout-btn');

      const totalItems = this.getCartCount();
      const totalAmount = this.getCartTotal();

      // Update cart count with animation
      if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.animation = 'none';
        cartCountElement.offsetHeight; // Trigger reflow
        cartCountElement.style.animation = 'cartBounce 0.3s ease-in-out';
      }

      // Update items count
      if (cartItemsCountElement) {
        cartItemsCountElement.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
      }

      // Update total amount
      if (cartTotalElement) {
        cartTotalElement.textContent = `₹${totalAmount.toLocaleString()}`;
      }

      // Update cart items display
      if (cartItemsElement) {
        if (this.cart.length === 0) {
          cartItemsElement.innerHTML = `
            <div class="empty-cart">
              <i class="fa fa-shopping-cart"></i>
              <h4>Your cart is empty</h4>
              <p>Add some products to get started</p>
            </div>
          `;
        } else {
          cartItemsElement.innerHTML = this.cart.map(item => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}" class="cart-item-image">
              <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="cart-item-quantity">
                  <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                  <span class="quantity-display">${item.quantity}</span>
                  <button class="quantity-btn" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
              </div>
              <button class="cart-item-remove" onclick="cartManager.removeFromCart('${item.id}')">
                <i class="fa fa-trash"></i>
              </button>
            </div>
          `).join('');
        }
      }

      // Update checkout button
      if (cartCheckoutBtn) {
        cartCheckoutBtn.disabled = totalItems === 0;
      }

      // Update clear cart button visibility
      const clearCartBtn = document.querySelector('.cart-clear-btn');
      if (clearCartBtn) {
        clearCartBtn.style.display = totalItems > 0 ? 'flex' : 'none';
      }
    }

    showAddToCartNotification(product) {
      // Create notification element
      const notification = document.createElement('div');
      notification.className = 'cart-notification';
      notification.innerHTML = `
        <div class="cart-notification-content">
          <i class="fa fa-check-circle"></i>
          <span>Added to cart: ${product.name}</span>
        </div>
      `;
      
      // Add styles
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00a8e1;
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
      `;

      document.body.appendChild(notification);

      // Animate in
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
      }, 100);

      // Remove after 3 seconds
      setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }

    init() {
      this.updateCartDisplay();
      this.setupCartToggle();
    }

    setupCartToggle() {
      const cartBtn = document.getElementById('cartBtn');
      const cartDropdown = document.getElementById('cartDropdown');

      if (cartBtn && cartDropdown) {
        let isCartOpen = false;

        const openCart = () => {
          cartDropdown.classList.add('show');
          isCartOpen = true;
        };

        const closeCart = () => {
          cartDropdown.classList.remove('show');
          isCartOpen = false;
        };

        cartBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          if (isCartOpen) {
            closeCart();
          } else {
            openCart();
          }
        });

        // Close cart when clicking outside
        document.addEventListener('click', (e) => {
          if (!cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {
            closeCart();
          }
        });

        // Close cart on Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && isCartOpen) {
            closeCart();
          }
        });
      }
    }
  }

  // Initialize cart manager
  const cartManager = new CartManager();
  window.cartManager = cartManager;

  // Global addToCart function
  window.addToCart = function(productId) {
    return cartManager.addToCart(productId);
  };

  // Global proceedToCheckout function
  window.proceedToCheckout = function() {
    if (cartManager.getCartCount() === 0) {
      alert('Your cart is empty. Please add some products first.');
      return;
    }
    
    const total = cartManager.getCartTotal();
    const items = cartManager.getCartCount();
    
    console.log(`Proceeding to checkout with ${items} item${items !== 1 ? 's' : ''}\nTotal: ₹${total.toLocaleString()}`);
    
    // Redirect to login page
    window.location.href = 'login.html';
  };

  // Global clearCart function
  window.clearCart = function() {
    if (confirm('Are you sure you want to clear your cart?')) {
      cartManager.clearCart();
    }
  };
  
  window.closeSearchResults = function() {
    const searchResultsSection = document.getElementById('searchResults');
    const productGridSection = document.querySelector('.product-grid');
    
    // Hide search results section and show product grid
    if (searchResultsSection) {
      searchResultsSection.style.display = 'none';
    }
    if (productGridSection) {
      productGridSection.style.display = 'block';
    }
    
    // Clear search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.value = '';
    }
    
    // Hide search suggestions if any
    const suggestionsDropdown = document.querySelector('.search-suggestions');
    if (suggestionsDropdown) {
      suggestionsDropdown.style.display = 'none';
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Force a small delay to ensure proper display
    setTimeout(() => {
      if (productGridSection) {
        productGridSection.style.display = 'block';
      }
    }, 100);
  };

  // Category dropdown placeholder updates
  const searchCategory = document.querySelector('.search-category');
  if (searchCategory && searchInput) {
    searchCategory.addEventListener('change', () => {
      const val = searchCategory.value || '';
      if (val.toLowerCase && val.toLowerCase() === 'all') searchInput.placeholder = 'Search Amazon.in';
      else searchInput.placeholder = `Search ${val} on Amazon.in`;
    });
  }

  // ---------- Language / country modal ----------
  const countryChangeLink = Array.from(document.querySelectorAll('.language-learn-more a')).find(a => a.textContent.trim().toLowerCase() === 'change country/region');
  const countryModal = document.getElementById('countryModal');
  // Helper to update flag icon and persist selection
  function updateCountryFlag(countryCode) {
    try {
      const normalized = String(countryCode || '').toLowerCase();
      const flagImg = document.querySelector('.language-selector .flag');
      if (flagImg && normalized) {
        flagImg.src = `https://flagcdn.com/${normalized}.svg`;
        flagImg.alt = `${normalized.toUpperCase()} Flag`;
      }
      // Persist selection
      localStorage.setItem('selectedCountryCode', normalized);
    } catch (_) {}
  }

  // Load persisted country on startup
  const persistedCountry = localStorage.getItem('selectedCountryCode');
  if (persistedCountry) updateCountryFlag(persistedCountry);

  if (countryChangeLink && countryModal) {
    let scrollLockY = 0;
    function openCountryModal(e){
      if (e) e.preventDefault();
      countryModal.style.display = 'flex';
      // Lock scroll without jumping
      scrollLockY = window.scrollY || window.pageYOffset || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollLockY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    }
    function closeCountryModal(){
      countryModal.style.display = 'none';
      // Restore scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollLockY);
    }
    countryChangeLink.addEventListener('click', openCountryModal);
    const saveBtn = countryModal.querySelector('#countrySaveBtn');
    const cancelBtn = countryModal.querySelector('#countryCancelBtn');
    const selectEl = countryModal.querySelector('#countrySelect');
    if (saveBtn && selectEl) {
      saveBtn.onclick = () => {
        const code = selectEl.value;
        updateCountryFlag(code);
        closeCountryModal();
      };
    }
    if (cancelBtn) cancelBtn.onclick = () => { closeCountryModal(); };
    countryModal.addEventListener('click', (e)=>{ if (e.target === countryModal) closeCountryModal(); });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape' && countryModal.style.display === 'flex') closeCountryModal(); });
  }

  // ---------- Dynamic dropdown width adjustment (category) ----------
  const searchCategoryWrap = document.querySelector('.search-category-wrap');
  let lastCategoryWidth = null;
  function adjustDropdownWidth() {
    if (!searchCategory || !searchCategoryWrap) return;
    // Avoid width recalculation while user is typing to prevent cursor flicker
    if (document.activeElement === searchInput) return;
    const selectedOption = searchCategory.options[searchCategory.selectedIndex];
    const text = selectedOption ? selectedOption.text : '';
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden'; tempSpan.style.position = 'absolute'; tempSpan.style.whiteSpace = 'nowrap'; tempSpan.style.fontSize = '14px'; tempSpan.style.fontWeight = '500'; tempSpan.style.fontFamily = 'inherit'; tempSpan.textContent = text;
    document.body.appendChild(tempSpan);
    const textWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);
    const minWidth = 70; const arrowPadding = 40; const newWidth = Math.max(minWidth, textWidth + arrowPadding);
    // Only apply when width actually changes to avoid caret reflow
    if (lastCategoryWidth === null || Math.abs(newWidth - lastCategoryWidth) > 1) {
      searchCategoryWrap.style.width = newWidth + 'px';
      searchCategory.style.width = newWidth + 'px';
      lastCategoryWidth = newWidth;
    }
  }
  if (searchCategory) {
    adjustDropdownWidth();
    searchCategory.addEventListener('change', adjustDropdownWidth);
    // Throttle resize handler to avoid layout jank
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      if (document.activeElement === searchInput) return; // do nothing while typing
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(adjustDropdownWidth);
    });
  }

  // ---------- Product cards (static) ----------
  const productContainer = document.getElementById('product-container');
  if (productContainer) {
    const products = [
        { id: '1', name: 'Amazon Echo', price: 99.99, image: 'images/boAt.jpg' },
  { id: '2', name: 'Kindle Paperwhite', price: 129.99, image: 'images/ipad.jpg' },
  { id: '3', name: 'Fire TV Stick', price: 39.99, image: 'images/Redmi F Series firetv.jpg' },
    ];
    productContainer.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `\n        <img src="${product.image}" alt="${product.name}" class="product-image" />\n        <h3 class="product-name">${product.name}</h3>\n        <p class="product-price">$${product.price.toFixed(2)}</p>\n      `;
      productContainer.appendChild(card);
    });
  }

  // ---------- Scroll to top button ----------
  const scrollBtn = document.createElement('button');
  scrollBtn.type = 'button'; scrollBtn.innerHTML = '<i class="fa fa-arrow-up" aria-hidden="true"></i>'; scrollBtn.className = 'scroll-to-top'; scrollBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollBtn);
  window.addEventListener('scroll', () => { scrollBtn.style.display = (window.scrollY > 300) ? 'flex' : 'none'; });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
