

*__name__*: ExtrinsicSignature

*__description__*: A container for the [Signature](_signature_.signature.md) associated with a specific [Extrinsic](_extrinsic_.extrinsic.md)

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ ExtrinsicSignature**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicSignature**(value?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [ExtrinsicSignature.ts:36](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [ExtrinsicSignature.ts:73](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L73)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="era"></a>

##  era

getera(): [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

*Defined in [ExtrinsicSignature.ts:89](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L89)*

*__description__*: The [ExtrinsicEra](_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [ExtrinsicSignature.ts:82](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L82)*

*__description__*: `true` if the signature is valid

**Returns:** `boolean`

___
<a id="nonce"></a>

##  nonce

getnonce(): [Nonce](_nonce_.nonce.md)

*Defined in [ExtrinsicSignature.ts:96](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L96)*

*__description__*: The [Nonce](_nonce_.nonce.md) for the signature

**Returns:** [Nonce](_nonce_.nonce.md)

___
<a id="signature"></a>

##  signature

getsignature(): [Signature](_signature_.signature.md)

*Defined in [ExtrinsicSignature.ts:103](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L103)*

*__description__*: The actuall [Signature](_signature_.signature.md) hash

**Returns:** [Signature](_signature_.signature.md)

___
<a id="signer"></a>

##  signer

getsigner(): [Address](_address_.address.md)

*Defined in [ExtrinsicSignature.ts:110](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L110)*

*__description__*: The [Address](_address_.address.md) that signed

**Returns:** [Address](_address_.address.md)

___
<a id="version"></a>

##  version

getversion(): `number`

*Defined in [ExtrinsicSignature.ts:117](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L117)*

*__description__*: The encoded version for the signature

**Returns:** `number`

___

# Methods

<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(_signer: *[Address](_address_.address.md) | `Uint8Array`*, _signature: *`Uint8Array`*, _nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, _era?: *`Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [ExtrinsicSignature.ts:138](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L138)*

*__description__*: Adds a raw signature

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| _signer | [Address](_address_.address.md) | `Uint8Array` | - |
| _signature | `Uint8Array` | - |
| _nonce | [AnyNumber](../modules/_types_.md#anynumber) | - |
| `Default value` _era | `Uint8Array` |  IMMORTAL_ERA |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L158)*

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

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L166)*

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

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L173)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="sign"></a>

##  sign

▸ **sign**(method: *[Method](_method_.method.md)*, account: *`KeyringPair`*, __namedParameters: *`object`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [ExtrinsicSignature.ts:150](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L150)*

*__description__*: Generate a payload and pplies the signature from a keypair

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [Method](_method_.method.md) |
| account | `KeyringPair` |
| __namedParameters | `object` |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L194)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L208)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [ExtrinsicSignature.ts:167](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L167)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeextrinsicsignature"></a>

## `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): `object` | `Uint8Array`

*Defined in [ExtrinsicSignature.ts:53](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/ExtrinsicSignature.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** `object` | `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/ea7ecec/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

