import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [greeting, setGreeting] = useState(null);

  const fetchGreeting = async () => {
    try {
      const response = await axios.get('http://localhost:8080/greeting',{params:{name:"myllena"}});
      setGreeting(response.data); // Aqui o 'greeting' será um objeto
    } catch (error) {
      console.error('Erro ao buscar saudação', error);
    }
  };

  useEffect(() => {
    fetchGreeting(); 
  }, []); 

  console.log(greeting);

  return (
    <div>
      <h1>{greeting ? greeting.content : 'Carregando...'}</h1>
    </div>
  );
}

export default App;
