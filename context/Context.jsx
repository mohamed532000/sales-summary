"use client"
import {createContext, useContext, useEffect, useState} from "react"

const context = createContext()

export const ContextProvider = ({children}) => {
    const [date , setDate] = useState({});
    useEffect(() => {
        const dateNow = new Date();
        const year = dateNow.getFullYear();
        const month = dateNow.toLocaleString("en-US" , {month : "short"});
        const day = dateNow.getDate();
        setDate({day , month , year})
    },[])
    return (
        <context.Provider value={{date}}>
            {children}
        </context.Provider>
    )
}
export const AppContext =  () => {
    return useContext(context)
}