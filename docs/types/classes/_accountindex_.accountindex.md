

# Hierarchy

↳  [U8a](_codec_u8a_.u8a.md)

**↳ AccountIndex**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new AccountIndex**(value?: *`AnyU8a`*): [AccountIndex](_accountindex_.accountindex.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [AccountIndex.ts:18](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L18)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `AnyU8a` |  new Uint8Array() |

**Returns:** [AccountIndex](_accountindex_.accountindex.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [codec/U8a.ts:33](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/codec/U8a.ts#L33)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[byteLength](_codec_u8a_.u8a.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/U8a.ts:37](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/codec/U8a.ts#L37)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [AccountIndex](_accountindex_.accountindex.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[fromJSON](_codec_u8a_.u8a.md#fromjson)*

*Defined in [AccountIndex.ts:70](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [AccountIndex](_accountindex_.accountindex.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [AccountIndex](_accountindex_.accountindex.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[fromU8a](_codec_u8a_.u8a.md#fromu8a)*

*Defined in [AccountIndex.ts:76](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [AccountIndex](_accountindex_.accountindex.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/codec/U8a.ts#L53)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [AccountIndex.ts:84](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L84)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Defined in [AccountIndex.ts:97](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L97)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [AccountIndex.ts:88](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeaccountindex"></a>

## `<Static>` decodeAccountIndex

▸ **decodeAccountIndex**(value: *`AnyU8a`*): `Uint8Array`

*Defined in [AccountIndex.ts:25](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `AnyU8a` |

**Returns:** `Uint8Array`

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(value: *`any`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[decodeU8a](_codec_u8a_.u8a.md#decodeu8a)*

*Defined in [codec/U8a.ts:23](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/codec/U8a.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___
<a id="readlength"></a>

## `<Static>` readLength

▸ **readLength**(input: *`Uint8Array`*): [`number`, `number`]

*Defined in [AccountIndex.ts:45](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [`number`, `number`]

___
<a id="writelength"></a>

## `<Static>` writeLength

▸ **writeLength**(input: *`Uint8Array`*): `Uint8Array`

*Defined in [AccountIndex.ts:61](https://github.com/polkadot-js/api/blob/e8ca742/packages/types/src/AccountIndex.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___

