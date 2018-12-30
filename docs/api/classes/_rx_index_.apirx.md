

@polkadot/api/rx
================

Overview
--------
*__name__*: ApiRx

*__description__*: ApiRx is a powerfull RxJS Observable wrapper around the RPC and interfaces on the Polkadot network. As a full Observable API, all interface calls return RxJS Observables, including the static `.create(...)`. In the same fashion and subscription-based methods return long-running Observables that update with the latest values.

The API is well suited to real-time applications where the latest state is needed, unlocking the subscription-based features of Polkadot (and Substrate) clients. Some familiarity with RxJS is a requirement to use the API, however just understanding `.subscribe` and `.pipe` on Observables will unlock full-scale use thereof.

*__see__*: [ApiPromise](_promise_index_.apipromise.md)

Usage
-----

Making rpc calls -  

```javascript
import ApiRx from '@polkadot/api/rx';

// initialise via Promise & static create
const api = await ApiRx.create().toPromise();

// make a call to retrieve the current network head
api.rpc.chain.subscribeNewHead().subscribe((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```

  

Subscribing to chain state -  

```javascript
import { combineLatest } from 'rxjs';
import { ApiRx } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';

// last block timestamp
let last = 0;

// initialise a provider with a specific endpoint
const provider = new WsProvider('wss://example.com:9944')

// initialise via isReady & new with specific provider
new ApiRx(provider)
  .isReady
  .pipe(
    switchMap((api) =>
      combineLatest([
        api.query.timestamp.blockPeriod(),
        api.query.timestamp.now()
      ])
  )
  .subscribe(([blockPeriod, timestamp]) => {
    const elapsed = last
      ? `, ${timestamp.toNumber() - last}s since last`
      : '';

    last = timestamp.toNumber();
    console.log(`timestamp ${timestamp}${elapsed} (${blockPeriod}s target)`);
  });
```

  

Submitting a transaction -  

```javascript
import ApiRx from '@polkadot/api/rx';

// get api via Promise
const api = await ApiRx.create().toPromise();

// retrieve nonce for the account
api.query.system
  .accountNonce(keyring.alice.address())
  .pipe(
     // pipe nonce into transfer
     switchMap((nonce) =>
       api.tx.balances
         // create transfer
         .transfer(keyring.bob.address(), 12345)
         // sign the transcation
         .sign(keyring.alice, nonce)
         // send the transaction
         .send()
     )
  )
  // subscribe to overall result
  .subscribe((hash) => {
    console.log(`submitted with hash ${hash}`);
  });
```

# Hierarchy

 [ApiBase](_base_.apibase.md)<`RpcRx`, [QueryableStorage](../interfaces/_rx_types_.queryablestorage.md), [SubmittableExtrinsics](../interfaces/_rx_types_.submittableextrinsics.md)>

**↳ ApiRx**

# Implements

