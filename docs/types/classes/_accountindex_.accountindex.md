

# Hierarchy

↳  [U8a](_codec_u8a_.u8a.md)

**↳ AccountIndex**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new AccountIndex**(value?: * `BN` &#124; `number` &#124; `AnyU8a`*): [AccountIndex](_accountindex_.accountindex.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [AccountIndex.ts:25](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L25)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  `BN` &#124; `number` &#124; `AnyU8a`|  new Uint8Array() |

**Returns:** [AccountIndex](_accountindex_.accountindex.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/U8a.ts:35](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/codec/U8a.ts#L35)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [codec/U8a.ts:31](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/codec/U8a.ts#L31)*

**Returns:** `number`

___

# Methods

<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [AccountIndex.ts:99](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L99)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/codec/U8a.ts#L39)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [AccountIndex.ts:95](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L95)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Defined in [AccountIndex.ts:120](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L120)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [AccountIndex.ts:107](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L107)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="calclength"></a>

## `<Static>` calcLength

▸ **calcLength**(_value: * `BN` &#124; `number`*): `number`

*Defined in [AccountIndex.ts:56](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L56)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _value |  `BN` &#124; `number`|

**Returns:** `number`

___
<a id="decodeaccountindex"></a>

## `<Static>` decodeAccountIndex

▸ **decodeAccountIndex**(value: * `BN` &#124; `number` &#124; `AnyU8a`*): `Uint8Array`

*Defined in [AccountIndex.ts:32](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `BN` &#124; `number` &#124; `AnyU8a`|

**Returns:** `Uint8Array`

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(value: *`any`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[decodeU8a](_codec_u8a_.u8a.md#decodeu8a)*

*Defined in [codec/U8a.ts:21](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/codec/U8a.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___
<a id="readlength"></a>

## `<Static>` readLength

▸ **readLength**(input: *`Uint8Array`*): [`number`, `number`]

*Defined in [AccountIndex.ts:70](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [`number`, `number`]

___
<a id="writelength"></a>

## `<Static>` writeLength

▸ **writeLength**(input: *`Uint8Array`*): `Uint8Array`

*Defined in [AccountIndex.ts:86](https://github.com/polkadot-js/api/blob/c42b71a/packages/types/src/AccountIndex.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___

