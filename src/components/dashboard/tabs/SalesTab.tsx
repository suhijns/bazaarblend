
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription 
} from '@/components/ui/card';
import { Chart } from '@/components/ui/CustomChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { SalesData } from '@/types';

interface SalesTabProps {
  salesData: SalesData[];
}

export const SalesTab = ({ salesData }: SalesTabProps) => {
  return (
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
  );
};
