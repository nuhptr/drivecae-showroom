import Image from "next/image"
import { Fragment } from "react"

import { Dialog, Transition } from "@headlessui/react"

type ICarDetailsProps = {
   isOpen: boolean
   closeModal: () => void
   model: string
   make: string
   city_mpg: number
   drive: string
   transmission: string
   year: number
}

export default function CarDetails({
   isOpen,
   closeModal,
   model,
   make,
   city_mpg,
   drive,
   transmission,
   year,
}: ICarDetailsProps) {
   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="fixed inset-0 bg-black bg-opacity-25"></div>
               </Transition.Child>
               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-full p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   )
}