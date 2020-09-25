**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api/src/promise/Api"](../modules/_packages_api_src_promise_api_.md) / ApiPromise

# Class: ApiPromise

# @polkadot/api/promise

## Overview

**`name`** ApiPromise

**`description`** 
ApiPromise is a standard JavaScript wrapper around the RPC and interfaces on the Polkadot network. As a full Promise-based, all interface calls return Promises, including the static `.create(...)`. Subscription calls utilise `(value) => {}` callbacks to pass through the latest values.

The API is well suited to real-time applications where either the single-shot state is needed or use is to be made of the subscription-based features of Polkadot (and Substrate) clients.

**`see`** [ApiRx](_packages_api_src_rx_api_.apirx.md)

## Usage

Making rpc calls -
<BR>

```javascript
import ApiPromise from '@polkadot/api/promise';

// initialise via static create
const api = await ApiPromise.create();

// make a subscription to the network head
api.rpc.chain.subscribeNewHeads((header) => {
  console.log(`Chain is at #${header.number}`);
});
```
<BR>

Subscribing to chain state -
<BR>

```javascript
import { ApiPromise, WsProvider } from '@polkadot/api';

// initialise a provider with a specific endpoint
const provider = new WsProvider('wss://example.com:9944')

// initialise via isReady & new with specific provider
const api = await new ApiPromise({ provider }).isReady;

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
<BR>

Submitting a transaction -
<BR>

