

Extrinsic function descriptor, as defined in [https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

# Hierarchy

↳  [MethodIndex](_methodindex_.methodindex.md)

**↳ Method**

↳  [Proposal](_proposal_.proposal.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Method**(index: * [Method](_method_.method.md) &#124; [AnyU8a](../modules/_types_d_.md#anyu8a)*, meta: *[FunctionMetadata](_metadata_.functionmetadata.md)*, args: *`Array`<`any`>*): [Method](_method_.method.md)

*Overrides [MethodIndex](_methodindex_.methodindex.md).[constructor](_methodindex_.methodindex.md#constructor)*

*Defined in [Method.ts:21](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  [Method](_method_.method.md) &#124; [AnyU8a](../modules/_types_d_.md#anyu8a)|
| meta | [FunctionMetadata](_metadata_.functionmetadata.md) |
| args | `Array`<`any`> |

**Returns:** [Method](_method_.method.md)

___

# Properties

<a id="_args"></a>

## `<Protected>` _args

**● _args**: *`Array`<[Base](_codec_base_.base.md)>*

*Defined in [Method.ts:19](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L19)*

___
<a id="_bitlength"></a>

## `<Protected>` _bitLength

**● _bitLength**: *`number`*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[_bitLength](_codec_u8afixed_.u8afixed.md#_bitlength)*

*Defined in [codec/U8aFixed.ts:14](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/codec/U8aFixed.ts#L14)*

___
<a id="_data"></a>

## `<Protected>` _data

**● _data**: *`Uint8Array`*

*Defined in [Method.ts:20](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L20)*

___
<a id="_meta"></a>

## `<Protected>` _meta

**● _meta**: *[FunctionMetadata](_metadata_.functionmetadata.md)*

*Defined in [Method.ts:21](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L21)*

___
<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="args"></a>

##  args

getargs(): `Array`<`any`>

*Defined in [Method.ts:71](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L71)*

**Returns:** `Array`<`any`>

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from [MethodIndex](_methodindex_.methodindex.md).[callIndex](_methodindex_.methodindex.md#callindex)*

*Defined in [MethodIndex.ts:14](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/MethodIndex.ts#L14)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Defined in [Method.ts:75](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L75)*

**Returns:** `Uint8Array`

___
<a id="index"></a>

##  index

getindex(): `Uint8Array`

*Defined in [Method.ts:79](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L79)*

**Returns:** `Uint8Array`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [codec/U8a.ts:25](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/codec/U8a.ts#L25)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Defined in [Method.ts:83](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L83)*

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___
<a id="methodindex"></a>

##  methodIndex

getmethodIndex(): `number`

*Inherited from [MethodIndex](_methodindex_.methodindex.md).[methodIndex](_methodindex_.methodindex.md#methodindex)*

*Defined in [MethodIndex.ts:18](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/MethodIndex.ts#L18)*

**Returns:** `number`

___
<a id="sectionindex"></a>

##  sectionIndex

getsectionIndex(): `number`

*Inherited from [MethodIndex](_methodindex_.methodindex.md).[sectionIndex](_methodindex_.methodindex.md#sectionindex)*

*Defined in [MethodIndex.ts:22](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/MethodIndex.ts#L22)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[byteLength](_codec_u8afixed_.u8afixed.md#bytelength)*

*Defined in [Method.ts:67](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L67)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [U8aFixed](_codec_u8afixed_.u8afixed.md)

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[fromJSON](_codec_u8afixed_.u8afixed.md#fromjson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[fromJSON](_codec_u8a_.u8a.md#fromjson)*

*Defined in [codec/U8aFixed.ts:36](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/codec/U8aFixed.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [U8aFixed](_codec_u8afixed_.u8afixed.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Method](_method_.method.md)

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[fromU8a](_codec_u8afixed_.u8afixed.md#fromu8a)*

*Defined in [Method.ts:87](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Method](_method_.method.md)

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:45](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/codec/U8a.ts#L45)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:49](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/codec/U8a.ts#L49)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:57](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/codec/U8a.ts#L57)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Method.ts:95](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**(meta: *[FunctionMetadata](_metadata_.functionmetadata.md)*, data: *`Uint8Array`*): `Array`<[Base](_codec_base_.base.md)>

*Defined in [Method.ts:37](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| meta | [FunctionMetadata](_metadata_.functionmetadata.md) |
| data | `Uint8Array` |

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="encode"></a>

## `<Static>` encode

▸ **encode**(meta: *[FunctionMetadata](_metadata_.functionmetadata.md)*, args: *`Array`<`any`>*): `Uint8Array`

*Defined in [Method.ts:49](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| meta | [FunctionMetadata](_metadata_.functionmetadata.md) |
| args | `Array`<`any`> |

**Returns:** `Uint8Array`

___
<a id="filterorigin"></a>

## `<Static>` filterOrigin

▸ **filterOrigin**(meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*): `Array`<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

*Defined in [Method.ts:58](https://github.com/polkadot-js/api/blob/12a3b4a/packages/types/src/Method.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** `Array`<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

___

