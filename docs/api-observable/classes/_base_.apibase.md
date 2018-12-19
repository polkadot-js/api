

# Hierarchy

**ApiBase**

↳  [ApiQueries](_queries_.apiqueries.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(api: *`RpcRxInterface`*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `RpcRxInterface` |

**Returns:** [ApiBase](_base_.apibase.md)

___

# Properties

<a id="whenready"></a>

##  whenReady

**● whenReady**: *`Observable`<`boolean`>*

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L33)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`ModulesWithMethods`* =  extrinsicsStatic

*Defined in [Base.ts:41](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L41)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Defined in [Base.ts:42](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L42)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Defined in [Base.ts:87](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L87)*

**Returns:** `Hash`

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Defined in [Base.ts:91](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L91)*

**Returns:** `Observable`<`boolean`>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Defined in [Base.ts:95](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L95)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`<`T`>

___
<a id="rawstorage"></a>

##  rawStorage

▸ **rawStorage**<`T`>(key: * `Uint8Array` &#124; `StorageFunction`*, ...params: *`Array`<`any`>*): `Observable`< `T` &#124; `undefined`>

*Defined in [Base.ts:108](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L108)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Uint8Array` &#124; `StorageFunction`|
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`< `T` &#124; `undefined`>

___
<a id="rawstoragemulti"></a>

##  rawStorageMulti

▸ **rawStorageMulti**<`T`>(...keys: *`Array`< `Uint8Array` &#124; [`StorageFunction`] &#124; [`StorageFunction`, `any`]>*): `Observable`<`T`>

*Defined in [Base.ts:123](https://github.com/polkadot-js/api/blob/caff939/packages/api-observable/src/Base.ts#L123)*

**Type parameters:**

#### T :  `[]`
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` keys | `Array`< `Uint8Array` &#124; [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___

