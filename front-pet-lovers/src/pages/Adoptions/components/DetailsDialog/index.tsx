import { Dialog, Typography } from "@mui/material";
import { FC } from "react";
import { IAnimal } from "../../../../models/interface/animal.interface";
import { Button } from "../../../../components/Button";

export const DetailsDialog: FC<{
  open: boolean;
  animal: IAnimal;
  onClose: () => void;
}> = ({ open, animal, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="flex gap-[35px] pr-[30px] sm:pr-0 sm:flex-col sm:gap-4">
        <div
          className="animal-card md:rounded-r-lg lg:rounded-r-lg  sm:rounded-e-lg w-[354px] sm:w-[100%] min-h-[284px] bg-cover bg-center"
          style={{ backgroundImage: `url(${animal.linkImagem})` }}
        />
        <div className=" flex flex-col gap-10 py-[25px] lg:w-[400px] md:w-[320px] sm:px-4 sm:gap-4">
          <Typography variant="h4" className="text-neutral-500 !font-bold">
            {animal.nome}
          </Typography>
          <div className="flex flex-wrap gap-2">
          {Array.isArray(animal.tags) && animal.tags.length >= 1 && animal.tags.length >= 1 &&
            animal.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="bg-laranja px-[14px] py-[6px] rounded-full"
                >
                  <Typography className="text-begeClaro !text-[14px]">{tag.descricao}</Typography>
                </div>
              );
            })}
            </div>
          <Typography className="!text-[14px] text-neutral-500">
            {animal.descricao}
          </Typography>
          <div className="min-w-[185px]">
            <Button>
              <Typography className="!text-[14px] capitalize py-1">
                Demonstrar interesse
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
