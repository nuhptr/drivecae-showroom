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

export interface IShowMoreProps {
   pageNumber: number
   isNext: boolean
}
