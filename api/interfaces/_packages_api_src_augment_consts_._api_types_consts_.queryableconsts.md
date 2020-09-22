[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/augment/consts"](../modules/_packages_api_src_augment_consts_.md) › ["api/types/consts"](../modules/_packages_api_src_augment_consts_._api_types_consts_.md) › [QueryableConsts](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md)

# Interface: QueryableConsts ‹**ApiType**›

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes)*

## Hierarchy

* [AugmentedConsts](_packages_api_src_types_consts_.augmentedconsts.md)‹ApiType›

  ↳ **QueryableConsts**

## Indexable

* \[ **key**: *string*\]: [QueryableModuleConsts](_packages_api_src_types_consts_.queryablemoduleconsts.md)

## Index

### Properties

* [babe](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#babe)
* [balances](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#balances)
* [contracts](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#contracts)
* [democracy](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#democracy)
* [elections](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#elections)
* [finalityTracker](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#finalitytracker)
* [identity](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#identity)
* [indices](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#indices)
* [multisig](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#multisig)
* [proxy](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#proxy)
* [recovery](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#recovery)
* [society](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#society)
* [staking](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#staking)
* [system](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#system)
* [timestamp](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#timestamp)
* [transactionPayment](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#transactionpayment)
* [treasury](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#treasury)
* [vesting](_packages_api_src_augment_consts_._api_types_consts_.queryableconsts.md#vesting)

## Properties

###  babe

• **babe**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[babe](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#babe)*

*Defined in [packages/api/src/augment/consts.ts:15](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L15)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **epochDuration**: *u64 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **expectedBlockTime**: *Moment & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  balances

• **balances**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[balances](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#balances)*

*Defined in [packages/api/src/augment/consts.ts:31](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L31)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **existentialDeposit**: *Balance & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  contracts

• **contracts**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[contracts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#contracts)*

*Defined in [packages/api/src/augment/consts.ts:38](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L38)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **maxDepth**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxValueSize**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **rentByteFee**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **rentDepositOffset**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **signedClaimHandicap**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **storageSizeOffset**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **surchargeReward**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tombstoneDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  democracy

• **democracy**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[democracy](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#democracy)*

*Defined in [packages/api/src/augment/consts.ts:89](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L89)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **cooloffPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **enactmentPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **fastTrackVotingPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **launchPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxVotes**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **minimumDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **preimageByteDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **votingPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  elections

• **elections**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[elections](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#elections)*

*Defined in [packages/api/src/augment/consts.ts:128](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L128)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **candidacyBond**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **desiredMembers**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **desiredRunnersUp**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **moduleId**: *LockIdentifier & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **termDuration**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **votingBond**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  finalityTracker

• **finalityTracker**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[finalityTracker](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#finalitytracker)*

*Defined in [packages/api/src/augment/consts.ts:137](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L137)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **reportLatency**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **windowSize**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  identity

• **identity**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[identity](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#identity)*

*Defined in [packages/api/src/augment/consts.ts:148](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L148)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **basicDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **fieldDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxAdditionalFields**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxRegistrars**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxSubAccounts**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **subAccountDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  indices

• **indices**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[indices](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#indices)*

*Defined in [packages/api/src/augment/consts.ts:179](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L179)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **deposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  multisig

• **multisig**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[multisig](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#multisig)*

*Defined in [packages/api/src/augment/consts.ts:186](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L186)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **depositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **depositFactor**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxSignatories**: *u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  proxy

• **proxy**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[proxy](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#proxy)*

*Defined in [packages/api/src/augment/consts.ts:202](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L202)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **announcementDepositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **announcementDepositFactor**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxPending**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxProxies**: *u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **proxyDepositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **proxyDepositFactor**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  recovery

• **recovery**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[recovery](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#recovery)*

*Defined in [packages/api/src/augment/consts.ts:229](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L229)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **configDepositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **friendDepositFactor**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxFriends**: *u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **recoveryDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  society

• **society**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[society](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#society)*

*Defined in [packages/api/src/augment/consts.ts:248](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L248)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **candidateDeposit**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **challengePeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxStrikes**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **moduleId**: *ModuleId & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **periodSpend**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **rotationPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **wrongSideDeduction**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  staking

• **staking**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[staking](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#staking)*

*Defined in [packages/api/src/augment/consts.ts:281](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L281)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **bondingDuration**: *EraIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **electionLookahead**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxIterations**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maxNominatorRewardedPerValidator**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **minSolutionScoreBump**: *Perbill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **sessionsPerEra**: *SessionIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **slashDeferDuration**: *EraIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  system

• **system**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[system](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#system)*

*Defined in [packages/api/src/augment/consts.ts:327](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L327)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **blockExecutionWeight**: *Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **blockHashCount**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **dbWeight**: *RuntimeDbWeight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **extrinsicBaseWeight**: *Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maximumBlockLength**: *u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **maximumBlockWeight**: *Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  timestamp

• **timestamp**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[timestamp](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#timestamp)*

*Defined in [packages/api/src/augment/consts.ts:354](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L354)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **minimumPeriod**: *Moment & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  transactionPayment

• **transactionPayment**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[transactionPayment](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#transactionpayment)*

*Defined in [packages/api/src/augment/consts.ts:364](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L364)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **transactionByteFee**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **weightToFee**: *Vec‹WeightToFeeCoefficient› & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  treasury

• **treasury**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[treasury](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#treasury)*

*Defined in [packages/api/src/augment/consts.ts:375](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L375)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **burn**: *Permill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **moduleId**: *ModuleId & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **proposalBond**: *Permill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **proposalBondMinimum**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **spendPeriod**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tipCountdown**: *BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tipFindersFee**: *Percent & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tipReportDepositBase**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

* **tipReportDepositPerByte**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*

___

###  vesting

• **vesting**: *object*

*Inherited from [AugmentedConsts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md).[vesting](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#vesting)*

*Defined in [packages/api/src/augment/consts.ts:415](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api/src/augment/consts.ts#L415)*

#### Type declaration:

* \[ **key**: *string*\]: Codec

* **minVestedTransfer**: *BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)‹ApiType›*
