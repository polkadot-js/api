

# Type parameters
#### T :  `Codec`
# Hierarchy

 [Base](_codec_base_.base.md)<`T`>

**↳ Option**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Option**(Type: *`Constructor`*, value?: *`any`*): [Option](_codec_option_.option.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Option.ts:15](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor` |
| `Optional` value | `any` |

**Returns:** [Option](_codec_option_.option.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Option.ts:57](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L57)*

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Defined in [codec/Option.ts:45](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L45)*

**Returns:** `boolean`

___
<a id="issome"></a>

##  isSome

getisSome(): `boolean`

*Defined in [codec/Option.ts:49](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L49)*

**Returns:** `boolean`

___
<a id="value"></a>

##  value

getvalue(): `Codec`

*Defined in [codec/Option.ts:53](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L53)*

**Returns:** `Codec`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/Option.ts:61](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L61)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [codec/Option.ts:65](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L65)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [codec/Option.ts:84](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L84)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Option.ts:69](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="unwrap"></a>

##  unwrap

▸ **unwrap**(): `T`

*Defined in [codec/Option.ts:88](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L88)*

**Returns:** `T`

___
<a id="decodeoption"></a>

## `<Static>` decodeOption

▸ **decodeOption**<`O`>(Type: *`Constructor`*, value?: *`any`*): `Codec`

*Defined in [codec/Option.ts:22](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L22)*

**Type parameters:**

#### O 
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor` |
| `Optional` value | `any` |

**Returns:** `Codec`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *`Constructor`*): `Constructor`<[Option](_codec_option_.option.md)<`O`>>

*Defined in [codec/Option.ts:37](https://github.com/polkadot-js/api/blob/b6dd43e/packages/types/src/codec/Option.ts#L37)*

**Type parameters:**

#### O :  `Codec`
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor` |

**Returns:** `Constructor`<[Option](_codec_option_.option.md)<`O`>>

___

