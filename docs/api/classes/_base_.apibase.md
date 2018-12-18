

# Type parameters
#### R 
#### S 
#### E 
# Hierarchy

**ApiBase**

↳  [ApiPromise](_promise_index_.apipromise.md)

↳  [ApiRx](_rx_index_.apirx.md)

# Implements

* [ApiBaseInterface](../interfaces/_types_.apibaseinterface.md)<`R`, `S`, `E`>

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(provider?: * [ApiOptions](../interfaces/_types_.apioptions.md) &#124; `ProviderInterface`*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L40)*

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
| `Default value` provider |  [ApiOptions](../interfaces/_types_.apioptions.md) &#124; `ProviderInterface`|  {} |

**Returns:** [ApiBase](_base_.apibase.md)

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Defined in [Base.ts:79](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L79)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Defined in [Base.ts:88](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L88)*

*__description__*: `true` when subscriptions are supported

**Returns:** `boolean`

___
<a id="query"></a>

##  query

getquery(): `S`

*Defined in [Base.ts:124](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L124)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** `S`

___
<a id="rpc"></a>

##  rpc

getrpc(): `R`

*Defined in [Base.ts:144](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L144)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** `R`

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `RuntimeMetadata`

*Defined in [Base.ts:95](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L95)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `RuntimeMetadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Defined in [Base.ts:104](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L104)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="tx"></a>

##  tx

gettx(): `E`

*Defined in [Base.ts:163](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L163)*

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

**Returns:** `E`

___

# Methods

<a id="on"></a>

##  on

▸ **on**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Defined in [Base.ts:188](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L188)*

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

*Defined in [Base.ts:212](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/Base.ts#L212)*

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

