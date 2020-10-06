---
title: Errors
---

This page lists the errors that can be encountered in the different modules. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[authorship](#authorship)**

- **[balances](#balances)**

- **[contracts](#contracts)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[elections](#elections)**

- **[finalityTracker](#finalitytracker)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[multisig](#multisig)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[society](#society)**

- **[staking](#staking)**

- **[sudo](#sudo)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[treasury](#treasury)**

- **[vesting](#vesting)**


___


## authorship
 
### GenesisUncle
- **summary**:   The uncle is genesis. 
 
### InvalidUncleParent
- **summary**:   The uncle parent not in the chain. 
 
### OldUncle
- **summary**:   The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **summary**:   The uncle is too high in chain. 
 
### TooManyUncles
- **summary**:   Too many uncles. 
 
### UncleAlreadyIncluded
- **summary**:   The uncle is already included. 
 
### UnclesAlreadySet
- **summary**:   Uncles already set in the block. 

___


## balances
 
### DeadAccount
- **summary**:   Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **summary**:   Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **summary**:   A vesting schedule already exists for this account 
 
### InsufficientBalance
- **summary**:   Balance too low to send value 
 
### KeepAlive
- **summary**:   Transfer/payment would kill account 
 
### LiquidityRestrictions
- **summary**:   Account liquidity restrictions prevent withdrawal 
 
### Overflow
- **summary**:   Got an overflow after adding 
 
### VestingBalance
- **summary**:   Vesting balance too high to send value 

___


## contracts
 
### BelowSubsistenceThreshold
- **summary**:   Performing the requested transfer would have brought the contract below the subsistence threshold. No transfer is allowed to do this in order to allow for a tombstone to be created. Use `seal_terminate` to remove a contract without leaving a tombstone behind. 
 
### CodeNotFound
- **summary**:   No code could be found at the supplied code hash. 
 
### CodeTooLarge
- **summary**:   The code supplied to `put_code` exceeds the limit specified in the current schedule. 
 
### ContractTrapped
- **summary**:   Contract trapped during execution. 
 
### DecodingFailed
- **summary**:   Input passed to a contract API function failed to decode as expected type. 
 
### InvalidContractOrigin
- **summary**:   An origin TrieId written in the current block. 
 
### InvalidDestinationContract
- **summary**:   Cannot restore to nonexisting or alive contract. 
 
### InvalidScheduleVersion
- **summary**:   A new schedule must have a greater version than the current one. 
 
### InvalidSourceContract
- **summary**:   Cannot restore from nonexisting or tombstone contract. 
 
### InvalidSurchargeClaim
- **summary**:   An origin must be signed or inherent and auxiliary sender only provided on inherent. 
 
### InvalidTombstone
- **summary**:   Tombstones don't match. 
 
### MaxCallDepthReached
- **summary**:   Performing a call was denied because the calling depth reached the limit of what is specified in the schedule. 
 
### NewContractNotFunded
- **summary**:   The newly created contract is below the subsistence threshold after executing its contructor. No contracts are allowed to exist below that threshold. 
 
### NotCallable
- **summary**:   The contract that was called is either no contract at all (a plain account) or is a tombstone. 
 
### OutOfBounds
- **summary**:   A buffer outside of sandbox memory was passed to a contract API function. 
 
### OutOfGas
- **summary**:   The executed contract exhausted its gas limit. 
 
### OutputBufferTooSmall
- **summary**:   The output buffer supplied to a contract API call was too small. 
 
### TransferFailed
- **summary**:   Performing the requested transfer failed for a reason originating in the chosen currency implementation of the runtime. Most probably the balance is too low or locks are placed on it. 

___


## council
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### TooEarly
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **summary**:   The given weight bound for the proposal was too low. 

___


## democracy
 
### AlreadyCanceled
- **summary**:   Cannot cancel the same proposal twice 
 
### AlreadyDelegating
- **summary**:   The account is already delegating. 
 
### AlreadyVetoed
- **summary**:   Identity may not veto a proposal twice 
 
### BadIndex
- **summary**:   Unknown index 
 
### DuplicatePreimage
- **summary**:   Preimage already noted 
 
### DuplicateProposal
- **summary**:   Proposal already made 
 
### Imminent
- **summary**:   Imminent 
 
### InstantNotAllowed
- **summary**:   The instant referendum origin is currently disallowed. 
 
### InsufficientFunds
- **summary**:   Too high a balance was provided that the account cannot afford. 
 
### InvalidHash
- **summary**:   Invalid hash 
 
### InvalidWitness
- **summary**:   The provided witness data is wrong. 
 
### MaxVotesReached
- **summary**:   Maximum number of votes reached. 
 
### NoneWaiting
- **summary**:   No proposals waiting 
 
### Nonsense
- **summary**:   Delegation to oneself makes no sense. 
 
### NoPermission
- **summary**:   The actor has no permission to conduct the action. 
 
### NoProposal
- **summary**:   No external proposal 
 
### NotDelegated
- **summary**:   Not delegated 
 
### NotDelegating
- **summary**:   The account is not currently delegating. 
 
### NotExpired
- **summary**:   The lock on the account to be unlocked has not yet expired. 
 
### NotImminent
- **summary**:   Not imminent 
 
### NotLocked
- **summary**:   The target account does not have a lock. 
 
### NotSimpleMajority
- **summary**:   Next external proposal not simple majority 
 
### NotVoter
- **summary**:   The given account did not vote on the referendum. 
 
### Overflow
- **summary**:   An unexpected integer overflow occurred. 
 
### PreimageInvalid
- **summary**:   Invalid preimage 
 
### PreimageMissing
- **summary**:   Preimage not found 
 
### ProposalBlacklisted
- **summary**:   Proposal still blacklisted 
 
### ProposalMissing
- **summary**:   Proposal does not exist 
 
### ReferendumInvalid
- **summary**:   Vote given for invalid referendum 
 
### TooEarly
- **summary**:   Too early 
 
### TooManyProposals
- **summary**:   Maximum number of proposals reached. 
 
### Underflow
- **summary**:   An unexpected integer underflow occurred. 
 
### ValueLow
- **summary**:   Value too low 
 
### VotesExist
- **summary**:   The account currently has votes attached to it and the operation cannot succeed until these are removed, either through `unvote` or `reap_vote`. 
 
### WrongUpperBound
- **summary**:   Invalid upper bound. 

___


## elections
 
### DuplicatedCandidate
- **summary**:   Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **summary**:   Candidate does not have enough funds. 
 
### InvalidCandidateCount
- **summary**:   The provided count of number of candidates is incorrect. 
 
### InvalidRenouncing
- **summary**:   The renouncing origin presented a wrong `Renouncing` parameter. 
 
### InvalidReplacement
- **summary**:   Prediction regarding replacement after member removal is wrong. 
 
### InvalidVoteCount
- **summary**:   The provided count of number of votes is incorrect. 
 
### LowBalance
- **summary**:   Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **summary**:   Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **summary**:   Member cannot re-submit candidacy. 
 
### MustBeVoter
- **summary**:   Must be a voter. 
 
### NotMember
- **summary**:   Not a member. 
 
### NoVotes
- **summary**:   Must vote for at least one candidate. 
 
### ReportSelf
- **summary**:   Cannot report self. 
 
### RunnerSubmit
- **summary**:   Runner cannot re-submit candidacy. 
 
### TooManyVotes
- **summary**:   Cannot vote more than candidates. 
 
### UnableToPayBond
- **summary**:   Voter can not pay voting bond. 
 
### UnableToVote
- **summary**:   Cannot vote when no candidates or members exist. 

___


## finalityTracker
 
### AlreadyUpdated
- **summary**:   Final hint must be updated only once in the block 
 
### BadHint
- **summary**:   Finalized height above block number 

___


## grandpa
 
### ChangePending
- **summary**:   Attempt to signal GRANDPA change with one already pending. 
 
### DuplicateOffenceReport
- **summary**:   A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **summary**:   An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **summary**:   A key ownership proof provided as part of an equivocation report is invalid. 
 
### PauseFailed
- **summary**:   Attempt to signal GRANDPA pause when the authority set isn't live (either paused or already pending pause). 
 
### ResumeFailed
- **summary**:   Attempt to signal GRANDPA resume when the authority set isn't paused (either live or already pending resume). 
 
### TooSoon
- **summary**:   Cannot signal forced change so soon after last. 

___


## identity
 
### AlreadyClaimed
- **summary**:   Account ID is already named. 
 
### EmptyIndex
- **summary**:   Empty index. 
 
### FeeChanged
- **summary**:   Fee is changed. 
 
### InvalidIndex
- **summary**:   The index is invalid. 
 
### InvalidJudgement
- **summary**:   Invalid judgement. 
 
### InvalidTarget
- **summary**:   The target is invalid. 
 
### JudgementGiven
- **summary**:   Judgement given. 
 
### NoIdentity
- **summary**:   No identity found. 
 
### NotFound
- **summary**:   Account isn't found. 
 
### NotNamed
- **summary**:   Account isn't named. 
 
### NotOwned
- **summary**:   Sub-account isn't owned by sender. 
 
### NotSub
- **summary**:   Sender is not a sub-account. 
 
### StickyJudgement
- **summary**:   Sticky judgement. 
 
### TooManyFields
- **summary**:   Too many additional fields. 
 
### TooManyRegistrars
- **summary**:   Maximum amount of registrars reached. Cannot add any more. 
 
### TooManySubAccounts
- **summary**:   Too many subs-accounts. 

___


## imOnline
 
### DuplicatedHeartbeat
- **summary**:   Duplicated heartbeat. 
 
### InvalidKey
- **summary**:   Non existent public key. 

___


## multisig
 
### AlreadyApproved
- **summary**:   Call is already approved by this signatory. 
 
### AlreadyStored
- **summary**:   The data to be stored is already stored. 
 
### MinimumThreshold
- **summary**:   Threshold must be 2 or greater. 
 
### NoApprovalsNeeded
- **summary**:   Call doesn't need any (more) approvals. 
 
### NotFound
- **summary**:   Multisig operation not found when attempting to cancel. 
 
### NoTimepoint
- **summary**:   No timepoint was given, yet the multisig operation is already underway. 
 
### NotOwner
- **summary**:   Only the account that originally created the multisig is able to cancel it. 
 
### SenderInSignatories
- **summary**:   The sender was contained in the other signatories; it shouldn't be. 
 
### SignatoriesOutOfOrder
- **summary**:   The signatories were provided out of order; they should be ordered. 
 
### TooFewSignatories
- **summary**:   There are too few signatories in the list. 
 
### TooManySignatories
- **summary**:   There are too many signatories in the list. 
 
### UnexpectedTimepoint
- **summary**:   A timepoint was given, yet no multisig operation is underway. 
 
### WeightTooLow
- **summary**:   The maximum weight information provided was too low. 
 
### WrongTimepoint
- **summary**:   A different timepoint was given to the multisig operation that is underway. 

___


## proxy
 
### Duplicate
- **summary**:   Account is already a proxy. 
 
### NoPermission
- **summary**:   Call may not be made by proxy because it may escalate its privileges. 
 
### NotFound
- **summary**:   Proxy registration not found. 
 
### NotProxy
- **summary**:   Sender is not a proxy of the account to be proxied. 
 
### TooMany
- **summary**:   There are too many proxies registered or too many announcements pending. 
 
### Unannounced
- **summary**:   Announcement, if made at all, was made too recently. 
 
### Unproxyable
- **summary**:   A call which is incompatible with the proxy type's filter was attempted. 

___


## recovery
 
### AlreadyProxy
- **summary**:   This account is already set up for recovery 
 
### AlreadyRecoverable
- **summary**:   This account is already set up for recovery 
 
### AlreadyStarted
- **summary**:   A recovery process has already started for this account 
 
### AlreadyVouched
- **summary**:   This user has already vouched for this recovery 
 
### DelayPeriod
- **summary**:   The friend must wait until the delay period to vouch for this recovery 
 
### MaxFriends
- **summary**:   Friends list must be less than max friends 
 
### NotAllowed
- **summary**:   User is not allowed to make a call on behalf of this account 
 
### NotEnoughFriends
- **summary**:   Friends list must be greater than zero and threshold 
 
### NotFriend
- **summary**:   This account is not a friend who can vouch 
 
### NotRecoverable
- **summary**:   This account is not set up for recovery 
 
### NotSorted
- **summary**:   Friends list must be sorted and free of duplicates 
 
### NotStarted
- **summary**:   A recovery process has not started for this rescuer 
 
### Overflow
- **summary**:   There was an overflow in a calculation 
 
### StillActive
- **summary**:   There are still active recovery attempts that need to be closed 
 
### Threshold
- **summary**:   The threshold for recovering this account has not been met 
 
### ZeroThreshold
- **summary**:   Threshold must be greater than zero 

___


## scheduler
 
### FailedToCancel
- **summary**:   Failed to cancel a scheduled call 
 
### FailedToSchedule
- **summary**:   Failed to schedule a call 
 
### TargetBlockNumberInPast
- **summary**:   Given target block number is in the past. 

___


## session
 
### DuplicatedKey
- **summary**:   Registered duplicate key. 
 
### InvalidProof
- **summary**:   Invalid ownership proof. 
 
### NoAssociatedValidatorId
- **summary**:   No associated validator ID for account. 
 
### NoKeys
- **summary**:   No keys are associated with this account. 

___


## society
 
### AlreadyBid
- **summary**:   User has already made a bid. 
 
### AlreadyCandidate
- **summary**:   User is already a candidate. 
 
### AlreadyFounded
- **summary**:   Society already founded. 
 
### AlreadyMember
- **summary**:   User is already a member. 
 
### AlreadyVouching
- **summary**:   Member is already vouching or banned from vouching again. 
 
### BadPosition
- **summary**:   An incorrect position was provided. 
 
### Founder
- **summary**:   Cannot remove the founder. 
 
### Head
- **summary**:   Cannot remove the head of the chain. 
 
### InsufficientPot
- **summary**:   Not enough in pot to accept candidate. 
 
### MaxMembers
- **summary**:   Too many members in the society. 
 
### NoPayout
- **summary**:   Nothing to payout. 
 
### NotCandidate
- **summary**:   User is not a candidate. 
 
### NotFounder
- **summary**:   The caller is not the founder. 
 
### NotHead
- **summary**:   The caller is not the head. 
 
### NotMember
- **summary**:   User is not a member. 
 
### NotSuspended
- **summary**:   User is not suspended. 
 
### NotVouching
- **summary**:   Member is not vouching. 
 
### Suspended
- **summary**:   User is suspended. 

___


## staking
 
### AlreadyBonded
- **summary**:   Stash is already bonded. 
 
### AlreadyClaimed
- **summary**:   Rewards for this era have already been claimed for this validator. 
 
### AlreadyPaired
- **summary**:   Controller is already paired. 
 
### CallNotAllowed
- **summary**:   The call is not allowed at the given time due to restrictions of election period. 
 
### DuplicateIndex
- **summary**:   Duplicate index. 
 
### EmptyTargets
- **summary**:   Targets cannot be empty. 
 
### FundedTarget
- **summary**:   Attempting to target a stash that still has funds. 
 
### IncorrectHistoryDepth
- **summary**:   Incorrect previous history depth input provided. 
 
### IncorrectSlashingSpans
- **summary**:   Incorrect number of slashing spans provided. 
 
### InsufficientValue
- **summary**:   Can not bond with value less than minimum balance. 
 
### InvalidEraToReward
- **summary**:   Invalid era to reward. 
 
### InvalidNumberOfNominations
- **summary**:   Invalid number of nominations. 
 
### InvalidSlashIndex
- **summary**:   Slash record index out of bounds. 
 
### NoMoreChunks
- **summary**:   Can not schedule more unlock chunks. 
 
### NotController
- **summary**:   Not a controller account. 
 
### NotSortedAndUnique
- **summary**:   Items are not sorted and unique. 
 
### NotStash
- **summary**:   Not a stash account. 
 
### NoUnlockChunk
- **summary**:   Can not rebond without unlocking chunks. 
 
### OffchainElectionBogusCompact
- **summary**:   Error while building the assignment type from the compact. This can happen if an index is invalid, or if the weights _overflow_. 
 
### OffchainElectionBogusEdge
- **summary**:   The submitted result has unknown edges that are not among the presented winners. 
 
### OffchainElectionBogusElectionSize
- **summary**:   The election size is invalid. 
 
### OffchainElectionBogusNomination
- **summary**:   One of the submitted nominators has an edge to which they have not voted on chain. 
 
### OffchainElectionBogusNominator
- **summary**:   One of the submitted nominators is not an active nominator on chain. 
 
### OffchainElectionBogusScore
- **summary**:   The claimed score does not match with the one computed from the data. 
 
### OffchainElectionBogusSelfVote
- **summary**:   A self vote must only be originated from a validator to ONLY themselves. 
 
### OffchainElectionBogusWinner
- **summary**:   One of the submitted winners is not an active candidate on chain (index is out of range in snapshot). 
 
### OffchainElectionBogusWinnerCount
- **summary**:   Incorrect number of winners were presented. 
 
### OffchainElectionEarlySubmission
- **summary**:   The submitted result is received out of the open window. 
 
### OffchainElectionSlashedNomination
- **summary**:   One of the submitted nominators has an edge which is submitted before the last non-zero slash of the target. 
 
### OffchainElectionWeakSubmission
- **summary**:   The submitted result is not as good as the one stored on chain. 
 
### SnapshotUnavailable
- **summary**:   The snapshot data of the current window is missing. 

___


## sudo
 
### RequireSudo
- **summary**:   Sender must be the Sudo account 

___


## system
 
### FailedToExtractRuntimeVersion
- **summary**:   Failed to extract the runtime version from the new runtime. 

  Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### InvalidSpecName
- **summary**:   The name of specification does not match between the current runtime and the new runtime. 
 
### NonDefaultComposite
- **summary**:   Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **summary**:   There is a non-zero reference count preventing the account from being purged. 
 
### SpecVersionNeedsToIncrease
- **summary**:   The specification version is not allowed to decrease between the current runtime and the new runtime. 

___


## technicalCommittee
 
### AlreadyInitialized
- **summary**:   Members are already initialized! 
 
### DuplicateProposal
- **summary**:   Duplicate proposals not allowed 
 
### DuplicateVote
- **summary**:   Duplicate vote ignored 
 
### NotMember
- **summary**:   Account is not a member 
 
### ProposalMissing
- **summary**:   Proposal must exist 
 
### TooEarly
- **summary**:   The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **summary**:   There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **summary**:   Mismatched index 
 
### WrongProposalLength
- **summary**:   The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **summary**:   The given weight bound for the proposal was too low. 

___


## treasury
 
### AlreadyKnown
- **summary**:   The tip was already found/started. 
 
### InsufficientProposersBalance
- **summary**:   Proposer's balance is too low. 
 
### InvalidFee
- **summary**:   Invalid bounty fee. 
 
### InvalidIndex
- **summary**:   No proposal or bounty at that index. 
 
### InvalidValue
- **summary**:   Invalid bounty value. 
 
### NotFinder
- **summary**:   The account attempting to retract the tip is not the finder of the tip. 
 
### PendingPayout
- **summary**:   A bounty payout is pending. To cancel the bounty, you must unassign and slash the curator. 
 
### Premature
- **summary**:   The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **summary**:   The reason given is just too big. 
 
### RequireCurator
- **summary**:   Require bounty curator. 
 
### StillOpen
- **summary**:   The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnexpectedStatus
- **summary**:   The bounty status is unexpected. 
 
### UnknownTip
- **summary**:   The tip hash is unknown. 

___


## vesting
 
### AmountLow
- **summary**:   Amount being transferred is too low to create a vesting schedule. 
 
### ExistingVestingSchedule
- **summary**:   An existing vesting schedule already exists for this account that cannot be clobbered. 
 
### NotVesting
- **summary**:   The account given is not vesting. 
