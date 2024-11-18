import { Typography } from "@mui/material";
import { Filters } from "./components/Filters";
import { CardAnimals } from "./components/CardAnimals";
import { Button } from "../../components/Button";

export  const Component = () => {
    return (
      <div className="flex sm:flex-col lg:pl-[43px] md:pl-[43px] lg:gap-[90px] md:gap-[90px] py-[45px]">
        <div>
          <Button><Typography className="text-white !text-[14px] !capitalize">Quero divulgar um animal</Typography></Button>
        <Filters/>
        </div>
        <div>
          <Typography>Teste</Typography>
          <CardAnimals/>
        </div>

      </div>
    )
  }
  export default Component;