import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTransition } from '@/utils/animations';
import { toast } from 'sonner';
import { products } from '@/data/mockData';
import { DashboardStats, Order, SalesData } from '@/types';
import { supabase } from '@/integrations/supabase/client';

// Import components
import { Sidebar } from '@/components/dashboard/Sidebar';
import { MobileHeader } from '@/components/dashboard/MobileHeader';
import { OverviewTab } from '@/components/dashboard/tabs/OverviewTab';
import { OrdersTab } from '@/components/dashboard/tabs/OrdersTab';
import { ProductsTab } from '@/components/dashboard/tabs/ProductsTab';
import { SalesTab } from '@/components/dashboard/tabs/SalesTab';
import { CustomersTab } from '@/components/dashboard/tabs/CustomersTab';
import { CategoriesTab } from '@/components/dashboard/tabs/CategoriesTab';
import { SettingsTab } from '@/components/dashboard/tabs/SettingsTab';

// Mock data for the dashboard
const mockOrders: Order[] = [
  {
    id: 'ORD-0001',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    date: '2023-10-15T14:30:00Z',
    status: 'delivered',
    total: 120.99,
    items: [
      { productId: '1', productName: 'Product 1', quantity: 2, price: 49.99 },
      { productId: '3', productName: 'Product 3', quantity: 1, price: 21.01 }
    ],
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-0002',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    date: '2023-10-16T09:15:00Z',
    status: 'processing',
    total: 89.95,
    items: [
      { productId: '2', productName: 'Product 2', quantity: 1, price: 89.95 }
    ],
    shippingAddress: {
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      country: 'USA'
    },
    paymentMethod: 'PayPal'
  },
  {
    id: 'ORD-0003',
    customerName: 'Robert Johnson',
    customerEmail: 'robert@example.com',
    date: '2023-10-16T11:45:00Z',
    status: 'shipped',
    total: 215.96,
    items: [
      { productId: '4', productName: 'Product 4', quantity: 2, price: 69.99 },
      { productId: '5', productName: 'Product 5', quantity: 3, price: 25.33 }
    ],
    shippingAddress: {
      street: '789 Pine Blvd',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    },
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-0004',
    customerName: 'Emily Davis',
    customerEmail: 'emily@example.com',
    date: '2023-10-17T08:30:00Z',
    status: 'pending',
    total: 159.97,
    items: [
      { productId: '1', productName: 'Product 1', quantity: 1, price: 49.99 },
      { productId: '6', productName: 'Product 6', quantity: 1, price: 109.98 }
    ],
    shippingAddress: {
      street: '321 Maple St',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
      country: 'USA'
    },
    paymentMethod: 'PayPal'
  },
  {
    id: 'ORD-0005',
    customerName: 'Michael Wilson',
    customerEmail: 'michael@example.com',
    date: '2023-10-17T14:20:00Z',
    status: 'cancelled',
    total: 44.98,
    items: [
      { productId: '7', productName: 'Product 7', quantity: 2, price: 22.49 }
    ],
    shippingAddress: {
      street: '654 Cedar Ln',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      country: 'USA'
    },
    paymentMethod: 'Credit Card'
  }
];

const mockSalesData: SalesData[] = [
  { date: '2023-10-01', amount: 450.99 },
  { date: '2023-10-02', amount: 520.50 },
  { date: '2023-10-03', amount: 380.75 },
  { date: '2023-10-04', amount: 290.25 },
  { date: '2023-10-05', amount: 610.30 },
  { date: '2023-10-06', amount: 490.80 },
  { date: '2023-10-07', amount: 570.40 },
  { date: '2023-10-08', amount: 620.90 },
  { date: '2023-10-09', amount: 520.60 },
  { date: '2023-10-10', amount: 480.20 },
  { date: '2023-10-11', amount: 530.75 },
  { date: '2023-10-12', amount: 590.30 },
  { date: '2023-10-13', amount: 610.50 },
  { date: '2023-10-14', amount: 580.25 },
  { date: '2023-10-15', amount: 650.40 },
  { date: '2023-10-16', amount: 600.90 },
  { date: '2023-10-17', amount: 630.60 }
];

const mockDashboardStats: DashboardStats = {
  totalSales: 8529.39,
  totalOrders: 5,
  totalCustomers: 5,
  totalProducts: products.length
};

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>(mockDashboardStats);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [salesData, setSalesData] = useState<SalesData[]>(mockSalesData);
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState<any>({ id: 'mock-user-id' });
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const isVisible = usePageTransition();

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          setUser(user);
        } else {
          setUser({ id: 'mock-user-id' });
          
          await supabase.auth.updateSession({
            access_token: 'mock_token',
            refresh_token: 'mock_refresh_token',
          });
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setUser({ id: 'mock-user-id' });
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
    
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        setUser({ id: 'mock-user-id' });
      }
    });
    
    window.scrollTo(0, 0);
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status: newStatus } 
          : order
      )
    );
    
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1">
        <MobileHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className={`p-6 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {activeTab === 'overview' && (
            <OverviewTab 
              stats={stats} 
              orders={orders} 
              salesData={salesData} 
              onViewAllOrders={() => setActiveTab('orders')} 
            />
          )}
          
          {activeTab === 'orders' && (
            <OrdersTab 
              orders={orders} 
              onUpdateOrderStatus={handleUpdateOrderStatus} 
            />
          )}
          
          {activeTab === 'products' && (
            <ProductsTab products={products} />
          )}
          
          {activeTab === 'sales' && (
            <SalesTab salesData={salesData} />
          )}
          
          {activeTab === 'customers' && <CustomersTab />}
          {activeTab === 'categories' && <CategoriesTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
