[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/augment/query"](../modules/_packages_api_src_augment_query_.md) › ["api/types/storage"](../modules/_packages_api_src_augment_query_._api_types_storage_.md) › [QueryableStorage](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md)

# Interface: QueryableStorage ‹**ApiType**›

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes)*

## Hierarchy

* [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md)‹ApiType›

  ↳ **QueryableStorage**

## Indexable

* \[ **key**: *string*\]: [QueryableModuleStorage](_packages_api_src_types_storage_.queryablemodulestorage.md)‹ApiType›

## Index

### Properties

* [authorship](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#authorship)
* [babe](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#babe)
* [balances](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#balances)
* [contracts](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#contracts)
* [council](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#council)
* [democracy](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#democracy)
* [elections](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#elections)
* [grandpa](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#grandpa)
* [identity](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#identity)
* [imOnline](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#imonline)
* [indices](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#indices)
* [multisig](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#multisig)
* [offences](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#offences)
* [proxy](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#proxy)
* [randomnessCollectiveFlip](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#randomnesscollectiveflip)
* [recovery](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#recovery)
* [scheduler](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#scheduler)
* [session](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#session)
* [society](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#society)
* [staking](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#staking)
* [sudo](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#sudo)
* [system](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#system)
* [technicalCommittee](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#technicalcommittee)
* [technicalMembership](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#technicalmembership)
* [timestamp](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#timestamp)
* [transactionPayment](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#transactionpayment)
* [treasury](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#treasury)
* [vesting](_packages_api_src_augment_query_._api_types_storage_.queryablestorage.md#vesting)

## Properties

###  authorship

• **authorship**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[authorship](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#authorship)*

*Defined in [packages/api/src/augment/query.ts:35](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L35)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **author**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **didSetUncles**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **uncles**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  babe

• **babe**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[babe](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#babe)*

*Defined in [packages/api/src/augment/query.ts:50](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L50)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **authorities**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentSlot**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **epochIndex**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **genesisSlot**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **initialized**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lateness**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextEpochConfig**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextRandomness**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **randomness**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **segmentIndex**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **underConstruction**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  balances

• **balances**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[balances](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#balances)*

*Defined in [packages/api/src/augment/query.ts:120](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L120)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **account**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **locks**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **totalIssuance**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  contracts

• **contracts**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[contracts](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#contracts)*

*Defined in [packages/api/src/augment/query.ts:144](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L144)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **accountCounter**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **codeStorage**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **contractInfoOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentSchedule**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pristineCode**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  council

• **council**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[council](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#council)*

*Defined in [packages/api/src/augment/query.ts:169](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L169)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **prime**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  democracy

• **democracy**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[democracy](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#democracy)*

*Defined in [packages/api/src/augment/query.ts:197](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L197)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **blacklist**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **cancellations**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **depositOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lastTabledWasExternal**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **locks**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lowestUnbaked**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextExternal**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **preimages**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **publicPropCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **publicProps**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **referendumCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **referendumInfoOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **votingOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  elections

• **elections**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[elections](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#elections)*

*Defined in [packages/api/src/augment/query.ts:275](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L275)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **candidates**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **electionRounds**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **members**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **runnersUp**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  grandpa

• **grandpa**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[grandpa](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#grandpa)*

*Defined in [packages/api/src/augment/query.ts:301](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L301)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **currentSetId**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextForced**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pendingChange**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **setIdSession**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **stalled**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **state**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  identity

• **identity**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[identity](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#identity)*

*Defined in [packages/api/src/augment/query.ts:332](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L332)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **identityOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **registrars**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **subsOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **superOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  imOnline

• **imOnline**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[imOnline](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#imonline)*

*Defined in [packages/api/src/augment/query.ts:361](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L361)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **authoredBlocks**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **heartbeatAfter**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **keys**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **receivedHeartbeats**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  indices

• **indices**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[indices](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#indices)*

*Defined in [packages/api/src/augment/query.ts:387](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L387)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **accounts**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  multisig

• **multisig**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[multisig](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#multisig)*

*Defined in [packages/api/src/augment/query.ts:394](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L394)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **calls**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **multisigs**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  offences

• **offences**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[offences](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#offences)*

*Defined in [packages/api/src/augment/query.ts:402](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L402)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **concurrentReportsIndex**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **deferredOffences**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reports**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reportsByKindIndex**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  proxy

• **proxy**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[proxy](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#proxy)*

*Defined in [packages/api/src/augment/query.ts:427](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L427)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **announcements**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proxies**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  randomnessCollectiveFlip

• **randomnessCollectiveFlip**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[randomnessCollectiveFlip](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#randomnesscollectiveflip)*

*Defined in [packages/api/src/augment/query.ts:439](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L439)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **randomMaterial**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  recovery

• **recovery**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[recovery](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#recovery)*

*Defined in [packages/api/src/augment/query.ts:448](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L448)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **activeRecoveries**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proxy**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **recoverable**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  scheduler

• **scheduler**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[scheduler](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#scheduler)*

*Defined in [packages/api/src/augment/query.ts:468](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L468)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **agenda**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lookup**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  session

• **session**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[session](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#session)*

*Defined in [packages/api/src/augment/query.ts:485](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L485)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **currentIndex**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **disabledValidators**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **keyOwner**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nextKeys**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedChanged**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedKeys**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validators**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  society

• **society**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[society](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#society)*

*Defined in [packages/api/src/augment/query.ts:520](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L520)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **bids**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **candidates**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **defender**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **defenderVotes**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **founder**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **head**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **maxMembers**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **members**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **payouts**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **pot**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **rules**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **strikes**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **suspendedCandidates**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **suspendedMembers**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **votes**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **vouching**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  staking

• **staking**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[staking](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#staking)*

*Defined in [packages/api/src/augment/query.ts:588](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L588)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **activeEra**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **bonded**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **bondedEras**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **canceledSlashPayout**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **currentEra**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **earliestUnappliedSlash**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **eraElectionStatus**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasRewardPoints**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasStakers**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasStakersClipped**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasStartSessionIndex**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasTotalStake**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasValidatorPrefs**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **erasValidatorReward**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **forceEra**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **historyDepth**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **invulnerables**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **isCurrentSessionFinal**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **ledger**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **minimumValidatorCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nominatorSlashInEra**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **nominators**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **payee**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedElected**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **queuedScore**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **slashRewardFraction**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **slashingSpans**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **snapshotNominators**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **snapshotValidators**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **spanSlash**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **unappliedSlashes**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validatorCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validatorSlashInEra**: *[AugmentedQueryDoubleMap](../modules/_packages_api_src_types_storage_.md#augmentedquerydoublemap)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **validators**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  sudo

• **sudo**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[sudo](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#sudo)*

*Defined in [packages/api/src/augment/query.ts:785](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L785)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **key**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  system

• **system**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[system](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#system)*

*Defined in [packages/api/src/augment/query.ts:792](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L792)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **account**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **allExtrinsicsLen**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **blockHash**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **blockWeight**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **digest**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **eventCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **eventTopics**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **events**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **executionPhase**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicData**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **extrinsicsRoot**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **lastRuntimeUpgrade**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **number**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **parentHash**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  technicalCommittee

• **technicalCommittee**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[technicalCommittee](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#technicalcommittee)*

*Defined in [packages/api/src/augment/query.ts:864](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L864)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **prime**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalOf**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **voting**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  technicalMembership

• **technicalMembership**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[technicalMembership](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#technicalmembership)*

*Defined in [packages/api/src/augment/query.ts:892](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L892)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **members**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **prime**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  timestamp

• **timestamp**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[timestamp](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#timestamp)*

*Defined in [packages/api/src/augment/query.ts:903](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L903)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **didUpdate**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **now**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  transactionPayment

• **transactionPayment**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[transactionPayment](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#transactionpayment)*

*Defined in [packages/api/src/augment/query.ts:914](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L914)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **nextFeeMultiplier**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **storageVersion**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  treasury

• **treasury**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[treasury](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#treasury)*

*Defined in [packages/api/src/augment/query.ts:919](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L919)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **approvals**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposalCount**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **proposals**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **reasons**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

* **tips**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*

___

###  vesting

• **vesting**: *object*

*Inherited from [AugmentedQueries](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md).[vesting](_packages_api_src_augment_query_._api_types_storage_.augmentedqueries.md#vesting)*

*Defined in [packages/api/src/augment/query.ts:945](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api/src/augment/query.ts#L945)*

#### Type declaration:

* \[ **key**: *string*\]: [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›

* **vesting**: *[AugmentedQuery](../modules/_packages_api_src_types_storage_.md#augmentedquery)‹ApiType, function› & [QueryableStorageEntry](../modules/_packages_api_src_types_storage_.md#queryablestorageentry)‹ApiType›*
