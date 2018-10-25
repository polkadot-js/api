

# Hierarchy

↳  [U8aFixed](_codec_u8afixed_.u8afixed.md)

**↳ AccountId**

↳  [AuthorityId](_authorityid_.authorityid.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new AccountId**(value?: *`AnyU8a`*): [AccountId](_accountid_.accountid.md)

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [AccountId.ts:16](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/AccountId.ts#L16)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `AnyU8a` |  new Uint8Array() |

**Returns:** [AccountId](_accountid_.accountid.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[encodedLength](_codec_u8afixed_.u8afixed.md#encodedlength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8aFixed.ts:32](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/codec/U8aFixed.ts#L32)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [codec/U8a.ts:31](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/codec/U8a.ts#L31)*

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/codec/U8a.ts#L39)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [AccountId.ts:40](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/AccountId.ts#L40)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Defined in [AccountId.ts:44](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/AccountId.ts#L44)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/U8a.ts:47](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/codec/U8a.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeaccountid"></a>

## `<Static>` decodeAccountId

▸ **decodeAccountId**(value: *`AnyU8a`*): `Uint8Array`

*Defined in [AccountId.ts:28](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/AccountId.ts#L28)*

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

*Defined in [codec/U8a.ts:21](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/codec/U8a.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___
<a id="encode"></a>

## `<Static>` encode

▸ **encode**(value: *`Uint8Array`*): `string`

*Defined in [AccountId.ts:24](https://github.com/polkadot-js/api/blob/7bfeaa1/packages/types/src/AccountId.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `Uint8Array` |

**Returns:** `string`

___

