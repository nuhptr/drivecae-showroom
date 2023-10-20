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

export default function CustomButton({ title, containerStyles, handleClick, btnType }: ICustomButtonProps) {
   return (
      <button disabled={false} type={btnType} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
         <span className={`flex-1`}>{title}</span>
      </button>
   )
}
