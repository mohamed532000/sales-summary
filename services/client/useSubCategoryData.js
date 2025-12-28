import { create }  from "zustand";

export const useSubCategoryData = create((set) => ({
    name : "mainCategoryData",
    category : {},
    setSubCategoryData : (category) => set((state) => {
        return {category}
    }) 
}))