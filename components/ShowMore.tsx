"use client"

import { CustomButton } from "@/components"

type IShowMoreProps = {
   pageNumber: number
   isNext: boolean
   setLimit: Function
}

export default function ShowMore({ pageNumber, isNext, setLimit }: IShowMoreProps) {
   const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 10
      setLimit(newLimit)
   }

   return (
      <div className="w-full gap-5 mt-10 flex-center">
         {!isNext && (
            <CustomButton
               title="Show More"
               btnType="button"
               containerStyles="bg-primary-blue rounded-full text-white"
               handleClick={handleNavigation}
            />
         )}
      </div>
   )
}
