import { Typography } from "@mui/material";
import { Filters } from "./components/Filters";
import { CardAnimals } from "./components/CardAnimals";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { mockAnimais } from "../../utils/animals";
import { useForm } from "react-hook-form";
import { EEspecie } from "../../models/enum/especie.enum";
import useAnimals from "../../hooks/getFilterAnimal";
import { useEffect } from "react";
import { ESexo } from "../../models/enum/sexo.enum";

export const Component = () => {
  const { control, watch } = useForm({
    defaultValues:{
     especie:null,
     porte:null,
     genero:null,
     idade:null
    }
   })
   const formValues= watch();
   console.log(formValues)
   const { animals, loading, error, updateFilters } = useAnimals();
  const navigate = useNavigate();
  const goToForm = () => {
    navigate("/adoptions/register");
  };
  useEffect(() => {
    const cleanedFilters = Object.fromEntries(
      Object.entries(formValues).filter(([_, value]) => value !== undefined && value !== null && value !== '')
    );
    updateFilters(cleanedFilters);
  }, [formValues.especie, formValues.genero, formValues.idade, formValues.porte]);
   

  const test=animals?animals:mockAnimais
  return (
    <div className="flex flex-col py-[45px] gap-[60px] sm:items-center">
      <Typography
        variant="h1"
        className="text-preto !font-semibold pl-[350px] sm:pl-0"
      >
        Encontre seu novo amigo
      </Typography>
      <div className="flex items-start sm:flex-col lg:pl-[43px] md:pl-[43px] lg:gap-[90px] md:gap-[90px]">
        <div className="flex flex-col gap-[50px] w-[300px] sm:items-center sm:w-full sm:px-4">
          <Button onClick={goToForm}>
            <Typography className="py-1 text-white !text-[14px] !capitalize">
              Quero divulgar um animal
            </Typography>
          </Button>
          <Filters control={control}/>
        </div>
        <div className="flex flex-wrap gap-[70px] w-full items-center sm:justify-center">
          {test?test.map((animal, index) => (
            <CardAnimals key={`animal-${index}`} animal={animal} />
          )):<p>Erro</p>}
        </div>
      </div>
    </div>
  );
};
export default Component;
