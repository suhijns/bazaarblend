
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '@/components/ui/card';
import { DashboardStats } from '@/types';
import { DollarSign, ShoppingBag, Users, Package } from 'lucide-react';

interface StatsCardsProps {
  stats: DashboardStats;
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
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
  );
};
