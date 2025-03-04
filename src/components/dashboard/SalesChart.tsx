
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription 
} from '@/components/ui/card';
import { Chart } from '@/components/ui/CustomChart';
import { SalesData } from '@/types';

interface SalesChartProps {
  salesData: SalesData[];
}

export const SalesChart = ({ salesData }: SalesChartProps) => {
  return (
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
  );
};
