import { FC } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { IAnimal } from "../../../../models/interface/animal.interface";
import { Typography } from "@mui/material";
import { Button } from "../../../../components/Button";

export const CardAnimals: FC<{ animal: IAnimal }> = ({ animal }) => {
  return (
    <div className="flex flex-col gap-3 w-[170px] items-center pb-4 bg-white !shadow-lg rounded-lg">
      <div
        className="rounded-lg animal-card w-full h-[107px] bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${animal.linkImagem})` }}
      />
      <Typography className="text-preto !text-[20px] !font-bold ">
        {animal.nome}
      </Typography>
      <div className="flex flex-col gap-2 items-center">
        <Typography className="text-preto !font-normal !text-[20px]">{animal.raca}</Typography>
        <Typography className="text-preto !font-normal !text-[20px]">{animal.idade} anos</Typography>
      </div>
      <div className="w-full px-3">
        <Button>
          <Typography className=" text-white !font-normal !text-[15px] capitalize">
            Saiba mais
          </Typography>
          <ArrowForwardIcon className="ml-2 !h-[20px]"/>
        </Button>
      </div>
    </div>
  );
};
