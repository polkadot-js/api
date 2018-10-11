

*__description__*: ApiPromise is a standard JavaScript wrapper around the RPC and interfaces on the Polkadot network. As a full Promise-based, all interface calls return Promises, including the static `.create(...)`. Subscription calls utilise standard JavaScript-convention `(error, value)` callbacks.

The API is well suited to real-time applications where either the single-shot state is needed or use is to be made of athe subscription-based features of Polkadot (and Substrate) clients.

*__example__*:   

Making rpc calls -  

```javascript
import ApiPromise from '@polkadot/api/promise';

// initialise via static create
const api = await ApiPromise.create();

// make a subscription to the network head
api.rpc.chain.newHead((error, header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```
  

Subscribing to chain state -  

```javascript
import { ApiPromise } from '@polkadot/api';
import WsProvider from '@polkadot/rpc-provider/ws';

// initialise via isReady & new with specific non-local endpoint
const api = await new ApiPromise(new WsProvider('wss://example.com:9944')).isReady;

// retrieve the block target time
const blockPeriod = await api.st.timestamp.blockPeriod().toNumber();
let last = 0;

// subscribe to the current block timestamp, updates automatically
api.st.timestamp.now((error, timestamp) => {
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
  const nonce = await api.st.system.accountNonce(keyring.alice.address());

  api.tx.balances
    // create transfer
    transfer(keyring.bob.address(), 12345)
    // sign the transcation
    .sign(keyring.alice, nonce)
    // send the transaction
    .send()
    // retrieve the overall result
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

*Defined in [promise/index.ts:113](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/promise/index.ts#L113)*

*__example__*:   
```javascript
import Api from '@polkadot/api/promise';

new Api().isReady.then((api) => {
  api.rpc.newHead((error, header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` wsProvider | `WsProvider` |  An optional WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port |

**Returns:** [ApiPromise](_promise_index_.apipromise.md)

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:68](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L68)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="isready"></a>

##  isReady

getisReady(): `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

*Defined in [promise/index.ts:143](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/promise/index.ts#L143)*

*__description__*: Promise that returns the first time we are connected and loaded

**Returns:** `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

___
<a id="rpc"></a>

##  rpc

getrpc(): `Rpc`

*Inherited from [ApiBase](_base_.apibase.md).[rpc](_base_.apibase.md#rpc)*

*Defined in [Base.ts:105](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L105)*

*__description__*: Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions.

*__example__*:   
```javascript
api.rpc.chain
  .newHead()
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

*Defined in [Base.ts:77](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L77)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `RuntimeMetadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Inherited from [ApiBase](_base_.apibase.md).[runtimeVersion](_base_.apibase.md#runtimeversion)*

*Defined in [Base.ts:86](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L86)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="st"></a>

##  st

getst(): `QueryableStorage`

*Inherited from [ApiBase](_base_.apibase.md).[st](_base_.apibase.md#st)*

*Defined in [Base.ts:122](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L122)*

*__description__*: Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

*__example__*:   
```javascript
api.st.balances
  .freeBalance(<accountId>)
  .subscribe((balance) => {
    console.log('new balance', balance);
  });
```

**Returns:** `QueryableStorage`

___
<a id="tx"></a>

##  tx

gettx(): `SubmittableExtrinsics`

*Inherited from [ApiBase](_base_.apibase.md).[tx](_base_.apibase.md#tx)*

*Defined in [Base.ts:143](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L143)*

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

*Defined in [Base.ts:149](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L149)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `ApiInterface$Events` |
| handler | `function` |

**Returns:** `void`

___
<a id="create"></a>

## `<Static>` create

▸ **create**(wsProvider?: *`WsProvider`*): `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

*Defined in [promise/index.ts:111](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/promise/index.ts#L111)*

*__description__*: Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.

*__example__*:   
```javascript
import Api from '@polkadot/api/promise';

Api.create().then(async (api) => {
  const timestamp = await api.st.timestamp.now();

  console.log(`lastest block timestamp ${timestamp}`);
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` wsProvider | `WsProvider` |  Optional WebSocket provider that is passed to the class contructor |

**Returns:** `Promise`<[ApiPromise](_promise_index_.apipromise.md)>

___

