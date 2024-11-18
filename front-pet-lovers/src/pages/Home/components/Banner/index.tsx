import { FC } from "react";
import { Typography } from "@mui/material";

import banner from "../../../../assets/homeImage.png";
import { Button } from "../../../../components/Button";
import { useNavigate } from "react-router-dom";

export const Banner:FC = () => {
  const navigate = useNavigate();
  const goToForm = () => {
    navigate("/adoptions/register");
  };
  const goToAdoptions = () => {
    navigate("/adoptions");
  };
  return (
    <div className="flex flex-col items-center gap-[70px] sm:gap-[50px]">
    <img src={banner} alt="footer" className="sm:w-[90%] w-[85%] bg-cover " />
    <div className="flex gap-[40px] sm:gap-5 flex-wrap justify-center">
      <div className="w-[200px]">
      <Button onClick={goToForm}>
        <Typography className="!capitalize !leading-7 text-begeClaro !text-[14px] !font-semibold ">
          Quero divulgar animal
        </Typography>
      </Button>
      </div>
      <div className="w-[200px]">
      <Button isWhite={true}  onClick={goToAdoptions}>
        <Typography className="!capitalize !leading-7 text-rosa2 !text-[14px] !font-semibold ">
          Quero Adotar
        </Typography>
      </Button>
      </div>
    </div>
    </div>
  )
}