```javascript
import ApiPromise from '@polkadot/api/promise';

ApiPromise.create().then((api) => {
  const [nonce] = await api.query.system.account(keyring.alice.address);

  api.tx.balances
    // create transfer
    transfer(keyring.bob.address, 12345)
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

## Hierarchy

* ApiBase\<\"promise\">

  ↳ **ApiPromise**

## Index

### Constructors

* [constructor](_packages_api_src_promise_api_.apipromise.md#constructor)

### Accessors

* [consts](_packages_api_src_promise_api_.apipromise.md#consts)
* [derive](_packages_api_src_promise_api_.apipromise.md#derive)
* [extrinsicVersion](_packages_api_src_promise_api_.apipromise.md#extrinsicversion)
* [genesisHash](_packages_api_src_promise_api_.apipromise.md#genesishash)
* [hasSubscriptions](_packages_api_src_promise_api_.apipromise.md#hassubscriptions)
* [isConnected](_packages_api_src_promise_api_.apipromise.md#isconnected)
* [isReady](_packages_api_src_promise_api_.apipromise.md#isready)
* [isReadyOrError](_packages_api_src_promise_api_.apipromise.md#isreadyorerror)
* [libraryInfo](_packages_api_src_promise_api_.apipromise.md#libraryinfo)
* [query](_packages_api_src_promise_api_.apipromise.md#query)
* [queryMulti](_packages_api_src_promise_api_.apipromise.md#querymulti)
* [registry](_packages_api_src_promise_api_.apipromise.md#registry)
* [rpc](_packages_api_src_promise_api_.apipromise.md#rpc)
* [runtimeChain](_packages_api_src_promise_api_.apipromise.md#runtimechain)
* [runtimeMetadata](_packages_api_src_promise_api_.apipromise.md#runtimemetadata)
* [runtimeVersion](_packages_api_src_promise_api_.apipromise.md#runtimeversion)
* [rx](_packages_api_src_promise_api_.apipromise.md#rx)
* [tx](_packages_api_src_promise_api_.apipromise.md#tx)
* [type](_packages_api_src_promise_api_.apipromise.md#type)

### Methods

* [clone](_packages_api_src_promise_api_.apipromise.md#clone)
* [combineLatest](_packages_api_src_promise_api_.apipromise.md#combinelatest)
* [connect](_packages_api_src_promise_api_.apipromise.md#connect)
* [createType](_packages_api_src_promise_api_.apipromise.md#createtype)
* [disconnect](_packages_api_src_promise_api_.apipromise.md#disconnect)
* [findCall](_packages_api_src_promise_api_.apipromise.md#findcall)
* [findError](_packages_api_src_promise_api_.apipromise.md#finderror)
* [getBlockRegistry](_packages_api_src_promise_api_.apipromise.md#getblockregistry)
* [injectMetadata](_packages_api_src_promise_api_.apipromise.md#injectmetadata)
* [off](_packages_api_src_promise_api_.apipromise.md#off)
* [on](_packages_api_src_promise_api_.apipromise.md#on)
* [once](_packages_api_src_promise_api_.apipromise.md#once)
* [registerTypes](_packages_api_src_promise_api_.apipromise.md#registertypes)
* [setSigner](_packages_api_src_promise_api_.apipromise.md#setsigner)
* [sign](_packages_api_src_promise_api_.apipromise.md#sign)
* [create](_packages_api_src_promise_api_.apipromise.md#create)

## Constructors

### constructor

\+ **new ApiPromise**(`options?`: ApiOptions): [ApiPromise](_packages_api_src_promise_api_.apipromise.md)

*Overrides void*

*Defined in [packages/api/src/promise/Api.ts:220](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/promise/Api.ts#L220)*

**`description`** Creates an instance of the ApiPromise class

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';

new Api().isReady.then((api) => {
  api.rpc.subscribeNewHeads((header) => {
    console.log(`new block #${header.number.toNumber()}`);
  });
});
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options?` | ApiOptions | Options to create an instance. This can be either [[ApiOptions]] or an [[WsProvider]]. |

**Returns:** [ApiPromise](_packages_api_src_promise_api_.apipromise.md)

## Accessors

### consts

• get **consts**(): [QueryableConsts](../interfaces/_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md)\<\"promise\">

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[consts](_packages_api_src_promise_api_.apipromise.md#consts)*

*Defined in [packages/api/src/base/index.ts:78](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L78)*

**`description`** Contains the parameter types (constants) of all modules.

The values are instances of the appropriate type and are accessible using `section`.`constantName`,

**`example`** 
<BR>

```javascript
console.log(api.consts.democracy.enactmentPeriod.toString())
```

**Returns:** [QueryableConsts](../interfaces/_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md)\<\"promise\">

___

### derive

• get **derive**(): ReturnType\<ApiBase\<\"promise\">[\"\_decorateDerive\"]>

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[derive](_packages_api_src_promise_api_.apipromise.md#derive)*

*Defined in [packages/api/src/base/index.ts:94](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L94)*

**`description`** Derived results that are injected into the API, allowing for combinations of various query results.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((number) => {
  console.log('best number', number);
});
```

**Returns:** ReturnType\<ApiBase\<\"promise\">[\"\_decorateDerive\"]>

___

### extrinsicVersion

