# @polkadot/rpc-provider

Generic transport providers to handle the transport of method calls to and from Polkadot clients from applications interacting with it. Generally, unless you are operating at a low-level and taking care of encoding and decoding of parameters/results, it won't be directly used. API interfaces building on top these providers can support various transports with the same underlying interfaces.

## Usage

Installation -

```
yarn add @polkadot/rpc-provider
```

Initialisation -

```js
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const version = await provider.send('client_version', []);

console.log('clientVersion', version);
```
