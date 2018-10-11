

*__description__*: ApiRx is a powerfull RxJS Observable wrapper around the RPC and interfaces on the Polkadot network. As a full Observable API, all interface calls return RxJS Observables, including the static `.create(...)`. In the same fashion and subscription-based methods return long-running Observables that update with the latest values.

The API is well suited to real-time applications where the latest state is needed, unlocking the subscription-based features of Polkadot (and Substrate) clients. Some familiarity with RxJS is a requirement to use the API, however just understanding `.subscribe` and `.pipe` on Observables will unlock full-scale use thereof.

*__example__*:   

Making rpc calls -  

```javascript
import ApiRx from '@polkadot/api/rx';

// initialise via Promise & static create
const api = await ApiRx.create().toPromise();

// make a call to retrieve the current network head
api.rpc.chain.newHead().subscribe((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```
  

Subscribing to chain state -  

```javascript
import { ApiRx } from '@polkadot/api';
import WsProvider from '@polkadot/rpc-provider/ws';
import { combineLatest } from 'rxjs';

let last = 0;

// initialise via isReady & new with specific non-local endpoint
new ApiRx(new WsProvider('wss://example.com:9944'))
  .isReady
  .pipe(
    switchMap((api) =>
      combineLatest([
        api.st.timestamp.blockPeriod(),
        api.st.timestamp.now()
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
api.st.system
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

 [ApiBase](_base_.apibase.md)<`RpcRx`, `QueryableStorage`, `SubmittableExtrinsics`>

**↳ ApiRx**

# Implements

* `ApiBaseInterface`<`RpcRx`, `QueryableStorage`, `SubmittableExtrinsics`>
* `ApiRxInterface`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiRx**(wsProvider?: *`WsProvider`*): [ApiRx](_rx_index_.apirx.md)

*Overrides [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [rx/index.ts:130](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/rx/index.ts#L130)*

*__example__*:   
```javascript
import Api from '@polkadot/api/rx';

new Api().isReady.subscribe((api) => {
  api.rpc.newHead().subscribe((header) => {
    console.log(`new block #${header.blockNumber.toNumber()}`);
  });
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` wsProvider | `WsProvider` |  An optional WebSocket provider from rpc-provider/ws. If not specified, it will default to connecting to the localhost with the default port |

**Returns:** [ApiRx](_rx_index_.apirx.md)

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
<a id="isconnected"></a>

##  isConnected

getisConnected(): `Observable`<`boolean`>

*Defined in [rx/index.ts:163](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/rx/index.ts#L163)*

*__description__*: Observable that carries the connected state for the provider. Results in a boolean flag that is true/false based on the connectivity.

**Returns:** `Observable`<`boolean`>

___
<a id="isready"></a>

##  isReady

getisReady(): `Observable`<[ApiRx](_rx_index_.apirx.md)>

*Defined in [rx/index.ts:170](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/rx/index.ts#L170)*

*__description__*: Observable that returns the first time we are connected and loaded

**Returns:** `Observable`<[ApiRx](_rx_index_.apirx.md)>

___
<a id="rpc"></a>

##  rpc

getrpc(): `RpcRx`

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

**Returns:** `RpcRx`

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

▸ **create**(wsProvider?: *`WsProvider`*): `Observable`<[ApiRx](_rx_index_.apirx.md)>

*Defined in [rx/index.ts:128](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/rx/index.ts#L128)*

*__description__*: Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.

*__example__*:   
```javascript
import Api from '@polkadot/api/rx';

Api.create().subscribe((api) => {
  api.st.timestamp.now.subscribe((timestamp) => {
    console.log(`lastest block timestamp ${timestamp}`);
  });
});
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` wsProvider | `WsProvider` |  Optional WebSocket provider that is passed to the class contructor |

**Returns:** `Observable`<[ApiRx](_rx_index_.apirx.md)>

___

