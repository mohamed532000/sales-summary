import axios from "axios";

export const mainCategoriesData = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories_sales`);
        return res.data
    }catch (error) {
        console.log("error fetch main categories data" , error)
    }
}