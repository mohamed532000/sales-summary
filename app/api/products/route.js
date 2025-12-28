import { NextResponse } from "next/server";
const products = [
    // ================= ELECTRONICS (Sub Categories) =================
    { id: 1, name: "iPhone Pro X", categoryId: 1, subCategoryId: 4, minUnitPrice: 8000, maxUnitPrice: 18000, price: 13000, salesTimes: 120, allSalesPrice: 120*13000, unitCost: 9000, netProfit: 120*(13000-9000) },
    { id: 2, name: "Galaxy Ultra", categoryId: 1, subCategoryId: 4, minUnitPrice: 7500, maxUnitPrice: 20000, price: 13750, salesTimes: 0, allSalesPrice: 0, unitCost: 9500, netProfit: 0 },
    { id: 3, name: "Budget Smartphone", categoryId: 1, subCategoryId: 4, minUnitPrice: 7000, maxUnitPrice: 12000, price: 9500, salesTimes: 180, allSalesPrice: 180*9500, unitCost: 7000, netProfit: 180*(9500-7000) },
  
    { id: 4, name: "Gaming Laptop", categoryId: 1, subCategoryId: 5, minUnitPrice: 15000, maxUnitPrice: 30000, price: 22500, salesTimes: 45, allSalesPrice: 45*22500, unitCost: 18000, netProfit: 45*(22500-18000) },
    { id: 5, name: "Ultrabook Laptop", categoryId: 1, subCategoryId: 5, minUnitPrice: 12000, maxUnitPrice: 25000, price: 18500, salesTimes: 60, allSalesPrice: 60*18500, unitCost: 14000, netProfit: 60*(18500-14000) },
    { id: 6, name: "Office Desktop", categoryId: 1, subCategoryId: 5, minUnitPrice: 13000, maxUnitPrice: 22000, price: 17500, salesTimes: 0, allSalesPrice: 0, unitCost: 15000, netProfit: 0 },
  
    { id: 7, name: "Wireless Headset", categoryId: 1, subCategoryId: 6, minUnitPrice: 300, maxUnitPrice: 1500, price: 900, salesTimes: 90, allSalesPrice: 90*900, unitCost: 500, netProfit: 90*(900-500) },
    { id: 8, name: "Mechanical Keyboard", categoryId: 1, subCategoryId: 6, minUnitPrice: 500, maxUnitPrice: 2000, price: 1250, salesTimes: 50, allSalesPrice: 50*1250, unitCost: 800, netProfit: 50*(1250-800) },
  
    { id: 9, name: "Smart Watch", categoryId: 1, subCategoryId: 7, minUnitPrice: 1000, maxUnitPrice: 2000, price: 1500, salesTimes: 65, allSalesPrice: 65*1500, unitCost: 1100, netProfit: 65*(1500-1100) },
    { id: 10, name: "Fitness Tracker", categoryId: 1, subCategoryId: 7, minUnitPrice: 1000, maxUnitPrice: 1800, price: 1400, salesTimes: 72, allSalesPrice: 72*1400, unitCost: 1000, netProfit: 72*(1400-1000) },
  
    // ================= APPAREL (Sub Categories) =================
    { id: 11, name: "Women Jacket", categoryId: 2, subCategoryId: 1, minUnitPrice: 500, maxUnitPrice: 2000, price: 1250, salesTimes: 40, allSalesPrice: 40*1250, unitCost: 700, netProfit: 40*(1250-700) },
    { id: 12, name: "Women Jeans", categoryId: 2, subCategoryId: 1, minUnitPrice: 400, maxUnitPrice: 1800, price: 1100, salesTimes: 55, allSalesPrice: 55*1100, unitCost: 600, netProfit: 55*(1100-600) },
  
    { id: 13, name: "Men Suit", categoryId: 2, subCategoryId: 2, minUnitPrice: 800, maxUnitPrice: 3000, price: 1900, salesTimes: 30, allSalesPrice: 30*1900, unitCost: 1200, netProfit: 30*(1900-1200) },
    { id: 14, name: "Men T-Shirt", categoryId: 2, subCategoryId: 2, minUnitPrice: 620, maxUnitPrice: 1500, price: 1060, salesTimes: 90, allSalesPrice: 90*1060, unitCost: 700, netProfit: 90*(1060-700) },
  
    { id: 15, name: "Kids Hoodie", categoryId: 2, subCategoryId: 3, minUnitPrice: 600, maxUnitPrice: 1500, price: 1050, salesTimes: 50, allSalesPrice: 50*1050, unitCost: 650, netProfit: 50*(1050-650) },
    { id: 16, name: "Kids Pajamas", categoryId: 2, subCategoryId: 3, minUnitPrice: 600, maxUnitPrice: 1200, price: 900, salesTimes: 0, allSalesPrice: 0, unitCost: 600, netProfit: 0 },
  
    // ================= BEAUTY (Sub Categories) =================
    { id: 17, name: "Face Cream", categoryId: 3, subCategoryId: 8, minUnitPrice: 700, maxUnitPrice: 2200, price: 1450, salesTimes: 80, allSalesPrice: 80*1450, unitCost: 900, netProfit: 80*(1450-900) },
    { id: 18, name: "Spa Oil", categoryId: 3, subCategoryId: 8, minUnitPrice: 900, maxUnitPrice: 2000, price: 1450, salesTimes: 42, allSalesPrice: 42*1450, unitCost: 950, netProfit: 42*(1450-950) },
  
    { id: 19, name: "Foundation", categoryId: 3, subCategoryId: 9, minUnitPrice: 350, maxUnitPrice: 2300, price: 1325, salesTimes: 60, allSalesPrice: 60*1325, unitCost: 500, netProfit: 60*(1325-500) },
    { id: 20, name: "Lipstick Set", categoryId: 3, subCategoryId: 9, minUnitPrice: 500, maxUnitPrice: 1800, price: 1150, salesTimes: 0, allSalesPrice: 0, unitCost: 600, netProfit: 0 },
    { id: 21, name: "Perfume", categoryId: 3, subCategoryId: 10, minUnitPrice: 1200, maxUnitPrice: 2700, price: 1950, salesTimes: 38, allSalesPrice: 38*1950, unitCost: 1300, netProfit: 38*(1950-1300) },
    { id: 22, name: "Hair Serum", categoryId: 3, subCategoryId: 10, minUnitPrice: 1300, maxUnitPrice: 2500, price: 1900, salesTimes: 55, allSalesPrice: 55*1900, unitCost: 1400, netProfit: 55*(1900-1400) },
  
    // ================= HOME & GARDEN (Sub Categories) =================
    { id: 23, name: "Luxury Sofa", categoryId: 4, subCategoryId: 11, minUnitPrice: 15000, maxUnitPrice: 30000, price: 22500, salesTimes: 20, allSalesPrice: 20*22500, unitCost: 17000, netProfit: 20*(22500-17000) },
    { id: 24, name: "Office Desk", categoryId: 4, subCategoryId: 11, minUnitPrice: 10000, maxUnitPrice: 22000, price: 16000, salesTimes: 0, allSalesPrice: 0, unitCost: 12000, netProfit: 0 },
  
    { id: 25, name: "Ceiling Lamp", categoryId: 4, subCategoryId: 12, minUnitPrice: 3000, maxUnitPrice: 7000, price: 5000, salesTimes: 42, allSalesPrice: 42*5000, unitCost: 3500, netProfit: 42*(5000-3500) },
    { id: 26, name: "Wall Light", categoryId: 4, subCategoryId: 12, minUnitPrice: 3500, maxUnitPrice: 6500, price: 5000, salesTimes: 38, allSalesPrice: 38*5000, unitCost: 3600, netProfit: 38*(5000-3600) },
  
    { id: 27, name: "Cookware Set", categoryId: 4, subCategoryId: 13, minUnitPrice: 4000, maxUnitPrice: 11000, price: 7500, salesTimes: 41, allSalesPrice: 41*7500, unitCost: 5000, netProfit: 41*(7500-5000) },
    { id: 28, name: "Dining Plates", categoryId: 4, subCategoryId: 13, minUnitPrice: 4500, maxUnitPrice: 9000, price: 6750, salesTimes: 0, allSalesPrice: 0, unitCost: 5000, netProfit: 0 },
  
    // ================= FOOD & BEVERAGES (Sub Categories) =================
    { id: 29, name: "Organic Rice", categoryId: 5, subCategoryId: 14, minUnitPrice: 1000, maxUnitPrice: 2000, price: 1500, salesTimes: 90, allSalesPrice: 90*1500, unitCost: 1000, netProfit: 90*(1500-1000) },
    { id: 30, name: "Frozen Meat", categoryId: 5, subCategoryId: 14, minUnitPrice: 1200, maxUnitPrice: 1900, price: 1550, salesTimes: 70, allSalesPrice: 70*1550, unitCost: 1300, netProfit: 70*(1550-1300) },
  
    { id: 31, name: "Soft Drink Pack", categoryId: 5, subCategoryId: 15, minUnitPrice: 100, maxUnitPrice: 800, price: 450, salesTimes: 120, allSalesPrice: 120*450, unitCost: 200, netProfit: 120*(450-200) },
    { id: 32, name: "Energy Drink", categoryId: 5, subCategoryId: 15, minUnitPrice: 200, maxUnitPrice: 1000, price: 600, salesTimes: 85, allSalesPrice: 85*600, unitCost: 300, netProfit: 85*(600-300) },
  
    { id: 33, name: "Imported Cheese", categoryId: 5, subCategoryId: 16, minUnitPrice: 300, maxUnitPrice: 2000, price: 1150, salesTimes: 40, allSalesPrice: 40*1150, unitCost: 600, netProfit: 40*(1150-600) },
    { id: 34, name: "Organic Honey", categoryId: 5, subCategoryId: 16, minUnitPrice: 600, maxUnitPrice: 1800, price: 1200, salesTimes: 55, allSalesPrice: 55*1200, unitCost: 800, netProfit: 55*(1200-800) },
  
    // ================= MAIN CATEGORY PRODUCTS (No Sub Category) =================
    { id: 35, name: "Electronics Gift Card", categoryId: 1, subCategoryId: null, minUnitPrice: 1100, maxUnitPrice: 7000, price: 4050, salesTimes: 150, allSalesPrice: 150*4050, unitCost: 3000, netProfit: 150*(4050-3000) },
    { id: 36, name: "Universal Charger", categoryId: 1, subCategoryId: null, minUnitPrice: 1200, maxUnitPrice: 5000, price: 3100, salesTimes: 80, allSalesPrice: 80*3100, unitCost: 2000, netProfit: 80*(3100-2000) },
  
    { id: 37, name: "Seasonal Apparel Bundle", categoryId: 2, subCategoryId: null, minUnitPrice: 1100, maxUnitPrice: 3000, price: 2050, salesTimes: 60, allSalesPrice: 60*2050, unitCost: 1400, netProfit: 60*(2050-1400) },
    { id: 38, name: "Fashion Accessories Box", categoryId: 2, subCategoryId: null, minUnitPrice: 1200, maxUnitPrice: 2800, price: 2000, salesTimes: 0, allSalesPrice: 0, unitCost: 1500, netProfit: 0 },
  
    { id: 39, name: "Beauty Gift Set", categoryId: 3, subCategoryId: null, minUnitPrice: 2000, maxUnitPrice: 5000, price: 3500, salesTimes: 70, allSalesPrice: 70*3500, unitCost: 2500, netProfit: 70*(3500-2500) },
    { id: 40, name: "Skin Essentials Kit", categoryId: 3, subCategoryId: null, minUnitPrice: 2500, maxUnitPrice: 4800, price: 3650, salesTimes: 65, allSalesPrice: 65*3650, unitCost: 2800, netProfit: 65*(3650-2800) },
  
    { id: 41, name: "Home Essentials Pack", categoryId: 4, subCategoryId: null, minUnitPrice: 5000, maxUnitPrice: 20000, price: 12500, salesTimes: 30, allSalesPrice: 30*12500, unitCost: 9000, netProfit: 30*(12500-9000) },
    { id: 42, name: "Garden Starter Kit", categoryId: 4, subCategoryId: null, minUnitPrice: 6000, maxUnitPrice: 15000, price: 10500, salesTimes: 28, allSalesPrice: 28*10500, unitCost: 7000, netProfit: 28*(10500-7000) },
  
    { id: 43, name: "Beverage Subscription", categoryId: 5, subCategoryId: null, minUnitPrice: 100, maxUnitPrice: 500, price: 300, salesTimes: 95, allSalesPrice: 95*300, unitCost: 150, netProfit: 95*(300-150) },
    { id: 44, name: "Family Grocery Box", categoryId: 5, subCategoryId: null, minUnitPrice: 200, maxUnitPrice: 500, price: 350, salesTimes: 0, allSalesPrice: 0, unitCost: 250, netProfit: 0 },
  
    // ================= EXTRA PRODUCTS =================
    { id: 45, name: "Smart Home Bundle", categoryId: 1, subCategoryId: null, minUnitPrice: 3000, maxUnitPrice: 7000, price: 5000, salesTimes: 42, allSalesPrice: 42*5000, unitCost: 3500, netProfit: 42*(5000-3500) },
    { id: 46, name: "Winter Apparel Kit", categoryId: 2, subCategoryId: null, minUnitPrice: 1500, maxUnitPrice: 3000, price: 2250, salesTimes: 38, allSalesPrice: 38*2250, unitCost: 1600, netProfit: 38*(2250-1600) },
    { id: 47, name: "Luxury Perfume Box", categoryId: 3, subCategoryId: null, minUnitPrice: 3000, maxUnitPrice: 5100, price: 4050, salesTimes: 26, allSalesPrice: 26*4050, unitCost: 3200, netProfit: 26*(4050-3200) },
    { id: 48, name: "Premium Furniture Set", categoryId: 4, subCategoryId: null, minUnitPrice: 12000, maxUnitPrice: 30000, price: 21000, salesTimes: 18, allSalesPrice: 18*21000, unitCost: 16000, netProfit: 18*(21000-16000) }
]  

