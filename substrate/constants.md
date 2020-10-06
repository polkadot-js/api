---
title: Constants
---

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via `api.consts.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[babe](#babe)**

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[finalityTracker](#finalitytracker)**

- **[identity](#identity)**

- **[indices](#indices)**

- **[multisig](#multisig)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[society](#society)**

- **[staking](#staking)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[vesting](#vesting)**


___


## babe
 
### epochDuration: `u64`
- **interface**: `api.consts.babe.epochDuration`
- **summary**:   The number of **slots** that an epoch takes. We couple sessions to epochs, i.e. we start a new session once the new epoch begins. 
 
### expectedBlockTime: `Moment`
- **interface**: `api.consts.babe.expectedBlockTime`
- **summary**:   The expected average block time at which BABE should be creating blocks. Since BABE is probabilistic it is not trivial to figure out what the expected average block time should be based on the slot duration and the security parameter `c` (where `1 - c` represents the probability of a slot being empty). 

___


## balances
 
### existentialDeposit: `Balance`
- **interface**: `api.consts.balances.existentialDeposit`
- **summary**:   The minimum amount required to keep an account open. 

___


## contracts
 
### maxDepth: `u32`
- **interface**: `api.consts.contracts.maxDepth`
- **summary**:   The maximum nesting level of a call/instantiate stack. A reasonable default value is 100. 
 
### maxValueSize: `u32`
- **interface**: `api.consts.contracts.maxValueSize`
- **summary**:   The maximum size of a storage value in bytes. A reasonable default is 16 KiB. 
 
### rentByteFee: `BalanceOf`
- **interface**: `api.consts.contracts.rentByteFee`
- **summary**:   Price of a byte of storage per one block interval. Should be greater than 0. 
 
### rentDepositOffset: `BalanceOf`
- **interface**: `api.consts.contracts.rentDepositOffset`
- **summary**:   The amount of funds a contract should deposit in order to offset the cost of one byte. 

  Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day, then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent. But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000, then it would pay 500 BU/day. 
 
### signedClaimHandicap: `BlockNumber`
- **interface**: `api.consts.contracts.signedClaimHandicap`
- **summary**:   Number of block delay an extrinsic claim surcharge has. 

  When claim surcharge is called by an extrinsic the rent is checked for current_block - delay 
 
### storageSizeOffset: `u32`
- **interface**: `api.consts.contracts.storageSizeOffset`
- **summary**:   A size offset for an contract. A just created account with untouched storage will have that much of storage from the perspective of the state rent. 

  This is a simple way to ensure that contracts with empty storage eventually get deleted by making them pay rent. This creates an incentive to remove them early in order to save rent. 
 
### surchargeReward: `BalanceOf`
- **interface**: `api.consts.contracts.surchargeReward`
- **summary**:   Reward that is received by the party whose touch has led to removal of a contract. 
 
### tombstoneDeposit: `BalanceOf`
- **interface**: `api.consts.contracts.tombstoneDeposit`
- **summary**:   The minimum amount required to generate a tombstone. 

___


## democracy
 
### cooloffPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.cooloffPeriod`
- **summary**:   Period in blocks where an external proposal may not be re-submitted after being vetoed. 
 
### enactmentPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.enactmentPeriod`
- **summary**:   The minimum period of locking and the period between a proposal being approved and enacted. 

  It should generally be a little more than the unstake period to ensure that voting stakers have an opportunity to remove themselves from the system in the case where they are on the losing side of a vote. 
 
### fastTrackVotingPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.fastTrackVotingPeriod`
- **summary**:   Minimum voting period allowed for an emergency referendum. 
 
### launchPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.launchPeriod`
- **summary**:   How often (in blocks) new public referenda are launched. 
 
### maxVotes: `u32`
- **interface**: `api.consts.democracy.maxVotes`
- **summary**:   The maximum number of votes for an account. 
 
### minimumDeposit: `BalanceOf`
- **interface**: `api.consts.democracy.minimumDeposit`
- **summary**:   The minimum amount to be used as a deposit for a public referendum proposal. 
 
### preimageByteDeposit: `BalanceOf`
- **interface**: `api.consts.democracy.preimageByteDeposit`
- **summary**:   The amount of balance that must be deposited per byte of preimage stored. 
 
