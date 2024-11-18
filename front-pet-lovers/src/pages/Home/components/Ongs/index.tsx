import { Typography } from "@mui/material";
import ong1 from "../../../../assets/ong1.png";
import ong2 from "../../../../assets/ong2.png";
import ong3 from "../../../../assets/ong3.png";
import ong4 from "../../../../assets/ong4.png";

export const Ongs = () => {
  return (
    <div className="w-full flex flex-col gap-[17px] px-[72px] lg:items-center">
      <Typography variant="h3" className="text-black !font-bold">
        Ongs
      </Typography>
      <Typography variant="body1" className="text-neutral-500">
        Caso você tenha uma ONG, entre em contato para preencher o formulário de
        cadastro.
      </Typography>
      <div className="flex gap-7 sm:items-center flex-wrap sm:justify-center">
        <div>
        <img src={ong1} className="" />
        <Typography className="text-neutral-500 !text-[16px] !font-bold">Amigos de Quatro Patas</Typography>
        </div>
        <div>
        <img src={ong2} className="" />
        <Typography className="text-neutral-500 !text-[16px] !font-bold">Coração Animal</Typography>
        </div>
        <div>
        <img src={ong3} className="" />
        <Typography className="text-neutral-500 !text-[16px] !font-bold">Lar dos Peludos</Typography>
        </div>
        <div>
        <img src={ong4} className="" />
        <Typography className="text-neutral-500 !text-[16px] !font-bold">Santuário dos Bichos</Typography> 
        </div>
      </div>
    </div>
  );
};
