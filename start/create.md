# Create an instance

We have the API installed, we have an understanding of what will actually be exposed and how the API knows what to expose. So down the rabbit hole we go - let's create an actual API instance, and then take it from there -

```js
// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

...
// Construct
const wsProvider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });

// Do something
console.log(api.genesisHash.toHex());
```

We will have some explanation on the ES2015 syntax used next, but just a small note on the above - where other code is included (or just some previous boilerplate is used), you will see `...` in most of the examples. This is not due to laziness, but rather just to keep things straight and to the point.

## ES2015 Usage and examples

Before we jump into an explanation of the above example, be aware that in all cases we are using ES2015, including using things like `async`/`await`, `import` and others. Depending on your environment, this may require some adjustments.

While we are using the `await` naked in all examples (this removes boilerplate), it will need to be wrapped in an `async` block, for we could warp all samples inside a `async function main () { ... }` and then just call `main()`.

In the case of Node.js you would change the `import` into `require`, i.e.

```js
// Import
const { ApiPromise, WsProvider } = require('@polkadot/api');
...
```

We are basing all our examples on the [ApiPromise](../examples/promise/README.md) version of the API, however there is also an RxJS version available. Since Promises are a part of the ES2015 specification, it covers the greater amount of use and is the one that will be used in 95% of the cases and should be familiar to 100% of all developers. However if you are in an environment where RxJs is recommended or your have a great affinity ot it, you could take a look at the [RxJS examples](../examples/rx/README.md) once you are familiar with the base concepts introduced here.

For now... just ignore the various flavors and focus on understanding the concepts.

## Providers

Focusing on the construction, any API requires a provider and we create one via the `const wsProvider = new WsProvider(...)`. By default, if none is provided to the API it will construct a default `WsProvider` instance to connect to `ws://127.0.0.1:9944`.

We generally recommend always specifying the endpoint since in most cases we want to connect to an external node and even for local nodes, it is always better being explicit, less magic that can make you wonder in the future.

At this time the only provider type that is fully supported by the API is the WebSocket version. Polkadot/Substrate really comes alive with possibilities once you have access to bi-directional RPCs such as what WebSockets provide. (It is technically possible to have some limited capability via bare-HTTP, but at this point WebSockets is the only fully-operational and supported version - always remember that it is just "upgraded HTTP".)

## API Instance

The API creation is done via the `ApiPromise.create` interface which is a shortcut version for calling `new` and then waiting until the API is connected. Without the `async` syntax, this would be,

```js
ApiPromise
  .create({ provider: wsProvider }).isReady
  .then((api) =>
    console.log(api.genesisHash.toHex())
  );
```

In most cases we would suggest using the `.create` shortcut, which really just takes care of the following boilerplate that otherwise needs to be provided -

```js
// Create the instance
const api = new ApiPromise({ provider: wsProvider });

// Wait until we are ready and connected
await api.isReady;

// Do something
console.log(api.genesisHash.toHex());
```

## Failures

In all cases the API will handle reconnecting automatically. This means that when you connect and the endpoint is not (yet) ready, the promise will not resolve immediately, but rather when connected. The same applies to when connection is lost, the API will manage re-connections.

In cases where the API does not support the chain being connected to, such as it using an unknown metadata version, the ready promise will fail to resolve and instead reject.

## Advanced creation

There are more advanced cases where you would prefer to use the longer version, for instance: if you want to explicitly listen to events emitted, you probably want to attach to the API even before connecting to the chain. All API instances implement an `EventEmitter` interface, with `on` handlers, which emit `connected`, `disconnected`, `ready` and `error` events, allowing you to listen to events on the transport layer.

In these cases, create via `new`, attach listeners and then wait for the `isReady`.

## Do something

Now that we have the API initialized, the next step would be to start using it to interact and extract data [starting with chain constants](api.consts.md).
