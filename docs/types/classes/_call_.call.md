

Extrinsic function descriptor, as defined in [https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

# Hierarchy

↳  [CallIndex](_callindex_.callindex.md)

**↳ Call**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Call**(index: * [Call](_call_.call.md) &#124; [AnyU8a](../modules/_types_d_.md#anyu8a)*, meta: *[FunctionMetadata](_metadata_.functionmetadata.md)*, args: *`Array`<`any`>*): [Call](_call_.call.md)

*Overrides [CallIndex](_callindex_.callindex.md).[constructor](_callindex_.callindex.md#constructor)*

*Defined in [Call.ts:20](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/Call.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  [Call](_call_.call.md) &#124; [AnyU8a](../modules/_types_d_.md#anyu8a)|
| meta | [FunctionMetadata](_metadata_.functionmetadata.md) |
| args | `Array`<`any`> |

**Returns:** [Call](_call_.call.md)

___

# Properties

<a id="_args"></a>

## `<Protected>` _args

**● _args**: *`Array`<[Base](_codec_base_.base.md)>*

*Defined in [Call.ts:19](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/Call.ts#L19)*

___
<a id="_bitlength"></a>

## `<Protected>` _bitLength

**● _bitLength**: *`number`*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[_bitLength](_codec_u8afixed_.u8afixed.md#_bitlength)*

*Defined in [codec/U8aFixed.ts:14](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/U8aFixed.ts#L14)*

___
<a id="_meta"></a>

## `<Protected>` _meta

**● _meta**: *[FunctionMetadata](_metadata_.functionmetadata.md)*

*Defined in [Call.ts:20](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/Call.ts#L20)*

___
<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="args"></a>

##  args

getargs(): [Base](_codec_base_.base.md)<`any`>[]

*Defined in [Call.ts:34](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/Call.ts#L34)*

**Returns:** [Base](_codec_base_.base.md)<`any`>[]

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from [CallIndex](_callindex_.callindex.md).[callIndex](_callindex_.callindex.md#callindex)*

*Defined in [CallIndex.ts:14](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/CallIndex.ts#L14)*

**Returns:** `Uint8Array`

___
<a id="index"></a>

##  index

getindex(): `Uint8Array`

*Defined in [Call.ts:38](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/Call.ts#L38)*

**Returns:** `Uint8Array`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [codec/U8a.ts:25](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/U8a.ts#L25)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Defined in [Call.ts:42](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/Call.ts#L42)*

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___
<a id="methodindex"></a>

##  methodIndex

getmethodIndex(): `number`

*Inherited from [CallIndex](_callindex_.callindex.md).[methodIndex](_callindex_.callindex.md#methodindex)*

*Defined in [CallIndex.ts:18](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/CallIndex.ts#L18)*

**Returns:** `number`

___
<a id="sectionindex"></a>

##  sectionIndex

getsectionIndex(): `number`

*Inherited from [CallIndex](_callindex_.callindex.md).[sectionIndex](_callindex_.callindex.md#sectionindex)*

*Defined in [CallIndex.ts:22](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/CallIndex.ts#L22)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[byteLength](_codec_u8afixed_.u8afixed.md#bytelength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[byteLength](_codec_u8a_.u8a.md#bytelength)*

*Defined in [codec/U8aFixed.ts:28](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/U8aFixed.ts#L28)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [U8aFixed](_codec_u8afixed_.u8afixed.md)

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[fromJSON](_codec_u8afixed_.u8afixed.md#fromjson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[fromJSON](_codec_u8a_.u8a.md#fromjson)*

*Defined in [codec/U8aFixed.ts:32](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/U8aFixed.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [U8aFixed](_codec_u8afixed_.u8afixed.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [U8aFixed](_codec_u8afixed_.u8afixed.md)

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[fromU8a](_codec_u8afixed_.u8afixed.md#fromu8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[fromU8a](_codec_u8a_.u8a.md#fromu8a)*

*Defined in [codec/U8aFixed.ts:40](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/U8aFixed.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [U8aFixed](_codec_u8afixed_.u8afixed.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:45](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/U8a.ts#L45)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:49](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/U8a.ts#L49)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:57](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/codec/U8a.ts#L57)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Call.ts:46](https://github.com/polkadot-js/api/blob/427c38e/packages/types/src/Call.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