### votingPeriod: `BlockNumber`
- **interface**: `api.consts.democracy.votingPeriod`
- **summary**:   How often (in blocks) to check for new votes. 

___


## elections
 
### candidacyBond: `BalanceOf`
- **interface**: `api.consts.elections.candidacyBond`
 
### desiredMembers: `u32`
- **interface**: `api.consts.elections.desiredMembers`
 
### desiredRunnersUp: `u32`
- **interface**: `api.consts.elections.desiredRunnersUp`
 
### moduleId: `LockIdentifier`
- **interface**: `api.consts.elections.moduleId`
 
### termDuration: `BlockNumber`
- **interface**: `api.consts.elections.termDuration`
 
### votingBond: `BalanceOf`
- **interface**: `api.consts.elections.votingBond`

___


## finalityTracker
 
### reportLatency: `BlockNumber`
- **interface**: `api.consts.finalityTracker.reportLatency`
- **summary**:   The delay after which point things become suspicious. Default is 1000. 
 
### windowSize: `BlockNumber`
- **interface**: `api.consts.finalityTracker.windowSize`
- **summary**:   The number of recent samples to keep from this chain. Default is 101. 

___


## identity
 
### basicDeposit: `BalanceOf`
- **interface**: `api.consts.identity.basicDeposit`
- **summary**:   The amount held on deposit for a registered identity. 
 
### fieldDeposit: `BalanceOf`
- **interface**: `api.consts.identity.fieldDeposit`
- **summary**:   The amount held on deposit per additional field for a registered identity. 
 
### maxAdditionalFields: `u32`
- **interface**: `api.consts.identity.maxAdditionalFields`
- **summary**:   Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O required to access an identity, but can be pretty high. 
 
### maxRegistrars: `u32`
- **interface**: `api.consts.identity.maxRegistrars`
- **summary**:   Maxmimum number of registrars allowed in the system. Needed to bound the complexity of, e.g., updating judgements. 
 
### maxSubAccounts: `u32`
- **interface**: `api.consts.identity.maxSubAccounts`
- **summary**:   The maximum number of sub-accounts allowed per identified account. 
 
### subAccountDeposit: `BalanceOf`
- **interface**: `api.consts.identity.subAccountDeposit`
- **summary**:   The amount held on deposit for a registered subaccount. This should account for the fact that one storage item's value will increase by the size of an account ID, and there will be another trie item whose value is the size of an account ID plus 32 bytes. 

___


## indices
 
### deposit: `BalanceOf`
- **interface**: `api.consts.indices.deposit`
- **summary**:   The deposit needed for reserving an index. 

___


## multisig
 
### depositBase: `BalanceOf`
- **interface**: `api.consts.multisig.depositBase`
- **summary**:   The base amount of currency needed to reserve for creating a multisig execution or to store a dispatch call for later. 
 
### depositFactor: `BalanceOf`
- **interface**: `api.consts.multisig.depositFactor`
- **summary**:   The amount of currency needed per unit threshold when creating a multisig execution. 
 
### maxSignatories: `u16`
- **interface**: `api.consts.multisig.maxSignatories`
- **summary**:   The maximum amount of signatories allowed for a given multisig. 

___


## proxy
 
### announcementDepositBase: `BalanceOf`
- **interface**: `api.consts.proxy.announcementDepositBase`
- **summary**:   `AnnouncementDepositBase` metadata shadow. 
 
### announcementDepositFactor: `BalanceOf`
- **interface**: `api.consts.proxy.announcementDepositFactor`
- **summary**:   `AnnouncementDepositFactor` metadata shadow. 
 
### maxPending: `u32`
- **interface**: `api.consts.proxy.maxPending`
- **summary**:   `MaxPending` metadata shadow. 
 
### maxProxies: `u16`
- **interface**: `api.consts.proxy.maxProxies`
- **summary**:   The maximum amount of proxies allowed for a single account. 
 
### proxyDepositBase: `BalanceOf`
- **interface**: `api.consts.proxy.proxyDepositBase`
- **summary**:   The base amount of currency needed to reserve for creating a proxy. 
 
