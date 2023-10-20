import { MouseEventHandler } from "react"

export interface ICustomButtonProps {
   isDisabled?: boolean
   btnType?: "button" | "submit"
   containerStyles?: string
   textStyles?: string
   title: string
   rightIcon?: string
   handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface ICarProps {
   city_mpg: number
   class: string
   combination_mpg: number
   cylinders: number
   displacement: number
   drive: string
   fuel_type: string
   highway_mpg: number
   make: string
   model: string
   transmission: string
   year: number
}

export interface IFilterProps {
   manufacturer?: string
   year?: number
   model?: string
   limit?: number
   fuel?: string
}

export interface IHomeProps {
   searchParams: IFilterProps
}

export interface ICarCardProps {
   model: string
   make: string
   mpg: number
   transmission: string
   year: number
   drive: string
   cityMPG: number
}

export interface IOptionProps {
   title: string
   value: string
}

export interface ICustomFilterProps {
   title: string
   options: IOptionProps[]
}

export interface IShowMoreProps {
   pageNumber: number
   isNext: boolean
}

export interface ISearchManuFacturerProps {
   manufacturer: string
   setManuFacturer: (manufacturer: string) => void
}
