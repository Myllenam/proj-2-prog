import { useState, useEffect } from 'react';
import { AnimalFilter, IAnimal } from '../models/interface/animal.interface'; // Tipos de Animal e Filtro
import { api } from '../services/requests';

const getAnimals = (filters: AnimalFilter = {}) => {
  const [animals, setAnimals] = useState<IAnimal[]>([]); // Inicializa como um array vazio
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true); // Inicia o loading
      setError(null); // Limpa qualquer erro anterior

      let url = '/animais';  // Definindo a URL base da API

      // Adicionando filtros como parâmetros de consulta na URL
      const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
      if (queryParams) {
        url = `${url}?${queryParams}`;
      }

      try {
        // Realizando a requisição com Axios
        const response = await api.get(url);
        setAnimals(response.data); // Atualiza o estado com os dados recebidos
      } catch (err: any) {
        setError(err.message); // Armazena o erro caso a requisição falhe
      } finally {
        setLoading(false); // Finaliza o loading
      }
    };

    // Faz a requisição somente se o filtro tiver algum valor
    if (Object.keys(filters).length > 0) {
      fetchAnimals();
    }
  }, [filters]);  // O useEffect é executado quando o filtro mudar

  return { animals, loading, error };
};

export default getAnimals;
