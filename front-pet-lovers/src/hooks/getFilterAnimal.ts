import { useState, useEffect, useCallback } from 'react';
import { AnimalFilter, IAnimal } from '../models/interface/animal.interface'; // Tipos de Animal e Filtro
import { api } from '../services/requests';

const useAnimals = (initialFilters?: AnimalFilter) => {
  const [animals, setAnimals] = useState<IAnimal[] | null>(null); // Inicializa como null
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<AnimalFilter | undefined>(initialFilters); // Permite alterar filtros dinamicamente

  // Função de busca para reutilização
  const fetchAnimals = useCallback(async (customFilters?: AnimalFilter) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/animais/filtrados", {
        params: customFilters || filters || {}, // Usa os filtros personalizados ou os atuais
      });
      setAnimals(response.data);
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar animais');
    } finally {
      setLoading(false);
    }
  }, [filters]); // Reexecuta apenas quando os filtros mudarem

  // Atualiza automaticamente ao alterar os filtros
  useEffect(() => {
    if (filters) {
      fetchAnimals();
    }
  }, [filters, fetchAnimals]);

  // Função para alterar os filtros
  const updateFilters = (newFilters: AnimalFilter) => {
    setFilters(newFilters); // Atualiza os filtros e dispara o efeito
  };

  // Função para forçar a busca manualmente
  const refetch = () => {
    fetchAnimals(filters); // Força a busca com os filtros atuais
  };

  return { animals, loading, error, updateFilters, refetch };
};

export default useAnimals;
