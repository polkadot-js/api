## <a id='top' style='text-decoration: none;'>Storage

_The following sections contain Storage methods are part of the default Substrate runtime._
- **[balances](#balances)**

- **[consensus](#consensus)**

- **[contract](#contract)**

- **[council](#council)**

- **[councilMotions](#councilMotions)**

- **[councilVoting](#councilVoting)**

- **[democracy](#democracy)**

- **[session](#session)**

- **[staking](#staking)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[treasury](#treasury)**


___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='balances'></a>balances

▸ **creationFee**(): `Balance`
- **summary**:   The fee required to create an account. At least as big as ReclaimRebate.

▸ **enumSet**(`AccountIndex`): `Vec<AccountId>`
- **summary**:   The enumeration sets.

▸ **existentialDeposit**(): `Balance`
- **summary**:   The minimum amount allowed to keep an account open.

▸ **freeBalance**(`AccountId`): `Balance`
- **summary**:   The 'free' balance of a given account.   This is the only balance that matters in terms of most operations on tokens. It is  alone used to determine the balance when in the contract execution environment. When this  balance falls below the value of `ExistentialDeposit`, then the 'current account' is  deleted: specifically `FreeBalance`. Furthermore, `OnFreeBalanceZero` callback  is invoked, giving a chance to external modules to cleanup data associated with  the deleted account.   `system::AccountNonce` is also deleted if `ReservedBalance` is also zero (it also gets  collapsed to zero if it ever becomes less than `ExistentialDeposit`.

▸ **nextEnumSet**(): `AccountIndex`
- **summary**:   The next free enumeration set.

▸ **reclaimRebate**(): `Balance`
- **summary**:   The amount credited to a destination's account whose index was reclaimed.

▸ **reservedBalance**(`AccountId`): `Balance`
- **summary**:   The amount of the balance of a given account that is externally reserved; this can still get  slashed, but gets slashed last of all.   This balance is a 'reserve' balance that other subsystems use in order to set aside tokens  that are still 'owned' by the account holder, but which are suspendable. (This is different  and wholly unrelated to the `Bondage` system used in the staking module.)   When this balance falls below the value of `ExistentialDeposit`, then this 'reserve account'  is deleted: specifically, `ReservedBalance`.   `system::AccountNonce` is also deleted if `FreeBalance` is also zero (it also gets  collapsed to zero if it ever becomes less than `ExistentialDeposit`.

▸ **totalIssuance**(): `Balance`
- **summary**:   The total amount of stake on the system.

▸ **transactionBaseFee**(): `Balance`
- **summary**:   The fee to be paid for making a transaction; the base.

▸ **transactionByteFee**(): `Balance`
- **summary**:   The fee to be paid for making a transaction; the per-byte portion.

▸ **transferFee**(): `Balance`
- **summary**:   The fee required to make a transfer.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='consensus'></a>consensus

▸ **originalAuthorities**(): `Vec<SessionKey>`

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='council'></a>council

▸ **activeCouncil**(): `Vec<(AccountId, BlockNumber)>`
- **summary**:   The current council. When there's a vote going on, this should still be used for executive  matters.

▸ **approvalsOf**(`AccountId`): `Vec<bool>`
- **summary**:   The last cleared vote index that this voter was last active at.

▸ **candidacyBond**(): `Balance`
- **summary**:   How much should be locked up in order to submit one's candidacy.

▸ **candidateCount**(): `u32`

▸ **candidates**(): `Vec<AccountId>`
- **summary**:   The present candidate list.

▸ **carryCount**(): `u32`
- **summary**:   How many runners-up should have their approvals persist until the next vote.

▸ **desiredSeats**(): `u32`
- **summary**:   Number of accounts that should be sitting on the council.

▸ **inactiveGracePeriod**(): `VoteIndex`
- **summary**:   How many votes need to go by after a voter's last vote before they can be reaped if their  approvals are moot.

▸ **lastActiveOf**(`AccountId`): `VoteIndex`
- **summary**:   The last cleared vote index that this voter was last active at.

▸ **leaderboard**(): `Vec<(Balance, AccountId)>`
- **summary**:   Get the leaderboard if we;re in the presentation phase.

▸ **nextFinalise**(): `(BlockNumber, u32, Vec<AccountId>)`
- **summary**:   The accounts holding the seats that will become free on the next tally.

▸ **presentSlashPerVoter**(): `Balance`
- **summary**:   The punishment, per voter, if you provide an invalid presentation.

▸ **presentationDuration**(): `BlockNumber`
- **summary**:   How long to give each top candidate to present themselves after the vote ends.

▸ **registerInfoOf**(`AccountId`): `(VoteIndex, u32)`
- **summary**:   The vote index and list slot that the candidate `who` was registered or `None` if they are not  currently registered.

▸ **snapshotedStakes**(): `Vec<Balance>`
- **summary**:   The stakes as they were at the point that the vote ended.

▸ **termDuration**(): `BlockNumber`
- **summary**:   How long each position is active for.

▸ **voteCount**(): `VoteIndex`
- **summary**:   The total number of votes that have happened or are in progress.

▸ **voters**(): `Vec<AccountId>`
- **summary**:   The present voter list.

▸ **votingBond**(): `Balance`
- **summary**:   How much should be locked up in order to be able to submit votes.

▸ **votingPeriod**(): `BlockNumber`
- **summary**:   How often (in blocks) to check for new votes.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='councilMotions'></a>councilMotions

▸ **proposalCount**(): `u32`
- **summary**:   Proposals so far.

▸ **proposalOf**(`Hash`): `Proposal`
- **summary**:   Actual proposal for a given hash, if it's current.

▸ **proposals**(): `Vec<Hash>`
- **summary**:   The (hashes of) the active proposals.

▸ **voting**(`Hash`): `(ProposalIndex, u32, Vec<AccountId>, Vec<AccountId>)`
- **summary**:   Votes for a given proposal: (required_yes_votes, yes_voters, no_voters).

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='councilVoting'></a>councilVoting

▸ **cooloffPeriod**(): `BlockNumber`

▸ **councilVoteOf**(`(Hash, AccountId)`): `bool`

▸ **proposalOf**(`Hash`): `Proposal`

▸ **proposalVoters**(`Hash`): `Vec<AccountId>`

▸ **proposals**(): `Vec<(BlockNumber, Hash)>`

▸ **vetoedProposal**(`Hash`): `(BlockNumber, Vec<AccountId>)`

▸ **votingPeriod**(): `BlockNumber`

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='democracy'></a>democracy

▸ **depositOf**(`PropIndex`): `(Balance, Vec<AccountId>)`
- **summary**:   Those who have locked a deposit.

▸ **launchPeriod**(): `BlockNumber`
- **summary**:   How often (in blocks) new public referenda are launched.

▸ **minimumDeposit**(): `Balance`
- **summary**:   The minimum amount to be used as a deposit for a public referendum proposal.

▸ **nextTally**(): `ReferendumIndex`
- **summary**:   The next referendum index that should be tallied.

▸ **publicPropCount**(): `PropIndex`
- **summary**:   The number of (public) proposals that have been made so far.

▸ **publicProps**(): `Vec<(PropIndex, Proposal, AccountId)>`
- **summary**:   The public proposals. Unsorted.

▸ **referendumCount**(): `ReferendumIndex`
- **summary**:   The next free referendum index, aka the number of referendums started so far.

▸ **referendumInfoOf**(`ReferendumIndex`): `(BlockNumber, Proposal, VoteThreshold)`
- **summary**:   Information concerning any given referendum.

▸ **voteOf**(`(ReferendumIndex, AccountId)`): `bool`
- **summary**:   Get the vote, if Some, of `who`.

▸ **votersFor**(`ReferendumIndex`): `Vec<AccountId>`
- **summary**:   Get the voters for the current proposal.

▸ **votingPeriod**(): `BlockNumber`
- **summary**:   How often (in blocks) to check for new votes.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='session'></a>session

▸ **currentIndex**(): `BlockNumber`
- **summary**:   Current index of the session.

▸ **currentStart**(): `Moment`
- **summary**:   Timestamp when current session started.

▸ **forcingNewSession**(): `bool`
- **summary**:   New session is being forced is this entry exists; in which case, the boolean value is whether  the new session should be considered a normal rotation (rewardable) or exceptional (slashable).

▸ **lastLengthChange**(): `BlockNumber`
- **summary**:   Block at which the session length last changed.

▸ **nextKeyFor**(`AccountId`): `SessionKey`
- **summary**:   The next key for a given validator.

▸ **nextSessionLength**(): `BlockNumber`
- **summary**:   The next session length.

▸ **sessionLength**(): `BlockNumber`
- **summary**:   Current length of the session.

▸ **validators**(): `Vec<AccountId>`
- **summary**:   The current set of validators.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='staking'></a>staking

▸ **bondage**(`AccountId`): `BlockNumber`
- **summary**:   The block at which the `who`'s funds become entirely liquid.

▸ **bondingDuration**(): `BlockNumber`
- **summary**:   The length of the bonding duration in blocks.

▸ **currentEra**(): `BlockNumber`
- **summary**:   The current era index.

▸ **currentNominatorsFor**(`AccountId`): `Vec<AccountId>`
- **summary**:   Nominators for a particular account that is in action right now.

▸ **currentOfflineSlash**(): `Balance`
- **summary**:   Slash, per validator that is taken for the first time they are found to be offline.

▸ **currentSessionReward**(): `Balance`
- **summary**:   Maximum reward, per validator, that is provided per acceptable session.

▸ **forcingNewEra**(): `()`
- **summary**:   We are forcing a new era.

▸ **intentions**(): `Vec<AccountId>`
- **summary**:   All the accounts with a desire to stake.

▸ **lastEraLengthChange**(): `BlockNumber`
- **summary**:   The session index at which the era length last changed.

▸ **minimumValidatorCount**(): `u32`
- **summary**:   Minimum number of staking participants before emergency conditions are imposed.

▸ **nextSessionsPerEra**(): `BlockNumber`
- **summary**:   The next value of sessions per era.

▸ **nominating**(`AccountId`): `AccountId`
- **summary**:   All nominator -> nominee relationships.

▸ **nominatorsFor**(`AccountId`): `Vec<AccountId>`
- **summary**:   Nominators for a particular account.

▸ **offlineSlash**(): `Perbill`
- **summary**:   Slash, per validator that is taken for the first time they are found to be offline.

▸ **offlineSlashGrace**(): `u32`
- **summary**:   Number of instances of offline reports before slashing begins for validators.

▸ **sessionReward**(): `Perbill`
- **summary**:   Maximum reward, per validator, that is provided per acceptable session.

▸ **sessionsPerEra**(): `BlockNumber`
- **summary**:   The length of a staking era in sessions.

▸ **slashCount**(`AccountId`): `u32`
- **summary**:   The number of times a given validator has been reported offline. This gets decremented by one each era that passes.

▸ **stakeRange**(): `(Balance, Balance)`
- **summary**:   The highest and lowest staked validator slashable balances.

▸ **validatorCount**(): `u32`
- **summary**:   The ideal number of staking participants.

▸ **validatorPreferences**(`AccountId`): `ValidatorPrefs`
- **summary**:   Preferences that a validator has.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='system'></a>system

▸ **accountNonce**(`AccountId`): `Index`

▸ **blockHash**(`BlockNumber`): `Hash`

▸ **digest**(): `Digest`

▸ **events**(): `Vec<EventRecord>`

▸ **extrinsicCount**(): `u32`

▸ **extrinsicData**(`u32`): `Bytes`

▸ **extrinsicsRoot**(): `Hash`

▸ **number**(): `BlockNumber`
- **summary**:   The current block number being processed. Set by `execute_block`.

▸ **parentHash**(): `Hash`

▸ **randomSeed**(): `Hash`

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='timestamp'></a>timestamp

▸ **blockPeriod**(): `Moment`
- **summary**:   The minimum (and advised) period between blocks.

▸ **didUpdate**(): `bool`
- **summary**:   Did the timestamp get updated in this block?

▸ **now**(): `Moment`
- **summary**:   Current time for the current block.

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='treasury'></a>treasury

▸ **approvals**(): `Vec<ProposalIndex>`
- **summary**:   Proposal indices that have been approved but not yet awarded.

▸ **burn**(): `Permill`
- **summary**:   Percentage of spare funds (if any) that are burnt per spend period.

▸ **pot**(): `Balance`
- **summary**:   Total funds available to this module for spending.

▸ **proposalBond**(): `Permill`
- **summary**:   Proportion of funds that should be bonded in order to place a proposal. An accepted  proposal gets these back. A rejected proposal doesn't.

▸ **proposalBondMinimum**(): `Balance`
- **summary**:   Minimum amount of funds that should be placed in a deposit for making a proposal.

▸ **proposalCount**(): `ProposalIndex`
- **summary**:   Number of proposals that have been made.

▸ **proposals**(`ProposalIndex`): `Proposal`
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
