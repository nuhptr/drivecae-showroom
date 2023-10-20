"use client"

import Image from "next/image"

import { ICustomButtonProps } from "@/types"

export default function CustomButton({ title, containerStyles, handleClick }: ICustomButtonProps) {
   return (
      <button
         disabled={false}
         type="button"
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}>
         <span className={`flex-1`}>{title}</span>
      </button>
   )
}
