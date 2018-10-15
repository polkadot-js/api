

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

 `Extrinsic`

**↳ SubmittableExtrinsic**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SubmittableExtrinsic**(api: *`ApiPromiseInterface`*, extrinsic: *`Extrinsic`*): [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.__constructor*

*Defined in [promise/SubmittableExtrinsic.ts:12](https://github.com/polkadot-js/api/blob/1b7640f/packages/api/src/promise/SubmittableExtrinsic.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `ApiPromiseInterface` |
| extrinsic | `Extrinsic` |

**Returns:** [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from Base.raw*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Base.ts:19](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:114](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/codec/Struct.ts#L114)*

**Returns:** `E`

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from Extrinsic.callIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:73](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L73)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from Extrinsic.data*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:77](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L77)*

**Returns:** `Uint8Array`

___
<a id="hash"></a>

##  hash

gethash(): `Hash`

*Inherited from Extrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:82](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L82)*

**Returns:** `Hash`

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Inherited from Extrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:88](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L88)*

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from Extrinsic.length*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:92](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L92)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): `FunctionMetadata`

*Inherited from Extrinsic.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L96)*

**Returns:** `FunctionMetadata`

___
<a id="method"></a>

##  method

getmethod(): `Method`

*Inherited from Extrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:100](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L100)*

**Returns:** `Method`

___
<a id="signature"></a>

##  signature

getsignature(): `ExtrinsicSignature`

*Inherited from Extrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:104](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L104)*

**Returns:** `ExtrinsicSignature`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from Extrinsic.byteLength*

*Overrides Struct.byteLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:108](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L108)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): `Extrinsic`

*Inherited from Extrinsic.fromJSON*

*Overrides Struct.fromJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:114](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L114)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** `Extrinsic`

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): `Extrinsic`

*Inherited from Extrinsic.fromU8a*

*Overrides Struct.fromU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:120](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L120)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Extrinsic`

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): `Base`

*Inherited from Struct.get*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:154](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/codec/Struct.ts#L154)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `Base`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Inherited from Struct.keys*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:169](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/codec/Struct.ts#L169)*

**Returns:** `Array`<`string`>

___
<a id="send"></a>

##  send

▸ **send**(statusCb?: * `undefined` &#124; `function`*): `Promise`<`Hash`>

*Defined in [promise/SubmittableExtrinsic.ts:20](https://github.com/polkadot-js/api/blob/1b7640f/packages/api/src/promise/SubmittableExtrinsic.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` statusCb |  `undefined` &#124; `function`|

**Returns:** `Promise`<`Hash`>

___
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash?: *`AnyU8a`*): [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.sign*

*Defined in [promise/SubmittableExtrinsic.ts:28](https://github.com/polkadot-js/api/blob/1b7640f/packages/api/src/promise/SubmittableExtrinsic.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| nonce | `AnyNumber` |
| `Optional` blockHash | `AnyU8a` |

**Returns:** [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Extrinsic.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:145](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L145)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Extrinsic.toJSON*

*Overrides Struct.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:149](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L149)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Overrides Base.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/codec/Struct.ts#L181)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Extrinsic.toU8a*

*Overrides Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:134](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L134)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `Array`<`Base`>

*Inherited from Struct.values*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/codec/Struct.ts#L190)*

**Returns:** `Array`<`Base`>

___
<a id="decodeextrinsic"></a>

## `<Static>` decodeExtrinsic

▸ **decodeExtrinsic**(value?: * `ExtrinsicValue` &#124; `AnyU8a`*):  `any` &#124; `Uint8Array`

*Inherited from Extrinsic.decodeExtrinsic*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:45](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/Extrinsic.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value |  `ExtrinsicValue` &#124; `AnyU8a`|

**Returns:**  `any` &#124; `Uint8Array`

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from Struct.decodeStruct*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:49](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/codec/Struct.ts#L49)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value | `any` |
| jsonMap | `Map`<`keyof S`, `string`> |

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<`Struct`<`S`>>

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:104](https://github.com/polkadot-js/api/blob/1b7640f/packages/types/src/codec/Struct.ts#L104)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

