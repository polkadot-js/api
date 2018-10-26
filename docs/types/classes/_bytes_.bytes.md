

# Hierarchy

↳  [U8a](_codec_u8a_.u8a.md)

**↳ Bytes**

↳  [StorageData](_storagedata_.storagedata.md)

↳  [StorageKey](_storagekey_.storagekey.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Bytes**(value: *`AnyU8a`*): [Bytes](_bytes_.bytes.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [Bytes.ts:14](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/Bytes.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `AnyU8a` |

**Returns:** [Bytes](_bytes_.bytes.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [Bytes.ts:48](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/Bytes.ts#L48)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Overrides [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [Bytes.ts:44](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/Bytes.ts#L44)*

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/codec/U8a.ts#L39)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/codec/U8a.ts#L43)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/codec/U8a.ts#L51)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Bytes.ts:52](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/Bytes.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodebytes"></a>

## `<Static>` decodeBytes

▸ **decodeBytes**(value: *`AnyU8a`*): `Uint8Array`

*Defined in [Bytes.ts:19](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/Bytes.ts#L19)*

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

*Defined in [codec/U8a.ts:21](https://github.com/polkadot-js/api/blob/4997d8f/packages/types/src/codec/U8a.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___

