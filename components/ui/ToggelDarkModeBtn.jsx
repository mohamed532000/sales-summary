"use client"
import React, { useEffect } from 'react'

function ToggelDarkModeBtn() {
    const handleToggel = () => {
        const theme = window.localStorage.getItem("theme");
        if(theme == "dark") {
            window.localStorage.setItem("theme" , "light")
        }else {
            window.localStorage.setItem("theme" , "dark")
        }
        // document.s
    }
    useEffect(() => {
        const theme = window.localStorage.getItem("theme");
        console.log(theme)
    },[])
  return (
    <div onClick={handleToggel} className='cursor-pointer'>ToggelDarkModeBtn</div>
  )
}

export default ToggelDarkModeBtn