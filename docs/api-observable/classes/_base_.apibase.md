

# Hierarchy

**ApiBase**

↳  [ApiQueries](_queries_.apiqueries.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(api: *`RpcRxInterface`*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:32](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `RpcRxInterface` |

**Returns:** [ApiBase](_base_.apibase.md)

___

# Properties

<a id="whenready"></a>

##  whenReady

**● whenReady**: *`Observable`<`boolean`>*

*Defined in [Base.ts:32](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L32)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L40)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Defined in [Base.ts:41](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L41)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Defined in [Base.ts:86](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L86)*

**Returns:** `Hash`

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Defined in [Base.ts:90](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L90)*

**Returns:** `Observable`<`boolean`>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Defined in [Base.ts:94](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L94)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`<`T`>

___
<a id="rawstorage"></a>

##  rawStorage

▸ **rawStorage**<`T`>(key: *`StorageFunction`*, ...params: *`Array`<`any`>*): `Observable`< `T` &#124; `undefined`>

*Defined in [Base.ts:107](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L107)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `StorageFunction` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`< `T` &#124; `undefined`>

___
<a id="rawstoragemulti"></a>

##  rawStorageMulti

▸ **rawStorageMulti**<`T`>(...keys: *`Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]>*): `Observable`<`T`>

*Defined in [Base.ts:120](https://github.com/polkadot-js/api/blob/a2b22e3/packages/api-observable/src/Base.ts#L120)*

**Type parameters:**

#### T :  `[]`
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keys | `Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___