### proxyDepositFactor: `BalanceOf`
- **interface**: `api.consts.proxy.proxyDepositFactor`
- **summary**:   The amount of currency needed per proxy added. 

___


## recovery
 
### configDepositBase: `BalanceOf`
- **interface**: `api.consts.recovery.configDepositBase`
- **summary**:   The base amount of currency needed to reserve for creating a recovery configuration. 
 
### friendDepositFactor: `BalanceOf`
- **interface**: `api.consts.recovery.friendDepositFactor`
- **summary**:   The amount of currency needed per additional user when creating a recovery configuration. 
 
### maxFriends: `u16`
- **interface**: `api.consts.recovery.maxFriends`
- **summary**:   The maximum amount of friends allowed in a recovery configuration. 
 
### recoveryDeposit: `BalanceOf`
- **interface**: `api.consts.recovery.recoveryDeposit`
- **summary**:   The base amount of currency needed to reserve for starting a recovery. 

___


## society
 
### candidateDeposit: `BalanceOf`
- **interface**: `api.consts.society.candidateDeposit`
- **summary**:   The minimum amount of a deposit required for a bid to be made. 
 
### challengePeriod: `BlockNumber`
- **interface**: `api.consts.society.challengePeriod`
- **summary**:   The number of blocks between membership challenges. 
 
### maxStrikes: `u32`
- **interface**: `api.consts.society.maxStrikes`
- **summary**:   The number of times a member may vote the wrong way (or not at all, when they are a skeptic) before they become suspended. 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.society.moduleId`
- **summary**:   The societies's module id 
 
### periodSpend: `BalanceOf`
- **interface**: `api.consts.society.periodSpend`
- **summary**:   The amount of incentive paid within each period. Doesn't include VoterTip. 
 
### rotationPeriod: `BlockNumber`
- **interface**: `api.consts.society.rotationPeriod`
- **summary**:   The number of blocks between candidate/membership rotation periods. 
 
### wrongSideDeduction: `BalanceOf`
- **interface**: `api.consts.society.wrongSideDeduction`
- **summary**:   The amount of the unpaid reward that gets deducted in the case that either a skeptic doesn't vote or someone votes in the wrong way. 

___


## staking
 
### bondingDuration: `EraIndex`
- **interface**: `api.consts.staking.bondingDuration`
- **summary**:   Number of eras that staked funds must remain bonded for. 
 
### electionLookahead: `BlockNumber`
- **interface**: `api.consts.staking.electionLookahead`
- **summary**:   The number of blocks before the end of the era from which election submissions are allowed. 

  Setting this to zero will disable the offchain compute and only on-chain seq-phragmen will be used. 

  This is bounded by being within the last session. Hence, setting it to a value more than the length of a session will be pointless. 
 
### maxIterations: `u32`
- **interface**: `api.consts.staking.maxIterations`
- **summary**:   Maximum number of balancing iterations to run in the offchain submission. 

  If set to 0, balance_solution will not be executed at all. 
 
### maxNominatorRewardedPerValidator: `u32`
- **interface**: `api.consts.staking.maxNominatorRewardedPerValidator`
- **summary**:   The maximum number of nominators rewarded for each validator. 

  For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can claim their reward. This used to limit the i/o cost for the nominator payout. 
 
### minSolutionScoreBump: `Perbill`
- **interface**: `api.consts.staking.minSolutionScoreBump`
- **summary**:   The threshold of improvement that should be provided for a new solution to be accepted. 
 
### sessionsPerEra: `SessionIndex`
- **interface**: `api.consts.staking.sessionsPerEra`
- **summary**:   Number of sessions per era. 
 
### slashDeferDuration: `EraIndex`
- **interface**: `api.consts.staking.slashDeferDuration`
- **summary**:   Number of eras that slashes are deferred by, after computation. 

  This should be less than the bonding duration. Set to 0 if slashes should be applied immediately, without opportunity for intervention. 

___


## system
 
### blockExecutionWeight: `Weight`
- **interface**: `api.consts.system.blockExecutionWeight`
- **summary**:   The base weight of executing a block, independent of the transactions in the block. 
 
### blockHashCount: `BlockNumber`
- **interface**: `api.consts.system.blockHashCount`
- **summary**:   The maximum number of blocks to allow in mortal eras. 
 
### dbWeight: `RuntimeDbWeight`
- **interface**: `api.consts.system.dbWeight`
- **summary**:   The weight of runtime database operations the runtime can invoke. 
 
### extrinsicBaseWeight: `Weight`
- **interface**: `api.consts.system.extrinsicBaseWeight`
- **summary**:   The base weight of an Extrinsic in the block, independent of the of extrinsic being executed. 
 
### maximumBlockLength: `u32`
- **interface**: `api.consts.system.maximumBlockLength`
- **summary**:   The maximum length of a block (in bytes). 
 
### maximumBlockWeight: `Weight`
- **interface**: `api.consts.system.maximumBlockWeight`
- **summary**:   The maximum weight of a block. 

___


## timestamp
 
### minimumPeriod: `Moment`
- **interface**: `api.consts.timestamp.minimumPeriod`
- **summary**:   The minimum period between blocks. Beware that this is different to the *expected* period that the block production apparatus provides. Your chosen consensus system will generally work with this to determine a sensible block time. e.g. For Aura, it will be double this period on default settings. 

___


## transactionPayment
 
### transactionByteFee: `BalanceOf`
- **interface**: `api.consts.transactionPayment.transactionByteFee`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion. 
 
### weightToFee: `Vec<WeightToFeeCoefficient>`
- **interface**: `api.consts.transactionPayment.weightToFee`
- **summary**:   The polynomial that is applied in order to derive fee from weight. 

___


## treasury
 
### bountyCuratorDeposit: `Permill`
- **interface**: `api.consts.treasury.bountyCuratorDeposit`
- **summary**:   Percentage of the curator fee that will be reserved upfront as deposit for bounty curator. 
 
### bountyDepositBase: `BalanceOf`
- **interface**: `api.consts.treasury.bountyDepositBase`
- **summary**:   The amount held on deposit for placing a bounty proposal. 
 
### bountyDepositPayoutDelay: `BlockNumber`
- **interface**: `api.consts.treasury.bountyDepositPayoutDelay`
- **summary**:   The delay period for which a bounty beneficiary need to wait before claim the payout. 
 
### bountyValueMinimum: `BalanceOf`
- **interface**: `api.consts.treasury.bountyValueMinimum`
 
### burn: `Permill`
- **interface**: `api.consts.treasury.burn`
- **summary**:   Percentage of spare funds (if any) that are burnt per spend period. 
 
### dataDepositPerByte: `BalanceOf`
- **interface**: `api.consts.treasury.dataDepositPerByte`
- **summary**:   The amount held on deposit per byte within the tip report reason or bounty description. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.treasury.maximumReasonLength`
- **summary**:   Maximum acceptable reason length. 
 
