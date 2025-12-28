"use client"
import { AppContext } from '@/context/Context'
import React from 'react'
import { CardDescription } from './card'

function ShowDate() {
    const {date : {day , month , year}} = AppContext()
  return (
    <CardDescription>{day} - {month} {year}</CardDescription>
  )
}

export default ShowDate