

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

⊕ **new SubmittableExtrinsic**(api: *`ApiRxInterface`*, extrinsic: *`Extrinsic`*): [SubmittableExtrinsic](_rx_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.__constructor*

*Defined in [rx/SubmittableExtrinsic.ts:13](https://github.com/polkadot-js/api/blob/389174b/packages/api/src/rx/SubmittableExtrinsic.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `ApiRxInterface` |
| extrinsic | `Extrinsic` |

**Returns:** [SubmittableExtrinsic](_rx_submittableextrinsic_.submittableextrinsic.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from Base.raw*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Base.ts:19](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/codec/Struct.ts#L113)*

**Returns:** `E`

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from Extrinsic.callIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:69](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L69)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from Extrinsic.data*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:73](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L73)*

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from Extrinsic.encodedLength*

*Overrides Struct.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:104](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L104)*

**Returns:** `number`

___
<a id="hash"></a>

##  hash

gethash(): `Hash`

*Inherited from Extrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:78](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L78)*

**Returns:** `Hash`

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Inherited from Extrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:84](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L84)*

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from Extrinsic.length*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:88](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L88)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): `FunctionMetadata`

*Inherited from Extrinsic.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:92](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L92)*

**Returns:** `FunctionMetadata`

___
<a id="method"></a>

##  method

getmethod(): `Method`

*Inherited from Extrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L96)*

**Returns:** `Method`

___
<a id="signature"></a>

##  signature

getsignature(): `ExtrinsicSignature`

*Inherited from Extrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:100](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L100)*

**Returns:** `ExtrinsicSignature`

___

# Methods

<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): `Base`

*Inherited from Struct.getAtIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/codec/Struct.ts#L123)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `Array`<`string`>

___
<a id="send"></a>

##  send

▸ **send**(): `Observable`<`ExtrinsicStatus`>

*Defined in [rx/SubmittableExtrinsic.ts:21](https://github.com/polkadot-js/api/blob/389174b/packages/api/src/rx/SubmittableExtrinsic.ts#L21)*

**Returns:** `Observable`<`ExtrinsicStatus`>

___
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash?: *`AnyU8a`*): [SubmittableExtrinsic](_rx_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.sign*

*Defined in [rx/SubmittableExtrinsic.ts:25](https://github.com/polkadot-js/api/blob/389174b/packages/api/src/rx/SubmittableExtrinsic.ts#L25)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:127](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L127)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Extrinsic.toJSON*

*Overrides Struct.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:131](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L131)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Overrides Base.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/codec/Struct.ts#L150)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Extrinsic.toU8a*

*Overrides Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:116](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L116)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/codec/Struct.ts#L159)*

**Returns:** `Array`<`Base`>

___
<a id="decodeextrinsic"></a>

## `<Static>` decodeExtrinsic

▸ **decodeExtrinsic**(value?: * `ExtrinsicValue` &#124; `AnyU8a`*):  `any` &#124; `Uint8Array`

*Inherited from Extrinsic.decodeExtrinsic*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:41](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/Extrinsic.ts#L41)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:44](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/codec/Struct.ts#L44)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:103](https://github.com/polkadot-js/api/blob/389174b/packages/types/src/codec/Struct.ts#L103)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

