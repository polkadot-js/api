## Storage

_The following sections contain Storage methods are part of the default Substrate runtime._
- **[aura](#aura)**

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[collective](#collective)**

- **[collective](#collective)**

- **[contracts](#contracts)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[indices](#indices)**

- **[session](#session)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**

- **[substrate](#substrate)**


___


### aura

▸ **authorities**(): `Vec<AuthorityId>`
- **summary**:   The current authorities

▸ **lastTimestamp**(): `Moment`
- **summary**:   The last timestamp.

___


### authorship

▸ **author**(): `Option<AccountId>`
- **summary**:   Author of current block.

▸ **didSetUncles**(): `bool`
- **summary**:   Whether uncles were already set in this block.

▸ **uncles**(): `Vec<UncleEntryItem>`
- **summary**:   Uncles

___


### balances

▸ **freeBalance**(`AccountId`): `Balance`
- **summary**:   The 'free' balance of a given account.   This is the only balance that matters in terms of most operations on tokens. It  alone is used to determine the balance when in the contract execution environment. When this  balance falls below the value of `ExistentialDeposit`, then the 'current account' is  deleted: specifically `FreeBalance`. Further, the `OnFreeBalanceZero` callback  is invoked, giving a chance to external modules to clean up data associated with  the deleted account.   `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets  collapsed to zero if it ever becomes less than `ExistentialDeposit`.

▸ **locks**(`AccountId`): `Vec<BalanceLock>`
- **summary**:   Any liquidity locks on some account balances.

▸ **reservedBalance**(`AccountId`): `Balance`
- **summary**:   The amount of the balance of a given account that is externally reserved; this can still get  slashed, but gets slashed last of all.   This balance is a 'reserve' balance that other subsystems use in order to set aside tokens  that are still 'owned' by the account holder, but which are suspendable.   When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'  is deleted: specifically, `ReservedBalance`.   `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets  collapsed to zero if it ever becomes less than `ExistentialDeposit`.)

▸ **totalIssuance**(): `Balance`
- **summary**:   The total units issued in the system.

▸ **vesting**(`AccountId`): `Option<VestingSchedule>`
- **summary**:   Information regarding the vesting of a given account.

___


### collective

▸ **members**(): `Vec<AccountId>`
- **summary**:   The current members of the collective. This is stored sorted (just by value).

▸ **proposalCount**(): `u32`
- **summary**:   Proposals so far.

▸ **proposalOf**(`Hash`): `Option<Proposal>`
- **summary**:   Actual proposal for a given hash, if it's current.

▸ **proposals**(): `Vec<Hash>`
- **summary**:   The hashes of the active proposals.

▸ **voting**(`Hash`): `Option<Votes>`
- **summary**:   Votes on a given proposal, if it is ongoing.

___


### collective

▸ **members**(): `Vec<AccountId>`
- **summary**:   The current members of the collective. This is stored sorted (just by value).

▸ **proposalCount**(): `u32`
- **summary**:   Proposals so far.

▸ **proposalOf**(`Hash`): `Option<Proposal>`
- **summary**:   Actual proposal for a given hash, if it's current.

▸ **proposals**(): `Vec<Hash>`
- **summary**:   The hashes of the active proposals.

▸ **voting**(`Hash`): `Option<Votes>`
- **summary**:   Votes on a given proposal, if it is ongoing.

___


### contracts

▸ **accountCounter**(): `u64`
- **summary**:   The subtrie counter.

▸ **codeStorage**(`CodeHash`): `Option<PrefabWasmModule>`
- **summary**:   A mapping between an original code hash and instrumented wasm code, ready for execution.

▸ **contractInfoOf**(`AccountId`): `Option<ContractInfo>`
- **summary**:   The code associated with a given account.

▸ **currentSchedule**(): `Schedule`
- **summary**:   Current cost schedule for contracts.

▸ **gasPrice**(): `BalanceOf`
- **summary**:   The price of one unit of gas.

▸ **gasSpent**(): `Gas`
- **summary**:   Gas spent so far in this block.

▸ **pristineCode**(`CodeHash`): `Option<Bytes>`
- **summary**:   A mapping from an original code hash to the original code, untouched by instrumentation.

___


### democracy

▸ **blacklist**(`Hash`): `Option<(BlockNumber,Vec<AccountId>)>`
- **summary**:   A record of who vetoed what. Maps proposal hash to a possible existent block number  (until when it may not be resubmitted) and who vetoed it.

▸ **cancellations**(`Hash`): `bool`
- **summary**:   Record of all proposals that have been subject to emergency cancellation.

▸ **delegations**(`AccountId`): `((AccountId,Conviction), Linkage<AccountId>)`
- **summary**:   Get the account (and lock periods) to which another account is delegating vote.

▸ **depositOf**(`PropIndex`): `Option<(BalanceOf,Vec<AccountId>)>`
- **summary**:   Those who have locked a deposit.

▸ **dispatchQueue**(`BlockNumber`): `Vec<Option<(Proposal,ReferendumIndex)>>`
- **summary**:   Queue of successful referenda to be dispatched.

▸ **lastTabledWasExternal**(): `bool`
- **summary**:   True if the last referendum tabled was submitted externally. False if it was a public  proposal.

▸ **nextExternal**(): `Option<(Proposal,VoteThreshold)>`
- **summary**:   The referendum to be tabled whenever it would be valid to table an external proposal.  This happens when a referendum needs to be tabled and one of two conditions are met:  - `LastTabledWasExternal` is `false`; or  - `PublicProps` is empty.

▸ **nextTally**(): `ReferendumIndex`
- **summary**:   The next referendum index that should be tallied.

▸ **proxy**(`AccountId`): `Option<AccountId>`
- **summary**:   Who is able to vote for whom. Value is the fund-holding account, key is the  vote-transaction-sending account.

▸ **publicPropCount**(): `PropIndex`
- **summary**:   The number of (public) proposals that have been made so far.

▸ **publicProps**(): `Vec<(PropIndex,Proposal,AccountId)>`
- **summary**:   The public proposals. Unsorted.

▸ **referendumCount**(): `ReferendumIndex`
- **summary**:   The next free referendum index, aka the number of referenda started so far.

▸ **referendumInfoOf**(`ReferendumIndex`): `Option<ReferendumInfo>`
- **summary**:   Information concerning any given referendum.

▸ **voteOf**(`(ReferendumIndex,AccountId)`): `Vote`
- **summary**:   Get the vote in a given referendum of a particular voter. The result is meaningful only  if `voters_for` includes the voter when called with the referendum (you'll get the  default `Vote` value otherwise). If you don't want to check `voters_for`, then you can  also check for simple existence with `VoteOf::exists` first.

▸ **votersFor**(`ReferendumIndex`): `Vec<AccountId>`
- **summary**:   Get the voters for the current proposal.

___


### elections

▸ **approvalsOf**(`(AccountId,SetIndex)`): `Vec<ApprovalFlag>`
- **summary**:   A list of votes for each voter. The votes are stored as numeric values and parsed in a bit-wise manner.   In order to get a human-readable representation (`Vec<bool>`), use [`all_approvals_of`].   Furthermore, each vector of scalars is chunked with the cap of `APPROVAL_SET_SIZE`.

▸ **candidateCount**(): `u32`
- **summary**:   Current number of active candidates

▸ **candidates**(): `Vec<AccountId>`
- **summary**:   The present candidate list.

▸ **desiredSeats**(): `u32`
- **summary**:   Number of accounts that should constitute the collective.

▸ **leaderboard**(): `Option<Vec<(BalanceOf,AccountId)>>`
- **summary**:   Get the leaderboard if we're in the presentation phase. The first element is the weight of each entry;  It may be the direct summed approval stakes, or a weighted version of it.

▸ **members**(): `Vec<(AccountId,BlockNumber)>`
- **summary**:   The current membership. When there's a vote going on, this should still be used for executive  matters. The block number (second element in the tuple) is the block that their position is  active until (calculated by the sum of the block number when the member was elected  and their term duration).

▸ **nextFinalize**(): `Option<(BlockNumber,u32,Vec<AccountId>)>`
- **summary**:   The accounts holding the seats that will become free on the next tally.

▸ **nextVoterSet**(): `SetIndex`
- **summary**:   the next free set to store a voter in. This will keep growing.

▸ **presentationDuration**(): `BlockNumber`
- **summary**:   How long to give each top candidate to present themselves after the vote ends.

▸ **proxy**(`AccountId`): `Option<AccountId>`
- **summary**:   Who is able to vote for whom. Value is the fund-holding account, key is the  vote-transaction-sending account.

▸ **registerInfoOf**(`AccountId`): `Option<(VoteIndex,u32)>`
- **summary**:   The vote index and list slot that the candidate `who` was registered or `None` if they are not  currently registered.

▸ **termDuration**(): `BlockNumber`
- **summary**:   How long each position is active for.

▸ **voteCount**(): `VoteIndex`
- **summary**:   The total number of vote rounds that have happened or are in progress.

▸ **voterCount**(): `SetIndex`
- **summary**:   Current number of Voters.

▸ **voterInfoOf**(`AccountId`): `Option<VoterInfo>`
- **summary**:   Basic information about a voter.

▸ **voters**(`SetIndex`): `Vec<Option<AccountId>>`
- **summary**:   The present voter list (chunked and capped at [`VOTER_SET_SIZE`]).

___


### grandpa

▸ **authorities**(): `Vec<(AuthorityId,AuthorityWeight)>`
- **summary**:   The current authority set.

▸ **nextForced**(): `Option<BlockNumber>`
- **summary**:   next block number where we can force a change.

▸ **pendingChange**(): `Option<StoredPendingChange>`
- **summary**:   Pending change: (signaled at, scheduled change).

▸ **stalled**(): `Option<(BlockNumber,BlockNumber)>`
- **summary**:   `true` if we are currently stalled.

___


### indices

▸ **enumSet**(`AccountIndex`): `Vec<AccountId>`
- **summary**:   The enumeration sets.

▸ **nextEnumSet**(): `AccountIndex`
- **summary**:   The next free enumeration set.

___


### session

▸ **changed**(): `bool`
- **summary**:   True if anything has changed in this session.

▸ **currentIndex**(): `SessionIndex`
- **summary**:   Current index of the session.

▸ **queuedChanged**(): `bool`
- **summary**:   Queued keys changed.

▸ **queuedKeys**(): `Vec<(ValidatorId,Keys)>`
- **summary**:   The queued keys for the next session. When the next session begins, these keys  will be used to determine the validator's session keys.

▸ **validators**(): `Vec<ValidatorId>`
- **summary**:   The current set of validators.

___


### staking

▸ **bonded**(`AccountId`): `Option<AccountId>`
- **summary**:   Map from all locked "stash" accounts to the controller account.

▸ **bondedEras**(): `Vec<(EraIndex,SessionIndex)>`
- **summary**:   A mapping from still-bonded eras to the first session index of that era.

▸ **currentElected**(): `Vec<AccountId>`
- **summary**:   The currently elected validator set keyed by stash account ID.

▸ **currentEra**(): `EraIndex`
- **summary**:   The current era index.

▸ **currentEraReward**(): `BalanceOf`
- **summary**:   The accumulated reward for the current era. Reset to zero at the beginning of the era  and increased for every successfully finished session.

▸ **currentSessionReward**(): `BalanceOf`
- **summary**:   Maximum reward, per validator, that is provided per acceptable session.

▸ **forceNewEra**(): `bool`
- **summary**:   True if the next session change will be a new era regardless of index.

▸ **invulnerables**(): `Vec<AccountId>`
- **summary**:   Any validators that may never be slashed or forcibly kicked. It's a Vec since they're  easy to initialize and the performance hit is minimal (we expect no more than four  invulnerables) and restricted to testnets.

▸ **ledger**(`AccountId`): `Option<StakingLedger>`
- **summary**:   Map from all (unlocked) "controller" accounts to the info regarding the staking.

▸ **minimumValidatorCount**(): `u32`
- **summary**:   Minimum number of staking participants before emergency conditions are imposed.

▸ **nominators**(`AccountId`): `(Vec<AccountId>, Linkage<AccountId>)`
- **summary**:   The map from nominator stash key to the set of stash keys of all validators to nominate.

▸ **offlineSlash**(): `Perbill`
- **summary**:   Slash, per validator that is taken for the first time they are found to be offline.

▸ **offlineSlashGrace**(): `u32`
- **summary**:   Number of instances of offline reports before slashing begins for validators.

▸ **payee**(`AccountId`): `RewardDestination`
- **summary**:   Where the reward payment should be made. Keyed by stash.

▸ **recentlyOffline**(): `Vec<(AccountId,BlockNumber,u32)>`
- **summary**:   Most recent `RECENT_OFFLINE_COUNT` instances. (Who it was, when it was reported, how  many instances they were offline for).

▸ **sessionReward**(): `Perbill`
- **summary**:   Maximum reward, per validator, that is provided per acceptable session.

▸ **slashCount**(`AccountId`): `u32`
- **summary**:   The number of times a given validator has been reported offline. This gets decremented  by one each era that passes.

▸ **slotStake**(): `BalanceOf`
- **summary**:   The amount of balance actively at stake for each validator slot, currently.   This is used to derive rewards and punishments.

▸ **stakers**(`AccountId`): `Exposure`
- **summary**:   Nominators for a particular account that is in action right now. You can't iterate  through validators here, but you can find them in the Session module.   This is keyed by the stash account.

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

▸ **allExtrinsicsWeight**(): `Option<u32>`
- **summary**:   Total weight for all extrinsics put together, for the current block.

▸ **blockHash**(`BlockNumber`): `Hash`
- **summary**:   Map of block numbers to block hashes.

▸ **digest**(): `DigestOf`
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

▸ **proposalCount**(): `ProposalIndex`
- **summary**:   Number of proposals that have been made.

▸ **proposals**(`ProposalIndex`): `Option<TreasuryProposal>`
- **summary**:   Proposals that have been made.

---

### substrate

_These are keys that are always available to the runtime implementation_

▸ **changesTrieConfig**(): `u32`
- **summary**: Changes trie configuration is stored under this key.

▸ **childStorageKeyPrefix**(): `u32`
- **summary**: Prefix of child storage keys.

▸ **code**(): `Bytes`
- **summary**: Wasm code of the runtime.

▸ **extrinsicIndex**(): `u32`
- **summary**: Current extrinsic index (u32) is stored under this key.

▸ **heapPages**(): `u64`
- **summary**: Number of wasm linear memory pages required for execution of the runtime.

---
