"use client"

import { useState } from "react"

import { SearchManufacturer } from "@/components"

export default function SearchBar() {
   const [manufaturer, setManufacturer] = useState<string>("")

   const handleSearch = () => {}

   return (
      <form
         className="relative flex items-center justify-start w-full max-w-3xl max-sm:flex-col max-sm:gap-4"
         onSubmit={handleSearch}>
         <div className="relative flex items-center justify-start flex-1 max-sm:w-full">
            <SearchManufacturer manufacturer={manufaturer} setManufacturer={setManufacturer} />
         </div>
      </form>
   )
}
