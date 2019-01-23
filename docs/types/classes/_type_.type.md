

*__name__*: Type

*__description__*: This is a extended version of String, specifically to handle types. Here we rely fully on what string provides us, however we also adjust the types received from the runtime, i.e. we remove the `T::` prefixes found in some types for consistency accross implementation.

# Hierarchy

↳  [Text](_text_.text.md)

**↳ Type**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`string`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Type**(value?: *[Text](_text_.text.md) | `Uint8Array` | `string`*): [Type](_type_.type.md)

*Overrides [Text](_text_.text.md).[constructor](_text_.text.md#constructor)*

*Defined in [Type.ts:19](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Type.ts#L19)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [Text](_text_.text.md) | `Uint8Array` | `string` | &quot;&quot; |

**Returns:** [Type](_type_.type.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Text](_text_.text.md).[encodedLength](_text_.text.md#encodedlength)*

*Defined in [Type.ts:76](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Type.ts#L76)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Text](_text_.text.md).[length](_text_.text.md#length)*

*Overrides String.length*

*Defined in [Text.ts:54](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Text.ts#L54)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Text](_text_.text.md).[eq](_text_.text.md#eq)*

*Defined in [Text.ts:62](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Text.ts#L62)*

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

*Defined in [Text.ts:71](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Text.ts#L71)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Text](_text_.text.md).[toJSON](_text_.text.md#tojson)*

*Defined in [Text.ts:78](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Text.ts#L78)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Text](_text_.text.md).[toString](_text_.text.md#tostring)*

*Overrides String.toString*

*Defined in [Text.ts:85](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Text.ts#L85)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides [Text](_text_.text.md).[toU8a](_text_.text.md#tou8a)*

*Defined in [Type.ts:87](https://github.com/polkadot-js/api/blob/52718d7/packages/types/src/Type.ts#L87)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

