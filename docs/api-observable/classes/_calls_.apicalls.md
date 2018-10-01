

# Hierarchy

↳  [ApiQueries](_queries_.apiqueries.md)

**↳ ApiCalls**

↳  [ApiCombined](_combined_.apicombined.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiCalls**(api: *`RxApiInterface`*): [ApiCalls](_calls_.apicalls.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:22](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Base.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `RxApiInterface` |

**Returns:** [ApiCalls](_calls_.apicalls.md)

___

# Properties

<a id="api"></a>

## `<Protected>` api

**● api**: *`RxApiInterface`*

*Inherited from [ApiBase](_base_.apibase.md).[api](_base_.apibase.md#api)*

*Defined in [Base.ts:22](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Base.ts#L22)*

___

# Methods

<a id="bestnumber"></a>

##  bestNumber

▸ **bestNumber**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Calls.ts:13](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Calls.ts#L13)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="chaingetblock"></a>

##  chainGetBlock

▸ **chainGetBlock**(hash: *`Uint8Array`*): `Observable`< `SignedBlock` &#124; `undefined`>

*Defined in [Calls.ts:25](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Calls.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| hash | `Uint8Array` |

**Returns:** `Observable`< `SignedBlock` &#124; `undefined`>

___
<a id="chainnewhead"></a>

##  chainNewHead

▸ **chainNewHead**(): `Observable`< `Header` &#124; `undefined`>

*Defined in [Calls.ts:29](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Calls.ts#L29)*

**Returns:** `Observable`< `Header` &#124; `undefined`>

___
<a id="combine"></a>

## `<Protected>` combine

▸ **combine**<`T`,`R`>(observables: *`Array`<`Observable`<`any`>>*, mapfn?: *`MapFn`<`R`, `T`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[combine](_base_.apibase.md#combine)*

*Defined in [Base.ts:28](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Base.ts#L28)*

**Type parameters:**

#### T 
#### R 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| observables | `Array`<`Observable`<`any`>> | - |
| `Default value` mapfn | `MapFn`<`R`, `T`> |  defaultMapFn |

**Returns:** `Observable`<`T`>

___
<a id="democacyvoteof"></a>

##  democacyVoteOf

▸ **democacyVoteOf**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, address: * `AccountId` &#124; `string`*): `Observable`<`Bool`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democacyVoteOf](_queries_.apiqueries.md#democacyvoteof)*

*Defined in [Queries.ts:76](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Bool`>

___
<a id="democacyvotersfor"></a>

##  democacyVotersFor

▸ **democacyVotersFor**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democacyVotersFor](_queries_.apiqueries.md#democacyvotersfor)*

*Defined in [Queries.ts:80](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyLaunchPeriod](_queries_.apiqueries.md#democracylaunchperiod)*

*Defined in [Queries.ts:19](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L19)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyNextTally](_queries_.apiqueries.md#democracynexttally)*

*Defined in [Queries.ts:23](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L23)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyproposaldeposits"></a>

##  democracyProposalDeposits

▸ **democracyProposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyProposalDeposits](_queries_.apiqueries.md#democracyproposaldeposits)*

*Defined in [Queries.ts:27](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="democracypublicproposals"></a>

##  democracyPublicProposals

▸ **democracyPublicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyPublicProposals](_queries_.apiqueries.md#democracypublicproposals)*

*Defined in [Queries.ts:40](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L40)*

**Returns:** `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

___
<a id="democracyreferendumcount"></a>

##  democracyReferendumCount

▸ **democracyReferendumCount**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyReferendumCount](_queries_.apiqueries.md#democracyreferendumcount)*

*Defined in [Queries.ts:59](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L59)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyreferenduminfoof"></a>

##  democracyReferendumInfoOf

▸ **democracyReferendumInfoOf**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyReferendumInfoOf](_queries_.apiqueries.md#democracyreferenduminfoof)*

*Defined in [Queries.ts:63](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

___
<a id="democracyvotingperiod"></a>

##  democracyVotingPeriod

▸ **democracyVotingPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[democracyVotingPeriod](_queries_.apiqueries.md#democracyvotingperiod)*

*Defined in [Queries.ts:91](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L91)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[eraLastLengthChange](_queries_.apiqueries.md#eralastlengthchange)*

*Defined in [Queries.ts:116](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L116)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<[RxFees](../modules/_types_d_.md#rxfees)>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[fees](_queries_.apiqueries.md#fees)*

*Defined in [Queries.ts:95](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L95)*

**Returns:** `Observable`<[RxFees](../modules/_types_d_.md#rxfees)>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Inherited from [ApiBase](_base_.apibase.md).[isConnected](_base_.apibase.md#isconnected)*

*Defined in [Base.ts:36](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Base.ts#L36)*

**Returns:** `Observable`<`boolean`>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawCall](_base_.apibase.md#rawcall)*

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Base.ts#L40)*

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

▸ **rawStorage**<`T`>(key: *`StorageFunction`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawStorage](_base_.apibase.md#rawstorage)*

*Defined in [Base.ts:52](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Base.ts#L52)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `StorageFunction` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Observable`<`T`>

___
<a id="rawstoragemulti"></a>

##  rawStorageMulti

▸ **rawStorageMulti**<`T`>(...keys: *`Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawStorageMulti](_base_.apibase.md#rawstoragemulti)*

*Defined in [Base.ts:63](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Base.ts#L63)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keys | `Array`< [`StorageFunction`] &#124; [`StorageFunction`, `any`]> |

**Returns:** `Observable`<`T`>

___
<a id="sessioncurrentindex"></a>

##  sessionCurrentIndex

▸ **sessionCurrentIndex**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionCurrentIndex](_queries_.apiqueries.md#sessioncurrentindex)*

*Defined in [Queries.ts:128](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L128)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionCurrentStart](_queries_.apiqueries.md#sessioncurrentstart)*

*Defined in [Queries.ts:132](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L132)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionLastLengthChange](_queries_.apiqueries.md#sessionlastlengthchange)*

*Defined in [Queries.ts:136](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L136)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionLength](_queries_.apiqueries.md#sessionlength)*

*Defined in [Queries.ts:140](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L140)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionReward](_queries_.apiqueries.md#sessionreward)*

*Defined in [Queries.ts:120](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L120)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionRewardCurrent](_queries_.apiqueries.md#sessionrewardcurrent)*

*Defined in [Queries.ts:124](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L124)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionValidators](_queries_.apiqueries.md#sessionvalidators)*

*Defined in [Queries.ts:148](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L148)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[sessionsPerEra](_queries_.apiqueries.md#sessionsperera)*

*Defined in [Queries.ts:144](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L144)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingfreebalanceof"></a>

##  stakingFreeBalanceOf

▸ **stakingFreeBalanceOf**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingFreeBalanceOf](_queries_.apiqueries.md#stakingfreebalanceof)*

*Defined in [Queries.ts:171](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L171)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingIntentions](_queries_.apiqueries.md#stakingintentions)*

*Defined in [Queries.ts:159](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L159)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingNominating](_queries_.apiqueries.md#stakingnominating)*

*Defined in [Queries.ts:186](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L186)*

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

*Defined in [Queries.ts:175](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L175)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingreservedbalanceof"></a>

##  stakingReservedBalanceOf

▸ **stakingReservedBalanceOf**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[stakingReservedBalanceOf](_queries_.apiqueries.md#stakingreservedbalanceof)*

*Defined in [Queries.ts:191](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L191)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="systemaccountindexof"></a>

##  systemAccountIndexOf

▸ **systemAccountIndexOf**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[systemAccountIndexOf](_queries_.apiqueries.md#systemaccountindexof)*

*Defined in [Queries.ts:203](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L203)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Index` &#124; `undefined`>

___
<a id="timestampblockperiod"></a>

##  timestampBlockPeriod

▸ **timestampBlockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[timestampBlockPeriod](_queries_.apiqueries.md#timestampblockperiod)*

*Defined in [Queries.ts:195](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L195)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="timestampnow"></a>

##  timestampNow

▸ **timestampNow**(): `Observable`< `Moment` &#124; `undefined`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[timestampNow](_queries_.apiqueries.md#timestampnow)*

*Defined in [Queries.ts:199](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L199)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="validatorcount"></a>

##  validatorCount

▸ **validatorCount**(): `Observable`<`u32`>

*Inherited from [ApiQueries](_queries_.apiqueries.md).[validatorCount](_queries_.apiqueries.md#validatorcount)*

*Defined in [Queries.ts:207](https://github.com/polkadot-js/api/blob/876c34c/packages/api-observable/src/Queries.ts#L207)*

**Returns:** `Observable`<`u32`>

___

