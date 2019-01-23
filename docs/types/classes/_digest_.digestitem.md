

*__name__*: DigestItem

*__description__*: A [EnumType](_codec_enumtype_.enumtype.md) the specifies the specific item in the logs of a [Digest](_digest_.digest.md)

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<[AuthoritiesChange](_digest_.authoritieschange.md) | [ChangesTrieRoot](_digest_.changestrieroot.md) | [Other](_digest_.other.md) | [Seal](_digest_.seal.md)>

**↳ DigestItem**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new DigestItem**(value: *`any`*): [DigestItem](_digest_.digestitem.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [Digest.ts:73](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Digest.ts#L73)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** [DigestItem](_digest_.digestitem.md)

___

# Accessors

<a id="asauthoritieschange"></a>

##  asAuthoritiesChange

getasAuthoritiesChange(): [AuthoritiesChange](_digest_.authoritieschange.md)

*Defined in [Digest.ts:86](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Digest.ts#L86)*

*__description__*: Returns the item as a [AuthoritiesChange](_digest_.authoritieschange.md)

**Returns:** [AuthoritiesChange](_digest_.authoritieschange.md)

___
<a id="aschangestrieroot"></a>

##  asChangesTrieRoot

getasChangesTrieRoot(): [ChangesTrieRoot](_digest_.changestrieroot.md)

*Defined in [Digest.ts:93](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Digest.ts#L93)*

*__description__*: Returns the item as a [ChangesTrieRoot](_digest_.changestrieroot.md)

**Returns:** [ChangesTrieRoot](_digest_.changestrieroot.md)

___
<a id="asother"></a>

##  asOther

getasOther(): [Other](_digest_.other.md)

*Defined in [Digest.ts:100](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Digest.ts#L100)*

*__description__*: Returns the item as a [Other](_digest_.other.md)

**Returns:** [Other](_digest_.other.md)

___
<a id="asseal"></a>

##  asSeal

getasSeal(): [Seal](_digest_.seal.md)

*Defined in [Digest.ts:107](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Digest.ts#L107)*

*__description__*: Returns the item as a [Seal](_digest_.seal.md)

**Returns:** [Seal](_digest_.seal.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L101)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:108](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L108)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:115](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L115)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:122](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L122)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L129)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[eq](_codec_enumtype_.enumtype.md#eq)*

*Defined in [codec/EnumType.ts:136](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L136)*

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

*Defined in [codec/EnumType.ts:149](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L149)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:156](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L156)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:163](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L163)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [codec/EnumType.ts:170](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L170)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:178](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/codec/EnumType.ts#L178)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

