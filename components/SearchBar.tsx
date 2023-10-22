"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import modelIcon from "@/public/model-icon.png"
import magnifyingGlass from "@/public/magnifying-glass.svg"

import { SearchManufacturer } from "@/components"

type ISearchBarProps = {
   setManufacturer: Function
   setModel: Function
}

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
   <button type="submit" className={`-ml-4 z-10 ${otherClasses}`}>
      <Image src={magnifyingGlass} alt="Search Icon" width={40} height={40} className="object-contain" />
   </button>
)

export default function SearchBar({ setManufacturer, setModel }: ISearchBarProps) {
   const [searchManufacture, setSearchManufacturer] = useState<string>("")
   const [searchModel, setSearchModel] = useState<string>("")

   const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (searchManufacture === "" && searchModel === "") return alert("Please fill in the search bar")

      setModel(searchModel)
      setManufacturer(searchManufacture)
   }

   return (
      <form
         className="relative flex items-center justify-start w-full max-w-3xl max-sm:flex-col max-sm:gap-4"
         onSubmit={handleSearch}>
         <div className="relative flex items-center justify-start flex-1 max-sm:w-full">
            <SearchManufacturer selected={searchManufacture} setSelected={setSearchManufacturer} />
            <SearchButton otherClasses="sm:hidden" />
         </div>
         <div className="relative flex items-center justify-start flex-1 max-sm:w-full">
            <Image src={modelIcon} className="absolute w-[20px] h-[20px] ml-4" alt="Model Icon" />
            <input
               type="text"
               className="searchbar__input"
               name="model"
               value={searchModel}
               onChange={(e) => setSearchModel(e.target.value)}
               placeholder="Tiguan"
            />
            <SearchButton otherClasses="sm:hidden" />
         </div>
         <SearchButton otherClasses="max-sm:hidden" />
      </form>
   )
}
