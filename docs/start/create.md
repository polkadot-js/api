# Create an instance

We have the API installed and we understand what will actually be exposed, down the rabbit hole we go - let's create an actual API instance, and then take it from there -

```js
// import
import { ApiPromise, WsProvider } from '@polkadot/api';

// construct
const wsProvider = new WsProvider('wss://poc-3.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });

// do something
console.log(api.genesisHash.toHex());
```

## ES2015 Usage

Before we jump into an explanation of the above, be aware that in all examples we are using ES2015, including things like `async`/`await`, `import` and others. Depending on your environment, this may require some adjustments. For instance, in the case of Node.js you would change the `import` into `require`, i.e.

```js
// import
const { ApiPromise, WsProvider } = require('@polkadot/api');
...
```

We are basing all our examples on the [ApiPromise](../examples/promise/README.md) version, however there is also an RxJS version of the API available. Since Promises are a part of the ES2015 specification, it covers the greater amount of use and is the one that will be used in 95% of the cases and should be familiar to 100% of all developers. However if you are in an environment where RxJs is standard, you could take a look at the [RxJS examples](../examples/rx/README.md) once you are familiar with the base concepts. For now... just ignore and focus on understanding the concepts.

## Providers

Focusing on the construction, any API requires a provider and we create one via the `const wsProvider = new WsProvider(...)`. By default, if none is provided to the API it will construct a default `WsProvider` instance and connect to `ws://127.0.0.1:9944`. We do recommend always specifying the endpoint since in most cases we want to connect to an external node and even for local nodes, it is better being explicit.

At this time the only provider type that is fully supported by the API is the WebSocket version. Polkadot/Substrate really comes alive with possibilities once you have access to bo-directional RPCs, such as what WebSockets provide. (It is possible to have some limited capabilities via bare-HTTP, but at this point WebSockets is the only fully-operational and supported version - always remember that it is just "upgraded HTTP".)

## API Instance

The API creation is done via the `ApiPromise.create` interface which is a shortcut version for calling `new` and then waiting until the API is connected. Without the `async` syntax, this would be,

```js
ApiPromise
  .create({ provider: wsProvider })
  .then((api) =>
    console.log(api.genesisHash.toHex())
  );
```

In most cases we would suggest using the `.create` shortcut, which really just takes care of the following boilerplate -

```js
// create the instance
const api = new ApiPromise({ provider: wsProvider });

// wait until ready and connected
await api.isReady;

// do something
console.log(api.genesisHash.toHex());
```

## Advanced creation

There are more advanced cases where you would prefer to use the longer version, for instance: if you want to explicitly listen to events emitted, you probably want to attach to the API even before connecting to the chain. In these cases, create via `new`, attach listeners and then wait for the `isReady`.

All API instances implement an `EventEmitter` interface, with `on` handlers, which emit `connected`, `disconnected`, `ready` and `error` events, allowing you to listen to events on the transport layer.

## Do something

Now that we have the API initialized, the next step would  be to start using it to interact and extract data [starting with chain constants](api.consts.md).
