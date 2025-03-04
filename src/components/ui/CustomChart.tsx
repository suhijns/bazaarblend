
import * as React from "react";
import {
  Line,
  Bar,
  Pie,
  Area,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

interface ChartProps {
  type: "line" | "bar" | "pie" | "doughnut" | "area" | "scatter";
  data: {
    labels: string[];
    datasets: {
      label?: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string | string[];
      fill?: boolean;
      tension?: number;
    }[];
  };
  options?: any;
  className?: string;
}

export const Chart = ({ type, data, options, className }: ChartProps) => {
  // Configure chart colors
  const chartConfig = {
    sales: {
      label: "Sales",
      color: "#3B82F6",
    },
    orders: {
      label: "Orders",
      color: "#10B981", 
    },
    customers: {
      label: "Customers",
      color: "#8B5CF6",
    },
    products: {
      label: "Products",
      color: "#F59E0B",
    },
  };

  // Map the recharts component based on the chart type
  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <Line
            data={transformData(data)}
            {...getChartOptions(options)}
          />
        );
      case "bar":
        return (
          <Bar
            data={transformData(data)}
            {...getChartOptions(options)}
          />
        );
      case "pie":
        return (
          <Pie
            data={transformDataForPie(data)}
            {...getChartOptions(options)}
          />
        );
      case "doughnut":
        // Use Pie with innerRadius for doughnut chart since recharts doesn't have a Doughnut component
        return (
          <Pie
            data={transformDataForPie(data)}
            innerRadius={60}
            outerRadius={80}
            {...getChartOptions(options)}
          />
        );
      case "area":
        return (
          <Area
            data={transformData(data)}
            {...getChartOptions(options)}
          />
        );
      case "scatter":
        return (
          <Scatter
            data={transformData(data)}
            {...getChartOptions(options)}
          />
        );
      default:
        return null;
    }
  };

  // Transform our chart data format to recharts format
  const transformData = (chartData: ChartProps["data"]) => {
    return chartData.labels.map((label, index) => {
      const dataPoint: Record<string, any> = { name: label };
      
      chartData.datasets.forEach((dataset, datasetIndex) => {
        const key = dataset.label || `dataset-${datasetIndex}`;
        dataPoint[key] = dataset.data[index];
      });
      
      return dataPoint;
    });
  };

  // Transform data for pie/doughnut charts
  const transformDataForPie = (chartData: ChartProps["data"]) => {
    return chartData.labels.map((label, index) => {
      return {
        name: label,
        value: chartData.datasets[0].data[index],
        fill: Array.isArray(chartData.datasets[0].backgroundColor) 
          ? chartData.datasets[0].backgroundColor[index] 
          : chartData.datasets[0].backgroundColor,
      };
    });
  };

  // Process recharts options
  const getChartOptions = (chartOptions: any = {}) => {
    return {
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
      ...chartOptions,
    };
  };

  return (
    <ChartContainer config={chartConfig} className={className}>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </ChartContainer>
  );
};
