**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api/src/augment/consts"](../modules/_packages_api_src_augment_consts_.md) / ["api/types/consts"](../modules/_packages_api_src_augment_consts_._api_types_consts_.md) / AugmentedConsts

# Interface: AugmentedConsts\<**ApiType**>

## Type parameters

* ApiType

## Hierarchy

* **AugmentedConsts**

## Index

### Properties

* [babe](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#babe)
* [balances](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#balances)
* [contracts](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#contracts)
* [democracy](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#democracy)
* [elections](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#elections)
* [finalityTracker](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#finalitytracker)
* [identity](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#identity)
* [indices](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#indices)
* [multisig](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#multisig)
* [proxy](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#proxy)
* [recovery](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#recovery)
* [society](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#society)
* [staking](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#staking)
* [system](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#system)
* [timestamp](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#timestamp)
* [transactionPayment](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#transactionpayment)
* [treasury](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#treasury)
* [vesting](_packages_api_src_augment_consts_._api_types_consts_.augmentedconsts.md#vesting)

## Properties

### babe

•  **babe**: { [key:string]: Codec; epochDuration: u64 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; expectedBlockTime: Moment & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:15](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L15)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`epochDuration` | u64 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The number of **slots** that an epoch takes. We couple sessions to epochs, i.e. we start a new session once the new epoch begins. |
`expectedBlockTime` | Moment & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The expected average block time at which BABE should be creating blocks. Since BABE is probabilistic it is not trivial to figure out what the expected average block time should be based on the slot duration and the security parameter `c` (where `1 - c` represents the probability of a slot being empty). |

___

### balances

•  **balances**: { [key:string]: Codec; existentialDeposit: Balance & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:31](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L31)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`existentialDeposit` | Balance & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The minimum amount required to keep an account open. |

___

### contracts

•  **contracts**: { [key:string]: Codec; maxDepth: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxValueSize: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; rentByteFee: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; rentDepositOffset: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; signedClaimHandicap: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; storageSizeOffset: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; surchargeReward: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; tombstoneDeposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:38](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L38)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`maxDepth` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum nesting level of a call/instantiate stack. A reasonable default value is 100. |
`maxValueSize` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum size of a storage value in bytes. A reasonable default is 16 KiB. |
`rentByteFee` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Price of a byte of storage per one block interval. Should be greater than 0. |
`rentDepositOffset` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount of funds a contract should deposit in order to offset the cost of one byte.  Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day, then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent. But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000, then it would pay 500 BU/day.  |
`signedClaimHandicap` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Number of block delay an extrinsic claim surcharge has.  When claim surcharge is called by an extrinsic the rent is checked for current_block - delay  |
`storageSizeOffset` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | A size offset for an contract. A just created account with untouched storage will have that much of storage from the perspective of the state rent.  This is a simple way to ensure that contracts with empty storage eventually get deleted by making them pay rent. This creates an incentive to remove them early in order to save rent.  |
`surchargeReward` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Reward that is received by the party whose touch has led to removal of a contract. |
`tombstoneDeposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The minimum amount required to generate a tombstone. |

___

### democracy

•  **democracy**: { [key:string]: Codec; cooloffPeriod: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; enactmentPeriod: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; fastTrackVotingPeriod: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; launchPeriod: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxVotes: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; minimumDeposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; preimageByteDeposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; votingPeriod: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:89](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L89)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`cooloffPeriod` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Period in blocks where an external proposal may not be re-submitted after being vetoed. |
`enactmentPeriod` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The minimum period of locking and the period between a proposal being approved and enacted.  It should generally be a little more than the unstake period to ensure that voting stakers have an opportunity to remove themselves from the system in the case where they are on the losing side of a vote.  |
`fastTrackVotingPeriod` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Minimum voting period allowed for an emergency referendum. |
`launchPeriod` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | How often (in blocks) new public referenda are launched. |
`maxVotes` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum number of votes for an account. |
`minimumDeposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The minimum amount to be used as a deposit for a public referendum proposal. |
`preimageByteDeposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount of balance that must be deposited per byte of preimage stored. |
`votingPeriod` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | How often (in blocks) to check for new votes. |

___

### elections

•  **elections**: { [key:string]: Codec; candidacyBond: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; desiredMembers: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; desiredRunnersUp: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; moduleId: LockIdentifier & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; termDuration: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; votingBond: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:128](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L128)*

#### Type declaration:

Name | Type |
------ | ------ |
`candidacyBond` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> |
`desiredMembers` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> |
`desiredRunnersUp` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> |
`moduleId` | LockIdentifier & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> |
`termDuration` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> |
`votingBond` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> |

___

### finalityTracker

•  **finalityTracker**: { [key:string]: Codec; reportLatency: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; windowSize: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:137](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L137)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`reportLatency` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The delay after which point things become suspicious. Default is 1000. |
`windowSize` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The number of recent samples to keep from this chain. Default is 101. |

___

### identity

•  **identity**: { [key:string]: Codec; basicDeposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; fieldDeposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxAdditionalFields: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxRegistrars: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxSubAccounts: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; subAccountDeposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:148](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L148)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`basicDeposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount held on deposit for a registered identity. |
`fieldDeposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount held on deposit per additional field for a registered identity. |
`maxAdditionalFields` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O required to access an identity, but can be pretty high. |
`maxRegistrars` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Maxmimum number of registrars allowed in the system. Needed to bound the complexity of, e.g., updating judgements. |
`maxSubAccounts` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum number of sub-accounts allowed per identified account. |
`subAccountDeposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount held on deposit for a registered subaccount. This should account for the fact that one storage item's value will increase by the size of an account ID, and there will be another trie item whose value is the size of an account ID plus 32 bytes. |

___

### indices

•  **indices**: { [key:string]: Codec; deposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:179](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L179)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`deposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The deposit needed for reserving an index. |

___

### multisig

•  **multisig**: { [key:string]: Codec; depositBase: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; depositFactor: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxSignatories: u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:186](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L186)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`depositBase` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The base amount of currency needed to reserve for creating a multisig execution or to store a dispatch call for later. |
`depositFactor` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount of currency needed per unit threshold when creating a multisig execution. |
`maxSignatories` | u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum amount of signatories allowed for a given multisig. |

___

### proxy

•  **proxy**: { [key:string]: Codec; announcementDepositBase: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; announcementDepositFactor: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxPending: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxProxies: u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; proxyDepositBase: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; proxyDepositFactor: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:202](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L202)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`announcementDepositBase` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | `AnnouncementDepositBase` metadata shadow. |
`announcementDepositFactor` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | `AnnouncementDepositFactor` metadata shadow. |
`maxPending` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | `MaxPending` metadata shadow. |
`maxProxies` | u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum amount of proxies allowed for a single account. |
`proxyDepositBase` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The base amount of currency needed to reserve for creating a proxy. |
`proxyDepositFactor` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount of currency needed per proxy added. |

___

### recovery

•  **recovery**: { [key:string]: Codec; configDepositBase: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; friendDepositFactor: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxFriends: u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; recoveryDeposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:229](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L229)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`configDepositBase` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The base amount of currency needed to reserve for creating a recovery configuration. |
`friendDepositFactor` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount of currency needed per additional user when creating a recovery configuration. |
`maxFriends` | u16 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum amount of friends allowed in a recovery configuration. |
`recoveryDeposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The base amount of currency needed to reserve for starting a recovery. |

___

### society

•  **society**: { [key:string]: Codec; candidateDeposit: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; challengePeriod: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxStrikes: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; moduleId: ModuleId & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; periodSpend: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; rotationPeriod: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; wrongSideDeduction: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:248](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L248)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`candidateDeposit` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The minimum amount of a deposit required for a bid to be made. |
`challengePeriod` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The number of blocks between membership challenges. |
`maxStrikes` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The number of times a member may vote the wrong way (or not at all, when they are a skeptic) before they become suspended. |
`moduleId` | ModuleId & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The societies's module id |
`periodSpend` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount of incentive paid within each period. Doesn't include VoterTip. |
`rotationPeriod` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The number of blocks between candidate/membership rotation periods. |
`wrongSideDeduction` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount of the unpaid reward that gets deducted in the case that either a skeptic doesn't vote or someone votes in the wrong way. |

___

### staking

•  **staking**: { [key:string]: Codec; bondingDuration: EraIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; electionLookahead: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxIterations: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maxNominatorRewardedPerValidator: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; minSolutionScoreBump: Perbill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; sessionsPerEra: SessionIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; slashDeferDuration: EraIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:281](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L281)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`bondingDuration` | EraIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Number of eras that staked funds must remain bonded for. |
`electionLookahead` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The number of blocks before the end of the era from which election submissions are allowed.  Setting this to zero will disable the offchain compute and only on-chain seq-phragmen will be used.  This is bounded by being within the last session. Hence, setting it to a value more than the length of a session will be pointless.  |
`maxIterations` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Maximum number of balancing iterations to run in the offchain submission.  If set to 0, balance_solution will not be executed at all.  |
`maxNominatorRewardedPerValidator` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum number of nominators rewarded for each validator.  For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can claim their reward. This used to limit the i/o cost for the nominator payout.  |
`minSolutionScoreBump` | Perbill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The threshold of improvement that should be provided for a new solution to be accepted. |
`sessionsPerEra` | SessionIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Number of sessions per era. |
`slashDeferDuration` | EraIndex & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Number of eras that slashes are deferred by, after computation.  This should be less than the bonding duration. Set to 0 if slashes should be applied immediately, without opportunity for intervention.  |

___

### system

•  **system**: { [key:string]: Codec; blockExecutionWeight: Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; blockHashCount: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; dbWeight: RuntimeDbWeight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; extrinsicBaseWeight: Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maximumBlockLength: u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; maximumBlockWeight: Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:327](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L327)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`blockExecutionWeight` | Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The base weight of executing a block, independent of the transactions in the block. |
`blockHashCount` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum number of blocks to allow in mortal eras. |
`dbWeight` | RuntimeDbWeight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The weight of runtime database operations the runtime can invoke. |
`extrinsicBaseWeight` | Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The base weight of an Extrinsic in the block, independent of the of extrinsic being executed. |
`maximumBlockLength` | u32 & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum length of a block (in bytes). |
`maximumBlockWeight` | Weight & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The maximum weight of a block. |

___

### timestamp

•  **timestamp**: { [key:string]: Codec; minimumPeriod: Moment & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:354](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L354)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`minimumPeriod` | Moment & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The minimum period between blocks. Beware that this is different to the *expected* period that the block production apparatus provides. Your chosen consensus system will generally work with this to determine a sensible block time. e.g. For Aura, it will be double this period on default settings. |

___

### transactionPayment

•  **transactionPayment**: { [key:string]: Codec; transactionByteFee: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; weightToFee: Vec\<WeightToFeeCoefficient> & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:364](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L364)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`transactionByteFee` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The fee to be paid for making a transaction; the per-byte portion. |
`weightToFee` | Vec\<WeightToFeeCoefficient> & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The polynomial that is applied in order to derive fee from weight. |

___

### treasury

•  **treasury**: { [key:string]: Codec; burn: Permill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; moduleId: ModuleId & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; proposalBond: Permill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; proposalBondMinimum: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; spendPeriod: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; tipCountdown: BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; tipFindersFee: Percent & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; tipReportDepositBase: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> ; tipReportDepositPerByte: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:375](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L375)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`burn` | Permill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Percentage of spare funds (if any) that are burnt per spend period. |
`moduleId` | ModuleId & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The treasury's module id, used for deriving its sovereign account ID. |
`proposalBond` | Permill & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not. |
`proposalBondMinimum` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Minimum amount of funds that should be placed in a deposit for making a proposal. |
`spendPeriod` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | Period between successive spends. |
`tipCountdown` | BlockNumber & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The period for which a tip remains open after is has achieved threshold tippers. |
`tipFindersFee` | Percent & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount of the final tip which goes to the original reporter of the tip. |
`tipReportDepositBase` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount held on deposit for placing a tip report. |
`tipReportDepositPerByte` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The amount held on deposit per byte within the tip report reason. |

___

### vesting

•  **vesting**: { [key:string]: Codec; minVestedTransfer: BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType>  }

*Defined in [packages/api/src/augment/consts.ts:415](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api/src/augment/consts.ts#L415)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`minVestedTransfer` | BalanceOf & [AugmentedConst](_packages_api_src_types_consts_.augmentedconst.md)\<ApiType> | The minimum amount to be transferred to create a new vesting schedule. |
