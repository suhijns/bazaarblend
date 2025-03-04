
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
  discount?: number;
  stock?: number;
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

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shippingAddress: Address;
  paymentMethod: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface SalesData {
  date: string;
  amount: number;
}

export interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
}
