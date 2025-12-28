import { NextResponse } from "next/server"

const subCategoriesSalesData = [
    { id: 1, categoryId: 2, name: "Women’s Apparel", minU : 400 , maxU : 2500 , totalRevenue: 430000000000, totalUnitsSold: 7000000 },
    { id: 2, categoryId: 2, name: "Men’s Apparel", minU : 620 , maxU : 3000 , totalRevenue: 330000000000, totalUnitsSold: 4000000 },
    { id: 3, categoryId: 2, name: "Kids’ Apparel", minU : 600 , maxU : 2000 , totalRevenue: 100000000000, totalUnitsSold: 1000000 },
  
    { id: 4, categoryId: 1, name: "Smartphones", minU : 7000 , maxU : 20000 , totalRevenue: 350000000000, totalUnitsSold: 6000000 },
    { id: 5, categoryId: 1, name: "Computers & Laptops", minU: 12000 , maxU : 30000 , totalRevenue: 260000000000, totalUnitsSold: 5000000 },
    { id: 6, categoryId: 1, name: "Gaming & Accessories", minU : 200 , maxU : 2000 , totalRevenue: 150000000000, totalUnitsSold: 2000000 },
    { id: 7, categoryId: 1, name: "Wearables & IoT", minU : 1000 , maxU : 2000 , totalRevenue: 162500000000, totalUnitsSold: 2000000 },
  
    { id: 8, categoryId: 3, name: "Skincare & Spa", minU : 700 , maxU : 2200 , totalRevenue: 70000000000, totalUnitsSold: 3000000 },
    { id: 9, categoryId: 3, name: "Makeup & Cosmetics", minU : 350 , maxU : 2300 , totalRevenue: 55000000000, totalUnitsSold: 3000000 },
    { id: 10, categoryId: 3, name: "Haircare & Fragrance", minU : 1200 , maxU : 2700 , totalRevenue: 44600000000, totalUnitsSold: 2000000 },
  
    { id: 11, categoryId: 4, name: "Furniture", minU : 10000 , maxU : 30000 , totalRevenue: 110000000000, totalUnitsSold: 2000000 },
    { id: 12, categoryId: 4, name: "Decor & Lighting", minU : 3000 , maxU : 7000 , totalRevenue: 60000000000, totalUnitsSold: 1500000 },
    { id: 13, categoryId: 4, name: "Kitchen & Dining", minU : 4000 , maxU : 11000 , totalRevenue: 50100000000, totalUnitsSold: 1500000 },
  
    { id: 14, categoryId: 5, name: "Groceries", minU : 1000 , maxU : 2000 , totalRevenue: 400000000000, totalUnitsSold: 5000000 },
    { id: 15, categoryId: 5, name: "Beverages", minU : 100 , maxU : 1000 , totalRevenue: 200000000000, totalUnitsSold: 3000000 },
    { id: 16, categoryId: 5, name: "Specialty Foods", minU : 300 , maxU : 2000 , totalRevenue: 108800000000, totalUnitsSold: 2000000 }
]
export const GET = async (req) => {
    const {searchParams} = new URL(req.url);
    const categoryId = searchParams.get("categoryId");
    const finalData = 
    categoryId ? 
    subCategoriesSalesData.filter(item => item.categoryId == categoryId) :
    subCategoriesSalesData
    // return NextResponse.json(subCategoriesSalesData)
    return NextResponse.json(finalData)
}  