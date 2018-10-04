

# Hierarchy

 [ApiBase](_base_.apibase.md)

**↳ ApiQueries**

↳  [ApiCalls](_calls_.apicalls.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiQueries**(api: *`RxApiInterface`*): [ApiQueries](_queries_.apiqueries.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `RxApiInterface` |

**Returns:** [ApiQueries](_queries_.apiqueries.md)

___

# Properties

<a id="_api"></a>

## `<Protected>` _api

**● _api**: *`RxApiInterface`*

*Inherited from [ApiBase](_base_.apibase.md).[_api](_base_.apibase.md#_api)*

*Defined in [Base.ts:27](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L27)*

___
<a id="_genesishash"></a>

## `<Protected>` _genesisHash

**● _genesisHash**: *`Hash`*

*Inherited from [ApiBase](_base_.apibase.md).[_genesisHash](_base_.apibase.md#_genesishash)*

*Defined in [Base.ts:28](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L28)*

___
<a id="whenready"></a>

##  whenReady

**● whenReady**: *`Observable`<`boolean`>*

*Inherited from [ApiBase](_base_.apibase.md).[whenReady](_base_.apibase.md#whenready)*

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L31)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Inherited from [ApiBase](_base_.apibase.md).[extrinsics](_base_.apibase.md#extrinsics)*

*Defined in [Base.ts:39](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L39)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Inherited from [ApiBase](_base_.apibase.md).[storage](_base_.apibase.md#storage)*

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L40)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:78](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L78)*

**Returns:** `Hash`

___

# Methods

<a id="combine"></a>

## `<Protected>` combine

▸ **combine**<`T`,`R`>(observables: *`Array`<`Observable`<`any`>>*, mapfn?: *`MapFn`<`R`, `T`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[combine](_base_.apibase.md#combine)*

*Defined in [Base.ts:70](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L70)*

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

*Defined in [Queries.ts:76](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L76)*

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

*Defined in [Queries.ts:80](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:19](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L19)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Defined in [Queries.ts:23](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L23)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyproposaldeposits"></a>

##  democracyProposalDeposits

▸ **democracyProposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Defined in [Queries.ts:27](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="democracypublicproposals"></a>

##  democracyPublicProposals

▸ **democracyPublicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

*Defined in [Queries.ts:40](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L40)*

**Returns:** `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

___
<a id="democracyreferendumcount"></a>

##  democracyReferendumCount

▸ **democracyReferendumCount**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Defined in [Queries.ts:59](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L59)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyreferenduminfoof"></a>

##  democracyReferendumInfoOf

▸ **democracyReferendumInfoOf**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

*Defined in [Queries.ts:63](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

___
<a id="democracyvotingperiod"></a>

##  democracyVotingPeriod

▸ **democracyVotingPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:91](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L91)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:116](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L116)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<[RxFees](../modules/_types_d_.md#rxfees)>

*Defined in [Queries.ts:95](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L95)*

**Returns:** `Observable`<[RxFees](../modules/_types_d_.md#rxfees)>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Inherited from [ApiBase](_base_.apibase.md).[isConnected](_base_.apibase.md#isconnected)*

*Defined in [Base.ts:82](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L82)*

**Returns:** `Observable`<`boolean`>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawCall](_base_.apibase.md#rawcall)*

*Defined in [Base.ts:86](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L86)*

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

*Defined in [Base.ts:98](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L98)*

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

*Defined in [Base.ts:109](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Base.ts#L109)*

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

*Defined in [Queries.ts:128](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L128)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:132](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L132)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:136](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L136)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:140](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L140)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Defined in [Queries.ts:120](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L120)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:124](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L124)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:148](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L148)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:144](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L144)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingfreebalanceof"></a>

##  stakingFreeBalanceOf

▸ **stakingFreeBalanceOf**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:171](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L171)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:159](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L159)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Defined in [Queries.ts:186](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L186)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `AccountId` &#124; `undefined`>

___
<a id="stakingnominatorsfor"></a>

##  stakingNominatorsFor

▸ **stakingNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:175](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L175)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingreservedbalanceof"></a>

##  stakingReservedBalanceOf

▸ **stakingReservedBalanceOf**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:191](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L191)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="systemaccountindexof"></a>

##  systemAccountIndexOf

▸ **systemAccountIndexOf**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

*Defined in [Queries.ts:203](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L203)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Index` &#124; `undefined`>

___
<a id="timestampblockperiod"></a>

##  timestampBlockPeriod

▸ **timestampBlockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:195](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L195)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="timestampnow"></a>

##  timestampNow

▸ **timestampNow**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:199](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L199)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="validatorcount"></a>

##  validatorCount

▸ **validatorCount**(): `Observable`<`u32`>

*Defined in [Queries.ts:207](https://github.com/polkadot-js/api/blob/81348c6/packages/api-observable/src/Queries.ts#L207)*

**Returns:** `Observable`<`u32`>

___

