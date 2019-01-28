

*__name__*: Extrinsic

*__description__*: Representation of an Extrinsic in the system. It contains the actual call, (optional) signature and encodes with an actual length prefix

[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

Can be:

*   signed, to create a transaction
*   left as is, to create an inherent

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Extrinsic**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Extrinsic**(value?: *`ExtrinsicValue` | [AnyU8a](../modules/_types_.md#anyu8a) | [Method](_method_.method.md)*): [Extrinsic](_extrinsic_.extrinsic.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Extrinsic.ts:36](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `ExtrinsicValue` | [AnyU8a](../modules/_types_.md#anyu8a) | [Method](_method_.method.md) |

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="args"></a>

##  args

getargs(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Defined in [Extrinsic.ts:76](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L76)*

*__description__*: The arguments passed to for the call, exposes args so it is compatible with [Method](_method_.method.md)

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Defined in [Extrinsic.ts:83](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L83)*

*__description__*: The actual `[sectionIndex, methodIndex]` as used in the Method

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Defined in [Extrinsic.ts:90](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L90)*

*__description__*: The actual data for the Method

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [Extrinsic.ts:97](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L97)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="hash"></a>

##  hash

gethash(): [Hash](_hash_.hash.md)

*Defined in [Extrinsic.ts:106](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L106)*

*__description__*: Convernience function, encodes the extrinsic and returns the actual hash

**Returns:** [Hash](_hash_.hash.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [Extrinsic.ts:115](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L115)*

*__description__*: `true` id the extrinsic is signed

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Defined in [Extrinsic.ts:122](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L122)*

*__description__*: The length of the encoded value

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

*Defined in [Extrinsic.ts:129](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L129)*

*__description__*: The [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md) that describes the extrinsic

**Returns:** [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

___
<a id="method"></a>

##  method

getmethod(): [Method](_method_.method.md)

*Defined in [Extrinsic.ts:136](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L136)*

*__description__*: The [Method](_method_.method.md) this extrinsic wraps

**Returns:** [Method](_method_.method.md)

___
<a id="signature"></a>

##  signature

getsignature(): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [Extrinsic.ts:143](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L143)*

*__description__*: The [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(signer: *[Address](_address_.address.md) | `Uint8Array`*, signature: *`Uint8Array`*, nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, era?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): [Extrinsic](_extrinsic_.extrinsic.md)

*Defined in [Extrinsic.ts:150](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L150)*

*__description__*: Add an [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) to the extrinsic (already generated)

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer | [Address](_address_.address.md) | `Uint8Array` |
| signature | `Uint8Array` |
| nonce | [AnyNumber](../modules/_types_.md#anynumber) |
| `Optional` era | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Struct.ts#L158)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) | `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Struct.ts#L166)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) | `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Struct.ts#L173)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, blockHash: *[AnyU8a](../modules/_types_.md#anyu8a)*, era?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): [Extrinsic](_extrinsic_.extrinsic.md)

*Defined in [Extrinsic.ts:159](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L159)*

*__description__*: Sign the extrinsic with a specific keypair

**Parameters:**

| Name | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| nonce | [AnyNumber](../modules/_types_.md#anynumber) |
| blockHash | [AnyU8a](../modules/_types_.md#anyu8a) |
| `Optional` era | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** [Extrinsic](_extrinsic_.extrinsic.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Overrides [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [Extrinsic.ts:168](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L168)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [Extrinsic.ts:175](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L175)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Struct.ts#L208)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [Extrinsic.ts:183](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L183)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeextrinsic"></a>

## `<Static>` decodeExtrinsic

▸ **decodeExtrinsic**(value: *`ExtrinsicValue` | [AnyU8a](../modules/_types_.md#anyu8a) | [Method](_method_.method.md)*): `ExtrinsicValue` | `Array`<`number`> | `Uint8Array`

*Defined in [Extrinsic.ts:44](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/Extrinsic.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `ExtrinsicValue` | [AnyU8a](../modules/_types_.md#anyu8a) | [Method](_method_.method.md) |

**Returns:** `ExtrinsicValue` | `Array`<`number`> | `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

