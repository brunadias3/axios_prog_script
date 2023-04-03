import { useEffect } from "react";
import axios from 'axios';

function App() {
  const url = 'http://viacep.com.br/ws/05402918/json'

  useEffect(() => {
    axios.get(url)
    .then((r) => {
      console.log(r)
    })
  }, [])

  return (
    <div className="App">
      oi
    </div>
  );
}

export default App;
