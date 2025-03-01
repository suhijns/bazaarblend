
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  vendor: string;
  vendorId: string;
  featured: boolean;
  rating: number;
  reviews: number;
}

export interface Vendor {
  id: string;
  name: string;
  description: string;
  logo: string;
  featured: boolean;
  productsCount: number;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}
