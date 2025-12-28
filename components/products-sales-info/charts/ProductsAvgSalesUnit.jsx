"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useMainCategoryData } from '@/services/client/useMainCategoryData';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function ProductsAvgSalesUnit({data , className}) {
    const {category:mainCategory} = useMainCategoryData();
    const categories = data?.map(item => item.name);
    const options = {
        chart: {
          type: 'rangeBar',
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            colors: {
                ranges: [
                  { from: 0, to: 1000, color: "#22c55e" },
                  { from: 1001, to: 5000, color: "#facc15" },
                  { from: 5001, to: 20000, color: "#ef4444" },
                ],
            },
          },
        },
        xaxis: {
          categories
        },
        tooltip: {
            custom: ({ dataPointIndex, w }) => {
            const min = data[dataPointIndex].minUnitPrice;
            const max = data[dataPointIndex].maxUnitPrice;
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
        data : data?.map((item) => {
            return {
                x : item.name , y : [item.minUnitPrice , item.maxUnitPrice]
            }
        })
      }];
    return (
      <Card className={`flex flex-col ${className}`}>
          <CardHeader className="items-center pb-0">
              <CardTitle>AVG Unit Price</CardTitle>
              <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
              <ReactApexChart options={options} series={series} type="rangeBar" height={200}/>
          </CardContent>
      </Card>
    )
}

export default ProductsAvgSalesUnit

