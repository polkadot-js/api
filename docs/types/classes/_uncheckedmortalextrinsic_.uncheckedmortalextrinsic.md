

Unchecked mortal extrinsic, as defined here: [https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node). Can be:

*   signed, to create a transaction
*   left as is, to create an inherent

# Hierarchy

↳  [Extrinsic](_extrinsic_.extrinsic.md)

**↳ UncheckedMortalExtrinsic**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new UncheckedMortalExtrinsic**(call: *[Call](_call_.call.md)*): [UncheckedMortalExtrinsic](_uncheckedmortalextrinsic_.uncheckedmortalextrinsic.md)

*Overrides [U8a](_codec_u8a_.u8a.md).[constructor](_codec_u8a_.u8a.md#constructor)*

*Defined in [UncheckedMortalExtrinsic.ts:28](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/UncheckedMortalExtrinsic.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| call | [Call](_call_.call.md) |

**Returns:** [UncheckedMortalExtrinsic](_uncheckedmortalextrinsic_.uncheckedmortalextrinsic.md)

___

# Properties

<a id="_call"></a>

## `<Protected>` _call

**● _call**: *[Call](_call_.call.md)*

*Defined in [UncheckedMortalExtrinsic.ts:27](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/UncheckedMortalExtrinsic.ts#L27)*

___
<a id="_signature"></a>

## `<Protected>``<Optional>` _signature

**● _signature**: *`Uint8Array`*

*Defined in [UncheckedMortalExtrinsic.ts:28](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/UncheckedMortalExtrinsic.ts#L28)*

___
<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="hash"></a>

##  hash

gethash(): [Hash](_hash_.hash.md)

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[hash](_extrinsic_.extrinsic.md#hash)*

*Defined in [Extrinsic.ts:17](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/Extrinsic.ts#L17)*

**Returns:** [Hash](_hash_.hash.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned():  `undefined` &#124; `Uint8Array`

*Defined in [UncheckedMortalExtrinsic.ts:54](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/UncheckedMortalExtrinsic.ts#L54)*

**Returns:**  `undefined` &#124; `Uint8Array`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Bytes](_bytes_.bytes.md).[length](_bytes_.bytes.md#length)*

*Overrides [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [Bytes.ts:14](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/Bytes.ts#L14)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Bytes](_bytes_.bytes.md).[byteLength](_bytes_.bytes.md#bytelength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[byteLength](_codec_u8a_.u8a.md#bytelength)*

*Defined in [Bytes.ts:18](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/Bytes.ts#L18)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [U8a](_codec_u8a_.u8a.md)

*Inherited from [U8a](_codec_u8a_.u8a.md).[fromJSON](_codec_u8a_.u8a.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/U8a.ts:33](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/codec/U8a.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [U8a](_codec_u8a_.u8a.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Bytes](_bytes_.bytes.md)

*Inherited from [Bytes](_bytes_.bytes.md).[fromU8a](_bytes_.bytes.md#fromu8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[fromU8a](_codec_u8a_.u8a.md#fromu8a)*

*Defined in [Bytes.ts:22](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/Bytes.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Bytes](_bytes_.bytes.md)

___
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *[AnyNumber](../modules/_types_d_.md#anynumber)*, blockHash: *[AnyU8a](../modules/_types_d_.md#anyu8a)*): [UncheckedMortalExtrinsic](_uncheckedmortalextrinsic_.uncheckedmortalextrinsic.md)

*Defined in [UncheckedMortalExtrinsic.ts:58](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/UncheckedMortalExtrinsic.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| nonce | [AnyNumber](../modules/_types_d_.md#anynumber) |
| blockHash | [AnyU8a](../modules/_types_d_.md#anyu8a) |

**Returns:** [UncheckedMortalExtrinsic](_uncheckedmortalextrinsic_.uncheckedmortalextrinsic.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[toHex](_extrinsic_.extrinsic.md#tohex)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [Extrinsic.ts:23](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/Extrinsic.ts#L23)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Extrinsic](_extrinsic_.extrinsic.md).[toJSON](_extrinsic_.extrinsic.md#tojson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Defined in [Extrinsic.ts:27](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/Extrinsic.ts#L27)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:57](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/codec/U8a.ts#L57)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Bytes](_bytes_.bytes.md).[toU8a](_bytes_.bytes.md#tou8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Bytes.ts:30](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/Bytes.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="encode"></a>

## `<Static>` encode

▸ **encode**(call: *[Call](_call_.call.md)*, signature?: *[TransactionSignature](_transactionsignature_.transactionsignature.md)*): `Uint8Array`

*Defined in [UncheckedMortalExtrinsic.ts:37](https://github.com/polkadot-js/api/blob/605f11d/packages/types/src/UncheckedMortalExtrinsic.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| call | [Call](_call_.call.md) |
| `Optional` signature | [TransactionSignature](_transactionsignature_.transactionsignature.md) |

**Returns:** `Uint8Array`

___

