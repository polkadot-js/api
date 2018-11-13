

# Hierarchy

**ApiBase**

↳  [ApiQueries](_queries_.apiqueries.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(api: *`RpcRxInterface`*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:34](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L34)*

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

*Defined in [Base.ts:34](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L34)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Defined in [Base.ts:42](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L42)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Defined in [Base.ts:43](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L43)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Defined in [Base.ts:88](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L88)*

**Returns:** `Hash`

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Defined in [Base.ts:92](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L92)*

**Returns:** `Observable`<`boolean`>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Defined in [Base.ts:96](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L96)*

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

▸ **rawStorage**<`T`>(key: * `Uint8Array` &#124; `StorageFunction`*, ...params: *`Array`<`any`>*): `Observable`< `T` &#124; `undefined`>

*Defined in [Base.ts:109](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L109)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| key |  `Uint8Array` &#124; `StorageFunction`|
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`< `T` &#124; `undefined`>

___
<a id="rawstoragemulti"></a>

##  rawStorageMulti

▸ **rawStorageMulti**<`T`>(...keys: *`Array`< `Uint8Array` &#124; [`StorageFunction`] &#124; [`StorageFunction`, `any`]>*): `Observable`<`T`>

*Defined in [Base.ts:126](https://github.com/polkadot-js/api/blob/42e9347/packages/api-observable/src/Base.ts#L126)*

**Type parameters:**

#### T :  `[]`
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keys | `Array`< `Uint8Array` &#124; [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___

