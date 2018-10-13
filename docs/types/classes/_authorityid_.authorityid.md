

# Hierarchy

↳  [AccountId](_accountid_.accountid.md)

**↳ AuthorityId**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new AuthorityId**(value?: *`AnyU8a`*): [AuthorityId](_authorityid_.authorityid.md)

*Inherited from [AccountId](_accountid_.accountid.md).[constructor](_accountid_.accountid.md#constructor)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [AccountId.ts:20](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/AccountId.ts#L20)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `AnyU8a` |  new Uint8Array() |

**Returns:** [AuthorityId](_authorityid_.authorityid.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [codec/U8a.ts:33](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/U8a.ts#L33)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[byteLength](_codec_u8afixed_.u8afixed.md#bytelength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[byteLength](_codec_u8a_.u8a.md#bytelength)*

*Defined in [codec/U8aFixed.ts:32](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/U8aFixed.ts#L32)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [AccountId](_accountid_.accountid.md)

*Inherited from [AccountId](_accountid_.accountid.md).[fromJSON](_accountid_.accountid.md#fromjson)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[fromJSON](_codec_u8afixed_.u8afixed.md#fromjson)*

*Defined in [AccountId.ts:44](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/AccountId.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [AccountId](_accountid_.accountid.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [AccountId](_accountid_.accountid.md)

*Inherited from [AccountId](_accountid_.accountid.md).[fromU8a](_accountid_.accountid.md#fromu8a)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[fromU8a](_codec_u8afixed_.u8afixed.md#fromu8a)*

*Defined in [AccountId.ts:50](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/AccountId.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [AccountId](_accountid_.accountid.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/U8a.ts#L53)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [AccountId](_accountid_.accountid.md).[toJSON](_accountid_.accountid.md#tojson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [AccountId.ts:56](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/AccountId.ts#L56)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [AccountId](_accountid_.accountid.md).[toString](_accountid_.accountid.md#tostring)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Defined in [AccountId.ts:60](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/AccountId.ts#L60)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/U8a.ts:61](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/U8a.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeaccountid"></a>

## `<Static>` decodeAccountId

▸ **decodeAccountId**(value: *`AnyU8a`*): `Uint8Array`

*Inherited from [AccountId](_accountid_.accountid.md).[decodeAccountId](_accountid_.accountid.md#decodeaccountid)*

*Defined in [AccountId.ts:32](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/AccountId.ts#L32)*

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

*Defined in [codec/U8a.ts:23](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/U8a.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___
<a id="encode"></a>

## `<Static>` encode

▸ **encode**(value: *`Uint8Array`*): `string`

*Inherited from [AccountId](_accountid_.accountid.md).[encode](_accountid_.accountid.md#encode)*

*Defined in [AccountId.ts:28](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/AccountId.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `Uint8Array` |

**Returns:** `string`

___

