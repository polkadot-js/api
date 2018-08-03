import Api from '@polkadot/api';
import HttpProvider from '@polkadot/api-provider/http';

console.log(HttpProvider);

const provider = new HttpProvider('http://127.0.0.1:9933');
const api = new Api(provider);

api.chain
  .getHeader('0x1234567890')
  .then((header) => console.log(header))
  .catch((error) => console.error(error));
