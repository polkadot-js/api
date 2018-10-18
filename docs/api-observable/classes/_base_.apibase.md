

# Hierarchy

**ApiBase**

↳  [ApiQueries](_queries_.apiqueries.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(api: *`RpcRxInterface`*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L31)*

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

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L31)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Defined in [Base.ts:39](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L39)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L40)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Defined in [Base.ts:84](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L84)*

**Returns:** `Hash`

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Defined in [Base.ts:88](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L88)*

**Returns:** `Observable`<`boolean`>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Defined in [Base.ts:92](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L92)*

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

*Defined in [Base.ts:105](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L105)*

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

*Defined in [Base.ts:118](https://github.com/polkadot-js/api/blob/389174b/packages/api-observable/src/Base.ts#L118)*

**Type parameters:**

#### T :  `[]`
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keys | `Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___

