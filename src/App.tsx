import { useState } from "react";
import axios from 'axios';

interface Cep {
  bairro: string;
  cep: string;
  complemento:string;
  ddd:string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro:string;
  siafi: string;
  uf:string;
}

function App() {
  const [cep, setCep] = useState('')
  const [response, setResponse] = useState({} as Cep);
  const url = `http://viacep.com.br/ws/${cep}/json`

  function obter() {
    axios.get(url)
      .then(({ data }) => {
        console.log(data)
        setResponse(data);
      })
  }

  return (
    <div className="App">
      <div style={{ alignItems: 'center', margin: '5px', padding: '5px', background: '#F5FFFA', textAlign: 'center' }}>
        <p><label htmlFor="cep">CEP</label></p>
        <input id='cep' value={cep} onChange={(e) => setCep(e.target.value)} />
        <button onClick={() => obter()}>Enviar</button>
      </div>
      <div style={{background:'#FFF0F5'}}>
        <p>Bairro: {response.bairro}</p>
        <p>Localidade: {response.localidade}</p>
      </div>
    </div>
  );
}

export default App;
