

# Hierarchy

 [ApiBase](_base_.apibase.md)

**↳ ApiQueries**

↳  [ApiCalls](_calls_.apicalls.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiQueries**(api: *`RpcRxInterface`*): [ApiQueries](_queries_.apiqueries.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L33)*

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

*Defined in [Base.ts:33](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L33)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`ModulesWithMethods`* =  extrinsicsStatic

*Inherited from [ApiBase](_base_.apibase.md).[extrinsics](_base_.apibase.md#extrinsics)*

*Defined in [Base.ts:41](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L41)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Inherited from [ApiBase](_base_.apibase.md).[storage](_base_.apibase.md#storage)*

*Defined in [Base.ts:42](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L42)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:87](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L87)*

**Returns:** `Hash`

___

# Methods

<a id="accountnonce"></a>

##  accountNonce

▸ **accountNonce**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

*Defined in [Queries.ts:18](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Index` &#124; `undefined`>

___
<a id="balancefree"></a>

##  balanceFree

▸ **balanceFree**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:22](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="balancereserved"></a>

##  balanceReserved

▸ **balanceReserved**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:26](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="blocknow"></a>

##  blockNow

▸ **blockNow**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:34](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L34)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="blockperiod"></a>

##  blockPeriod

▸ **blockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:30](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L30)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:38](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L38)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Defined in [Queries.ts:42](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L42)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyvotingperiod"></a>

##  democracyVotingPeriod

▸ **democracyVotingPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:125](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L125)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:150](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L150)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<[RxFees](../modules/_types_.md#rxfees)>

*Defined in [Queries.ts:129](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L129)*

**Returns:** `Observable`<[RxFees](../modules/_types_.md#rxfees)>

___
<a id="getaccountenumset"></a>

##  getAccountEnumSet

▸ **getAccountEnumSet**(index: * `AccountIndex` &#124; `BN` &#124; `number`*): `Observable`< `Array`<`AccountId`> &#124; `undefined`>

*Defined in [Queries.ts:46](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L46)*

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

*Defined in [Base.ts:91](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L91)*

**Returns:** `Observable`<`boolean`>

___
<a id="nextaccountenumset"></a>

##  nextAccountEnumSet

▸ **nextAccountEnumSet**(): `Observable`< `AccountIndex` &#124; `undefined`>

*Defined in [Queries.ts:57](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L57)*

**Returns:** `Observable`< `AccountIndex` &#124; `undefined`>

___
<a id="proposaldeposits"></a>

##  proposalDeposits

▸ **proposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Defined in [Queries.ts:61](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="publicproposals"></a>

##  publicProposals

▸ **publicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

*Defined in [Queries.ts:74](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L74)*

**Returns:** `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawCall](_base_.apibase.md#rawcall)*

*Defined in [Base.ts:95](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L95)*

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

*Defined in [Base.ts:108](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L108)*

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

*Defined in [Base.ts:123](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Base.ts#L123)*

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

*Defined in [Queries.ts:93](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L93)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="referenduminfo"></a>

##  referendumInfo

▸ **referendumInfo**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< `ReferendumInfo` &#124; `undefined`>

*Defined in [Queries.ts:97](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L97)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< `ReferendumInfo` &#124; `undefined`>

___
<a id="referendumvote"></a>

##  referendumVote

▸ **referendumVote**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, address: * `AccountId` &#124; `string`*): `Observable`< `Bool` &#124; `undefined`>

*Defined in [Queries.ts:110](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L110)*

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

*Defined in [Queries.ts:114](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessioncurrentindex"></a>

##  sessionCurrentIndex

▸ **sessionCurrentIndex**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:162](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L162)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:166](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L166)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:170](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L170)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:174](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L174)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Defined in [Queries.ts:154](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L154)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:158](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L158)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:182](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L182)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:178](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L178)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:193](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L193)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Defined in [Queries.ts:215](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L215)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `AccountId` &#124; `undefined`>

___
<a id="stakingnominatorsfor"></a>

##  stakingNominatorsFor

▸ **stakingNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:204](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L204)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="systemevents"></a>

##  systemEvents

▸ **systemEvents**(): `Observable`<`Array`<`EventRecord`>>

*Defined in [Queries.ts:219](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L219)*

**Returns:** `Observable`<`Array`<`EventRecord`>>

___
<a id="validatorcount"></a>

##  validatorCount

▸ **validatorCount**(): `Observable`< `u32` &#124; `undefined`>

*Defined in [Queries.ts:230](https://github.com/polkadot-js/api/blob/e182769/packages/api-observable/src/Queries.ts#L230)*

**Returns:** `Observable`< `u32` &#124; `undefined`>

___

