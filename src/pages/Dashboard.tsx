<lov-code>
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BarChart, 
  LineChart, 
  ShoppingBag, 
  Users, 
  Package, 
  DollarSign, 
  ChevronRight,
  LayoutDashboard,
  ShoppingCart,
  Box,
  Tag,
  Settings,
  LogOut
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Chart } from '@/components/ui/CustomChart';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { usePageTransition } from '@/utils/animations';
import { toast } from 'sonner';
import { products } from '@/data/mockData';
import { DashboardStats, Order, SalesData } from '@/types';

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
  const navigate = useNavigate();
  const isVisible = usePageTransition();

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

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

  // Status color mapping
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activeTab === 'overview' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Overview
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activeTab === 'orders' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Orders
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activeTab === 'products' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('products')}
              >
                <Box className="mr-2 h-5 w-5" />
                Products
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activeTab === 'customers' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('customers')}
              >
                <Users className="mr-2 h-5 w-5" />
                Customers
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activeTab === 'sales' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('sales')}
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Sales
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activeTab === 'categories' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('categories')}
              >
                <Tag className="mr-2 h-5 w-5" />
                Categories
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${activeTab === 'settings' ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </li>
            <li className="pt-4 border-t mt-4">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => navigate('/')}
              >
                <LogOut className="mr-2 h-5 w-5" />
                Back to Site
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile Header */}
        <div className="p-4 bg-white shadow md:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Admin Dashboard</h2>
            <Button variant="outline" onClick={() => navigate('/')}>
              Back to Site
            </Button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <div className="flex space-x-2">
              <Button 
                variant={activeTab === 'overview' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </Button>
              <Button 
                variant={activeTab === 'orders' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveTab('orders')}
              >
                Orders
              </Button>
              <Button 
                variant={activeTab === 'products' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveTab('products')}
              >
                Products
              </Button>
              <Button 
                variant={activeTab === 'sales' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveTab('sales')}
              >
                Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className={`p-6 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-2xl font-bold">${stats.totalSales.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <ShoppingBag className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-2xl font-bold">{stats.totalOrders}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Customers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-purple-500 mr-2" />
                      <span className="text-2xl font-bold">{stats.totalCustomers}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-2xl font-bold">{stats.totalProducts}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Overview</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart 
                      type="line"
                      data={{
                        labels: salesData.map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
                        datasets: [
                          {
                            label: 'Sales',
                            data: salesData.map(d => d.amount),
                            borderColor: 'rgb(99, 102, 241)',
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            tension: 0.3,
                            fill: true,
                          }
                        ]
                      }}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                            grid: {
                              color: 'rgba(0, 0, 0, 0.05)',
                            }
                          },
                          x: {
                            grid: {
                              display: false,
                            }
                          }
                        },
                        plugins: {
                          legend: {
                            display: false,
                          }
                        }
                      }}
                      className="h-80"
                    />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Orders by Status</CardTitle>
                    <CardDescription>Current distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart 
                      type="doughnut"
                      data={{
                        labels: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
                        datasets: [
                          {
                            data: [
                              orders.filter(o => o.status === 'pending').length,
                              orders.filter(o => o.status === 'processing').length,
                              orders.filter(o => o.status === 'shipped').length,
                              orders.filter(o => o.status === 'delivered').length,
                              orders.filter(o => o.status === 'cancelled').length
                            ],
                            backgroundColor: [
                              'rgba(255, 159, 64, 0.7)',
                              'rgba(54, 162, 235, 0.7)',
                              'rgba(153, 102, 255, 0.7)',
                              'rgba(75, 192, 192, 0.7)',
                              'rgba(255, 99, 132, 0.7)'
                            ]
                          }
                        ]
                      }}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }}
                      className="h-80"
                    />
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Orders Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Orders</CardTitle>
                    <Button variant="outline" size="sm" onClick={() => setActiveTab('orders')}>
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.slice(0, 5).map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customerName}</TableCell>
                          <TableCell>{formatDate(order.date)}</TableCell>
                          <TableCell>${order.total.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(order.status)} variant="outline">
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Order Management</h1>
              
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="hidden md:table-cell">Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>
                            <div>
                              {order.customerName}
                              <div className="text-xs text-gray-500">{order.customerEmail}</div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{formatDate(order.date)}</TableCell>
                          <TableCell className="hidden md:table-cell">{order.items.length}</TableCell>
                          <TableCell>${order.total.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(order.status)} variant="outline">
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Button variant="ghost" size="sm">View</Button>
                              <select 
                                className="ml-2 text-xs border rounded p-1"
                                value={order.status}
                                onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value as Order['status'])}
                              >
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Products Tab */}
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Product Management</h1>
                <Button>Add New Product</Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="hidden md:table-cell">Category</TableHead>
                        <TableHead className="hidden md:table-cell">Vendor</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="hidden md:table-cell">Rating</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.slice(0, 10).map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>
                            <div className="flex items-center">
                              <div className="h-10 w-10 mr-3 rounded overflow-hidden">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <span className="font-medium">{product.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{product.category}</TableCell>
                          <TableCell className="hidden md:table-cell">{product.vendor}</TableCell>
                          <TableCell>${product.price.toFixed(2)}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <div className="flex items-center">
                              {product.rating.toFixed(1)}
                              <div className="ml-1 text-yellow-400">★</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Sales Tab */}
          {activeTab === 'sales' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Sales Analysis</h1>
              
              <Tabs defaultValue="daily" className="mb-6">
                <TabsList>
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
                
                <TabsContent value="daily" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Daily Sales</CardTitle>
                      <CardDescription>Last 30 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Chart 
                        type="bar"
                        data={{
                          labels: salesData.map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
                          datasets: [
                            {
                              label: 'Sales',
                              data: salesData.map(d => d.amount),
                              backgroundColor: 'rgba(99, 102, 241, 0.7)',
                            }
                          ]
                        }}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true,
                              grid: {
                                color: 'rgba(0, 0, 0, 0.05)',
                              }
                            },
                            x: {
                              grid: {
                                display: false,
                              }
                            }
                          }
                        }}
                        className="h-96"
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="weekly" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Sales</CardTitle>
                      <CardDescription>Last 12 weeks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center h-96 text-gray-500">
                        Weekly sales data visualization will be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="monthly" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Sales</CardTitle>
                      <CardDescription>Last 12 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center h-96 text-gray-500">
                        Monthly sales data visualization will be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="yearly" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Yearly Sales</CardTitle>
                      <CardDescription>Last 5 years</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center h-96 text-gray-500">
                        Yearly sales data visualization will be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Chart 
                      type="pie"
                      data={{
                        labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Others'],
                        datasets: [
                          {
                            data: [35, 25, 20, 15, 5],
                            backgroundColor: [
                              'rgba(99, 102, 241, 0.7)',
                              'rgba(16, 185, 129, 0.7)',
                              'rgba(249, 115, 22, 0.7)',
                              'rgba(236, 72, 153, 0.7)',
                              'rgba(107, 114, 128, 0.7)'
                            ]
                          }
                        ]
                      }}
                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }}
                      className="h-80"
                    />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Top Selling Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Units Sold</TableHead>
                          <TableHead>Revenue</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Product 2</TableCell>
                          <TableCell>124</TableCell>
                          <TableCell>$11,153.80</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Product 1</TableCell>
                          <TableCell>98</TableCell>
                          <TableCell>$4,899.02</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Product 4</TableCell>
                          <TableCell>76</TableCell>
                          <TableCell>$5,319.24</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Product 6</TableCell>
                          <TableCell>65</TableCell>
                          <TableCell>$7,148.70</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Product 3</TableCell>
                          <TableCell>52</TableCell>
                          <TableCell>$1,092.52</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          {/* Other tabs can be implemented similarly */}
          {activeTab === 'customers' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Customer Management</h1>
              <div className="p-8 text-center text-gray-500">
                Customer management interface will be available here
              </div>
            </div>
          )}
          
          {activeTab === 'categories' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Category Management</h1>
              <div className="p-8 text-center text-gray-500">
                Category management interface will be available here
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div>
              <h1 className="text-2xl font-bold mb-6">System Settings</h1>
              <div className="p-8 text-center text-gray-500">
                System settings configuration will be available here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

