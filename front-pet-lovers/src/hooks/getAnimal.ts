import { useState, useEffect } from 'react';
import { AnimalFilter, IAnimal } from '../models/interface/animal.interface'; // Tipos de Animal e Filtro
import { api } from '../services/requests';

const getAnimals = (filters?: AnimalFilter) => { // Filtro agora é opcional
  const [animals, setAnimals] = useState<IAnimal[]>([]); // Inicializa como um array vazio
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true); 
      setError(null); 

      try {
        const response = await api.get("/animais", {
          params: filters ? filters : {} 
        });
        setAnimals(response.data); 
      } catch (err: any) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, [filters]); 
  return { animals, loading, error };
};

export default getAnimals;

