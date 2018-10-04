

# Hierarchy

**ApiBase**

↳  [ApiQueries](_queries_.apiqueries.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(api: *`RxApiInterface`*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `RxApiInterface` |

**Returns:** [ApiBase](_base_.apibase.md)

___

# Properties

<a id="_api"></a>

## `<Protected>` _api

**● _api**: *`RxApiInterface`*

*Defined in [Base.ts:27](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L27)*

___
<a id="_genesishash"></a>

## `<Protected>` _genesisHash

**● _genesisHash**: *`Hash`*

*Defined in [Base.ts:28](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L28)*

___
<a id="whenready"></a>

##  whenReady

**● whenReady**: *`Observable`<`boolean`>*

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L31)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Defined in [Base.ts:39](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L39)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L40)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Defined in [Base.ts:78](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L78)*

**Returns:** `Hash`

___

# Methods

<a id="combine"></a>

## `<Protected>` combine

▸ **combine**<`T`,`R`>(observables: *`Array`<`Observable`<`any`>>*, mapfn?: *`MapFn`<`R`, `T`>*): `Observable`<`T`>

*Defined in [Base.ts:70](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L70)*

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| observables | `Array`<`Observable`<`any`>> | - |
| `Default value` mapfn | `MapFn`<`R`, `T`> |  defaultMapFn |

**Returns:** `Observable`<`T`>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Defined in [Base.ts:82](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L82)*

**Returns:** `Observable`<`boolean`>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Defined in [Base.ts:86](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L86)*

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

▸ **rawStorage**<`T`>(key: *`StorageFunction`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Defined in [Base.ts:98](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L98)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `StorageFunction` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`<`T`>

___
<a id="rawstoragemulti"></a>

##  rawStorageMulti

▸ **rawStorageMulti**<`T`>(...keys: *`Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]>*): `Observable`<`T`>

*Defined in [Base.ts:109](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L109)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keys | `Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___

