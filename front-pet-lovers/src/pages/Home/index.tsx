import { FC } from "react";

import { Banner } from "./components/Banner";
import { Ongs } from "./components/Ongs";
import Animals from "./components/Animals";
import { cachorro, gato } from "./utils";

import getAnimals from "../../hooks/getAnimal";


export const Component: FC = () => {
  const { animals, loading } = getAnimals();

  return (
    <div className="flex flex-col items-center py-[66px] sm:py-[40px] gap-[70px]">
      <Banner />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Animals cachorro={animals.filter((animal) => animal.especie === 'cachorro')||cachorro}
        gato={animals.filter((animal) => animal.especie === 'gato')||gato} />
      )}

      <Ongs />
    </div>
  );
};
export default Component;
