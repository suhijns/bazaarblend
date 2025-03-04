
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Box,
  Users,
  DollarSign,
  Tag,
  Settings,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const navigate = useNavigate();

  return (
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
  );
};
