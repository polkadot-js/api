

# Hierarchy

↳  [Method](_method_.method.md)

**↳ Proposal**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Proposal**(index: * [Method](_method_.method.md) &#124; [AnyU8a](../modules/_types_d_.md#anyu8a)*, meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*, args?: *`Array`<`any`>*): [Proposal](_proposal_.proposal.md)

*Inherited from [Method](_method_.method.md).[constructor](_method_.method.md#constructor)*

*Overrides [MethodIndex](_methodindex_.methodindex.md).[constructor](_methodindex_.methodindex.md#constructor)*

*Defined in [Method.ts:29](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  [Method](_method_.method.md) &#124; [AnyU8a](../modules/_types_d_.md#anyu8a)|
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |
| `Optional` args | `Array`<`any`> |

**Returns:** [Proposal](_proposal_.proposal.md)

___

# Properties

<a id="_args"></a>

## `<Protected>` _args

**● _args**: *`Array`<[Base](_codec_base_.base.md)>*

*Inherited from [Method](_method_.method.md).[_args](_method_.method.md#_args)*

*Defined in [Method.ts:27](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L27)*

___
<a id="_bitlength"></a>

## `<Protected>` _bitLength

**● _bitLength**: *`number`*

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[_bitLength](_codec_u8afixed_.u8afixed.md#_bitlength)*

*Defined in [codec/U8aFixed.ts:14](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/codec/U8aFixed.ts#L14)*

___
<a id="_data"></a>

## `<Protected>` _data

**● _data**: *`Uint8Array`*

*Inherited from [Method](_method_.method.md).[_data](_method_.method.md#_data)*

*Defined in [Method.ts:28](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L28)*

___
<a id="_meta"></a>

## `<Protected>` _meta

**● _meta**: *[FunctionMetadata](_metadata_.functionmetadata.md)*

*Inherited from [Method](_method_.method.md).[_meta](_method_.method.md#_meta)*

*Defined in [Method.ts:29](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L29)*

___
<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="args"></a>

##  args

getargs(): `Array`<`any`>

*Inherited from [Method](_method_.method.md).[args](_method_.method.md#args)*

*Defined in [Method.ts:100](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L100)*

**Returns:** `Array`<`any`>

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from [MethodIndex](_methodindex_.methodindex.md).[callIndex](_methodindex_.methodindex.md#callindex)*

*Defined in [MethodIndex.ts:14](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/MethodIndex.ts#L14)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from [Method](_method_.method.md).[data](_method_.method.md#data)*

*Defined in [Method.ts:104](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L104)*

**Returns:** `Uint8Array`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [codec/U8a.ts:33](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/codec/U8a.ts#L33)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Inherited from [Method](_method_.method.md).[meta](_method_.method.md#meta)*

*Defined in [Method.ts:108](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L108)*

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___
<a id="methodindex"></a>

##  methodIndex

getmethodIndex(): `number`

*Inherited from [MethodIndex](_methodindex_.methodindex.md).[methodIndex](_methodindex_.methodindex.md#methodindex)*

*Defined in [MethodIndex.ts:18](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/MethodIndex.ts#L18)*

**Returns:** `number`

___
<a id="sectionindex"></a>

##  sectionIndex

getsectionIndex(): `number`

*Inherited from [MethodIndex](_methodindex_.methodindex.md).[sectionIndex](_methodindex_.methodindex.md#sectionindex)*

*Defined in [MethodIndex.ts:22](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/MethodIndex.ts#L22)*

**Returns:** `number`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Method](_method_.method.md).[byteLength](_method_.method.md#bytelength)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[byteLength](_codec_u8afixed_.u8afixed.md#bytelength)*

*Defined in [Method.ts:96](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L96)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [U8aFixed](_codec_u8afixed_.u8afixed.md)

*Inherited from [U8aFixed](_codec_u8afixed_.u8afixed.md).[fromJSON](_codec_u8afixed_.u8afixed.md#fromjson)*

*Overrides [U8a](_codec_u8a_.u8a.md).[fromJSON](_codec_u8a_.u8a.md#fromjson)*

*Defined in [codec/U8aFixed.ts:36](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/codec/U8aFixed.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [U8aFixed](_codec_u8afixed_.u8afixed.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Method](_method_.method.md)

*Inherited from [Method](_method_.method.md).[fromU8a](_method_.method.md#fromu8a)*

*Overrides [U8aFixed](_codec_u8afixed_.u8afixed.md).[fromU8a](_codec_u8afixed_.u8afixed.md#fromu8a)*

*Defined in [Method.ts:112](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L112)*

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

*Defined in [codec/U8a.ts:53](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/codec/U8a.ts#L53)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:57](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/codec/U8a.ts#L57)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:65](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/codec/U8a.ts#L65)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Method](_method_.method.md).[toU8a](_method_.method.md#tou8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Method.ts:127](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L127)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodemethod"></a>

## `<Static>` decodeMethod

▸ **decodeMethod**(meta: *[FunctionMetadata](_metadata_.functionmetadata.md)*, data: *`Uint8Array`*): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Method](_method_.method.md).[decodeMethod](_method_.method.md#decodemethod)*

*Defined in [Method.ts:45](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| meta | [FunctionMetadata](_metadata_.functionmetadata.md) |
| data | `Uint8Array` |

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(value: *`any`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[decodeU8a](_codec_u8a_.u8a.md#decodeu8a)*

*Defined in [codec/U8a.ts:23](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/codec/U8a.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___
<a id="encode"></a>

## `<Static>` encode

▸ **encode**(meta: *[FunctionMetadata](_metadata_.functionmetadata.md)*, args: *`Array`<`any`>*): `Uint8Array`

*Inherited from [Method](_method_.method.md).[encode](_method_.method.md#encode)*

*Defined in [Method.ts:57](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L57)*

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

*Inherited from [Method](_method_.method.md).[filterOrigin](_method_.method.md#filterorigin)*

*Defined in [Method.ts:66](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** `Array`<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

___
<a id="findfunction"></a>

## `<Static>` findFunction

▸ **findFunction**(callIndex: *`Uint8Array`*): `ExtrinsicFunction`

*Inherited from [Method](_method_.method.md).[findFunction](_method_.method.md#findfunction)*

*Defined in [Method.ts:82](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callIndex | `Uint8Array` |

**Returns:** `ExtrinsicFunction`

___
<a id="injectextrinsics"></a>

## `<Static>` injectExtrinsics

▸ **injectExtrinsics**(extrinsics: *`Extrinsics`*): `void`

*Inherited from [Method](_method_.method.md).[injectExtrinsics](_method_.method.md#injectextrinsics)*

*Defined in [Method.ts:88](https://github.com/polkadot-js/api/blob/1e9b69c/packages/types/src/Method.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsics | `Extrinsics` |

**Returns:** `void`

___

