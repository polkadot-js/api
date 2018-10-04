

# Hierarchy

**ApiBase**

↳  [ApiQueries](_queries_.apiqueries.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiBase**(api: *`RxApiInterface`*): [ApiBase](_base_.apibase.md)

*Defined in [Base.ts:22](https://github.com/polkadot-js/api/blob/a4572e4/packages/api-observable/src/Base.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `RxApiInterface` |

**Returns:** [ApiBase](_base_.apibase.md)

___

# Properties

<a id="api"></a>

## `<Protected>` api

**● api**: *`RxApiInterface`*

*Defined in [Base.ts:22](https://github.com/polkadot-js/api/blob/a4572e4/packages/api-observable/src/Base.ts#L22)*

___

# Methods

<a id="combine"></a>

## `<Protected>` combine

▸ **combine**<`T`,`R`>(observables: *`Array`<`Observable`<`any`>>*, mapfn?: *`MapFn`<`R`, `T`>*): `Observable`<`T`>

*Defined in [Base.ts:28](https://github.com/polkadot-js/api/blob/a4572e4/packages/api-observable/src/Base.ts#L28)*

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

*Defined in [Base.ts:36](https://github.com/polkadot-js/api/blob/a4572e4/packages/api-observable/src/Base.ts#L36)*

**Returns:** `Observable`<`boolean`>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/a4572e4/packages/api-observable/src/Base.ts#L40)*

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

*Defined in [Base.ts:52](https://github.com/polkadot-js/api/blob/a4572e4/packages/api-observable/src/Base.ts#L52)*

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

*Defined in [Base.ts:63](https://github.com/polkadot-js/api/blob/a4572e4/packages/api-observable/src/Base.ts#L63)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keys | `Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___

