## Constants

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via `api.consts.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)
- **[babe](#babe)**

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[finalityTracker](#finalityTracker)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionPayment)**

- **[treasury](#treasury)**


___


## babe

### epochDuration: `u64`
- **interface**: api.consts.babe.epochDuration
- **summary**: The number of **slots** that an epoch takes. We couple sessions to epochs, i.e. we start a new session once the new epoch begins.

### expectedBlockTime: `Moment`
- **interface**: api.consts.babe.expectedBlockTime
- **summary**: The expected average block time at which BABE should be creating blocks. Since BABE is probabilistic it is not trivial to figure out what the expected average block time should be based on the slot duration and the security parameter `c` (where `1 - c` represents the probability of a slot being empty).

___


## balances

### creationFee: `Balance`
- **interface**: api.consts.balances.creationFee
- **summary**: The fee required to create an account.

### existentialDeposit: `Balance`
- **interface**: api.consts.balances.existentialDeposit
- **summary**: The minimum amount required to keep an account open.

___


## contracts

### blockGasLimit: `Gas`
- **interface**: api.consts.contracts.blockGasLimit
- **summary**: The maximum amount of gas that could be expended per block. A reasonable default value is 10_000_000.

### callBaseFee: `Gas`
- **interface**: api.consts.contracts.callBaseFee
- **summary**: The base fee charged for calling into a contract. A reasonable default value is 135.

### contractFee: `BalanceOf`
- **interface**: api.consts.contracts.contractFee
- **summary**: The fee required to instantiate a contract instance. A reasonable default value is 21.

### creationFee: `BalanceOf`
- **interface**: api.consts.contracts.creationFee
- **summary**: The fee required to create an account.

### instantiateBaseFee: `Gas`
- **interface**: api.consts.contracts.instantiateBaseFee
- **summary**: The base fee charged for instantiating a contract. A reasonable default value is 175.

### maxDepth: `u32`
- **interface**: api.consts.contracts.maxDepth
- **summary**: The maximum nesting level of a call/instantiate stack. A reasonable default value is 100.

### maxValueSize: `u32`
- **interface**: api.consts.contracts.maxValueSize
- **summary**: The maximum size of a storage value in bytes. A reasonable default is 16 KiB.

### rentByteFee: `BalanceOf`
- **interface**: api.consts.contracts.rentByteFee
- **summary**: Price of a byte of storage per one block interval. Should be greater than 0.

### rentDepositOffset: `BalanceOf`
- **interface**: api.consts.contracts.rentDepositOffset
- **summary**: The amount of funds a contract should deposit in order to offset the cost of one byte.  Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day, then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent. But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000, then it would pay 500 BU/day.

### signedClaimHandicap: `BlockNumber`
- **interface**: api.consts.contracts.signedClaimHandicap
- **summary**: Number of block delay an extrinsic claim surcharge has.  When claim surcharge is called by an extrinsic the rent is checked for current_block - delay

### storageSizeOffset: `u32`
- **interface**: api.consts.contracts.storageSizeOffset
- **summary**: Size of a contract at the time of instantiaion. This is a simple way to ensure that empty contracts eventually gets deleted.

### surchargeReward: `BalanceOf`
- **interface**: api.consts.contracts.surchargeReward
- **summary**: Reward that is received by the party whose touch has led to removal of a contract.

### tombstoneDeposit: `BalanceOf`
- **interface**: api.consts.contracts.tombstoneDeposit
- **summary**: The minimum amount required to generate a tombstone.

### transactionBaseFee: `BalanceOf`
- **interface**: api.consts.contracts.transactionBaseFee
- **summary**: The fee to be paid for making a transaction; the base.

### transactionByteFee: `BalanceOf`
- **interface**: api.consts.contracts.transactionByteFee
- **summary**: The fee to be paid for making a transaction; the per-byte portion.

___


## democracy

### cooloffPeriod: `BlockNumber`
- **interface**: api.consts.democracy.cooloffPeriod
- **summary**: Period in blocks where an external proposal may not be re-submitted after being vetoed.

### emergencyVotingPeriod: `BlockNumber`
- **interface**: api.consts.democracy.emergencyVotingPeriod
- **summary**: Minimum voting period allowed for an emergency referendum.

### enactmentPeriod: `BlockNumber`
- **interface**: api.consts.democracy.enactmentPeriod
- **summary**: The minimum period of locking and the period between a proposal being approved and enacted.  It should generally be a little more than the unstake period to ensure that voting stakers have an opportunity to remove themselves from the system in the case where they are on the losing side of a vote.

### launchPeriod: `BlockNumber`
- **interface**: api.consts.democracy.launchPeriod
- **summary**: How often (in blocks) new public referenda are launched.

### minimumDeposit: `BalanceOf`
- **interface**: api.consts.democracy.minimumDeposit
- **summary**: The minimum amount to be used as a deposit for a public referendum proposal.

### preimageByteDeposit: `BalanceOf`
- **interface**: api.consts.democracy.preimageByteDeposit
- **summary**: The amount of balance that must be deposited per byte of preimage stored.

### votingPeriod: `BlockNumber`
- **interface**: api.consts.democracy.votingPeriod
- **summary**: How often (in blocks) to check for new votes.

___


## elections

### candidacyBond: `BalanceOf`
- **interface**: api.consts.elections.candidacyBond

### desiredMembers: `u32`
- **interface**: api.consts.elections.desiredMembers

### desiredRunnersUp: `u32`
- **interface**: api.consts.elections.desiredRunnersUp

### termDuration: `BlockNumber`
- **interface**: api.consts.elections.termDuration

### votingBond: `BalanceOf`
- **interface**: api.consts.elections.votingBond

___


## finalityTracker

### reportLatency: `BlockNumber`
- **interface**: api.consts.finalityTracker.reportLatency
- **summary**: The delay after which point things become suspicious. Default is 1000.

### windowSize: `BlockNumber`
- **interface**: api.consts.finalityTracker.windowSize
- **summary**: The number of recent samples to keep from this chain. Default is 101.

___


## session

### dedupKeyPrefix: `Bytes`
- **interface**: api.consts.session.dedupKeyPrefix
- **summary**: Used as first key for `NextKeys` and `KeyOwner` to put all the data into the same branch of the trie.

___


## society

### candidateDeposit: `BalanceOf`
- **interface**: api.consts.society.candidateDeposit
- **summary**: The minimum amount of a deposit required for a bid to be made.

### challengePeriod: `BlockNumber`
- **interface**: api.consts.society.challengePeriod
- **summary**: The number of blocks between membership challenges.

### maxStrikes: `u32`
- **interface**: api.consts.society.maxStrikes
- **summary**: The number of times a member may vote the wrong way (or not at all, when they are a skeptic) before they become suspended.

### periodSpend: `BalanceOf`
- **interface**: api.consts.society.periodSpend
- **summary**: The amount of incentive paid within each period. Doesn't include VoterTip.

### rotationPeriod: `BlockNumber`
- **interface**: api.consts.society.rotationPeriod
- **summary**: The number of blocks between candidate/membership rotation periods.

### wrongSideDeduction: `BalanceOf`
- **interface**: api.consts.society.wrongSideDeduction
- **summary**: The amount of the unpaid reward that gets deducted in the case that either a skeptic doesn't vote or someone votes in the wrong way.

___


## staking

### bondingDuration: `EraIndex`
- **interface**: api.consts.staking.bondingDuration
- **summary**: Number of eras that staked funds must remain bonded for.

### sessionsPerEra: `SessionIndex`
- **interface**: api.consts.staking.sessionsPerEra
- **summary**: Number of sessions per era.

___


## timestamp

### minimumPeriod: `Moment`
- **interface**: api.consts.timestamp.minimumPeriod
- **summary**: The minimum period between blocks. Beware that this is different to the *expected* period that the block production apparatus provides. Your chosen consensus system will generally work with this to determine a sensible block time. e.g. For Aura, it will be double this period on default settings.

___


## transactionPayment

### transactionBaseFee: `BalanceOf`
- **interface**: api.consts.transactionPayment.transactionBaseFee
- **summary**: The fee to be paid for making a transaction; the base.

### transactionByteFee: `BalanceOf`
- **interface**: api.consts.transactionPayment.transactionByteFee
- **summary**: The fee to be paid for making a transaction; the per-byte portion.

___


## treasury

### burn: `Permill`
- **interface**: api.consts.treasury.burn
- **summary**: Percentage of spare funds (if any) that are burnt per spend period.

### proposalBond: `Permill`
- **interface**: api.consts.treasury.proposalBond
- **summary**: Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not.

### proposalBondMinimum: `BalanceOf`
- **interface**: api.consts.treasury.proposalBondMinimum
- **summary**: Minimum amount of funds that should be placed in a deposit for making a proposal.

### spendPeriod: `BlockNumber`
- **interface**: api.consts.treasury.spendPeriod
- **summary**: Period between successive spends.

### tipCountdown: `BlockNumber`
- **interface**: api.consts.treasury.tipCountdown
- **summary**: The period for which a tip remains open after is has achieved threshold tippers.

### tipFindersFee: `Percent`
- **interface**: api.consts.treasury.tipFindersFee
- **summary**: The amount of the final tip which goes to the original reporter of the tip.

### tipReportDepositBase: `BalanceOf`
- **interface**: api.consts.treasury.tipReportDepositBase
- **summary**: The amount held on deposit for placing a tip report.

### tipReportDepositPerByte: `BalanceOf`
- **interface**: api.consts.treasury.tipReportDepositPerByte
- **summary**: The amount held on deposit per byte within the tip report reason.
