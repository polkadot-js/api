

*__name__*: SignaturePayload

*__description__*: A signing payload for an [Extrinsic](_extrinsic_.extrinsic.md). For the final encoding, it is variable length based on the conetnts included

8 bytes: The Transaction Index/Nonce as provided in the transaction itself. 2+ bytes: The Function Descriptor as provided in the transaction itself. 2 bytes: The Transaction Era as provided in the transaction itself. 32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ SignaturePayload**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SignaturePayload**(value?: *`SignaturePayloadValue` | `Uint8Array`*): [SignaturePayload](_signaturepayload_.signaturepayload.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [SignaturePayload.ts:36](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/SignaturePayload.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `SignaturePayloadValue` | `Uint8Array` |

**Returns:** [SignaturePayload](_signaturepayload_.signaturepayload.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="blockhash"></a>

##  blockHash

getblockHash(): [Hash](_hash_.hash.md)

*Defined in [SignaturePayload.ts:57](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/SignaturePayload.ts#L57)*

*__description__*: The block [Hash](_hash_.hash.md) the signature applies to (mortal/immortal)

**Returns:** [Hash](_hash_.hash.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L149)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="era"></a>

##  era

getera(): [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

*Defined in [SignaturePayload.ts:71](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/SignaturePayload.ts#L71)*

*__description__*: The [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

**Returns:** [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [SignaturePayload.ts:50](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/SignaturePayload.ts#L50)*

*__description__*: `true` if the payload refers to a valid signature

**Returns:** `boolean`

___
<a id="method"></a>

##  method

getmethod(): [Method](_method_.method.md)

*Defined in [SignaturePayload.ts:64](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/SignaturePayload.ts#L64)*

*__description__*: The [Method](_method_.method.md) contained in the payload

**Returns:** [Method](_method_.method.md)

___
<a id="nonce"></a>

##  nonce

getnonce(): [Nonce](_nonce_.nonce.md)

*Defined in [SignaturePayload.ts:78](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/SignaturePayload.ts#L78)*

*__description__*: The [Nonce](_nonce_.nonce.md)

**Returns:** [Nonce](_nonce_.nonce.md)

___
<a id="signature"></a>

##  signature

getsignature(): `Uint8Array`

*Defined in [SignaturePayload.ts:85](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/SignaturePayload.ts#L85)*

*__description__*: The raw signature as a `Uint8Array`

**Returns:** `Uint8Array`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L158)*

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

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L166)*

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

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L173)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, version?: *[RuntimeVersion](_runtimeversion_.runtimeversion.md)*): `Uint8Array`

*Defined in [SignaturePayload.ts:96](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/SignaturePayload.ts#L96)*

*__description__*: Sign the payload with the keypair

**Parameters:**

| Name | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| `Optional` version | [RuntimeVersion](_runtimeversion_.runtimeversion.md) |

**Returns:** `Uint8Array`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L194)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L208)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L216)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/6d759cd/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

