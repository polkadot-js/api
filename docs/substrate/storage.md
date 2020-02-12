## Storage

The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)
- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imOnline)**

- **[indices](#indices)**

- **[offences](#offences)**

- **[randomnessCollectiveFlip](#randomnessCollectiveFlip)**

- **[recovery](#recovery)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalCommittee)**

- **[technicalMembership](#technicalMembership)**

- **[timestamp](#timestamp)**

- **[transactionPayment](#transactionPayment)**

- **[treasury](#treasury)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[substrate](#substrate)**


___


## authorship

### author(): `Option<AccountId>`
- **interface**: api.query.authorship.author
- **summary**: Author of current block.

### didSetUncles(): `bool`
- **interface**: api.query.authorship.didSetUncles
- **summary**: Whether uncles were already set in this block.

### uncles(): `Vec<UncleEntryItem>`
- **interface**: api.query.authorship.uncles
- **summary**: Uncles

___


## babe

### authorities(): `Vec<(AuthorityId,BabeAuthorityWeight)>`
- **interface**: api.query.babe.authorities
- **summary**: Current epoch authorities.

### currentSlot(): `u64`
- **interface**: api.query.babe.currentSlot
- **summary**: Current slot number.

### epochIndex(): `u64`
- **interface**: api.query.babe.epochIndex
- **summary**: Current epoch index.

### genesisSlot(): `u64`
- **interface**: api.query.babe.genesisSlot
- **summary**: The slot at which the first epoch actually started. This is 0 until the first block of the chain.

### initialized(): `Option<MaybeVrf>`
- **interface**: api.query.babe.initialized
- **summary**: Temporary value (cleared at block finalization) which is `Some` if per-block initialization has already been called for current block.

### nextRandomness(): `[u8;32]`
- **interface**: api.query.babe.nextRandomness
- **summary**: Next epoch randomness.

### randomness(): `[u8;32]`
- **interface**: api.query.babe.randomness
- **summary**: The epoch randomness for the *current* epoch.  # Security  This MUST NOT be used for gambling, as it can be influenced by a malicious validator in the short term. It MAY be used in many cryptographic protocols, however, so long as one remembers that this (like everything else on-chain) it is public. For example, it can be used where a number is needed that cannot have been chosen by an adversary, for purposes such as public-coin zero-knowledge proofs.

### segmentIndex(): `u32`
- **interface**: api.query.babe.segmentIndex
- **summary**: Randomness under construction.  We make a tradeoff between storage accesses and list length. We store the under-construction randomness in segments of up to `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.  Once a segment reaches this length, we begin the next one. We reset all segments and return to `0` at the beginning of every epoch.

### underConstruction(`u32`): `Vec<[u8;32]>`
- **interface**: api.query.babe.underConstruction

___


## balances

### account(`AccountId`): `AccountData`
- **interface**: api.query.balances.account
- **summary**: The balance of an account.  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total is ever zero, then the entry *MUST* be removed.

### isUpgraded(): `bool`
- **interface**: api.query.balances.isUpgraded
- **summary**: True if network has been upgraded to this version.  True for new networks.

### locks(`AccountId`): `Vec<BalanceLock>`
- **interface**: api.query.balances.locks
- **summary**: Any liquidity locks on some account balances. NOTE: Should only be accessed when setting, changing and freeing a lock.

### totalIssuance(): `Balance`
- **interface**: api.query.balances.totalIssuance
- **summary**: The total units issued in the system.

___


## contracts

### accountCounter(): `u64`
- **interface**: api.query.contracts.accountCounter
- **summary**: The subtrie counter.

### codeStorage(`CodeHash`): `Option<PrefabWasmModule>`
- **interface**: api.query.contracts.codeStorage
- **summary**: A mapping between an original code hash and instrumented wasm code, ready for execution.

### contractInfoOf(`AccountId`): `Option<ContractInfo>`
- **interface**: api.query.contracts.contractInfoOf
- **summary**: The code associated with a given account.

### currentSchedule(): `Schedule`
- **interface**: api.query.contracts.currentSchedule
- **summary**: Current cost schedule for contracts.

### gasPrice(): `BalanceOf`
- **interface**: api.query.contracts.gasPrice
- **summary**: The price of one unit of gas.

### gasSpent(): `Gas`
- **interface**: api.query.contracts.gasSpent
- **summary**: Gas spent so far in this block.

### pristineCode(`CodeHash`): `Option<Bytes>`
- **interface**: api.query.contracts.pristineCode
- **summary**: A mapping from an original code hash to the original code, untouched by instrumentation.

___


## council

### members(): `Vec<AccountId>`
- **interface**: api.query.council.members
- **summary**: The current members of the collective. This is stored sorted (just by value).

### proposalCount(): `u32`
- **interface**: api.query.council.proposalCount
- **summary**: Proposals so far.

### proposalOf(`Hash`): `Option<Proposal>`
- **interface**: api.query.council.proposalOf
- **summary**: Actual proposal for a given hash, if it's current.

### proposals(): `Vec<Hash>`
- **interface**: api.query.council.proposals
- **summary**: The hashes of the active proposals.

### voting(`Hash`): `Option<Votes>`
- **interface**: api.query.council.voting
- **summary**: Votes on a given proposal, if it is ongoing.

___


## democracy

### blacklist(`Hash`): `Option<(BlockNumber,Vec<AccountId>)>`
- **interface**: api.query.democracy.blacklist
- **summary**: A record of who vetoed what. Maps proposal hash to a possible existent block number (until when it may not be resubmitted) and who vetoed it.

### cancellations(`Hash`): `bool`
- **interface**: api.query.democracy.cancellations
- **summary**: Record of all proposals that have been subject to emergency cancellation.

### delegations(`AccountId`): `((AccountId,Conviction), Linkage<AccountId>)`
- **interface**: api.query.democracy.delegations
- **summary**: Get the account (and lock periods) to which another account is delegating vote.

### depositOf(`PropIndex`): `Option<(BalanceOf,Vec<AccountId>)>`
- **interface**: api.query.democracy.depositOf
- **summary**: Those who have locked a deposit.

### dispatchQueue(): `Vec<(BlockNumber,Hash,ReferendumIndex)>`
- **interface**: api.query.democracy.dispatchQueue
- **summary**: Queue of successful referenda to be dispatched. Stored ordered by block number.

### lastTabledWasExternal(): `bool`
- **interface**: api.query.democracy.lastTabledWasExternal
- **summary**: True if the last referendum tabled was submitted externally. False if it was a public proposal.

### locks(`AccountId`): `Option<BlockNumber>`
- **interface**: api.query.democracy.locks
- **summary**: Accounts for which there are locks in action which may be removed at some point in the future. The value is the block number at which the lock expires and may be removed.

### lowestUnbaked(): `ReferendumIndex`
- **interface**: api.query.democracy.lowestUnbaked
- **summary**: The lowest referendum index representing an unbaked referendum. Equal to `ReferendumCount` if there isn't a unbaked referendum.

### nextExternal(): `Option<(Hash,VoteThreshold)>`
- **interface**: api.query.democracy.nextExternal
- **summary**: The referendum to be tabled whenever it would be valid to table an external proposal. This happens when a referendum needs to be tabled and one of two conditions are met: - `LastTabledWasExternal` is `false`; or - `PublicProps` is empty.

### preimages(`Hash`): `Option<(Bytes,AccountId,BalanceOf,BlockNumber)>`
- **interface**: api.query.democracy.preimages
- **summary**: Map of hashes to the proposal preimage, along with who registered it and their deposit. The block number is the block at which it was deposited.

### proxy(`AccountId`): `Option<AccountId>`
- **interface**: api.query.democracy.proxy
- **summary**: Who is able to vote for whom. Value is the fund-holding account, key is the vote-transaction-sending account.

### publicPropCount(): `PropIndex`
- **interface**: api.query.democracy.publicPropCount
- **summary**: The number of (public) proposals that have been made so far.

### publicProps(): `Vec<(PropIndex,Hash,AccountId)>`
- **interface**: api.query.democracy.publicProps
- **summary**: The public proposals. Unsorted. The second item is the proposal's hash.

### referendumCount(): `ReferendumIndex`
- **interface**: api.query.democracy.referendumCount
- **summary**: The next free referendum index, aka the number of referenda started so far.

### referendumInfoOf(`ReferendumIndex`): `Option<ReferendumInfo>`
- **interface**: api.query.democracy.referendumInfoOf
- **summary**: Information concerning any given referendum.

### voteOf(`(ReferendumIndex,AccountId)`): `Vote`
- **interface**: api.query.democracy.voteOf
- **summary**: Get the vote in a given referendum of a particular voter. The result is meaningful only if `voters_for` includes the voter when called with the referendum (you'll get the default `Vote` value otherwise). If you don't want to check `voters_for`, then you can also check for simple existence with `VoteOf::exists` first.

### votersFor(`ReferendumIndex`): `Vec<AccountId>`
- **interface**: api.query.democracy.votersFor
- **summary**: Get the voters for the current proposal.

___


## elections

### candidates(): `Vec<AccountId>`
- **interface**: api.query.elections.candidates
- **summary**: The present candidate list. Sorted based on account-id. A current member or a runner can never enter this vector and is always implicitly assumed to be a candidate.

### electionRounds(): `u32`
- **interface**: api.query.elections.electionRounds
- **summary**: The total number of vote rounds that have happened, excluding the upcoming one.

### members(): `Vec<(AccountId,BalanceOf)>`
- **interface**: api.query.elections.members
- **summary**: The current elected membership. Sorted based on account id.

### runnersUp(): `Vec<(AccountId,BalanceOf)>`
- **interface**: api.query.elections.runnersUp
- **summary**: The current runners_up. Sorted based on low to high merit (worse to best runner).

### stakeOf(`AccountId`): `BalanceOf`
- **interface**: api.query.elections.stakeOf
- **summary**: Locked stake of a voter.

### votesOf(`AccountId`): `(Vec<AccountId>, Linkage<AccountId>)`
- **interface**: api.query.elections.votesOf
- **summary**: Votes of a particular voter, with the round index of the votes.

___


## grandpa

### authorities(): `AuthorityList`
- **interface**: api.query.grandpa.authorities
- **summary**: DEPRECATED  This used to store the current authority set, which has been migrated to the well-known GRANDPA_AUTHORITES_KEY unhashed key.

### currentSetId(): `SetId`
- **interface**: api.query.grandpa.currentSetId
- **summary**: The number of changes (both in terms of keys and underlying economic responsibilities) in the "set" of Grandpa validators from genesis.

### nextForced(): `Option<BlockNumber>`
- **interface**: api.query.grandpa.nextForced
- **summary**: next block number where we can force a change.

### pendingChange(): `Option<StoredPendingChange>`
- **interface**: api.query.grandpa.pendingChange
- **summary**: Pending change: (signaled at, scheduled change).

### setIdSession(`SetId`): `Option<SessionIndex>`
- **interface**: api.query.grandpa.setIdSession
- **summary**: A mapping from grandpa set ID to the index of the *most recent* session for which its members were responsible.

### stalled(): `Option<(BlockNumber,BlockNumber)>`
- **interface**: api.query.grandpa.stalled
- **summary**: `true` if we are currently stalled.

### state(): `StoredState`
- **interface**: api.query.grandpa.state
- **summary**: State of the current authority set.

___


## identity

### identityOf(`AccountId`): `Option<Registration>`
- **interface**: api.query.identity.identityOf
- **summary**: Information that is pertinent to identify the entity behind an account.

### registrars(): `Vec<Option<RegistrarInfo>>`
- **interface**: api.query.identity.registrars
- **summary**: The set of registrars. Not expected to get very big as can only be added through a special origin (likely a council motion).  The index into this can be cast to `RegistrarIndex` to get a valid value.

### subsOf(`AccountId`): `(BalanceOf,Vec<AccountId>)`
- **interface**: api.query.identity.subsOf
- **summary**: Alternative "sub" identities of this account.  The first item is the deposit, the second is a vector of the accounts.

### superOf(`AccountId`): `Option<(AccountId,Data)>`
- **interface**: api.query.identity.superOf
- **summary**: The super-identity of an alternative "sub" identity together with its name, within that context. If the account is not some other account's sub-identity, then just `None`.

___


## imOnline

### authoredBlocks(`SessionIndex, ValidatorId`): `u32`
- **interface**: api.query.imOnline.authoredBlocks
- **summary**: For each session index, we keep a mapping of `T::ValidatorId` to the number of blocks authored by the given authority.

### heartbeatAfter(): `BlockNumber`
- **interface**: api.query.imOnline.heartbeatAfter
- **summary**: The block number after which it's ok to send heartbeats in current session.  At the beginning of each session we set this to a value that should fall roughly in the middle of the session duration. The idea is to first wait for the validators to produce a block in the current session, so that the heartbeat later on will not be necessary.

### keys(): `Vec<AuthorityId>`
- **interface**: api.query.imOnline.keys
- **summary**: The current set of keys that may issue a heartbeat.

### receivedHeartbeats(`SessionIndex, AuthIndex`): `Option<Bytes>`
- **interface**: api.query.imOnline.receivedHeartbeats
- **summary**: For each session index, we keep a mapping of `AuthIndex` to `offchain::OpaqueNetworkState`.

___


## indices

### enumSet(`AccountIndex`): `Vec<AccountId>`
- **interface**: api.query.indices.enumSet
- **summary**: The enumeration sets.

### nextEnumSet(): `AccountIndex`
- **interface**: api.query.indices.nextEnumSet
- **summary**: The next free enumeration set.

___


## offences

### concurrentReportsIndex(`Kind, OpaqueTimeSlot`): `Vec<ReportIdOf>`
- **interface**: api.query.offences.concurrentReportsIndex
- **summary**: A vector of reports of the same kind that happened at the same time slot.

### reports(`ReportIdOf`): `Option<OffenceDetails>`
- **interface**: api.query.offences.reports
- **summary**: The primary structure that holds all offence records keyed by report identifiers.

### reportsByKindIndex(`Kind`): `Bytes`
- **interface**: api.query.offences.reportsByKindIndex
- **summary**: Enumerates all reports of a kind along with the time they happened.  All reports are sorted by the time of offence.  Note that the actual type of this mapping is `Vec<u8>`, this is because values of different types are not supported at the moment so we are doing the manual serialization.

___


## randomnessCollectiveFlip

### randomMaterial(): `Vec<Hash>`
- **interface**: api.query.randomnessCollectiveFlip.randomMaterial
- **summary**: Series of block headers from the last 81 blocks that acts as random seed material. This is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of the oldest hash.

___


## recovery

### activeRecoveries(`AccountId, AccountId`): `Option<ActiveRecovery>`
- **interface**: api.query.recovery.activeRecoveries
- **summary**: Active recovery attempts.  First account is the account to be recovered, and the second account is the user trying to recover the account.

### recoverable(`AccountId`): `Option<RecoveryConfig>`
- **interface**: api.query.recovery.recoverable
- **summary**: The set of recoverable accounts and their recovery configuration.

### recovered(`AccountId`): `Option<AccountId>`
- **interface**: api.query.recovery.recovered
- **summary**: The final list of recovered accounts.  Map from the recovered account to the user who can access it.

___


## session

### currentIndex(): `SessionIndex`
- **interface**: api.query.session.currentIndex
- **summary**: Current index of the session.

### disabledValidators(): `Vec<u32>`
- **interface**: api.query.session.disabledValidators
- **summary**: Indices of disabled validators.  The set is cleared when `on_session_ending` returns a new set of identities.

### keyOwner(`Bytes, (KeyTypeId,Bytes)`): `Option<ValidatorId>`
- **interface**: api.query.session.keyOwner
- **summary**: The owner of a key. The second key is the `KeyTypeId` + the encoded key.  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of the trie. Having all data in the same branch should prevent slowing down other queries.

### nextKeys(`Bytes, ValidatorId`): `Option<Keys>`
- **interface**: api.query.session.nextKeys
- **summary**: The next session keys for a validator.  The first key is always `DEDUP_KEY_PREFIX` to have all the data in the same branch of the trie. Having all data in the same branch should prevent slowing down other queries.

### queuedChanged(): `bool`
- **interface**: api.query.session.queuedChanged
- **summary**: True if the underlying economic identities or weighting behind the validators has changed in the queued validator set.

### queuedKeys(): `Vec<(ValidatorId,Keys)>`
- **interface**: api.query.session.queuedKeys
- **summary**: The queued keys for the next session. When the next session begins, these keys will be used to determine the validator's session keys.

### validators(): `Vec<ValidatorId>`
- **interface**: api.query.session.validators
- **summary**: The current set of validators.

___


## society

### bids(): `Vec<Bid>`
- **interface**: api.query.society.bids
- **summary**: The current bids, stored ordered by the value of the bid.

### candidates(): `Vec<Bid>`
- **interface**: api.query.society.candidates
- **summary**: The current set of candidates; bidders that are attempting to become members.

### defender(): `Option<AccountId>`
- **interface**: api.query.society.defender
- **summary**: The defending member currently being challenged.

### defenderVotes(`AccountId`): `Option<SocietyVote>`
- **interface**: api.query.society.defenderVotes
- **summary**: Votes for the defender.

### founder(): `Option<AccountId>`
- **interface**: api.query.society.founder
- **summary**: The first member.

### head(): `Option<AccountId>`
- **interface**: api.query.society.head
- **summary**: The most primary from the most recently approved members.

### maxMembers(): `u32`
- **interface**: api.query.society.maxMembers
- **summary**: The max number of members for the society at one time.

### members(): `Vec<AccountId>`
- **interface**: api.query.society.members
- **summary**: The current set of members, ordered.

### payouts(`AccountId`): `Vec<(BlockNumber,BalanceOf)>`
- **interface**: api.query.society.payouts
- **summary**: Pending payouts; ordered by block number, with the amount that should be paid out.

### pot(): `BalanceOf`
- **interface**: api.query.society.pot
- **summary**: Amount of our account balance that is specifically for the next round's bid(s).

### rules(): `Option<Hash>`
- **interface**: api.query.society.rules
- **summary**: A hash of the rules of this society concerning membership. Can only be set once and only by the founder.

### strikes(`AccountId`): `StrikeCount`
- **interface**: api.query.society.strikes
- **summary**: The ongoing number of losing votes cast by the member.

### suspendedCandidates(`AccountId`): `Option<(BalanceOf,BidKind)>`
- **interface**: api.query.society.suspendedCandidates
- **summary**: The set of suspended candidates.

### suspendedMembers(`AccountId`): `bool`
- **interface**: api.query.society.suspendedMembers
- **summary**: The set of suspended members.

### votes(`AccountId, AccountId`): `Option<SocietyVote>`
- **interface**: api.query.society.votes
- **summary**: Double map from Candidate -> Voter -> (Maybe) Vote.

### vouching(`AccountId`): `Option<VouchingStatus>`
- **interface**: api.query.society.vouching
- **summary**: Members currently vouching or banned from vouching again

___


## staking

### bonded(`AccountId`): `Option<AccountId>`
- **interface**: api.query.staking.bonded
- **summary**: Map from all locked "stash" accounts to the controller account.

### bondedEras(): `Vec<(EraIndex,SessionIndex)>`
- **interface**: api.query.staking.bondedEras
- **summary**: A mapping from still-bonded eras to the first session index of that era.

### canceledSlashPayout(): `BalanceOf`
- **interface**: api.query.staking.canceledSlashPayout
- **summary**: The amount of currency given to reporters of a slash event which was canceled by extraordinary circumstances (e.g. governance).

### currentElected(): `Vec<AccountId>`
- **interface**: api.query.staking.currentElected
- **summary**: The currently elected validator set keyed by stash account ID.

### currentEra(): `EraIndex`
- **interface**: api.query.staking.currentEra
- **summary**: The current era index.

### currentEraPointsEarned(): `EraPoints`
- **interface**: api.query.staking.currentEraPointsEarned
- **summary**: Rewards for the current era. Using indices of current elected set.

### currentEraStart(): `MomentOf`
- **interface**: api.query.staking.currentEraStart
- **summary**: The start of the current era.

### currentEraStartSessionIndex(): `SessionIndex`
- **interface**: api.query.staking.currentEraStartSessionIndex
- **summary**: The session index at which the current era started.

### earliestUnappliedSlash(): `Option<EraIndex>`
- **interface**: api.query.staking.earliestUnappliedSlash
- **summary**: The earliest era for which we have a pending, unapplied slash.

### forceEra(): `Forcing`
- **interface**: api.query.staking.forceEra
- **summary**: True if the next session change will be a new era regardless of index.

### invulnerables(): `Vec<AccountId>`
- **interface**: api.query.staking.invulnerables
- **summary**: Any validators that may never be slashed or forcibly kicked. It's a Vec since they're easy to initialize and the performance hit is minimal (we expect no more than four invulnerables) and restricted to testnets.

### ledger(`AccountId`): `Option<StakingLedger>`
- **interface**: api.query.staking.ledger
- **summary**: Map from all (unlocked) "controller" accounts to the info regarding the staking.

### minimumValidatorCount(): `u32`
- **interface**: api.query.staking.minimumValidatorCount
- **summary**: Minimum number of staking participants before emergency conditions are imposed.

### nominators(`AccountId`): `Option<(Nominations, Linkage<AccountId>)>`
- **interface**: api.query.staking.nominators
- **summary**: The map from nominator stash key to the set of stash keys of all validators to nominate.  NOTE: is private so that we can ensure upgraded before all typical accesses. Direct storage APIs can still bypass this protection.

### nominatorSlashInEra(`EraIndex, AccountId`): `Option<BalanceOf>`
- **interface**: api.query.staking.nominatorSlashInEra
- **summary**: All slashing events on nominators, mapped by era to the highest slash value of the era.

### payee(`AccountId`): `RewardDestination`
- **interface**: api.query.staking.payee
- **summary**: Where the reward payment should be made. Keyed by stash.

### slashingSpans(`AccountId`): `Option<SlashingSpans>`
- **interface**: api.query.staking.slashingSpans
- **summary**: Slashing spans for stash accounts.

### slashRewardFraction(): `Perbill`
- **interface**: api.query.staking.slashRewardFraction
- **summary**: The percentage of the slash that is distributed to reporters.  The rest of the slashed value is handled by the `Slash`.

### slotStake(): `BalanceOf`
- **interface**: api.query.staking.slotStake
- **summary**: The amount of balance actively at stake for each validator slot, currently.  This is used to derive rewards and punishments.

### spanSlash(`(AccountId,SpanIndex)`): `SpanRecord`
- **interface**: api.query.staking.spanSlash
- **summary**: Records information about the maximum slash of a stash within a slashing span, as well as how much reward has been paid out.

### stakers(`AccountId`): `Exposure`
- **interface**: api.query.staking.stakers
- **summary**: Nominators for a particular account that is in action right now. You can't iterate through validators here, but you can find them in the Session module.  This is keyed by the stash account.

### storageVersion(): `u32`
- **interface**: api.query.staking.storageVersion
- **summary**: The version of storage for upgrade.

### unappliedSlashes(`EraIndex`): `Vec<UnappliedSlash>`
- **interface**: api.query.staking.unappliedSlashes
- **summary**: All unapplied slashes that are queued for later.

### validatorCount(): `u32`
- **interface**: api.query.staking.validatorCount
- **summary**: The ideal number of staking participants.

### validators(`AccountId`): `(ValidatorPrefs, Linkage<AccountId>)`
- **interface**: api.query.staking.validators
- **summary**: The map from (wannabe) validator stash key to the preferences of that validator.

### validatorSlashInEra(`EraIndex, AccountId`): `Option<(Perbill,BalanceOf)>`
- **interface**: api.query.staking.validatorSlashInEra
- **summary**: All slashing events on validators, mapped by era to the highest slash proportion and slash value of the era.

___


## sudo

### key(): `AccountId`
- **interface**: api.query.sudo.key
- **summary**: The `AccountId` of the sudo key.

___


## system

### accountNonce(`AccountId`): `Index`
- **interface**: api.query.system.accountNonce
- **summary**: Extrinsics nonce for accounts.

### allExtrinsicsLen(): `Option<u32>`
- **interface**: api.query.system.allExtrinsicsLen
- **summary**: Total length (in bytes) for all extrinsics put together, for the current block.

### allExtrinsicsWeight(): `Option<Weight>`
- **interface**: api.query.system.allExtrinsicsWeight
- **summary**: Total weight for all extrinsics put together, for the current block.

### blockHash(`BlockNumber`): `Hash`
- **interface**: api.query.system.blockHash
- **summary**: Map of block numbers to block hashes.

### digest(): `DigestOf`
- **interface**: api.query.system.digest
- **summary**: Digest of the current block, also part of the block header.

### eventCount(): `EventIndex`
- **interface**: api.query.system.eventCount
- **summary**: The number of events in the `Events<T>` list.

### events(): `Vec<EventRecord>`
- **interface**: api.query.system.events
- **summary**: Events deposited for the current block.

### eventTopics(`Hash`): `Vec<(BlockNumber,EventIndex)>`
- **interface**: api.query.system.eventTopics
- **summary**: Mapping between a topic (represented by T::Hash) and a vector of indexes of events in the `<Events<T>>` list.  All topic vectors have deterministic storage locations depending on the topic. This allows light-clients to leverage the changes trie storage tracking mechanism and in case of changes fetch the list of events of interest.  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just the `EventIndex` then in case if the topic has the same contents on the next block no notification will be triggered thus the event might be lost.

### extrinsicCount(): `Option<u32>`
- **interface**: api.query.system.extrinsicCount
- **summary**: Total extrinsics count for the current block.

### extrinsicData(`u32`): `Bytes`
- **interface**: api.query.system.extrinsicData
- **summary**: Extrinsics data for the current block (maps an extrinsic's index to its data).

### extrinsicsRoot(): `Hash`
- **interface**: api.query.system.extrinsicsRoot
- **summary**: Extrinsics root of the current block, also part of the block header.

### number(): `BlockNumber`
- **interface**: api.query.system.number
- **summary**: The current block number being processed. Set by `execute_block`.

### parentHash(): `Hash`
- **interface**: api.query.system.parentHash
- **summary**: Hash of the previous block.

___


## technicalCommittee

### members(): `Vec<AccountId>`
- **interface**: api.query.technicalCommittee.members
- **summary**: The current members of the collective. This is stored sorted (just by value).

### proposalCount(): `u32`
- **interface**: api.query.technicalCommittee.proposalCount
- **summary**: Proposals so far.

### proposalOf(`Hash`): `Option<Proposal>`
- **interface**: api.query.technicalCommittee.proposalOf
- **summary**: Actual proposal for a given hash, if it's current.

### proposals(): `Vec<Hash>`
- **interface**: api.query.technicalCommittee.proposals
- **summary**: The hashes of the active proposals.

### voting(`Hash`): `Option<Votes>`
- **interface**: api.query.technicalCommittee.voting
- **summary**: Votes on a given proposal, if it is ongoing.

___


## technicalMembership

### members(): `Vec<AccountId>`
- **interface**: api.query.technicalMembership.members
- **summary**: The current membership, stored as an ordered Vec.

___


## timestamp

### didUpdate(): `bool`
- **interface**: api.query.timestamp.didUpdate
- **summary**: Did the timestamp get updated in this block?

### now(): `Moment`
- **interface**: api.query.timestamp.now
- **summary**: Current time for the current block.

___


## transactionPayment

### nextFeeMultiplier(): `Multiplier`
- **interface**: api.query.transactionPayment.nextFeeMultiplier

___


## treasury

### approvals(): `Vec<ProposalIndex>`
- **interface**: api.query.treasury.approvals
- **summary**: Proposal indices that have been approved but not yet awarded.

### proposalCount(): `ProposalIndex`
- **interface**: api.query.treasury.proposalCount
- **summary**: Number of proposals that have been made.

### proposals(`ProposalIndex`): `Option<TreasuryProposal>`
- **interface**: api.query.treasury.proposals
- **summary**: Proposals that have been made.

### reasons(`Hash`): `Option<Bytes>`
- **interface**: api.query.treasury.reasons
- **summary**: Simple preimage lookup from the reason's hash to the original data. Again, has an insecure enumerable hash since the key is guaranteed to be the result of a secure hash.

### tips(`Hash`): `Option<OpenTip>`
- **interface**: api.query.treasury.tips
- **summary**: Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value. This has the insecure enumerable hash function since the key itself is already guaranteed to be a secure hash.

___


## utility

### multisigs(`AccountId, [u8;32]`): `Option<Multisig>`
- **interface**: api.query.utility.multisigs
- **summary**: The set of open multisig operations.

___


## vesting

### vesting(`AccountId`): `Option<VestingInfo>`
- **interface**: api.query.vesting.vesting
- **summary**: Information regarding the vesting of a given account.

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
