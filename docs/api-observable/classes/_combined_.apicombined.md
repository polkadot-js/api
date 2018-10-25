

# Hierarchy

↳  [ApiCalls](_calls_.apicalls.md)

**↳ ApiCombined**

↳  [Api](_index_.api.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiCombined**(api: *`RpcRxInterface`*): [ApiCombined](_combined_.apicombined.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `RpcRxInterface` |

**Returns:** [ApiCombined](_combined_.apicombined.md)

___

# Properties

<a id="whenready"></a>

##  whenReady

**● whenReady**: *`Observable`<`boolean`>*

*Inherited from [ApiBase](_base_.apibase.md).[whenReady](_base_.apibase.md#whenready)*

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L31)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Inherited from [ApiBase](_base_.apibase.md).[extrinsics](_base_.apibase.md#extrinsics)*

*Defined in [Base.ts:39](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L39)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Inherited from [ApiBase](_base_.apibase.md).[storage](_base_.apibase.md#storage)*

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L40)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:84](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L84)*

**Returns:** `Hash`

___

# Methods

<a id="accountidandindex"></a>

##  accountIdAndIndex

▸ **accountIdAndIndex**(address?: * `AccountId` &#124; `AccountIndex` &#124; `string` &#124; `null`*): `Observable`<[`AccountId` &#124; `undefined`,  `AccountIndex` &#124; `undefined`]>

*Defined in [Combined.ts:81](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` address |  `AccountId` &#124; `AccountIndex` &#124; `string` &#124; `null`|

**Returns:** `Observable`<[`AccountId` &#124; `undefined`,  `AccountIndex` &#124; `undefined`]>

___
<a id="accountidfromindex"></a>

##  accountIdFromIndex

▸ **accountIdFromIndex**(_accountIndex: * `AccountIndex` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Defined in [Combined.ts:55](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _accountIndex |  `AccountIndex` &#124; `string`|

**Returns:** `Observable`< `AccountId` &#124; `undefined`>

___
<a id="accountindexfromid"></a>

##  accountIndexFromId

▸ **accountIndexFromId**(accountId: * `AccountId` &#124; `string`*): `Observable`< `AccountIndex` &#124; `undefined`>

*Defined in [Combined.ts:70](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| accountId |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `AccountIndex` &#124; `undefined`>

___
<a id="accountindexes"></a>

##  accountIndexes

▸ **accountIndexes**(): `Observable`<`object`>

*Defined in [Combined.ts:23](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L23)*

**Returns:** `Observable`<`object`>

___
<a id="accountnonce"></a>

##  accountNonce

▸ **accountNonce**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[accountNonce](_queries_.apiqueries.md#accountnonce)*

*Defined in [Queries.ts:21](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Index` &#124; `undefined`>

___
<a id="balancefree"></a>

##  balanceFree

▸ **balanceFree**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[balanceFree](_queries_.apiqueries.md#balancefree)*

*Defined in [Queries.ts:25](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="balancereserved"></a>

##  balanceReserved

▸ **balanceReserved**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[balanceReserved](_queries_.apiqueries.md#balancereserved)*

*Defined in [Queries.ts:29](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="bestnumber"></a>

##  bestNumber

▸ **bestNumber**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[bestNumber](_calls_.apicalls.md#bestnumber)*

*Defined in [Calls.ts:13](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Calls.ts#L13)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="blocknow"></a>

##  blockNow

▸ **blockNow**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[blockNow](_queries_.apiqueries.md#blocknow)*

*Defined in [Queries.ts:37](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L37)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="blockperiod"></a>

##  blockPeriod

▸ **blockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[blockPeriod](_queries_.apiqueries.md#blockperiod)*

*Defined in [Queries.ts:33](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L33)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="chain"></a>

##  chain

▸ **chain**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[chain](_calls_.apicalls.md#chain)*

*Defined in [Calls.ts:25](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Calls.ts#L25)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyLaunchPeriod](_queries_.apiqueries.md#democracylaunchperiod)*

*Defined in [Queries.ts:41](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L41)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyNextTally](_queries_.apiqueries.md#democracynexttally)*

*Defined in [Queries.ts:45](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L45)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyreferendumvoters"></a>

##  democracyReferendumVoters

▸ **democracyReferendumVoters**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`RxReferendumVote`>>

*Defined in [Combined.ts:139](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L139)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`RxReferendumVote`>>

___
<a id="democracyvotersbalancesof"></a>

##  democracyVotersBalancesOf

▸ **democracyVotersBalancesOf**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`Balance`>>

*Defined in [Combined.ts:184](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L184)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`Balance`>>

___
<a id="democracyvotersvotesof"></a>

##  democracyVotersVotesOf

▸ **democracyVotersVotesOf**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`Bool`>>

*Defined in [Combined.ts:200](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L200)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`Bool`>>

___
<a id="democracyvotingperiod"></a>

##  democracyVotingPeriod

▸ **democracyVotingPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyVotingPeriod](_queries_.apiqueries.md#democracyvotingperiod)*

*Defined in [Queries.ts:135](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L135)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablocklength"></a>

##  eraBlockLength

▸ **eraBlockLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:211](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L211)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablockprogress"></a>

##  eraBlockProgress

▸ **eraBlockProgress**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:226](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L226)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablockremaining"></a>

##  eraBlockRemaining

▸ **eraBlockRemaining**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:249](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L249)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[eraLastLengthChange](_queries_.apiqueries.md#eralastlengthchange)*

*Defined in [Queries.ts:160](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L160)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<`RxFees`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[fees](_queries_.apiqueries.md#fees)*

*Defined in [Queries.ts:139](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L139)*

**Returns:** `Observable`<`RxFees`>

___
<a id="getaccountenumset"></a>

##  getAccountEnumSet

▸ **getAccountEnumSet**(index: * `AccountIndex` &#124; `BN` &#124; `number`*): `Observable`< `Array`<`AccountId`> &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[getAccountEnumSet](_queries_.apiqueries.md#getaccountenumset)*

*Defined in [Queries.ts:49](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `AccountIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< `Array`<`AccountId`> &#124; `undefined`>

___
<a id="getblock"></a>

##  getBlock

▸ **getBlock**(hash: *`Uint8Array`*): `Observable`< `SignedBlock` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[getBlock](_calls_.apicalls.md#getblock)*

*Defined in [Calls.ts:29](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Calls.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hash | `Uint8Array` |

**Returns:** `Observable`< `SignedBlock` &#124; `undefined`>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Inherited from [ApiBase](_base_.apibase.md).[isConnected](_base_.apibase.md#isconnected)*

*Defined in [Base.ts:88](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L88)*

**Returns:** `Observable`<`boolean`>

___
<a id="nextaccountenumset"></a>

##  nextAccountEnumSet

▸ **nextAccountEnumSet**(): `Observable`< `AccountIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[nextAccountEnumSet](_queries_.apiqueries.md#nextaccountenumset)*

*Defined in [Queries.ts:63](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L63)*

**Returns:** `Observable`< `AccountIndex` &#124; `undefined`>

___
<a id="proposaldeposits"></a>

##  proposalDeposits

▸ **proposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[proposalDeposits](_queries_.apiqueries.md#proposaldeposits)*

*Defined in [Queries.ts:67](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="publicproposalcount"></a>

##  publicProposalCount

▸ **publicProposalCount**(): `Observable`<`number`>

*Defined in [Combined.ts:117](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L117)*

**Returns:** `Observable`<`number`>

___
<a id="publicproposals"></a>

##  publicProposals

▸ **publicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[publicProposals](_queries_.apiqueries.md#publicproposals)*

*Defined in [Queries.ts:80](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L80)*

**Returns:** `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawCall](_base_.apibase.md#rawcall)*

*Defined in [Base.ts:92](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L92)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`<`T`>

___
<a id="rawstorage"></a>

##  rawStorage

▸ **rawStorage**<`T`>(key: *`StorageFunction`*, ...params: *`Array`<`any`>*): `Observable`< `T` &#124; `undefined`>

*Inherited from [ApiBase](_base_.apibase.md).[rawStorage](_base_.apibase.md#rawstorage)*

*Defined in [Base.ts:105](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L105)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `StorageFunction` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`< `T` &#124; `undefined`>

___
<a id="rawstoragemulti"></a>

##  rawStorageMulti

▸ **rawStorageMulti**<`T`>(...keys: *`Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawStorageMulti](_base_.apibase.md#rawstoragemulti)*

*Defined in [Base.ts:118](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L118)*

**Type parameters:**

#### T :  `[]`
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keys | `Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___
<a id="referendumcount"></a>

##  referendumCount

▸ **referendumCount**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumCount](_queries_.apiqueries.md#referendumcount)*

*Defined in [Queries.ts:100](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L100)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="referenduminfo"></a>

##  referendumInfo

▸ **referendumInfo**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumInfo](_queries_.apiqueries.md#referenduminfo)*

*Defined in [Queries.ts:104](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L104)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

___
<a id="referendumvote"></a>

##  referendumVote

▸ **referendumVote**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, address: * `AccountId` &#124; `string`*): `Observable`< `Bool` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumVote](_queries_.apiqueries.md#referendumvote)*

*Defined in [Queries.ts:117](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L117)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Bool` &#124; `undefined`>

___
<a id="referendumvoters"></a>

##  referendumVoters

▸ **referendumVoters**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumVoters](_queries_.apiqueries.md#referendumvoters)*

*Defined in [Queries.ts:121](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L121)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="referendumvotes"></a>

##  referendumVotes

▸ **referendumVotes**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<`boolean`>

*Defined in [Combined.ts:176](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L176)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|
| addresses | `Array`< `AccountId` &#124; `string`> |

**Returns:** `Observable`<`boolean`>

___
<a id="referendums"></a>

##  referendums

▸ **referendums**(): `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

*Defined in [Combined.ts:155](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L155)*

**Returns:** `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

___
<a id="referendumsinfo"></a>

##  referendumsInfo

▸ **referendumsInfo**(referendumIds: *`Array`< `ReferendumIndex` &#124; `BN` &#124; `number`>*): `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

*Defined in [Combined.ts:127](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L127)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumIds | `Array`< `ReferendumIndex` &#124; `BN` &#124; `number`> |

**Returns:** `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

___
<a id="sessionblockprogress"></a>

##  sessionBlockProgress

▸ **sessionBlockProgress**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:264](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L264)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionblockremaining"></a>

##  sessionBlockRemaining

▸ **sessionBlockRemaining**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:284](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L284)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionbrokenvalue"></a>

##  sessionBrokenValue

▸ **sessionBrokenValue**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Combined.ts:299](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L299)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessioncurrentindex"></a>

##  sessionCurrentIndex

▸ **sessionCurrentIndex**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionCurrentIndex](_queries_.apiqueries.md#sessioncurrentindex)*

*Defined in [Queries.ts:172](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L172)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionCurrentStart](_queries_.apiqueries.md#sessioncurrentstart)*

*Defined in [Queries.ts:176](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L176)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionLastLengthChange](_queries_.apiqueries.md#sessionlastlengthchange)*

*Defined in [Queries.ts:180](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L180)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionLength](_queries_.apiqueries.md#sessionlength)*

*Defined in [Queries.ts:184](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L184)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionReward](_queries_.apiqueries.md#sessionreward)*

*Defined in [Queries.ts:164](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L164)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionRewardCurrent](_queries_.apiqueries.md#sessionrewardcurrent)*

*Defined in [Queries.ts:168](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L168)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessiontimeexpected"></a>

##  sessionTimeExpected

▸ **sessionTimeExpected**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Combined.ts:318](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L318)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessiontimeremaining"></a>

##  sessionTimeRemaining

▸ **sessionTimeRemaining**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Combined.ts:333](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L333)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionValidators](_queries_.apiqueries.md#sessionvalidators)*

*Defined in [Queries.ts:192](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L192)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionsPerEra](_queries_.apiqueries.md#sessionsperera)*

*Defined in [Queries.ts:188](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L188)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingIntentions](_queries_.apiqueries.md#stakingintentions)*

*Defined in [Queries.ts:206](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L206)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingNominating](_queries_.apiqueries.md#stakingnominating)*

*Defined in [Queries.ts:234](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L234)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `AccountId` &#124; `undefined`>

___
<a id="stakingnominatorsfor"></a>

##  stakingNominatorsFor

▸ **stakingNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingNominatorsFor](_queries_.apiqueries.md#stakingnominatorsfor)*

*Defined in [Queries.ts:220](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L220)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="submitandwatchextrinsic"></a>

##  submitAndWatchExtrinsic

▸ **submitAndWatchExtrinsic**(extrinsic: *`Extrinsic`*): `Observable`< `ExtrinsicStatus` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[submitAndWatchExtrinsic](_calls_.apicalls.md#submitandwatchextrinsic)*

*Defined in [Calls.ts:51](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Calls.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsic | `Extrinsic` |

**Returns:** `Observable`< `ExtrinsicStatus` &#124; `undefined`>

___
<a id="submitextrinsic"></a>

##  submitExtrinsic

▸ **submitExtrinsic**(extrinsic: *`Extrinsic`*): `Observable`< `Hash` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[submitExtrinsic](_calls_.apicalls.md#submitextrinsic)*

*Defined in [Calls.ts:47](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Calls.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsic | `Extrinsic` |

**Returns:** `Observable`< `Hash` &#124; `undefined`>

___
<a id="subscribenewhead"></a>

##  subscribeNewHead

▸ **subscribeNewHead**(): `Observable`< `Header` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[subscribeNewHead](_calls_.apicalls.md#subscribenewhead)*

*Defined in [Calls.ts:33](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Calls.ts#L33)*

**Returns:** `Observable`< `Header` &#124; `undefined`>

___
<a id="systemname"></a>

##  systemName

▸ **systemName**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[systemName](_calls_.apicalls.md#systemname)*

*Defined in [Calls.ts:39](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Calls.ts#L39)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="systemversion"></a>

##  systemVersion

▸ **systemVersion**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[systemVersion](_calls_.apicalls.md#systemversion)*

*Defined in [Calls.ts:43](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Calls.ts#L43)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="validatingbalance"></a>

##  validatingBalance

▸ **validatingBalance**(address: * `AccountId` &#124; `string`*): `Observable`<`RxBalance`>

*Defined in [Combined.ts:348](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L348)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`RxBalance`>

___
<a id="validatingbalances"></a>

##  validatingBalances

▸ **validatingBalances**(...addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<`RxBalanceMap`>

*Defined in [Combined.ts:373](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L373)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` addresses | `Array`< `AccountId` &#124; `string`> |

**Returns:** `Observable`<`RxBalanceMap`>

___
<a id="validatorcount"></a>

##  validatorCount

▸ **validatorCount**(): `Observable`< `u32` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[validatorCount](_queries_.apiqueries.md#validatorcount)*

*Defined in [Queries.ts:238](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L238)*

**Returns:** `Observable`< `u32` &#124; `undefined`>

___
<a id="votingbalance"></a>

##  votingBalance

▸ **votingBalance**(address: * `AccountIndex` &#124; `AccountId` &#124; `string`*): `Observable`<`RxBalance`>

*Defined in [Combined.ts:387](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L387)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountIndex` &#124; `AccountId` &#124; `string`|

**Returns:** `Observable`<`RxBalance`>

___
<a id="votingbalances"></a>

##  votingBalances

▸ **votingBalances**(...addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<`RxBalance`[]>

*Defined in [Combined.ts:427](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L427)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` addresses | `Array`< `AccountId` &#124; `string`> |

**Returns:** `Observable`<`RxBalance`[]>

___
<a id="votingbalancesnominatorsfor"></a>

##  votingBalancesNominatorsFor

▸ **votingBalancesNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`any`>

*Defined in [Combined.ts:416](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Combined.ts#L416)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`any`>

___

