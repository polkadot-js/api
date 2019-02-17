

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
    .sign(keyring.alice, { nonce })
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

 [ApiBase](_base_.apibase.md)<[CodecResult](), [SubscriptionResult]()>

**↳ ApiPromise**

# Implements

* [ApiBaseInterface](../interfaces/_types_.apibaseinterface.md)<[CodecResult](), [SubscriptionResult]()>
* [ApiPromiseInterface](../interfaces/_promise_types_.apipromiseinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiPromise**(options?: *[ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface`*): [ApiPromise](_promise_index_.apipromise.md)

*Overrides [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [promise/index.ts:128](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/promise/index.ts#L128)*

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
| `Optional` options | [ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface` |  Options to create an instance. This can be either [ApiOptions](../interfaces/_types_.apioptions.md) or an \[\[HttpProvider\]\] or \[\[WsProvider\]\]. In the case of \[\[HttpProvider\]\] subscriptions are not supported, only latest values are returned. |

**Returns:** [ApiPromise](_promise_index_.apipromise.md)

___

# Accessors

<a id="derive"></a>

##  derive

getderive(): [Derive](../interfaces/_types_.derive.md)<[CodecResult](), [SubscriptionResult]()>

*Inherited from [ApiBase](_base_.apibase.md).[derive](_base_.apibase.md#derive)*

*Defined in [Base.ts:180](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L180)*

*__description__*: Derived results that are injected into the API, allowing for combinations of various query results.

*__example__*:   

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** [Derive](../interfaces/_types_.derive.md)<[CodecResult](), [SubscriptionResult]()>

___
<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:123](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L123)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Inherited from [ApiBase](_base_.apibase.md).[hasSubscriptions](_base_.apibase.md#hassubscriptions)*

*Defined in [Base.ts:132](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L132)*

*__description__*: `true` when subscriptions are supported

**Returns:** `boolean`

___
<a id="isready"></a>

##  isReady

getisReady(): `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

*Defined in [promise/index.ts:163](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/promise/index.ts#L163)*

*__description__*: Promise that returns the first time we are connected and loaded

**Returns:** `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

___
<a id="query"></a>

##  query

getquery(): [QueryableStorage](../interfaces/_types_.queryablestorage.md)<[CodecResult](), [SubscriptionResult]()>

*Inherited from [ApiBase](_base_.apibase.md).[query](_base_.apibase.md#query)*

*Defined in [Base.ts:200](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L200)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** [QueryableStorage](../interfaces/_types_.queryablestorage.md)<[CodecResult](), [SubscriptionResult]()>

___
<a id="rpc"></a>

##  rpc

getrpc(): [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)<[CodecResult](), [SubscriptionResult]()>

*Inherited from [ApiBase](_base_.apibase.md).[rpc](_base_.apibase.md#rpc)*

*Defined in [Base.ts:220](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L220)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** [DecoratedRpc](../interfaces/_types_.decoratedrpc.md)<[CodecResult](), [SubscriptionResult]()>

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `Metadata`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeMetadata](_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:139](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L139)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `Metadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeVersion](_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:148](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L148)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="tx"></a>

##  tx

gettx(): [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)<[CodecResult](), [SubscriptionResult]()>

*Inherited from [ApiBase](_base_.apibase.md).[tx](_base_.apibase.md#tx)*

*Defined in [Base.ts:238](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L238)*

*__description__*: Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

*__example__*:   

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalised.toHex());
  });
```

**Returns:** [SubmittableExtrinsics](../interfaces/_types_.submittableextrinsics.md)<[CodecResult](), [SubscriptionResult]()>

___
<a id="type"></a>

##  type

gettype(): [ApiType](../modules/_types_.md#apitype)

*Inherited from [ApiBase](_base_.apibase.md).[type](_base_.apibase.md#type)*

*Defined in [Base.ts:157](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L157)*

*__description__*: The type of this API instance, either 'rxjs' or 'promise'

**Returns:** [ApiType](../modules/_types_.md#apitype)

___

# Methods

<a id="clone"></a>

##  clone

▸ **clone**(): [ApiPromise](_promise_index_.apipromise.md)

*Defined in [promise/index.ts:170](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/promise/index.ts#L170)*

*__description__*: Returns a clone of this ApiPromise instance (new underlying provider connection)

**Returns:** [ApiPromise](_promise_index_.apipromise.md)

___
<a id="combinelatest"></a>

##  combineLatest

▸ **combineLatest**(fns: *`Array`<[CombinatorFunction](../modules/_promise_combinator_.md#combinatorfunction) \| [[CombinatorFunction](../modules/_promise_combinator_.md#combinatorfunction), `Array`]>*, callback: *[CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)*): [SubscriptionResult]()

*Defined in [promise/index.ts:197](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/promise/index.ts#L197)*

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
| fns | `Array`<[CombinatorFunction](../modules/_promise_combinator_.md#combinatorfunction) \| [[CombinatorFunction](../modules/_promise_combinator_.md#combinatorfunction), `Array`]> |  An array of function to combine, each in the form of \`(cb: (value: void)) => void\` |
| callback | [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback) |  A callback that will return an Array of all the values this combinator has been applied to |

**Returns:** [SubscriptionResult]()

___
<a id="disconnect"></a>

##  disconnect

▸ **disconnect**(): `void`

*Implementation of [ApiPromiseInterface](../interfaces/_promise_types_.apipromiseinterface.md).[disconnect](../interfaces/_promise_types_.apipromiseinterface.md#disconnect)*

*Inherited from [ApiBase](_base_.apibase.md).[disconnect](_base_.apibase.md#disconnect)*

*Defined in [Base.ts:247](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L247)*

*__description__*: Disconnect from the underlying provider, halting all comms

**Returns:** `void`

___
<a id="on"></a>

##  on

▸ **on**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Inherited from [ApiBase](_base_.apibase.md).[on](_base_.apibase.md#on)*

*Defined in [Base.ts:270](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L270)*

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

*Defined in [Base.ts:295](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L295)*

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
<a id="registertypes"></a>

##  registerTypes

▸ **registerTypes**(types?: *`RegistryTypes`*): `void`

*Implementation of [ApiPromiseInterface](../interfaces/_promise_types_.apipromiseinterface.md).[registerTypes](../interfaces/_promise_types_.apipromiseinterface.md#registertypes)*

*Inherited from [ApiBase](_base_.apibase.md).[registerTypes](_base_.apibase.md#registertypes)*

*Defined in [Base.ts:304](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L304)*

*__description__*: Register additional user-defined of chain-specific types in the type registry

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` types | `RegistryTypes` |

**Returns:** `void`

___
<a id="setsigner"></a>

##  setSigner

▸ **setSigner**(signer: *[Signer](../interfaces/_types_.signer.md)*): `void`

*Implementation of [ApiPromiseInterface](../interfaces/_promise_types_.apipromiseinterface.md).[setSigner](../interfaces/_promise_types_.apipromiseinterface.md#setsigner)*

*Inherited from [ApiBase](_base_.apibase.md).[setSigner](_base_.apibase.md#setsigner)*

*Defined in [Base.ts:164](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/Base.ts#L164)*

*__description__*: Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Signer](../interfaces/_types_.signer.md) |

**Returns:** `void`

___
<a id="create"></a>

## `<Static>` create

▸ **create**(options?: *[ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface`*): `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

*Defined in [promise/index.ts:126](https://github.com/polkadot-js/api/blob/29c83a0/packages/api/src/promise/index.ts#L126)*

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
| `Default value` options | [ApiOptions](../interfaces/_types_.apioptions.md) \| `ProviderInterface` |  {} |  options that is passed to the class contructor. Can be either [ApiOptions](../interfaces/_types_.apioptions.md) or a provider (see the constructor arguments) |

**Returns:** `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

___

