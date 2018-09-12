
Intro
-----

This is the Polkadot JS Api documentation.

Start [here](globals.html)

## Index

### Type aliases

* [BlockDecoded](#blockdecoded)
* [BlockExtrinsicDecoded](#blockextrinsicdecoded)
* [BlockJustificationDecoded](#blockjustificationdecoded)
* [CreateItem](#createitem)
* [CreateItemOptions](#createitemoptions)
* [CreateItemOptionsMap](#createitemoptionsmap)
* [CreateItems](#createitems)
* [CreateSection](#createsection)
* [CreateSectionOptions](#createsectionoptions)
* [CreateSectionOptions$Fn](#createsectionoptions_fn)
* [CreateSectionOptions$Only](#createsectionoptions_only)
* [Decoder](#decoder)
* [EncodingVersions](#encodingversions)
* [ExtrinsicDecoded](#extrinsicdecoded)
* [KeyValue](#keyvalue)
* [Param](#param)
* [Param$Decoded](#param_decoded)
* [Param$Options](#param_options)
* [Param$Type](#param_type)
* [Param$Type$Array](#param_type_array)
* [Param$Types](#param_types)
* [Param$Value](#param_value)
* [Param$Value$Array](#param_value_array)
* [Param$Values](#param_values)
* [Params](#params)
* [Section](#section)
* [SectionItem](#sectionitem)
* [SectionItems](#sectionitems)
* [Sections](#sections)

### Functions

* [accountId](#accountid)
* [bn](#bn)
* [bool](#bool)
* [byte](#byte)
* [bytes](#bytes)
* [call](#call)
* [code](#code)
* [createMethod](#createmethod)
* [createParam](#createparam)
* [createSection](#createsection)
* [decode](#decode)
* [decodeValue](#decodevalue)
* [digest](#digest)
* [encodeParam](#encodeparam)
* [encodeParams](#encodeparams)
* [encodeType](#encodetype)
* [header](#header)
* [keyValue](#keyvalue)
* [misbehavior](#misbehavior)
* [passThrough](#passthrough)
* [signature](#signature)
* [storageKey](#storagekey)
* [string](#string)
* [time](#time)
* [typeToString](#typetostring)
* [u8a](#u8a)

---

## Type aliases

<a id="blockdecoded"></a>

###  BlockDecoded

**Ƭ BlockDecoded**: *`object`*

*Defined in [types.d.ts:45](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L45)*

#### Type declaration

___
<a id="blockextrinsicdecoded"></a>

###  BlockExtrinsicDecoded

**Ƭ BlockExtrinsicDecoded**: *`object`*

*Defined in [types.d.ts:28](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L28)*

#### Type declaration

___
<a id="blockjustificationdecoded"></a>

###  BlockJustificationDecoded

**Ƭ BlockJustificationDecoded**: *`object`*

*Defined in [types.d.ts:36](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L36)*

#### Type declaration

___
<a id="createitem"></a>

###  CreateItem

**Ƭ CreateItem**: *`function`*

*Defined in [types.d.ts:127](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L127)*

#### Type declaration
▸(options: *[CreateItemOptions](#createitemoptions)*): [SectionItem](#sectionitem)<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| options | [CreateItemOptions](#createitemoptions) |

**Returns:** [SectionItem](#sectionitem)<`T`>

___
<a id="createitemoptions"></a>

###  CreateItemOptions

**Ƭ CreateItemOptions**: *`object`*

*Defined in [types.d.ts:111](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L111)*

#### Type declaration

___
<a id="createitemoptionsmap"></a>

###  CreateItemOptionsMap

**Ƭ CreateItemOptionsMap**: *`object`*

*Defined in [types.d.ts:123](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L123)*

#### Type declaration

[index: `string`]: [CreateItemOptions](#createitemoptions)

___
<a id="createitems"></a>

###  CreateItems

**Ƭ CreateItems**: *`function`*

*Defined in [types.d.ts:129](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L129)*

#### Type declaration
▸(name: *`string`*, index?: * `undefined` &#124; `number`*): [CreateItem](#createitem)<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| `Optional` index |  `undefined` &#124; `number`|

**Returns:** [CreateItem](#createitem)<`T`>

___
<a id="createsection"></a>

###  CreateSection

**Ƭ CreateSection**: *`function`*

*Defined in [types.d.ts:143](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L143)*

#### Type declaration
▸(options: *[CreateSectionOptions](#createsectionoptions)<`T`, `Priv`, `Pub`>*): [Section](#section)<`T`, `Priv`, `Pub`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| options | [CreateSectionOptions](#createsectionoptions)<`T`, `Priv`, `Pub`> |

**Returns:** [Section](#section)<`T`, `Priv`, `Pub`>

___
<a id="createsectionoptions"></a>

###  CreateSectionOptions

**Ƭ CreateSectionOptions**: * [CreateSectionOptions$Only](#createsectionoptions_only)<`T`, `Priv`, `Pub`> &#124; [CreateSectionOptions$Fn](#createsectionoptions_fn)<`T`, `Priv`, `Pub`>
*

*Defined in [types.d.ts:141](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L141)*

___
<a id="createsectionoptions_fn"></a>

###  CreateSectionOptions$Fn

**Ƭ CreateSectionOptions$Fn**: *`function`*

*Defined in [types.d.ts:139](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L139)*

#### Type declaration
▸(method: *[CreateItems](#createitems)<`T`>*): [CreateSectionOptions$Only](#createsectionoptions_only)<`T`, `Priv`, `Pub`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | [CreateItems](#createitems)<`T`> |

**Returns:** [CreateSectionOptions$Only](#createsectionoptions_only)<`T`, `Priv`, `Pub`>

___
<a id="createsectionoptions_only"></a>

###  CreateSectionOptions$Only

**Ƭ CreateSectionOptions$Only**: *`object`*

*Defined in [types.d.ts:131](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L131)*

#### Type declaration

___
<a id="decoder"></a>

###  Decoder

**Ƭ Decoder**: *`function`*

*Defined in [decode/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/types.d.ts#L7)*

#### Type declaration
▸(type: *[Param$Types](#param_types)*, input: *`Uint8Array`*, version: *[EncodingVersions](#encodingversions)*, isStorage: *`boolean`*): [Param$Decoded](#param_decoded)

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [Param$Types](#param_types) |
| input | `Uint8Array` |
| version | [EncodingVersions](#encodingversions) |
| isStorage | `boolean` |

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="encodingversions"></a>

###  EncodingVersions

**Ƭ EncodingVersions**: * "poc-1" &#124; "latest"
*

*Defined in [types.d.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L11)*

___
<a id="extrinsicdecoded"></a>

###  ExtrinsicDecoded

**Ƭ ExtrinsicDecoded**: *`object`*

*Defined in [types.d.ts:23](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L23)*

#### Type declaration

___
<a id="keyvalue"></a>

###  KeyValue

**Ƭ KeyValue**: *`object`*

*Defined in [types.d.ts:51](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L51)*

#### Type declaration

___
<a id="param"></a>

###  Param

**Ƭ Param**: * [Param$Options](#param_options) & `object`
*

*Defined in [types.d.ts:71](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L71)*

___
<a id="param_decoded"></a>

###  Param$Decoded

**Ƭ Param$Decoded**: *`object`*

*Defined in [types.d.ts:62](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L62)*

#### Type declaration

___
<a id="param_options"></a>

###  Param$Options

**Ƭ Param$Options**: *`object`*

*Defined in [types.d.ts:67](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L67)*

#### Type declaration

___
<a id="param_type"></a>

###  Param$Type

**Ƭ Param$Type**: * "AccountId" &#124; "AccountIndex" &#124; "Balance" &#124; "BlockNumber" &#124; "bool" &#124; "Bytes" &#124; "Call" &#124; "CandidateReceipt" &#124; "Code" &#124; "Digest" &#124; "Gas" &#124; "Hash" &#124; "Header" &#124; "KeyValue" &#124; "MisbehaviorReport" &#124; "ParachainId" &#124; "PrendingExtrinsics" &#124; "PropIndex" &#124; "Proposal" &#124; "ReferendumIndex" &#124; "SessionKey" &#124; "Signature" &#124; "SignedBlock" &#124; "StorageKey" &#124; "StorageKeyValue" &#124; "StorageResult" &#124; "StorageResultSet" &#124; "String" &#124; "Timestamp" &#124; "u32" &#124; "u64" &#124; "u128" &#124; "VoteIndex" &#124; "VoteThreshold"
*

*Defined in [types.d.ts:17](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L17)*

___
<a id="param_type_array"></a>

###  Param$Type$Array

**Ƭ Param$Type$Array**: *`Array`< [Param$Type](#param_type) &#124; `Array`< [Param$Type](#param_type) &#124; `Array`<[Param$Type](#param_type)>>>*

*Defined in [types.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L19)*

___
<a id="param_types"></a>

###  Param$Types

**Ƭ Param$Types**: * [Param$Type](#param_type) &#124; [Param$Type$Array](#param_type_array)
*

*Defined in [types.d.ts:21](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L21)*

___
<a id="param_value"></a>

###  Param$Value

**Ƭ Param$Value**: * `Digest` &#124; `Header` &#124; [KeyValue](#keyvalue) &#124; `MisbehaviorReport` &#124; [ExtrinsicDecoded](#extrinsicdecoded) &#124; `BN` &#124; `Date` &#124; `Uint8Array` &#124; `boolean` &#124; `number` &#124; `string` &#124; `null`
*

*Defined in [types.d.ts:56](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L56)*

___
<a id="param_value_array"></a>

###  Param$Value$Array

**Ƭ Param$Value$Array**: *`Array`< [Param$Value](#param_value) &#124; `Array`< [Param$Value](#param_value) &#124; `Array`<[Param$Value](#param_value)>>>*

*Defined in [types.d.ts:58](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L58)*

___
<a id="param_values"></a>

###  Param$Values

**Ƭ Param$Values**: * [Param$Value](#param_value) &#124; [Param$Value$Array](#param_value_array)
*

*Defined in [types.d.ts:60](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L60)*

___
<a id="params"></a>

###  Params

**Ƭ Params**: *`Array`<[Param](#param)>*

*Defined in [types.d.ts:76](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L76)*

___
<a id="section"></a>

###  Section

**Ƭ Section**: *`object`*

*Defined in [types.d.ts:99](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L99)*

#### Type declaration

___
<a id="sectionitem"></a>

###  SectionItem

**Ƭ SectionItem**: *`object`*

*Defined in [types.d.ts:79](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L79)*

#### Type declaration

___
<a id="sectionitems"></a>

###  SectionItems

**Ƭ SectionItems**: *`object`*

*Defined in [types.d.ts:95](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L95)*

#### Type declaration

___
<a id="sections"></a>

###  Sections

**Ƭ Sections**: *`Map`<`T`, [Section](#section)<`T`, `Priv`, `Pub`>>*

*Defined in [types.d.ts:109](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L109)*

___

## Functions

<a id="accountid"></a>

###  accountId

▸ **accountId**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*, version: *[EncodingVersions](#encodingversions)*, isStorage: *`boolean`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/accountId.ts:13](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/accountId.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|
| version | [EncodingVersions](#encodingversions) |
| isStorage | `boolean` |

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="bn"></a>

###  bn

▸ **bn**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*, bitLength: * `32` &#124; `64` &#124; `128`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/bn.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/bn.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|
| bitLength |  `32` &#124; `64` &#124; `128`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="bool"></a>

###  bool

▸ **bool**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/bool.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/bool.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="byte"></a>

###  byte

▸ **byte**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/byte.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/byte.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="bytes"></a>

###  bytes

▸ **bytes**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/bytes.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/bytes.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="call"></a>

###  call

▸ **call**(decode: *[Decoder](#decoder)*, input: * `Uint8Array` &#124; `null` &#124; `undefined`*, isPublic: *`boolean`*, version: *[EncodingVersions](#encodingversions)*, isStorage: *`boolean`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/method.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/method.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| decode | [Decoder](#decoder) |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|
| isPublic | `boolean` |
| version | [EncodingVersions](#encodingversions) |
| isStorage | `boolean` |

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="code"></a>

###  code

▸ **code**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/code.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/code.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="createmethod"></a>

###  createMethod

▸ **createMethod**<`T`>(section: *`keyof T`*, sectionIndex: *`Uint8Array`*): [CreateItems](#createitems)<`T`>

*Defined in [method.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/method.ts#L11)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| section | `keyof T` |
| sectionIndex | `Uint8Array` |

**Returns:** [CreateItems](#createitems)<`T`>

___
<a id="createparam"></a>

###  createParam

▸ **createParam**(name: *`string`*, type: *[Param$Types](#param_types)*, __namedParameters?: *`object`*): [Param](#param)

*Defined in [param.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/param.ts#L7)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| type | [Param$Types](#param_types) | - |
| `Default value` __namedParameters | `object` |  { isOptional: false } |

**Returns:** [Param](#param)

___
<a id="createsection"></a>

###  createSection

▸ **createSection**<`T`>(name: *`keyof T`*, _index?: *`number`*): [CreateSection](#createsection)<`T`, `any`, `any`>

*Defined in [section.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/section.ts#L11)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| name | `keyof T` | - |
| `Default value` _index | `number` | 0 |

**Returns:** [CreateSection](#createsection)<`T`, `any`, `any`>

___
<a id="decode"></a>

###  decode

▸ **decode**(type: *[Param$Types](#param_types)*, _input: * `Uint8Array` &#124; `string` &#124; `null` &#124; `undefined`*, version: *[EncodingVersions](#encodingversions)*, isStorage?: *`boolean`*): [Param$Decoded](#param_decoded)

*Defined in [decode/index.ts:65](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/index.ts#L65)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| type | [Param$Types](#param_types) | - |
| _input |  `Uint8Array` &#124; `string` &#124; `null` &#124; `undefined`| - |
| version | [EncodingVersions](#encodingversions) | - |
| `Default value` isStorage | `boolean` | false |

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="decodevalue"></a>

###  decodeValue

▸ **decodeValue**(decode: *[Decoder](#decoder)*, type: *[Param$Type](#param_type)*, _input: * `Uint8Array` &#124; `string` &#124; `null` &#124; `undefined`*, version: *[EncodingVersions](#encodingversions)*, isStorage: *`boolean`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/index.ts:30](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/index.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| decode | [Decoder](#decoder) |
| type | [Param$Type](#param_type) |
| _input |  `Uint8Array` &#124; `string` &#124; `null` &#124; `undefined`|
| version | [EncodingVersions](#encodingversions) |
| isStorage | `boolean` |

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="digest"></a>

###  digest

▸ **digest**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/digest.ts:12](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/digest.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="encodeparam"></a>

###  encodeParam

▸ **encodeParam**(param: *[Param](#param)*, value: *`any`*, version?: *[EncodingVersions](#encodingversions)*): `Uint8Array`

*Defined in [encode/param.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/encode/param.ts#L14)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| param | [Param](#param) | - |
| value | `any` | - |
| `Default value` version | [EncodingVersions](#encodingversions) | &quot;latest&quot; |

**Returns:** `Uint8Array`

___
<a id="encodeparams"></a>

###  encodeParams

▸ **encodeParams**(params: *[Params](#params)*, values: *`Array`<`any`>*, version: *[EncodingVersions](#encodingversions)*): `Uint8Array`

*Defined in [encode/index.ts:12](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/encode/index.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | [Params](#params) |
| values | `Array`<`any`> |
| version | [EncodingVersions](#encodingversions) |

**Returns:** `Uint8Array`

___
<a id="encodetype"></a>

###  encodeType

▸ **encodeType**(type: *[Param$Type](#param_type)*, value: *`any`*, version: *[EncodingVersions](#encodingversions)*): `Uint8Array`

*Defined in [encode/type/index.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/encode/type/index.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [Param$Type](#param_type) |
| value | `any` |
| version | [EncodingVersions](#encodingversions) |

**Returns:** `Uint8Array`

___
<a id="header"></a>

###  header

▸ **header**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/header.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/header.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="keyvalue"></a>

###  keyValue

▸ **keyValue**(__namedParameters: *`object`*): `Uint8Array`

*Defined in [encode/type/keyValue.ts:12](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/encode/type/keyValue.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `Uint8Array`

___
<a id="misbehavior"></a>

###  misbehavior

▸ **misbehavior**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/misbehavior.ts:21](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/misbehavior.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="passthrough"></a>

###  passThrough

▸ **passThrough**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/passThrough.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/passThrough.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="signature"></a>

###  signature

▸ **signature**<`T`>(__namedParameters: *`object`*): `string`

*Defined in [signature.ts:20](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/signature.ts#L20)*

*__name__*: signature

*__signature__*: jsonrpcSignature (method: InterfaceMethodDefinition): string

*__summary__*: Returns a string representation of the method with inputs and outputs.

*__description__*: Formats the name, inputs and outputs into a human-readable string. This contains the input parameter names input types and output type.

*__example__*: import signature from '@polkadot/params/signature';

signature({ name: 'test\_method', params: \[ { name: 'dest', type: 'Address' } \], type: 'Address' }); // => test\_method (dest: Address): Address

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `string`

___
<a id="storagekey"></a>

###  storageKey

▸ **storageKey**(__namedParameters: *[`object`, `Array`]*): `Uint8Array`

*Defined in [encode/type/storageKey.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/encode/type/storageKey.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | [`object`, `Array`] |

**Returns:** `Uint8Array`

___
<a id="string"></a>

###  string

▸ **string**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/string.ts:12](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/string.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="time"></a>

###  time

▸ **time**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/time.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/time.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="typetostring"></a>

###  typeToString

▸ **typeToString**(type: *[Param$Types](#param_types)*): `string`

*Defined in [typeToString.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/typeToString.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [Param$Types](#param_types) |

**Returns:** `string`

___
<a id="u8a"></a>

###  u8a

▸ **u8a**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*, bitLength: *`number`*, offset: *`number`*): [Param$Decoded](#param_decoded)

*Defined in [decode/value/u8a.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/value/u8a.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|
| bitLength | `number` |
| offset | `number` |

**Returns:** [Param$Decoded](#param_decoded)

___

