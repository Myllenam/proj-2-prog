import { useState } from 'react';
import { api } from '../services/requests';

const useAddAnimal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const addAnimal = async (animal: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await api.post("/animais", animal); // Passando os dados de animal
      if (response.status === 200) {
        setSuccess(true); 
      } else {
        setError("Ocorreu um erro ao cadastrar o animal");
      }
    } catch (err: any) {
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  return { addAnimal, loading, error, success };
};

export default useAddAnimal;

