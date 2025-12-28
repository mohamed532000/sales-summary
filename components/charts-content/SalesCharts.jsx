"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoriesFilteration from '../CategoriesFilteration';
import CategoryPieChart from './main-categories/main-categories-chart/MainCategoriesChart';
import SubCategoriesChart from './sub-categories/sub-categories-chart/SubCategoriesChart';
import MainCategoriesMaxMinPriceChart from './main-categories/main-categories-max-min-price-chart/MainCategoriesMaxMinPriceChart';
import SubCategoriesMaxMinPriceChart from './sub-categories/sub-categories-max-min-price-chart/SubCategoriesMaxMinPriceChart';
import ProductsSalesInfo from '../products-sales-info/ProductsSalesInfo';
import { FaRegChartBar } from "react-icons/fa";
import { useMainCategoryData } from '@/services/client/useMainCategoryData';
import { useSubCategoryData } from '@/services/client/useSubCategoryData';

function SalesCharts({mainCategoriesSalesData}) {
    const {category:mainCategoryData} = useMainCategoryData()
    const {category:subCategoryData, setSubCategoryData} = useSubCategoryData()
    const [subCategoriesRevinueData , setSubCategoriesRevinueData] = useState([]);
    const [productsSalesInfo , setProductsSalesInfo] = useState({})

    useEffect(() => {
        const getSUbCategoriesRevnue = async () => {
            const categoryId = mainCategoryData?.id
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/sub_categories_sales${categoryId ? `?categoryId=${categoryId}` : ""}`);
            setSubCategoriesRevinueData(res.data)
            setSubCategoryData(res.data[0])
        }
        getSUbCategoriesRevnue()
    },[mainCategoryData])
    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?categoryId=${mainCategoryData?.id}&subCategoryId=${subCategoryData?.id}`)
            setProductsSalesInfo(res.data)
        }
        getProducts()
    },[subCategoryData , mainCategoryData])

    return (
        mainCategoriesSalesData?.length >= 1
        ?
        <div className="container px-3 mx-auto py-2.5 flex flex-col gap-y-8">
            <div className='header flex items-center gap-3 text-3xl mt-4'>
                <FaRegChartBar/>
                <h1 className=' font-bold'>Sales Summary</h1>
            </div>
            <CategoriesFilteration mainCategoriesSalesData={mainCategoriesSalesData}/>
            <ProductsSalesInfo
                data={productsSalesInfo} 
                categoryName={"category name here"}
            />
            <div className="chart-content  relative grid grid-cols-12 gap-3">
                <CategoryPieChart 
                    className={'col-span-12 md:col-span-6'} 
                    data={mainCategoriesSalesData} 
                />
                <SubCategoriesChart 
                    className={'col-span-12 md:col-span-6'} 
                    data={subCategoriesRevinueData} 
                />
            </div>
            <div className="chart-content  relative grid grid-cols-12 gap-3">
                <MainCategoriesMaxMinPriceChart 
                    className={'col-span-12 md:col-span-6'} 
                    data={mainCategoriesSalesData}/>
                <SubCategoriesMaxMinPriceChart 
                    className={'col-span-12 md:col-span-6'} 
                    data={subCategoriesRevinueData}/>
            </div>
        </div>
        :
        <h2>No Data avilable.</h2>
    )
}

export default SalesCharts