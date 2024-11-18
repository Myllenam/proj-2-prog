import { Typography } from "@mui/material"
import { FC } from "react"

export const AnimalCard:FC<{image:string, name:string, age:number}> = ({age,image,name}) => {
  return (
    <div className="flex flex-col gap-3 ">
   <div className="rounded-md animal-card w-[290px] h-[215px] bg-cover bg-center shadow-md" style={{ backgroundImage: `url(${image})` }}/>
<div>
    <Typography className="!font-bold text-neutral-500 !text-[14px]">{name}</Typography>
    <Typography className="!font-normal text-neutral-500 !text-[14px]">{age} anos</Typography>
</div>
</div>
  )
}
