[![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api?path=packages/api-provider)
[![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api?path=packages/api-provider#info=devDependencies)

# @polkadot/api-provider

Generic transport providers to handle the transport of method calls to and from Polkadot clients from applications interacting with it. Generally, unless you are operating at a low-level and taking care of encoding and decoding of parameters/results, it won't be directly used. API interfaces building on top these providers can support various transports with the same underlying interfaces.

## Usage

Installation -

```
npm install --save @polkadot/api-provider
```

Initialisation -

```js
import HttpProvider from '@polkadot/api-provider/http';

const provider = new HttpProvider('http://127.0.0.1:9933');
const version = await provider.send('client_version', []);

console.log('clientVersion', version);
```