* [ApiBaseInterface](../interfaces/_types_.apibaseinterface.md)<`RpcRx`, [QueryableStorage](../interfaces/_rx_types_.queryablestorage.md), [SubmittableExtrinsics](../interfaces/_rx_types_.submittableextrinsics.md)>
* [ApiRxInterface](../interfaces/_rx_types_.apirxinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiRx**(options?: * [ApiOptions](../interfaces/_types_.apioptions.md) &#124; `ProviderInterface`*): [ApiRx](_rx_index_.apirx.md)

*Overrides [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [rx/index.ts:143](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/rx/index.ts#L143)*

*__description__*: Create an instance of the ApiRx class

*__example__*:   

```javascript
import Api from '@polkadot/api/rx';

new Api().isReady.subscribe((api) => {
  api.rpc.subscribeNewHead().subscribe((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options |  [ApiOptions](../interfaces/_types_.apioptions.md) &#124; `ProviderInterface`|  Options to create an instance. Can be either [ApiOptions](../interfaces/_types_.apioptions.md) or \[\[WsProvider\]\] |

**Returns:** [ApiRx](_rx_index_.apirx.md)

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:77](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L77)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Inherited from [ApiBase](_base_.apibase.md).[hasSubscriptions](_base_.apibase.md#hassubscriptions)*

*Defined in [Base.ts:86](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L86)*

*__description__*: `true` when subscriptions are supported

**Returns:** `boolean`

___
<a id="isconnected"></a>

##  isConnected

getisConnected(): `Observable`<`boolean`>

*Defined in [rx/index.ts:181](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/rx/index.ts#L181)*

*__description__*: Observable that carries the connected state for the provider. Results in a boolean flag that is true/false based on the connectivity.

**Returns:** `Observable`<`boolean`>

___
<a id="isready"></a>

##  isReady

getisReady(): `Observable`<[ApiRx](_rx_index_.apirx.md)>

*Defined in [rx/index.ts:188](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/rx/index.ts#L188)*

*__description__*: Observable that returns the first time we are connected and loaded

**Returns:** `Observable`<[ApiRx](_rx_index_.apirx.md)>

___
<a id="query"></a>

##  query

getquery(): [QueryableStorage](../interfaces/_rx_types_.queryablestorage.md)

*Inherited from [ApiBase](_base_.apibase.md).[query](_base_.apibase.md#query)*

*Defined in [Base.ts:122](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L122)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.accountNonce(<accountId>)` (retrieving the associated nonce for an account), takes the `AccountId` as a parameter.

*__example__*:   

```javascript
api.query.balances.freeBalance(<accountId>, (balance) => {
  console.log('new balance', balance);
});
```

**Returns:** [QueryableStorage](../interfaces/_rx_types_.queryablestorage.md)

___
<a id="rpc"></a>

##  rpc

getrpc(): `RpcRx`

*Inherited from [ApiBase](_base_.apibase.md).[rpc](_base_.apibase.md#rpc)*

*Defined in [Base.ts:142](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L142)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (usine known keys) and the submission of transactions.

*__example__*:   

```javascript
api.rpc.chain.subscribeNewHead((header) => {
  console.log('new header', header);
});
```

**Returns:** `RpcRx`

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `Metadata`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeMetadata](_base_.apibase.md#runtimemetadata)*

*Defined in [Base.ts:93](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L93)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `Metadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeVersion](_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:102](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L102)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="tx"></a>

##  tx

gettx(): [SubmittableExtrinsics](../interfaces/_rx_types_.submittableextrinsics.md)

*Inherited from [ApiBase](_base_.apibase.md).[tx](_base_.apibase.md#tx)*

*Defined in [Base.ts:161](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L161)*

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

**Returns:** [SubmittableExtrinsics](../interfaces/_rx_types_.submittableextrinsics.md)

___

# Methods

<a id="on"></a>

##  on

▸ **on**(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

*Inherited from [ApiBase](_base_.apibase.md).[on](_base_.apibase.md#on)*

*Defined in [Base.ts:186](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L186)*

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

*Defined in [Base.ts:210](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/Base.ts#L210)*

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

▸ **create**(options?: * [ApiOptions](../interfaces/_types_.apioptions.md) &#124; `ProviderInterface`*): `Observable`<[ApiRx](_rx_index_.apirx.md)>

*Defined in [rx/index.ts:141](https://github.com/polkadot-js/api/blob/f923cab/packages/api/src/rx/index.ts#L141)*

*__description__*: Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.

*__example__*:   

```javascript
import Api from '@polkadot/api/rx';

Api.create().subscribe((api) => {
  api.query.timestamp.now.subscribe((timestamp) => {
    console.log(`lastest block timestamp ${timestamp}`);
  });
});
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options |  [ApiOptions](../interfaces/_types_.apioptions.md) &#124; `ProviderInterface`|  options that is passed to the class contructor. Can be either [ApiOptions](../interfaces/_types_.apioptions.md) or \[\[WsProvider\]\] |

**Returns:** `Observable`<[ApiRx](_rx_index_.apirx.md)>

___

