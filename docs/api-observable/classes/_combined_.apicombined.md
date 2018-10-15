

# Hierarchy

↳  [ApiCalls](_calls_.apicalls.md)

**↳ ApiCombined**

↳  [Api](_index_.api.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiCombined**(api: *`RpcRxInterface`*): [ApiCombined](_combined_.apicombined.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:32](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L32)*

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

*Defined in [Base.ts:32](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L32)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Inherited from [ApiBase](_base_.apibase.md).[extrinsics](_base_.apibase.md#extrinsics)*

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L40)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Inherited from [ApiBase](_base_.apibase.md).[storage](_base_.apibase.md#storage)*

*Defined in [Base.ts:41](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L41)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:85](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L85)*

**Returns:** `Hash`

___

# Methods

<a id="accountnonce"></a>

##  accountNonce

▸ **accountNonce**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[accountNonce](_queries_.apiqueries.md#accountnonce)*

*Defined in [Queries.ts:21](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L21)*

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

*Defined in [Queries.ts:25](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L25)*

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

*Defined in [Queries.ts:29](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L29)*

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

*Defined in [Calls.ts:13](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Calls.ts#L13)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="blocknow"></a>

##  blockNow

▸ **blockNow**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[blockNow](_queries_.apiqueries.md#blocknow)*

*Defined in [Queries.ts:37](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L37)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="blockperiod"></a>

##  blockPeriod

▸ **blockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[blockPeriod](_queries_.apiqueries.md#blockperiod)*

*Defined in [Queries.ts:33](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L33)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="chain"></a>

##  chain

▸ **chain**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[chain](_calls_.apicalls.md#chain)*

*Defined in [Calls.ts:25](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Calls.ts#L25)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyLaunchPeriod](_queries_.apiqueries.md#democracylaunchperiod)*

*Defined in [Queries.ts:41](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L41)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyNextTally](_queries_.apiqueries.md#democracynexttally)*

*Defined in [Queries.ts:45](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L45)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyreferendumvoters"></a>

##  democracyReferendumVoters

▸ **democracyReferendumVoters**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`RxReferendumVote`>>

*Defined in [Combined.ts:42](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`RxReferendumVote`>>

___
<a id="democracyvotersbalancesof"></a>

##  democracyVotersBalancesOf

▸ **democracyVotersBalancesOf**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`Balance`>>

*Defined in [Combined.ts:87](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`Balance`>>

___
<a id="democracyvotersvotesof"></a>

##  democracyVotersVotesOf

▸ **democracyVotersVotesOf**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`Bool`>>

*Defined in [Combined.ts:103](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L103)*

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

*Defined in [Queries.ts:115](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L115)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablocklength"></a>

##  eraBlockLength

▸ **eraBlockLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:114](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L114)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablockprogress"></a>

##  eraBlockProgress

▸ **eraBlockProgress**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:129](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L129)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="erablockremaining"></a>

##  eraBlockRemaining

▸ **eraBlockRemaining**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:152](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L152)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[eraLastLengthChange](_queries_.apiqueries.md#eralastlengthchange)*

*Defined in [Queries.ts:140](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L140)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<`RxFees`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[fees](_queries_.apiqueries.md#fees)*

*Defined in [Queries.ts:119](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L119)*

**Returns:** `Observable`<`RxFees`>

___
<a id="getblock"></a>

##  getBlock

▸ **getBlock**(hash: *`Uint8Array`*): `Observable`< `SignedBlock` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[getBlock](_calls_.apicalls.md#getblock)*

*Defined in [Calls.ts:29](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Calls.ts#L29)*

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

*Defined in [Base.ts:89](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L89)*

**Returns:** `Observable`<`boolean`>

___
<a id="proposaldeposits"></a>

##  proposalDeposits

▸ **proposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[proposalDeposits](_queries_.apiqueries.md#proposaldeposits)*

*Defined in [Queries.ts:49](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="publicproposalcount"></a>

##  publicProposalCount

▸ **publicProposalCount**(): `Observable`<`number`>

*Defined in [Combined.ts:20](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L20)*

**Returns:** `Observable`<`number`>

___
<a id="publicproposals"></a>

##  publicProposals

▸ **publicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[publicProposals](_queries_.apiqueries.md#publicproposals)*

*Defined in [Queries.ts:62](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L62)*

**Returns:** `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawCall](_base_.apibase.md#rawcall)*

*Defined in [Base.ts:93](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L93)*

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

*Defined in [Base.ts:106](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L106)*

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

*Defined in [Base.ts:119](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Base.ts#L119)*

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

*Defined in [Queries.ts:81](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L81)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="referenduminfo"></a>

##  referendumInfo

▸ **referendumInfo**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[referendumInfo](_queries_.apiqueries.md#referenduminfo)*

*Defined in [Queries.ts:85](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L85)*

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

*Defined in [Queries.ts:98](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L98)*

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

*Defined in [Queries.ts:102](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="referendumvotes"></a>

##  referendumVotes

▸ **referendumVotes**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<`boolean`>

*Defined in [Combined.ts:79](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L79)*

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

*Defined in [Combined.ts:58](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L58)*

**Returns:** `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

___
<a id="referendumsinfo"></a>

##  referendumsInfo

▸ **referendumsInfo**(referendumIds: *`Array`< `ReferendumIndex` &#124; `BN` &#124; `number`>*): `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

*Defined in [Combined.ts:30](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumIds | `Array`< `ReferendumIndex` &#124; `BN` &#124; `number`> |

**Returns:** `Observable`<`Array`<[RxReferendum](_classes_.rxreferendum.md)>>

___
<a id="sessionblockprogress"></a>

##  sessionBlockProgress

▸ **sessionBlockProgress**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:167](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L167)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionblockremaining"></a>

##  sessionBlockRemaining

▸ **sessionBlockRemaining**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Combined.ts:187](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L187)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionbrokenvalue"></a>

##  sessionBrokenValue

▸ **sessionBrokenValue**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Combined.ts:202](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L202)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessioncurrentindex"></a>

##  sessionCurrentIndex

▸ **sessionCurrentIndex**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionCurrentIndex](_queries_.apiqueries.md#sessioncurrentindex)*

*Defined in [Queries.ts:152](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L152)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionCurrentStart](_queries_.apiqueries.md#sessioncurrentstart)*

*Defined in [Queries.ts:156](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L156)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionLastLengthChange](_queries_.apiqueries.md#sessionlastlengthchange)*

*Defined in [Queries.ts:160](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L160)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionLength](_queries_.apiqueries.md#sessionlength)*

*Defined in [Queries.ts:164](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L164)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionReward](_queries_.apiqueries.md#sessionreward)*

*Defined in [Queries.ts:144](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L144)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionRewardCurrent](_queries_.apiqueries.md#sessionrewardcurrent)*

*Defined in [Queries.ts:148](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L148)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessiontimeexpected"></a>

##  sessionTimeExpected

▸ **sessionTimeExpected**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Combined.ts:221](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L221)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessiontimeremaining"></a>

##  sessionTimeRemaining

▸ **sessionTimeRemaining**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Combined.ts:236](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L236)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionValidators](_queries_.apiqueries.md#sessionvalidators)*

*Defined in [Queries.ts:172](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L172)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionsPerEra](_queries_.apiqueries.md#sessionsperera)*

*Defined in [Queries.ts:168](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L168)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingIntentions](_queries_.apiqueries.md#stakingintentions)*

*Defined in [Queries.ts:185](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L185)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingNominating](_queries_.apiqueries.md#stakingnominating)*

*Defined in [Queries.ts:211](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L211)*

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

*Defined in [Queries.ts:198](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L198)*

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

*Defined in [Calls.ts:51](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Calls.ts#L51)*

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

*Defined in [Calls.ts:47](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Calls.ts#L47)*

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

*Defined in [Calls.ts:33](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Calls.ts#L33)*

**Returns:** `Observable`< `Header` &#124; `undefined`>

___
<a id="systemname"></a>

##  systemName

▸ **systemName**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[systemName](_calls_.apicalls.md#systemname)*

*Defined in [Calls.ts:39](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Calls.ts#L39)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="systemversion"></a>

##  systemVersion

▸ **systemVersion**(): `Observable`< `Text` &#124; `undefined`>

*Inherited from [ApiCalls](_calls_.apicalls.md).[systemVersion](_calls_.apicalls.md#systemversion)*

*Defined in [Calls.ts:43](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Calls.ts#L43)*

**Returns:** `Observable`< `Text` &#124; `undefined`>

___
<a id="validatingbalance"></a>

##  validatingBalance

▸ **validatingBalance**(address: * `AccountId` &#124; `string`*): `Observable`<`RxBalance`>

*Defined in [Combined.ts:251](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L251)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`RxBalance`>

___
<a id="validatingbalances"></a>

##  validatingBalances

▸ **validatingBalances**(...addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<`RxBalanceMap`>

*Defined in [Combined.ts:276](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L276)*

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

*Defined in [Queries.ts:215](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Queries.ts#L215)*

**Returns:** `Observable`< `u32` &#124; `undefined`>

___
<a id="votingbalance"></a>

##  votingBalance

▸ **votingBalance**(_address: * `AccountId` &#124; `string`*): `Observable`<`RxBalance`>

*Defined in [Combined.ts:290](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L290)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`RxBalance`>

___
<a id="votingbalances"></a>

##  votingBalances

▸ **votingBalances**(...addresses: *`Array`< `AccountId` &#124; `string`>*): `Observable`<`RxBalance`[]>

*Defined in [Combined.ts:324](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L324)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` addresses | `Array`< `AccountId` &#124; `string`> |

**Returns:** `Observable`<`RxBalance`[]>

___
<a id="votingbalancesnominatorsfor"></a>

##  votingBalancesNominatorsFor

▸ **votingBalancesNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`any`>

*Defined in [Combined.ts:313](https://github.com/polkadot-js/api/blob/8de9ea8/packages/api-observable/src/Combined.ts#L313)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`any`>

___

