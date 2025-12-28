import { NextResponse } from "next/server";
const categories = [
  { id: 1, name: "Electronics", minU : 1100 , maxU: 7000 , totalRevenue: 922500000000, totalUnitsSold: 15000000 , clientCreditValue: 300000000000,
    clientCreditPeriod: 2,},
  { id: 2, name: "Apparel", minU : 1100 , maxU: 3100 , totalRevenue: 760000000000, totalUnitsSold: 12000000 , clientCreditValue: 300000000000,
    clientCreditPeriod: 6, },
  { id: 3, name: "Beauty", minU : 2000 , maxU: 5100 , totalRevenue: 169600000000, totalUnitsSold: 8000000 , clientCreditValue: 300000000000,
    clientCreditPeriod: 6, },
  { id: 4, name: "Home & Garden", minU : 5000 , maxU: 30000 , totalRevenue: 220100000000, totalUnitsSold: 5000000 , clientCreditValue: 300000000000,
    clientCreditPeriod: 6, },
  { id: 5, name: "Beverages", minU : 100 , maxU: 500 , totalRevenue: 708800000000, totalUnitsSold: 10000000 , clientCreditValue: 300000000000,
    clientCreditPeriod: 2, },
]


export const GET = async () => {
    return NextResponse.json(categories)
}