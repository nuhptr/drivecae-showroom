"use client"

import { useEffect, useState } from "react"

import { fetchCars } from "@/utils"
import { fuels, yearsOfProduction } from "@/constant"

import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components"

type IFilterProps = {
   manufacturer?: string
   model?: string
   fuel?: string
   limit?: number
   year?: number
}

type IHomeProps = {
   searchParams: IFilterProps
}

export default function Home() {
   const [allCars, setAllCars] = useState([])
   const [isLoading, setIsLoading] = useState(false)

   // search states
   const [manufacturer, setManufacturer] = useState("")
   const [model, setModel] = useState("")

   // filter states
   const [fuel, setFuel] = useState("")
   const [year, setYear] = useState(2022)

   // pagination states
   const [limit, setLimit] = useState(10)

   const getCars = async () => {
      try {
         setIsLoading(true)
         const result = await fetchCars({
            manufacturer: manufacturer || "",
            model: model || "",
            fuel: fuel || "",
            year: year || 2022,
            limit: limit || 10,
         })

         console.log(result)
         setAllCars(result)
      } catch (error) {
         console.error(error)
      } finally {
         setIsLoading(false)
      }
   }

   useEffect(() => {
      getCars()
   }, [fuel, year, limit, manufacturer, model])

   return (
      <main className="overflow-hidden">
         <Hero />

         <div className="mt-12 padding-x padding-y max-width" id="discover">
            <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
               <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
               <p className="">Explore the cars you might like</p>
            </div>

            <div className="flex flex-wrap items-center justify-between w-full gap-5 mt-12">
               <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
               <div className="flex flex-wrap items-center justify-start gap-2">
                  <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
                  <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
               </div>
            </div>

            {allCars.length > 0 && (
               <section>
                  <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pt-14">
                     {allCars?.map((car) => (
                        <CarCard car={car} key={car} />
                     ))}
                  </div>

                  {isLoading && (
                     <div className="w-full mt-16 flex-center">
                        <p className="text-2xl font-medium">Loading...</p>
                     </div>
                  )}

                  <ShowMore
                     pageNumber={(limit || 10) / 10}
                     isNext={(limit || 10) > allCars.length}
                     setLimit={setLimit}
                  />
               </section>
            )}
            {allCars.length === 0 && (
               <div className="flex flex-col items-center justify-center gap-2 mt-16">
                  <h2 className="text-xl font-bold text-black">Looking for the cars...</h2>
               </div>
            )}
         </div>
      </main>
   )
}
