

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ ExtrinsicSignature**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicSignature**(value?: *`ExtrinsicSignatureValue`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [ExtrinsicSignature.ts:38](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `ExtrinsicSignatureValue` |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:114](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Struct.ts#L114)*

**Returns:** `E`

___
<a id="era"></a>

##  era

getera(): [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

*Defined in [ExtrinsicSignature.ts:78](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L78)*

**Returns:** [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [ExtrinsicSignature.ts:74](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L74)*

**Returns:** `boolean`

___
<a id="nonce"></a>

##  nonce

getnonce(): `Nonce`

*Defined in [ExtrinsicSignature.ts:82](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L82)*

**Returns:** `Nonce`

___
<a id="signature"></a>

##  signature

getsignature(): [Signature](_signature_.signature.md)

*Defined in [ExtrinsicSignature.ts:86](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L86)*

**Returns:** [Signature](_signature_.signature.md)

___
<a id="signer"></a>

##  signer

getsigner(): [Address](_address_.address.md)

*Defined in [ExtrinsicSignature.ts:90](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L90)*

**Returns:** [Address](_address_.address.md)

___
<a id="version"></a>

##  version

getversion(): `number`

*Defined in [ExtrinsicSignature.ts:94](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L94)*

**Returns:** `number`

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(method: *[Method](_method_.method.md)*, signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash: *`AnyU8a`*, era?: *`Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [ExtrinsicSignature.ts:106](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L106)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| method | [Method](_method_.method.md) | - |
| signerPair | `KeyringPair` | - |
| nonce | `AnyNumber` | - |
| blockHash | `AnyU8a` | - |
| `Default value` era | `Uint8Array` |  IMMORTAL_ERA |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___
<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Defined in [ExtrinsicSignature.ts:65](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L65)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Defined in [ExtrinsicSignature.ts:125](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L125)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[fromU8a](_codec_struct_.struct.md#fromu8a)*

*Defined in [ExtrinsicSignature.ts:129](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L129)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Defined in [codec/Struct.ts:154](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Struct.ts#L154)*

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

*Defined in [codec/Struct.ts:169](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Struct.ts#L169)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Struct.ts#L158)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Struct.ts#L181)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [ExtrinsicSignature.ts:142](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L142)*

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

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Struct.ts#L190)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodeextrinsicsignature"></a>

## `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value: * [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) &#124; `ExtrinsicSignatureValue` &#124; `AnyU8a` &#124; `undefined`*):  `any` &#124; `Uint8Array`

*Defined in [ExtrinsicSignature.ts:48](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/ExtrinsicSignature.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) &#124; `ExtrinsicSignatureValue` &#124; `AnyU8a` &#124; `undefined`|

**Returns:**  `any` &#124; `Uint8Array`

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:49](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Struct.ts#L49)*

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

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:104](https://github.com/polkadot-js/api/blob/b2c512f/packages/types/src/codec/Struct.ts#L104)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

