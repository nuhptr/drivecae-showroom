"use client"

import Image from "next/image"
import { Fragment, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"

import { manufacturers } from "@/constant"

type ISearchManufacturerProps = {
   selected: string
   setSelected: (manufacturer: string) => void
}

export default function SearchManufacturer({ selected, setSelected }: ISearchManufacturerProps) {
   const [query, setQuery] = useState<string>("")

   const filteredManufacturers =
      query === ""
         ? manufacturers
         : manufacturers.filter((item) =>
              item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
           )

   return (
      <div className="flex items-center justify-start flex-1 max-sm:w-full">
         <Combobox value={selected} onChange={setSelected}>
            <div className="relative w-full">
               <Combobox.Button className="absolute top-[14px]">
                  <Image src={"/car-logo.svg"} alt="Car Logo" width={20} height={20} className="ml-4" />
               </Combobox.Button>
               <Combobox.Input
                  className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
                  placeholder="Volkswagen"
                  displayValue={(manufacturer: string) => manufacturer}
                  onChange={(event) => setQuery(event.target.value)}
               />
               <Transition
                  as={Fragment}
                  leave="Transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}>
                  <Combobox.Options>
                     {filteredManufacturers.length === 0 && query !== "" ? (
                        <Combobox.Option value={query} className="py-2 pl-10 pr-4 cursor-default select-none">
                           Try to search for another...
                        </Combobox.Option>
                     ) : (
                        filteredManufacturers.map((item) => (
                           <Combobox.Option
                              key={item}
                              value={item}
                              className={({ active }) => `relative py-2 pl-10 pr-4 cursor-default select-none 
                              ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}>
                              {({ selected, active }) => (
                                 <>
                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                       {item}
                                    </span>

                                    {/* Show an active blue background color if the option is selected */}
                                    {selected && (
                                       <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 
                                          ${active ? "text-white" : "text-primary-blue-100"}`}
                                       />
                                    )}
                                    {!selected && null}
                                 </>
                              )}
                           </Combobox.Option>
                        ))
                     )}
                  </Combobox.Options>
               </Transition>
            </div>
         </Combobox>
      </div>
   )
}
