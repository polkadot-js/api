## Storage

_The following sections contain Storage methods are part of the default Substrate runtime._
- **[balances](#balances)**

- **[consensus](#consensus)**

- **[contract](#contract)**

- **[council](#council)**

- **[councilMotions](#councilMotions)**

- **[councilVoting](#councilVoting)**

- **[democracy](#democracy)**

- **[fees](#fees)**

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
- **summary**:   The fee required to create an account. At least as big as ReclaimRebate.

▸ **existentialDeposit**(): `Balance`
- **summary**:   The minimum amount allowed to keep an account open.

▸ **freeBalance**(`AccountId`): `Balance`
- **summary**:   The 'free' balance of a given account.   This is the only balance that matters in terms of most operations on tokens. It is  alone used to determine the balance when in the contract execution environment. When this  balance falls below the value of `ExistentialDeposit`, then the 'current account' is  deleted: specifically `FreeBalance`. Furthermore, `OnFreeBalanceZero` callback  is invoked, giving a chance to external modules to cleanup data associated with  the deleted account.   `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets  collapsed to zero if it ever becomes less than `ExistentialDeposit`.

▸ **reservedBalance**(`AccountId`): `Balance`
- **summary**:   The amount of the balance of a given account that is externally reserved; this can still get  slashed, but gets slashed last of all.   This balance is a 'reserve' balance that other subsystems use in order to set aside tokens  that are still 'owned' by the account holder, but which are suspendable. (This is different  and wholly unrelated to the `Bondage` system used in the staking module.)   When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'  is deleted: specifically, `ReservedBalance`.   `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets  collapsed to zero if it ever becomes less than `ExistentialDeposit`.

▸ **totalIssuance**(): `Balance`
- **summary**:   The total amount of stake on the system.

▸ **transferFee**(): `Balance`
- **summary**:   The fee required to make a transfer.

▸ **vesting**(`AccountId`): `Option<VestingSchedule>`
- **summary**:   Information regarding the vesting of a given account.

___


### consensus

▸ **originalAuthorities**(): `Option<Vec<SessionKey>>`

___


### contract

▸ **blockGasLimit**(): `Gas`
- **summary**:   The maximum amount of gas that could be expended per block.

▸ **callBaseFee**(): `Gas`
- **summary**:   The fee charged for a call into a contract.

▸ **codeHashOf**(`AccountId`): `Option<CodeHash>`
- **summary**:   The code associated with a given account.

▸ **codeStorage**(`CodeHash`): `Option<PrefabWasmModule>`
- **summary**:   A mapping between an original code hash and instrumented wasm code, ready for the execution.

▸ **contractFee**(): `Balance`
- **summary**:   The fee required to create a contract. At least as big as staking's ReclaimRebate.

▸ **createBaseFee**(): `Gas`
- **summary**:   The fee charged for a create of a contract.

▸ **currentSchedule**(): `Schedule`
- **summary**:   Current cost schedule for contracts.

▸ **gasPrice**(): `Balance`
- **summary**:   The price of one unit of gas.

▸ **gasSpent**(): `Gas`
- **summary**:   Gas spent so far in this block.

▸ **maxDepth**(): `u32`
- **summary**:   The maximum nesting level of a call/create stack.

▸ **pristineCode**(`CodeHash`): `Option<Bytes>`
- **summary**:   A mapping from an original code hash to the original code, untouched by instrumentation.

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

▸ **nextFinalise**(): `Option<(BlockNumber,u32,Vec<AccountId>)>`
- **summary**:   The accounts holding the seats that will become free on the next tally.

▸ **presentSlashPerVoter**(): `BalanceOf`
- **summary**:   The punishment, per voter, if you provide an invalid presentation.

▸ **presentationDuration**(): `BlockNumber`
- **summary**:   How long to give each top candidate to present themselves after the vote ends.

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

▸ **proposalVoters**(`Hash`): `Vec<AccountId>`

▸ **proposals**(): `Vec<(BlockNumber,Hash)>`

▸ **vetoedProposal**(`Hash`): `Option<(BlockNumber,Vec<AccountId>)>`

▸ **votingPeriod**(): `BlockNumber`

___


### democracy

▸ **bondage**(`AccountId`): `BlockNumber`
- **summary**:   The block at which the `who`'s funds become liquid.

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

▸ **publicDelay**(): `BlockNumber`
- **summary**:   The delay before enactment for all public referenda.

▸ **publicPropCount**(): `PropIndex`
- **summary**:   The number of (public) proposals that have been made so far.

▸ **publicProps**(): `Vec<(PropIndex,Proposal,AccountId)>`
- **summary**:   The public proposals. Unsorted.

▸ **referendumCount**(): `ReferendumIndex`
- **summary**:   The next free referendum index, aka the number of referendums started so far.

▸ **referendumInfoOf**(`ReferendumIndex`): `Option<ReferendumInfo>`
- **summary**:   Information concerning any given referendum.

▸ **voteOf**(`(ReferendumIndex,AccountId)`): `Vote`
- **summary**:   Get the vote in a given referendum of a particular voter. The result is meaningful only if `voters_for` includes the  voter when called with the referendum (you'll get the default `Vote` value otherwise). If you don't want to check  `voters_for`, then you can also check for simple existence with `VoteOf::exists` first.

▸ **votersFor**(`ReferendumIndex`): `Vec<AccountId>`
- **summary**:   Get the voters for the current proposal.

▸ **votingPeriod**(): `BlockNumber`
- **summary**:   How often (in blocks) to check for new votes.

___


### fees

▸ **currentTransactionFee**(`u32`): `AssetOf`
- **summary**:   The `extrinsic_index => accumulated_fees` map, containing records to  track the overall charged fees for each transaction.   All records should be removed at finalise stage.

▸ **transactionBaseFee**(): `AssetOf`
- **summary**:   The fee to be paid for making a transaction; the base.

▸ **transactionByteFee**(): `AssetOf`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion.

___


### grandpaFinality

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
- **summary**:   New session is being forced is this entry exists; in which case, the boolean value is whether  the new session should be considered a normal rotation (rewardable) or exceptional (slashable).

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

▸ **bondage**(`AccountId`): `BlockNumber`
- **summary**:   The block at which the `who`'s funds become entirely liquid.

▸ **bondingDuration**(): `BlockNumber`
- **summary**:   The length of the bonding duration in blocks.

▸ **currentEra**(): `BlockNumber`
- **summary**:   The current era index.

▸ **currentNominatorsFor**(`AccountId`): `Vec<AccountId>`
- **summary**:   Nominators for a particular account that is in action right now.

▸ **currentOfflineSlash**(): `BalanceOf`
- **summary**:   Slash, per validator that is taken for the first time they are found to be offline.

▸ **currentSessionReward**(): `BalanceOf`
- **summary**:   Maximum reward, per validator, that is provided per acceptable session.

▸ **forcingNewEra**(): `Option<Null>`
- **summary**:   We are forcing a new era.

▸ **intentions**(): `Vec<AccountId>`
- **summary**:   All the accounts with a desire to stake.

▸ **invulerables**(): `Vec<AccountId>`
- **summary**:   Any validators that may never be slashed or forcible kicked. It's a Vec since they're easy to initialise  and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets.

▸ **lastEraLengthChange**(): `BlockNumber`
- **summary**:   The session index at which the era length last changed.

▸ **minimumValidatorCount**(): `u32`
- **summary**:   Minimum number of staking participants before emergency conditions are imposed.

▸ **nextSessionsPerEra**(): `Option<BlockNumber>`
- **summary**:   The next value of sessions per era.

▸ **nominating**(`AccountId`): `Option<AccountId>`
- **summary**:   All nominator -> nominee relationships.

▸ **nominatorsFor**(`AccountId`): `Vec<AccountId>`
- **summary**:   Nominators for a particular account.

▸ **offlineSlash**(): `Perbill`
- **summary**:   Slash, per validator that is taken for the first time they are found to be offline.

▸ **offlineSlashGrace**(): `u32`
- **summary**:   Number of instances of offline reports before slashing begins for validators.

▸ **recentlyOffline**(): `Vec<(AccountId,BlockNumber,u32)>`
- **summary**:   Most recent `RECENT_OFFLINE_COUNT` instances. (who it was, when it was reported, how many instances they were offline for).

▸ **sessionReward**(): `Perbill`
- **summary**:   Maximum reward, per validator, that is provided per acceptable session.

▸ **sessionsPerEra**(): `BlockNumber`
- **summary**:   The length of a staking era in sessions.

▸ **slashCount**(`AccountId`): `u32`
- **summary**:   The number of times a given validator has been reported offline. This gets decremented by one each era that passes.

▸ **stakeRange**(): `(BalanceOf,BalanceOf)`
- **summary**:   The highest and lowest staked validator slashable balances.

▸ **validatorCount**(): `u32`
- **summary**:   The ideal number of staking participants.

▸ **validatorPreferences**(`AccountId`): `ValidatorPrefs`
- **summary**:   Preferences that a validator has.

___


### sudo

▸ **key**(): `AccountId`

___


### system

▸ **accountNonce**(`AccountId`): `Index`

▸ **allExtrinsicsLen**(): `Option<u32>`

▸ **blockHash**(`BlockNumber`): `Hash`

▸ **digest**(): `Digest`

▸ **events**(): `Vec<EventRecord>`

▸ **extrinsicCount**(): `Option<u32>`

▸ **extrinsicData**(`u32`): `Bytes`

▸ **extrinsicsRoot**(): `Hash`

▸ **number**(): `BlockNumber`
- **summary**:   The current block number being processed. Set by `execute_block`.

▸ **parentHash**(): `Hash`

▸ **randomSeed**(): `Hash`

___


### timestamp

▸ **blockPeriod**(): `Moment`
- **summary**:   The minimum (and advised) period between blocks.

▸ **didUpdate**(): `bool`
- **summary**:   Did the timestamp get updated in this block?

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

▸ **proposals**(`ProposalIndex`): `Option<Proposal>`
- **summary**:   Proposals that have been made.

▸ **spendPeriod**(): `BlockNumber`
- **summary**:   Period between successive spends.

---

### substrate

_These are keys that are always available to the runtime implementation_

▸ **authorityCount**(): `u32`
- **summary**: Number of authorities.

▸ **authorityPrefix**(): `u32`
- **summary**: Prefix under which authorities are storied.

▸ **changesTrieConfig**(): `u32`
- **summary**: Changes trie configuration is stored under this key.

▸ **code**(): `Bytes`
- **summary**: Wasm code of the runtime.

▸ **extrinsicIndex**(): `u32`
- **summary**: Current extrinsic index (u32) is stored under this key.

▸ **heapPages**(): `u64`
- **summary**: Number of wasm linear memory pages required for execution of the runtime.

---
