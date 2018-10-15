

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

*Defined in [ExtrinsicSignature.ts:37](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L37)*

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

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L108)*

**Returns:** `E`

___
<a id="era"></a>

##  era

getera(): [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

*Defined in [ExtrinsicSignature.ts:77](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L77)*

**Returns:** [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [ExtrinsicSignature.ts:73](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L73)*

**Returns:** `boolean`

___
<a id="nonce"></a>

##  nonce

getnonce(): `Nonce`

*Defined in [ExtrinsicSignature.ts:81](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L81)*

**Returns:** `Nonce`

___
<a id="signature"></a>

##  signature

getsignature(): [Signature](_signature_.signature.md)

*Defined in [ExtrinsicSignature.ts:85](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L85)*

**Returns:** [Signature](_signature_.signature.md)

___
<a id="signer"></a>

##  signer

getsigner(): [Address](_address_.address.md)

*Defined in [ExtrinsicSignature.ts:89](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L89)*

**Returns:** [Address](_address_.address.md)

___
<a id="version"></a>

##  version

getversion(): `number`

*Defined in [ExtrinsicSignature.ts:93](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L93)*

**Returns:** `number`

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(method: *[Method](_method_.method.md)*, signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash: *`AnyU8a`*, era?: *`Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [ExtrinsicSignature.ts:105](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L105)*

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

*Defined in [ExtrinsicSignature.ts:64](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L64)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Struct.ts:118](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L118)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[fromU8a](_codec_struct_.struct.md#fromu8a)*

*Defined in [ExtrinsicSignature.ts:124](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L124)*

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

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L148)*

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

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L163)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L152)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:175](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L175)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [ExtrinsicSignature.ts:137](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L137)*

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

*Defined in [codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L184)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodeextrinsicsignature"></a>

## `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value: * [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) &#124; `ExtrinsicSignatureValue` &#124; `AnyU8a` &#124; `undefined`*):  `any` &#124; `Uint8Array`

*Defined in [ExtrinsicSignature.ts:47](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/ExtrinsicSignature.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) &#124; `ExtrinsicSignatureValue` &#124; `AnyU8a` &#124; `undefined`|

**Returns:**  `any` &#124; `Uint8Array`

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:48](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L48)*

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

*Defined in [codec/Struct.ts:98](https://github.com/polkadot-js/api/blob/3e20e7b/packages/types/src/codec/Struct.ts#L98)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___

