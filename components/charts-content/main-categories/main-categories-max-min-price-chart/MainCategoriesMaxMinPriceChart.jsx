"use client"
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
function MainCategoriesMaxMinPriceChart({data , className}) {
    const categories = data.map(item => item.name);
    const options = {
      chart: {
        type: 'rangeBar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories
      },
      tooltip: {
          custom: ({ dataPointIndex, w }) => {
          const min = data[dataPointIndex].minU;
          const max = data[dataPointIndex].maxU;
            const avg = (min + max) / 2;
            return `<div style="padding: 10px">
                      <strong>${w.globals.labels[dataPointIndex]}</strong><br/>
                      Min: $${min}<br/>
                      Avg: $${avg.toFixed(2)}<br/>
                      Max: $${max}
                    </div>`;
          },
        },
    };
    const series = [{
      name: 'Revenue Range',
      data : data.map((cat) => {
          return {
              x : cat.name , y : [cat.minU , cat.maxU]
          }
      })
    }];
    return (
      <Card className={`flex flex-col ${className}`}>
          <CardHeader className="items-center pb-0">
              <CardTitle>Categories Unit Price AVG</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
              <ReactApexChart options={options} series={series} type="rangeBar" height={200}/>
          </CardContent>
      </Card>
    )
}

export default MainCategoriesMaxMinPriceChart

