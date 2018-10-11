

# Type parameters
#### R 
#### S 
#### E 
# Hierarchy

**ApiBase**

↳  [ApiPromise](_promise_index_.apipromise.md)

↳  [ApiRx](_rx_index_.apirx.md)

# Implements

* `ApiBaseInterface`<`R`, `S`, `E`>

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(wsProvider?: *`WsProvider`*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L40)*

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

**Returns:** [ApiBase](_base_.apibase.md)

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Defined in [Base.ts:68](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L68)*

*__description__*: Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.

**Returns:** `Hash`

___
<a id="rpc"></a>

##  rpc

getrpc(): `R`

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

**Returns:** `R`

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

getruntimeMetadata(): `RuntimeMetadata`

*Defined in [Base.ts:77](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L77)*

*__description__*: Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.

**Returns:** `RuntimeMetadata`

___
<a id="runtimeversion"></a>

##  runtimeVersion

getruntimeVersion(): `RuntimeVersion`

*Defined in [Base.ts:86](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L86)*

*__description__*: Contains the version information for the current runtime.

**Returns:** `RuntimeVersion`

___
<a id="st"></a>

##  st

getst(): `S`

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

**Returns:** `S`

___
<a id="tx"></a>

##  tx

gettx(): `E`

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

**Returns:** `E`

___

# Methods

<a id="on"></a>

##  on

▸ **on**(type: *`ApiInterface$Events`*, handler: *`function`*): `void`

*Defined in [Base.ts:149](https://github.com/polkadot-js/api/blob/e103e98/packages/api/src/Base.ts#L149)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `ApiInterface$Events` |
| handler | `function` |

**Returns:** `void`

___