• get **extrinsicVersion**(): number

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[extrinsicVersion](_packages_api_src_promise_api_.apipromise.md#extrinsicversion)*

*Defined in [packages/api/src/base/index.ts:101](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L101)*

**`description`** Returns the version of extrinsics in-use on this chain

**Returns:** number

___

### genesisHash

• get **genesisHash**(): Hash

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[genesisHash](_packages_api_src_promise_api_.apipromise.md#genesishash)*

*Defined in [packages/api/src/base/index.ts:108](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L108)*

**`description`** Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** Hash

___

### hasSubscriptions

• get **hasSubscriptions**(): boolean

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[hasSubscriptions](_packages_api_src_promise_api_.apipromise.md#hassubscriptions)*

*Overrides [Decorate](_packages_api_src_base_decorate_.decorate.md).[hasSubscriptions](_packages_api_src_base_decorate_.decorate.md#hassubscriptions)*

*Defined in [packages/api/src/base/index.ts:115](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L115)*

**`description`** `true` when subscriptions are supported

**Returns:** boolean

___

### isConnected

• get **isConnected**(): boolean

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[isConnected](_packages_api_src_promise_api_.apipromise.md#isconnected)*

*Defined in [packages/api/src/base/index.ts:122](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L122)*

**`description`** true is the underlying provider is connected

**Returns:** boolean

___

### isReady

• get **isReady**(): Promise\<[ApiPromise](_packages_api_src_promise_api_.apipromise.md)>

*Defined in [packages/api/src/promise/Api.ts:261](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/promise/Api.ts#L261)*

**`description`** Promise that resolves the first time we are connected and loaded

**Returns:** Promise\<[ApiPromise](_packages_api_src_promise_api_.apipromise.md)>

___

### isReadyOrError

• get **isReadyOrError**(): Promise\<[ApiPromise](_packages_api_src_promise_api_.apipromise.md)>

*Defined in [packages/api/src/promise/Api.ts:268](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/promise/Api.ts#L268)*

**`description`** Promise that resolves if we can connect, or reject if there is an error

**Returns:** Promise\<[ApiPromise](_packages_api_src_promise_api_.apipromise.md)>

___

### libraryInfo

• get **libraryInfo**(): string

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[libraryInfo](_packages_api_src_promise_api_.apipromise.md#libraryinfo)*

*Defined in [packages/api/src/base/index.ts:129](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L129)*

**`description`** The library information name & version (from package.json)

**Returns:** string

___

### query

• get **query**(): [QueryableStorage](../interfaces/_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md)\<\"promise\">

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[query](_packages_api_src_promise_api_.apipromise.md#query)*

*Defined in [packages/api/src/base/index.ts:147](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L147)*

**`description`** Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.

All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.account(<accountId>)` (retrieving the associated nonce & balances for an account), takes the `AccountId` as a parameter.

**`example`** 
<BR>

```javascript
api.query.system.account(<accountId>, ([nonce, balance]) => {
  console.log('new free balance', balance.free, 'new nonce', nonce);
});
```

**Returns:** [QueryableStorage](../interfaces/_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md)\<\"promise\">

___

### queryMulti

• get **queryMulti**(): [QueryableStorageMulti](../modules/_packages_api_src_types_storage_.md#queryablestoragemulti)\<\"promise\">

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[queryMulti](_packages_api_src_promise_api_.apipromise.md#querymulti)*

*Defined in [packages/api/src/base/index.ts:173](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L173)*

**`description`** Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.

**`example`** 
<BR>

```javascript
const unsub = await api.queryMulti(
  [
    // you can include the storage without any parameters
    api.query.balances.totalIssuance,
    // or you can pass parameters to the storage query
    [api.query.system.account, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
  ],
  ([existential, [, { free }]]) => {
    console.log(`You have ${free.sub(existential)} more than the existential deposit`);

    unsub();
  }
);
```

**Returns:** [QueryableStorageMulti](../modules/_packages_api_src_types_storage_.md#queryablestoragemulti)\<\"promise\">

___

### registry

• get **registry**(): Registry

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[registry](_packages_api_src_base_decorate_.decorate.md#registry)*

*Defined in [packages/api/src/base/Decorate.ts:149](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/Decorate.ts#L149)*

**`description`** Return the current used registry

**Returns:** Registry

___

### rpc

• get **rpc**(): [DecoratedRpc](../modules/_packages_api_src_types_rpc_.md#decoratedrpc)\<\"promise\", [RpcInterface](../interfaces/_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md)>

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[rpc](_packages_api_src_promise_api_.apipromise.md#rpc)*

*Defined in [packages/api/src/base/index.ts:191](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L191)*

**`description`** Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.

RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (using known keys) and the submission of transactions.

**`example`** 
<BR>

```javascript
api.rpc.chain.subscribeNewHeads((header) => {
  console.log('new header', header);
});
```

**Returns:** [DecoratedRpc](../modules/_packages_api_src_types_rpc_.md#decoratedrpc)\<\"promise\", [RpcInterface](../interfaces/_packages_api_src_augment_rpc_._rpc_core_types_.rpcinterface.md)>

___

### runtimeChain

• get **runtimeChain**(): Text

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[runtimeChain](_packages_api_src_promise_api_.apipromise.md#runtimechain)*

*Defined in [packages/api/src/base/index.ts:198](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L198)*

**`description`** Contains the chain information for the current node.

**Returns:** Text

___

### runtimeMetadata

• get **runtimeMetadata**(): Metadata

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[runtimeMetadata](_packages_api_src_promise_api_.apipromise.md#runtimemetadata)*

*Defined in [packages/api/src/base/index.ts:205](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L205)*

**`description`** Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** Metadata

___

### runtimeVersion

• get **runtimeVersion**(): RuntimeVersion

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[runtimeVersion](_packages_api_src_promise_api_.apipromise.md#runtimeversion)*

*Defined in [packages/api/src/base/index.ts:212](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L212)*

**`description`** Contains the version information for the current runtime.

**Returns:** RuntimeVersion

___

### rx

• get **rx**(): Pick\<ApiInterfaceRx, \"tx\" \| \"rpc\">

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[rx](_packages_api_src_promise_api_.apipromise.md#rx)*

*Defined in [packages/api/src/base/index.ts:219](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L219)*

**`description`** The underlying Rx API interface

**Returns:** Pick\<ApiInterfaceRx, \"tx\" \| \"rpc\">

___

### tx

• get **tx**(): [SubmittableExtrinsics](../interfaces/_packages_api_src_augment_tx_._api_types_submittable_.submittableextrinsics.md)\<\"promise\">

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[tx](_packages_api_src_promise_api_.apipromise.md#tx)*

*Defined in [packages/api/src/base/index.ts:244](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L244)*

**`description`** Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.

**`example`** 
<BR>

```javascript
api.tx.balances
  .transfer(<recipientId>, <balance>)
  .signAndSend(<keyPair>, ({status}) => {
    console.log('tx status', status.asFinalized.toHex());
  });
```

**Returns:** [SubmittableExtrinsics](../interfaces/_packages_api_src_augment_tx_._api_types_submittable_.submittableextrinsics.md)\<\"promise\">

___

### type

• get **type**(): [ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes)

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[type](_packages_api_src_promise_api_.apipromise.md#type)*

*Defined in [packages/api/src/base/index.ts:226](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L226)*

**`description`** The type of this API instance, either 'rxjs' or 'promise'

**Returns:** [ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes)

## Methods

### clone

▸ **clone**(): [ApiPromise](_packages_api_src_promise_api_.apipromise.md)

*Defined in [packages/api/src/promise/Api.ts:275](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/promise/Api.ts#L275)*

**`description`** Returns a clone of this ApiPromise instance (new underlying provider connection)

**Returns:** [ApiPromise](_packages_api_src_promise_api_.apipromise.md)

___

### combineLatest

▸ **combineLatest**\<T>(`fns`: ([CombinatorFunction](../interfaces/_packages_api_src_promise_combinator_.combinatorfunction.md) \| [[CombinatorFunction](../interfaces/_packages_api_src_promise_combinator_.combinatorfunction.md), any])[], `callback`: [CombinatorCallback](../modules/_packages_api_src_promise_combinator_.md#combinatorcallback)\<T>): [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

*Defined in [packages/api/src/promise/Api.ts:302](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/promise/Api.ts#L302)*

**`description`** Creates a combinator that can be used to combine the latest results from multiple subscriptions

**`example`** 
<BR>

```javascript
const address = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7';

// combines values from balance & nonce as it updates
api.combineLatest([
  api.rpc.chain.subscribeNewHeads,
  (cb) => api.query.system.account(address, cb)
], ([head, [balance, nonce]]) => {
  console.log(`#${head.number}: You have ${balance.free} units, with ${nonce} transactions sent`);
});
```

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | any[] | any[] |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fns` | ([CombinatorFunction](../interfaces/_packages_api_src_promise_combinator_.combinatorfunction.md) \| [[CombinatorFunction](../interfaces/_packages_api_src_promise_combinator_.combinatorfunction.md), any])[] | An array of function to combine, each in the form of `(cb: (value: void)) => void` |
`callback` | [CombinatorCallback](../modules/_packages_api_src_promise_combinator_.md#combinatorcallback)\<T> | A callback that will return an Array of all the values this combinator has been applied to |

**Returns:** [UnsubscribePromise](../modules/_packages_api_src_types_base_.md#unsubscribepromise)

___

### connect

▸ **connect**(): Promise\<void>

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[connect](_packages_api_src_promise_api_.apipromise.md#connect)*

*Defined in [packages/api/src/base/index.ts:251](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L251)*

**`description`** Connect from the underlying provider, halting all network traffic

**Returns:** Promise\<void>

___

### createType

▸ **createType**\<K>(`type`: K, ...`params`: unknown[]): InterfaceTypes[K]

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[createType](_packages_api_src_base_decorate_.decorate.md#createtype)*

*Defined in [packages/api/src/base/Decorate.ts:156](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/Decorate.ts#L156)*

**`description`** Creates an instance of a type as registered

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof InterfaceTypes |

#### Parameters:

Name | Type |
------ | ------ |
`type` | K |
`...params` | unknown[] |

**Returns:** InterfaceTypes[K]

___

### disconnect

▸ **disconnect**(): Promise\<void>

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[disconnect](_packages_api_src_promise_api_.apipromise.md#disconnect)*

*Defined in [packages/api/src/base/index.ts:258](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L258)*

**`description`** Disconnect from the underlying provider, halting all network traffic

**Returns:** Promise\<void>

___

### findCall

▸ **findCall**(`callIndex`: Uint8Array \| string): CallFunction

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[findCall](_packages_api_src_promise_api_.apipromise.md#findcall)*

*Defined in [packages/api/src/base/index.ts:265](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L265)*

**`description`** Finds the definition for a specific [[CallFunction]] based on the index supplied

#### Parameters:

Name | Type |
------ | ------ |
`callIndex` | Uint8Array \| string |

**Returns:** CallFunction

___

### findError

▸ **findError**(`errorIndex`: Uint8Array \| string): RegistryError

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[findError](_packages_api_src_promise_api_.apipromise.md#finderror)*

*Defined in [packages/api/src/base/index.ts:272](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L272)*

**`description`** Finds the definition for a specific [[RegistryError]] based on the index supplied

#### Parameters:

Name | Type |
------ | ------ |
`errorIndex` | Uint8Array \| string |

**Returns:** RegistryError

___

### getBlockRegistry

▸ **getBlockRegistry**(`blockHash`: string \| Uint8Array): Promise\<VersionedRegistry>

*Inherited from [Init](_packages_api_src_base_init_.init.md).[getBlockRegistry](_packages_api_src_base_init_.init.md#getblockregistry)*

*Defined in [packages/api/src/base/Init.ts:90](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/Init.ts#L90)*

**`description`** Sets up a registry based on the block hash defined

#### Parameters:

Name | Type |
------ | ------ |
`blockHash` | string \| Uint8Array |

**Returns:** Promise\<VersionedRegistry>

___

### injectMetadata

▸ **injectMetadata**(`metadata`: Metadata, `fromEmpty?`: undefined \| false \| true, `registry?`: Registry): void

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[injectMetadata](_packages_api_src_base_decorate_.decorate.md#injectmetadata)*

*Defined in [packages/api/src/base/Decorate.ts:174](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/Decorate.ts#L174)*

#### Parameters:

Name | Type |
------ | ------ |
`metadata` | Metadata |
`fromEmpty?` | undefined \| false \| true |
`registry?` | Registry |

**Returns:** void

___

### off

▸ **off**(`type`: ApiInterfaceEvents, `handler`: (...args: any[]) => any): this

*Inherited from [Events](_packages_api_src_base_events_.events.md).[off](_packages_api_src_base_events_.events.md#off)*

*Defined in [packages/api/src/base/Events.ts:61](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/Events.ts#L61)*

**`description`** Remove the given eventemitter handler

**`example`** 
<BR>

```javascript
const handler = (): void => {
 console.log('Connected !);
};

// Start listening
api.on('connected', handler);

// Stop listening
api.off('connected', handler);
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ApiInterfaceEvents | The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error` |
`handler` | (...args: any[]) => any | The callback to unregister.  |

**Returns:** this

___

### on

▸ **on**(`type`: ApiInterfaceEvents, `handler`: (...args: any[]) => any): this

*Inherited from [Events](_packages_api_src_base_events_.events.md).[on](_packages_api_src_base_events_.events.md#on)*

*Defined in [packages/api/src/base/Events.ts:34](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/Events.ts#L34)*

**`description`** Attach an eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.on('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ApiInterfaceEvents | The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error` |
`handler` | (...args: any[]) => any | The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.  |

**Returns:** this

___

### once

▸ **once**(`type`: ApiInterfaceEvents, `handler`: (...args: any[]) => any): this

*Inherited from [Events](_packages_api_src_base_events_.events.md).[once](_packages_api_src_base_events_.events.md#once)*

*Defined in [packages/api/src/base/Events.ts:86](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/Events.ts#L86)*

**`description`** Attach an one-time eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.once('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ApiInterfaceEvents | The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error` |
`handler` | (...args: any[]) => any | The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.  |

**Returns:** this

___

### registerTypes

▸ **registerTypes**(`types?`: RegistryTypes): void

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[registerTypes](_packages_api_src_base_decorate_.decorate.md#registertypes)*

*Defined in [packages/api/src/base/Decorate.ts:163](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/Decorate.ts#L163)*

**`description`** Register additional user-defined of chain-specific types in the type registry

#### Parameters:

Name | Type |
------ | ------ |
`types?` | RegistryTypes |

**Returns:** void

___

### setSigner

▸ **setSigner**(`signer`: Signer): void

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[setSigner](_packages_api_src_promise_api_.apipromise.md#setsigner)*

*Defined in [packages/api/src/base/index.ts:279](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L279)*

**`description`** Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair

#### Parameters:

Name | Type |
------ | ------ |
`signer` | Signer |

**Returns:** void

___

### sign

▸ **sign**(`address`: KeyringSigner \| string, `data`: SignerPayloadRawBase, `__namedParameters`: { signer: undefined \| Signer  }): Promise\<string>

*Inherited from [ApiPromise](_packages_api_src_promise_api_.apipromise.md).[sign](_packages_api_src_promise_api_.apipromise.md#sign)*

*Defined in [packages/api/src/base/index.ts:286](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/base/index.ts#L286)*

**`description`** Signs a raw signer payload, string or Uint8Array

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`address` | KeyringSigner \| string | - |
`data` | SignerPayloadRawBase | - |
`__namedParameters` | { signer: undefined \| Signer  } | {} |

**Returns:** Promise\<string>

___

### create

▸ `Static`**create**(`options?`: ApiOptions): Promise\<[ApiPromise](_packages_api_src_promise_api_.apipromise.md)>

*Defined in [packages/api/src/promise/Api.ts:218](https://github.com/polkadot-js/api/blob/7af915185/packages/api/src/promise/Api.ts#L218)*

**`description`** Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';

Api.create().then(async (api) => {
  const timestamp = await api.query.timestamp.now();

  console.log(`lastest block timestamp ${timestamp}`);
});
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options?` | ApiOptions | options that is passed to the class contructor. Can be either [[ApiOptions]] or a provider (see the constructor arguments) |

**Returns:** Promise\<[ApiPromise](_packages_api_src_promise_api_.apipromise.md)>
