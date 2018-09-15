
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/primitives.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/primitives) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/type-primitives)](https://david-dm.org/polkadot-js/api?path=packages/type-primitives) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/type-primitives)](https://david-dm.org/polkadot-js/api?path=packages/type-primitives#info=devDependencies)

@polkadot/primitives
====================

Base [flow](https://flow.org/) definitions for the base Polkadot types as defined in the [specification](https://github.com/w3f/polkadot-spec). It is useful for implementations, applications and libraries, where type-checking of the JavaScript base types is of importance.

Usage
-----

Installation -

```
npm install --save @polkadot/primitives
```

Usage -

```js
// @flow

import type { AccountId, Balance } from '@polkadot/primitives/base';

function getBalance (accountId: AccountId): Balance {
 ...
}
```

## Index

### Type aliases

* [AccountId](#accountid)
* [Balance](#balance)
* [Block](#block)
* [BlockIncomplete](#blockincomplete)
* [BlockNumber](#blocknumber)
* [Bytes](#bytes)
* [Candidate](#candidate)
* [CandidateReceipt](#candidatereceipt)
* [CandidateReceipt$BalanceUpload](#candidatereceipt_balanceupload)
* [CandidateReceipt$EgressQueueRoot](#candidatereceipt_egressqueueroot)
* [ChainId](#chainid)
* [Digest](#digest)
* [Digest$Log](#digest_log)
* [ExtrinsicFunction](#extrinsicfunction)
* [H160](#h160)
* [H256](#h256)
* [H512](#h512)
* [Hash](#hash)
* [Header](#header)
* [HeaderHash](#headerhash)
* [HeaderIncomplete](#headerincomplete)
* [Index](#index)
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
* [JsonSignature](#jsonsignature)
* [JsonTransaction](#jsontransaction)
* [JsonU256](#jsonu256)
* [JsonU64](#jsonu64)
* [JsonUnchecked](#jsonunchecked)
* [Justification](#justification)
* [Justification$Signature](#justification_signature)
* [MisbehaviorReport](#misbehaviorreport)
* [ObjectId](#objectid)
* [ParaChainId](#parachainid)
* [Proportion](#proportion)
* [Role](#role)
* [RoleMap](#rolemap)
* [Signature](#signature)
* [SizeType](#sizetype)
* [Timestamp](#timestamp)
* [U128](#u128)
* [U256](#u256)
* [U32](#u32)
* [U64](#u64)
* [Unchecked](#unchecked)
* [UncheckedRaw](#uncheckedraw)

### Functions

* [accountIdDecode](#accountiddecode)
* [accountIdEncode](#accountidencode)
* [block](#block)
* [blockDecode](#blockdecode)
* [bnDecode](#bndecode)
* [bnEncode](#bnencode)
* [bytesDecode](#bytesdecode)
* [bytesEncode](#bytesencode)
* [decodeArray](#decodearray)
* [decodeBlock](#decodeblock)
* [decodeHeader](#decodeheader)
* [decodeJustification](#decodejustification)
* [decodeRaw](#decoderaw)
* [decodeU8a](#decodeu8a)
* [encodeArray](#encodearray)
* [encodeBlock](#encodeblock)
* [encodeBlockRaw](#encodeblockraw)
* [encodeHeader](#encodeheader)
* [encodeU8a](#encodeu8a)
* [extrinsicDecode](#extrinsicdecode)
* [extrinsicsRootRaw](#extrinsicsrootraw)
* [hashDecode](#hashdecode)
* [hashEncode](#hashencode)
* [header](#header)
* [headerDecode](#headerdecode)
* [headerEncode](#headerencode)
* [headerHash](#headerhash)
* [justificationDecode](#justificationdecode)
* [justificationEncode](#justificationencode)
* [objectIdDecode](#objectiddecode)
* [objectIdEncode](#objectidencode)
* [parachainIdDecode](#parachainiddecode)
* [parachainIdEncode](#parachainidencode)
* [rolesFromId](#rolesfromid)
* [rolesToId](#rolestoid)
* [signatureDecode](#signaturedecode)
* [signatureEncode](#signatureencode)

---

## Type aliases

<a id="accountid"></a>

###  AccountId

**Ƭ AccountId**: *[H256](#h256)*

*Defined in [base.d.ts:17](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L17)*

___
<a id="balance"></a>

###  Balance

**Ƭ Balance**: *[U128](#u128)*

*Defined in [base.d.ts:18](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L18)*

___
<a id="block"></a>

###  Block

**Ƭ Block**: *`object`*

*Defined in [block.d.ts:8](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/block.d.ts#L8)*

#### Type declaration

___
<a id="blockincomplete"></a>

###  BlockIncomplete

**Ƭ BlockIncomplete**: *`object`*

*Defined in [create/types.d.ts:19](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/create/types.d.ts#L19)*

#### Type declaration

___
<a id="blocknumber"></a>

###  BlockNumber

**Ƭ BlockNumber**: *[U64](#u64)*

*Defined in [base.d.ts:19](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L19)*

___
<a id="bytes"></a>

###  Bytes

**Ƭ Bytes**: *`Uint8Array`*

*Defined in [base.d.ts:7](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L7)*

___
<a id="candidate"></a>

###  Candidate

**Ƭ Candidate**: *`object`*

*Defined in [candidate.d.ts:7](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/candidate.d.ts#L7)*

#### Type declaration

___
<a id="candidatereceipt"></a>

###  CandidateReceipt

**Ƭ CandidateReceipt**: *`object`*

*Defined in [candidate.d.ts:17](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/candidate.d.ts#L17)*

#### Type declaration

___
<a id="candidatereceipt_balanceupload"></a>

###  CandidateReceipt$BalanceUpload

**Ƭ CandidateReceipt$BalanceUpload**: *[[AccountId](#accountid), [Balance](#balance)]*

*Defined in [candidate.d.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/candidate.d.ts#L14)*

___
<a id="candidatereceipt_egressqueueroot"></a>

###  CandidateReceipt$EgressQueueRoot

**Ƭ CandidateReceipt$EgressQueueRoot**: *[[ChainId](#chainid), [Hash](#hash)]*

*Defined in [candidate.d.ts:15](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/candidate.d.ts#L15)*

___
<a id="chainid"></a>

###  ChainId

**Ƭ ChainId**: *[U32](#u32)*

*Defined in [base.d.ts:20](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L20)*

___
<a id="digest"></a>

###  Digest

**Ƭ Digest**: *`object`*

*Defined in [digest.d.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/digest.d.ts#L9)*

#### Type declaration

___
<a id="digest_log"></a>

###  Digest$Log

**Ƭ Digest$Log**: *[Bytes](#bytes)*

*Defined in [digest.d.ts:7](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/digest.d.ts#L7)*

___
<a id="extrinsicfunction"></a>

###  ExtrinsicFunction

**Ƭ ExtrinsicFunction**: *`Uint8Array`*

*Defined in [extrinsic.d.ts:8](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/extrinsic.d.ts#L8)*

___
<a id="h160"></a>

###  H160

**Ƭ H160**: *`Uint8Array`*

*Defined in [base.d.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L9)*

___
<a id="h256"></a>

###  H256

**Ƭ H256**: *`Uint8Array`*

*Defined in [base.d.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L10)*

___
<a id="h512"></a>

###  H512

**Ƭ H512**: *`Uint8Array`*

*Defined in [base.d.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L11)*

___
<a id="hash"></a>

###  Hash

**Ƭ Hash**: *`Uint8Array`*

*Defined in [base.d.ts:8](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L8)*

___
<a id="header"></a>

###  Header

**Ƭ Header**: *`object`*

*Defined in [header.d.ts:8](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/header.d.ts#L8)*

#### Type declaration

___
<a id="headerhash"></a>

###  HeaderHash

**Ƭ HeaderHash**: *[H256](#h256)*

*Defined in [base.d.ts:21](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L21)*

___
<a id="headerincomplete"></a>

###  HeaderIncomplete

**Ƭ HeaderIncomplete**: *`object`*

*Defined in [create/types.d.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/create/types.d.ts#L9)*

#### Type declaration

___
<a id="index"></a>

###  Index

**Ƭ Index**: *[U32](#u32)*

*Defined in [base.d.ts:22](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L22)*

___
<a id="jsonaccountid"></a>

###  JsonAccountId

**Ƭ JsonAccountId**: *[JsonHash](#jsonhash)*

*Defined in [json/types.d.ts:18](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L18)*

___
<a id="jsonauthorityid"></a>

###  JsonAuthorityId

**Ƭ JsonAuthorityId**: *[JsonHash](#jsonhash)*

*Defined in [json/types.d.ts:19](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L19)*

___
<a id="jsonblock"></a>

###  JsonBlock

**Ƭ JsonBlock**: *`object`*

*Defined in [json/types.d.ts:57](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L57)*

#### Type declaration

___
<a id="jsonblocknumber"></a>

###  JsonBlockNumber

**Ƭ JsonBlockNumber**: *[JsonU64](#jsonu64)*

*Defined in [json/types.d.ts:20](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L20)*

___
<a id="jsonbntype"></a>

###  JsonBnType

**Ƭ JsonBnType**: *`string`*

*Defined in [json/types.d.ts:7](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L7)*

___
<a id="jsonbytes"></a>

###  JsonBytes

**Ƭ JsonBytes**: * `string` &#124; `Array`<`number`>
*

*Defined in [json/types.d.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L10)*

___
<a id="jsondigest"></a>

###  JsonDigest

**Ƭ JsonDigest**: *`object`*

*Defined in [json/types.d.ts:37](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L37)*

#### Type declaration

___
<a id="jsonh160"></a>

###  JsonH160

**Ƭ JsonH160**: *[JsonHash](#jsonhash)*

*Defined in [json/types.d.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L11)*

___
<a id="jsonh256"></a>

###  JsonH256

**Ƭ JsonH256**: *[JsonHash](#jsonhash)*

*Defined in [json/types.d.ts:12](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L12)*

___
<a id="jsonh512"></a>

###  JsonH512

**Ƭ JsonH512**: *[JsonHash](#jsonhash)*

*Defined in [json/types.d.ts:13](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L13)*

___
<a id="jsonhash"></a>

###  JsonHash

**Ƭ JsonHash**: *`string`*

*Defined in [json/types.d.ts:8](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L8)*

___
<a id="jsonheader"></a>

###  JsonHeader

**Ƭ JsonHeader**: *`object`*

*Defined in [json/types.d.ts:41](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L41)*

#### Type declaration

___
<a id="jsonheaderhash"></a>

###  JsonHeaderHash

**Ƭ JsonHeaderHash**: *[JsonH256](#jsonh256)*

*Defined in [json/types.d.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L14)*

___
<a id="jsonjustification"></a>

###  JsonJustification

**Ƭ JsonJustification**: *`object`*

*Defined in [json/types.d.ts:51](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L51)*

#### Type declaration

___
<a id="jsonjustification_signature"></a>

###  JsonJustification$Signature

**Ƭ JsonJustification$Signature**: *[`string`, `string`]*

*Defined in [json/types.d.ts:49](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L49)*

___
<a id="jsonobjectid"></a>

###  JsonObjectId

**Ƭ JsonObjectId**: *[JsonU64](#jsonu64)*

*Defined in [json/types.d.ts:21](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L21)*

___
<a id="jsonparachainid"></a>

###  JsonParaChainId

**Ƭ JsonParaChainId**: *[JsonU64](#jsonu64)*

*Defined in [json/types.d.ts:22](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L22)*

___
<a id="jsonsignature"></a>

###  JsonSignature

**Ƭ JsonSignature**: *[JsonHash](#jsonhash)*

*Defined in [json/types.d.ts:23](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L23)*

___
<a id="jsontransaction"></a>

###  JsonTransaction

**Ƭ JsonTransaction**: *`object`*

*Defined in [json/types.d.ts:25](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L25)*

#### Type declaration

___
<a id="jsonu256"></a>

###  JsonU256

**Ƭ JsonU256**: *[JsonBnType](#jsonbntype)*

*Defined in [json/types.d.ts:16](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L16)*

___
<a id="jsonu64"></a>

###  JsonU64

**Ƭ JsonU64**: *[JsonBnType](#jsonbntype)*

*Defined in [json/types.d.ts:15](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L15)*

___
<a id="jsonunchecked"></a>

###  JsonUnchecked

**Ƭ JsonUnchecked**: *`object`*

*Defined in [json/types.d.ts:32](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/types.d.ts#L32)*

#### Type declaration

___
<a id="justification"></a>

###  Justification

**Ƭ Justification**: *`object`*

*Defined in [bft.d.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/bft.d.ts#L9)*
*Defined in [justification.d.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/justification.d.ts#L14)*

#### Type declaration

___
<a id="justification_signature"></a>

###  Justification$Signature

**Ƭ Justification$Signature**: *`object`*

*Defined in [bft.d.ts:7](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/bft.d.ts#L7)*
*Defined in [justification.d.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/justification.d.ts#L9)*

#### Type declaration

___
<a id="misbehaviorreport"></a>

###  MisbehaviorReport

**Ƭ MisbehaviorReport**: *`object`*

*Defined in [misbehavior.d.ts:7](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/misbehavior.d.ts#L7)*

#### Type declaration

___
<a id="objectid"></a>

###  ObjectId

**Ƭ ObjectId**: *[U64](#u64)*

*Defined in [base.d.ts:23](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L23)*

___
<a id="parachainid"></a>

###  ParaChainId

**Ƭ ParaChainId**: *[U64](#u64)*

*Defined in [base.d.ts:24](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L24)*

___
<a id="proportion"></a>

###  Proportion

**Ƭ Proportion**: *[U64](#u64)*

*Defined in [base.d.ts:25](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L25)*

___
<a id="role"></a>

###  Role

**Ƭ Role**: *`keyof RoleMap`*

*Defined in [role/index.d.ts:12](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/role/index.d.ts#L12)*

___
<a id="rolemap"></a>

###  RoleMap

**Ƭ RoleMap**: *`object`*

*Defined in [role/index.d.ts:5](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/role/index.d.ts#L5)*

#### Type declaration

___
<a id="signature"></a>

###  Signature

**Ƭ Signature**: *[H512](#h512)*

*Defined in [base.d.ts:26](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L26)*

___
<a id="sizetype"></a>

###  SizeType

**Ƭ SizeType**: * `32` &#124; `64` &#124; `128`
*

*Defined in [sizes.ts:5](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/sizes.ts#L5)*

___
<a id="timestamp"></a>

###  Timestamp

**Ƭ Timestamp**: *[U64](#u64)*

*Defined in [base.d.ts:27](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L27)*

___
<a id="u128"></a>

###  U128

**Ƭ U128**: *`BN`*

*Defined in [base.d.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L14)*

___
<a id="u256"></a>

###  U256

**Ƭ U256**: *`BN`*

*Defined in [base.d.ts:15](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L15)*

___
<a id="u32"></a>

###  U32

**Ƭ U32**: *`BN`*

*Defined in [base.d.ts:12](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L12)*

___
<a id="u64"></a>

###  U64

**Ƭ U64**: *`BN`*

*Defined in [base.d.ts:13](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/base.d.ts#L13)*

___
<a id="unchecked"></a>

###  Unchecked

**Ƭ Unchecked**: *`object`*

*Defined in [extrinsic.d.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/extrinsic.d.ts#L10)*

#### Type declaration

___
<a id="uncheckedraw"></a>

###  UncheckedRaw

**Ƭ UncheckedRaw**: *`Uint8Array`*

*Defined in [extrinsic.d.ts:17](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/extrinsic.d.ts#L17)*

___

## Functions

<a id="accountiddecode"></a>

###  accountIdDecode

▸ **accountIdDecode**(value: *[JsonAccountId](#jsonaccountid)*): [AccountId](#accountid)

*Defined in [json/accountId/decode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/accountId/decode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonAccountId](#jsonaccountid) |

**Returns:** [AccountId](#accountid)

___
<a id="accountidencode"></a>

###  accountIdEncode

▸ **accountIdEncode**(value: *[AccountId](#accountid)*): [JsonAccountId](#jsonaccountid)

*Defined in [json/accountId/encode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/accountId/encode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [AccountId](#accountid) |

**Returns:** [JsonAccountId](#jsonaccountid)

___
<a id="block"></a>

###  block

▸ **block**(__namedParameters: *`object`*): [Block](#block)

*Defined in [create/block.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/create/block.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [Block](#block)

___
<a id="blockdecode"></a>

###  blockDecode

▸ **blockDecode**(__namedParameters: *`object`*): `BlockDecoded`

*Defined in [json/block/decode.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/block/decode.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `BlockDecoded`

___
<a id="bndecode"></a>

###  bnDecode

▸ **bnDecode**(value: *[JsonBnType](#jsonbntype)*, bitLength?: *`number`*): `BN`

*Defined in [json/bn/decode.ts:12](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/bn/decode.ts#L12)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| value | [JsonBnType](#jsonbntype) | - |
| `Default value` bitLength | `number` |  -1 |

**Returns:** `BN`

___
<a id="bnencode"></a>

###  bnEncode

▸ **bnEncode**(value: * `BN` &#124; `number`*, bitLength?: *`number`*): [JsonBnType](#jsonbntype)

*Defined in [json/bn/encode.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/bn/encode.ts#L11)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| value |  `BN` &#124; `number`| - |
| `Default value` bitLength | `number` |  -1 |

**Returns:** [JsonBnType](#jsonbntype)

___
<a id="bytesdecode"></a>

###  bytesDecode

▸ **bytesDecode**(value: *[JsonBytes](#jsonbytes)*): [Bytes](#bytes)

*Defined in [json/bytes/decode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/bytes/decode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonBytes](#jsonbytes) |

**Returns:** [Bytes](#bytes)

___
<a id="bytesencode"></a>

###  bytesEncode

▸ **bytesEncode**(value: *[Bytes](#bytes)*): [JsonBytes](#jsonbytes)

*Defined in [json/bytes/encode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/bytes/encode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [Bytes](#bytes) |

**Returns:** [JsonBytes](#jsonbytes)

___
<a id="decodearray"></a>

###  decodeArray

▸ **decodeArray**(input: *`Uint8Array`*): `DecodedArray`

*Defined in [codec/decoder/array.ts:12](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/decoder/array.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `DecodedArray`

___
<a id="decodeblock"></a>

###  decodeBlock

▸ **decodeBlock**(u8a: *`Uint8Array`*): [Block](#block)

*Defined in [codec/block/decode.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/block/decode.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a | `Uint8Array` |

**Returns:** [Block](#block)

___
<a id="decodeheader"></a>

###  decodeHeader

▸ **decodeHeader**(u8a: *`Uint8Array`*): `DecodedRaw`

*Defined in [codec/header/decodeRaw.ts:20](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/header/decodeRaw.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a | `Uint8Array` |

**Returns:** `DecodedRaw`

___
<a id="decodejustification"></a>

###  decodeJustification

▸ **decodeJustification**(u8a: *`Uint8Array`*): [Justification](#justification)

*Defined in [codec/justification/decode.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/justification/decode.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a | `Uint8Array` |

**Returns:** [Justification](#justification)

___
<a id="decoderaw"></a>

###  decodeRaw

▸ **decodeRaw**(u8a: *`Uint8Array`*): `RawData`

*Defined in [codec/block/decodeRaw.ts:19](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/block/decodeRaw.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| u8a | `Uint8Array` |

**Returns:** `RawData`

___
<a id="decodeu8a"></a>

###  decodeU8a

▸ **decodeU8a**(input: *`Uint8Array`*): `Uint8Array`

*Defined in [codec/decoder/u8a.ts:7](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/decoder/u8a.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="encodearray"></a>

###  encodeArray

▸ **encodeArray**(input: *`Array`<`Uint8Array`>*): `Uint8Array`

*Defined in [codec/encoder/array.ts:5](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/encoder/array.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Array`<`Uint8Array`> |

**Returns:** `Uint8Array`

___
<a id="encodeblock"></a>

###  encodeBlock

▸ **encodeBlock**(__namedParameters: *`object`*): `Uint8Array`

*Defined in [codec/block/encode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/block/encode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `Uint8Array`

___
<a id="encodeblockraw"></a>

###  encodeBlockRaw

▸ **encodeBlockRaw**(header: *`Uint8Array`*, extrinsics?: *`Array`<[UncheckedRaw](#uncheckedraw)>*): `Uint8Array`

*Defined in [codec/block/encodeRaw.ts:12](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/block/encodeRaw.ts#L12)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| header | `Uint8Array` | - |
| `Default value` extrinsics | `Array`<[UncheckedRaw](#uncheckedraw)> |  [] |

**Returns:** `Uint8Array`

___
<a id="encodeheader"></a>

###  encodeHeader

▸ **encodeHeader**(__namedParameters: *`object`*, extrinsics?: *`Array`<[UncheckedRaw](#uncheckedraw)>*): `Uint8Array`

*Defined in [codec/header/encode.ts:17](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/header/encode.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |
| `Optional` extrinsics | `Array`<[UncheckedRaw](#uncheckedraw)> |

**Returns:** `Uint8Array`

___
<a id="encodeu8a"></a>

###  encodeU8a

▸ **encodeU8a**(input: *`Uint8Array`*): `Uint8Array`

*Defined in [codec/encoder/u8a.ts:5](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/encoder/u8a.ts#L5)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="extrinsicdecode"></a>

###  extrinsicDecode

▸ **extrinsicDecode**(extrinsic: *`Uint8Array`*): `BlockExtrinsicDecoded`

*Defined in [json/extrinsic/decode.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/extrinsic/decode.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsic | `Uint8Array` |

**Returns:** `BlockExtrinsicDecoded`

___
<a id="extrinsicsrootraw"></a>

###  extrinsicsRootRaw

▸ **extrinsicsRootRaw**(extrinsics?: *`Array`<[UncheckedRaw](#uncheckedraw)>*): `Uint8Array`

*Defined in [create/extrinsic/rootRaw.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/create/extrinsic/rootRaw.ts#L10)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` extrinsics | `Array`<[UncheckedRaw](#uncheckedraw)> |  [] |

**Returns:** `Uint8Array`

___
<a id="hashdecode"></a>

###  hashDecode

▸ **hashDecode**(value: *[JsonHash](#jsonhash)*, bitLength?: *`number`*): [Hash](#hash)

*Defined in [json/hash/decode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/hash/decode.ts#L10)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| value | [JsonHash](#jsonhash) | - |
| `Default value` bitLength | `number` |  -1 |

**Returns:** [Hash](#hash)

___
<a id="hashencode"></a>

###  hashEncode

▸ **hashEncode**(value: * [Hash](#hash) &#124; `string`*, bitLength?: *`number`*): [JsonHash](#jsonhash)

*Defined in [json/hash/encode.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/hash/encode.ts#L11)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| value |  [Hash](#hash) &#124; `string`| - |
| `Default value` bitLength | `number` |  -1 |

**Returns:** [JsonHash](#jsonhash)

___
<a id="header"></a>

###  header

▸ **header**(__namedParameters: *`object`*, extrinsics?: *`Array`<[UncheckedRaw](#uncheckedraw)>*): [Header](#header)

*Defined in [create/header.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/create/header.ts#L14)*

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

*Defined in [json/header/decode.ts:15](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/header/decode.ts#L15)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [Header](#header)

___
<a id="headerencode"></a>

###  headerEncode

▸ **headerEncode**(__namedParameters: *`object`*): [JsonHeader](#jsonheader)

*Defined in [json/header/encode.ts:13](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/header/encode.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [JsonHeader](#jsonheader)

___
<a id="headerhash"></a>

###  headerHash

▸ **headerHash**(header: *[Header](#header)*): `Uint8Array`

*Defined in [codec/header/hash.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/codec/header/hash.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| header | [Header](#header) |

**Returns:** `Uint8Array`

___
<a id="justificationdecode"></a>

###  justificationDecode

▸ **justificationDecode**(__namedParameters: *`object`*): `BlockJustificationDecoded`

*Defined in [json/justification/decode.ts:12](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/justification/decode.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** `BlockJustificationDecoded`

___
<a id="justificationencode"></a>

###  justificationEncode

▸ **justificationEncode**(__namedParameters: *`object`*): [JsonJustification](#jsonjustification)

*Defined in [json/justification/encode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/justification/encode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [JsonJustification](#jsonjustification)

___
<a id="objectiddecode"></a>

###  objectIdDecode

▸ **objectIdDecode**(value: *[JsonObjectId](#jsonobjectid)*): [ObjectId](#objectid)

*Defined in [json/objectId/decode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/objectId/decode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonObjectId](#jsonobjectid) |

**Returns:** [ObjectId](#objectid)

___
<a id="objectidencode"></a>

###  objectIdEncode

▸ **objectIdEncode**(value: *[ObjectId](#objectid)*): [JsonObjectId](#jsonobjectid)

*Defined in [json/objectId/encode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/objectId/encode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [ObjectId](#objectid) |

**Returns:** [JsonObjectId](#jsonobjectid)

___
<a id="parachainiddecode"></a>

###  parachainIdDecode

▸ **parachainIdDecode**(value: *[JsonParaChainId](#jsonparachainid)*): [ParaChainId](#parachainid)

*Defined in [json/parachainId/decode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/parachainId/decode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonParaChainId](#jsonparachainid) |

**Returns:** [ParaChainId](#parachainid)

___
<a id="parachainidencode"></a>

###  parachainIdEncode

▸ **parachainIdEncode**(value: *[ParaChainId](#parachainid)*): [JsonParaChainId](#jsonparachainid)

*Defined in [json/parachainId/encode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/parachainId/encode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [ParaChainId](#parachainid) |

**Returns:** [JsonParaChainId](#jsonparachainid)

___
<a id="rolesfromid"></a>

###  rolesFromId

▸ **rolesFromId**(roleId: *`number`*): `Array`<[Role](#role)>

*Defined in [role/fromId.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/role/fromId.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| roleId | `number` |

**Returns:** `Array`<[Role](#role)>

___
<a id="rolestoid"></a>

###  rolesToId

▸ **rolesToId**(roles: *`Array`<[Role](#role)>*): `number`

*Defined in [role/toId.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/role/toId.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| roles | `Array`<[Role](#role)> |

**Returns:** `number`

___
<a id="signaturedecode"></a>

###  signatureDecode

▸ **signatureDecode**(value: *[JsonSignature](#jsonsignature)*): [Signature](#signature)

*Defined in [json/signature/decode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/signature/decode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [JsonSignature](#jsonsignature) |

**Returns:** [Signature](#signature)

___
<a id="signatureencode"></a>

###  signatureEncode

▸ **signatureEncode**(value: *[Signature](#signature)*): [JsonSignature](#jsonsignature)

*Defined in [json/signature/encode.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-primitives/src/json/signature/encode.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | [Signature](#signature) |

**Returns:** [JsonSignature](#jsonsignature)

___

