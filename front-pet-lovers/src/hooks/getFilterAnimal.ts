import { useState, useEffect } from 'react';
import { AnimalFilter, IAnimal } from '../models/interface/animal.interface';
import { api } from '../services/requests';

const useAnimals = (initialFilters?: AnimalFilter) => {
  const [animals, setAnimals] = useState<IAnimal[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<AnimalFilter | undefined>(initialFilters);

  // Busca os animais sempre que os filtros mudarem
  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get("/animais/filtrados", {
          params: filters || {},
        });
        setAnimals(response.data);
      } catch (err: any) {
        setError(err.message || 'Erro ao buscar animais');
      } finally {
        setLoading(false);
      }
    };

    if (filters) {
      fetchAnimals();
    }
  }, [filters]);

  // Função para alterar os filtros
  const updateFilters = (newFilters: AnimalFilter) => {
    setFilters(newFilters);
  };

  return { animals, loading, error, updateFilters };
};

export default useAnimals;
