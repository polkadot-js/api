

# Hierarchy

 [ApiBase](../classes/_base_.apibase.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

**↳ ApiPromiseInterface**

# Implements

* [ApiBaseInterface](_types_.apibaseinterface.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

# Implemented by

* [ApiPromise](../classes/_promise_index_.apipromise.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiPromiseInterface**(provider?: *[ApiOptions](_types_.apioptions.md) | `ProviderInterface`*, type: *[ApiType](../modules/_types_.md#apitype)*): [ApiPromiseInterface](_promise_types_.apipromiseinterface.md)

*Inherited from [ApiBase](../classes/_base_.apibase.md).[constructor](../classes/_base_.apibase.md#constructor)*

*Defined in [Base.ts:70](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L70)*

*__description__*: Create an instance of the class

*__example__*:   

```javascript
import Api from '@polkadot/api/promise';

const api = new Api().isReady();

api.rpc.subscribeNewHead((header) => {
  console.log(`new block #${header.blockNumber.toNumber()}`);
});
```

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` provider | [ApiOptions](_types_.apioptions.md) | `ProviderInterface` |  {} |
| type | [ApiType](../modules/_types_.md#apitype) | - |

**Returns:** [ApiPromiseInterface](_promise_types_.apipromiseinterface.md)

___

# Properties

<a id="isready"></a>

##  isReady

**● isReady**: *`Promise`<[ApiPromiseInterface](_promise_types_.apipromiseinterface.md)>*

*Defined in [promise/types.ts:16](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/promise/types.ts#L16)*

___

# Accessors

<a id="derive"></a>

##  derive

getderive(): [Derive](_types_.derive.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

*Inherited from [ApiBase](../classes/_base_.apibase.md).[derive](../classes/_base_.apibase.md#derive)*

*Defined in [Base.ts:165](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L165)*

*__description__*: Derived results that are injected into the API, allowing for combinations of various query results.

*__example__*:   

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** [Derive](_types_.derive.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

___
<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[genesisHash](../classes/_base_.apibase.md#genesishash)*

*Defined in [Base.ts:115](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L115)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[hasSubscriptions](../classes/_base_.apibase.md#hassubscriptions)*

*Defined in [Base.ts:124](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L124)*

*__description__*: `true` when subscriptions are supported

**Returns:** `boolean`

___
<a id="query"></a>

##  query

getquery(): [QueryableStorage](_types_.queryablestorage.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

*Inherited from [ApiBase](../classes/_base_.apibase.md).[query](../classes/_base_.apibase.md#query)*

*Defined in [Base.ts:185](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L185)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** [QueryableStorage](_types_.queryablestorage.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

___
<a id="rpc"></a>

##  rpc

getrpc(): [DecoratedRpc](_types_.decoratedrpc.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

*Inherited from [ApiBase](../classes/_base_.apibase.md).[rpc](../classes/_base_.apibase.md#rpc)*

*Defined in [Base.ts:205](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L205)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** [DecoratedRpc](_types_.decoratedrpc.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `Metadata`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[runtimeMetadata](../classes/_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:131](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L131)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `Metadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[runtimeVersion](../classes/_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:140](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L140)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="tx"></a>

##  tx

gettx(): [SubmittableExtrinsics](_types_.submittableextrinsics.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

*Inherited from [ApiBase](../classes/_base_.apibase.md).[tx](../classes/_base_.apibase.md#tx)*

*Defined in [Base.ts:223](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L223)*

*__description__*: Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

*__example__*:   

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalised.toHex());
  });
```

**Returns:** [SubmittableExtrinsics](_types_.submittableextrinsics.md)<[CodecResult](../modules/_promise_types_.md#codecresult), [SubscriptionResult](../modules/_promise_types_.md#subscriptionresult)>

___
<a id="type"></a>

##  type

gettype(): [ApiType](../modules/_types_.md#apitype)

*Inherited from [ApiBase](../classes/_base_.apibase.md).[type](../classes/_base_.apibase.md#type)*

*Defined in [Base.ts:149](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L149)*

*__description__*: The type of this API instance, either 'rxjs' or 'promise'

**Returns:** [ApiType](../modules/_types_.md#apitype)

___

# Methods

<a id="on"></a>

##  on

▸ **on**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[on](../classes/_base_.apibase.md#on)*

*Defined in [Base.ts:248](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L248)*

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

*Inherited from [ApiBase](../classes/_base_.apibase.md).[once](../classes/_base_.apibase.md#once)*

*Defined in [Base.ts:273](https://github.com/polkadot-js/api/blob/c1a6f02/packages/api/src/Base.ts#L273)*

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

