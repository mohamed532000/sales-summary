"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MainCategoriesCreditChart = ({data , mainCategoryData , className}) => {
  const categories = data.map(item => item.name);
  const allCreditPeriodPerfer = data?.flatMap(cat => cat.clientCreditPeriod)
  const periodsPerfereData = [
    {period : 6 , amount : 12000},
    {period : 6 , amount : 12000},
    {period : 6 , amount : 12000},
    {period : 6 , amount : 12000},
    {period : 6 , amount : 12000},
    {period : 6 , amount : 12000},
    {period : 6 , amount : 12000},
    {period : 12 , amount : 22000},
    {period : 12 , amount : 22000},
    {period : 12 , amount : 22000},
    {period : 12 , amount : 22000},
    {period : 6 , amount : 12000},
    {period : 6 , amount : 12000},
    {period : 6 , amount : 12000},
    {period : 10 , amount : 10000},
    {period : 10 , amount : 10000},
    {period : 10 , amount : 10000},
  ]
  const limitCreditPeriods = [6 , 12 , 18 , 22 , 44] // with month

  const allPerferAmount = periodsPerfereData.flatMap(i => i.amount);
  const maxCreditAmount = Math.max(...allPerferAmount)
  const minCreditAmount = Math.min(...allPerferAmount)
  useEffect(() => console.log(Math.max(...allPerferAmount)) , [])

  const revenues = data.map(item => item.totalRevenue / 1e9); // convert to billions for readability
  const options = {
    chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: limitCreditPeriods
      },
      yaxis : {
        min : minCreditAmount,
        max : maxCreditAmount,
        // tickAmount : 5
      }
    }
    const series = [{
        name: 'series-1',
        data: allPerferAmount
    }]

  return (
    <Card className={`flex flex-col ${className}`}>
        <CardHeader className="items-center pb-0">
            <CardTitle>Revinue Of {mainCategoryData?.name} </CardTitle>
            <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
            <ReactApexChart options={options} series={series} type="bar" height={300}/>
        </CardContent>
    </Card>
  )
  
};

export default MainCategoriesCreditChart;


