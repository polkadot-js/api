

# Hierarchy

 [ApiBase](_base_.apibase.md)

**↳ ApiQueries**

↳  [ApiCalls](_calls_.apicalls.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiQueries**(api: *`RpcRxInterface`*): [ApiQueries](_queries_.apiqueries.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `RpcRxInterface` |

**Returns:** [ApiQueries](_queries_.apiqueries.md)

___

# Properties

<a id="whenready"></a>

##  whenReady

**● whenReady**: *`Observable`<`boolean`>*

*Inherited from [ApiBase](_base_.apibase.md).[whenReady](_base_.apibase.md#whenready)*

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L33)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Inherited from [ApiBase](_base_.apibase.md).[extrinsics](_base_.apibase.md#extrinsics)*

*Defined in [Base.ts:41](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L41)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Inherited from [ApiBase](_base_.apibase.md).[storage](_base_.apibase.md#storage)*

*Defined in [Base.ts:42](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L42)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:87](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L87)*

**Returns:** `Hash`

___

# Methods

<a id="accountnonce"></a>

##  accountNonce

▸ **accountNonce**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

*Defined in [Queries.ts:19](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Index` &#124; `undefined`>

___
<a id="balancefree"></a>

##  balanceFree

▸ **balanceFree**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:23](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="balancereserved"></a>

##  balanceReserved

▸ **balanceReserved**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:27](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="blocknow"></a>

##  blockNow

▸ **blockNow**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:35](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L35)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="blockperiod"></a>

##  blockPeriod

▸ **blockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:31](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L31)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:39](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L39)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Defined in [Queries.ts:43](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L43)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyvotingperiod"></a>

##  democracyVotingPeriod

▸ **democracyVotingPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:126](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L126)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:151](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L151)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<[RxFees](../modules/_types_.md#rxfees)>

*Defined in [Queries.ts:130](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L130)*

**Returns:** `Observable`<[RxFees](../modules/_types_.md#rxfees)>

___
<a id="getaccountenumset"></a>

##  getAccountEnumSet

▸ **getAccountEnumSet**(index: * `AccountIndex` &#124; `BN` &#124; `number`*): `Observable`< `Array`<`AccountId`> &#124; `undefined`>

*Defined in [Queries.ts:47](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index |  `AccountIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< `Array`<`AccountId`> &#124; `undefined`>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Inherited from [ApiBase](_base_.apibase.md).[isConnected](_base_.apibase.md#isconnected)*

*Defined in [Base.ts:91](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L91)*

**Returns:** `Observable`<`boolean`>

___
<a id="nextaccountenumset"></a>

##  nextAccountEnumSet

▸ **nextAccountEnumSet**(): `Observable`< `AccountIndex` &#124; `undefined`>

*Defined in [Queries.ts:58](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L58)*

**Returns:** `Observable`< `AccountIndex` &#124; `undefined`>

___
<a id="proposaldeposits"></a>

##  proposalDeposits

▸ **proposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Defined in [Queries.ts:62](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="publicproposals"></a>

##  publicProposals

▸ **publicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

*Defined in [Queries.ts:75](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L75)*

**Returns:** `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawCall](_base_.apibase.md#rawcall)*

*Defined in [Base.ts:95](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L95)*

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

*Defined in [Base.ts:108](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L108)*

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

*Defined in [Base.ts:123](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Base.ts#L123)*

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

*Defined in [Queries.ts:94](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L94)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="referenduminfo"></a>

##  referendumInfo

▸ **referendumInfo**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

*Defined in [Queries.ts:98](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

___
<a id="referendumvote"></a>

##  referendumVote

▸ **referendumVote**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, address: * `AccountId` &#124; `string`*): `Observable`< `Bool` &#124; `undefined`>

*Defined in [Queries.ts:111](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L111)*

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

*Defined in [Queries.ts:115](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L115)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessioncurrentindex"></a>

##  sessionCurrentIndex

▸ **sessionCurrentIndex**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:163](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L163)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:167](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L167)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:171](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L171)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:175](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L175)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Defined in [Queries.ts:155](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L155)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:159](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L159)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:183](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L183)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:179](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L179)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:194](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L194)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Defined in [Queries.ts:216](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L216)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `AccountId` &#124; `undefined`>

___
<a id="stakingnominatorsfor"></a>

##  stakingNominatorsFor

▸ **stakingNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:205](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L205)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="systemevents"></a>

##  systemEvents

▸ **systemEvents**(): `Observable`<`Array`<`EventRecord`>>

*Defined in [Queries.ts:220](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L220)*

**Returns:** `Observable`<`Array`<`EventRecord`>>

___
<a id="validatorcount"></a>

##  validatorCount

▸ **validatorCount**(): `Observable`< `u32` &#124; `undefined`>

*Defined in [Queries.ts:231](https://github.com/polkadot-js/api/blob/4291a49/packages/api-observable/src/Queries.ts#L231)*

**Returns:** `Observable`< `u32` &#124; `undefined`>

___

