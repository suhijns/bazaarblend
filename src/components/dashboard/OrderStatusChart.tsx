
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription 
} from '@/components/ui/card';
import { Chart } from '@/components/ui/CustomChart';
import { Order } from '@/types';

interface OrderStatusChartProps {
  orders: Order[];
}

export const OrderStatusChart = ({ orders }: OrderStatusChartProps) => {
  return (
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
  );
};
