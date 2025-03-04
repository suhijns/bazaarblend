
import { DashboardStats, Order, SalesData } from '@/types';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { OrderStatusChart } from '@/components/dashboard/OrderStatusChart';
import { RecentOrders } from '@/components/dashboard/RecentOrders';

interface OverviewTabProps {
  stats: DashboardStats;
  orders: Order[];
  salesData: SalesData[];
  onViewAllOrders: () => void;
}

export const OverviewTab = ({ stats, orders, salesData, onViewAllOrders }: OverviewTabProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <StatsCards stats={stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SalesChart salesData={salesData} />
        <OrderStatusChart orders={orders} />
      </div>
      
      <RecentOrders orders={orders} onViewAll={onViewAllOrders} />
    </div>
  );
};
