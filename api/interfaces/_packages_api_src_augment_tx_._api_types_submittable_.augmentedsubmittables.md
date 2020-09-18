[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/augment/tx"](../modules/_packages_api_src_augment_tx_.md) › ["api/types/submittable"](../modules/_packages_api_src_augment_tx_._api_types_submittable_.md) › [AugmentedSubmittables](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md)

# Interface: AugmentedSubmittables ‹**ApiType**›

## Type parameters

▪ **ApiType**

## Hierarchy

* **AugmentedSubmittables**

  ↳ [SubmittableExtrinsics](_packages_api_src_augment_tx_._api_types_submittable_.submittableextrinsics.md)

## Index

### Properties

* [authorship](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#authorship)
* [babe](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#babe)
* [balances](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#balances)
* [contracts](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#contracts)
* [council](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#council)
* [democracy](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#democracy)
* [elections](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#elections)
* [finalityTracker](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#finalitytracker)
* [grandpa](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#grandpa)
* [identity](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#identity)
* [imOnline](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#imonline)
* [indices](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#indices)
* [multisig](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#multisig)
* [proxy](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#proxy)
* [recovery](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#recovery)
* [scheduler](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#scheduler)
* [session](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#session)
* [society](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#society)
* [staking](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#staking)
* [sudo](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#sudo)
* [system](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#system)
* [technicalCommittee](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#technicalcommittee)
* [technicalMembership](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#technicalmembership)
* [timestamp](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#timestamp)
* [treasury](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#treasury)
* [utility](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#utility)
* [vesting](_packages_api_src_augment_tx_._api_types_submittable_.augmentedsubmittables.md#vesting)

## Properties

###  authorship

• **authorship**: *object*

*Defined in [packages/api/src/augment/tx.ts:29](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L29)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **setUncles**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  babe

• **babe**: *object*

*Defined in [packages/api/src/augment/tx.ts:36](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L36)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **reportEquivocation**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **reportEquivocationUnsigned**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  balances

• **balances**: *object*

*Defined in [packages/api/src/augment/tx.ts:57](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L57)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **forceTransfer**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setBalance**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **transfer**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **transferKeepAlive**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  contracts

• **contracts**: *object*

*Defined in [packages/api/src/augment/tx.ts:134](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L134)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **call**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **claimSurcharge**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **instantiate**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **putCode**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **updateSchedule**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  council

• **council**: *object*

*Defined in [packages/api/src/augment/tx.ts:179](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L179)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **close**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **disapproveProposal**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **execute**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **propose**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setMembers**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  democracy

• **democracy**: *object*

*Defined in [packages/api/src/augment/tx.ts:313](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L313)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **cancelQueued**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelReferendum**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **clearPublicProposals**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **delegate**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **emergencyCancel**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **enactProposal**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **externalPropose**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **externalProposeDefault**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **externalProposeMajority**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **fastTrack**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **noteImminentPreimage**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **noteImminentPreimageOperational**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **notePreimage**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **notePreimageOperational**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **propose**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **reapPreimage**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeOtherVote**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeVote**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **second**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **undelegate**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **unlock**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vetoExternal**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  elections

• **elections**: *object*

*Defined in [packages/api/src/augment/tx.ts:701](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L701)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **removeMember**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeVoter**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **renounceCandidacy**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **reportDefunctVoter**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **submitCandidacy**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  finalityTracker

• **finalityTracker**: *object*

*Defined in [packages/api/src/augment/tx.ts:864](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L864)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **finalHint**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  grandpa

• **grandpa**: *object*

*Defined in [packages/api/src/augment/tx.ts:872](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L872)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **noteStalled**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **reportEquivocation**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **reportEquivocationUnsigned**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  identity

• **identity**: *object*

*Defined in [packages/api/src/augment/tx.ts:904](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L904)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **addRegistrar**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **addSub**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelRequest**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **clearIdentity**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **killIdentity**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **provideJudgement**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **quitSub**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeSub**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **renameSub**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **requestJudgement**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setAccountId**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setFee**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setFields**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setIdentity**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setSubs**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  imOnline

• **imOnline**: *object*

*Defined in [packages/api/src/augment/tx.ts:1168](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L1168)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **heartbeat**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  indices

• **indices**: *object*

*Defined in [packages/api/src/augment/tx.ts:1184](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L1184)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **claim**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceTransfer**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **free**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **freeze**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **transfer**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  multisig

• **multisig**: *object*

*Defined in [packages/api/src/augment/tx.ts:1301](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L1301)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **approveAsMulti**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **asMulti**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **asMultiThreshold1**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelAsMulti**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  proxy

• **proxy**: *object*

*Defined in [packages/api/src/augment/tx.ts:1450](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L1450)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **addProxy**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **announce**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **anonymous**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **killAnonymous**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **proxy**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **proxyAnnounced**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **rejectAnnouncement**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeAnnouncement**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeProxies**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeProxy**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  recovery

• **recovery**: *object*

*Defined in [packages/api/src/augment/tx.ts:1643](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L1643)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **asRecovered**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelRecovered**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **claimRecovery**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **closeRecovery**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **createRecovery**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **initiateRecovery**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeRecovery**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setRecovered**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vouchRecovery**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  scheduler

• **scheduler**: *object*

*Defined in [packages/api/src/augment/tx.ts:1845](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L1845)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **cancel**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelNamed**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **schedule**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **scheduleAfter**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **scheduleNamed**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **scheduleNamedAfter**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  session

• **session**: *object*

*Defined in [packages/api/src/augment/tx.ts:1916](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L1916)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **purgeKeys**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setKeys**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  society

• **society**: *object*

*Defined in [packages/api/src/augment/tx.ts:1951](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L1951)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **bid**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **defenderVote**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **found**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **judgeSuspendedCandidate**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **judgeSuspendedMember**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **payout**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setMaxMembers**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **unbid**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **unfound**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **unvouch**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vouch**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  staking

• **staking**: *object*

*Defined in [packages/api/src/augment/tx.ts:2271](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L2271)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **bond**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **bondExtra**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **cancelDeferredSlash**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **chill**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceNewEra**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceNewEraAlways**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceNoEras**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **forceUnstake**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **increaseValidatorCount**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **nominate**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **payoutStakers**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **reapStash**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **rebond**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **scaleValidatorCount**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setController**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setHistoryDepth**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setInvulnerables**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setPayee**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setValidatorCount**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **submitElectionSolution**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **submitElectionSolutionUnsigned**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **unbond**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **validate**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **withdrawUnbonded**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  sudo

• **sudo**: *object*

*Defined in [packages/api/src/augment/tx.ts:2755](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L2755)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **setKey**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **sudo**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **sudoAs**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **sudoUncheckedWeight**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  system

• **system**: *object*

*Defined in [packages/api/src/augment/tx.ts:2810](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L2810)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **fillBlock**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **killPrefix**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **killStorage**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **remark**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setChangesTrieConfig**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setCode**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setCodeWithoutChecks**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setHeapPages**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setStorage**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **suicide**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  technicalCommittee

• **technicalCommittee**: *object*

*Defined in [packages/api/src/augment/tx.ts:2924](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L2924)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **close**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **disapproveProposal**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **execute**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **propose**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setMembers**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vote**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  technicalMembership

• **technicalMembership**: *object*

*Defined in [packages/api/src/augment/tx.ts:3058](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L3058)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **addMember**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **changeKey**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **clearPrime**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **removeMember**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **resetMembers**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **setPrime**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **swapMember**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  timestamp

• **timestamp**: *object*

*Defined in [packages/api/src/augment/tx.ts:3108](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L3108)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **set**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  treasury

• **treasury**: *object*

*Defined in [packages/api/src/augment/tx.ts:3129](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L3129)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **approveProposal**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **closeTip**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **proposeSpend**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **rejectProposal**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **reportAwesome**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **retractTip**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **tip**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **tipNew**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  utility

• **utility**: *object*

*Defined in [packages/api/src/augment/tx.ts:3286](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L3286)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **asDerivative**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **batch**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

___

###  vesting

• **vesting**: *object*

*Defined in [packages/api/src/augment/tx.ts:3328](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/api/src/augment/tx.ts#L3328)*

#### Type declaration:

* \[ **key**: *string*\]: [SubmittableExtrinsicFunction](_packages_api_src_types_submittable_.submittableextrinsicfunction.md)‹ApiType›

* **forceVestedTransfer**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vest**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vestOther**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*

* **vestedTransfer**: *[AugmentedSubmittable](../modules/_packages_api_src_types_submittable_.md#augmentedsubmittable)‹function›*
