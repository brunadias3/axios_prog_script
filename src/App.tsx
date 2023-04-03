import { useState } from "react";
import Cep from "./services/Cep";
import CepProps from "./types";

function App() {
  const [cep, setCep] = useState('')
  const [response, setResponse] = useState({} as CepProps);

  function obter() {
    Cep.get(cep).then(r => setResponse(r));
  }

  return (
    <div className="App" style={{ alignItems: 'center', margin: '5px', padding: '25px', textAlign: 'center' }}>
      <div style={{ background: '#F5FFFA' }}>
        <p><label htmlFor="cep">CEP</label></p>
        <input id='cep' value={cep} onChange={(e) => setCep(e.target.value)} />
        <button onClick={() => obter()}>Enviar</button>
      </div>
      <div style={{ background: '#FFF0F5' }}>
        <p>Bairro: {response.bairro}</p>
        <p>Localidade: {response.localidade}</p>
      </div>
    </div>
  );
}

export default App;
