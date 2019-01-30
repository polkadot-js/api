

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<[Null](_null_.null.md) | [ImplicitCandidateSignature](_attestedcandidate_.implicitcandidatesignature.md) | [ExplicitCandidateSignature](_attestedcandidate_.explicitcandidatesignature.md)>

**↳ ValidityAttestation**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ValidityAttestation**(value?: *`any`*): [ValidityAttestation](_attestedcandidate_.validityattestation.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [AttestedCandidate.ts:54](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/AttestedCandidate.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [ValidityAttestation](_attestedcandidate_.validityattestation.md)

___

# Accessors

<a id="asexplicitcandidatesignature"></a>

##  asExplicitCandidateSignature

getasExplicitCandidateSignature(): [ExplicitCandidateSignature](_attestedcandidate_.explicitcandidatesignature.md)

*Defined in [AttestedCandidate.ts:68](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/AttestedCandidate.ts#L68)*

*__description__*: Returns the item as a [ExplicitCandidateSignature](_attestedcandidate_.explicitcandidatesignature.md)

**Returns:** [ExplicitCandidateSignature](_attestedcandidate_.explicitcandidatesignature.md)

___
<a id="asimplicitcandidatesignature"></a>

##  asImplicitCandidateSignature

getasImplicitCandidateSignature(): [ImplicitCandidateSignature](_attestedcandidate_.implicitcandidatesignature.md)

*Defined in [AttestedCandidate.ts:75](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/AttestedCandidate.ts#L75)*

*__description__*: Returns the item as a [ImplicitCandidateSignature](_attestedcandidate_.implicitcandidatesignature.md)

**Returns:** [ImplicitCandidateSignature](_attestedcandidate_.implicitcandidatesignature.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L101)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

getindex(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[index](_codec_enumtype_.enumtype.md#index)*

*Defined in [codec/EnumType.ts:108](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L108)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:115](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L115)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:122](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L122)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L129)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:136](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L136)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[eq](_codec_enumtype_.enumtype.md#eq)*

*Defined in [codec/EnumType.ts:143](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L143)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:156](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L156)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:163](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L163)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:187](https://github.com/polkadot-js/api/blob/aea223f/packages/types/src/codec/EnumType.ts#L187)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

