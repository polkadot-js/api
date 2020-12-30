# @polkadot/rpc-provider

Generic transport providers to handle the transport of method calls to and from Polkadot clients from applications interacting with it. It provides an interface to making RPC calls and is generally, unless you are operating at a low-level and taking care of encoding and decoding of parameters/results, it won't be directly used, rather only passed to a higher-level interface.

## Provider Selection

There are two flavours of the providers provided, one allowing for using HTTP as a transport mechanism, the other using WebSockets. It is generally recommended to use the [[WsProvider]] since in addition to standard calls, it allows for subscriptions where all changes to state can be pushed from the node to the client.

Both providers are usable (as is the API), in both browser-based and Node.js environments. Polyfills for unsupported functionality are automatically applied based on feature-detection.

## Usage

Installation -

```
yarn add @polkadot/rpc-provider
```

WebSocket Initialization -

```javascript
import { WsProvider } from '@polkadot/rpc-provider/ws';

// this is the actual default endpoint
const provider = new WsProvider('ws://127.0.0.1:9944');
const version = await provider.send('client_version', []);

console.log('client version', version);
```

HTTP Initialization -

```javascript
import { HttpProvider } from '@polkadot/rpc-provider';

// this is the actual default endpoint
const provider = new HttpProvider('http://127.0.0.1:9933');
const version = await provider.send('chain_getBlockHash', []);

console.log('latest block Hash', hash);
```
