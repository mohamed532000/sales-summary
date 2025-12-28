import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import ProductsSalesTimesChart from './charts/ProductsSalesTimesChart';
import ProductsSalesRevinueChart from './charts/ProductsSalesRevinueChart';
import { CiBoxes } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useMainCategoryData } from '@/services/client/useMainCategoryData';
import ProductsTable from './table/ProductsTable';
import ProductsAvgSalesUnit from './charts/ProductsAvgSalesUnit';

function ProductsSalesInfo({data}) {
    const {category:mainCat} = useMainCategoryData();
    return (
        <div className='relative grid grid-cols-12 gap-3 my-2'>
            <Card className={`flex flex-col col-span-12 md:col-span-4`}>
                <CardHeader className="items-center pb-0">
                    <CardTitle className={"flex items-center gap-2 justify-between dark:bg-red-700"}>
                        Products Of {mainCat ? mainCat.name : "..."}
                        <CiBoxes className='text-primary'/>
                    </CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <div className='relative flex gap-3 w-full justify-between items-center'>
                        <div>Total items : <strong>{data?.items_count >= 0 ? data?.items_count : "..."}</strong></div>
                        <div>Price Of All : <strong>{data?.all_revinue_of_all_items >= 0 ? `${data?.all_revinue_of_all_items}EGP` : "..."}</strong></div>
                    </div>
                </CardContent>
            </Card>
            <Card className={`flex flex-col col-span-12 md:col-span-4`}>
                <CardHeader className="items-center pb-0">
                    <CardTitle className={"flex items-center gap-2 justify-between"}>
                        Sold Products
                        <IoMdCheckmarkCircleOutline className='text-primary'/>
                    </CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <div className='relative flex gap-3 w-full justify-between items-center'>
                        <div>Total items : <strong>{data?.sold_items >= 0 ? data?.sold_items : "..."}</strong></div>
                        <div>Revinue Of Sold : <strong>{data?.all_revinue_of_sold >= 0 ? `${data?.all_revinue_of_sold}EGP` : "..."}</strong></div>
                    </div>
                    <div className='relative flex gap-3 w-full justify-between items-center'>
                        <div>Sales times : <strong>{data?.all_sales_times_of_sold >= 0 ? data?.all_sales_times_of_sold : "..."}</strong></div>
                    </div>
                </CardContent>
            </Card>
            <Card className={`flex flex-col col-span-12 md:col-span-4`}>
                <CardHeader className="items-center pb-0">
                    <CardTitle className={"flex items-center gap-2 justify-between"}>
                        Not Sold
                        <FaRegCircleXmark className='text-primary'/>
                    </CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <div className='relative flex gap-3 w-full justify-between items-center'>
                        <div>Total items : <strong>{data?.not_sold_items >= 0 ? data?.not_sold_items : "..."}</strong></div>
                        <div>Price Of All Not Sold : <strong>{data?.all_revinue_of_not_sold >= 0 ? `${data?.all_revinue_of_not_sold}EGP` : "..."}</strong></div>
                    </div>
                </CardContent>
            </Card>
            <Card className={"col-span-12 p-4"}>
                <ProductsTable data={data}/>
            </Card>
            <ProductsAvgSalesUnit data={data?.products} className={"col-span-12"}/>
            <ProductsSalesTimesChart data={data} className={"col-span-12 md:col-span-6"}/>
            <ProductsSalesRevinueChart data={data} className={"col-span-12 md:col-span-6"}/>
        </div>
    )
}

export default ProductsSalesInfo