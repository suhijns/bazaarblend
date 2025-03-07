import { Product, Vendor, Category } from "../types";

export const categories: Category[] = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "home", name: "Home & Decor" },
  { id: "books", name: "Books" },
  { id: "beauty", name: "Beauty" },
  { id: "sports", name: "Sports" },
];

export const vendors: Vendor[] = [
  {
    id: "v1",
    name: "TechNova",
    description: "Premium electronics and accessories",
    logo: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2glMjBsb2dvfGVufDB8fDB8fHww",
    featured: true,
    productsCount: 42,
    rating: 4.8,
  },
  {
    id: "v2",
    name: "Modern Living",
    description: "Minimalist home decor and furniture",
    logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG9tZSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    featured: true,
    productsCount: 38,
    rating: 4.7,
  },
  {
    id: "v3",
    name: "Urban Threads",
    description: "Contemporary fashion for modern lifestyle",
    logo: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    featured: true,
    productsCount: 65,
    rating: 4.6,
  },
  {
    id: "v4",
    name: "Pure Beauty",
    description: "Organic and sustainable beauty products",
    logo: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    featured: false,
    productsCount: 29,
    rating: 4.5,
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Wireless Premium Headphones",
    price: 299.99,
    description: "Premium noise-cancelling headphones with exceptional sound quality and minimal design.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "electronics",
    vendor: "TechNova",
    vendorId: "v1",
    featured: true,
    rating: 4.9,
    reviews: 243,
  },
  {
    id: "p2",
    name: "Minimalist Desk Lamp",
    price: 89.99,
    description: "Elegant desk lamp with adjustable brightness and color temperature.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
    category: "home",
    vendor: "Modern Living",
    vendorId: "v2",
    featured: true,
    rating: 4.7,
    reviews: 128,
  },
  {
    id: "p3",
    name: "Premium Cotton Sweater",
    price: 129.99,
    description: "Soft, sustainable premium cotton sweater with minimalist design.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "clothing",
    vendor: "Urban Threads",
    vendorId: "v3",
    featured: true,
    rating: 4.8,
    reviews: 186,
  },
  {
    id: "p4",
    name: "Smart Watch Series X",
    price: 349.99,
    description: "Advanced smartwatch with health monitoring and seamless connectivity.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: "electronics",
    vendor: "TechNova",
    vendorId: "v1",
    featured: true,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: "p5",
    name: "Ceramic Vase Set",
    price: 79.99,
    description: "Handcrafted ceramic vases with modern, minimal aesthetic.",
    image: "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VyYW1pYyUyMHZhc2V8ZW58MHx8MHx8fDA%3D",
    category: "home",
    vendor: "Modern Living",
    vendorId: "v2",
    featured: false,
    rating: 4.6,
    reviews: 87,
  },
  {
    id: "p6",
    name: "Organic Face Serum",
    price: 59.99,
    description: "Rejuvenating face serum with organic ingredients and eco-friendly packaging.",
    image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHNlcnVtfGVufDB8fDB8fHww",
    category: "beauty",
    vendor: "Pure Beauty",
    vendorId: "v4",
    featured: true,
    rating: 4.8,
    reviews: 159,
  },
  {
    id: "p7",
    name: "Minimal Leather Backpack",
    price: 149.99,
    description: "Sleek leather backpack with multiple compartments and durable design.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    category: "clothing",
    vendor: "Urban Threads",
    vendorId: "v3",
    featured: false,
    rating: 4.7,
    reviews: 142,
  },
  {
    id: "p8",
    name: "Wireless Charging Pad",
    price: 39.99,
    description: "Fast wireless charging pad with sleek, minimal design and LED indicator.",
    image: "https://images.unsplash.com/photo-1603539947775-89e30b3caad7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcmdpbmclMjBwYWR8ZW58MHx8MHx8fDA%3D",
    category: "electronics",
    vendor: "TechNova",
    vendorId: "v1",
    featured: false,
    rating: 4.5,
    reviews: 98,
  },
  {
    id: "p9",
    name: "Professional Digital Camera",
    price: 1299.99,
    description: "High-resolution digital camera with advanced features for professional photography.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww",
    category: "electronics",
    vendor: "TechNova",
    vendorId: "v1",
    featured: true,
    rating: 4.8,
    reviews: 175,
    stock: 42
  },
  {
    id: "p10",
    name: "Ultra-Thin Laptop Pro",
    price: 1499.99,
    description: "Powerful yet lightweight laptop with stunning display and all-day battery life.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    category: "electronics",
    vendor: "TechNova",
    vendorId: "v1",
    featured: false,
    rating: 4.9,
    reviews: 320,
    stock: 35
  },
  {
    id: "p11",
    name: "Merino Wool Cardigan",
    price: 159.99,
    description: "Luxuriously soft merino wool cardigan, perfect for layering in any season.",
    image: "https://images.unsplash.com/photo-1644313801247-5404d4ea0948?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcmRpZ2FufGVufDB8fDB8fHww",
    category: "clothing",
    vendor: "Urban Threads",
    vendorId: "v3",
    featured: true,
    rating: 4.7,
    reviews: 122,
    stock: 68
  },
  {
    id: "p12",
    name: "Minimalist Wall Clock",
    price: 69.99,
    description: "Sleek, modern wall clock with silent mechanism and minimalist design.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbCUyMGNsb2NrfGVufDB8fDB8fHww",
    category: "home",
    vendor: "Modern Living",
    vendorId: "v2",
    featured: false,
    rating: 4.5,
    reviews: 93,
    stock: 54
  },
  {
    id: "p13",
    name: "Botanical Facial Cleanser",
    price: 34.99,
    description: "Gentle, plant-based facial cleanser that purifies without drying the skin.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2lhbCUyMGNsZWFuc2VyfGVufDB8fDB8fHww",
    category: "beauty",
    vendor: "Pure Beauty",
    vendorId: "v4",
    featured: true,
    rating: 4.6,
    reviews: 145,
    stock: 89
  },
  {
    id: "p14",
    name: "Contemporary Fiction Collection",
    price: 49.99,
    description: "Set of five award-winning contemporary fiction novels in hardcover.",
    image: "https://images.unsplash.com/photo-1510172951991-856a62a9637d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    category: "books",
    vendor: "Modern Living",
    vendorId: "v2",
    featured: false,
    rating: 4.8,
    reviews: 112,
    stock: 45
  },
  {
    id: "p15",
    name: "Premium Yoga Mat",
    price: 89.99,
    description: "Eco-friendly, non-slip yoga mat with perfect cushioning and alignment marks.",
    image: "https://images.unsplash.com/photo-1593164842264-854604db2260?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D",
    category: "sports",
    vendor: "Urban Threads",
    vendorId: "v3",
    featured: true,
    rating: 4.7,
    reviews: 198,
    stock: 62
  },
  {
    id: "p16",
    name: "Wireless Earbuds Pro",
    price: 159.99,
    description: "True wireless earbuds with active noise cancellation and crystal-clear sound.",
    image: "https://images.unsplash.com/photo-1590658565767-311c93b2acd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D",
    category: "electronics",
    vendor: "TechNova",
    vendorId: "v1",
    featured: true,
    rating: 4.8,
    reviews: 275,
    stock: 83
  },
  {
    id: "p17",
    name: "Artisanal Coffee Table",
    price: 349.99,
    description: "Handcrafted solid wood coffee table with sustainable materials and modern design.",
    image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwdGFibGV8ZW58MHx8MHx8fDA%3D",
    category: "home",
    vendor: "Modern Living",
    vendorId: "v2",
    featured: true,
    rating: 4.9,
    reviews: 87,
    stock: 18
  },
  {
    id: "p18",
    name: "Designer Denim Jacket",
    price: 199.99,
    description: "Premium denim jacket with modern cut and sustainable manufacturing process.",
    image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
    category: "clothing",
    vendor: "Urban Threads",
    vendorId: "v3",
    featured: false,
    rating: 4.6,
    reviews: 134,
    stock: 57
  },
  {
    id: "p19",
    name: "Self-Improvement Book Set",
    price: 79.99,
    description: "Curated collection of bestselling self-improvement books for personal growth.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    category: "books",
    vendor: "Modern Living",
    vendorId: "v2",
    featured: false,
    rating: 4.7,
    reviews: 102,
    stock: 38
  },
  {
    id: "p20",
    name: "Hyaluronic Acid Moisturizer",
    price: 44.99,
    description: "Intensely hydrating moisturizer with hyaluronic acid and natural extracts.",
    image: "https://images.unsplash.com/photo-1567218958255-4e35db4eacb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9pc3R1cml6ZXJ8ZW58MHx8MHx8fDA%3D",
    category: "beauty",
    vendor: "Pure Beauty",
    vendorId: "v4",
    featured: true,
    rating: 4.8,
    reviews: 178,
    stock: 96
  },
  {
    id: "p21",
    name: "Smart Home Speaker",
    price: 129.99,
    description: "Voice-controlled smart speaker with premium sound quality and home automation features.",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0JTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D",
    category: "electronics",
    vendor: "TechNova",
    vendorId: "v1",
    featured: false,
    rating: 4.6,
    reviews: 248,
    stock: 73
  },
  {
    id: "p22",
    name: "Premium Running Shoes",
    price: 149.99,
    description: "Lightweight, responsive running shoes with advanced cushioning technology.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww",
    category: "sports",
    vendor: "Urban Threads",
    vendorId: "v3",
    featured: true,
    rating: 4.8,
    reviews: 325,
    stock: 64
  },
  {
    id: "p23",
    name: "Scandinavian Floor Lamp",
    price: 189.99,
    description: "Elegant floor lamp with wooden tripod base and linen shade in Scandinavian style.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb3IlMjBsYW1wfGVufDB8fDB8fHww",
    category: "home",
    vendor: "Modern Living",
    vendorId: "v2",
    featured: false,
    rating: 4.7,
    reviews: 96,
    stock: 27
  },
  {
    id: "p24",
    name: "Virtual Reality Headset",
    price: 399.99,
    description: "Immersive VR headset with high-resolution display and intuitive controllers.",
    image: "https://images.unsplash.com/photo-1622979135240-caa6648190b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZyJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D",
    category: "electronics",
    vendor: "TechNova",
    vendorId: "v1",
    featured: true,
    rating: 4.9,
    reviews: 187,
    stock: 32
  },
  {
    id: "p25",
    name: "Classic Literature Collection",
    price: 89.99,
    description: "Beautifully bound collection of classic literature with gold-embossed covers.",
    image: "https://images.unsplash.com/photo-1515826125547-2f0e08a4ffc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xhc3NpYyUyMGJvb2tzfGVufDB8fDB8fHww",
    category: "books",
    vendor: "Modern Living",
    vendorId: "v2",
    featured: true,
    rating: 4.8,
    reviews: 143,
    stock: 41
  },
  {
    id: "p26",
    name: "Linen Button-Down Shirt",
    price: 89.99,
    description: "Breathable, premium linen shirt with relaxed fit and sustainable production.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGluZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D",
    category: "clothing",
    vendor: "Urban Threads",
    vendorId: "v3",
    featured: false,
    rating: 4.7,
    reviews: 118,
    stock: 82
  },
  {
    id: "p27",
    name: "Anti-Aging Night Cream",
    price: 79.99,
    description: "Rejuvenating night cream with retinol and peptides for visible age-defying results.",
    image: "https://images.unsplash.com/photo-1594461166607-937f7dbd0ed4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2h0JTIwY3JlYW18ZW58MHx8MHx8fDA%3D",
    category: "beauty",
    vendor: "Pure Beauty",
    vendorId: "v4",
    featured: true,
    rating: 4.8,
    reviews: 205,
    stock: 67
  },
  {
    id: "p28",
    name: "Adjustable Fitness Dumbbell Set",
    price: 299.99,
    description: "Space-saving adjustable dumbbells that replace multiple weight sets for home fitness.",
    image: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtYmJlbGxzfGVufDB8fDB8fHww",
    category: "sports",
    vendor: "Urban Threads",
    vendorId: "v3",
    featured: false,
    rating: 4.9,
    reviews: 148,
    stock: 36
  }
];

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Helper function to get featured vendors
export const getFeaturedVendors = () => {
  return vendors.filter(vendor => vendor.featured);
};

// Helper function to get product by id
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

// Helper function to get vendor by id
export const getVendorById = (id: string) => {
  return vendors.find(vendor => vendor.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

// Helper function to get products by vendor
export const getProductsByVendor = (vendorId: string) => {
  return products.filter(product => product.vendorId === vendorId);
};
