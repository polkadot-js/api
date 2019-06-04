## Storage

_The following sections contain Storage methods are part of the default Substrate runtime._
- **[balances](#balances)**

- **[consensus](#consensus)**

- **[contract](#contract)**

- **[council](#council)**

- **[councilMotions](#councilMotions)**

- **[councilVoting](#councilVoting)**

- **[democracy](#democracy)**

- **[grandpaFinality](#grandpaFinality)**

- **[indices](#indices)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**

- **[substrate](#substrate)**


___


### balances

▸ **creationFee**(): `Balance`
- **summary**:   The fee required to create an account.

▸ **existentialDeposit**(): `Balance`
- **summary**:   The minimum amount required to keep an account open.

▸ **freeBalance**(`AccountId`): `Balance`
- **summary**:   The 'free' balance of a given account.   This is the only balance that matters in terms of most operations on tokens. It  alone is used to determine the balance when in the contract execution environment. When this  balance falls below the value of `ExistentialDeposit`, then the 'current account' is  deleted: specifically `FreeBalance`. Further, the `OnFreeBalanceZero` callback  is invoked, giving a chance to external modules to clean up data associated with  the deleted account.   `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets  collapsed to zero if it ever becomes less than `ExistentialDeposit`.

▸ **locks**(`AccountId`): `Vec<BalanceLock>`
- **summary**:   Any liquidity locks on some account balances.

▸ **reservedBalance**(`AccountId`): `Balance`
- **summary**:   The amount of the balance of a given account that is externally reserved; this can still get  slashed, but gets slashed last of all.   This balance is a 'reserve' balance that other subsystems use in order to set aside tokens  that are still 'owned' by the account holder, but which are suspendable.   When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'  is deleted: specifically, `ReservedBalance`.   `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets  collapsed to zero if it ever becomes less than `ExistentialDeposit`.)

▸ **totalIssuance**(): `Balance`
- **summary**:   The total units issued in the system.

▸ **transactionBaseFee**(): `Balance`
- **summary**:   The fee to be paid for making a transaction; the base.

▸ **transactionByteFee**(): `Balance`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion.

▸ **transferFee**(): `Balance`
- **summary**:   The fee required to make a transfer.

▸ **vesting**(`AccountId`): `Option<VestingSchedule>`
- **summary**:   Information regarding the vesting of a given account.

___


### consensus

▸ **originalAuthorities**(): `Option<Vec<SessionKey>>`

___


### contract

▸ **accountCounter**(): `u64`
- **summary**:   The subtrie counter.

▸ **blockGasLimit**(): `Gas`
- **summary**:   The maximum amount of gas that could be expended per block.

▸ **callBaseFee**(): `Gas`
- **summary**:   The base fee charged for calling into a contract.

▸ **codeStorage**(`CodeHash`): `Option<PrefabWasmModule>`
- **summary**:   A mapping between an original code hash and instrumented wasm code, ready for execution.

▸ **contractFee**(): `BalanceOf`
- **summary**:   The fee required to create a contract instance.

▸ **contractInfoOf**(`AccountId`): `Option<ContractInfo>`
- **summary**:   The code associated with a given account.

▸ **createBaseFee**(): `Gas`
- **summary**:   The base fee charged for creating a contract.

▸ **creationFee**(): `BalanceOf`
- **summary**:   The fee required to create an account.

▸ **currentSchedule**(): `Schedule`
- **summary**:   Current cost schedule for contracts.

▸ **gasPrice**(): `BalanceOf`
- **summary**:   The price of one unit of gas.

▸ **gasSpent**(): `Gas`
- **summary**:   Gas spent so far in this block.

▸ **maxDepth**(): `u32`
- **summary**:   The maximum nesting level of a call/create stack.

▸ **pristineCode**(`CodeHash`): `Option<Bytes>`
- **summary**:   A mapping from an original code hash to the original code, untouched by instrumentation.

▸ **rentByteFee**(): `BalanceOf`
- **summary**:   Price of a byte of storage per one block interval. Should be greater than 0.

▸ **rentDepositOffset**(): `BalanceOf`
- **summary**:   The amount of funds a contract should deposit in order to offset  the cost of one byte.   Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,  then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.  But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,  then it would pay 500 BU/day.

▸ **signedClaimHandicap**(): `BlockNumber`
- **summary**:   Number of block delay an extrinsic claim surcharge has.   When claim surchage is called by an extrinsic the rent is checked  for current_block - delay

▸ **storageSizeOffset**(): `u32`
- **summary**:   Size of a contract at the time of creation. This is a simple way to ensure  that empty contracts eventually gets deleted.

▸ **surchargeReward**(): `BalanceOf`
- **summary**:   Reward that is received by the party whose touch has led  to removal of a contract.

▸ **tombstoneDeposit**(): `BalanceOf`
- **summary**:   The minimum amount required to generate a tombstone.

▸ **transactionBaseFee**(): `BalanceOf`
- **summary**:   The fee to be paid for making a transaction; the base.

▸ **transactionByteFee**(): `BalanceOf`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion.

▸ **transferFee**(): `BalanceOf`
- **summary**:   The fee required to make a transfer.

___


### council

▸ **activeCouncil**(): `Vec<(AccountId,BlockNumber)>`
- **summary**:   The current council. When there's a vote going on, this should still be used for executive  matters. The block number (second element in the tuple) is the block that their position is  active until (calculated by the sum of the block number when the council member was elected  and their term duration).

▸ **approvalsOf**(`AccountId`): `Vec<bool>`
- **summary**:   A list of votes for each voter, respecting the last cleared vote index that this voter was  last active at.

▸ **candidacyBond**(): `BalanceOf`
- **summary**:   How much should be locked up in order to submit one's candidacy.

▸ **candidateCount**(): `u32`

▸ **candidates**(): `Vec<AccountId>`
- **summary**:   The present candidate list.

▸ **carryCount**(): `u32`
- **summary**:   How many runners-up should have their approvals persist until the next vote.

▸ **desiredSeats**(): `u32`
- **summary**:   Number of accounts that should be sitting on the council.

▸ **inactiveGracePeriod**(): `VoteIndex`
- **summary**:   How many vote indexes need to go by after a target voter's last vote before they can be reaped if their  approvals are moot.

▸ **lastActiveOf**(`AccountId`): `Option<VoteIndex>`
- **summary**:   The last cleared vote index that this voter was last active at.

▸ **leaderboard**(): `Option<Vec<(BalanceOf,AccountId)>>`
- **summary**:   Get the leaderboard if we;re in the presentation phase.

▸ **nextFinalize**(): `Option<(BlockNumber,u32,Vec<AccountId>)>`
- **summary**:   The accounts holding the seats that will become free on the next tally.

▸ **presentationDuration**(): `BlockNumber`
- **summary**:   How long to give each top candidate to present themselves after the vote ends.

▸ **presentSlashPerVoter**(): `BalanceOf`
- **summary**:   The punishment, per voter, if you provide an invalid presentation.

▸ **registerInfoOf**(`AccountId`): `Option<(VoteIndex,u32)>`
- **summary**:   The vote index and list slot that the candidate `who` was registered or `None` if they are not  currently registered.

▸ **snapshotedStakes**(): `Vec<BalanceOf>`
- **summary**:   The stakes as they were at the point that the vote ended.

▸ **termDuration**(): `BlockNumber`
- **summary**:   How long each position is active for.

▸ **voteCount**(): `VoteIndex`
- **summary**:   The total number of votes that have happened or are in progress.

▸ **voters**(): `Vec<AccountId>`
- **summary**:   The present voter list.

▸ **votingBond**(): `BalanceOf`
- **summary**:   How much should be locked up in order to be able to submit votes.

▸ **votingPeriod**(): `BlockNumber`
- **summary**:   How often (in blocks) to check for new votes.

___


### councilMotions

▸ **proposalCount**(): `u32`
- **summary**:   Proposals so far.

▸ **proposalOf**(`Hash`): `Option<Proposal>`
- **summary**:   Actual proposal for a given hash, if it's current.

▸ **proposals**(): `Vec<Hash>`
- **summary**:   The (hashes of) the active proposals.

▸ **voting**(`Hash`): `Option<(ProposalIndex,u32,Vec<AccountId>,Vec<AccountId>)>`
- **summary**:   Votes for a given proposal: (required_yes_votes, yes_voters, no_voters).

___


### councilVoting

▸ **cooloffPeriod**(): `BlockNumber`

▸ **councilVoteOf**(`(Hash,AccountId)`): `Option<bool>`

▸ **enactDelayPeriod**(): `BlockNumber`
- **summary**:   Number of blocks by which to delay enactment of successful, non-unanimous-council-instigated referendum proposals.

▸ **proposalOf**(`Hash`): `Option<Proposal>`

▸ **proposals**(): `Vec<(BlockNumber,Hash)>`

▸ **proposalVoters**(`Hash`): `Vec<AccountId>`

▸ **vetoedProposal**(`Hash`): `Option<(BlockNumber,Vec<AccountId>)>`

▸ **votingPeriod**(): `BlockNumber`

___


### democracy

▸ **delegations**(`AccountId`): `((AccountId,LockPeriods), Linkage<AccountId>)`
- **summary**:   Get the account (and lock periods) to which another account is delegating vote.

▸ **depositOf**(`PropIndex`): `Option<(BalanceOf,Vec<AccountId>)>`
- **summary**:   Those who have locked a deposit.

▸ **dispatchQueue**(`BlockNumber`): `Vec<Option<(Proposal,ReferendumIndex)>>`
- **summary**:   Queue of successful referenda to be dispatched.

▸ **launchPeriod**(): `BlockNumber`
- **summary**:   How often (in blocks) new public referenda are launched.

▸ **maxLockPeriods**(): `LockPeriods`
- **summary**:   The maximum number of additional lock periods a voter may offer to strengthen their vote. Multiples of `PublicDelay`.

▸ **minimumDeposit**(): `BalanceOf`
- **summary**:   The minimum amount to be used as a deposit for a public referendum proposal.

▸ **nextTally**(): `ReferendumIndex`
- **summary**:   The next referendum index that should be tallied.

▸ **proxy**(`AccountId`): `Option<AccountId>`
- **summary**:   Who is able to vote for whom. Value is the fund-holding account, key is the vote-transaction-sending account.

▸ **publicDelay**(): `BlockNumber`
- **summary**:   The delay before enactment for all public referenda.

▸ **publicPropCount**(): `PropIndex`
- **summary**:   The number of (public) proposals that have been made so far.

▸ **publicProps**(): `Vec<(PropIndex,Proposal,AccountId)>`
- **summary**:   The public proposals. Unsorted.

▸ **referendumCount**(): `ReferendumIndex`
- **summary**:   The next free referendum index, aka the number of referenda started so far.

▸ **referendumInfoOf**(`ReferendumIndex`): `Option<ReferendumInfo>`
- **summary**:   Information concerning any given referendum.

▸ **voteOf**(`(ReferendumIndex,AccountId)`): `Vote`
- **summary**:   Get the vote in a given referendum of a particular voter. The result is meaningful only if `voters_for` includes the  voter when called with the referendum (you'll get the default `Vote` value otherwise). If you don't want to check  `voters_for`, then you can also check for simple existence with `VoteOf::exists` first.

▸ **votersFor**(`ReferendumIndex`): `Vec<AccountId>`
- **summary**:   Get the voters for the current proposal.

▸ **votingPeriod**(): `BlockNumber`
- **summary**:   How often (in blocks) to check for new votes.

___


### grandpaFinality

▸ **nextForced**(): `Option<BlockNumber>`

▸ **pendingChange**(): `Option<StoredPendingChange>`

___


### indices

▸ **enumSet**(`AccountIndex`): `Vec<AccountId>`
- **summary**:   The enumeration sets.

▸ **nextEnumSet**(): `AccountIndex`
- **summary**:   The next free enumeration set.

___


### session

▸ **currentIndex**(): `BlockNumber`
- **summary**:   Current index of the session.

▸ **currentStart**(): `Moment`
- **summary**:   Timestamp when current session started.

▸ **forcingNewSession**(): `Option<bool>`
- **summary**:   New session is being forced if this entry exists; in which case, the boolean value is true if  the new session should be considered a normal rotation (rewardable) and false if the new session  should be considered exceptional (slashable).

▸ **lastLengthChange**(): `Option<BlockNumber>`
- **summary**:   Block at which the session length last changed.

▸ **nextKeyFor**(`AccountId`): `Option<SessionKey>`
- **summary**:   The next key for a given validator.

▸ **nextSessionLength**(): `Option<BlockNumber>`
- **summary**:   The next session length.

▸ **sessionLength**(): `BlockNumber`
- **summary**:   Current length of the session.

▸ **validators**(): `Vec<AccountId>`
- **summary**:   The current set of validators.

___


### staking

▸ **bonded**(`AccountId`): `Option<AccountId>`
- **summary**:   Map from all locked "stash" accounts to the controller account.

▸ **bondingDuration**(): `BlockNumber`
- **summary**:   The length of the bonding duration in eras.

▸ **currentElected**(): `Vec<AccountId>`
- **summary**:   The currently elected validator set keyed by stash account ID.

▸ **currentEra**(): `BlockNumber`
- **summary**:   The current era index.

▸ **currentEraReward**(): `BalanceOf`
- **summary**:   The accumulated reward for the current era. Reset to zero at the beginning of the era and  increased for every successfully finished session.

▸ **currentSessionReward**(): `BalanceOf`
- **summary**:   Maximum reward, per validator, that is provided per acceptable session.

▸ **forcingNewEra**(): `Option<Null>`
- **summary**:   We are forcing a new era.

▸ **invulnerables**(): `Vec<AccountId>`
- **summary**:   Any validators that may never be slashed or forcibly kicked. It's a Vec since they're easy to initialize  and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets.

▸ **lastEraLengthChange**(): `BlockNumber`
- **summary**:   The session index at which the era length last changed.

▸ **ledger**(`AccountId`): `Option<StakingLedger>`
- **summary**:   Map from all (unlocked) "controller" accounts to the info regarding the staking.

▸ **minimumValidatorCount**(): `u32`
- **summary**:   Minimum number of staking participants before emergency conditions are imposed.

▸ **nextSessionsPerEra**(): `Option<BlockNumber>`
- **summary**:   The next value of sessions per era.

▸ **nominators**(`AccountId`): `(Vec<AccountId>, Linkage<AccountId>)`
- **summary**:   The map from nominator stash key to the set of stash keys of all validators to nominate.

▸ **offlineSlash**(): `Perbill`
- **summary**:   Slash, per validator that is taken for the first time they are found to be offline.

▸ **offlineSlashGrace**(): `u32`
- **summary**:   Number of instances of offline reports before slashing begins for validators.

▸ **payee**(`AccountId`): `RewardDestination`
- **summary**:   Where the reward payment should be made. Keyed by stash.

▸ **recentlyOffline**(): `Vec<(AccountId,BlockNumber,u32)>`
- **summary**:   Most recent `RECENT_OFFLINE_COUNT` instances. (Who it was, when it was reported, how many instances they were offline for).

▸ **sessionReward**(): `Perbill`
- **summary**:   Maximum reward, per validator, that is provided per acceptable session.

▸ **sessionsPerEra**(): `BlockNumber`
- **summary**:   The length of a staking era in sessions.

▸ **slashCount**(`AccountId`): `u32`
- **summary**:   The number of times a given validator has been reported offline. This gets decremented by one each era that passes.

▸ **slotStake**(): `BalanceOf`
- **summary**:   The amount of balance actively at stake for each validator slot, currently.   This is used to derive rewards and punishments.

▸ **stakers**(`AccountId`): `Exposure`
- **summary**:   Nominators for a particular account that is in action right now. You can't iterate through validators here,  but you can find them in the Session module.   This is keyed by the stash account.

▸ **validatorCount**(): `u32`
- **summary**:   The ideal number of staking participants.

▸ **validators**(`AccountId`): `(ValidatorPrefs, Linkage<AccountId>)`
- **summary**:   The map from (wannabe) validator stash key to the preferences of that validator.

___


### sudo

▸ **key**(): `AccountId`
- **summary**:   The `AccountId` of the sudo key.

___


### system

▸ **accountNonce**(`AccountId`): `Index`
- **summary**:   Extrinsics nonce for accounts.

▸ **allExtrinsicsLen**(): `Option<u32>`
- **summary**:   Total length in bytes for all extrinsics put together, for the current block.

▸ **blockHash**(`BlockNumber`): `Hash`
- **summary**:   Map of block numbers to block hashes.

▸ **digest**(): `Digest`
- **summary**:   Digest of the current block, also part of the block header.

▸ **eventCount**(): `EventIndex`
- **summary**:   The number of events in the `Events<T>` list.

▸ **events**(): `Vec<EventRecord>`
- **summary**:   Events deposited for the current block.

▸ **eventTopics**(): `DoubleMap<Vec<(BlockNumber,EventIndex)>>`
- **summary**:   Mapping between a topic (represented by T::Hash) and a vector of indexes  of events in the `<Events<T>>` list.   The first key serves no purpose. This field is declared as double_map just  for convenience of using `remove_prefix`.   All topic vectors have deterministic storage locations depending on the topic. This  allows light-clients to leverage the changes trie storage tracking mechanism and  in case of changes fetch the list of events of interest.   The value has the type `(T::BlockNumber, EventIndex)` because if we used only just  the `EventIndex` then in case if the topic has the same contents on the next block  no notification will be triggered thus the event might be lost.

▸ **extrinsicCount**(): `Option<u32>`
- **summary**:   Total extrinsics count for the current block.

▸ **extrinsicData**(`u32`): `Bytes`
- **summary**:   Extrinsics data for the current block (maps an extrinsic's index to its data).

▸ **extrinsicsRoot**(): `Hash`
- **summary**:   Extrinsics root of the current block, also part of the block header.

▸ **number**(): `BlockNumber`
- **summary**:   The current block number being processed. Set by `execute_block`.

▸ **parentHash**(): `Hash`
- **summary**:   Hash of the previous block.

▸ **randomMaterial**(): `(i8,Vec<Hash>)`
- **summary**:   Series of block headers from the last 81 blocks that acts as random seed material. This is arranged as a  ring buffer with the `i8` prefix being the index into the `Vec` of the oldest hash.

___


### timestamp

▸ **blockPeriod**(): `Option<Moment>`
- **summary**:   Old storage item provided for compatibility. Remove after all networks upgraded.

▸ **didUpdate**(): `bool`
- **summary**:   Did the timestamp get updated in this block?

▸ **minimumPeriod**(): `Moment`
- **summary**:   The minimum period between blocks. Beware that this is different to the *expected* period  that the block production apparatus provides. Your chosen consensus system will generally  work with this to determine a sensible block time. e.g. For Aura, it will be double this  period on default settings.

▸ **now**(): `Moment`
- **summary**:   Current time for the current block.

___


### treasury

▸ **approvals**(): `Vec<ProposalIndex>`
- **summary**:   Proposal indices that have been approved but not yet awarded.

▸ **burn**(): `Permill`
- **summary**:   Percentage of spare funds (if any) that are burnt per spend period.

▸ **pot**(): `BalanceOf`
- **summary**:   Total funds available to this module for spending.

▸ **proposalBond**(): `Permill`
- **summary**:   Proportion of funds that should be bonded in order to place a proposal. An accepted  proposal gets these back. A rejected proposal doesn't.

▸ **proposalBondMinimum**(): `BalanceOf`
- **summary**:   Minimum amount of funds that should be placed in a deposit for making a proposal.

▸ **proposalCount**(): `ProposalIndex`
- **summary**:   Number of proposals that have been made.

▸ **proposals**(`ProposalIndex`): `Option<TreasuryProposal>`
- **summary**:   Proposals that have been made.

▸ **spendPeriod**(): `BlockNumber`
- **summary**:   Period between successive spends.

---

### substrate

_These are keys that are always available to the runtime implementation_

▸ **authorityCount**(): `u32`
- **summary**: Number of authorities.

▸ **authorityPrefix**(): `u32`
- **summary**: Prefix under which authorities are stored.

▸ **changesTrieConfig**(): `u32`
- **summary**: Changes trie configuration is stored under this key.

▸ **code**(): `Bytes`
- **summary**: Wasm code of the runtime.

▸ **extrinsicIndex**(): `u32`
- **summary**: Current extrinsic index (u32) is stored under this key.

▸ **heapPages**(): `u64`
- **summary**: Number of wasm linear memory pages required for execution of the runtime.

---
