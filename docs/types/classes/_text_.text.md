

*__name__*: Text

*__description__*: This is a string wrapper, along with the length. It is used both for strings as well as items such as documentation. It simply extends the standard JS `String` built-in object, inheriting all methods exposed from `String`.

# Hierarchy

 `String`

**↳ Text**

↳  [Type](_type_.type.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`string`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Text**(value?: * [Text](_text_.text.md) &#124; `string` &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; `object`*): [Text](_text_.text.md)

*Defined in [Text.ts:23](https://github.com/polkadot-js/api/blob/50103dc/packages/types/src/Text.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Text](_text_.text.md) &#124; `string` &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; `object`| &quot;&quot; |

**Returns:** [Text](_text_.text.md)

___

# Properties

<a id="string"></a>

## `<Static>` String

**● String**: *`StringConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:517*

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [Text.ts:47](https://github.com/polkadot-js/api/blob/50103dc/packages/types/src/Text.ts#L47)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Overrides String.length*

*Defined in [Text.ts:54](https://github.com/polkadot-js/api/blob/50103dc/packages/types/src/Text.ts#L54)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [Text.ts:62](https://github.com/polkadot-js/api/blob/50103dc/packages/types/src/Text.ts#L62)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [Text.ts:69](https://github.com/polkadot-js/api/blob/50103dc/packages/types/src/Text.ts#L69)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides String.toString*

*Defined in [Text.ts:76](https://github.com/polkadot-js/api/blob/50103dc/packages/types/src/Text.ts#L76)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [Text.ts:85](https://github.com/polkadot-js/api/blob/50103dc/packages/types/src/Text.ts#L85)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

