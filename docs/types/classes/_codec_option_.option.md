

# Type parameters
#### T 
# Hierarchy

 [Base](_codec_base_.base.md)<[Base](_codec_base_.base.md)<`T`>>

**↳ Option**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Option**(Type: *`Constructor`<[Base](_codec_base_.base.md)<`T`>>*, value?: *`any`*): [Option](_codec_option_.option.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Option.ts:18](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`<[Base](_codec_base_.base.md)<`T`>> |
| `Optional` value | `any` |

**Returns:** [Option](_codec_option_.option.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *[Base](_codec_base_.base.md)<`T`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Defined in [codec/Option.ts:52](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L52)*

**Returns:** `boolean`

___
<a id="value"></a>

##  value

getvalue():  `T` &#124; `undefined`

*Defined in [codec/Option.ts:56](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L56)*

**Returns:**  `T` &#124; `undefined`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Option.ts:62](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L62)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Option](_codec_option_.option.md)<`T`>

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Option.ts:70](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L70)*

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

*Defined in [codec/Option.ts:80](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L80)*

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

*Defined in [codec/Option.ts:90](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L90)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Option.ts:111](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L111)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Option.ts:96](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeoption"></a>

## `<Static>` decodeOption

▸ **decodeOption**<`O`>(Type: *`Constructor`<[Base](_codec_base_.base.md)<`O`>>*, value?: *`any`*): [Base](_codec_base_.base.md)

*Defined in [codec/Option.ts:28](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L28)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`<[Base](_codec_base_.base.md)<`O`>> |
| `Optional` value | `any` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *`Constructor`<[Base](_codec_base_.base.md)<`O`>>*): `Constructor`<[Option](_codec_option_.option.md)<`O`>>

*Defined in [codec/Option.ts:44](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Option.ts#L44)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`<[Base](_codec_base_.base.md)<`O`>> |

**Returns:** `Constructor`<[Option](_codec_option_.option.md)<`O`>>

___

