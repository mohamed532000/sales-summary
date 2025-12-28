"use client"

import React from 'react'
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useMainCategoryData } from '@/services/client/useMainCategoryData';

function CategoriesFilteration({mainCategoriesSalesData}) {
    const {category:mainCategoryData , setMainCategoryData} = useMainCategoryData()
    const handleSetMainCategoryData = (cat) => {
        setMainCategoryData(cat)
    }
    return (
        <div className='relative flex gap-3'>
            <RadioGroup value={mainCategoryData} className={"flex py-2"} onValueChange={(value) => {
                handleSetMainCategoryData(value)
                console.log(value)
            }}>
            {
                mainCategoriesSalesData?.map((category , index) => {
                    return (
                        <div key={index} className="flex items-center gap-3">
                            <RadioGroupItem value={category} id={category?.id} className={"cursor-pointer"}/>
                            <Label htmlFor={category?.id} className={"cursor-pointer"}>{category?.name}</Label>
                        </div>
                        )
                    })
            }
            </RadioGroup>
        </div>
    )
}

export default CategoriesFilteration
