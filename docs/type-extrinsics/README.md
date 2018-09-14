
@polkadot/extrinsics
====================

## Index

### Type aliases

* [Extrinsic$Sections](#extrinsic_sections)
* [ExtrinsicUnchecked](#extrinsicunchecked)
* [ExtrinsicWithAccount](#extrinsicwithaccount)
* [ExtrinsicWithIndex](#extrinsicwithindex)
* [Extrinsics](#extrinsics)

### Functions

* [decodeLength](#decodelength)
* [encode](#encode)
* [encodeCall](#encodecall)
* [encodeExtrinsic](#encodeextrinsic)
* [encodeLength](#encodelength)
* [unchecked](#unchecked)
* [uncheckedLength](#uncheckedlength)

---

## Type aliases

<a id="extrinsic_sections"></a>

###  Extrinsic$Sections

**Ƭ Extrinsic$Sections**: *`keyof Extrinsics`*

*Defined in [types.d.ts:21](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/types.d.ts#L21)*

___
<a id="extrinsicunchecked"></a>

###  ExtrinsicUnchecked

**Ƭ ExtrinsicUnchecked**: *`Uint8Array`*

*Defined in [codec/types.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/types.d.ts#L9)*

___
<a id="extrinsicwithaccount"></a>

###  ExtrinsicWithAccount

**Ƭ ExtrinsicWithAccount**: *`Uint8Array`*

*Defined in [codec/types.d.ts:5](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/types.d.ts#L5)*

___
<a id="extrinsicwithindex"></a>

###  ExtrinsicWithIndex

**Ƭ ExtrinsicWithIndex**: *`Uint8Array`*

*Defined in [codec/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/types.d.ts#L7)*

___
<a id="extrinsics"></a>

###  Extrinsics

**Ƭ Extrinsics**: *`object`*

*Defined in [types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/types.d.ts#L7)*

#### Type declaration

___

## Functions

<a id="decodelength"></a>

###  decodeLength

▸ **decodeLength**(unchecked: *`Uint8Array`*): `UncheckedRaw`

*Defined in [codec/decode/length.ts:9](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/decode/length.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| unchecked | `Uint8Array` |

**Returns:** `UncheckedRaw`

___
<a id="encode"></a>

###  encode

▸ **encode**(publicKey: *`Uint8Array`*, index: * `number` &#124; `BN`*, extrinsic: *`SectionItem`<[Extrinsics](#extrinsics)>*, values: *`Array`<`any`>*, version: *`EncodingVersions`*): [ExtrinsicWithAccount](#extrinsicwithaccount)

*Defined in [codec/encode/index.ts:13](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/encode/index.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| index |  `number` &#124; `BN`|
| extrinsic | `SectionItem`<[Extrinsics](#extrinsics)> |
| values | `Array`<`any`> |
| version | `EncodingVersions` |

**Returns:** [ExtrinsicWithAccount](#extrinsicwithaccount)

___
<a id="encodecall"></a>

###  encodeCall

▸ **encodeCall**(publicKey: *`Uint8Array`*, nonce: * `number` &#124; `BN`*, data: *[ExtrinsicWithIndex](#extrinsicwithindex)*, version: *`EncodingVersions`*): [ExtrinsicWithAccount](#extrinsicwithaccount)

*Defined in [codec/encode/call.ts:14](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/encode/call.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| nonce |  `number` &#124; `BN`|
| data | [ExtrinsicWithIndex](#extrinsicwithindex) |
| version | `EncodingVersions` |

**Returns:** [ExtrinsicWithAccount](#extrinsicwithaccount)

___
<a id="encodeextrinsic"></a>

###  encodeExtrinsic

▸ **encodeExtrinsic**(extrinsic: *`SectionItem`<[Extrinsics](#extrinsics)>*, values: *`Array`<`any`>*, version: *`EncodingVersions`*): [ExtrinsicWithIndex](#extrinsicwithindex)

*Defined in [codec/encode/extrinsic.ts:12](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/encode/extrinsic.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsic | `SectionItem`<[Extrinsics](#extrinsics)> |
| values | `Array`<`any`> |
| version | `EncodingVersions` |

**Returns:** [ExtrinsicWithIndex](#extrinsicwithindex)

___
<a id="encodelength"></a>

###  encodeLength

▸ **encodeLength**(...values: *`Array`<`Uint8Array`>*): `Uint8Array`

*Defined in [codec/encode/length.ts:8](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/encode/length.ts#L8)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` values | `Array`<`Uint8Array`> |

**Returns:** `Uint8Array`

___
<a id="unchecked"></a>

###  unchecked

▸ **unchecked**(pair: *`KeyringPair`*, index: * `number` &#124; `BN`*, extrinsic: *`SectionItem`<[Extrinsics](#extrinsics)>*, values: *`Array`<`any`>*, version?: *`EncodingVersions`*): `UncheckedRaw`

*Defined in [codec/encode/unchecked.ts:16](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/encode/unchecked.ts#L16)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| pair | `KeyringPair` | - |
| index |  `number` &#124; `BN`| - |
| extrinsic | `SectionItem`<[Extrinsics](#extrinsics)> | - |
| values | `Array`<`any`> | - |
| `Default value` version | `EncodingVersions` | &quot;latest&quot; |

**Returns:** `UncheckedRaw`

___
<a id="uncheckedlength"></a>

###  uncheckedLength

▸ **uncheckedLength**(pair: *`KeyringPair`*, index: * `number` &#124; `BN`*, extrinsic: *`SectionItem`<[Extrinsics](#extrinsics)>*, values: *`Array`<`any`>*, version?: *`EncodingVersions`*): `UncheckedRaw`

*Defined in [codec/encode/uncheckedLength.ts:14](https://github.com/chevdor/polkadot-js-api/blob/16237c4/packages/type-extrinsics/src/codec/encode/uncheckedLength.ts#L14)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| pair | `KeyringPair` | - |
| index |  `number` &#124; `BN`| - |
| extrinsic | `SectionItem`<[Extrinsics](#extrinsics)> | - |
| values | `Array`<`any`> | - |
| `Default value` version | `EncodingVersions` | &quot;latest&quot; |

**Returns:** `UncheckedRaw`

___

