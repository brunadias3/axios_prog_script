import axios from 'axios';
import CepProps from '../types';

class Cep {
    async get(cep: string):Promise<CepProps> {
        const { data } = await axios.get(cep);
        return data;
    }

}

export default new Cep();