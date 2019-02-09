

# Hierarchy

↳  [Type](_type_.type.md)

**↳ PlainType**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`string`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new PlainType**(value?: *[Text](_text_.text.md) | `Uint8Array` | `string`*): [PlainType](_metadata_v1_storage_.plaintype.md)

*Inherited from [Type](_type_.type.md).[constructor](_type_.type.md#constructor)*

*Overrides [Text](_text_.text.md).[constructor](_text_.text.md#constructor)*

*Defined in [Type.ts:19](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/Type.ts#L19)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [Text](_text_.text.md) | `Uint8Array` | `string` | &quot;&quot; |

**Returns:** [PlainType](_metadata_v1_storage_.plaintype.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Type](_type_.type.md).[encodedLength](_type_.type.md#encodedlength)*

*Overrides [Text](_text_.text.md).[encodedLength](_text_.text.md#encodedlength)*

*Defined in [Type.ts:76](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/Type.ts#L76)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Text](_text_.text.md).[length](_text_.text.md#length)*

*Overrides String.length*

*Defined in [Text.ts:52](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/Text.ts#L52)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Text](_text_.text.md).[eq](_text_.text.md#eq)*

*Defined in [Text.ts:60](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/Text.ts#L60)*

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

*Inherited from [Text](_text_.text.md).[toHex](_text_.text.md#tohex)*

*Defined in [Text.ts:69](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/Text.ts#L69)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Text](_text_.text.md).[toJSON](_text_.text.md#tojson)*

*Defined in [Text.ts:76](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/Text.ts#L76)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Text](_text_.text.md).[toString](_text_.text.md#tostring)*

*Overrides String.toString*

*Defined in [Text.ts:83](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/Text.ts#L83)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Type](_type_.type.md).[toU8a](_type_.type.md#tou8a)*

*Overrides [Text](_text_.text.md).[toU8a](_text_.text.md#tou8a)*

*Defined in [Type.ts:87](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/Type.ts#L87)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

