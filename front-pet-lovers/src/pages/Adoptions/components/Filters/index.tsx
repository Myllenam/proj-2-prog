import { FC } from "react"
import { Control } from "react-hook-form"
import { AnimalFilter } from "../AnimalFilter"
import { GenderFilter } from "../GenderFilter"
import { SizeFilter } from "../SizeFilter"
import { AgeFilter } from "../AgeFilter"


export const Filters:FC<{control:Control<any>}> = ({control}) => {

  return (
    <div className=" flex flex-col gap-5 sm:pb-6">
      <div className=" flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-0">
      <AnimalFilter control={control}/>
      <GenderFilter control={control}/>
      </div>
      <div className=" flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-0">
      <SizeFilter control={control}/>
      <AgeFilter control={control}/>
      </div>
    </div>
  )
}
