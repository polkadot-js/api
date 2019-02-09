

# Hierarchy

 [ApiBase](../classes/_base_.apibase.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

**↳ ApiRxInterface**

# Implements

* [ApiBaseInterface](_types_.apibaseinterface.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

# Implemented by

* [ApiRx](../classes/_rx_index_.apirx.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiRxInterface**(provider?: *[ApiOptions](_types_.apioptions.md) | `ProviderInterface`*, type: *[ApiType](../modules/_types_.md#apitype)*): [ApiRxInterface](_rx_types_.apirxinterface.md)

*Inherited from [ApiBase](../classes/_base_.apibase.md).[constructor](../classes/_base_.apibase.md#constructor)*

*Defined in [Base.ts:72](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L72)*

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

**Returns:** [ApiRxInterface](_rx_types_.apirxinterface.md)

___

# Properties

<a id="isconnected"></a>

##  isConnected

**● isConnected**: *`Observable`<`boolean`>*

*Defined in [rx/types.ts:13](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/rx/types.ts#L13)*

___
<a id="isready"></a>

##  isReady

**● isReady**: *`Observable`<[ApiRxInterface](_rx_types_.apirxinterface.md)>*

*Defined in [rx/types.ts:14](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/rx/types.ts#L14)*

___

# Accessors

<a id="derive"></a>

##  derive

getderive(): [Derive](_types_.derive.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

*Inherited from [ApiBase](../classes/_base_.apibase.md).[derive](../classes/_base_.apibase.md#derive)*

*Defined in [Base.ts:180](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L180)*

*__description__*: Derived results that are injected into the API, allowing for combinations of various query results.

*__example__*:   

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** [Derive](_types_.derive.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

___
<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[genesisHash](../classes/_base_.apibase.md#genesishash)*

*Defined in [Base.ts:123](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L123)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[hasSubscriptions](../classes/_base_.apibase.md#hassubscriptions)*

*Defined in [Base.ts:132](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L132)*

*__description__*: `true` when subscriptions are supported

**Returns:** `boolean`

___
<a id="query"></a>

##  query

getquery(): [QueryableStorage](_types_.queryablestorage.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

*Inherited from [ApiBase](../classes/_base_.apibase.md).[query](../classes/_base_.apibase.md#query)*

*Defined in [Base.ts:200](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L200)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** [QueryableStorage](_types_.queryablestorage.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

___
<a id="rpc"></a>

##  rpc

getrpc(): [DecoratedRpc](_types_.decoratedrpc.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

*Inherited from [ApiBase](../classes/_base_.apibase.md).[rpc](../classes/_base_.apibase.md#rpc)*

*Defined in [Base.ts:220](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L220)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** [DecoratedRpc](_types_.decoratedrpc.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `Metadata`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[runtimeMetadata](../classes/_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:139](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L139)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `Metadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[runtimeVersion](../classes/_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:148](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L148)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="tx"></a>

##  tx

gettx(): [SubmittableExtrinsics](_types_.submittableextrinsics.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

*Inherited from [ApiBase](../classes/_base_.apibase.md).[tx](../classes/_base_.apibase.md#tx)*

*Defined in [Base.ts:238](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L238)*

*__description__*: Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

*__example__*:   

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalised.toHex());
  });
```

**Returns:** [SubmittableExtrinsics](_types_.submittableextrinsics.md)<[RxResult](../modules/_rx_types_.md#rxresult), [RxResult](../modules/_rx_types_.md#rxresult)>

___
<a id="type"></a>

##  type

gettype(): [ApiType](../modules/_types_.md#apitype)

*Inherited from [ApiBase](../classes/_base_.apibase.md).[type](../classes/_base_.apibase.md#type)*

*Defined in [Base.ts:157](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L157)*

*__description__*: The type of this API instance, either 'rxjs' or 'promise'

**Returns:** [ApiType](../modules/_types_.md#apitype)

___

# Methods

<a id="disconnect"></a>

##  disconnect

▸ **disconnect**(): `void`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[disconnect](../classes/_base_.apibase.md#disconnect)*

*Defined in [Base.ts:247](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L247)*

*__description__*: Disconnect from the underlying provider, halting all comms

**Returns:** `void`

___
<a id="on"></a>

##  on

▸ **on**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[on](../classes/_base_.apibase.md#on)*

*Defined in [Base.ts:270](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L270)*

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

*Defined in [Base.ts:295](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L295)*

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
<a id="setsigner"></a>

##  setSigner

▸ **setSigner**(signer: *[Signer](_types_.signer.md)*): `void`

*Inherited from [ApiBase](../classes/_base_.apibase.md).[setSigner](../classes/_base_.apibase.md#setsigner)*

*Defined in [Base.ts:164](https://github.com/polkadot-js/api/blob/b960580/packages/api/src/Base.ts#L164)*

*__description__*: Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Signer](_types_.signer.md) |

**Returns:** `void`

___