### moduleId: `ModuleId`
- **interface**: `api.consts.treasury.moduleId`
- **summary**:   The treasury's module id, used for deriving its sovereign account ID. 
 
### proposalBond: `Permill`
- **interface**: `api.consts.treasury.proposalBond`
- **summary**:   Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not. 
 
### proposalBondMinimum: `BalanceOf`
- **interface**: `api.consts.treasury.proposalBondMinimum`
- **summary**:   Minimum amount of funds that should be placed in a deposit for making a proposal. 
 
### spendPeriod: `BlockNumber`
- **interface**: `api.consts.treasury.spendPeriod`
- **summary**:   Period between successive spends. 
 
### tipCountdown: `BlockNumber`
- **interface**: `api.consts.treasury.tipCountdown`
- **summary**:   The period for which a tip remains open after is has achieved threshold tippers. 
 
### tipFindersFee: `Percent`
- **interface**: `api.consts.treasury.tipFindersFee`
- **summary**:   The amount of the final tip which goes to the original reporter of the tip. 
 
### tipReportDepositBase: `BalanceOf`
- **interface**: `api.consts.treasury.tipReportDepositBase`
- **summary**:   The amount held on deposit for placing a tip report. 

___


## vesting
 
### minVestedTransfer: `BalanceOf`
- **interface**: `api.consts.vesting.minVestedTransfer`
- **summary**:   The minimum amount to be transferred to create a new vesting schedule. 
