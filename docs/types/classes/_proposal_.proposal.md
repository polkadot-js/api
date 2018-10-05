

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Extrinsic](_extrinsic_.extrinsic.md)

**↳ Proposal**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Proposal**(value?: *`ExtrinsicValue`*): [Proposal](_proposal_.proposal.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[constructor](_extrinsic_.extrinsic.md#constructor)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Extrinsic.ts:38](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `ExtrinsicValue` |

**Returns:** [Proposal](_proposal_.proposal.md)

___

# Properties

<a id="_types"></a>

## `<Protected>` _Types

**● _Types**: *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[_Types](_codec_struct_.struct.md#_types)*

*Defined in [codec/Struct.ts:28](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L28)*

___
<a id="_jsonmap"></a>

## `<Protected>` _jsonMap

**● _jsonMap**: *`Map`<`keyof S`, `string`>*

*Inherited from [Struct](_codec_struct_.struct.md).[_jsonMap](_codec_struct_.struct.md#_jsonmap)*

*Defined in [codec/Struct.ts:27](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L27)*

___
<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:77](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L77)*

**Returns:** `E`

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[callIndex](_extrinsic_.extrinsic.md#callindex)*

*Defined in [Extrinsic.ts:47](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L47)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[data](_extrinsic_.extrinsic.md#data)*

*Defined in [Extrinsic.ts:51](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L51)*

**Returns:** `Uint8Array`

___
<a id="hash"></a>

##  hash

gethash(): [Hash](_hash_.hash.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[hash](_extrinsic_.extrinsic.md#hash)*

*Defined in [Extrinsic.ts:56](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L56)*

**Returns:** [Hash](_hash_.hash.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[isSigned](_extrinsic_.extrinsic.md#issigned)*

*Defined in [Extrinsic.ts:62](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L62)*

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[length](_extrinsic_.extrinsic.md#length)*

*Defined in [Extrinsic.ts:66](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L66)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[meta](_extrinsic_.extrinsic.md#meta)*

*Defined in [Extrinsic.ts:70](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L70)*

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___
<a id="method"></a>

##  method

getmethod(): [Method](_method_.method.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[method](_extrinsic_.extrinsic.md#method)*

*Defined in [Extrinsic.ts:74](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L74)*

**Returns:** [Method](_method_.method.md)

___
<a id="signature"></a>

##  signature

getsignature(): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[signature](_extrinsic_.extrinsic.md#signature)*

*Defined in [Extrinsic.ts:78](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L78)*

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[byteLength](_extrinsic_.extrinsic.md#bytelength)*

*Overrides [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Defined in [Extrinsic.ts:82](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L82)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Extrinsic](_extrinsic_.extrinsic.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[fromJSON](_extrinsic_.extrinsic.md#fromjson)*

*Overrides [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Defined in [Extrinsic.ts:88](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Extrinsic](_extrinsic_.extrinsic.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[fromU8a](_extrinsic_.extrinsic.md#fromu8a)*

*Overrides [Struct](_codec_struct_.struct.md).[fromU8a](_codec_struct_.struct.md#fromu8a)*

*Defined in [Extrinsic.ts:94](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L94)*

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

*Defined in [codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L112)*

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

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `Array`<`string`>

___
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *[AnyNumber](../modules/_types_d_.md#anynumber)*, blockHash: *[AnyU8a](../modules/_types_d_.md#anyu8a)*): [Extrinsic](_extrinsic_.extrinsic.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[sign](_extrinsic_.extrinsic.md#sign)*

*Defined in [Extrinsic.ts:102](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| nonce | [AnyNumber](../modules/_types_d_.md#anynumber) |
| blockHash | [AnyU8a](../modules/_types_d_.md#anyu8a) |

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[toHex](_extrinsic_.extrinsic.md#tohex)*

*Defined in [Extrinsic.ts:119](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L119)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[toJSON](_extrinsic_.extrinsic.md#tojson)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [Extrinsic.ts:123](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L123)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:139](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L139)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[toU8a](_extrinsic_.extrinsic.md#tou8a)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [Extrinsic.ts:108](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/Extrinsic.ts#L108)*

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

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L148)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**<`S`,`V`,`T`>(Types: *`S`*, value: * `V` &#124; `Array`<`any`>*, isTuple: *`boolean`*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decode](_codec_struct_.struct.md#decode)*

*Defined in [codec/Struct.ts:46](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L46)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value |  `V` &#124; `Array`<`any`>|
| isTuple | `boolean` |

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `object`

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:67](https://github.com/polkadot-js/api/blob/5b5caa1/packages/types/src/codec/Struct.ts#L67)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___

