

*__name__*: AccountId

*__description__*: A wrapper around an AccountId/PublicKey representation. Since we are dealing with underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is just a Uint8Array wrapper with a fixed length.

# Hierarchy

↳  [U8aFixed](_codec_u8afixed_.u8afixed.md)

**↳ AccountId**

↳  [AccountIdOf](_accountid_.accountidof.md)

↳  [AuthorityId](_authorityid_.authorityid.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[index: `number`\]:&nbsp;`number`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new AccountId**(value?: *[AnyU8a](../modules/_types_.md#anyu8a)*): [AccountId](_accountid_.accountid.md)

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[constructor](_codec_u8afixed_.u8afixed.md#constructor)*

*Defined in [AccountId.ts:19](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/AccountId.ts#L19)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyU8a](../modules/_types_.md#anyu8a) |  new Uint8Array() |

**Returns:** [AccountId](_accountid_.accountid.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [codec/U8a.ts:36](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/codec/U8a.ts#L36)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Inherited from [U8a](_codec_u8a_.u8a.md).[isEmpty](_codec_u8a_.u8a.md#isempty)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/codec/U8a.ts#L43)*

*__description__*: Returns true if the type wraps an empty/default all-0 value

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Overrides Uint8Array.length*

*Defined in [codec/U8a.ts:50](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/codec/U8a.ts#L50)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="bitlength"></a>

##  bitLength

▸ **bitLength**(): `number`

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[bitLength](_codec_u8afixed_.u8afixed.md#bitlength)*

*Defined in [codec/U8aFixed.ts:52](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/codec/U8aFixed.ts#L52)*

*__description__*: Returns the number of bits in the value

**Returns:** `number`

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Overrides [U8a](_codec_u8a_.u8a.md).[eq](_codec_u8a_.u8a.md#eq)*

*Defined in [AccountId.ts:46](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/AccountId.ts#L46)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="subarray"></a>

##  subarray

▸ **subarray**(begin: *`number`*, end?: *`undefined` | `number`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[subarray](_codec_u8a_.u8a.md#subarray)*

*Overrides Uint8Array.subarray*

*Defined in [codec/U8a.ts:73](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/codec/U8a.ts#L73)*

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

*Defined in [codec/U8a.ts:80](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/codec/U8a.ts#L80)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [AccountId.ts:53](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/AccountId.ts#L53)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Defined in [AccountId.ts:60](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/AccountId.ts#L60)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [codec/U8a.ts:102](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/codec/U8a.ts#L102)*

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

*Defined in [AccountId.ts:27](https://github.com/polkadot-js/api/blob/1b2694d/packages/types/src/AccountId.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `Uint8Array` |

**Returns:** `string`

___

