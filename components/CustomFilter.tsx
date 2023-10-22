"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import { Listbox, Transition } from "@headlessui/react"

import chevronUpDown from "@/public/chevron-up-down.svg"

type IOptionProps = {
   title: string
   value: string
}

type ICustomFilterProps = {
   title?: string
   options: IOptionProps[]
   setFilter: Function
}

export default function CustomFilter({ title, options, setFilter }: ICustomFilterProps) {
   const [selected, setSelected] = useState(options[0])

   return (
      <div className="w-fit">
         <Listbox
            value={selected}
            onChange={(event) => {
               setSelected(event)
               setFilter(event.value)
            }}>
            <div className="relative z-10 w-fit">
               <Listbox.Button className={`custom-filter__btn`}>
                  <span className="block truncate">{selected.title}</span>
                  <Image src={chevronUpDown} alt="Icon Chevron Up Down" className="object-contain w-5 h-5 ml-4" />
               </Listbox.Button>
               <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <Listbox.Options className={`custom-filter__options`}>
                     {options.map((option) => (
                        <Listbox.Option
                           key={option.title}
                           value={option}
                           className={({ active }) => `relative cursor-default select-none py-2 px-4
                           ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}>
                           {({ selected }) => (
                              <>
                                 <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                    {option.title}
                                 </span>
                              </>
                           )}
                        </Listbox.Option>
                     ))}
                  </Listbox.Options>
               </Transition>
            </div>
         </Listbox>
      </div>
   )
}
