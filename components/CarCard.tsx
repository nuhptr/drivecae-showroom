"use client"

import Image from "next/image"
import { useState } from "react"

type ICarCardProps = {
   city_mpg: number
   class: string
   combination_mpg: number
   cylinders: number
   displacement: number
   drive: string
   fuel_type: string
   highway_mpg: number
   make: string
   model: string
   transmission: string
   year: number
}

export default function CarCard({ model, make, city_mpg, drive, transmission, year }: ICarCardProps) {
   return <div>CarCard</div>
}
