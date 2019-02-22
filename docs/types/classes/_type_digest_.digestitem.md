

*__name__*: DigestItem

*__description__*: A [EnumType](_codec_enumtype_.enumtype.md) the specifies the specific item in the logs of a [Digest](_type_digest_.digest.md)

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<[AuthoritiesChange](_type_digest_.authoritieschange.md) \| [ChangesTrieRoot](_type_digest_.changestrieroot.md) \| [Other](_type_digest_.other.md) \| [Seal](_type_digest_.seal.md)>

**↳ DigestItem**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new DigestItem**(value: *`any`*): [DigestItem](_type_digest_.digestitem.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [type/Digest.ts:73](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/type/Digest.ts#L73)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** [DigestItem](_type_digest_.digestitem.md)

___

# Accessors

<a id="asauthoritieschange"></a>

##  asAuthoritiesChange

getasAuthoritiesChange(): [AuthoritiesChange](_type_digest_.authoritieschange.md)

*Defined in [type/Digest.ts:86](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/type/Digest.ts#L86)*

*__description__*: Returns the item as a [AuthoritiesChange](_type_digest_.authoritieschange.md)

**Returns:** [AuthoritiesChange](_type_digest_.authoritieschange.md)

___
<a id="aschangestrieroot"></a>

##  asChangesTrieRoot

getasChangesTrieRoot(): [ChangesTrieRoot](_type_digest_.changestrieroot.md)

*Defined in [type/Digest.ts:93](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/type/Digest.ts#L93)*

*__description__*: Returns the item as a [ChangesTrieRoot](_type_digest_.changestrieroot.md)

**Returns:** [ChangesTrieRoot](_type_digest_.changestrieroot.md)

___
<a id="asother"></a>

##  asOther

getasOther(): [Other](_type_digest_.other.md)

*Defined in [type/Digest.ts:100](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/type/Digest.ts#L100)*

*__description__*: Returns the item as a [Other](_type_digest_.other.md)

**Returns:** [Other](_type_digest_.other.md)

___
<a id="asseal"></a>

##  asSeal

getasSeal(): [Seal](_type_digest_.seal.md)

*Defined in [type/Digest.ts:107](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/type/Digest.ts#L107)*

*__description__*: Returns the item as a [Seal](_type_digest_.seal.md)

**Returns:** [Seal](_type_digest_.seal.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:114](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L114)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

getindex(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[index](_codec_enumtype_.enumtype.md#index)*

*Defined in [codec/EnumType.ts:121](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L121)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isEmpty](_codec_enumtype_.enumtype.md#isempty)*

*Defined in [codec/EnumType.ts:128](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L128)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:135](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L135)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:142](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L142)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:149](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L149)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:156](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L156)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[eq](_codec_enumtype_.enumtype.md#eq)*

*Defined in [codec/EnumType.ts:163](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L163)*

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

*Defined in [codec/EnumType.ts:176](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L176)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:183](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L183)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L192)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L199)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:209](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L209)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[with](_codec_enumtype_.enumtype.md#with)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/f8bd74e/packages/types/src/codec/EnumType.ts#L101)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

___

