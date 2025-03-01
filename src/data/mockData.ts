
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
