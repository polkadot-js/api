

# Hierarchy

↳  [ApiCombined](_combined_.apicombined.md)

**↳ Api**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Api**(api: *`RpcRxInterface`*): [Api](_index_.api.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `RpcRxInterface` |

**Returns:** [Api](_index_.api.md)

___

# Properties

<a id="whenready"></a>

##  whenReady

**● whenReady**: *`Observable`<`boolean`>*

*Inherited from [ApiBase](_base_.apibase.md).[whenReady](_base_.apibase.md#whenready)*

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L33)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Inherited from [ApiBase](_base_.apibase.md).[extrinsics](_base_.apibase.md#extrinsics)*

*Defined in [Base.ts:41](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L41)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Inherited from [ApiBase](_base_.apibase.md).[storage](_base_.apibase.md#storage)*

*Defined in [Base.ts:42](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L42)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:87](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L87)*

**Returns:** `Hash`

___

# Methods

<a id="accountidandindex"></a>

##  accountIdAndIndex

▸ **accountIdAndIndex**(address?: * `AccountId` &#124; `AccountIndex` &#124; `string` &#124; `null`*): `Observable`<[`AccountId` &#124; `undefined`,  `AccountIndex` &#124; `undefined`]>

*Inherited from [ApiCombined](_combined_.apicombined.md).[accountIdAndIndex](_combined_.apicombined.md#accountidandindex)*

*Defined in [Combined.ts:79](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` address |  `AccountId` &#124; `AccountIndex` &#124; `string` &#124; `null`|

**Returns:** `Observable`<[`AccountId` &#124; `undefined`,  `AccountIndex` &#124; `undefined`]>

___
<a id="accountidfromindex"></a>

##  accountIdFromIndex

▸ **accountIdFromIndex**(_accountIndex: * `AccountIndex` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[accountIdFromIndex](_combined_.apicombined.md#accountidfromindex)*

*Defined in [Combined.ts:53](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _accountIndex |  `AccountIndex` &#124; `string`|

**Returns:** `Observable`< `AccountId` &#124; `undefined`>

___
<a id="accountindexfromid"></a>

##  accountIndexFromId

▸ **accountIndexFromId**(accountId: * `AccountId` &#124; `string`*): `Observable`< `AccountIndex` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[accountIndexFromId](_combined_.apicombined.md#accountindexfromid)*

*Defined in [Combined.ts:68](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| accountId |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `AccountIndex` &#124; `undefined`>

___
<a id="accountindexes"></a>

##  accountIndexes

▸ **accountIndexes**(): `Observable`<`object`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[accountIndexes](_combined_.apicombined.md#accountindexes)*

*Defined in [Combined.ts:23](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L23)*

**Returns:** `Observable`<`object`>

___
<a id="accountnonce"></a>

##  accountNonce

▸ **accountNonce**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[accountNonce](_queries_.apiqueries.md#accountnonce)*

*Defined in [Queries.ts:19](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Index` &#124; `undefined`>

___
<a id="balancefree"></a>

##  balanceFree

▸ **balanceFree**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[balanceFree](_queries_.apiqueries.md#balancefree)*

*Defined in [Queries.ts:23](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="balancereserved"></a>

##  balanceReserved

▸ **balanceReserved**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[balanceReserved](_queries_.apiqueries.md#balancereserved)*

*Defined in [Queries.ts:27](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="bestnumber"></a>

##  bestNumber

▸ **bestNumber**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[bestNumber](_calls_.apicalls.md#bestnumber)*

*Defined in [Calls.ts:13](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Calls.ts#L13)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="blocknow"></a>

##  blockNow

▸ **blockNow**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[blockNow](_queries_.apiqueries.md#blocknow)*

*Defined in [Queries.ts:35](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L35)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="blockperiod"></a>

##  blockPeriod

▸ **blockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[blockPeriod](_queries_.apiqueries.md#blockperiod)*

*Defined in [Queries.ts:31](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L31)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="chain"></a>

##  chain

▸ **chain**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[chain](_calls_.apicalls.md#chain)*

*Defined in [Calls.ts:25](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Calls.ts#L25)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyLaunchPeriod](_queries_.apiqueries.md#democracylaunchperiod)*

*Defined in [Queries.ts:39](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L39)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyNextTally](_queries_.apiqueries.md#democracynexttally)*

*Defined in [Queries.ts:43](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L43)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyreferendumvoters"></a>

##  democracyReferendumVoters

▸ **democracyReferendumVoters**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<[RxReferendumVote](../modules/_types_.md#rxreferendumvote)>>

*Inherited from [ApiCombined](_combined_.apicombined.md).[democracyReferendumVoters](_combined_.apicombined.md#democracyreferendumvoters)*

*Defined in [Combined.ts:137](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L137)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<[RxReferendumVote](../modules/_types_.md#rxreferendumvote)>>

___
<a id="democracyvotersbalancesof"></a>

##  democracyVotersBalancesOf

▸ **democracyVotersBalancesOf**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`Balance`>>

*Inherited from [ApiCombined](_combined_.apicombined.md).[democracyVotersBalancesOf](_combined_.apicombined.md#democracyvotersbalancesof)*

*Defined in [Combined.ts:182](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L182)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`Balance`>>

___
<a id="democracyvotersvotesof"></a>

##  democracyVotersVotesOf

▸ **democracyVotersVotesOf**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`Bool`>>

*Inherited from [ApiCombined](_combined_.apicombined.md).[democracyVotersVotesOf](_combined_.apicombined.md#democracyvotersvotesof)*

*Defined in [Combined.ts:198](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L198)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`Bool`>>

___
<a id="democracyvotingperiod"></a>

##  democracyVotingPeriod

▸ **democracyVotingPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyVotingPeriod](_queries_.apiqueries.md#democracyvotingperiod)*

*Defined in [Queries.ts:126](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L126)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablocklength"></a>

##  eraBlockLength

▸ **eraBlockLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[eraBlockLength](_combined_.apicombined.md#erablocklength)*

*Defined in [Combined.ts:209](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L209)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablockprogress"></a>

##  eraBlockProgress

▸ **eraBlockProgress**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[eraBlockProgress](_combined_.apicombined.md#erablockprogress)*

*Defined in [Combined.ts:224](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L224)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablockremaining"></a>

##  eraBlockRemaining

▸ **eraBlockRemaining**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[eraBlockRemaining](_combined_.apicombined.md#erablockremaining)*

*Defined in [Combined.ts:247](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L247)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[eraLastLengthChange](_queries_.apiqueries.md#eralastlengthchange)*

*Defined in [Queries.ts:151](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L151)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<[RxFees](../modules/_types_.md#rxfees)>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[fees](_queries_.apiqueries.md#fees)*

*Defined in [Queries.ts:130](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L130)*

**Returns:** `Observable`<[RxFees](../modules/_types_.md#rxfees)>

___
<a id="getaccountenumset"></a>

##  getAccountEnumSet

▸ **getAccountEnumSet**(index: * `AccountIndex` &#124; `BN` &#124; `number`*): `Observable`< `Array`<`AccountId`> &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[getAccountEnumSet](_queries_.apiqueries.md#getaccountenumset)*

*Defined in [Queries.ts:47](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index |  `AccountIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< `Array`<`AccountId`> &#124; `undefined`>

___
<a id="getblock"></a>

##  getBlock

▸ **getBlock**(hash: *`Uint8Array`*): `Observable`< `SignedBlock` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[getBlock](_calls_.apicalls.md#getblock)*

*Defined in [Calls.ts:29](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Calls.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `Uint8Array` |

**Returns:** `Observable`< `SignedBlock` &#124; `undefined`>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Inherited from [ApiBase](_base_.apibase.md).[isConnected](_base_.apibase.md#isconnected)*

*Defined in [Base.ts:91](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L91)*

**Returns:** `Observable`<`boolean`>

___
<a id="nextaccountenumset"></a>

##  nextAccountEnumSet

▸ **nextAccountEnumSet**(): `Observable`< `AccountIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[nextAccountEnumSet](_queries_.apiqueries.md#nextaccountenumset)*

*Defined in [Queries.ts:58](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L58)*

**Returns:** `Observable`< `AccountIndex` &#124; `undefined`>

___
<a id="proposaldeposits"></a>

##  proposalDeposits

▸ **proposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[proposalDeposits](_queries_.apiqueries.md#proposaldeposits)*

*Defined in [Queries.ts:62](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="publicproposalcount"></a>

##  publicProposalCount

▸ **publicProposalCount**(): `Observable`<`number`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[publicProposalCount](_combined_.apicombined.md#publicproposalcount)*

*Defined in [Combined.ts:115](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L115)*

**Returns:** `Observable`<`number`>

___
<a id="publicproposals"></a>

##  publicProposals

▸ **publicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[publicProposals](_queries_.apiqueries.md#publicproposals)*

*Defined in [Queries.ts:75](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L75)*

**Returns:** `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawCall](_base_.apibase.md#rawcall)*

*Defined in [Base.ts:95](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L95)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| __namedParameters | `object` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`<`T`>

___
<a id="rawstorage"></a>

##  rawStorage

▸ **rawStorage**<`T`>(key: * `Uint8Array` &#124; `StorageFunction`*, ...params: *`Array`<`any`>*): `Observable`< `T` &#124; `undefined`>

*Inherited from [ApiBase](_base_.apibase.md).[rawStorage](_base_.apibase.md#rawstorage)*

*Defined in [Base.ts:108](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L108)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| key |  `Uint8Array` &#124; `StorageFunction`|
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`< `T` &#124; `undefined`>

___
<a id="rawstoragemulti"></a>

##  rawStorageMulti

▸ **rawStorageMulti**<`T`>(...keys: *`Array`< `Uint8Array` &#124; [`StorageFunction`] &#124; [`StorageFunction`, `any`]>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawStorageMulti](_base_.apibase.md#rawstoragemulti)*

*Defined in [Base.ts:123](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Base.ts#L123)*

**Type parameters:**

#### T :  `[]`
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` keys | `Array`< `Uint8Array` &#124; [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___
<a id="referendumcount"></a>

##  referendumCount

▸ **referendumCount**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumCount](_queries_.apiqueries.md#referendumcount)*

*Defined in [Queries.ts:94](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L94)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="referenduminfo"></a>

##  referendumInfo

▸ **referendumInfo**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumInfo](_queries_.apiqueries.md#referenduminfo)*

*Defined in [Queries.ts:98](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

___
<a id="referendumvote"></a>

##  referendumVote

▸ **referendumVote**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, address: * `AccountId` &#124; `string`*): `Observable`< `Bool` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumVote](_queries_.apiqueries.md#referendumvote)*

*Defined in [Queries.ts:111](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Bool` &#124; `undefined`>

___
<a id="referendumvoters"></a>

##  referendumVoters

▸ **referendumVoters**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumVoters](_queries_.apiqueries.md#referendumvoters)*

*Defined in [Queries.ts:115](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L115)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="referendumvotes"></a>

##  referendumVotes

▸ **referendumVotes**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<`boolean`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[referendumVotes](_combined_.apicombined.md#referendumvotes)*

*Defined in [Combined.ts:174](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L174)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|
| addresses | `Array`< `AccountId` &#124; `string`> |

**Returns:** `Observable`<`boolean`>

___
<a id="referendums"></a>

##  referendums

▸ **referendums**(): `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

*Inherited from [ApiCombined](_combined_.apicombined.md).[referendums](_combined_.apicombined.md#referendums)*

*Defined in [Combined.ts:153](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L153)*

**Returns:** `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

___
<a id="referendumsinfo"></a>

##  referendumsInfo

▸ **referendumsInfo**(referendumIds: *`Array`< `ReferendumIndex` &#124; `BN` &#124; `number`>*): `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

*Inherited from [ApiCombined](_combined_.apicombined.md).[referendumsInfo](_combined_.apicombined.md#referendumsinfo)*

*Defined in [Combined.ts:125](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L125)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| referendumIds | `Array`< `ReferendumIndex` &#124; `BN` &#124; `number`> |

**Returns:** `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

___
<a id="sessionblockprogress"></a>

##  sessionBlockProgress

▸ **sessionBlockProgress**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[sessionBlockProgress](_combined_.apicombined.md#sessionblockprogress)*

*Defined in [Combined.ts:262](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L262)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionblockremaining"></a>

##  sessionBlockRemaining

▸ **sessionBlockRemaining**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[sessionBlockRemaining](_combined_.apicombined.md#sessionblockremaining)*

*Defined in [Combined.ts:282](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L282)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionbrokenvalue"></a>

##  sessionBrokenValue

▸ **sessionBrokenValue**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[sessionBrokenValue](_combined_.apicombined.md#sessionbrokenvalue)*

*Defined in [Combined.ts:297](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L297)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessioncurrentindex"></a>

##  sessionCurrentIndex

▸ **sessionCurrentIndex**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionCurrentIndex](_queries_.apiqueries.md#sessioncurrentindex)*

*Defined in [Queries.ts:163](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L163)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionCurrentStart](_queries_.apiqueries.md#sessioncurrentstart)*

*Defined in [Queries.ts:167](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L167)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionLastLengthChange](_queries_.apiqueries.md#sessionlastlengthchange)*

*Defined in [Queries.ts:171](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L171)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionLength](_queries_.apiqueries.md#sessionlength)*

*Defined in [Queries.ts:175](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L175)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionReward](_queries_.apiqueries.md#sessionreward)*

*Defined in [Queries.ts:155](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L155)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionRewardCurrent](_queries_.apiqueries.md#sessionrewardcurrent)*

*Defined in [Queries.ts:159](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L159)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessiontimeexpected"></a>

##  sessionTimeExpected

▸ **sessionTimeExpected**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[sessionTimeExpected](_combined_.apicombined.md#sessiontimeexpected)*

*Defined in [Combined.ts:316](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L316)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessiontimeremaining"></a>

##  sessionTimeRemaining

▸ **sessionTimeRemaining**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[sessionTimeRemaining](_combined_.apicombined.md#sessiontimeremaining)*

*Defined in [Combined.ts:331](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L331)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionValidators](_queries_.apiqueries.md#sessionvalidators)*

*Defined in [Queries.ts:183](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L183)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionsPerEra](_queries_.apiqueries.md#sessionsperera)*

*Defined in [Queries.ts:179](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L179)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingIntentions](_queries_.apiqueries.md#stakingintentions)*

*Defined in [Queries.ts:194](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L194)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingNominating](_queries_.apiqueries.md#stakingnominating)*

*Defined in [Queries.ts:216](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L216)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `AccountId` &#124; `undefined`>

___
<a id="stakingnominatorsfor"></a>

##  stakingNominatorsFor

▸ **stakingNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingNominatorsFor](_queries_.apiqueries.md#stakingnominatorsfor)*

*Defined in [Queries.ts:205](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L205)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="submitandwatchextrinsic"></a>

##  submitAndWatchExtrinsic

▸ **submitAndWatchExtrinsic**(extrinsic: *`Extrinsic`*): `Observable`< `ExtrinsicStatus` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[submitAndWatchExtrinsic](_calls_.apicalls.md#submitandwatchextrinsic)*

*Defined in [Calls.ts:51](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Calls.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| extrinsic | `Extrinsic` |

**Returns:** `Observable`< `ExtrinsicStatus` &#124; `undefined`>

___
<a id="submitextrinsic"></a>

##  submitExtrinsic

▸ **submitExtrinsic**(extrinsic: *`Extrinsic`*): `Observable`< `Hash` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[submitExtrinsic](_calls_.apicalls.md#submitextrinsic)*

*Defined in [Calls.ts:47](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Calls.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| extrinsic | `Extrinsic` |

**Returns:** `Observable`< `Hash` &#124; `undefined`>

___
<a id="subscribenewhead"></a>

##  subscribeNewHead

▸ **subscribeNewHead**(): `Observable`< `Header` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[subscribeNewHead](_calls_.apicalls.md#subscribenewhead)*

*Defined in [Calls.ts:33](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Calls.ts#L33)*

**Returns:** `Observable`< `Header` &#124; `undefined`>

___
<a id="systemevents"></a>

##  systemEvents

▸ **systemEvents**(): `Observable`<`Array`<`EventRecord`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[systemEvents](_queries_.apiqueries.md#systemevents)*

*Defined in [Queries.ts:220](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L220)*

**Returns:** `Observable`<`Array`<`EventRecord`>>

___
<a id="systemname"></a>

##  systemName

▸ **systemName**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[systemName](_calls_.apicalls.md#systemname)*

*Defined in [Calls.ts:39](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Calls.ts#L39)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="systemversion"></a>

##  systemVersion

▸ **systemVersion**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[systemVersion](_calls_.apicalls.md#systemversion)*

*Defined in [Calls.ts:43](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Calls.ts#L43)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="validatingbalance"></a>

##  validatingBalance

▸ **validatingBalance**(address: * `AccountId` &#124; `string`*): `Observable`<[RxBalance](../modules/_types_.md#rxbalance)>

*Inherited from [ApiCombined](_combined_.apicombined.md).[validatingBalance](_combined_.apicombined.md#validatingbalance)*

*Defined in [Combined.ts:346](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L346)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<[RxBalance](../modules/_types_.md#rxbalance)>

___
<a id="validatingbalances"></a>

##  validatingBalances

▸ **validatingBalances**(...addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<[RxBalanceMap](../modules/_types_.md#rxbalancemap)>

*Inherited from [ApiCombined](_combined_.apicombined.md).[validatingBalances](_combined_.apicombined.md#validatingbalances)*

*Defined in [Combined.ts:371](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L371)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` addresses | `Array`< `AccountId` &#124; `string`> |

**Returns:** `Observable`<[RxBalanceMap](../modules/_types_.md#rxbalancemap)>

___
<a id="validatorcount"></a>

##  validatorCount

▸ **validatorCount**(): `Observable`< `u32` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[validatorCount](_queries_.apiqueries.md#validatorcount)*

*Defined in [Queries.ts:231](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Queries.ts#L231)*

**Returns:** `Observable`< `u32` &#124; `undefined`>

___
<a id="votingbalance"></a>

##  votingBalance

▸ **votingBalance**(address: * `AccountIndex` &#124; `AccountId` &#124; `string`*): `Observable`<[RxBalance](../modules/_types_.md#rxbalance)>

*Inherited from [ApiCombined](_combined_.apicombined.md).[votingBalance](_combined_.apicombined.md#votingbalance)*

*Defined in [Combined.ts:385](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L385)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountIndex` &#124; `AccountId` &#124; `string`|

**Returns:** `Observable`<[RxBalance](../modules/_types_.md#rxbalance)>

___
<a id="votingbalances"></a>

##  votingBalances

▸ **votingBalances**(...addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<[RxBalance](../modules/_types_.md#rxbalance)[]>

*Inherited from [ApiCombined](_combined_.apicombined.md).[votingBalances](_combined_.apicombined.md#votingbalances)*

*Defined in [Combined.ts:425](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L425)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` addresses | `Array`< `AccountId` &#124; `string`> |

**Returns:** `Observable`<[RxBalance](../modules/_types_.md#rxbalance)[]>

___
<a id="votingbalancesnominatorsfor"></a>

##  votingBalancesNominatorsFor

▸ **votingBalancesNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`any`>

*Inherited from [ApiCombined](_combined_.apicombined.md).[votingBalancesNominatorsFor](_combined_.apicombined.md#votingbalancesnominatorsfor)*

*Defined in [Combined.ts:414](https://github.com/polkadot-js/api/blob/04c639d/packages/api-observable/src/Combined.ts#L414)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`any`>

___

