

*__name__*: U8a

*__description__*: A basic wrapper around Uint8Array, with no frills and no fuss. It does differ from other implementations wher it will consume the full Uint8Array as passed to it. As such it is meant to be subclassed where the wrapper takes care of the actual lengths instead of used directly.

# Hierarchy

 `Uint8Array`

**↳ U8a**

↳  [U8aFixed](_codec_u8afixed_.u8afixed.md)

↳  [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

↳  [Bytes](_bytes_.bytes.md)

↳  [Data](_data_.data.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`number`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new U8a**(value: *[AnyU8a](../modules/_types_.md#anyu8a)*): [U8a](_codec_u8a_.u8a.md)

*Defined in [codec/U8a.ts:18](https://github.com/polkadot-js/api/blob/ad73e60/packages/types/src/codec/U8a.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [AnyU8a](../modules/_types_.md#anyu8a) |

**Returns:** [U8a](_codec_u8a_.u8a.md)

___

# Properties

<a id="uint8array"></a>

## `<Static>` Uint8Array

**● Uint8Array**: *`Uint8ArrayConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:2205*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/ad73e60/packages/types/src/codec/U8a.ts#L36)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Overrides Uint8Array.length*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/ad73e60/packages/types/src/codec/U8a.ts#L43)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="subarray"></a>

##  subarray

▸ **subarray**(begin: *`number`*, end?: * `undefined` &#124; `number`*): `Uint8Array`

*Overrides Uint8Array.subarray*

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/ad73e60/packages/types/src/codec/U8a.ts#L53)*

*__description__*: Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| begin | `number` |  The position to start at |
| `Optional` end |  `undefined` &#124; `number`|  The position to end at |

**Returns:** `Uint8Array`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/ad73e60/packages/types/src/codec/U8a.ts#L60)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/U8a.ts:67](https://github.com/polkadot-js/api/blob/ad73e60/packages/types/src/codec/U8a.ts#L67)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides Uint8Array.toString*

*Defined in [codec/U8a.ts:74](https://github.com/polkadot-js/api/blob/ad73e60/packages/types/src/codec/U8a.ts#L74)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/U8a.ts:82](https://github.com/polkadot-js/api/blob/ad73e60/packages/types/src/codec/U8a.ts#L82)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

