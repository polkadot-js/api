

*__name__*: SessionKey

*__description__*: Wrapper for a SessionKey. Same as an normal [AuthorityId](_authorityid_.authorityid.md), i.e. a wrapper around publicKey.

# Hierarchy

↳  [AuthorityId](_authorityid_.authorityid.md)

**↳ SessionKey**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`number`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SessionKey**(value?: *[AnyU8a](../modules/_types_.md#anyu8a)*): [SessionKey](_sessionkey_.sessionkey.md)

*Inherited from [AccountId](_accountid_.accountid.md).[constructor](_accountid_.accountid.md#constructor)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [AccountId.ts:19](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/AccountId.ts#L19)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyU8a](../modules/_types_.md#anyu8a) |  new Uint8Array() |

**Returns:** [SessionKey](_sessionkey_.sessionkey.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/codec/U8a.ts#L36)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides Uint8Array.length*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/codec/U8a.ts#L43)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): `number`

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[bitLength](_codec_u8afixed_.u8afixed.md#bitlength)*

*Defined in [codec/U8aFixed.ts:39](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/codec/U8aFixed.ts#L39)*

*__description__*: Returns the number of bits in the value

**Returns:** `number`

___
<a id="subarray"></a>

##  subarray

▸ **subarray**(begin: *`number`*, end?: *`undefined` | `number`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides Uint8Array.subarray*

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/codec/U8a.ts#L53)*

*__description__*: Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| begin | `number` |  The position to start at |
| `Optional` end | `undefined` | `number` |  The position to end at |

**Returns:** `Uint8Array`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:60](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/codec/U8a.ts#L60)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [AccountId](_accountid_.accountid.md).[toJSON](_accountid_.accountid.md#tojson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [AccountId.ts:46](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/AccountId.ts#L46)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [AccountId](_accountid_.accountid.md).[toString](_accountid_.accountid.md#tostring)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Defined in [AccountId.ts:53](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/AccountId.ts#L53)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:82](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/codec/U8a.ts#L82)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="encode"></a>

## `<Static>` encode

▸ **encode**(value: *`Uint8Array`*): `string`

*Inherited from [AccountId](_accountid_.accountid.md).[encode](_accountid_.accountid.md#encode)*

*Defined in [AccountId.ts:27](https://github.com/polkadot-js/api/blob/2a2df9a/packages/types/src/AccountId.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `Uint8Array` |

**Returns:** `string`

___

