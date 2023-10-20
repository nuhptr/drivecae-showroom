type IOptionProps = {
   title: string
   value: string
}

type ICustomFilterProps = {
   title: string
   options?: IOptionProps[]
}

export default function CustomFilter({ title, options }: ICustomFilterProps) {
   return <div>{title}</div>
}
