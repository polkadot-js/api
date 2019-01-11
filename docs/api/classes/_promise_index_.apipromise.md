

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

 [ApiBase](_base_.apibase.md)<[DecoratedRpc](../interfaces/_promise_types_.decoratedrpc.md), [QueryableStorage](../interfaces/_promise_types_.queryablestorage.md), [SubmittableExtrinsics](../interfaces/_promise_types_.submittableextrinsics.md)>

**↳ ApiPromise**

# Implements

* [ApiBaseInterface](../interfaces/_types_.apibaseinterface.md)<[DecoratedRpc](../interfaces/_promise_types_.decoratedrpc.md), [QueryableStorage](../interfaces/_promise_types_.queryablestorage.md), [SubmittableExtrinsics](../interfaces/_promise_types_.submittableextrinsics.md)>
* [ApiPromiseInterface](../interfaces/_promise_types_.apipromiseinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiPromise**(options?: *[ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface`*): [ApiPromise](_promise_index_.apipromise.md)

*Overrides [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [promise/index.ts:135](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/promise/index.ts#L135)*

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

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface` |  Options to create an instance. This can be either [ApiOptions](../interfaces/_types_.apioptions.md) or an \[\[HttpProvider\]\] or \[\[WsProvider\]\]. In the case of \[\[HttpProvider\]\] subscriptions are not supported, only latest values are returned. |

**Returns:** [ApiPromise](_promise_index_.apipromise.md)

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:77](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L77)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Inherited from [ApiBase](_base_.apibase.md).[hasSubscriptions](_base_.apibase.md#hassubscriptions)*

*Defined in [Base.ts:86](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L86)*

*__description__*: `true` when subscriptions are supported

**Returns:** `boolean`

___
<a id="isready"></a>

##  isReady

getisReady(): `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

*Defined in [promise/index.ts:170](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/promise/index.ts#L170)*

*__description__*: Promise that returns the first time we are connected and loaded

**Returns:** `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

___
<a id="query"></a>

##  query

getquery(): [QueryableStorage](../interfaces/_promise_types_.queryablestorage.md)

*Inherited from [ApiBase](_base_.apibase.md).[query](_base_.apibase.md#query)*

*Defined in [Base.ts:122](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L122)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** [QueryableStorage](../interfaces/_promise_types_.queryablestorage.md)

___
<a id="rpc"></a>

##  rpc

getrpc(): [DecoratedRpc](../interfaces/_promise_types_.decoratedrpc.md)

*Inherited from [ApiBase](_base_.apibase.md).[rpc](_base_.apibase.md#rpc)*

*Defined in [Base.ts:142](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L142)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** [DecoratedRpc](../interfaces/_promise_types_.decoratedrpc.md)

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `Metadata`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeMetadata](_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:93](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L93)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `Metadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeVersion](_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:102](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L102)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="tx"></a>

##  tx

gettx(): [SubmittableExtrinsics](../interfaces/_promise_types_.submittableextrinsics.md)

*Inherited from [ApiBase](_base_.apibase.md).[tx](_base_.apibase.md#tx)*

*Defined in [Base.ts:161](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L161)*

*__description__*: Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

*__example__*:   

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .sign(<keyPair>, <accountNonce>, <blockHash (optional)>)
  .send((status) => {
    console.log('tx status', status);
  });
```

**Returns:** [SubmittableExtrinsics](../interfaces/_promise_types_.submittableextrinsics.md)

___

# Methods

<a id="combinelatest"></a>

##  combineLatest

▸ **combineLatest**(fns: *`Array`<[CombinatorFunction](../modules/_promise_combinator_.md#combinatorfunction) | [[CombinatorFunction](../modules/_promise_combinator_.md#combinatorfunction), `Array`]>*, callback: *[CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)*): [UnsubFunction](../modules/_promise_types_.md#unsubfunction)

*Defined in [promise/index.ts:232](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/promise/index.ts#L232)*

*__description__*: Creates a combinator that can be used to combine the latest results from multiple subscriptions

*__example__*:   

```javascript
const address = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7';

// combines values from balance & nonce as it updates
api.combineLatest([
  api.rpc.chain.subscribeNewHead,
  [api.query.balances.freeBalance, address],
  (cb) => api.query.system.accountNonce(address, cb)
], ([head, balance, nonce]) => {
  console.log(`#${head.number}: You have ${balance} units, with ${nonce} transactions sent`);
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| fns | `Array`<[CombinatorFunction](../modules/_promise_combinator_.md#combinatorfunction) | [[CombinatorFunction](../modules/_promise_combinator_.md#combinatorfunction), `Array`]> |  An array of function to combine, each in the form of \`(cb: (value: void)) => void\` |
| callback | [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback) |  A callback that will return an Array of all the values this combinator has been applied to |

**Returns:** [UnsubFunction](../modules/_promise_types_.md#unsubfunction)

___
<a id="on"></a>

##  on

▸ **on**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Inherited from [ApiBase](_base_.apibase.md).[on](_base_.apibase.md#on)*

*Defined in [Base.ts:186](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L186)*

*__description__*: Attach an eventemitter handler to listen to a specific event

*__example__*:   

```javascript
api.on('connected', () => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ApiInterface$Events](../modules/_types_.md#apiinterface_events) |  The type of event to listen to. Available events are \`connected\`, \`disconnected\`, \`ready\` and \`error\` |
| handler | `function` |  The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments. |

**Returns:** `this`

___
<a id="once"></a>

##  once

▸ **once**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Inherited from [ApiBase](_base_.apibase.md).[once](_base_.apibase.md#once)*

*Defined in [Base.ts:211](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/Base.ts#L211)*

*__description__*: Attach an one-time eventemitter handler to listen to a specific event

*__example__*:   

```javascript
api.once('connected', () => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', () => {
  console.log('API has been disconnected from the endpoint');
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [ApiInterface$Events](../modules/_types_.md#apiinterface_events) |  The type of event to listen to. Available events are \`connected\`, \`disconnected\`, \`ready\` and \`error\` |
| handler | `function` |  The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments. |

**Returns:** `this`

___
<a id="create"></a>

## `<Static>` create

▸ **create**(options?: *[ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface`*): `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

*Defined in [promise/index.ts:133](https://github.com/polkadot-js/api/blob/bb7a5ac/packages/api/src/promise/index.ts#L133)*

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

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` options | [ApiOptions](../interfaces/_types_.apioptions.md) | `ProviderInterface` |  {} |  options that is passed to the class contructor. Can be either [ApiOptions](../interfaces/_types_.apioptions.md) or a provider (see the constructor arguments) |

**Returns:** `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

___

