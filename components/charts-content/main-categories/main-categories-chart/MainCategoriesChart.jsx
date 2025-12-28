"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMainCategoryData } from "@/services/client/useMainCategoryData";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CategoryPieChart = ({data , className}) => {
  const categories = data.map(item => item.name);
  const revenues = data.map(item => item.totalRevenue / 1e9);
  const {setMainCategoryData} = useMainCategoryData();
  useEffect(() => {
    if(data) {
      setMainCategoryData(data[0])
    }
  },[data])
  const options = {
    chart: {
      type: "pie",
      events : {
        dataPointSelection : (event , chartContext , config) => {
            const index = config.dataPointIndex;
            const catrgoryData = data[index]
            setMainCategoryData(catrgoryData)
        }
      }
    },
    labels: categories,
    toolbar : {
        show : true
    },
    title: {
      text: "Revenue Of All Categories",
      align: "center",
    },
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: val => `$${val.toLocaleString()}B`,
      },
    },
  };

  const series = revenues;

  return (
    <Card className={`flex flex-col ${className}`}>
        <CardHeader className="items-center pb-0">
            <CardTitle>Our Categories Sales </CardTitle>
            <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
            <ReactApexChart options={options} series={series} type="pie" height={300}/>
        </CardContent>
    </Card>
  )
};

export default CategoryPieChart;


