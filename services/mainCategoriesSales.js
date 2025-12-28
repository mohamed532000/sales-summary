export const mainCategoriesSales = async () => {
    try {
        const res = await Axis3DIcon.get(`${process.env.NEXT_PUBLIC_URL}/categories-sales`);
        console.log(res.data)
        return res
    }catch (error) {
        console.log(error);
    }
}