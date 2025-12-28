import SalesCharts from "@/components/charts-content/SalesCharts";
import axios from "axios";

export default async function Home() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories_sales`);
  return (
    <div className="relative">
      <SalesCharts mainCategoriesSalesData={res.data}/>
    </div>
  );
}
