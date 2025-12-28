import { create }  from "zustand";

export const useMainCategoryData = create((set) => ({
    name : "mainCategoryData",
    category : {},
    setMainCategoryData : (category) => set((state) => {
        return {category}
    }) 
}))