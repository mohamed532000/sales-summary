import SalesCharts from "@/components/charts-content/SalesCharts";
import { mainCategoriesData } from "@/services/mainCategoriesData";
// import axios from "axios";

export default async function Home() {
  // const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories_sales`);
  const data = await mainCategoriesData();
  console.log(data)
  return (
    <div className="relative">
      <SalesCharts mainCategoriesSalesData={data}/>
    </div>
  );
}
