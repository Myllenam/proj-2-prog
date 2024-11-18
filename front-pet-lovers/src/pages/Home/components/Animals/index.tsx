import  { FC } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";

import { AnimalCard } from "./AnimalCard";
import { Typography } from "@mui/material";




const Animals: FC<{cachorro:any[], gato:any[]}> = ({cachorro,gato}) => {
  const isMobile = useMediaQuery("(max-width: 768px)"); 
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")
  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 4;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
      };
  return (
    <div className="px-[72px] flex flex-col items-cente max-w-[100vw] overflow-x-hidden gap-[74px]">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 items-center">
      <Typography className="!font-bold text-[18px] text-neutral-500">Cachorros</Typography>
      <Typography className="!font-normal text-[18px] text-neutral-500">{cachorro.length}</Typography>
      </div>
      
        <Slider {...settings} >
        {cachorro.map((animal, index) => (
          <AnimalCard
            key={`cachorro-${index}`}
            age={animal.idade}
            image={animal.linkImagem}
            name={animal.nome}
          />
        ))}
        </Slider>
        </div>
        <div  className="flex flex-col gap-6">
        <div className="flex gap-2">
        <Typography className="!font-bold text-[18px] text-neutral-500">Gatos</Typography>
      <Typography className="!font-normal text-[18px] text-neutral-500">{gato.length}</Typography>
      </div>
      <Slider {...settings}>
        {gato.map((animal, index) => (
          <AnimalCard
            key={`cachorro-${index}`}
            age={animal.idade}
            image={animal.linkImagem}
            name={animal.nome}
          />
        ))}
     </Slider>
     </div>
    </div>
  );
};

export default Animals;
