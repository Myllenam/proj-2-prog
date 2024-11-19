import { FC } from "react";

import { Banner } from "./components/Banner";
import { Ongs } from "./components/Ongs";
import Animals from "./components/Animals";

import getAnimals from "../../hooks/getAnimal";
import { mockAnimais } from "../../utils/animals";

export const Component: FC = () => {
  const { animals, loading } = getAnimals();
  const test = animals ? animals : mockAnimais;

  return (
    <div className="flex flex-col items-center py-[66px] sm:py-[40px] gap-[70px]">
      <Banner />
      <Animals
        cachorro={test.filter((animal) => animal.especie === "cachorro")}
        gato={test.filter((animal) => animal.especie === "gato")}
      />

      <Ongs />
    </div>
  );
};
export default Component;
