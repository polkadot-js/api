

# Hierarchy

 [ApiBase](_base_.apibase.md)

**↳ ApiQueries**

↳  [ApiCalls](_calls_.apicalls.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiQueries**(api: *`RpcRxInterface`*): [ApiQueries](_queries_.apiqueries.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:31](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Base.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `RpcRxInterface` |

**Returns:** [ApiQueries](_queries_.apiqueries.md)

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

<a id="accountnonce"></a>

##  accountNonce

▸ **accountNonce**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

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

*Defined in [Queries.ts:29](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="blocknow"></a>

##  blockNow

▸ **blockNow**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:37](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L37)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="blockperiod"></a>

##  blockPeriod

▸ **blockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:33](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L33)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:41](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L41)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Defined in [Queries.ts:45](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L45)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyvotingperiod"></a>

##  democracyVotingPeriod

▸ **democracyVotingPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:135](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L135)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:160](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L160)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<`RxFees`>

*Defined in [Queries.ts:139](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L139)*

**Returns:** `Observable`<`RxFees`>

___
<a id="getaccountenumset"></a>

##  getAccountEnumSet

▸ **getAccountEnumSet**(index: * `AccountIndex` &#124; `BN` &#124; `number`*): `Observable`< `Array`<`AccountId`> &#124; `undefined`>

*Defined in [Queries.ts:49](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `AccountIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< `Array`<`AccountId`> &#124; `undefined`>

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

*Defined in [Queries.ts:63](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L63)*

**Returns:** `Observable`< `AccountIndex` &#124; `undefined`>

___
<a id="proposaldeposits"></a>

##  proposalDeposits

▸ **proposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Defined in [Queries.ts:67](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="publicproposals"></a>

##  publicProposals

▸ **publicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

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

*Defined in [Queries.ts:100](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L100)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="referenduminfo"></a>

##  referendumInfo

▸ **referendumInfo**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

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

*Defined in [Queries.ts:121](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L121)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessioncurrentindex"></a>

##  sessionCurrentIndex

▸ **sessionCurrentIndex**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:172](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L172)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:176](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L176)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:180](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L180)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:184](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L184)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Defined in [Queries.ts:164](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L164)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:168](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L168)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:192](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L192)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:188](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L188)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:206](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L206)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

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

*Defined in [Queries.ts:220](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L220)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="validatorcount"></a>

##  validatorCount

▸ **validatorCount**(): `Observable`< `u32` &#124; `undefined`>

*Defined in [Queries.ts:238](https://github.com/polkadot-js/api/blob/b1e13b2/packages/api-observable/src/Queries.ts#L238)*

**Returns:** `Observable`< `u32` &#124; `undefined`>

___

