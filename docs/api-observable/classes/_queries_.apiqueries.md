

# Hierarchy

 [ApiBase](_base_.apibase.md)

**↳ ApiQueries**

↳  [ApiCalls](_calls_.apicalls.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ApiQueries**(api: *`RpcRxInterface`*): [ApiQueries](_queries_.apiqueries.md)

*Inherited from [ApiBase](_base_.apibase.md).[constructor](_base_.apibase.md#constructor)*

*Defined in [Base.ts:32](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L32)*

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

*Defined in [Base.ts:32](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L32)*

___
<a id="extrinsics"></a>

## `<Static>` extrinsics

**● extrinsics**: *`Extrinsics`* =  extrinsicsStatic

*Inherited from [ApiBase](_base_.apibase.md).[extrinsics](_base_.apibase.md#extrinsics)*

*Defined in [Base.ts:40](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L40)*

___
<a id="storage"></a>

## `<Static>` storage

**● storage**: *`Storage`* =  storageStatic

*Inherited from [ApiBase](_base_.apibase.md).[storage](_base_.apibase.md#storage)*

*Defined in [Base.ts:41](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L41)*

___

# Accessors

<a id="genesishash"></a>

##  genesisHash

getgenesisHash(): `Hash`

*Inherited from [ApiBase](_base_.apibase.md).[genesisHash](_base_.apibase.md#genesishash)*

*Defined in [Base.ts:85](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L85)*

**Returns:** `Hash`

___

# Methods

<a id="accountnonce"></a>

##  accountNonce

▸ **accountNonce**(address: * `AccountId` &#124; `string`*): `Observable`< `Index` &#124; `undefined`>

*Defined in [Queries.ts:23](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Index` &#124; `undefined`>

___
<a id="balancefree"></a>

##  balanceFree

▸ **balanceFree**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:27](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="balancereserved"></a>

##  balanceReserved

▸ **balanceReserved**(address: * `AccountId` &#124; `string`*): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:31](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="blocknow"></a>

##  blockNow

▸ **blockNow**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:39](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L39)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="blockperiod"></a>

##  blockPeriod

▸ **blockPeriod**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:35](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L35)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="democracylaunchperiod"></a>

##  democracyLaunchPeriod

▸ **democracyLaunchPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:43](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L43)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="democracynexttally"></a>

##  democracyNextTally

▸ **democracyNextTally**(): `Observable`< `ReferendumIndex` &#124; `undefined`>

*Defined in [Queries.ts:47](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L47)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="democracyvotingperiod"></a>

##  democracyVotingPeriod

▸ **democracyVotingPeriod**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:129](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L129)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="eralastlengthchange"></a>

##  eraLastLengthChange

▸ **eraLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:154](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L154)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="fees"></a>

##  fees

▸ **fees**(): `Observable`<`RxFees`>

*Defined in [Queries.ts:133](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L133)*

**Returns:** `Observable`<`RxFees`>

___
<a id="getaccountenumset"></a>

##  getAccountEnumSet

▸ **getAccountEnumSet**(_index: * `AccountIndex` &#124; `BN` &#124; `number`*): `Observable`< `Array`<`AccountId`> &#124; `undefined`>

*Defined in [Queries.ts:51](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| _index |  `AccountIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< `Array`<`AccountId`> &#124; `undefined`>

___
<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `Observable`<`boolean`>

*Inherited from [ApiBase](_base_.apibase.md).[isConnected](_base_.apibase.md#isconnected)*

*Defined in [Base.ts:89](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L89)*

**Returns:** `Observable`<`boolean`>

___
<a id="nextaccountenumset"></a>

##  nextAccountEnumSet

▸ **nextAccountEnumSet**(): `Observable`< `AccountIndex` &#124; `undefined`>

*Defined in [Queries.ts:59](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L59)*

**Returns:** `Observable`< `AccountIndex` &#124; `undefined`>

___
<a id="proposaldeposits"></a>

##  proposalDeposits

▸ **proposalDeposits**(proposalId: * `PropIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

*Defined in [Queries.ts:63](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| proposalId |  `PropIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxProposalDeposits](_classes_.rxproposaldeposits.md) &#124; `undefined`>

___
<a id="publicproposals"></a>

##  publicProposals

▸ **publicProposals**(): `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

*Defined in [Queries.ts:76](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L76)*

**Returns:** `Observable`<`Array`<[RxProposal](_classes_.rxproposal.md)>>

___
<a id="rawcall"></a>

##  rawCall

▸ **rawCall**<`T`>(__namedParameters: *`object`*, ...params: *`Array`<`any`>*): `Observable`<`T`>

*Inherited from [ApiBase](_base_.apibase.md).[rawCall](_base_.apibase.md#rawcall)*

*Defined in [Base.ts:93](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L93)*

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

*Defined in [Base.ts:106](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L106)*

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

*Defined in [Base.ts:119](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Base.ts#L119)*

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

*Defined in [Queries.ts:95](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L95)*

**Returns:** `Observable`< `ReferendumIndex` &#124; `undefined`>

___
<a id="referenduminfo"></a>

##  referendumInfo

▸ **referendumInfo**(referendumId: * `ReferendumIndex` &#124; `BN` &#124; `number`*): `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

*Defined in [Queries.ts:99](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L99)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| referendumId |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`< [RxReferendum](_classes_.rxreferendum.md) &#124; `undefined`>

___
<a id="referendumvote"></a>

##  referendumVote

▸ **referendumVote**(index: * `ReferendumIndex` &#124; `BN` &#124; `number`*, address: * `AccountId` &#124; `string`*): `Observable`< `Bool` &#124; `undefined`>

*Defined in [Queries.ts:112](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L112)*

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

*Defined in [Queries.ts:116](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L116)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessioncurrentindex"></a>

##  sessionCurrentIndex

▸ **sessionCurrentIndex**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:166](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L166)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessioncurrentstart"></a>

##  sessionCurrentStart

▸ **sessionCurrentStart**(): `Observable`< `Moment` &#124; `undefined`>

*Defined in [Queries.ts:170](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L170)*

**Returns:** `Observable`< `Moment` &#124; `undefined`>

___
<a id="sessionlastlengthchange"></a>

##  sessionLastLengthChange

▸ **sessionLastLengthChange**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:174](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L174)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionlength"></a>

##  sessionLength

▸ **sessionLength**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:178](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L178)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="sessionreward"></a>

##  sessionReward

▸ **sessionReward**(): `Observable`< `Perbill` &#124; `undefined`>

*Defined in [Queries.ts:158](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L158)*

**Returns:** `Observable`< `Perbill` &#124; `undefined`>

___
<a id="sessionrewardcurrent"></a>

##  sessionRewardCurrent

▸ **sessionRewardCurrent**(): `Observable`< `Balance` &#124; `undefined`>

*Defined in [Queries.ts:162](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L162)*

**Returns:** `Observable`< `Balance` &#124; `undefined`>

___
<a id="sessionvalidators"></a>

##  sessionValidators

▸ **sessionValidators**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:186](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L186)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="sessionsperera"></a>

##  sessionsPerEra

▸ **sessionsPerEra**(): `Observable`< `BlockNumber` &#124; `undefined`>

*Defined in [Queries.ts:182](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L182)*

**Returns:** `Observable`< `BlockNumber` &#124; `undefined`>

___
<a id="stakingintentions"></a>

##  stakingIntentions

▸ **stakingIntentions**(): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:199](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L199)*

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="stakingnominating"></a>

##  stakingNominating

▸ **stakingNominating**(address: * `AccountId` &#124; `string`*): `Observable`< `AccountId` &#124; `undefined`>

*Defined in [Queries.ts:225](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L225)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`< `AccountId` &#124; `undefined`>

___
<a id="stakingnominatorsfor"></a>

##  stakingNominatorsFor

▸ **stakingNominatorsFor**(address: * `AccountId` &#124; `string`*): `Observable`<`Array`<`AccountId`>>

*Defined in [Queries.ts:212](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L212)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| address |  `AccountId` &#124; `string`|

**Returns:** `Observable`<`Array`<`AccountId`>>

___
<a id="validatorcount"></a>

##  validatorCount

▸ **validatorCount**(): `Observable`< `u32` &#124; `undefined`>

*Defined in [Queries.ts:229](https://github.com/polkadot-js/api/blob/8f35b76/packages/api-observable/src/Queries.ts#L229)*

**Returns:** `Observable`< `u32` &#124; `undefined`>

___

