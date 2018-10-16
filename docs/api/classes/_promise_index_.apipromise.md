

@polkadot/api/promise
=====================

Overview
--------
*__name__*: ApiPromise

*__description__*: ApiPromise is a standard JavaScript wrapper around the RPC and interfaces on the Polkadot network. As a full Promise-based, all interface calls return Promises, including the static `.create(...)`. Subscription calls utilise `(value) => {}` callbacks to pass through the latest values.

The API is well suited to real-time applications where either the single-shot state is needed or use is to be made of the subscription-based features of Polkadot (and Substrate) clients.

*__see__*: [ApiRx](_rx_index_.apirx.md)

Usage
-----

Making rpc calls -  

```javascript
import ApiPromise from '@polkadot/api/promise';

// initialise via static create
const api = await ApiPromise.create();

// make a subscription to the network head
api.rpc.chain.subscribeNewHead((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```
  

Subscribing to chain state -  

```javascript
import { ApiPromise } from '@polkadot/api';
import WsProvider from '@polkadot/rpc-provider/ws';

// initialise a provider with a specific endpoint
const provider = new WsProvider('wss://example.com:9944')

// initialise via isReady & new with specific provider
const api = await new ApiPromise(provider).isReady;

// retrieve the block target time
const blockPeriod = await api.query.timestamp.blockPeriod().toNumber();
let last = 0;

// subscribe to the current block timestamp, updates automatically (callback provided)
api.query.timestamp.now((timestamp) => {
  const elapsed = last
    ? `, ${timestamp.toNumber() - last}s since last`
    : '';

  last = timestamp.toNumber();
  console.log(`timestamp ${timestamp}${elapsed} (${blockPeriod}s target)`);
});
```
  

Submitting a transaction -  

```javascript
import ApiPromise from '@polkadot/api/promise';

ApiPromise.create().then((api) => {
  const nonce = await api.query.system.accountNonce(keyring.alice.address());

  api.tx.balances
    // create transfer
    transfer(keyring.bob.address(), 12345)
    // sign the transcation
    .sign(keyring.alice, nonce)
    // send the transaction (optional status callback)
    .send((status) => {
      console.log(`current status ${status.type}`);
    })
    // retrieve the submitted extrinsic hash
    .then((hash) => {
      console.log(`submitted with hash ${hash}`);
    });
});
```

# Hierarchy

 [ApiBase](_base_.apibase.md)<`Rpc`, `QueryableStorage`, `SubmittableExtrinsics`>

**↳ ApiPromise**

# Implements

* `ApiBaseInterface`<`Rpc`, `QueryableStorage`, `SubmittableExtrinsics`>
* `ApiPromiseInterface`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiPromise**(wsProvider?: *`WsProvider`*): [ApiPromise](_promise_index_.apipromise.md)

*Overrides [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [promise/index.ts:127](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/promise/index.ts#L127)*

*__description__*: Creates an instance of the ApiPromise class

*__example__*:   
```javascript
import Api from '@polkadot/api/promise';

new Api().isReady.then((api) => {
  api.rpc.subscribeNewHead((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` wsProvider | `WsProvider` |  WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port, i.e. \`ws://127.0.0.1:9944\` |

**Returns:** [ApiPromise](_promise_index_.apipromise.md)

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:71](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/Base.ts#L71)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="isready"></a>

##  isReady

getisReady(): `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

*Defined in [promise/index.ts:160](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/promise/index.ts#L160)*

*__description__*: Promise that returns the first time we are connected and loaded

**Returns:** `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

___
<a id="query"></a>

##  query

getquery(): `QueryableStorage`

*Inherited from [ApiBase](_base_.apibase.md).[query](_base_.apibase.md#query)*

*Defined in [Base.ts:111](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/Base.ts#L111)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   
```javascript
api.query.balances
  .freeBalance(<accountId>)
  .subscribe((balance) => {
    console.log('new balance', balance);
  });
```

**Returns:** `QueryableStorage`

___
<a id="rpc"></a>

##  rpc

getrpc(): `Rpc`

*Inherited from [ApiBase](_base_.apibase.md).[rpc](_base_.apibase.md#rpc)*

*Defined in [Base.ts:133](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/Base.ts#L133)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   
```javascript
api.rpc.chain
  .subscribeNewHead()
  .subscribe((header) => {
    console.log('new header', header);
  });
```

**Returns:** `Rpc`

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `RuntimeMetadata`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeMetadata](_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:80](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/Base.ts#L80)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `RuntimeMetadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeVersion](_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:89](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/Base.ts#L89)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="tx"></a>

##  tx

gettx(): `SubmittableExtrinsics`

*Inherited from [ApiBase](_base_.apibase.md).[tx](_base_.apibase.md#tx)*

*Defined in [Base.ts:153](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/Base.ts#L153)*

*__description__*: Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

*__example__*:   
```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .sign(<keyPair>, <accountNonce>, <blockHash (optional)>)
  .send()
  .subscribe((status) => {
    console.log('tx status', status);
  });
```

**Returns:** `SubmittableExtrinsics`

___

# Methods

<a id="on"></a>

##  on

▸ **on**(type: *`ApiInterface$Events`*, handler: *`function`*): `void`

*Inherited from [ApiBase](_base_.apibase.md).[on](_base_.apibase.md#on)*

*Defined in [Base.ts:178](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/Base.ts#L178)*

*__description__*: Attach an eventemitter handler to listen to a specific event

*__example__*:   
```javascript
* api.on('disconnected', () => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `ApiInterface$Events` |  The type of event to listen to. Available events are \`connected\`, \`disconnected\` and \`ready\` |
| handler | `function` |  The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments. |

**Returns:** `void`

___
<a id="create"></a>

## `<Static>` create

▸ **create**(wsProvider?: *`WsProvider`*): `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

*Defined in [promise/index.ts:125](https://github.com/polkadot-js/api/blob/106c59d/packages/api/src/promise/index.ts#L125)*

*__description__*: Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.

*__example__*:   
```javascript
import Api from '@polkadot/api/promise';

Api.create().then(async (api) => {
  const timestamp = await api.query.timestamp.now();

  console.log(`lastest block timestamp ${timestamp}`);
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` wsProvider | `WsProvider` |  WebSocket provider that is passed to the class contructor |

**Returns:** `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

___

