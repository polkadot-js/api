

*__name__*: LocKPeriods

*__description__*: A number of lock periods.

# Hierarchy

↳  [I8](_i8_.i8.md)

**↳ LocKPeriods**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new LocKPeriods**(value?: *[AnyNumber](../modules/_types_.md#anynumber)*): [LocKPeriods](_lockperiods_.lockperiods.md)

*Inherited from [I8](_i8_.i8.md).[constructor](_i8_.i8.md#constructor)*

*Overrides [Int](_codec_int_.int.md).[constructor](_codec_int_.int.md#constructor)*

*Defined in [I8.ts:14](https://github.com/polkadot-js/api/blob/dc62214/packages/types/src/I8.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [AnyNumber](../modules/_types_.md#anynumber) |

**Returns:** [LocKPeriods](_lockperiods_.lockperiods.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/Int.ts:36](https://github.com/polkadot-js/api/blob/dc62214/packages/types/src/codec/Int.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/Int.ts:48](https://github.com/polkadot-js/api/blob/dc62214/packages/types/src/codec/Int.ts#L48)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

