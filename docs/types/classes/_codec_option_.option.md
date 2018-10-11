

# Type parameters
#### T 
# Hierarchy

 [Base](_codec_base_.base.md)<[Base](_codec_base_.base.md)<`T`>>

**↳ Option**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Option**(Type: *`object`*, value?: *`any`*): [Option](_codec_option_.option.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Option.ts:16](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `object` |
| `Optional` value | `any` |

**Returns:** [Option](_codec_option_.option.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *[Base](_codec_base_.base.md)<`T`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Defined in [codec/Option.ts:46](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L46)*

**Returns:** `boolean`

___
<a id="value"></a>

##  value

getvalue():  `T` &#124; `undefined`

*Defined in [codec/Option.ts:50](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L50)*

**Returns:**  `T` &#124; `undefined`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Option.ts:56](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L56)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Option](_codec_option_.option.md)<`T`>

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Option.ts:64](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Option](_codec_option_.option.md)<`T`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Option](_codec_option_.option.md)<`T`>

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Option.ts:74](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Option](_codec_option_.option.md)<`T`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Option.ts:84](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L84)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Option.ts:105](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L105)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Option.ts:90](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L90)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeoption"></a>

## `<Static>` decodeOption

▸ **decodeOption**<`O`>(Type: *`object`*, value?: *`any`*): [Base](_codec_base_.base.md)<`O`>

*Defined in [codec/Option.ts:26](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L26)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `object` |
| `Optional` value | `any` |

**Returns:** [Base](_codec_base_.base.md)<`O`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *`object`*): `object`

*Defined in [codec/Option.ts:38](https://github.com/polkadot-js/api/blob/27b2885/packages/types/src/codec/Option.ts#L38)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `object` |

**Returns:** `object`

___

