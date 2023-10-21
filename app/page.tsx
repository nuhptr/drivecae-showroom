import Image from "next/image"

import { fetchCars } from "@/utils"

import { Hero, SearchBar, CustomFilter, CarCard } from "@/components"

export default async function Home() {
   const allCars = await fetchCars()

   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

   return (
      <main className="overflow-hidden">
         <Hero />

         <div className="mt-12 padding-x padding-y max-width" id="discover">
            <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
               <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
               <p className="">Explore the cars you might like</p>
            </div>

            <div className="flex flex-wrap items-center justify-between w-full mt-12 gap-5">
               <SearchBar />
               <div className="flex flex-wrap items-center justify-start gap-2">
                  <CustomFilter title="fuel" />
                  <CustomFilter title="year" />
               </div>
            </div>

            {!isDataEmpty && (
               <section>
                  <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pt-14">
                     {allCars?.map((car) => (
                        <CarCard {...car} key={car} />
                     ))}
                  </div>
               </section>
            )}
            {isDataEmpty && (
               <div className="flex flex-col items-center justify-center mt-16 gap-2">
                  <h2 className="text-xl font-bold text-black">Oops, no results</h2>
                  <p>{allCars?.message}</p>
               </div>
            )}
         </div>
      </main>
   )
}
