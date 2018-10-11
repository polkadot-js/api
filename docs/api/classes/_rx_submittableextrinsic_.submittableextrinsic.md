

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

⊕ **new SubmittableExtrinsic**(api: *[ApiRxInterface](../interfaces/_rx_types_d_.apirxinterface.md)*, extrinsic: *`Extrinsic`*): [SubmittableExtrinsic](_rx_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.__constructor*

*Defined in [rx/SubmittableExtrinsic.ts:13](https://github.com/polkadot-js/api/blob/27b2885/packages/api/src/rx/SubmittableExtrinsic.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | [ApiRxInterface](../interfaces/_rx_types_d_.apirxinterface.md) |
| extrinsic | `Extrinsic` |

**Returns:** [SubmittableExtrinsic](_rx_submittableextrinsic_.submittableextrinsic.md)

___

# Properties

<a id="_types"></a>

## `<Protected>` _Types

**● _Types**: *`E`*

*Inherited from Struct._Types*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:30](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L30)*

___
<a id="_jsonmap"></a>

## `<Protected>` _jsonMap

**● _jsonMap**: *`Map`<`keyof S`, `string`>*

*Inherited from Struct._jsonMap*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:29](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L29)*

___
<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from Base.raw*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Base.ts:19](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L108)*

**Returns:** `E`

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from Extrinsic.callIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:44](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L44)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from Extrinsic.data*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:48](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L48)*

**Returns:** `Uint8Array`

___
<a id="hash"></a>

##  hash

gethash(): `Hash`

*Inherited from Extrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:53](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L53)*

**Returns:** `Hash`

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Inherited from Extrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:59](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L59)*

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from Extrinsic.length*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:63](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L63)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): `FunctionMetadata`

*Inherited from Extrinsic.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:67](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L67)*

**Returns:** `FunctionMetadata`

___
<a id="method"></a>

##  method

getmethod(): `Method`

*Inherited from Extrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:71](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L71)*

**Returns:** `Method`

___
<a id="signature"></a>

##  signature

getsignature(): `ExtrinsicSignature`

*Inherited from Extrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:75](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L75)*

**Returns:** `ExtrinsicSignature`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from Extrinsic.byteLength*

*Overrides Struct.byteLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:79](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L79)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): `Extrinsic`

*Inherited from Extrinsic.fromJSON*

*Overrides Struct.fromJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:85](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L85)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:91](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L91)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L148)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L163)*

**Returns:** `Array`<`string`>

___
<a id="send"></a>

##  send

▸ **send**(): `Observable`<`any`>

*Defined in [rx/SubmittableExtrinsic.ts:25](https://github.com/polkadot-js/api/blob/27b2885/packages/api/src/rx/SubmittableExtrinsic.ts#L25)*

**Returns:** `Observable`<`any`>

___
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash?: *`AnyU8a`*): [SubmittableExtrinsic](_rx_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.sign*

*Defined in [rx/SubmittableExtrinsic.ts:29](https://github.com/polkadot-js/api/blob/27b2885/packages/api/src/rx/SubmittableExtrinsic.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| nonce | `AnyNumber` |
| `Optional` blockHash | `AnyU8a` |

**Returns:** [SubmittableExtrinsic](_rx_submittableextrinsic_.submittableextrinsic.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Extrinsic.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:116](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L116)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Extrinsic.toJSON*

*Overrides Struct.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:120](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L120)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Overrides Base.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:175](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L175)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Extrinsic.toU8a*

*Overrides Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:105](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/Extrinsic.ts#L105)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L184)*

**Returns:** `Array`<`Base`>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*): `T`

*Inherited from Struct.decodeStruct*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:48](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L48)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value | `any` |

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `object`

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:98](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Struct.ts#L98)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___

