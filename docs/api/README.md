
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/api-provider.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api-provider) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api?path=packages/api-provider) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api?path=packages/api-provider#info=devDependencies)

@polkadot/api-provider
======================

Generic transport providers to handle the transport of method calls to and from Polkadot clients from applications interacting with it. Generally, unless you are operating at a low-level and taking care of encoding and decoding of parameters/results, it won't be directly used. API interfaces building on top these providers can support various transports with the same underlying interfaces.

Usage
-----

Installation -

```
npm install --save @polkadot/api-provider
```

Initialisation -

```js
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const version = await provider.send('client_version', []);

console.log('clientVersion', version);
```

## Index

### Classes

* [HttpProvider](classes/httpprovider.md)
* [WsProvider](classes/wsprovider.md)

### Interfaces

* [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)
* [ProviderInterface](interfaces/providerinterface.md)

### Type aliases

* [AccountId](#accountid)
* [ApiInterface](#apiinterface)
* [ApiInterface$Section](#apiinterface_section)
* [Balance](#balance)
* [Block](#block)
* [BlockDecoded](#blockdecoded)
* [BlockExtrinsicDecoded](#blockextrinsicdecoded)
* [BlockIncomplete](#blockincomplete)
* [BlockJustificationDecoded](#blockjustificationdecoded)
* [BlockNumber](#blocknumber)
* [Bytes](#bytes)
* [Candidate](#candidate)
* [CandidateReceipt](#candidatereceipt)
* [CandidateReceipt$BalanceUpload](#candidatereceipt_balanceupload)
* [CandidateReceipt$EgressQueueRoot](#candidatereceipt_egressqueueroot)
* [ChainId](#chainid)
* [CreateItem](#createitem)
* [CreateItemOptions](#createitemoptions)
* [CreateItemOptionsMap](#createitemoptionsmap)
* [CreateItems](#createitems)
* [CreateSection](#createsection)
* [CreateSectionOptions](#createsectionoptions)
* [CreateSectionOptions$Fn](#createsectionoptions_fn)
* [CreateSectionOptions$Only](#createsectionoptions_only)
* [Decoder](#decoder)
* [Digest](#digest)
* [Digest$Log](#digest_log)
* [EncodingVersions](#encodingversions)
* [Extrinsic$Sections](#extrinsic_sections)
* [ExtrinsicDecoded](#extrinsicdecoded)
* [ExtrinsicFunction](#extrinsicfunction)
* [ExtrinsicUnchecked](#extrinsicunchecked)
* [ExtrinsicWithAccount](#extrinsicwithaccount)
* [ExtrinsicWithIndex](#extrinsicwithindex)
* [Extrinsics](#extrinsics)
* [FormatterFunction](#formatterfunction)
* [H160](#h160)
* [H256](#h256)
* [H512](#h512)
* [Hash](#hash)
* [Header](#header)
* [HeaderHash](#headerhash)
* [HeaderIncomplete](#headerincomplete)
* [HttpState](#httpstate)
* [Index](#index)
* [Interface$Sections](#interface_sections)
* [Interfaces](#interfaces)
* [JsonAccountId](#jsonaccountid)
* [JsonAuthorityId](#jsonauthorityid)
* [JsonBlock](#jsonblock)
* [JsonBlockNumber](#jsonblocknumber)
* [JsonBnType](#jsonbntype)
* [JsonBytes](#jsonbytes)
* [JsonDigest](#jsondigest)
* [JsonH160](#jsonh160)
* [JsonH256](#jsonh256)
* [JsonH512](#jsonh512)
* [JsonHash](#jsonhash)
* [JsonHeader](#jsonheader)
* [JsonHeaderHash](#jsonheaderhash)
* [JsonJustification](#jsonjustification)
* [JsonJustification$Signature](#jsonjustification_signature)
* [JsonObjectId](#jsonobjectid)
* [JsonParaChainId](#jsonparachainid)
* [JsonRpcObject](#jsonrpcobject)
* [JsonRpcRequest](#jsonrpcrequest)
* [JsonRpcResponse](#jsonrpcresponse)
* [JsonRpcResponseBase](#jsonrpcresponsebase)
* [JsonRpcResponseBase$Error](#jsonrpcresponsebase_error)
* [JsonSignature](#jsonsignature)
* [JsonTransaction](#jsontransaction)
* [JsonU256](#jsonu256)
* [JsonU64](#jsonu64)
* [JsonUnchecked](#jsonunchecked)
* [Justification](#justification)
* [Justification$Signature](#justification_signature)
* [KeyValue](#keyvalue)
* [Keygen](#keygen)
* [MisbehaviorReport](#misbehaviorreport)
* [MockState](#mockstate)
* [MockState$Requests](#mockstate_requests)
* [MockState$Storage](#mockstate_storage)
* [MockState$Subscription$Callback](#mockstate_subscription_callback)
* [MockState$Subscriptions](#mockstate_subscriptions)
* [ObjectId](#objectid)
* [ParaChainId](#parachainid)
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
* [PrivateMethods](#privatemethods)
* [Proportion](#proportion)
* [ProviderInterface$Callback](#providerinterface_callback)
* [ProviderInterface$EmitCb](#providerinterface_emitcb)
* [ProviderInterface$Emitted](#providerinterface_emitted)
* [PublicMethods](#publicmethods)
* [Role](#role)
* [RoleMap](#rolemap)
* [RpcCoder](#rpccoder)
* [RpcCoderState](#rpccoderstate)
* [RxApiInterface](#rxapiinterface)
* [RxApiInterface$Method](#rxapiinterface_method)
* [RxApiInterface$Section](#rxapiinterface_section)
* [Section](#section)
* [SectionItem](#sectionitem)
* [SectionItems](#sectionitems)
* [Sections](#sections)
* [Signature](#signature)
* [SizeType](#sizetype)
* [Storage$Key$Value](#storage_key_value)
* [Storage$Sections](#storage_sections)
* [Storages](#storages)
* [Timestamp](#timestamp)
* [U128](#u128)
* [U256](#u256)
* [U32](#u32)
* [U64](#u64)
* [Unchecked](#unchecked)
* [UncheckedRaw](#uncheckedraw)

### Functions

* [accountId](#accountid)
* [accountIdDecode](#accountiddecode)
* [accountIdEncode](#accountidencode)
* [api](#api)
* [bindKey](#bindkey)
* [block](#block)
* [blockDecode](#blockdecode)
* [bn](#bn)
* [bnDecode](#bndecode)
* [bnEncode](#bnencode)
* [bool](#bool)
* [byte](#byte)
* [bytes](#bytes)
* [bytesDecode](#bytesdecode)
* [bytesEncode](#bytesencode)
* [cached](#cached)
* [call](#call)
* [code](#code)
* [connected](#connected)
* [createInterface](#createinterface)
* [createMethod](#createmethod)
* [createMethodSend](#createmethodsend)
* [createParam](#createparam)
* [createParams](#createparams)
* [createSection](#createsection)
* [decode](#decode)
* [decodeArray](#decodearray)
* [decodeBlock](#decodeblock)
* [decodeHeader](#decodeheader)
* [decodeJustification](#decodejustification)
* [decodeLength](#decodelength)
* [decodeRaw](#decoderaw)
* [decodeResponse](#decoderesponse)
* [decodeU8a](#decodeu8a)
* [decodeValue](#decodevalue)
* [digest](#digest)
* [echo](#echo)
* [encode](#encode)
* [encodeArray](#encodearray)
* [encodeBlock](#encodeblock)
* [encodeBlockRaw](#encodeblockraw)
* [encodeCall](#encodecall)
* [encodeExtrinsic](#encodeextrinsic)
* [encodeHeader](#encodeheader)
* [encodeJson](#encodejson)
* [encodeLength](#encodelength)
* [encodeObject](#encodeobject)
* [encodeParam](#encodeparam)
* [encodeParams](#encodeparams)
* [encodeType](#encodetype)
* [encodeU8a](#encodeu8a)
* [exposed](#exposed)
* [extrinsicDecode](#extrinsicdecode)
* [extrinsicsRootRaw](#extrinsicsrootraw)
* [format](#format)
* [formatInputs](#formatinputs)
* [formatOutput](#formatoutput)
* [formatParams](#formatparams)
* [formatResult](#formatresult)
* [hashDecode](#hashdecode)
* [hashEncode](#hashencode)
* [header](#header)
* [headerDecode](#headerdecode)
* [headerEncode](#headerencode)
* [headerHash](#headerhash)
* [justificationDecode](#justificationdecode)
* [justificationEncode](#justificationencode)
* [keyValue](#keyvalue)
* [methodSubscribe](#methodsubscribe)
* [misbehavior](#misbehavior)
* [mockProvider](#mockprovider)
* [mocks](#mocks)
* [objectIdDecode](#objectiddecode)
* [objectIdEncode](#objectidencode)
* [observable](#observable)
* [on](#on)
* [parachainIdDecode](#parachainiddecode)
* [parachainIdEncode](#parachainidencode)
* [passThrough](#passthrough)
* [rolesFromId](#rolesfromid)
* [rolesToId](#rolestoid)
* [rpcCoder](#rpccoder)
* [rxApi](#rxapi)
* [send](#send)
* [signature](#signature)
* [signatureDecode](#signaturedecode)
* [signatureEncode](#signatureencode)
* [state](#state)
* [storageKey](#storagekey)
* [string](#string)
* [subscribe](#subscribe)
* [subscription](#subscription)
* [time](#time)
* [typeToString](#typetostring)
* [u8a](#u8a)
* [unchecked](#unchecked)
* [uncheckedLength](#uncheckedlength)
* [unsubscribe](#unsubscribe)

---

## Type aliases

<a id="accountid"></a>

###  AccountId

**Ƭ AccountId**: *[H256](#h256)*

*Defined in [packages/type-primitives/src/base.d.ts:17](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L17)*
*Defined in packages/type-primitives/build/base.d.ts:17*

___
<a id="apiinterface"></a>

###  ApiInterface

**Ƭ ApiInterface**: *`object`*

*Defined in [packages/api/src/types.d.ts:18](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api/src/types.d.ts#L18)*
*Defined in packages/api/build/types.d.ts:18*

#### Type declaration

___
<a id="apiinterface_section"></a>

###  ApiInterface$Section

**Ƭ ApiInterface$Section**: *`object`*

*Defined in [packages/api/src/types.d.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api/src/types.d.ts#L14)*
*Defined in packages/api/build/types.d.ts:14*

#### Type declaration

[index: `string`]: `ApiInterface$Section$Method`

___
<a id="balance"></a>

###  Balance

**Ƭ Balance**: *[U128](#u128)*

*Defined in [packages/type-primitives/src/base.d.ts:18](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L18)*
*Defined in packages/type-primitives/build/base.d.ts:18*

___
<a id="block"></a>

###  Block

**Ƭ Block**: *`object`*

*Defined in packages/type-primitives/build/block.d.ts:8*
*Defined in [packages/type-primitives/src/block.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/block.d.ts#L8)*

#### Type declaration

___
<a id="blockdecoded"></a>

###  BlockDecoded

**Ƭ BlockDecoded**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:45](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L45)*
*Defined in packages/type-params/build/types.d.ts:45*

#### Type declaration

___
<a id="blockextrinsicdecoded"></a>

###  BlockExtrinsicDecoded

**Ƭ BlockExtrinsicDecoded**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:28](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L28)*
*Defined in packages/type-params/build/types.d.ts:28*

#### Type declaration

___
<a id="blockincomplete"></a>

###  BlockIncomplete

**Ƭ BlockIncomplete**: *`object`*

*Defined in [packages/type-primitives/src/create/types.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/create/types.d.ts#L19)*
*Defined in packages/type-primitives/build/create/types.d.ts:19*

#### Type declaration

___
<a id="blockjustificationdecoded"></a>

###  BlockJustificationDecoded

**Ƭ BlockJustificationDecoded**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:36](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L36)*
*Defined in packages/type-params/build/types.d.ts:36*

#### Type declaration

___
<a id="blocknumber"></a>

###  BlockNumber

**Ƭ BlockNumber**: *[U64](#u64)*

*Defined in [packages/type-primitives/src/base.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L19)*
*Defined in packages/type-primitives/build/base.d.ts:19*

___
<a id="bytes"></a>

###  Bytes

**Ƭ Bytes**: *`Uint8Array`*

*Defined in [packages/type-primitives/src/base.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L7)*
*Defined in packages/type-primitives/build/base.d.ts:7*

___
<a id="candidate"></a>

###  Candidate

**Ƭ Candidate**: *`object`*

*Defined in packages/type-primitives/build/candidate.d.ts:7*
*Defined in [packages/type-primitives/src/candidate.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/candidate.d.ts#L7)*

#### Type declaration

___
<a id="candidatereceipt"></a>

###  CandidateReceipt

**Ƭ CandidateReceipt**: *`object`*

*Defined in packages/type-primitives/build/candidate.d.ts:17*
*Defined in [packages/type-primitives/src/candidate.d.ts:17](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/candidate.d.ts#L17)*

#### Type declaration

___
<a id="candidatereceipt_balanceupload"></a>

###  CandidateReceipt$BalanceUpload

**Ƭ CandidateReceipt$BalanceUpload**: *[[AccountId](#accountid), [Balance](#balance)]*

*Defined in packages/type-primitives/build/candidate.d.ts:14*
*Defined in [packages/type-primitives/src/candidate.d.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/candidate.d.ts#L14)*

___
<a id="candidatereceipt_egressqueueroot"></a>

###  CandidateReceipt$EgressQueueRoot

**Ƭ CandidateReceipt$EgressQueueRoot**: *[[ChainId](#chainid), [Hash](#hash)]*

*Defined in packages/type-primitives/build/candidate.d.ts:15*
*Defined in [packages/type-primitives/src/candidate.d.ts:15](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/candidate.d.ts#L15)*

___
<a id="chainid"></a>

###  ChainId

**Ƭ ChainId**: *[U32](#u32)*

*Defined in [packages/type-primitives/src/base.d.ts:20](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L20)*
*Defined in packages/type-primitives/build/base.d.ts:20*

___
<a id="createitem"></a>

###  CreateItem

**Ƭ CreateItem**: *`function`*

*Defined in [packages/type-params/src/types.d.ts:127](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L127)*
*Defined in packages/type-params/build/types.d.ts:127*

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

*Defined in [packages/type-params/src/types.d.ts:111](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L111)*
*Defined in packages/type-params/build/types.d.ts:111*

#### Type declaration

___
<a id="createitemoptionsmap"></a>

###  CreateItemOptionsMap

**Ƭ CreateItemOptionsMap**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:123](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L123)*
*Defined in packages/type-params/build/types.d.ts:123*

#### Type declaration

[index: `string`]: [CreateItemOptions](#createitemoptions)

___
<a id="createitems"></a>

###  CreateItems

**Ƭ CreateItems**: *`function`*

*Defined in [packages/type-params/src/types.d.ts:129](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L129)*
*Defined in packages/type-params/build/types.d.ts:129*

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

*Defined in [packages/type-params/src/types.d.ts:143](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L143)*
*Defined in packages/type-params/build/types.d.ts:143*

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

*Defined in [packages/type-params/src/types.d.ts:141](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L141)*
*Defined in packages/type-params/build/types.d.ts:141*

___
<a id="createsectionoptions_fn"></a>

###  CreateSectionOptions$Fn

**Ƭ CreateSectionOptions$Fn**: *`function`*

*Defined in [packages/type-params/src/types.d.ts:139](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L139)*
*Defined in packages/type-params/build/types.d.ts:139*

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

*Defined in [packages/type-params/src/types.d.ts:131](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L131)*
*Defined in packages/type-params/build/types.d.ts:131*

#### Type declaration

___
<a id="decoder"></a>

###  Decoder

**Ƭ Decoder**: *`function`*

*Defined in [packages/type-params/src/decode/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/decode/types.d.ts#L7)*
*Defined in packages/type-params/build/decode/types.d.ts:7*

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
<a id="digest"></a>

###  Digest

**Ƭ Digest**: *`object`*

*Defined in [packages/type-primitives/src/digest.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/digest.d.ts#L9)*
*Defined in packages/type-primitives/build/digest.d.ts:9*

#### Type declaration

___
<a id="digest_log"></a>

###  Digest$Log

**Ƭ Digest$Log**: *[Bytes](#bytes)*

*Defined in [packages/type-primitives/src/digest.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/digest.d.ts#L7)*
*Defined in packages/type-primitives/build/digest.d.ts:7*

___
<a id="encodingversions"></a>

###  EncodingVersions

**Ƭ EncodingVersions**: * "poc-1" &#124; "latest"
*

*Defined in [packages/type-params/src/types.d.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L11)*
*Defined in packages/type-params/build/types.d.ts:11*

___
<a id="extrinsic_sections"></a>

###  Extrinsic$Sections

**Ƭ Extrinsic$Sections**: *`keyof Extrinsics`*

*Defined in [packages/type-extrinsics/src/types.d.ts:21](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-extrinsics/src/types.d.ts#L21)*
*Defined in packages/type-extrinsics/build/types.d.ts:21*

___
<a id="extrinsicdecoded"></a>

###  ExtrinsicDecoded

**Ƭ ExtrinsicDecoded**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:23](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L23)*
*Defined in packages/type-params/build/types.d.ts:23*

#### Type declaration

___
<a id="extrinsicfunction"></a>

###  ExtrinsicFunction

**Ƭ ExtrinsicFunction**: *`Uint8Array`*

*Defined in [packages/type-primitives/src/extrinsic.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/extrinsic.d.ts#L8)*
*Defined in packages/type-primitives/build/extrinsic.d.ts:8*

___
<a id="extrinsicunchecked"></a>

###  ExtrinsicUnchecked

**Ƭ ExtrinsicUnchecked**: *`Uint8Array`*

*Defined in packages/type-extrinsics/build/codec/types.d.ts:9*
*Defined in [packages/type-extrinsics/src/codec/types.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-extrinsics/src/codec/types.d.ts#L9)*

___
<a id="extrinsicwithaccount"></a>

###  ExtrinsicWithAccount

**Ƭ ExtrinsicWithAccount**: *`Uint8Array`*

*Defined in packages/type-extrinsics/build/codec/types.d.ts:5*
*Defined in [packages/type-extrinsics/src/codec/types.d.ts:5](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-extrinsics/src/codec/types.d.ts#L5)*

___
<a id="extrinsicwithindex"></a>

###  ExtrinsicWithIndex

**Ƭ ExtrinsicWithIndex**: *`Uint8Array`*

*Defined in packages/type-extrinsics/build/codec/types.d.ts:7*
*Defined in [packages/type-extrinsics/src/codec/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-extrinsics/src/codec/types.d.ts#L7)*

___
<a id="extrinsics"></a>

###  Extrinsics

**Ƭ Extrinsics**: *`object`*

*Defined in [packages/type-extrinsics/src/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-extrinsics/src/types.d.ts#L7)*
*Defined in packages/type-extrinsics/build/types.d.ts:7*

#### Type declaration

___
<a id="formatterfunction"></a>

###  FormatterFunction

**Ƭ FormatterFunction**: *`function`*

*Defined in [packages/api-format/src/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-format/src/types.d.ts#L7)*
*Defined in packages/api-format/build/types.d.ts:7*

#### Type declaration
▸(value: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___
<a id="h160"></a>

###  H160

**Ƭ H160**: *`Uint8Array`*

*Defined in [packages/type-primitives/src/base.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L9)*
*Defined in packages/type-primitives/build/base.d.ts:9*

___
<a id="h256"></a>

###  H256

**Ƭ H256**: *`Uint8Array`*

*Defined in [packages/type-primitives/src/base.d.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L10)*
*Defined in packages/type-primitives/build/base.d.ts:10*

___
<a id="h512"></a>

###  H512

**Ƭ H512**: *`Uint8Array`*

*Defined in [packages/type-primitives/src/base.d.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L11)*
*Defined in packages/type-primitives/build/base.d.ts:11*

___
<a id="hash"></a>

###  Hash

**Ƭ Hash**: *`Uint8Array`*

*Defined in [packages/type-primitives/src/base.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L8)*
*Defined in packages/type-primitives/build/base.d.ts:8*

___
<a id="header"></a>

###  Header

**Ƭ Header**: *`object`*

*Defined in [packages/type-primitives/src/header.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/header.d.ts#L8)*
*Defined in packages/type-primitives/build/header.d.ts:8*

#### Type declaration

___
<a id="headerhash"></a>

###  HeaderHash

**Ƭ HeaderHash**: *[H256](#h256)*

*Defined in [packages/type-primitives/src/base.d.ts:21](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L21)*
*Defined in packages/type-primitives/build/base.d.ts:21*

___
<a id="headerincomplete"></a>

###  HeaderIncomplete

**Ƭ HeaderIncomplete**: *`object`*

*Defined in [packages/type-primitives/src/create/types.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/create/types.d.ts#L9)*
*Defined in packages/type-primitives/build/create/types.d.ts:9*

#### Type declaration

___
<a id="httpstate"></a>

###  HttpState

**Ƭ HttpState**: *`object`*

*Defined in packages/api-provider/build/http/types.d.ts:8*
*Defined in [packages/api-provider/src/http/types.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/http/types.d.ts#L8)*

#### Type declaration

___
<a id="index"></a>

###  Index

**Ƭ Index**: *[U32](#u32)*

*Defined in [packages/type-primitives/src/base.d.ts:22](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L22)*
*Defined in packages/type-primitives/build/base.d.ts:22*

___
<a id="interface_sections"></a>

###  Interface$Sections

**Ƭ Interface$Sections**: *`keyof Interfaces`*

*Defined in [packages/type-jsonrpc/src/types.d.ts:18](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/types.d.ts#L18)*
*Defined in packages/type-jsonrpc/build/types.d.ts:18*

___
<a id="interfaces"></a>

###  Interfaces

**Ƭ Interfaces**: *`object`*

*Defined in [packages/type-jsonrpc/src/types.d.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/types.d.ts#L11)*
*Defined in packages/type-jsonrpc/build/types.d.ts:11*

#### Type declaration

___
<a id="jsonaccountid"></a>

###  JsonAccountId

**Ƭ JsonAccountId**: *[JsonHash](#jsonhash)*

*Defined in [packages/type-primitives/src/json/types.d.ts:18](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L18)*
*Defined in packages/type-primitives/build/json/types.d.ts:18*

___
<a id="jsonauthorityid"></a>

###  JsonAuthorityId

**Ƭ JsonAuthorityId**: *[JsonHash](#jsonhash)*

*Defined in [packages/type-primitives/src/json/types.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L19)*
*Defined in packages/type-primitives/build/json/types.d.ts:19*

___
<a id="jsonblock"></a>

###  JsonBlock

**Ƭ JsonBlock**: *`object`*

*Defined in [packages/type-primitives/src/json/types.d.ts:57](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L57)*
*Defined in packages/type-primitives/build/json/types.d.ts:57*

#### Type declaration

___
<a id="jsonblocknumber"></a>

###  JsonBlockNumber

**Ƭ JsonBlockNumber**: *[JsonU64](#jsonu64)*

*Defined in [packages/type-primitives/src/json/types.d.ts:20](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L20)*
*Defined in packages/type-primitives/build/json/types.d.ts:20*

___
<a id="jsonbntype"></a>

###  JsonBnType

**Ƭ JsonBnType**: *`string`*

*Defined in [packages/type-primitives/src/json/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L7)*
*Defined in packages/type-primitives/build/json/types.d.ts:7*

___
<a id="jsonbytes"></a>

###  JsonBytes

**Ƭ JsonBytes**: * `string` &#124; `Array`<`number`>
*

*Defined in [packages/type-primitives/src/json/types.d.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L10)*
*Defined in packages/type-primitives/build/json/types.d.ts:10*

___
<a id="jsondigest"></a>

###  JsonDigest

**Ƭ JsonDigest**: *`object`*

*Defined in [packages/type-primitives/src/json/types.d.ts:37](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L37)*
*Defined in packages/type-primitives/build/json/types.d.ts:37*

#### Type declaration

___
<a id="jsonh160"></a>

###  JsonH160

**Ƭ JsonH160**: *[JsonHash](#jsonhash)*

*Defined in [packages/type-primitives/src/json/types.d.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L11)*
*Defined in packages/type-primitives/build/json/types.d.ts:11*

___
<a id="jsonh256"></a>

###  JsonH256

**Ƭ JsonH256**: *[JsonHash](#jsonhash)*

*Defined in [packages/type-primitives/src/json/types.d.ts:12](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L12)*
*Defined in packages/type-primitives/build/json/types.d.ts:12*

___
<a id="jsonh512"></a>

###  JsonH512

**Ƭ JsonH512**: *[JsonHash](#jsonhash)*

*Defined in [packages/type-primitives/src/json/types.d.ts:13](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L13)*
*Defined in packages/type-primitives/build/json/types.d.ts:13*

___
<a id="jsonhash"></a>

###  JsonHash

**Ƭ JsonHash**: *`string`*

*Defined in [packages/type-primitives/src/json/types.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L8)*
*Defined in packages/type-primitives/build/json/types.d.ts:8*

___
<a id="jsonheader"></a>

###  JsonHeader

**Ƭ JsonHeader**: *`object`*

*Defined in [packages/type-primitives/src/json/types.d.ts:41](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L41)*
*Defined in packages/type-primitives/build/json/types.d.ts:41*

#### Type declaration

___
<a id="jsonheaderhash"></a>

###  JsonHeaderHash

**Ƭ JsonHeaderHash**: *[JsonH256](#jsonh256)*

*Defined in [packages/type-primitives/src/json/types.d.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L14)*
*Defined in packages/type-primitives/build/json/types.d.ts:14*

___
<a id="jsonjustification"></a>

###  JsonJustification

**Ƭ JsonJustification**: *`object`*

*Defined in [packages/type-primitives/src/json/types.d.ts:51](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L51)*
*Defined in packages/type-primitives/build/json/types.d.ts:51*

#### Type declaration

___
<a id="jsonjustification_signature"></a>

###  JsonJustification$Signature

**Ƭ JsonJustification$Signature**: *[`string`, `string`]*

*Defined in [packages/type-primitives/src/json/types.d.ts:49](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L49)*
*Defined in packages/type-primitives/build/json/types.d.ts:49*

___
<a id="jsonobjectid"></a>

###  JsonObjectId

**Ƭ JsonObjectId**: *[JsonU64](#jsonu64)*

*Defined in [packages/type-primitives/src/json/types.d.ts:21](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L21)*
*Defined in packages/type-primitives/build/json/types.d.ts:21*

___
<a id="jsonparachainid"></a>

###  JsonParaChainId

**Ƭ JsonParaChainId**: *[JsonU64](#jsonu64)*

*Defined in [packages/type-primitives/src/json/types.d.ts:22](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L22)*
*Defined in packages/type-primitives/build/json/types.d.ts:22*

___
<a id="jsonrpcobject"></a>

###  JsonRpcObject

**Ƭ JsonRpcObject**: *`object`*

*Defined in [packages/api-provider/src/types.d.ts:5](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/types.d.ts#L5)*
*Defined in packages/api-provider/build/types.d.ts:5*

#### Type declaration

___
<a id="jsonrpcrequest"></a>

###  JsonRpcRequest

**Ƭ JsonRpcRequest**: * [JsonRpcObject](#jsonrpcobject) & `object`
*

*Defined in [packages/api-provider/src/types.d.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/types.d.ts#L10)*
*Defined in packages/api-provider/build/types.d.ts:10*

___
<a id="jsonrpcresponse"></a>

###  JsonRpcResponse

**Ƭ JsonRpcResponse**: * [JsonRpcObject](#jsonrpcobject) & [JsonRpcResponseBase](#jsonrpcresponsebase)
*

*Defined in [packages/api-provider/src/types.d.ts:36](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/types.d.ts#L36)*
*Defined in packages/api-provider/build/types.d.ts:36*

___
<a id="jsonrpcresponsebase"></a>

###  JsonRpcResponseBase

**Ƭ JsonRpcResponseBase**: * `JsonRpcResponse$Single` & `JsonRpcResponse$Subscription`
*

*Defined in [packages/api-provider/src/types.d.ts:34](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/types.d.ts#L34)*
*Defined in packages/api-provider/build/types.d.ts:34*

___
<a id="jsonrpcresponsebase_error"></a>

###  JsonRpcResponseBase$Error

**Ƭ JsonRpcResponseBase$Error**: *`object`*

*Defined in [packages/api-provider/src/types.d.ts:15](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/types.d.ts#L15)*
*Defined in packages/api-provider/build/types.d.ts:15*

#### Type declaration

___
<a id="jsonsignature"></a>

###  JsonSignature

**Ƭ JsonSignature**: *[JsonHash](#jsonhash)*

*Defined in [packages/type-primitives/src/json/types.d.ts:23](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L23)*
*Defined in packages/type-primitives/build/json/types.d.ts:23*

___
<a id="jsontransaction"></a>

###  JsonTransaction

**Ƭ JsonTransaction**: *`object`*

*Defined in [packages/type-primitives/src/json/types.d.ts:25](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L25)*
*Defined in packages/type-primitives/build/json/types.d.ts:25*

#### Type declaration

___
<a id="jsonu256"></a>

###  JsonU256

**Ƭ JsonU256**: *[JsonBnType](#jsonbntype)*

*Defined in [packages/type-primitives/src/json/types.d.ts:16](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L16)*
*Defined in packages/type-primitives/build/json/types.d.ts:16*

___
<a id="jsonu64"></a>

###  JsonU64

**Ƭ JsonU64**: *[JsonBnType](#jsonbntype)*

*Defined in [packages/type-primitives/src/json/types.d.ts:15](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L15)*
*Defined in packages/type-primitives/build/json/types.d.ts:15*

___
<a id="jsonunchecked"></a>

###  JsonUnchecked

**Ƭ JsonUnchecked**: *`object`*

*Defined in [packages/type-primitives/src/json/types.d.ts:32](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/json/types.d.ts#L32)*
*Defined in packages/type-primitives/build/json/types.d.ts:32*

#### Type declaration

___
<a id="justification"></a>

###  Justification

**Ƭ Justification**: *`object`*

*Defined in packages/type-primitives/build/bft.d.ts:9*
*Defined in packages/type-primitives/build/justification.d.ts:14*
*Defined in [packages/type-primitives/src/bft.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/bft.d.ts#L9)*
*Defined in [packages/type-primitives/src/justification.d.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/justification.d.ts#L14)*

#### Type declaration

___
<a id="justification_signature"></a>

###  Justification$Signature

**Ƭ Justification$Signature**: *`object`*

*Defined in packages/type-primitives/build/bft.d.ts:7*
*Defined in packages/type-primitives/build/justification.d.ts:9*
*Defined in [packages/type-primitives/src/bft.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/bft.d.ts#L7)*
*Defined in [packages/type-primitives/src/justification.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/justification.d.ts#L9)*

#### Type declaration

___
<a id="keyvalue"></a>

###  KeyValue

**Ƭ KeyValue**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:51](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L51)*
*Defined in packages/type-params/build/types.d.ts:51*

#### Type declaration

___
<a id="keygen"></a>

###  Keygen

**Ƭ Keygen**: *`function`*

*Defined in build/type-storage/src/key/index.d.ts:3*
*Defined in [packages/type-storage/src/key/index.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-storage/src/key/index.ts#L14)*
*Defined in packages/type-storage/build/key/index.ts:14*

#### Type declaration
▸(...keyParams: *`Array`<[Storage$Key$Value](#storage_key_value)>*): `Uint8Array`

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keyParams | `Array`<[Storage$Key$Value](#storage_key_value)> |

**Returns:** `Uint8Array`

___
<a id="misbehaviorreport"></a>

###  MisbehaviorReport

**Ƭ MisbehaviorReport**: *`object`*

*Defined in [packages/type-primitives/src/misbehavior.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/misbehavior.d.ts#L7)*
*Defined in packages/type-primitives/build/misbehavior.d.ts:7*

#### Type declaration

___
<a id="mockstate"></a>

###  MockState

**Ƭ MockState**: *`object`*

*Defined in packages/api-provider/build/mock/types.d.ts:27*
*Defined in [packages/api-provider/src/mock/types.d.ts:27](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/mock/types.d.ts#L27)*

#### Type declaration

___
<a id="mockstate_requests"></a>

###  MockState$Requests

**Ƭ MockState$Requests**: *`object`*

*Defined in packages/api-provider/build/mock/types.d.ts:23*
*Defined in [packages/api-provider/src/mock/types.d.ts:23](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/mock/types.d.ts#L23)*

#### Type declaration

[index: `string`]: `function`

▸(storage: *[MockState$Storage](#mockstate_storage)*, params: *`Array`<`any`>*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| storage | [MockState$Storage](#mockstate_storage) |
| params | `Array`<`any`> |

**Returns:** `string`

___
<a id="mockstate_storage"></a>

###  MockState$Storage

**Ƭ MockState$Storage**: *`object`*

*Defined in packages/api-provider/build/mock/types.d.ts:19*
*Defined in [packages/api-provider/src/mock/types.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/mock/types.d.ts#L19)*

#### Type declaration

[index: `string`]: `Uint8Array`

___
<a id="mockstate_subscription_callback"></a>

###  MockState$Subscription$Callback

**Ƭ MockState$Subscription$Callback**: *`function`*

*Defined in packages/api-provider/build/mock/types.d.ts:8*
*Defined in [packages/api-provider/src/mock/types.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/mock/types.d.ts#L8)*

#### Type declaration
▸(error: * `Error` &#124; `null`*, value: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| error |  `Error` &#124; `null`|
| value | `any` |

**Returns:** `void`

___
<a id="mockstate_subscriptions"></a>

###  MockState$Subscriptions

**Ƭ MockState$Subscriptions**: *`object`*

*Defined in packages/api-provider/build/mock/types.d.ts:10*
*Defined in [packages/api-provider/src/mock/types.d.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/mock/types.d.ts#L10)*

#### Type declaration

[index: `string`]: `object`

___
<a id="objectid"></a>

###  ObjectId

**Ƭ ObjectId**: *[U64](#u64)*

*Defined in [packages/type-primitives/src/base.d.ts:23](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L23)*
*Defined in packages/type-primitives/build/base.d.ts:23*

___
<a id="parachainid"></a>

###  ParaChainId

**Ƭ ParaChainId**: *[U64](#u64)*

*Defined in [packages/type-primitives/src/base.d.ts:24](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L24)*
*Defined in packages/type-primitives/build/base.d.ts:24*

___
<a id="param"></a>

###  Param

**Ƭ Param**: * [Param$Options](#param_options) & `object`
*

*Defined in [packages/type-params/src/types.d.ts:71](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L71)*
*Defined in packages/type-params/build/types.d.ts:71*

___
<a id="param_decoded"></a>

###  Param$Decoded

**Ƭ Param$Decoded**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:62](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L62)*
*Defined in packages/type-params/build/types.d.ts:62*

#### Type declaration

___
<a id="param_options"></a>

###  Param$Options

**Ƭ Param$Options**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:67](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L67)*
*Defined in packages/type-params/build/types.d.ts:67*

#### Type declaration

___
<a id="param_type"></a>

###  Param$Type

**Ƭ Param$Type**: * "AccountId" &#124; "AccountIndex" &#124; "Balance" &#124; "BlockNumber" &#124; "bool" &#124; "Bytes" &#124; "Call" &#124; "CandidateReceipt" &#124; "Code" &#124; "Digest" &#124; "Gas" &#124; "Hash" &#124; "Header" &#124; "KeyValue" &#124; "MisbehaviorReport" &#124; "ParachainId" &#124; "PrendingExtrinsics" &#124; "PropIndex" &#124; "Proposal" &#124; "ReferendumIndex" &#124; "SessionKey" &#124; "Signature" &#124; "SignedBlock" &#124; "StorageKey" &#124; "StorageKeyValue" &#124; "StorageResult" &#124; "StorageResultSet" &#124; "String" &#124; "Timestamp" &#124; "u32" &#124; "u64" &#124; "u128" &#124; "VoteIndex" &#124; "VoteThreshold"
*

*Defined in [packages/type-params/src/types.d.ts:17](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L17)*
*Defined in packages/type-params/build/types.d.ts:17*

___
<a id="param_type_array"></a>

###  Param$Type$Array

**Ƭ Param$Type$Array**: *`Array`< [Param$Type](#param_type) &#124; `Array`< [Param$Type](#param_type) &#124; `Array`<[Param$Type](#param_type)>>>*

*Defined in [packages/type-params/src/types.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L19)*
*Defined in packages/type-params/build/types.d.ts:19*

___
<a id="param_types"></a>

###  Param$Types

**Ƭ Param$Types**: * [Param$Type](#param_type) &#124; [Param$Type$Array](#param_type_array)
*

*Defined in [packages/type-params/src/types.d.ts:21](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L21)*
*Defined in packages/type-params/build/types.d.ts:21*

___
<a id="param_value"></a>

###  Param$Value

**Ƭ Param$Value**: * [Digest](#digest) &#124; [Header](#header) &#124; [KeyValue](#keyvalue) &#124; [MisbehaviorReport](#misbehaviorreport) &#124; [ExtrinsicDecoded](#extrinsicdecoded) &#124; `BN` &#124; `Date` &#124; `Uint8Array` &#124; `boolean` &#124; `number` &#124; `string` &#124; `null`
*

*Defined in [packages/type-params/src/types.d.ts:56](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L56)*
*Defined in packages/type-params/build/types.d.ts:56*

___
<a id="param_value_array"></a>

###  Param$Value$Array

**Ƭ Param$Value$Array**: *`Array`< [Param$Value](#param_value) &#124; `Array`< [Param$Value](#param_value) &#124; `Array`<[Param$Value](#param_value)>>>*

*Defined in [packages/type-params/src/types.d.ts:58](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L58)*
*Defined in packages/type-params/build/types.d.ts:58*

___
<a id="param_values"></a>

###  Param$Values

**Ƭ Param$Values**: * [Param$Value](#param_value) &#124; [Param$Value$Array](#param_value_array)
*

*Defined in [packages/type-params/src/types.d.ts:60](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L60)*
*Defined in packages/type-params/build/types.d.ts:60*

___
<a id="params"></a>

###  Params

**Ƭ Params**: *`Array`<[Param](#param)>*

*Defined in [packages/type-params/src/types.d.ts:76](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L76)*
*Defined in packages/type-params/build/types.d.ts:76*

___
<a id="privatemethods"></a>

###  PrivateMethods

**Ƭ PrivateMethods**: *`object`*

*Defined in [packages/type-jsonrpc/src/author.ts:32](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/author.ts#L32)*
*Defined in [packages/type-jsonrpc/src/chain.ts:50](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/chain.ts#L50)*
*Defined in [packages/type-jsonrpc/src/state.ts:99](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/state.ts#L99)*
*Defined in [packages/type-jsonrpc/src/system.ts:34](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/system.ts#L34)*
*Defined in build/type-jsonrpc/src/author.d.ts:5*
*Defined in build/type-jsonrpc/src/chain.d.ts:6*
*Defined in build/type-jsonrpc/src/state.d.ts:5*
*Defined in build/type-jsonrpc/src/system.d.ts:5*
*Defined in packages/type-jsonrpc/build/chain.ts:50*
*Defined in packages/type-jsonrpc/build/state.ts:99*
*Defined in packages/type-jsonrpc/build/system.ts:34*
*Defined in packages/type-jsonrpc/build/author.ts:32*

#### Type declaration

[index: `string`]: [CreateItemOptions](#createitemoptions)

___
<a id="proportion"></a>

###  Proportion

**Ƭ Proportion**: *[U64](#u64)*

*Defined in [packages/type-primitives/src/base.d.ts:25](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L25)*
*Defined in packages/type-primitives/build/base.d.ts:25*

___
<a id="providerinterface_callback"></a>

###  ProviderInterface$Callback

**Ƭ ProviderInterface$Callback**: *`function`*

*Defined in [packages/api-provider/src/types.d.ts:38](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/types.d.ts#L38)*
*Defined in packages/api-provider/build/types.d.ts:38*

#### Type declaration
▸(error: * `Error` &#124; `null`*, result: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| error |  `Error` &#124; `null`|
| result | `any` |

**Returns:** `void`

___
<a id="providerinterface_emitcb"></a>

###  ProviderInterface$EmitCb

**Ƭ ProviderInterface$EmitCb**: *`function`*

*Defined in [packages/api-provider/src/types.d.ts:42](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/types.d.ts#L42)*
*Defined in packages/api-provider/build/types.d.ts:42*

#### Type declaration
▸(value?: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** `any`

___
<a id="providerinterface_emitted"></a>

###  ProviderInterface$Emitted

**Ƭ ProviderInterface$Emitted**: * "connected" &#124; "disconnected"
*

*Defined in [packages/api-provider/src/types.d.ts:40](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/types.d.ts#L40)*
*Defined in packages/api-provider/build/types.d.ts:40*

___
<a id="publicmethods"></a>

###  PublicMethods

**Ƭ PublicMethods**: *`object`*

*Defined in [packages/type-jsonrpc/src/author.ts:33](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/author.ts#L33)*
*Defined in [packages/type-jsonrpc/src/chain.ts:49](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/chain.ts#L49)*
*Defined in [packages/type-jsonrpc/src/state.ts:100](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/state.ts#L100)*
*Defined in [packages/type-jsonrpc/src/system.ts:35](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-jsonrpc/src/system.ts#L35)*
*Defined in build/type-jsonrpc/src/author.d.ts:6*
*Defined in build/type-jsonrpc/src/chain.d.ts:5*
*Defined in build/type-jsonrpc/src/state.d.ts:6*
*Defined in build/type-jsonrpc/src/system.d.ts:6*
*Defined in packages/type-jsonrpc/build/chain.ts:49*
*Defined in packages/type-jsonrpc/build/state.ts:100*
*Defined in packages/type-jsonrpc/build/system.ts:35*
*Defined in packages/type-jsonrpc/build/author.ts:33*

#### Type declaration

[index: `string`]: [CreateItemOptions](#createitemoptions)

___
<a id="role"></a>

###  Role

**Ƭ Role**: *`keyof RoleMap`*

*Defined in packages/type-primitives/build/role/index.d.ts:12*
*Defined in [packages/type-primitives/src/role/index.d.ts:12](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/role/index.d.ts#L12)*

___
<a id="rolemap"></a>

###  RoleMap

**Ƭ RoleMap**: *`object`*

*Defined in packages/type-primitives/build/role/index.d.ts:5*
*Defined in [packages/type-primitives/src/role/index.d.ts:5](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/role/index.d.ts#L5)*

#### Type declaration

___
<a id="rpccoder"></a>

###  RpcCoder

**Ƭ RpcCoder**: *`object`*

*Defined in packages/api-provider/build/coder/json/types.d.ts:7*
*Defined in [packages/api-provider/src/coder/json/types.d.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/coder/json/types.d.ts#L7)*

#### Type declaration

___
<a id="rpccoderstate"></a>

###  RpcCoderState

**Ƭ RpcCoderState**: *`object`*

*Defined in packages/api-provider/build/coder/json/types.d.ts:14*
*Defined in [packages/api-provider/src/coder/json/types.d.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-provider/src/coder/json/types.d.ts#L14)*

#### Type declaration

___
<a id="rxapiinterface"></a>

###  RxApiInterface

**Ƭ RxApiInterface**: * `RxApiInterface$Keys` & `object`
*

*Defined in packages/api-rx/build/types.d.ts:19*
*Defined in [packages/api-rx/src/types.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/types.d.ts#L19)*

___
<a id="rxapiinterface_method"></a>

###  RxApiInterface$Method

**Ƭ RxApiInterface$Method**: *`function`*

*Defined in packages/api-rx/build/types.d.ts:9*
*Defined in [packages/api-rx/src/types.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/types.d.ts#L9)*

#### Type declaration
▸(...params: *`Array`<`any`>*):  `Observable`<`any`> &#124; `BehaviorSubject`<`any`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` params | `Array`<`any`> |

**Returns:**  `Observable`<`any`> &#124; `BehaviorSubject`<`any`>

___
<a id="rxapiinterface_section"></a>

###  RxApiInterface$Section

**Ƭ RxApiInterface$Section**: *`object`*

*Defined in packages/api-rx/build/types.d.ts:11*
*Defined in [packages/api-rx/src/types.d.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/types.d.ts#L11)*

#### Type declaration

[index: `string`]: [RxApiInterface$Method](#rxapiinterface_method)

___
<a id="section"></a>

###  Section

**Ƭ Section**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:99](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L99)*
*Defined in packages/type-params/build/types.d.ts:99*

#### Type declaration

___
<a id="sectionitem"></a>

###  SectionItem

**Ƭ SectionItem**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:79](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L79)*
*Defined in packages/type-params/build/types.d.ts:79*

#### Type declaration

___
<a id="sectionitems"></a>

###  SectionItems

**Ƭ SectionItems**: *`object`*

*Defined in [packages/type-params/src/types.d.ts:95](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L95)*
*Defined in packages/type-params/build/types.d.ts:95*

#### Type declaration

___
<a id="sections"></a>

###  Sections

**Ƭ Sections**: *`Map`<`T`, [Section](#section)<`T`, `Priv`, `Pub`>>*

*Defined in [packages/type-params/src/types.d.ts:109](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/types.d.ts#L109)*
*Defined in packages/type-params/build/types.d.ts:109*

___
<a id="signature"></a>

###  Signature

**Ƭ Signature**: *[H512](#h512)*

*Defined in [packages/type-primitives/src/base.d.ts:26](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L26)*
*Defined in packages/type-primitives/build/base.d.ts:26*

___
<a id="sizetype"></a>

###  SizeType

**Ƭ SizeType**: * `32` &#124; `64` &#124; `128`
*

*Defined in [packages/type-primitives/src/sizes.ts:5](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/sizes.ts#L5)*
*Defined in build/type-primitives/src/sizes.d.ts:1*
*Defined in packages/type-primitives/build/sizes.ts:5*

___
<a id="storage_key_value"></a>

###  Storage$Key$Value

**Ƭ Storage$Key$Value**: * `number` &#124; `BN` &#124; `Uint8Array` &#124; `string`
*

*Defined in [packages/type-storage/src/types.d.ts:8](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-storage/src/types.d.ts#L8)*
*Defined in packages/type-storage/build/types.d.ts:8*

___
<a id="storage_sections"></a>

###  Storage$Sections

**Ƭ Storage$Sections**: *`keyof Storages`*

*Defined in [packages/type-storage/src/types.d.ts:23](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-storage/src/types.d.ts#L23)*
*Defined in packages/type-storage/build/types.d.ts:23*

___
<a id="storages"></a>

###  Storages

**Ƭ Storages**: *`object`*

*Defined in [packages/type-storage/src/types.d.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-storage/src/types.d.ts#L10)*
*Defined in packages/type-storage/build/types.d.ts:10*

#### Type declaration

___
<a id="timestamp"></a>

###  Timestamp

**Ƭ Timestamp**: *[U64](#u64)*

*Defined in [packages/type-primitives/src/base.d.ts:27](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L27)*
*Defined in packages/type-primitives/build/base.d.ts:27*

___
<a id="u128"></a>

###  U128

**Ƭ U128**: *`BN`*

*Defined in [packages/type-primitives/src/base.d.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L14)*
*Defined in packages/type-primitives/build/base.d.ts:14*

___
<a id="u256"></a>

###  U256

**Ƭ U256**: *`BN`*

*Defined in [packages/type-primitives/src/base.d.ts:15](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L15)*
*Defined in packages/type-primitives/build/base.d.ts:15*

___
<a id="u32"></a>

###  U32

**Ƭ U32**: *`BN`*

*Defined in [packages/type-primitives/src/base.d.ts:12](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L12)*
*Defined in packages/type-primitives/build/base.d.ts:12*

___
<a id="u64"></a>

###  U64

**Ƭ U64**: *`BN`*

*Defined in [packages/type-primitives/src/base.d.ts:13](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/base.d.ts#L13)*
*Defined in packages/type-primitives/build/base.d.ts:13*

___
<a id="unchecked"></a>

###  Unchecked

**Ƭ Unchecked**: *`object`*

*Defined in [packages/type-primitives/src/extrinsic.d.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/extrinsic.d.ts#L10)*
*Defined in packages/type-primitives/build/extrinsic.d.ts:10*

#### Type declaration

___
<a id="uncheckedraw"></a>

###  UncheckedRaw

**Ƭ UncheckedRaw**: *`Uint8Array`*

*Defined in [packages/type-primitives/src/extrinsic.d.ts:17](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-primitives/src/extrinsic.d.ts#L17)*
*Defined in packages/type-primitives/build/extrinsic.d.ts:17*

___

## Functions

<a id="accountid"></a>

###  accountId

▸ **accountId**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*, version: *[EncodingVersions](#encodingversions)*, isStorage: *`boolean`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/accountId.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|
| version | [EncodingVersions](#encodingversions) |
| isStorage | `boolean` |

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="accountiddecode"></a>

###  accountIdDecode

▸ **accountIdDecode**(value: *[JsonAccountId](#jsonaccountid)*): [AccountId](#accountid)

*Defined in build/type-primitives/src/json/accountId/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonAccountId](#jsonaccountid) |

**Returns:** [AccountId](#accountid)

___
<a id="accountidencode"></a>

###  accountIdEncode

▸ **accountIdEncode**(value: *[AccountId](#accountid)*): [JsonAccountId](#jsonaccountid)

*Defined in build/type-primitives/src/json/accountId/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [AccountId](#accountid) |

**Returns:** [JsonAccountId](#jsonaccountid)

___
<a id="api"></a>

###  api

▸ **api**(provider: *[ProviderInterface](interfaces/providerinterface.md)*): [ApiInterface](#apiinterface)

*Defined in build/api/src/index.d.ts:16*

Test
*__example__*: ```javascript
import createApi from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';
const provider = new WsProvider('http://127.0.0.1:9944');
const api = createApi(provider);
```

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| provider | [ProviderInterface](interfaces/providerinterface.md) |  An API provider using HTTP or WebSocket for instance |

**Returns:** [ApiInterface](#apiinterface)
The returned API Object

___
<a id="bindkey"></a>

###  bindKey

▸ **bindKey**<`T`>(__namedParameters: *`object`*): [Keygen](#keygen)

*Defined in build/type-storage/src/key/index.d.ts:4*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [Keygen](#keygen)

___
<a id="block"></a>

###  block

▸ **block**(__namedParameters: *`object`*): [Block](#block)

*Defined in build/type-primitives/src/create/block.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [Block](#block)

___
<a id="blockdecode"></a>

###  blockDecode

▸ **blockDecode**(__namedParameters: *`object`*): [BlockDecoded](#blockdecoded)

*Defined in build/type-primitives/src/json/block/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [BlockDecoded](#blockdecoded)

___
<a id="bn"></a>

###  bn

▸ **bn**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*, bitLength: * `32` &#124; `64` &#124; `128`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/bn.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|
| bitLength |  `32` &#124; `64` &#124; `128`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="bndecode"></a>

###  bnDecode

▸ **bnDecode**(value: *[JsonBnType](#jsonbntype)*, bitLength?: * `undefined` &#124; `number`*): `BN`

*Defined in build/type-primitives/src/json/bn/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonBnType](#jsonbntype) |
| `Optional` bitLength |  `undefined` &#124; `number`|

**Returns:** `BN`

___
<a id="bnencode"></a>

###  bnEncode

▸ **bnEncode**(value: * `BN` &#124; `number`*, bitLength?: * `undefined` &#124; `number`*): [JsonBnType](#jsonbntype)

*Defined in build/type-primitives/src/json/bn/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `BN` &#124; `number`|
| `Optional` bitLength |  `undefined` &#124; `number`|

**Returns:** [JsonBnType](#jsonbntype)

___
<a id="bool"></a>

###  bool

▸ **bool**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/bool.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="byte"></a>

###  byte

▸ **byte**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/byte.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="bytes"></a>

###  bytes

▸ **bytes**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

▸ **bytes**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/bytes.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/keyValue.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="bytesdecode"></a>

###  bytesDecode

▸ **bytesDecode**(value: *[JsonBytes](#jsonbytes)*): [Bytes](#bytes)

*Defined in build/type-primitives/src/json/bytes/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonBytes](#jsonbytes) |

**Returns:** [Bytes](#bytes)

___
<a id="bytesencode"></a>

###  bytesEncode

▸ **bytesEncode**(value: *[Bytes](#bytes)*): [JsonBytes](#jsonbytes)

*Defined in build/type-primitives/src/json/bytes/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [Bytes](#bytes) |

**Returns:** [JsonBytes](#jsonbytes)

___
<a id="cached"></a>

###  cached

▸ **cached**(subName: *`string`*, name: *`string`*, section: *[ApiInterface$Section](#apiinterface_section)*): `function`

*Defined in build/api-rx/src/observable/cached.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| subName | `string` |
| name | `string` |
| section | [ApiInterface$Section](#apiinterface_section) |

**Returns:** `function`

___
<a id="call"></a>

###  call

▸ **call**(decode: *[Decoder](#decoder)*, input: * `Uint8Array` &#124; `null` &#124; `undefined`*, isPublic: *`boolean`*, version: *[EncodingVersions](#encodingversions)*, isStorage: *`boolean`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/method.d.ts:3*

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

*Defined in build/type-params/src/decode/value/code.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="connected"></a>

###  connected

▸ **connected**(provider: *[ProviderInterface](interfaces/providerinterface.md)*): `BehaviorSubject`<`boolean`>

*Defined in build/api-rx/src/api/connected.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | [ProviderInterface](interfaces/providerinterface.md) |

**Returns:** `BehaviorSubject`<`boolean`>

___
<a id="createinterface"></a>

###  createInterface

▸ **createInterface**(provider: *[ProviderInterface](interfaces/providerinterface.md)*, section: *[Interface$Sections](#interface_sections)*): [ApiInterface$Section](#apiinterface_section)

▸ **createInterface**(api: *[ApiInterface](#apiinterface)*, sectionName: *[Interface$Sections](#interface_sections)*): [RxApiInterface$Section](#rxapiinterface_section)

*Defined in build/api/src/create/interface.d.ts:4*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | [ProviderInterface](interfaces/providerinterface.md) |
| section | [Interface$Sections](#interface_sections) |

**Returns:** [ApiInterface$Section](#apiinterface_section)

*Defined in build/api-rx/src/interface.d.ts:4*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | [ApiInterface](#apiinterface) |
| sectionName | [Interface$Sections](#interface_sections) |

**Returns:** [RxApiInterface$Section](#rxapiinterface_section)

___
<a id="createmethod"></a>

###  createMethod

▸ **createMethod**<`T`>(section: *`keyof T`*, sectionIndex: *`Uint8Array`*): [CreateItems](#createitems)<`T`>

▸ **createMethod**<`T`>(section: *`keyof T`*, sectionIndex: *`Uint8Array`*): [CreateItems](#createitems)<`T`>

*Defined in [packages/type-params/src/method.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/method.ts#L11)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| section | `keyof T` |
| sectionIndex | `Uint8Array` |

**Returns:** [CreateItems](#createitems)<`T`>

*Defined in build/type-params/src/method.d.ts:2*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| section | `keyof T` |
| sectionIndex | `Uint8Array` |

**Returns:** [CreateItems](#createitems)<`T`>

___
<a id="createmethodsend"></a>

###  createMethodSend

▸ **createMethodSend**(provider: *[ProviderInterface](interfaces/providerinterface.md)*, rpcName: *`string`*, method: *[SectionItem](#sectionitem)<[Interfaces](#interfaces)>*): [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

*Defined in build/api/src/create/methodSend.d.ts:5*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | [ProviderInterface](interfaces/providerinterface.md) |
| rpcName | `string` |
| method | [SectionItem](#sectionitem)<[Interfaces](#interfaces)> |

**Returns:** [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

___
<a id="createparam"></a>

###  createParam

▸ **createParam**(name: *`string`*, type: *[Param$Types](#param_types)*, __namedParameters?: *`object`*): [Param](#param)

▸ **createParam**(name: *`string`*, type: *[Param$Types](#param_types)*, __namedParameters?: *`object`*): [Param](#param)

*Defined in [packages/type-params/src/param.ts:7](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/param.ts#L7)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| type | [Param$Types](#param_types) | - |
| `Default value` __namedParameters | `object` |  { isOptional: false } |

**Returns:** [Param](#param)

*Defined in build/type-params/src/param.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| type | [Param$Types](#param_types) |
| `Optional` __namedParameters | `object` |

**Returns:** [Param](#param)

___
<a id="createparams"></a>

###  createParams

▸ **createParams**(params: *[Params](#params)*, values: *`Array`<`any`>*): `Array`<`any`>

*Defined in build/api/src/create/params.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | [Params](#params) |
| values | `Array`<`any`> |

**Returns:** `Array`<`any`>

___
<a id="createsection"></a>

###  createSection

▸ **createSection**<`T`>(name: *`keyof T`*, _index?: *`number`*): [CreateSection](#createsection)<`T`, `any`, `any`>

▸ **createSection**<`T`>(name: *`keyof T`*, _index?: * `undefined` &#124; `number`*): [CreateSection](#createsection)<`T`, `any`, `any`>

*Defined in [packages/type-params/src/section.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/type-params/src/section.ts#L11)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| name | `keyof T` | - |
| `Default value` _index | `number` | 0 |

**Returns:** [CreateSection](#createsection)<`T`, `any`, `any`>

*Defined in build/type-params/src/section.d.ts:2*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `keyof T` |
| `Optional` _index |  `undefined` &#124; `number`|

**Returns:** [CreateSection](#createsection)<`T`, `any`, `any`>

___
<a id="decode"></a>

###  decode

▸ **decode**(type: *[Param$Types](#param_types)*, _input: * `Uint8Array` &#124; `string` &#124; `null` &#124; `undefined`*, version: *[EncodingVersions](#encodingversions)*, isStorage?: * `undefined` &#124; `false` &#124; `true`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/index.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [Param$Types](#param_types) |
| _input |  `Uint8Array` &#124; `string` &#124; `null` &#124; `undefined`|
| version | [EncodingVersions](#encodingversions) |
| `Optional` isStorage |  `undefined` &#124; `false` &#124; `true`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="decodearray"></a>

###  decodeArray

▸ **decodeArray**(input: *`Uint8Array`*): `DecodedArray`

*Defined in build/type-primitives/src/codec/decoder/array.d.ts:5*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `DecodedArray`

___
<a id="decodeblock"></a>

###  decodeBlock

▸ **decodeBlock**(u8a: *`Uint8Array`*): [Block](#block)

*Defined in build/type-primitives/src/codec/block/decode.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a | `Uint8Array` |

**Returns:** [Block](#block)

___
<a id="decodeheader"></a>

###  decodeHeader

▸ **decodeHeader**(u8a: * `Uint8Array` &#124; `null`*): [Header](#header)

▸ **decodeHeader**(u8a: *`Uint8Array`*): `DecodedRaw`

*Defined in build/type-primitives/src/codec/header/decode.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a |  `Uint8Array` &#124; `null`|

**Returns:** [Header](#header)

*Defined in build/type-primitives/src/codec/header/decodeRaw.d.ts:8*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a | `Uint8Array` |

**Returns:** `DecodedRaw`

___
<a id="decodejustification"></a>

###  decodeJustification

▸ **decodeJustification**(u8a: *`Uint8Array`*): [Justification](#justification)

*Defined in build/type-primitives/src/codec/justification/decode.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a | `Uint8Array` |

**Returns:** [Justification](#justification)

___
<a id="decodelength"></a>

###  decodeLength

▸ **decodeLength**(unchecked: *`Uint8Array`*): [UncheckedRaw](#uncheckedraw)

*Defined in build/type-extrinsics/src/codec/decode/length.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| unchecked | `Uint8Array` |

**Returns:** [UncheckedRaw](#uncheckedraw)

___
<a id="decoderaw"></a>

###  decodeRaw

▸ **decodeRaw**(u8a: *`Uint8Array`*): `RawData`

*Defined in build/type-primitives/src/codec/block/decodeRaw.d.ts:8*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a | `Uint8Array` |

**Returns:** `RawData`

___
<a id="decoderesponse"></a>

###  decodeResponse

▸ **decodeResponse**(self: *[RpcCoderState](#rpccoderstate)*, response: *[JsonRpcResponse](#jsonrpcresponse)*): `any`

*Defined in build/api-provider/src/coder/json/decodeResponse.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [RpcCoderState](#rpccoderstate) |
| response | [JsonRpcResponse](#jsonrpcresponse) |

**Returns:** `any`

___
<a id="decodeu8a"></a>

###  decodeU8a

▸ **decodeU8a**(input: *`Uint8Array`*): `Uint8Array`

*Defined in build/type-primitives/src/codec/decoder/u8a.d.ts:1*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="decodevalue"></a>

###  decodeValue

▸ **decodeValue**(decode: *[Decoder](#decoder)*, type: *[Param$Type](#param_type)*, _input: * `Uint8Array` &#124; `string` &#124; `null` &#124; `undefined`*, version: *[EncodingVersions](#encodingversions)*, isStorage: *`boolean`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/index.d.ts:3*

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

*Defined in build/type-params/src/decode/value/digest.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="echo"></a>

###  echo

▸ **echo**(value: *`any`*): `any`

*Defined in build/api-format/src/echo.d.ts:6*

A function returning any value passed to it

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  The input value |

**Returns:** `any`
The value passed as input

___
<a id="encode"></a>

###  encode

▸ **encode**(publicKey: *`Uint8Array`*, index: * `number` &#124; `BN`*, extrinsic: *[SectionItem](#sectionitem)<[Extrinsics](#extrinsics)>*, values: *`Array`<`any`>*, version: *[EncodingVersions](#encodingversions)*): [ExtrinsicWithAccount](#extrinsicwithaccount)

*Defined in build/type-extrinsics/src/codec/encode/index.d.ts:5*

**Parameters:**

| Param | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| index |  `number` &#124; `BN`|
| extrinsic | [SectionItem](#sectionitem)<[Extrinsics](#extrinsics)> |
| values | `Array`<`any`> |
| version | [EncodingVersions](#encodingversions) |

**Returns:** [ExtrinsicWithAccount](#extrinsicwithaccount)

___
<a id="encodearray"></a>

###  encodeArray

▸ **encodeArray**(input: *`Array`<`Uint8Array`>*): `Uint8Array`

*Defined in build/type-primitives/src/codec/encoder/array.d.ts:1*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Array`<`Uint8Array`> |

**Returns:** `Uint8Array`

___
<a id="encodeblock"></a>

###  encodeBlock

▸ **encodeBlock**(__namedParameters: *`object`*): `Uint8Array`

*Defined in build/type-primitives/src/codec/block/encode.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `Uint8Array`

___
<a id="encodeblockraw"></a>

###  encodeBlockRaw

▸ **encodeBlockRaw**(header: *`Uint8Array`*, extrinsics?: *`Array`<[UncheckedRaw](#uncheckedraw)>*): `Uint8Array`

*Defined in build/type-primitives/src/codec/block/encodeRaw.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| header | `Uint8Array` |
| `Optional` extrinsics | `Array`<[UncheckedRaw](#uncheckedraw)> |

**Returns:** `Uint8Array`

___
<a id="encodecall"></a>

###  encodeCall

▸ **encodeCall**(publicKey: *`Uint8Array`*, nonce: * `number` &#124; `BN`*, data: *[ExtrinsicWithIndex](#extrinsicwithindex)*, version: *[EncodingVersions](#encodingversions)*): [ExtrinsicWithAccount](#extrinsicwithaccount)

*Defined in build/type-extrinsics/src/codec/encode/call.d.ts:4*

**Parameters:**

| Param | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| nonce |  `number` &#124; `BN`|
| data | [ExtrinsicWithIndex](#extrinsicwithindex) |
| version | [EncodingVersions](#encodingversions) |

**Returns:** [ExtrinsicWithAccount](#extrinsicwithaccount)

___
<a id="encodeextrinsic"></a>

###  encodeExtrinsic

▸ **encodeExtrinsic**(extrinsic: *[SectionItem](#sectionitem)<[Extrinsics](#extrinsics)>*, values: *`Array`<`any`>*, version: *[EncodingVersions](#encodingversions)*): [ExtrinsicWithIndex](#extrinsicwithindex)

*Defined in build/type-extrinsics/src/codec/encode/extrinsic.d.ts:4*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsic | [SectionItem](#sectionitem)<[Extrinsics](#extrinsics)> |
| values | `Array`<`any`> |
| version | [EncodingVersions](#encodingversions) |

**Returns:** [ExtrinsicWithIndex](#extrinsicwithindex)

___
<a id="encodeheader"></a>

###  encodeHeader

▸ **encodeHeader**(__namedParameters: *`object`*, extrinsics?: *`Array`<[UncheckedRaw](#uncheckedraw)>*): `Uint8Array`

*Defined in build/type-primitives/src/codec/header/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |
| `Optional` extrinsics | `Array`<[UncheckedRaw](#uncheckedraw)> |

**Returns:** `Uint8Array`

___
<a id="encodejson"></a>

###  encodeJson

▸ **encodeJson**(self: *[RpcCoderState](#rpccoderstate)*, method: *`string`*, params: *`Array`<`any`>*): `string`

*Defined in build/api-provider/src/coder/json/encodeJson.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [RpcCoderState](#rpccoderstate) |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `string`

___
<a id="encodelength"></a>

###  encodeLength

▸ **encodeLength**(...values: *`Array`<`Uint8Array`>*): `Uint8Array`

*Defined in build/type-extrinsics/src/codec/encode/length.d.ts:1*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` values | `Array`<`Uint8Array`> |

**Returns:** `Uint8Array`

___
<a id="encodeobject"></a>

###  encodeObject

▸ **encodeObject**(self: *[RpcCoderState](#rpccoderstate)*, method: *`string`*, params: *`Array`<`any`>*): [JsonRpcRequest](#jsonrpcrequest)

*Defined in build/api-provider/src/coder/json/encodeObject.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [RpcCoderState](#rpccoderstate) |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** [JsonRpcRequest](#jsonrpcrequest)

___
<a id="encodeparam"></a>

###  encodeParam

▸ **encodeParam**(param: *[Param](#param)*, value: *`any`*, version?: *[EncodingVersions](#encodingversions)*): `Uint8Array`

*Defined in build/type-params/src/encode/param.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| param | [Param](#param) |
| value | `any` |
| `Optional` version | [EncodingVersions](#encodingversions) |

**Returns:** `Uint8Array`

___
<a id="encodeparams"></a>

###  encodeParams

▸ **encodeParams**(params: *[Params](#params)*, values: *`Array`<`any`>*, version: *[EncodingVersions](#encodingversions)*): `Uint8Array`

*Defined in build/type-params/src/encode/index.d.ts:2*

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

*Defined in build/type-params/src/encode/type/index.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [Param$Type](#param_type) |
| value | `any` |
| version | [EncodingVersions](#encodingversions) |

**Returns:** `Uint8Array`

___
<a id="encodeu8a"></a>

###  encodeU8a

▸ **encodeU8a**(input: *`Uint8Array`*): `Uint8Array`

*Defined in build/type-primitives/src/codec/encoder/u8a.d.ts:1*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="exposed"></a>

###  exposed

▸ **exposed**(provider: *[ProviderInterface](interfaces/providerinterface.md)*): [RxApiInterface](#rxapiinterface)

*Defined in build/api-rx/src/api/index.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | [ProviderInterface](interfaces/providerinterface.md) |

**Returns:** [RxApiInterface](#rxapiinterface)

___
<a id="extrinsicdecode"></a>

###  extrinsicDecode

▸ **extrinsicDecode**(extrinsic: *`Uint8Array`*): [BlockExtrinsicDecoded](#blockextrinsicdecoded)

*Defined in build/type-primitives/src/json/extrinsic/decode.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsic | `Uint8Array` |

**Returns:** [BlockExtrinsicDecoded](#blockextrinsicdecoded)

___
<a id="extrinsicsrootraw"></a>

###  extrinsicsRootRaw

▸ **extrinsicsRootRaw**(extrinsics?: *`Array`<[UncheckedRaw](#uncheckedraw)>*): `Uint8Array`

*Defined in build/type-primitives/src/create/extrinsic/rootRaw.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` extrinsics | `Array`<[UncheckedRaw](#uncheckedraw)> |

**Returns:** `Uint8Array`

___
<a id="format"></a>

###  format

▸ **format**(formatters: *`FormattersFunctionMap`*, types: *`Array`<[Param$Types](#param_types)>*, values: *`Array`<`any`>*): `Array`<`any`>

*Defined in build/api-format/src/format.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| formatters | `FormattersFunctionMap` |
| types | `Array`<[Param$Types](#param_types)> |
| values | `Array`<`any`> |

**Returns:** `Array`<`any`>

___
<a id="formatinputs"></a>

###  formatInputs

▸ **formatInputs**(params: *[Params](#params)*, values: *`Array`<`any`>*): `Array`<`any`>

*Defined in build/api-format/src/input.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | [Params](#params) |
| values | `Array`<`any`> |

**Returns:** `Array`<`any`>

___
<a id="formatoutput"></a>

###  formatOutput

▸ **formatOutput**(type: *[Param$Types](#param_types)*, value?: *`any`*):  `any` &#124; `null`

*Defined in build/api-format/src/output.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [Param$Types](#param_types) |
| `Optional` value | `any` |

**Returns:**  `any` &#124; `null`

___
<a id="formatparams"></a>

###  formatParams

▸ **formatParams**(params: *[Params](#params)*, values?: *[Storage$Key$Value](#storage_key_value)[]*): `Array`<`Uint8Array`>

*Defined in build/type-storage/src/key/params.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | [Params](#params) |
| `Optional` values | [Storage$Key$Value](#storage_key_value)[] |

**Returns:** `Array`<`Uint8Array`>

___
<a id="formatresult"></a>

###  formatResult

▸ **formatResult**(method: *[SectionItem](#sectionitem)<[Interfaces](#interfaces)>*, params: *`Array`<`any`>*, inputs: *`Array`<`any`>*, result?: *`any`*): `any`

*Defined in build/api/src/create/formatResult.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | [SectionItem](#sectionitem)<[Interfaces](#interfaces)> |
| params | `Array`<`any`> |
| inputs | `Array`<`any`> |
| `Optional` result | `any` |

**Returns:** `any`

___
<a id="hashdecode"></a>

###  hashDecode

▸ **hashDecode**(value: *[JsonHash](#jsonhash)*, bitLength?: * `undefined` &#124; `number`*): [Hash](#hash)

*Defined in build/type-primitives/src/json/hash/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonHash](#jsonhash) |
| `Optional` bitLength |  `undefined` &#124; `number`|

**Returns:** [Hash](#hash)

___
<a id="hashencode"></a>

###  hashEncode

▸ **hashEncode**(value: * [Hash](#hash) &#124; `string`*, bitLength?: * `undefined` &#124; `number`*): [JsonHash](#jsonhash)

*Defined in build/type-primitives/src/json/hash/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [Hash](#hash) &#124; `string`|
| `Optional` bitLength |  `undefined` &#124; `number`|

**Returns:** [JsonHash](#jsonhash)

___
<a id="header"></a>

###  header

▸ **header**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

▸ **header**(__namedParameters: *`object`*, extrinsics?: *`Array`<[UncheckedRaw](#uncheckedraw)>*): [Header](#header)

*Defined in build/type-params/src/decode/value/header.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

*Defined in build/type-primitives/src/create/header.d.ts:4*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |
| `Optional` extrinsics | `Array`<[UncheckedRaw](#uncheckedraw)> |

**Returns:** [Header](#header)

___
<a id="headerdecode"></a>

###  headerDecode

▸ **headerDecode**(__namedParameters: *`object`*): [Header](#header)

*Defined in build/type-primitives/src/json/header/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [Header](#header)

___
<a id="headerencode"></a>

###  headerEncode

▸ **headerEncode**(__namedParameters: *`object`*): [JsonHeader](#jsonheader)

*Defined in build/type-primitives/src/json/header/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [JsonHeader](#jsonheader)

___
<a id="headerhash"></a>

###  headerHash

▸ **headerHash**(header: *[Header](#header)*): `Uint8Array`

*Defined in build/type-primitives/src/codec/header/hash.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| header | [Header](#header) |

**Returns:** `Uint8Array`

___
<a id="justificationdecode"></a>

###  justificationDecode

▸ **justificationDecode**(__namedParameters: *`object`*): [BlockJustificationDecoded](#blockjustificationdecoded)

*Defined in build/type-primitives/src/json/justification/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [BlockJustificationDecoded](#blockjustificationdecoded)

___
<a id="justificationencode"></a>

###  justificationEncode

▸ **justificationEncode**(__namedParameters: *`object`*): [JsonJustification](#jsonjustification)

*Defined in build/type-primitives/src/json/justification/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [JsonJustification](#jsonjustification)

___
<a id="keyvalue"></a>

###  keyValue

▸ **keyValue**(__namedParameters: *`object`*): `Uint8Array`

*Defined in build/type-params/src/encode/type/keyValue.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `Uint8Array`

___
<a id="methodsubscribe"></a>

###  methodSubscribe

▸ **methodSubscribe**(provider: *[ProviderInterface](interfaces/providerinterface.md)*, rpcName: *`string`*, method: *[SectionItem](#sectionitem)<[Interfaces](#interfaces)>*): [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

*Defined in build/api/src/create/methodSubscribe.d.ts:5*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | [ProviderInterface](interfaces/providerinterface.md) |
| rpcName | `string` |
| method | [SectionItem](#sectionitem)<[Interfaces](#interfaces)> |

**Returns:** [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

___
<a id="misbehavior"></a>

###  misbehavior

▸ **misbehavior**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/misbehavior.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="mockprovider"></a>

###  mockProvider

▸ **mockProvider**(): [ProviderInterface](interfaces/providerinterface.md)

*Defined in build/api-provider/src/mock/index.d.ts:6*

A moock provider mainly used for testing.

**Returns:** [ProviderInterface](interfaces/providerinterface.md)
The mock provider

___
<a id="mocks"></a>

###  mocks

▸ **mocks**(__namedParameters: *`object`*): `void`

*Defined in build/api-provider/src/mock/mocks.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `void`

___
<a id="objectiddecode"></a>

###  objectIdDecode

▸ **objectIdDecode**(value: *[JsonObjectId](#jsonobjectid)*): [ObjectId](#objectid)

*Defined in build/type-primitives/src/json/objectId/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonObjectId](#jsonobjectid) |

**Returns:** [ObjectId](#objectid)

___
<a id="objectidencode"></a>

###  objectIdEncode

▸ **objectIdEncode**(value: *[ObjectId](#objectid)*): [JsonObjectId](#jsonobjectid)

*Defined in build/type-primitives/src/json/objectId/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [ObjectId](#objectid) |

**Returns:** [JsonObjectId](#jsonobjectid)

___
<a id="observable"></a>

###  observable

▸ **observable**(subName: *`string`*, name: *`string`*, section: *[ApiInterface$Section](#apiinterface_section)*): `function`

*Defined in build/api-rx/src/observable/index.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| subName | `string` |
| name | `string` |
| section | [ApiInterface$Section](#apiinterface_section) |

**Returns:** `function`

___
<a id="on"></a>

###  on

▸ **on**(self: *[MockState](#mockstate)*, type: *[ProviderInterface$Emitted](#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](#providerinterface_emitcb)*): `void`

*Defined in build/api-provider/src/mock/on.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [MockState](#mockstate) |
| type | [ProviderInterface$Emitted](#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="parachainiddecode"></a>

###  parachainIdDecode

▸ **parachainIdDecode**(value: *[JsonParaChainId](#jsonparachainid)*): [ParaChainId](#parachainid)

*Defined in build/type-primitives/src/json/parachainId/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonParaChainId](#jsonparachainid) |

**Returns:** [ParaChainId](#parachainid)

___
<a id="parachainidencode"></a>

###  parachainIdEncode

▸ **parachainIdEncode**(value: *[ParaChainId](#parachainid)*): [JsonParaChainId](#jsonparachainid)

*Defined in build/type-primitives/src/json/parachainId/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [ParaChainId](#parachainid) |

**Returns:** [JsonParaChainId](#jsonparachainid)

___
<a id="passthrough"></a>

###  passThrough

▸ **passThrough**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/passThrough.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="rolesfromid"></a>

###  rolesFromId

▸ **rolesFromId**(roleId: *`number`*): `Array`<[Role](#role)>

*Defined in build/type-primitives/src/role/fromId.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| roleId | `number` |

**Returns:** `Array`<[Role](#role)>

___
<a id="rolestoid"></a>

###  rolesToId

▸ **rolesToId**(roles: *`Array`<[Role](#role)>*): `number`

*Defined in build/type-primitives/src/role/toId.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| roles | `Array`<[Role](#role)> |

**Returns:** `number`

___
<a id="rpccoder"></a>

###  rpcCoder

▸ **rpcCoder**(): [RpcCoder](#rpccoder)

*Defined in build/api-provider/src/coder/json/index.d.ts:2*

**Returns:** [RpcCoder](#rpccoder)

___
<a id="rxapi"></a>

###  rxApi

▸ **rxApi**(provider?: *[ProviderInterface](interfaces/providerinterface.md)*): [RxApiInterface](#rxapiinterface)

*Defined in build/api-rx/src/index.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` provider | [ProviderInterface](interfaces/providerinterface.md) |

**Returns:** [RxApiInterface](#rxapiinterface)

___
<a id="send"></a>

###  send

▸ **send**(__namedParameters: *`object`*, method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Defined in build/api-provider/src/mock/send.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="signature"></a>

###  signature

▸ **signature**<`T`>(__namedParameters: *`object`*): `string`

*Defined in build/type-params/src/signature.d.ts:13*

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
<a id="signaturedecode"></a>

###  signatureDecode

▸ **signatureDecode**(value: *[JsonSignature](#jsonsignature)*): [Signature](#signature)

*Defined in build/type-primitives/src/json/signature/decode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonSignature](#jsonsignature) |

**Returns:** [Signature](#signature)

___
<a id="signatureencode"></a>

###  signatureEncode

▸ **signatureEncode**(value: *[Signature](#signature)*): [JsonSignature](#jsonsignature)

*Defined in build/type-primitives/src/json/signature/encode.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [Signature](#signature) |

**Returns:** [JsonSignature](#jsonsignature)

___
<a id="state"></a>

###  state

▸ **state**(): [MockState](#mockstate)

*Defined in build/api-provider/src/mock/state.d.ts:2*

**Returns:** [MockState](#mockstate)

___
<a id="storagekey"></a>

###  storageKey

▸ **storageKey**(__namedParameters: *[`object`, `Array`]*): `Uint8Array`

*Defined in build/type-params/src/encode/type/storageKey.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | [`object`, `Array`] |

**Returns:** `Uint8Array`

___
<a id="string"></a>

###  string

▸ **string**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/string.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(self: *[MockState](#mockstate)*, type: *`string`*, method: *`string`*, params: *`Array`<`any`>*): `Promise`<`number`>

*Defined in build/api-provider/src/mock/subscribe.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [MockState](#mockstate) |
| type | `string` |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`number`>

___
<a id="subscription"></a>

###  subscription

▸ **subscription**(name: *`string`*, params: *`Array`<`any`>*, section: *[ApiInterface$Section](#apiinterface_section)*, unsubCallback?: * `undefined` &#124; `function`*): `BehaviorSubject`<`any`>

*Defined in build/api-rx/src/observable/subject.d.ts:3*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| params | `Array`<`any`> |
| section | [ApiInterface$Section](#apiinterface_section) |
| `Optional` unsubCallback |  `undefined` &#124; `function`|

**Returns:** `BehaviorSubject`<`any`>

___
<a id="time"></a>

###  time

▸ **time**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/time.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="typetostring"></a>

###  typeToString

▸ **typeToString**(type: *[Param$Types](#param_types)*): `string`

*Defined in build/type-params/src/typeToString.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | [Param$Types](#param_types) |

**Returns:** `string`

___
<a id="u8a"></a>

###  u8a

▸ **u8a**(input: * `Uint8Array` &#124; `null` &#124; `undefined`*, bitLength: *`number`*, offset: *`number`*): [Param$Decoded](#param_decoded)

*Defined in build/type-params/src/decode/value/u8a.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input |  `Uint8Array` &#124; `null` &#124; `undefined`|
| bitLength | `number` |
| offset | `number` |

**Returns:** [Param$Decoded](#param_decoded)

___
<a id="unchecked"></a>

###  unchecked

▸ **unchecked**(pair: *`KeyringPair`*, index: * `number` &#124; `BN`*, extrinsic: *[SectionItem](#sectionitem)<[Extrinsics](#extrinsics)>*, values: *`Array`<`any`>*, version?: *[EncodingVersions](#encodingversions)*): [UncheckedRaw](#uncheckedraw)

*Defined in build/type-extrinsics/src/codec/encode/unchecked.d.ts:6*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| index |  `number` &#124; `BN`|
| extrinsic | [SectionItem](#sectionitem)<[Extrinsics](#extrinsics)> |
| values | `Array`<`any`> |
| `Optional` version | [EncodingVersions](#encodingversions) |

**Returns:** [UncheckedRaw](#uncheckedraw)

___
<a id="uncheckedlength"></a>

###  uncheckedLength

▸ **uncheckedLength**(pair: *`KeyringPair`*, index: * `number` &#124; `BN`*, extrinsic: *[SectionItem](#sectionitem)<[Extrinsics](#extrinsics)>*, values: *`Array`<`any`>*, version?: *[EncodingVersions](#encodingversions)*): [UncheckedRaw](#uncheckedraw)

*Defined in build/type-extrinsics/src/codec/encode/uncheckedLength.d.ts:6*

**Parameters:**

| Param | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| index |  `number` &#124; `BN`|
| extrinsic | [SectionItem](#sectionitem)<[Extrinsics](#extrinsics)> |
| values | `Array`<`any`> |
| `Optional` version | [EncodingVersions](#encodingversions) |

**Returns:** [UncheckedRaw](#uncheckedraw)

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(self: *[MockState](#mockstate)*, type: *`string`*, name: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in build/api-provider/src/mock/unsubscribe.d.ts:2*

**Parameters:**

| Param | Type |
| ------ | ------ |
| self | [MockState](#mockstate) |
| type | `string` |
| name | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

