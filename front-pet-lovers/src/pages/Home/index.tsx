import { FC, useState } from "react";

import { Banner } from "./components/Banner";
import { Ongs } from "./components/Ongs";
import Animals from "./components/Animals";
import { cachorro, gato } from "./utils";

import getAnimals from "../../hooks/getAnimal";
import { AnimalFilter } from "../../models/interface/animal.interface";

export const Component: FC = () => {
  const [filters, setFilters] = useState<AnimalFilter>({ especie: 'cachorro' });

  // Usando o hook para obter os dados dos animais filtrados
  const { animals, loading, error } = getAnimals(filters);

  // Função para alterar o filtro
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col items-center py-[66px] sm:py-[40px] gap-[70px]">
      <Banner />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Animals   cachorro={animals.filter((animal) => animal.especie === 'cachorro')||cachorro}
        gato={animals.filter((animal) => animal.especie === 'gato')||gato} />
      )}

      <Ongs />
    </div>
  );
};
export default Component;
