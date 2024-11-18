import { Typography } from "@mui/material";
import { Filters } from "./components/Filters";
import { CardAnimals } from "./components/CardAnimals";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export  const Component = () => {
  const navigate = useNavigate();
  const goToForm = () => {
    navigate("/adoptions/register");
  };
    return (
      <div className="flex items-center sm:flex-col lg:pl-[43px] md:pl-[43px] lg:gap-[90px] md:gap-[90px] py-[45px]">
        <div>
          <Button onClick={goToForm}><Typography className="text-white !text-[14px] !capitalize">Quero divulgar um animal</Typography></Button>
        <Filters/>
        </div>
        <div>
          <Typography variant="h1" className="text-preto !font-semibold">Encontre seu novo amigo</Typography>
          <CardAnimals/>
        </div>

      </div>
    )
  }
  export default Component;