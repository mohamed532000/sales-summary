"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMainCategoryData } from "@/services/client/useMainCategoryData";
import { useSubCategoryData } from "@/services/client/useSubCategoryData";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ProductsSalesRevinueChart = ({data , className}) => {
    const {category:mainCategoryData} = useMainCategoryData();
    const {category:subCategoryData} = useSubCategoryData();
    const items = data?.products
    const itemsNames = items?.map(i => `${i.name} (${i.price}EGP)`);
    const salesRevinueData = items?.map(i => i.allSalesPrice);
    const allNetProfitsOfItems = items?.map(i => i.netProfit);
    const allUnitCostsOfItems = items?.map(i => i.unitCost);

    const options = {
        series: [
            {
            name: 'Net Profit',
            data: allNetProfitsOfItems
            }, 
            {
            name: 'Revenue',
            data: salesRevinueData
            },
            {
            name: 'U Cost',
            data: allUnitCostsOfItems
            },
        ],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: itemsNames,
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "EGP"
          }
        }
      }
    };

    return (
        <Card className={`flex flex-col ${className}`}>
            <CardHeader className="items-center pb-0">
              <div className="relative flex justify-between">
                <div className="relative flex flex-col gap-3">
                  <CardTitle>Sales Revinue Of Products</CardTitle>
                  <div className="relative flex items-center gap-3">
                    <h1>{mainCategoryData?.name}</h1>
                    -
                    <h1>{subCategoryData?.name}</h1>
                  </div>
                </div>
                <CardDescription>January - June 2024</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ReactApexChart options={options} series={options.series} type="bar" height={300}/>
            </CardContent>
        </Card>
    )
  
};

export default ProductsSalesRevinueChart;


