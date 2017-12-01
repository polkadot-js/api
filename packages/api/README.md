[![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api)
[![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api#info=devDependencies)

# @polkadot/api

Warning - currently this does not actually do all that much, it is an attempt to put into code some thoughts about how to maintain the endpoints. This library provides a clean wrapper around all the methods exposed by a Polkadot network client. Methods are auto-generated for the [JsonRPC interface definitions](https://github.com/polkadot-js/api/packages/api-jsonrpc).

## Usage

Installation -

```
npm install --save @polkadot/api
```

Initialisation -

```js
import Api from '@polkadot/api';
import HttpProvider from '@polkadot/api-provider/http';

const provider = new HttpProvider('http://127.0.0.1:9933');
const api = new Api(provider);
```

Making calls -

```js
api.chain
  .getHeader('0x1234567890')
  .then((header) => console.log(header))
  .catch((error) => console.error(error));
```

## Available methods

For a list of currently exposed methods, see the [@polkadot/api-jsonrpc](https://github.com/polkadot-js/api/packages/api-jsonrpc#readme) repository.
