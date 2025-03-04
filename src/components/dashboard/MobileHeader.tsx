
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface MobileHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileHeader = ({ activeTab, setActiveTab }: MobileHeaderProps) => {
  const navigate = useNavigate();

  return (
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
  );
};
