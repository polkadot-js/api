

Representation of an Extrinsic in the system. It contains the actual call, (optional) signature and encodes with an actual length prefix

[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

Can be:

*   signed, to create a transaction
*   left as is, to create an inherent

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Extrinsic**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Extrinsic**(value?: * `ExtrinsicValue` &#124; `AnyU8a`*): [Extrinsic](_extrinsic_.extrinsic.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Extrinsic.ts:37](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value |  `ExtrinsicValue` &#124; `AnyU8a`|

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/codec/Struct.ts#L108)*

**Returns:** `E`

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Defined in [Extrinsic.ts:70](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L70)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Defined in [Extrinsic.ts:74](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L74)*

**Returns:** `Uint8Array`

___
<a id="hash"></a>

##  hash

gethash(): [Hash](_hash_.hash.md)

*Defined in [Extrinsic.ts:79](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L79)*

**Returns:** [Hash](_hash_.hash.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [Extrinsic.ts:85](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L85)*

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Defined in [Extrinsic.ts:89](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L89)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Defined in [Extrinsic.ts:93](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L93)*

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___
<a id="method"></a>

##  method

getmethod(): [Method](_method_.method.md)

*Defined in [Extrinsic.ts:97](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L97)*

**Returns:** [Method](_method_.method.md)

___
<a id="signature"></a>

##  signature

getsignature(): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [Extrinsic.ts:101](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L101)*

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Defined in [Extrinsic.ts:105](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L105)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Extrinsic](_extrinsic_.extrinsic.md)

*Overrides [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Defined in [Extrinsic.ts:111](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Extrinsic](_extrinsic_.extrinsic.md)

*Overrides [Struct](_codec_struct_.struct.md).[fromU8a](_codec_struct_.struct.md#fromu8a)*

*Defined in [Extrinsic.ts:117](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L117)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/codec/Struct.ts#L148)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Inherited from [Struct](_codec_struct_.struct.md).[keys](_codec_struct_.struct.md#keys)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/codec/Struct.ts#L163)*

**Returns:** `Array`<`string`>

___
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash: *`AnyU8a`*): [Extrinsic](_extrinsic_.extrinsic.md)

*Defined in [Extrinsic.ts:125](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L125)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| nonce | `AnyNumber` |
| blockHash | `AnyU8a` |

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [Extrinsic.ts:142](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L142)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [Extrinsic.ts:146](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L146)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:175](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/codec/Struct.ts#L175)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [Extrinsic.ts:131](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[values](_codec_struct_.struct.md#values)*

*Defined in [codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/codec/Struct.ts#L184)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodeextrinsic"></a>

## `<Static>` decodeExtrinsic

▸ **decodeExtrinsic**(value?: * `ExtrinsicValue` &#124; `AnyU8a`*):  `any` &#124; `Uint8Array`

*Defined in [Extrinsic.ts:45](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/Extrinsic.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value |  `ExtrinsicValue` &#124; `AnyU8a`|

**Returns:**  `any` &#124; `Uint8Array`

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:48](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/codec/Struct.ts#L48)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:98](https://github.com/polkadot-js/api/blob/64c5868/packages/types/src/codec/Struct.ts#L98)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___

