// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    assets: {
      /**
       * Invalid metadata given.
       **/
      BadMetadata: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * Balance should be non-zero.
       **/
      BalanceZero: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No provider reference exists to allow a non-zero balance of a non-self-sufficient
       * asset.
       **/
      NoProvider: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The source account would not survive the transfer and it needs to stay alive.
       **/
      WouldDie: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    authorship: {
      /**
       * The uncle is genesis.
       **/
      GenesisUncle: AugmentedError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      InvalidUncleParent: AugmentedError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      OldUncle: AugmentedError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      TooHighUncle: AugmentedError<ApiType>;
      /**
       * Too many uncles.
       **/
      TooManyUncles: AugmentedError<ApiType>;
      /**
       * The uncle is already included.
       **/
      UncleAlreadyIncluded: AugmentedError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      UnclesAlreadySet: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    babe: {
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bounties: {
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    contracts: {
      /**
       * Performing the requested transfer would have brought the contract below
       * the subsistence threshold. No transfer is allowed to do this. Use `seal_terminate`
       * to recover a deposit.
       **/
      BelowSubsistenceThreshold: AugmentedError<ApiType>;
      /**
       * No code could be found at the supplied code hash.
       **/
      CodeNotFound: AugmentedError<ApiType>;
      /**
       * The code supplied to `instantiate_with_code` exceeds the limit specified in the
       * current schedule.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * No contract was found at the specified address.
       **/
      ContractNotFound: AugmentedError<ApiType>;
      /**
       * Contract trapped during execution.
       **/
      ContractTrapped: AugmentedError<ApiType>;
      /**
       * The debug message specified to `seal_debug_message` does contain invalid UTF-8.
       **/
      DebugMessageInvalidUTF8: AugmentedError<ApiType>;
      /**
       * Input passed to a contract API function failed to decode as expected type.
       **/
      DecodingFailed: AugmentedError<ApiType>;
      /**
       * Removal of a contract failed because the deletion queue is full.
       * 
       * This can happen when calling `seal_terminate`.
       * The queue is filled by deleting contracts and emptied by a fixed amount each block.
       * Trying again during another block is the only way to resolve this issue.
       **/
      DeletionQueueFull: AugmentedError<ApiType>;
      /**
       * A contract with the same AccountId already exists.
       **/
      DuplicateContract: AugmentedError<ApiType>;
      /**
       * The topics passed to `seal_deposit_events` contains at least one duplicate.
       **/
      DuplicateTopics: AugmentedError<ApiType>;
      /**
       * `seal_call` forwarded this contracts input. It therefore is no longer available.
       **/
      InputForwarded: AugmentedError<ApiType>;
      /**
       * A new schedule must have a greater version than the current one.
       **/
      InvalidScheduleVersion: AugmentedError<ApiType>;
      /**
       * Performing a call was denied because the calling depth reached the limit
       * of what is specified in the schedule.
       **/
      MaxCallDepthReached: AugmentedError<ApiType>;
      /**
       * The newly created contract is below the subsistence threshold after executing
       * its contructor. No contracts are allowed to exist below that threshold.
       **/
      NewContractNotFunded: AugmentedError<ApiType>;
      /**
       * The chain does not provide a chain extension. Calling the chain extension results
       * in this error. Note that this usually  shouldn't happen as deploying such contracts
       * is rejected.
       **/
      NoChainExtension: AugmentedError<ApiType>;
      /**
       * A buffer outside of sandbox memory was passed to a contract API function.
       **/
      OutOfBounds: AugmentedError<ApiType>;
      /**
       * The executed contract exhausted its gas limit.
       **/
      OutOfGas: AugmentedError<ApiType>;
      /**
       * The output buffer supplied to a contract API call was too small.
       **/
      OutputBufferTooSmall: AugmentedError<ApiType>;
      /**
       * The subject passed to `seal_random` exceeds the limit.
       **/
      RandomSubjectTooLong: AugmentedError<ApiType>;
      /**
       * A call tried to invoke a contract that is flagged as non-reentrant.
       **/
      ReentranceDenied: AugmentedError<ApiType>;
      /**
       * A storage modification exhausted the 32bit type that holds the storage size.
       * 
       * This can either happen when the accumulated storage in bytes is too large or
       * when number of storage items is too large.
       **/
      StorageExhausted: AugmentedError<ApiType>;
      /**
       * A contract self destructed in its constructor.
       * 
       * This can be triggered by a call to `seal_terminate`.
       **/
      TerminatedInConstructor: AugmentedError<ApiType>;
      /**
       * Termination of a contract is not allowed while the contract is already
       * on the call stack. Can be triggered by `seal_terminate`.
       **/
      TerminatedWhileReentrant: AugmentedError<ApiType>;
      /**
       * The amount of topics passed to `seal_deposit_events` exceeds the limit.
       **/
      TooManyTopics: AugmentedError<ApiType>;
      /**
       * Performing the requested transfer failed for a reason originating in the
       * chosen currency implementation of the runtime. Most probably the balance is
       * too low or locks are placed on it.
       **/
      TransferFailed: AugmentedError<ApiType>;
      /**
       * The size defined in `T::MaxValueSize` was exceeded.
       **/
      ValueTooLarge: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    council: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Preimage already noted
       **/
      DuplicatePreimage: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Imminent
       **/
      Imminent: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Not imminent
       **/
      NotImminent: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Invalid preimage
       **/
      PreimageInvalid: AugmentedError<ApiType>;
      /**
       * Preimage not found
       **/
      PreimageMissing: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Too early
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * The call is not allowed at this point.
       **/
      CallNotAllowed: AugmentedError<ApiType>;
      /**
       * `Self::insert_submission` returned an invalid index.
       **/
      InvalidSubmissionIndex: AugmentedError<ApiType>;
      /**
       * Snapshot metadata should exist but didn't.
       **/
      MissingSnapshotMetadata: AugmentedError<ApiType>;
      /**
       * OCW submitted solution for wrong round
       **/
      OcwCallWrongEra: AugmentedError<ApiType>;
      /**
       * Submission was too early.
       **/
      PreDispatchEarlySubmission: AugmentedError<ApiType>;
      /**
       * Submission was too weak, score-wise.
       **/
      PreDispatchWeakSubmission: AugmentedError<ApiType>;
      /**
       * Wrong number of winners presented.
       **/
      PreDispatchWrongWinnerCount: AugmentedError<ApiType>;
      /**
       * The origin failed to pay the deposit.
       **/
      SignedCannotPayDeposit: AugmentedError<ApiType>;
      /**
       * Witness data to dispatchable is invalid.
       **/
      SignedInvalidWitness: AugmentedError<ApiType>;
      /**
       * The queue was full, and the solution was not better than any of the existing ones.
       **/
      SignedQueueFull: AugmentedError<ApiType>;
      /**
       * The signed submission consumes too much weight
       **/
      SignedTooMuchWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    elections: {
      /**
       * Duplicated candidate submission.
       **/
      DuplicatedCandidate: AugmentedError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      InsufficientCandidateFunds: AugmentedError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      InvalidRenouncing: AugmentedError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      InvalidReplacement: AugmentedError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      InvalidVoteCount: AugmentedError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      InvalidWitnessData: AugmentedError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      MaximumVotesExceeded: AugmentedError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      MemberSubmit: AugmentedError<ApiType>;
      /**
       * Must be a voter.
       **/
      MustBeVoter: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * Cannot report self.
       **/
      ReportSelf: AugmentedError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      RunnerUpSubmit: AugmentedError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      TooManyVotes: AugmentedError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      UnableToPayBond: AugmentedError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      UnableToVote: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    gilt: {
      /**
       * The amount of the bid is less than the minimum allowed.
       **/
      AmountTooSmall: AugmentedError<ApiType>;
      /**
       * The queue for the bid's duration is full and the amount bid is too low to get in
       * through replacing an existing bid.
       **/
      BidTooLow: AugmentedError<ApiType>;
      /**
       * The duration is the bid is greater than the number of queues.
       **/
      DurationTooBig: AugmentedError<ApiType>;
      /**
       * The duration of the bid is less than one.
       **/
      DurationTooSmall: AugmentedError<ApiType>;
      /**
       * Gilt not yet at expiry date.
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * The given bid for retraction is not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Not the owner of the gilt.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * Gilt index is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    imOnline: {
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    indices: {
      /**
       * The index was not available.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The index was not already assigned.
       **/
      NotAssigned: AugmentedError<ApiType>;
      /**
       * The index is assigned to another account.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The source and destination accounts are identical.
       **/
      NotTransfer: AugmentedError<ApiType>;
      /**
       * The index is permanent and may not be freed/changed.
       **/
      Permanent: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    lottery: {
      /**
       * A lottery has already ended.
       **/
      AlreadyEnded: AugmentedError<ApiType>;
      /**
       * You are already participating in the lottery with this call.
       **/
      AlreadyParticipating: AugmentedError<ApiType>;
      /**
       * Failed to encode calls
       **/
      EncodingFailed: AugmentedError<ApiType>;
      /**
       * A lottery is already in progress.
       **/
      InProgress: AugmentedError<ApiType>;
      /**
       * The call is not valid for an open lottery.
       **/
      InvalidCall: AugmentedError<ApiType>;
      /**
       * A lottery has not been configured.
       **/
      NotConfigured: AugmentedError<ApiType>;
      /**
       * Too many calls for a single lottery.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    recovery: {
      /**
       * This account is already set up for recovery
       **/
      AlreadyProxy: AugmentedError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      AlreadyRecoverable: AugmentedError<ApiType>;
      /**
       * A recovery process has already started for this account
       **/
      AlreadyStarted: AugmentedError<ApiType>;
      /**
       * This user has already vouched for this recovery
       **/
      AlreadyVouched: AugmentedError<ApiType>;
      /**
       * Some internal state is broken.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * The friend must wait until the delay period to vouch for this recovery
       **/
      DelayPeriod: AugmentedError<ApiType>;
      /**
       * Friends list must be less than max friends
       **/
      MaxFriends: AugmentedError<ApiType>;
      /**
       * User is not allowed to make a call on behalf of this account
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * Friends list must be greater than zero and threshold
       **/
      NotEnoughFriends: AugmentedError<ApiType>;
      /**
       * This account is not a friend who can vouch
       **/
      NotFriend: AugmentedError<ApiType>;
      /**
       * This account is not set up for recovery
       **/
      NotRecoverable: AugmentedError<ApiType>;
      /**
       * Friends list must be sorted and free of duplicates
       **/
      NotSorted: AugmentedError<ApiType>;
      /**
       * A recovery process has not started for this rescuer
       **/
      NotStarted: AugmentedError<ApiType>;
      /**
       * There are still active recovery attempts that need to be closed
       **/
      StillActive: AugmentedError<ApiType>;
      /**
       * The threshold for recovering this account has not been met
       **/
      Threshold: AugmentedError<ApiType>;
      /**
       * Threshold must be greater than zero
       **/
      ZeroThreshold: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    society: {
      /**
       * User has already made a bid.
       **/
      AlreadyBid: AugmentedError<ApiType>;
      /**
       * User is already a candidate.
       **/
      AlreadyCandidate: AugmentedError<ApiType>;
      /**
       * Society already founded.
       **/
      AlreadyFounded: AugmentedError<ApiType>;
      /**
       * User is already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Member is already vouching or banned from vouching again.
       **/
      AlreadyVouching: AugmentedError<ApiType>;
      /**
       * An incorrect position was provided.
       **/
      BadPosition: AugmentedError<ApiType>;
      /**
       * Cannot remove the founder.
       **/
      Founder: AugmentedError<ApiType>;
      /**
       * Cannot remove the head of the chain.
       **/
      Head: AugmentedError<ApiType>;
      /**
       * Not enough in pot to accept candidate.
       **/
      InsufficientPot: AugmentedError<ApiType>;
      /**
       * Too many members in the society.
       **/
      MaxMembers: AugmentedError<ApiType>;
      /**
       * Nothing to payout.
       **/
      NoPayout: AugmentedError<ApiType>;
      /**
       * User is not a candidate.
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * The caller is not the founder.
       **/
      NotFounder: AugmentedError<ApiType>;
      /**
       * The caller is not the head.
       **/
      NotHead: AugmentedError<ApiType>;
      /**
       * User is not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * User is not suspended.
       **/
      NotSuspended: AugmentedError<ApiType>;
      /**
       * Member is not vouching.
       **/
      NotVouching: AugmentedError<ApiType>;
      /**
       * User is suspended.
       **/
      Suspended: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    staking: {
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Controller is already paired.
       **/
      AlreadyPaired: AugmentedError<ApiType>;
      /**
       * Internal state has become somehow corrupted and the operation cannot continue.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * A nomination target was supplied that was blocked or otherwise not a validator.
       **/
      BadTarget: AugmentedError<ApiType>;
      /**
       * The user has enough bond and thus cannot be chilled forcefully by an external person.
       **/
      CannotChillOther: AugmentedError<ApiType>;
      /**
       * Duplicate index.
       **/
      DuplicateIndex: AugmentedError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      EmptyTargets: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      IncorrectSlashingSpans: AugmentedError<ApiType>;
      /**
       * Cannot have a validator or nominator role, with value less than the minimum defined by
       * governance (see `MinValidatorBond` and `MinNominatorBond`). If unbonding is the
       * intention, `chill` first to remove one's role as validator/nominator.
       **/
      InsufficientBond: AugmentedError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      InvalidEraToReward: AugmentedError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      InvalidNumberOfNominations: AugmentedError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      InvalidSlashIndex: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      NotSortedAndUnique: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedError<ApiType>;
      /**
       * There are too many nominators in the system. Governance needs to adjust the staking
       * settings to keep things safe for the runtime.
       **/
      TooManyNominators: AugmentedError<ApiType>;
      /**
       * Too many nomination targets supplied.
       **/
      TooManyTargets: AugmentedError<ApiType>;
      /**
       * There are too many validators in the system. Governance needs to adjust the staking
       * settings to keep things safe for the runtime.
       **/
      TooManyValidators: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tips: {
      /**
       * The tip was already found/started.
       **/
      AlreadyKnown: AugmentedError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      NotFinder: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      StillOpen: AugmentedError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      UnknownTip: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    transactionStorage: {
      /**
       * Attempted to call `store` outside of block execution.
       **/
      BadContext: AugmentedError<ApiType>;
      /**
       * Double proof check in the block.
       **/
      DoubleCheck: AugmentedError<ApiType>;
      /**
       * Attempting to store empty transaction
       **/
      EmptyTransaction: AugmentedError<ApiType>;
      /**
       * Insufficient account balance.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Proof failed verification.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Missing storage proof.
       **/
      MissingProof: AugmentedError<ApiType>;
      /**
       * Unable to verify proof becasue state data is missing.
       **/
      MissingStateData: AugmentedError<ApiType>;
      /**
       * Invalid configuration.
       **/
      NotConfigured: AugmentedError<ApiType>;
      /**
       * Storage proof was not checked in the block.
       **/
      ProofNotChecked: AugmentedError<ApiType>;
      /**
       * Renewed extrinsic is not found.
       **/
      RenewedNotFound: AugmentedError<ApiType>;
      /**
       * Too many transactions in the block.
       **/
      TooManyTransactions: AugmentedError<ApiType>;
      /**
       * Transaction is too large.
       **/
      TransactionTooLarge: AugmentedError<ApiType>;
      /**
       * Proof was not expected in this block.
       **/
      UnexpectedProof: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    uniques: {
      /**
       * The asset instance ID has already been used for an asset.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * The asset instance or class is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * There is no delegate approved.
       **/
      NoDelegate: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The delegate turned out to be different to what was expected.
       **/
      WrongDelegate: AugmentedError<ApiType>;
      /**
       * The owner turned out to be different to what was expected.
       **/
      WrongOwner: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * The account already has `MaxVestingSchedules` count of schedules and thus
       * cannot add another one. Consider merging existing schedules in order to add another.
       **/
      AtMaxVestingSchedules: AugmentedError<ApiType>;
      /**
       * Failed to create a new schedule because some parameter was invalid.
       **/
      InvalidScheduleParams: AugmentedError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      NotVesting: AugmentedError<ApiType>;
      /**
       * An index was out of bounds of the vesting schedules.
       **/
      ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
    [key: string]: ModuleErrors<ApiType>;
  }
}
