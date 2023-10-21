"use client"

import Image from "next/image"
import { MouseEventHandler } from "react"

type ICustomButtonProps = {
   isDisabled?: boolean
   btnType?: "button" | "submit"
   containerStyles?: string
   textStyles?: string
   title: string
   rightIcon?: string
   handleClick?: MouseEventHandler<HTMLButtonElement>
}

export default function CustomButton({
   title,
   containerStyles,
   textStyles,
   isDisabled,
   rightIcon,
   handleClick,
   btnType,
}: ICustomButtonProps) {
   return (
      <button
         disabled={isDisabled}
         type={btnType || "button"}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}>
         <span className={`flex-1 ${textStyles}`}>{title}</span>
         {rightIcon && (
            <div className="relative w-6 h-6">
               <Image src={rightIcon} alt="Right Icon" fill className="object-contain" />
            </div>
         )}
      </button>
   )
}
