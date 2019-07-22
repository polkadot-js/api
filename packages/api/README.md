# @polkadot/api

The Polkadot-JS API provides easy-to-use wrappers around JSONRPC calls that flow from an application to a node. It handles all the encoding and decoding or parameters, provides access to RPC functions and allows for the query of chain state and the submission of transactions.

The API wrappers provide a standard interface for use -

- A static `.create(<optional ApiOptions>)` that returns an API instance when connected, decorated and ready-to use. ApiOptions can include an optional WsProvider and optional custom type definitions `{ provider: <Optional WsProvider>, types: <Optional RegistryTypes> }`.
- The above is just a wrapper for `new Api(<optional ApiOptions>) `, exposing the `isReady` getter
- `api.rpc.<section>.<method>` provides access to actual RPC calls, be it for queries, submission or retrieving chain information
  - [RPC (node interface)](../METHODS_RPC.md)
- `api.query.<section>.<method>` provides access to chain state queries. These are dynamically populated based on what the runtime provides
  - [Storage chain state (runtime node interface)](../METHODS_STORAGE.md)
- `api.tx.<section>.<method>` provides the ability to create a transaction, like chain state, this list is populated from a runtime query
  - [Extrinsics (runtime node interface)](../METHODS_EXTRINSICS.md)
- `api.consts.<section>.<constant>` provides access to the module constants (parameter types).
  - [Constants (runtime node interface)](../METHODS_CONSTANTS.md)

## API Selection

There are two flavours of the API provided, one allowing a standard interface via JavaScript Promises and the second provides an Observable wrapper using [RxJS](https://github.com/ReactiveX/rxjs). Depending on your use-case and familiarity, you can choose either (or even both) for your application.

- [[ApiPromise]] All interface calls returns Promises, including the static `.create(...)`. Additionally any subscription method uses `(value) => {}` callbacks, returning the value as the subscription is updated.
- [[ApiRx]] All interface calls return RxJS Observables, including the static `.create(...)`. In the same fashion subscription-based methods return long-running Observables that update with the latest values.

## Dynamic by default

Substrate (upon which Polkadot is built) uses on-chain WASM runtimes, allowing for upgradability. Each runtime defining the actual chain extrinsics (submitted transactions and block intrinsics) as well as available entries in the chain state. Due to this, the API endpoints for queries and transactions are dynamically populated from the running chain.

Due to this dynamic nature, this API departs from traditional APIs which only has fixed endpoints, driving use by what is available by the runtime. As a start, this generic nature has a learning curve, although the provided documentation, examples and linked documentation tries to make that experience as seamless as possible.

## Installation & import

Installation -

```
npm install --save @polkadot/api
```

Subscribing to blocks via Promise-based API -

```javascript
import { ApiPromise } from '@polkadot/api';

// initialise via static create
const api = await ApiPromise.create();

// make a call to retrieve the current network head
api.rpc.chain.subscribeNewHead((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```

Subscribing to blocks via RxJS-based API -

```javascript
import { ApiRx } from '@polkadot/api';

// initialise via static create
const api = await ApiRx.create().toPromise();

// make a call to retrieve the current network head
api.rpc.chain.subscribeNewHead().subscribe((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```

## Registering custom types

Additional types used by runtime modules can be added when a new instance of the API is created. This is necessary if the runtime modules use types which are not available in the base Substrate runtime.

```javascript
import { ApiPromise } from '@polkadot/api';

// initialise via static create and register custom types
const api = await ApiPromise.create({
  types: {
    CustomTypesExample: {
      "id": "u32",
      "data": "Vec<u8>",
      "deposit": "Balance",
      "owner": "AccountId",
      "application_expiry": "Moment",
      "whitelisted": "bool",
      "challenge_id": "u32"
    }
  }
});
```

## Users

Some of the users of the API (let us know if you are missing from the list), include -

- [Polkadot-JS UI](https://github.com/polkadot-js/apps) A user-interface that allows you to make transactions, query the network or participate in actions on the network such as referendums and staking
- [Polkabot](https://gitlab.com/Polkabot) Polkabot is a Matrix chatbot that keeps an eye on the Polkadot network. You can see Polkabot in action in https://matrix.to/#/#polkadot-network-status:matrix.org
- [Polkawallet.io](https://polkawallet.io) and [Polkawallet (Github)](https://github.com/polkawallet-io/polkawallet-RN/) A mobile wallet for the Polkadot network to manage funds and make transactions, available on both Androind and iOS

## Classes

[Classes](SUMMARY.md)