export const GET = async (req) => {
    const {searchParams} = new URL(req.url);
    const categoryId = searchParams.get("categoryId");
    const subCategoryId = searchParams.get("subCategoryId");
    const data = products.filter(item => item.categoryId == categoryId && item.subCategoryId == subCategoryId);
    const allItemsCount = data.length
    const allSalesTimes = data.reduce((sum , item) => sum + item.salesTimes , 0);
    const allSalesRevinueOfSold = data.reduce((sum , item) => sum + item.allSalesPrice , 0);
    const allRevinueOfAllItems = data.reduce((sum , item) => sum + item.price , 0)
    const allSoldItems = data.filter(item => item.salesTimes > 0);
    const allSalesTimesOfSold = allSoldItems.reduce((acc , item) => acc + item.salesTimes , 0)
    const allNotSoldItems = data.filter(item => item.salesTimes < 1);
    const allSalesRevinueOfNotSold = allNotSoldItems.reduce((sum , item) => sum + item.price , 0);
    console.log("not sold items is" , allNotSoldItems)
    subCategoryId >= 1 ? console.log("sub is : " , subCategoryId) : console.log("no sub is")
    return NextResponse.json(
        {
            products : data ,
            items_count : allItemsCount,
            all_sales_times : allSalesTimes,
            sold_items : allSoldItems.length,
            all_sales_times_of_sold : allSalesTimesOfSold,
            not_sold_items : allNotSoldItems.length,
            all_revinue_of_sold : allSalesRevinueOfSold,
            all_revinue_of_not_sold : allSalesRevinueOfNotSold,
            all_revinue_of_all_items : allRevinueOfAllItems,
        }
    )
}