// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    assets: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Transfer amount should be non-zero.
       **/
      AmountZero: AugmentedIsError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedIsError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      BalanceLow: AugmentedIsError<ApiType>;
      /**
       * Balance should be non-zero.
       **/
      BalanceZero: AugmentedIsError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedIsError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedIsError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedIsError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedIsError<ApiType>;
      /**
       * A mint operation lead to an overflow.
       **/
      Overflow: AugmentedIsError<ApiType>;
      /**
       * Attempt to destroy an asset class when non-zombie, reference-bearing accounts exist.
       **/
      RefsLeft: AugmentedIsError<ApiType>;
      /**
       * Too many zombie accounts in use.
       **/
      TooManyZombies: AugmentedIsError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedIsError<ApiType>;
    };
    authorship: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * The uncle is genesis.
       **/
      GenesisUncle: AugmentedIsError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      InvalidUncleParent: AugmentedIsError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      OldUncle: AugmentedIsError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      TooHighUncle: AugmentedIsError<ApiType>;
      /**
       * Too many uncles.
       **/
      TooManyUncles: AugmentedIsError<ApiType>;
      /**
       * The uncle is already included.
       **/
      UncleAlreadyIncluded: AugmentedIsError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      UnclesAlreadySet: AugmentedIsError<ApiType>;
    };
    balances: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedIsError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedIsError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedIsError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedIsError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedIsError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedIsError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      Overflow: AugmentedIsError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedIsError<ApiType>;
    };
    bounties: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedIsError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedIsError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedIsError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedIsError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedIsError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedIsError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedIsError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedIsError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedIsError<ApiType>;
    };
    contracts: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Performing the requested transfer would have brought the contract below
       * the subsistence threshold. No transfer is allowed to do this in order to allow
       * for a tombstone to be created. Use `seal_terminate` to remove a contract without
       * leaving a tombstone behind.
       **/
      BelowSubsistenceThreshold: AugmentedIsError<ApiType>;
      /**
       * No code could be found at the supplied code hash.
       **/
      CodeNotFound: AugmentedIsError<ApiType>;
      /**
       * The code supplied to `put_code` exceeds the limit specified in the current schedule.
       **/
      CodeTooLarge: AugmentedIsError<ApiType>;
      /**
       * Contract trapped during execution.
       **/
      ContractTrapped: AugmentedIsError<ApiType>;
      /**
       * Input passed to a contract API function failed to decode as expected type.
       **/
      DecodingFailed: AugmentedIsError<ApiType>;
      /**
       * An origin TrieId written in the current block.
       **/
      InvalidContractOrigin: AugmentedIsError<ApiType>;
      /**
       * Cannot restore to nonexisting or alive contract.
       **/
      InvalidDestinationContract: AugmentedIsError<ApiType>;
      /**
       * A new schedule must have a greater version than the current one.
       **/
      InvalidScheduleVersion: AugmentedIsError<ApiType>;
      /**
       * Cannot restore from nonexisting or tombstone contract.
       **/
      InvalidSourceContract: AugmentedIsError<ApiType>;
      /**
       * An origin must be signed or inherent and auxiliary sender only provided on inherent.
       **/
      InvalidSurchargeClaim: AugmentedIsError<ApiType>;
      /**
       * Tombstones don't match.
       **/
      InvalidTombstone: AugmentedIsError<ApiType>;
      /**
       * Performing a call was denied because the calling depth reached the limit
       * of what is specified in the schedule.
       **/
      MaxCallDepthReached: AugmentedIsError<ApiType>;
      /**
       * The newly created contract is below the subsistence threshold after executing
       * its contructor. No contracts are allowed to exist below that threshold.
       **/
      NewContractNotFunded: AugmentedIsError<ApiType>;
      /**
       * The contract that was called is either no contract at all (a plain account)
       * or is a tombstone.
       **/
      NotCallable: AugmentedIsError<ApiType>;
      /**
       * A buffer outside of sandbox memory was passed to a contract API function.
       **/
      OutOfBounds: AugmentedIsError<ApiType>;
      /**
       * The executed contract exhausted its gas limit.
       **/
      OutOfGas: AugmentedIsError<ApiType>;
      /**
       * The output buffer supplied to a contract API call was too small.
       **/
      OutputBufferTooSmall: AugmentedIsError<ApiType>;
      /**
       * The action performed is not allowed while the contract performing it is already
       * on the call stack. Those actions are contract self destruction and restoration
       * of a tombstone.
       **/
      ReentranceDenied: AugmentedIsError<ApiType>;
      /**
       * Performing the requested transfer failed for a reason originating in the
       * chosen currency implementation of the runtime. Most probably the balance is
       * too low or locks are placed on it.
       **/
      TransferFailed: AugmentedIsError<ApiType>;
      /**
       * The size defined in `T::MaxValueSize` was exceeded.
       **/
      ValueTooLarge: AugmentedIsError<ApiType>;
    };
    council: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedIsError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedIsError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedIsError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedIsError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedIsError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedIsError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedIsError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedIsError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedIsError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedIsError<ApiType>;
    };
    democracy: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedIsError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedIsError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedIsError<ApiType>;
      /**
       * Unknown index
       **/
      BadIndex: AugmentedIsError<ApiType>;
      /**
       * Preimage already noted
       **/
      DuplicatePreimage: AugmentedIsError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedIsError<ApiType>;
      /**
       * Imminent
       **/
      Imminent: AugmentedIsError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedIsError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedIsError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedIsError<ApiType>;
      /**
       * The provided witness data is wrong.
       **/
      InvalidWitness: AugmentedIsError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedIsError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedIsError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedIsError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedIsError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedIsError<ApiType>;
      /**
       * Not delegated
       **/
      NotDelegated: AugmentedIsError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedIsError<ApiType>;
      /**
       * The lock on the account to be unlocked has not yet expired.
       **/
      NotExpired: AugmentedIsError<ApiType>;
      /**
       * Not imminent
       **/
      NotImminent: AugmentedIsError<ApiType>;
      /**
       * The target account does not have a lock.
       **/
      NotLocked: AugmentedIsError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedIsError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedIsError<ApiType>;
      /**
       * An unexpected integer overflow occurred.
       **/
      Overflow: AugmentedIsError<ApiType>;
      /**
       * Invalid preimage
       **/
      PreimageInvalid: AugmentedIsError<ApiType>;
      /**
       * Preimage not found
       **/
      PreimageMissing: AugmentedIsError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedIsError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedIsError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedIsError<ApiType>;
      /**
       * Too early
       **/
      TooEarly: AugmentedIsError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      TooManyProposals: AugmentedIsError<ApiType>;
      /**
       * An unexpected integer underflow occurred.
       **/
      Underflow: AugmentedIsError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedIsError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedIsError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedIsError<ApiType>;
    };
    elections: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Duplicated candidate submission.
       **/
      DuplicatedCandidate: AugmentedIsError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      InsufficientCandidateFunds: AugmentedIsError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      InvalidCandidateCount: AugmentedIsError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      InvalidRenouncing: AugmentedIsError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      InvalidReplacement: AugmentedIsError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      InvalidVoteCount: AugmentedIsError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      LowBalance: AugmentedIsError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      MaximumVotesExceeded: AugmentedIsError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      MemberSubmit: AugmentedIsError<ApiType>;
      /**
       * Must be a voter.
       **/
      MustBeVoter: AugmentedIsError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedIsError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      NoVotes: AugmentedIsError<ApiType>;
      /**
       * Cannot report self.
       **/
      ReportSelf: AugmentedIsError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      RunnerSubmit: AugmentedIsError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      TooManyVotes: AugmentedIsError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      UnableToPayBond: AugmentedIsError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      UnableToVote: AugmentedIsError<ApiType>;
    };
    grandpa: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedIsError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedIsError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedIsError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedIsError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedIsError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedIsError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedIsError<ApiType>;
    };
    identity: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedIsError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedIsError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedIsError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedIsError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedIsError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedIsError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedIsError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedIsError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedIsError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedIsError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedIsError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedIsError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedIsError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedIsError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedIsError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedIsError<ApiType>;
    };
    imOnline: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedIsError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedIsError<ApiType>;
    };
    multisig: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedIsError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedIsError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedIsError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedIsError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedIsError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedIsError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedIsError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedIsError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedIsError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedIsError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedIsError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedIsError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      WeightTooLow: AugmentedIsError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedIsError<ApiType>;
    };
    proxy: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedIsError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedIsError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedIsError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedIsError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedIsError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedIsError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedIsError<ApiType>;
    };
    recovery: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      AlreadyProxy: AugmentedIsError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      AlreadyRecoverable: AugmentedIsError<ApiType>;
      /**
       * A recovery process has already started for this account
       **/
      AlreadyStarted: AugmentedIsError<ApiType>;
      /**
       * This user has already vouched for this recovery
       **/
      AlreadyVouched: AugmentedIsError<ApiType>;
      /**
       * The friend must wait until the delay period to vouch for this recovery
       **/
      DelayPeriod: AugmentedIsError<ApiType>;
      /**
       * Friends list must be less than max friends
       **/
      MaxFriends: AugmentedIsError<ApiType>;
      /**
       * User is not allowed to make a call on behalf of this account
       **/
      NotAllowed: AugmentedIsError<ApiType>;
      /**
       * Friends list must be greater than zero and threshold
       **/
      NotEnoughFriends: AugmentedIsError<ApiType>;
      /**
       * This account is not a friend who can vouch
       **/
      NotFriend: AugmentedIsError<ApiType>;
      /**
       * This account is not set up for recovery
       **/
      NotRecoverable: AugmentedIsError<ApiType>;
      /**
       * Friends list must be sorted and free of duplicates
       **/
      NotSorted: AugmentedIsError<ApiType>;
      /**
       * A recovery process has not started for this rescuer
       **/
      NotStarted: AugmentedIsError<ApiType>;
      /**
       * There was an overflow in a calculation
       **/
      Overflow: AugmentedIsError<ApiType>;
      /**
       * There are still active recovery attempts that need to be closed
       **/
      StillActive: AugmentedIsError<ApiType>;
      /**
       * The threshold for recovering this account has not been met
       **/
      Threshold: AugmentedIsError<ApiType>;
      /**
       * Threshold must be greater than zero
       **/
      ZeroThreshold: AugmentedIsError<ApiType>;
    };
    scheduler: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedIsError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedIsError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedIsError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedIsError<ApiType>;
    };
    session: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedIsError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedIsError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedIsError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedIsError<ApiType>;
    };
    society: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * User has already made a bid.
       **/
      AlreadyBid: AugmentedIsError<ApiType>;
      /**
       * User is already a candidate.
       **/
      AlreadyCandidate: AugmentedIsError<ApiType>;
      /**
       * Society already founded.
       **/
      AlreadyFounded: AugmentedIsError<ApiType>;
      /**
       * User is already a member.
       **/
      AlreadyMember: AugmentedIsError<ApiType>;
      /**
       * Member is already vouching or banned from vouching again.
       **/
      AlreadyVouching: AugmentedIsError<ApiType>;
      /**
       * An incorrect position was provided.
       **/
      BadPosition: AugmentedIsError<ApiType>;
      /**
       * Cannot remove the founder.
       **/
      Founder: AugmentedIsError<ApiType>;
      /**
       * Cannot remove the head of the chain.
       **/
      Head: AugmentedIsError<ApiType>;
      /**
       * Not enough in pot to accept candidate.
       **/
      InsufficientPot: AugmentedIsError<ApiType>;
      /**
       * Too many members in the society.
       **/
      MaxMembers: AugmentedIsError<ApiType>;
      /**
       * Nothing to payout.
       **/
      NoPayout: AugmentedIsError<ApiType>;
      /**
       * User is not a candidate.
       **/
      NotCandidate: AugmentedIsError<ApiType>;
      /**
       * The caller is not the founder.
       **/
      NotFounder: AugmentedIsError<ApiType>;
      /**
       * The caller is not the head.
       **/
      NotHead: AugmentedIsError<ApiType>;
      /**
       * User is not a member.
       **/
      NotMember: AugmentedIsError<ApiType>;
      /**
       * User is not suspended.
       **/
      NotSuspended: AugmentedIsError<ApiType>;
      /**
       * Member is not vouching.
       **/
      NotVouching: AugmentedIsError<ApiType>;
      /**
       * User is suspended.
       **/
      Suspended: AugmentedIsError<ApiType>;
    };
    staking: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedIsError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      AlreadyClaimed: AugmentedIsError<ApiType>;
      /**
       * Controller is already paired.
       **/
      AlreadyPaired: AugmentedIsError<ApiType>;
      /**
       * The call is not allowed at the given time due to restrictions of election period.
       **/
      CallNotAllowed: AugmentedIsError<ApiType>;
      /**
       * Duplicate index.
       **/
      DuplicateIndex: AugmentedIsError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      EmptyTargets: AugmentedIsError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedIsError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedIsError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      IncorrectSlashingSpans: AugmentedIsError<ApiType>;
      /**
       * Can not bond with value less than minimum balance.
       **/
      InsufficientValue: AugmentedIsError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      InvalidEraToReward: AugmentedIsError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      InvalidNumberOfNominations: AugmentedIsError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      InvalidSlashIndex: AugmentedIsError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedIsError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedIsError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      NotSortedAndUnique: AugmentedIsError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedIsError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedIsError<ApiType>;
      /**
       * Error while building the assignment type from the compact. This can happen if an index
       * is invalid, or if the weights _overflow_.
       **/
      OffchainElectionBogusCompact: AugmentedIsError<ApiType>;
      /**
       * The submitted result has unknown edges that are not among the presented winners.
       **/
      OffchainElectionBogusEdge: AugmentedIsError<ApiType>;
      /**
       * The election size is invalid.
       **/
      OffchainElectionBogusElectionSize: AugmentedIsError<ApiType>;
      /**
       * One of the submitted nominators has an edge to which they have not voted on chain.
       **/
      OffchainElectionBogusNomination: AugmentedIsError<ApiType>;
      /**
       * One of the submitted nominators is not an active nominator on chain.
       **/
      OffchainElectionBogusNominator: AugmentedIsError<ApiType>;
      /**
       * The claimed score does not match with the one computed from the data.
       **/
      OffchainElectionBogusScore: AugmentedIsError<ApiType>;
      /**
       * A self vote must only be originated from a validator to ONLY themselves.
       **/
      OffchainElectionBogusSelfVote: AugmentedIsError<ApiType>;
      /**
       * One of the submitted winners is not an active candidate on chain (index is out of range
       * in snapshot).
       **/
      OffchainElectionBogusWinner: AugmentedIsError<ApiType>;
      /**
       * Incorrect number of winners were presented.
       **/
      OffchainElectionBogusWinnerCount: AugmentedIsError<ApiType>;
      /**
       * The submitted result is received out of the open window.
       **/
      OffchainElectionEarlySubmission: AugmentedIsError<ApiType>;
      /**
       * One of the submitted nominators has an edge which is submitted before the last non-zero
       * slash of the target.
       **/
      OffchainElectionSlashedNomination: AugmentedIsError<ApiType>;
      /**
       * The submitted result is not as good as the one stored on chain.
       **/
      OffchainElectionWeakSubmission: AugmentedIsError<ApiType>;
      /**
       * The snapshot data of the current window is missing.
       **/
      SnapshotUnavailable: AugmentedIsError<ApiType>;
    };
    sudo: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedIsError<ApiType>;
    };
    system: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedIsError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedIsError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedIsError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedIsError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedIsError<ApiType>;
    };
    technicalCommittee: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedIsError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedIsError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedIsError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedIsError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedIsError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedIsError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedIsError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedIsError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedIsError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedIsError<ApiType>;
    };
    tips: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * The tip was already found/started.
       **/
      AlreadyKnown: AugmentedIsError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      NotFinder: AugmentedIsError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedIsError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedIsError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      StillOpen: AugmentedIsError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      UnknownTip: AugmentedIsError<ApiType>;
    };
    treasury: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedIsError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedIsError<ApiType>;
    };
    vesting: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      AmountLow: AugmentedIsError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered.
       **/
      ExistingVestingSchedule: AugmentedIsError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      NotVesting: AugmentedIsError<ApiType>;
    };
  }

  export interface IsErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
    [key: string]: IsModuleErrors<ApiType>;
  }
}
