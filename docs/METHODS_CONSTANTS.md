## Constants

_The following sections contain the module constants, also known as parameter types.
- **[balances](#balances)**

- **[contracts](#contracts)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[finalityTracker](#finalityTracker)**

- **[staking](#staking)**

- **[treasury](#treasury)**


___


### balances

▸ **creationFee**: `Balance`
- **summary**:   The fee required to create an account.

▸ **existentialDeposit**: `Balance`
- **summary**:   The minimum amount required to keep an account open.

▸ **transactionBaseFee**: `Balance`
- **summary**:   The fee to be paid for making a transaction; the base.

▸ **transactionByteFee**: `Balance`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion.

▸ **transferFee**: `Balance`
- **summary**:   The fee required to make a transfer.

___


### contracts

▸ **blockGasLimit**: `Gas`
- **summary**:   The maximum amount of gas that could be expended per block. A reasonable  default value is 10_000_000.

▸ **callBaseFee**: `Gas`
- **summary**:   The base fee charged for calling into a contract. A reasonable default  value is 135.

▸ **contractFee**: `BalanceOf`
- **summary**:   The fee required to create a contract instance. A reasonable default value  is 21.

▸ **createBaseFee**: `Gas`
- **summary**:   The base fee charged for creating a contract. A reasonable default value  is 175.

▸ **creationFee**: `BalanceOf`
- **summary**:   The fee required to create an account.

▸ **maxDepth**: `u32`
- **summary**:   The maximum nesting level of a call/create stack. A reasonable default  value is 100.

▸ **rentByteFee**: `BalanceOf`
- **summary**:   Price of a byte of storage per one block interval. Should be greater than 0.

▸ **rentDepositOffset**: `BalanceOf`
- **summary**:   The amount of funds a contract should deposit in order to offset  the cost of one byte.   Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,  then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.  But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,  then it would pay 500 BU/day.

▸ **signedClaimHandicap**: `BlockNumber`
- **summary**:   Number of block delay an extrinsic claim surcharge has.   When claim surcharge is called by an extrinsic the rent is checked  for current_block - delay

▸ **storageSizeOffset**: `u32`
- **summary**:   Size of a contract at the time of creation. This is a simple way to ensure  that empty contracts eventually gets deleted.

▸ **surchargeReward**: `BalanceOf`
- **summary**:   Reward that is received by the party whose touch has led  to removal of a contract.

▸ **tombstoneDeposit**: `BalanceOf`
- **summary**:   The minimum amount required to generate a tombstone.

▸ **transactionBaseFee**: `BalanceOf`
- **summary**:   The fee to be paid for making a transaction; the base.

▸ **transactionByteFee**: `BalanceOf`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion.

▸ **transferFee**: `BalanceOf`
- **summary**:   The fee required to make a transfer.

___


### democracy

▸ **cooloffPeriod**: `BlockNumber`
- **summary**:   Period in blocks where an external proposal may not be re-submitted after being vetoed.

▸ **emergencyVotingPeriod**: `BlockNumber`
- **summary**:   Minimum voting period allowed for an emergency referendum.

▸ **enactmentPeriod**: `BlockNumber`
- **summary**:   The minimum period of locking and the period between a proposal being approved and enacted.   It should generally be a little more than the unstake period to ensure that  voting stakers have an opportunity to remove themselves from the system in the case where  they are on the losing side of a vote.

▸ **launchPeriod**: `BlockNumber`
- **summary**:   How often (in blocks) new public referenda are launched.

▸ **minimumDeposit**: `BalanceOf`
- **summary**:   The minimum amount to be used as a deposit for a public referendum proposal.

▸ **votingPeriod**: `BlockNumber`
- **summary**:   How often (in blocks) to check for new votes.

___


### elections

▸ **candidacyBond**: `BalanceOf`
- **summary**:   How much should be locked up in order to submit one's candidacy. A reasonable  default value is 9.

▸ **carryCount**: `u32`
- **summary**:   How many runners-up should have their approvals persist until the next  vote. A reasonable default value is 2.

▸ **decayRatio**: `u32`
- **summary**:   Decay factor of weight when being accumulated. It should typically be set to  __at least__ `membership_size -1` to keep the collective secure.  When set to `N`, it indicates `(1/N)^t` of staked is decayed at weight  increment step `t`. 0 will result in no weight being added at all (normal  approval voting). A reasonable default value is 24.

▸ **inactiveGracePeriod**: `VoteIndex`
- **summary**:   How many vote indices need to go by after a target voter's last vote before  they can be reaped if their approvals are moot. A reasonable default value  is 1.

▸ **presentSlashPerVoter**: `BalanceOf`
- **summary**:   The punishment, per voter, if you provide an invalid presentation. A  reasonable default value is 1.

▸ **votingBond**: `BalanceOf`
- **summary**:   How much should be locked up in order to be able to submit votes.

▸ **votingFee**: `BalanceOf`
- **summary**:   The amount of fee paid upon each vote submission, unless if they submit a  _hole_ index and replace it.

▸ **votingPeriod**: `BlockNumber`
- **summary**:   How often (in blocks) to check for new votes. A reasonable default value  is 1000.

___


### finality_tracker

▸ **reportLatency**: `BlockNumber`
- **summary**:   The delay after which point things become suspicious. Default is 1000.

▸ **windowSize**: `BlockNumber`
- **summary**:   The number of recent samples to keep from this chain. Default is 101.

___


### staking

▸ **bondingDuration**: `EraIndex`
- **summary**:   Number of eras that staked funds must remain bonded for.

▸ **sessionsPerEra**: `SessionIndex`
- **summary**:   Number of sessions per era.

___


### treasury

▸ **burn**: `Permill`
- **summary**:   Percentage of spare funds (if any) that are burnt per spend period.

▸ **proposalBond**: `Permill`
- **summary**:   Fraction of a proposal's value that should be bonded in order to place the proposal.  An accepted proposal gets these back. A rejected proposal does not.

▸ **proposalBondMinimum**: `BalanceOf`
- **summary**:   Minimum amount of funds that should be placed in a deposit for making a proposal.

▸ **spendPeriod**: `BlockNumber`
- **summary**:   Period between successive spends.
