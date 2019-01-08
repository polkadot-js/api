

*__name__*: AccountIndex

*__description__*: A wrapper around an AccountIndex, which is a shortened, variable-length encoding for an Account. We extends from [U32](_u32_.u32.md) to provide the number-like properties.

# Hierarchy

↳  [U32](_u32_.u32.md)

**↳ AccountIndex**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new AccountIndex**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [AccountIndex](_accountindex_.accountindex.md)

*Overrides [U32](_u32_.u32.md).[constructor](_u32_.u32.md#constructor)*

*Defined in [AccountIndex.ts:29](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L29)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyNumber](../modules/_types_.md#anynumber) |  new BN(0) |

**Returns:** [AccountIndex](_accountindex_.accountindex.md)

___

# Methods

<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Overrides AbstractInt.toBn*

*Defined in [AccountIndex.ts:92](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L92)*

*__description__*: Returns the BN representation of the AccountIndex

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Overrides [UInt](_codec_uint_.uint.md).[toHex](_codec_uint_.uint.md#tohex)*

*Defined in [AccountIndex.ts:99](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L99)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Overrides AbstractInt.toJSON*

*Defined in [AccountIndex.ts:108](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L108)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides AbstractInt.toString*

*Defined in [AccountIndex.ts:115](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L115)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*, isStorageKey?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides [UInt](_codec_uint_.uint.md).[toU8a](_codec_uint_.uint.md#tou8a)*

*Defined in [AccountIndex.ts:126](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L126)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |
| `Optional` isStorageKey | `undefined` | `false` | `true` |  true when encoded as part of a key, taking case of specific logic |

**Returns:** `Uint8Array`

___
<a id="calclength"></a>

## `<Static>` calcLength

▸ **calcLength**(_value: *`BN` | `number`*): `number`

*Defined in [AccountIndex.ts:52](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _value | `BN` | `number` |

**Returns:** `number`

___
<a id="decodeaccountindex"></a>

## `<Static>` decodeAccountIndex

▸ **decodeAccountIndex**(value: *[AnyNumber](../modules/_types_.md#anynumber)*): `BN` | `Uint8Array` | `number` | `string`

*Defined in [AccountIndex.ts:36](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** `BN` | `Uint8Array` | `number` | `string`

___
<a id="readlength"></a>

## `<Static>` readLength

▸ **readLength**(input: *`Uint8Array`*): [`number`, `number`]

*Defined in [AccountIndex.ts:66](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [`number`, `number`]

___
<a id="writelength"></a>

## `<Static>` writeLength

▸ **writeLength**(input: *`Uint8Array`*): `Uint8Array`

*Defined in [AccountIndex.ts:80](https://github.com/polkadot-js/api/blob/483a662/packages/types/src/AccountIndex.ts#L80)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___

