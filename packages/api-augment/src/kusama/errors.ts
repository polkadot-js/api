// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    assetRate: {
      /**
       * The given asset ID already has an assigned conversion rate and cannot be re-created.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      UnknownAssetKind: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    auctions: {
      /**
       * The para is already leased out for part of this range.
       **/
      AlreadyLeasedOut: AugmentedError<ApiType>;
      /**
       * Auction has already ended.
       **/
      AuctionEnded: AugmentedError<ApiType>;
      /**
       * This auction is already in progress.
       **/
      AuctionInProgress: AugmentedError<ApiType>;
      /**
       * The lease period is in the past.
       **/
      LeasePeriodInPast: AugmentedError<ApiType>;
      /**
       * Not an auction.
       **/
      NotAuction: AugmentedError<ApiType>;
      /**
       * Not a current auction.
       **/
      NotCurrentAuction: AugmentedError<ApiType>;
      /**
       * Para is not registered
       **/
      ParaNotRegistered: AugmentedError<ApiType>;
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
       * Submitted configuration is invalid.
       **/
      InvalidConfiguration: AugmentedError<ApiType>;
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
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * The delta cannot be zero.
       **/
      DeltaZero: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * The issuance cannot be modified since it is already deactivated.
       **/
      IssuanceDeactivated: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    beefy: {
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * Submitted configuration is invalid.
       **/
      InvalidConfiguration: AugmentedError<ApiType>;
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
    bounties: {
      /**
       * The bounty cannot be closed because it has active child bounties.
       **/
      HasActiveChildBounty: AugmentedError<ApiType>;
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
       * Too many approvals are already queued.
       **/
      TooManyQueued: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    childBounties: {
      /**
       * The bounty balance is not enough to add new child-bounty.
       **/
      InsufficientBountyBalance: AugmentedError<ApiType>;
      /**
       * The parent bounty is not in active state.
       **/
      ParentBountyNotActive: AugmentedError<ApiType>;
      /**
       * Number of child bounties exceeds limit `MaxActiveChildBountyCount`.
       **/
      TooManyChildBounties: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    claims: {
      /**
       * Invalid Ethereum signature.
       **/
      InvalidEthereumSignature: AugmentedError<ApiType>;
      /**
       * A needed statement was not included.
       **/
      InvalidStatement: AugmentedError<ApiType>;
      /**
       * There's not enough in the pot to pay out some unvested amount. Generally implies a
       * logic error.
       **/
      PotUnderflow: AugmentedError<ApiType>;
      /**
       * Account ID sending transaction has no claim.
       **/
      SenderHasNoClaim: AugmentedError<ApiType>;
      /**
       * Ethereum address has no claim.
       **/
      SignerHasNoClaim: AugmentedError<ApiType>;
      /**
       * The account already has a vested balance.
       **/
      VestedBalanceExists: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    configuration: {
      /**
       * The new value for a configuration parameter is invalid.
       **/
      InvalidNewValue: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    convictionVoting: {
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      AlreadyVoting: AugmentedError<ApiType>;
      /**
       * The class ID supplied is invalid.
       **/
      BadClass: AugmentedError<ApiType>;
      /**
       * The class must be supplied since it is not easily determinable from the state.
       **/
      ClassNeeded: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action right now but will do in the future.
       **/
      NoPermissionYet: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Poll is not ongoing.
       **/
      NotOngoing: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the poll.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    coretime: {
      /**
       * The paraid making the call is not the coretime brokerage system parachain.
       **/
      NotBroker: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    coretimeAssignmentProvider: {
      AssignmentsEmpty: AugmentedError<ApiType>;
      /**
       * Tried to add an unsorted set of assignments
       **/
      AssignmentsNotSorted: AugmentedError<ApiType>;
      /**
       * assign_core is only allowed to append new assignments at the end of already existing
       * ones.
       **/
      DisallowedInsert: AugmentedError<ApiType>;
      /**
       * Tried to insert a schedule for the same core and block number as an existing schedule
       **/
      DuplicateInsert: AugmentedError<ApiType>;
      /**
       * Assignments together exceeded 57600.
       **/
      OverScheduled: AugmentedError<ApiType>;
      /**
       * Assignments together less than 57600
       **/
      UnderScheduled: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    crowdloan: {
      /**
       * The fund is already in `NewRaise`
       **/
      AlreadyInNewRaise: AugmentedError<ApiType>;
      /**
       * This parachain's bid or lease is still active and withdraw cannot yet begin.
       **/
      BidOrLeaseActive: AugmentedError<ApiType>;
      /**
       * The campaign ends before the current block number. The end must be in the future.
       **/
      CannotEndInPast: AugmentedError<ApiType>;
      /**
       * Contributions exceed maximum amount.
       **/
      CapExceeded: AugmentedError<ApiType>;
      /**
       * The contribution period has already ended.
       **/
      ContributionPeriodOver: AugmentedError<ApiType>;
      /**
       * The contribution was below the minimum, `MinContribution`.
       **/
      ContributionTooSmall: AugmentedError<ApiType>;
      /**
       * The end date for this crowdloan is not sensible.
       **/
      EndTooFarInFuture: AugmentedError<ApiType>;
      /**
       * The current lease period is more than the first lease period.
       **/
      FirstPeriodInPast: AugmentedError<ApiType>;
      /**
       * The first lease period needs to at least be less than 3 `max_value`.
       **/
      FirstPeriodTooFarInFuture: AugmentedError<ApiType>;
      /**
       * The crowdloan has not yet ended.
       **/
      FundNotEnded: AugmentedError<ApiType>;
      /**
       * The origin of this call is invalid.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * Invalid fund index.
       **/
      InvalidParaId: AugmentedError<ApiType>;
      /**
       * Invalid signature.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Last lease period must be greater than first lease period.
       **/
      LastPeriodBeforeFirstPeriod: AugmentedError<ApiType>;
      /**
       * The last lease period cannot be more than 3 periods after the first period.
       **/
      LastPeriodTooFarInFuture: AugmentedError<ApiType>;
      /**
       * This parachain lease is still active and retirement cannot yet begin.
       **/
      LeaseActive: AugmentedError<ApiType>;
      /**
       * The provided memo is too large.
       **/
      MemoTooLarge: AugmentedError<ApiType>;
      /**
       * There are no contributions stored in this crowdloan.
       **/
      NoContributions: AugmentedError<ApiType>;
      /**
       * A lease period has not started yet, due to an offset in the starting block.
       **/
      NoLeasePeriod: AugmentedError<ApiType>;
      /**
       * This crowdloan does not correspond to a parachain.
       **/
      NotParachain: AugmentedError<ApiType>;
      /**
       * The crowdloan is not ready to dissolve. Potentially still has a slot or in retirement
       * period.
       **/
      NotReadyToDissolve: AugmentedError<ApiType>;
      /**
       * There was an overflow.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * No contributions allowed during the VRF delay
       **/
      VrfDelayInProgress: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * Some bound not met
       **/
      BoundNotMet: AugmentedError<ApiType>;
      /**
       * The call is not allowed at this point.
       **/
      CallNotAllowed: AugmentedError<ApiType>;
      /**
       * The fallback failed
       **/
      FallbackFailed: AugmentedError<ApiType>;
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
       * Sumission was prepared for a different round.
       **/
      PreDispatchDifferentRound: AugmentedError<ApiType>;
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
       * Submitted solution has too many winners
       **/
      TooManyWinners: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    fastUnstake: {
      /**
       * The provided un-staker is already in Head, and cannot deregister.
       **/
      AlreadyHead: AugmentedError<ApiType>;
      /**
       * The bonded account has already been queued.
       **/
      AlreadyQueued: AugmentedError<ApiType>;
      /**
       * The call is not allowed at this point because the pallet is not active.
       **/
      CallNotAllowed: AugmentedError<ApiType>;
      /**
       * The provided Controller account was not found.
       * 
       * This means that the given account is not bonded.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * The bonded account has active unlocking chunks.
       **/
      NotFullyBonded: AugmentedError<ApiType>;
      /**
       * The provided un-staker is not in the `Queue`.
       **/
      NotQueued: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    fellowshipCollective: {
      /**
       * Account is already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Unexpected error in state.
       **/
      Corruption: AugmentedError<ApiType>;
      /**
       * The information provided is incorrect.
       **/
      InvalidWitness: AugmentedError<ApiType>;
      /**
       * There are no further records to be removed.
       **/
      NoneRemaining: AugmentedError<ApiType>;
      /**
       * The origin is not sufficiently privileged to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Account is not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * The given poll index is unknown or has closed.
       **/
      NotPolling: AugmentedError<ApiType>;
      /**
       * The given poll is still ongoing.
       **/
      Ongoing: AugmentedError<ApiType>;
      /**
       * The member's rank is too low to vote.
       **/
      RankTooLow: AugmentedError<ApiType>;
      /**
       * The new member to exchange is the same as the old member
       **/
      SameMember: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    fellowshipReferenda: {
      /**
       * The referendum index provided is invalid in this context.
       **/
      BadReferendum: AugmentedError<ApiType>;
      /**
       * The referendum status is invalid for this operation.
       **/
      BadStatus: AugmentedError<ApiType>;
      /**
       * The track identifier given was invalid.
       **/
      BadTrack: AugmentedError<ApiType>;
      /**
       * There are already a full complement of referenda in progress for this track.
       **/
      Full: AugmentedError<ApiType>;
      /**
       * Referendum's decision deposit is already paid.
       **/
      HasDeposit: AugmentedError<ApiType>;
      /**
       * The deposit cannot be refunded since none was made.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The deposit refunder is not the depositor.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * There was nothing to do in the advancement.
       **/
      NothingToDo: AugmentedError<ApiType>;
      /**
       * Referendum is not ongoing.
       **/
      NotOngoing: AugmentedError<ApiType>;
      /**
       * No track exists for the proposal origin.
       **/
      NoTrack: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * The queue of the track is empty.
       **/
      QueueEmpty: AugmentedError<ApiType>;
      /**
       * Any deposit cannot be refunded until after the decision is over.
       **/
      Unfinished: AugmentedError<ApiType>;
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
    hrmp: {
      /**
       * The channel is already confirmed.
       **/
      AcceptHrmpChannelAlreadyConfirmed: AugmentedError<ApiType>;
      /**
       * The channel from the sender to the origin doesn't exist.
       **/
      AcceptHrmpChannelDoesntExist: AugmentedError<ApiType>;
      /**
       * The recipient already has the maximum number of allowed inbound channels.
       **/
      AcceptHrmpChannelLimitExceeded: AugmentedError<ApiType>;
      /**
       * Canceling is requested by neither the sender nor recipient of the open channel request.
       **/
      CancelHrmpOpenChannelUnauthorized: AugmentedError<ApiType>;
      /**
       * The channel between these two chains cannot be authorized.
       **/
      ChannelCreationNotAuthorized: AugmentedError<ApiType>;
      /**
       * The channel close request is already requested.
       **/
      CloseHrmpChannelAlreadyUnderway: AugmentedError<ApiType>;
      /**
       * The channel to be closed doesn't exist.
       **/
      CloseHrmpChannelDoesntExist: AugmentedError<ApiType>;
      /**
       * The origin tries to close a channel where it is neither the sender nor the recipient.
       **/
      CloseHrmpChannelUnauthorized: AugmentedError<ApiType>;
      /**
       * Cannot cancel an HRMP open channel request because it is already confirmed.
       **/
      OpenHrmpChannelAlreadyConfirmed: AugmentedError<ApiType>;
      /**
       * The channel already exists
       **/
      OpenHrmpChannelAlreadyExists: AugmentedError<ApiType>;
      /**
       * There is already a request to open the same channel.
       **/
      OpenHrmpChannelAlreadyRequested: AugmentedError<ApiType>;
      /**
       * The requested capacity exceeds the global limit.
       **/
      OpenHrmpChannelCapacityExceedsLimit: AugmentedError<ApiType>;
      /**
       * The open request doesn't exist.
       **/
      OpenHrmpChannelDoesntExist: AugmentedError<ApiType>;
      /**
       * The recipient is not a valid para.
       **/
      OpenHrmpChannelInvalidRecipient: AugmentedError<ApiType>;
      /**
       * The sender already has the maximum number of allowed outbound channels.
       **/
      OpenHrmpChannelLimitExceeded: AugmentedError<ApiType>;
      /**
       * The open request requested the message size that exceeds the global limit.
       **/
      OpenHrmpChannelMessageSizeExceedsLimit: AugmentedError<ApiType>;
      /**
       * The sender tried to open a channel to themselves.
       **/
      OpenHrmpChannelToSelf: AugmentedError<ApiType>;
      /**
       * The requested capacity is zero.
       **/
      OpenHrmpChannelZeroCapacity: AugmentedError<ApiType>;
      /**
       * The requested maximum message size is 0.
       **/
      OpenHrmpChannelZeroMessageSize: AugmentedError<ApiType>;
      /**
       * The provided witness data is wrong.
       **/
      WrongWitness: AugmentedError<ApiType>;
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
       * The signature on a username was not valid.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * The provided suffix is too long.
       **/
      InvalidSuffix: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The username does not meet the requirements.
       **/
      InvalidUsername: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
      /**
       * The authority cannot allocate any more usernames.
       **/
      NoAllocation: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * The username cannot be forcefully removed because it can still be accepted.
       **/
      NotExpired: AugmentedError<ApiType>;
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
       * The sender does not have permission to issue a username.
       **/
      NotUsernameAuthority: AugmentedError<ApiType>;
      /**
       * The requested username does not exist.
       **/
      NoUsername: AugmentedError<ApiType>;
      /**
       * Setting this username requires a signature, but none was provided.
       **/
      RequiresSignature: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * The username is already taken.
       **/
      UsernameTaken: AugmentedError<ApiType>;
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
    messageQueue: {
      /**
       * The message was already processed and cannot be processed again.
       **/
      AlreadyProcessed: AugmentedError<ApiType>;
      /**
       * There is temporarily not enough weight to continue servicing messages.
       **/
      InsufficientWeight: AugmentedError<ApiType>;
      /**
       * The referenced message could not be found.
       **/
      NoMessage: AugmentedError<ApiType>;
      /**
       * Page to be reaped does not exist.
       **/
      NoPage: AugmentedError<ApiType>;
      /**
       * Page is not reapable because it has items remaining to be processed and is not old
       * enough.
       **/
      NotReapable: AugmentedError<ApiType>;
      /**
       * The message is queued for future execution.
       **/
      Queued: AugmentedError<ApiType>;
      /**
       * The queue is paused and no message can be executed from it.
       * 
       * This can change at any time and may resolve in the future by re-trying.
       **/
      QueuePaused: AugmentedError<ApiType>;
      /**
       * Another call is in progress and needs to finish before this call can happen.
       **/
      RecursiveDisallowed: AugmentedError<ApiType>;
      /**
       * This message is temporarily unprocessable.
       * 
       * Such errors are expected, but not guaranteed, to resolve themselves eventually through
       * retrying.
       **/
      TemporarilyUnprocessable: AugmentedError<ApiType>;
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
    nis: {
      /**
       * The receipt is already communal.
       **/
      AlreadyCommunal: AugmentedError<ApiType>;
      /**
       * There are enough funds for what is required.
       **/
      AlreadyFunded: AugmentedError<ApiType>;
      /**
       * The receipt is already private.
       **/
      AlreadyPrivate: AugmentedError<ApiType>;
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
       * The operation would result in a receipt worth an insignficant value.
       **/
      MakesDust: AugmentedError<ApiType>;
      /**
       * Bond not yet at expiry date.
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * Not the owner of the receipt.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The portion supplied is beyond the value of the receipt.
       **/
      PortionTooBig: AugmentedError<ApiType>;
      /**
       * The thaw throttle has been reached for this period.
       **/
      Throttled: AugmentedError<ApiType>;
      /**
       * Not enough funds are held to pay out.
       **/
      Unfunded: AugmentedError<ApiType>;
      /**
       * The given bid for retraction is not found.
       **/
      UnknownBid: AugmentedError<ApiType>;
      /**
       * Receipt index is unknown.
       **/
      UnknownReceipt: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nisCounterpartBalances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * The delta cannot be zero.
       **/
      DeltaZero: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * The issuance cannot be modified since it is already deactivated.
       **/
      IssuanceDeactivated: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nominationPools: {
      /**
       * An account is already delegating in another pool. An account may only belong to one
       * pool at a time.
       **/
      AccountBelongsToOtherPool: AugmentedError<ApiType>;
      /**
       * Bonding extra is restricted to the exact pending reward amount.
       **/
      BondExtraRestricted: AugmentedError<ApiType>;
      /**
       * The pools state cannot be changed.
       **/
      CanNotChangeState: AugmentedError<ApiType>;
      /**
       * None of the funds can be withdrawn yet because the bonding duration has not passed.
       **/
      CannotWithdrawAny: AugmentedError<ApiType>;
      /**
       * The submitted changes to commission change rate are not allowed.
       **/
      CommissionChangeRateNotAllowed: AugmentedError<ApiType>;
      /**
       * Not enough blocks have surpassed since the last commission update.
       **/
      CommissionChangeThrottled: AugmentedError<ApiType>;
      /**
       * The supplied commission exceeds global maximum commission.
       **/
      CommissionExceedsGlobalMaximum: AugmentedError<ApiType>;
      /**
       * The supplied commission exceeds the max allowed commission.
       **/
      CommissionExceedsMaximum: AugmentedError<ApiType>;
      /**
       * Some error occurred that should never happen. This should be reported to the
       * maintainers.
       **/
      Defensive: AugmentedError<ApiType>;
      /**
       * The caller does not have adequate permissions.
       **/
      DoesNotHavePermission: AugmentedError<ApiType>;
      /**
       * The member is fully unbonded (and thus cannot access the bonded and reward pool
       * anymore to, for example, collect rewards).
       **/
      FullyUnbonding: AugmentedError<ApiType>;
      /**
       * Pool id provided is not correct/usable.
       **/
      InvalidPoolId: AugmentedError<ApiType>;
      /**
       * The pool's max commission cannot be set higher than the existing value.
       **/
      MaxCommissionRestricted: AugmentedError<ApiType>;
      /**
       * Too many members in the pool or system.
       **/
      MaxPoolMembers: AugmentedError<ApiType>;
      /**
       * The system is maxed out on pools.
       **/
      MaxPools: AugmentedError<ApiType>;
      /**
       * The member cannot unbond further chunks due to reaching the limit.
       **/
      MaxUnbondingLimit: AugmentedError<ApiType>;
      /**
       * Metadata exceeds [`Config::MaxMetadataLen`]
       **/
      MetadataExceedsMaxLen: AugmentedError<ApiType>;
      /**
       * The amount does not meet the minimum bond to either join or create a pool.
       * 
       * The depositor can never unbond to a value less than `Pallet::depositor_min_bond`. The
       * caller does not have nominating permissions for the pool. Members can never unbond to a
       * value below `MinJoinBond`.
       **/
      MinimumBondNotMet: AugmentedError<ApiType>;
      /**
       * No commission current has been set.
       **/
      NoCommissionCurrentSet: AugmentedError<ApiType>;
      /**
       * There is no pending commission to claim.
       **/
      NoPendingCommission: AugmentedError<ApiType>;
      /**
       * A pool must be in [`PoolState::Destroying`] in order for the depositor to unbond or for
       * other members to be permissionlessly unbonded.
       **/
      NotDestroying: AugmentedError<ApiType>;
      /**
       * No imbalance in the ED deposit for the pool.
       **/
      NothingToAdjust: AugmentedError<ApiType>;
      /**
       * Either a) the caller cannot make a valid kick or b) the pool is not destroying.
       **/
      NotKickerOrDestroying: AugmentedError<ApiType>;
      /**
       * The caller does not have nominating permissions for the pool.
       **/
      NotNominator: AugmentedError<ApiType>;
      /**
       * The pool is not open to join
       **/
      NotOpen: AugmentedError<ApiType>;
      /**
       * The transaction could not be executed due to overflow risk for the pool.
       **/
      OverflowRisk: AugmentedError<ApiType>;
      /**
       * Partial unbonding now allowed permissionlessly.
       **/
      PartialUnbondNotAllowedPermissionlessly: AugmentedError<ApiType>;
      /**
       * Pool id currently in use.
       **/
      PoolIdInUse: AugmentedError<ApiType>;
      /**
       * An account is not a member.
       **/
      PoolMemberNotFound: AugmentedError<ApiType>;
      /**
       * A (bonded) pool id does not exist.
       **/
      PoolNotFound: AugmentedError<ApiType>;
      /**
       * A reward pool does not exist. In all cases this is a system logic error.
       **/
      RewardPoolNotFound: AugmentedError<ApiType>;
      /**
       * A sub pool does not exist.
       **/
      SubPoolsNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    onDemandAssignmentProvider: {
      /**
       * The `ParaId` supplied to the `place_order` call is not a valid `ParaThread`, making the
       * call is invalid.
       **/
      InvalidParaId: AugmentedError<ApiType>;
      /**
       * The order queue is full, `place_order` will not continue.
       **/
      QueueFull: AugmentedError<ApiType>;
      /**
       * The current spot price is higher than the max amount specified in the `place_order`
       * call, making it invalid.
       **/
      SpotPriceHigherThanMaxAmount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    paraInclusion: {
      /**
       * Bitfield consists of zeros only.
       **/
      BitfieldAllZeros: AugmentedError<ApiType>;
      /**
       * Multiple bitfields submitted by same validator or validators out of order by index.
       **/
      BitfieldDuplicateOrUnordered: AugmentedError<ApiType>;
      /**
       * A bitfield that references a freed core,
       * either intentionally or as part of a concluded
       * invalid dispute.
       **/
      BitfieldReferencesFreedCore: AugmentedError<ApiType>;
      /**
       * Candidate scheduled despite pending candidate already existing for the para.
       **/
      CandidateScheduledBeforeParaFree: AugmentedError<ApiType>;
      /**
       * The candidate's relay-parent was not allowed. Either it was
       * not recent enough or it didn't advance based on the last parachain block.
       **/
      DisallowedRelayParent: AugmentedError<ApiType>;
      /**
       * Head data exceeds the configured maximum.
       **/
      HeadDataTooLarge: AugmentedError<ApiType>;
      /**
       * The candidate didn't follow the rules of HRMP watermark advancement.
       **/
      HrmpWatermarkMishandling: AugmentedError<ApiType>;
      /**
       * The downward message queue is not processed correctly.
       **/
      IncorrectDownwardMessageHandling: AugmentedError<ApiType>;
      /**
       * Insufficient (non-majority) backing.
       **/
      InsufficientBacking: AugmentedError<ApiType>;
      /**
       * Failed to compute group index for the core: either it's out of bounds
       * or the relay parent doesn't belong to the current session.
       **/
      InvalidAssignment: AugmentedError<ApiType>;
      /**
       * Invalid (bad signature, unknown validator, etc.) backing.
       **/
      InvalidBacking: AugmentedError<ApiType>;
      /**
       * Invalid signature
       **/
      InvalidBitfieldSignature: AugmentedError<ApiType>;
      /**
       * Invalid group index in core assignment.
       **/
      InvalidGroupIndex: AugmentedError<ApiType>;
      /**
       * The HRMP messages sent by the candidate is not valid.
       **/
      InvalidOutboundHrmp: AugmentedError<ApiType>;
      /**
       * At least one upward message sent does not pass the acceptance criteria.
       **/
      InvalidUpwardMessages: AugmentedError<ApiType>;
      /**
       * The validation code hash of the candidate is not valid.
       **/
      InvalidValidationCodeHash: AugmentedError<ApiType>;
      /**
       * Output code is too large
       **/
      NewCodeTooLarge: AugmentedError<ApiType>;
      /**
       * Collator did not sign PoV.
       **/
      NotCollatorSigned: AugmentedError<ApiType>;
      /**
       * The `para_head` hash in the candidate descriptor doesn't match the hash of the actual
       * para head in the commitments.
       **/
      ParaHeadMismatch: AugmentedError<ApiType>;
      /**
       * Code upgrade prematurely.
       **/
      PrematureCodeUpgrade: AugmentedError<ApiType>;
      /**
       * Scheduled cores out of order.
       **/
      ScheduledOutOfOrder: AugmentedError<ApiType>;
      /**
       * A different relay parent was provided compared to the on-chain stored one.
       **/
      UnexpectedRelayParent: AugmentedError<ApiType>;
      /**
       * Candidate submitted but para not scheduled.
       **/
      UnscheduledCandidate: AugmentedError<ApiType>;
      /**
       * Backed candidates are out of order (core index) or contain duplicates.
       **/
      UnsortedOrDuplicateBackedCandidates: AugmentedError<ApiType>;
      /**
       * Dispute statement sets are out of order or contain duplicates.
       **/
      UnsortedOrDuplicateDisputeStatementSet: AugmentedError<ApiType>;
      /**
       * Validator indices are out of order or contains duplicates.
       **/
      UnsortedOrDuplicateValidatorIndices: AugmentedError<ApiType>;
      /**
       * The validation data hash does not match expected.
       **/
      ValidationDataHashMismatch: AugmentedError<ApiType>;
      /**
       * Validator index out of bounds.
       **/
      ValidatorIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Availability bitfield has unexpected size.
       **/
      WrongBitfieldSize: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    paraInherent: {
      /**
       * A candidate was backed by a disabled validator
       **/
      BackedByDisabled: AugmentedError<ApiType>;
      /**
       * A candidate was backed even though the paraid was not scheduled.
       **/
      BackedOnUnscheduledCore: AugmentedError<ApiType>;
      /**
       * Disputed candidate that was concluded invalid.
       **/
      CandidateConcludedInvalid: AugmentedError<ApiType>;
      /**
       * A dispute statement was invalid.
       **/
      DisputeInvalid: AugmentedError<ApiType>;
      /**
       * The ordering of dispute statements was invalid.
       **/
      DisputeStatementsUnsortedOrDuplicates: AugmentedError<ApiType>;
      /**
       * The data given to the inherent will result in an overweight block.
       **/
      InherentOverweight: AugmentedError<ApiType>;
      /**
       * The hash of the submitted parent header doesn't correspond to the saved block hash of
       * the parent.
       **/
      InvalidParentHeader: AugmentedError<ApiType>;
      /**
       * Inclusion inherent called more than once per block.
       **/
      TooManyInclusionInherents: AugmentedError<ApiType>;
      /**
       * Too many candidates supplied.
       **/
      UnscheduledCandidate: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    paras: {
      /**
       * Para cannot be downgraded to an on-demand parachain.
       **/
      CannotDowngrade: AugmentedError<ApiType>;
      /**
       * Para cannot be offboarded at this time.
       **/
      CannotOffboard: AugmentedError<ApiType>;
      /**
       * Para cannot be onboarded because it is already tracked by our system.
       **/
      CannotOnboard: AugmentedError<ApiType>;
      /**
       * Para cannot be upgraded to a lease holding parachain.
       **/
      CannotUpgrade: AugmentedError<ApiType>;
      /**
       * Parachain cannot currently schedule a code upgrade.
       **/
      CannotUpgradeCode: AugmentedError<ApiType>;
      /**
       * Para is not registered in our system.
       **/
      NotRegistered: AugmentedError<ApiType>;
      /**
       * The given validator already has cast a vote.
       **/
      PvfCheckDoubleVote: AugmentedError<ApiType>;
      /**
       * The signature for the PVF pre-checking is invalid.
       **/
      PvfCheckInvalidSignature: AugmentedError<ApiType>;
      /**
       * The statement for PVF pre-checking is for a future session.
       **/
      PvfCheckStatementFuture: AugmentedError<ApiType>;
      /**
       * The statement for PVF pre-checking is stale.
       **/
      PvfCheckStatementStale: AugmentedError<ApiType>;
      /**
       * The given PVF does not exist at the moment of process a vote.
       **/
      PvfCheckSubjectInvalid: AugmentedError<ApiType>;
      /**
       * Claimed validator index is out of bounds.
       **/
      PvfCheckValidatorIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parasDisputes: {
      /**
       * Ancient dispute statement provided.
       **/
      AncientDisputeStatement: AugmentedError<ApiType>;
      /**
       * Duplicate dispute statement sets provided.
       **/
      DuplicateDisputeStatementSets: AugmentedError<ApiType>;
      /**
       * Validator vote submitted more than once to dispute.
       **/
      DuplicateStatement: AugmentedError<ApiType>;
      /**
       * Invalid signature on statement.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * A dispute vote from a malicious backer.
       **/
      MaliciousBacker: AugmentedError<ApiType>;
      /**
       * No backing votes were provides along dispute statements.
       **/
      MissingBackingVotes: AugmentedError<ApiType>;
      /**
       * A dispute where there are only votes on one side.
       **/
      SingleSidedDispute: AugmentedError<ApiType>;
      /**
       * Unconfirmed dispute statement sets provided.
       **/
      UnconfirmedDispute: AugmentedError<ApiType>;
      /**
       * Validator index on statement is out of bounds for session.
       **/
      ValidatorIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parasSlashing: {
      /**
       * The given slashing report is valid but already previously reported.
       **/
      DuplicateSlashingReport: AugmentedError<ApiType>;
      /**
       * The candidate hash is invalid.
       **/
      InvalidCandidateHash: AugmentedError<ApiType>;
      /**
       * The key ownership proof is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * The session index is too old or invalid.
       **/
      InvalidSessionIndex: AugmentedError<ApiType>;
      /**
       * There is no pending slash for the given validator index and time
       * slot.
       **/
      InvalidValidatorIndex: AugmentedError<ApiType>;
      /**
       * The validator index does not match the validator id.
       **/
      ValidatorIndexIdMismatch: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Too few hashes were requested to be upgraded (i.e. zero).
       **/
      TooFew: AugmentedError<ApiType>;
      /**
       * More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
       **/
      TooMany: AugmentedError<ApiType>;
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
    referenda: {
      /**
       * The referendum index provided is invalid in this context.
       **/
      BadReferendum: AugmentedError<ApiType>;
      /**
       * The referendum status is invalid for this operation.
       **/
      BadStatus: AugmentedError<ApiType>;
      /**
       * The track identifier given was invalid.
       **/
      BadTrack: AugmentedError<ApiType>;
      /**
       * There are already a full complement of referenda in progress for this track.
       **/
      Full: AugmentedError<ApiType>;
      /**
       * Referendum's decision deposit is already paid.
       **/
      HasDeposit: AugmentedError<ApiType>;
      /**
       * The deposit cannot be refunded since none was made.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The deposit refunder is not the depositor.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * There was nothing to do in the advancement.
       **/
      NothingToDo: AugmentedError<ApiType>;
      /**
       * Referendum is not ongoing.
       **/
      NotOngoing: AugmentedError<ApiType>;
      /**
       * No track exists for the proposal origin.
       **/
      NoTrack: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * The queue of the track is empty.
       **/
      QueueEmpty: AugmentedError<ApiType>;
      /**
       * Any deposit cannot be refunded until after the decision is over.
       **/
      Unfinished: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    registrar: {
      /**
       * The ID is already registered.
       **/
      AlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Cannot deregister para
       **/
      CannotDeregister: AugmentedError<ApiType>;
      /**
       * Cannot schedule downgrade of lease holding parachain to on-demand parachain
       **/
      CannotDowngrade: AugmentedError<ApiType>;
      /**
       * Cannot perform a parachain slot / lifecycle swap. Check that the state of both paras
       * are correct for the swap to work.
       **/
      CannotSwap: AugmentedError<ApiType>;
      /**
       * Cannot schedule upgrade of on-demand parachain to lease holding parachain
       **/
      CannotUpgrade: AugmentedError<ApiType>;
      /**
       * Invalid para code size.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * Registering parachain with empty code is not allowed.
       **/
      EmptyCode: AugmentedError<ApiType>;
      /**
       * Invalid para head data size.
       **/
      HeadDataTooLarge: AugmentedError<ApiType>;
      /**
       * The caller is not the owner of this Id.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * Para is not a Parachain.
       **/
      NotParachain: AugmentedError<ApiType>;
      /**
       * Para is not a Parathread (on-demand parachain).
       **/
      NotParathread: AugmentedError<ApiType>;
      /**
       * The ID is not registered.
       **/
      NotRegistered: AugmentedError<ApiType>;
      /**
       * The ID given for registration has not been reserved.
       **/
      NotReserved: AugmentedError<ApiType>;
      /**
       * Para is locked from manipulation by the manager. Must use parachain or relay chain
       * governance.
       **/
      ParaLocked: AugmentedError<ApiType>;
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
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
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
    slots: {
      /**
       * There was an error with the lease.
       **/
      LeaseError: AugmentedError<ApiType>;
      /**
       * The parachain ID is not onboarding.
       **/
      ParaNotOnboarding: AugmentedError<ApiType>;
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
       * The member is already elevated to this rank.
       **/
      AlreadyElevated: AugmentedError<ApiType>;
      /**
       * Society already founded.
       **/
      AlreadyFounded: AugmentedError<ApiType>;
      /**
       * User is already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * The skeptic has already been punished for this offence.
       **/
      AlreadyPunished: AugmentedError<ApiType>;
      /**
       * Member is already vouching or banned from vouching again.
       **/
      AlreadyVouching: AugmentedError<ApiType>;
      /**
       * The candidacy cannot be dropped as the candidate was clearly approved.
       **/
      Approved: AugmentedError<ApiType>;
      /**
       * The skeptic need not vote on candidates from expired rounds.
       **/
      Expired: AugmentedError<ApiType>;
      /**
       * Cannot remove the founder.
       **/
      Founder: AugmentedError<ApiType>;
      /**
       * Cannot remove the head of the chain.
       **/
      Head: AugmentedError<ApiType>;
      /**
       * The candidacy cannot be concluded as the voting is still in progress.
       **/
      InProgress: AugmentedError<ApiType>;
      /**
       * Funds are insufficient to pay off society debts.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Not enough in pot to accept candidate.
       **/
      InsufficientPot: AugmentedError<ApiType>;
      /**
       * Too many members in the society.
       **/
      MaxMembers: AugmentedError<ApiType>;
      /**
       * There is no defender currently.
       **/
      NoDefender: AugmentedError<ApiType>;
      /**
       * Nothing to payout.
       **/
      NoPayout: AugmentedError<ApiType>;
      /**
       * The membership cannot be claimed as the candidate was not clearly approved.
       **/
      NotApproved: AugmentedError<ApiType>;
      /**
       * User is not a bidder.
       **/
      NotBidder: AugmentedError<ApiType>;
      /**
       * User is not a candidate.
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * The caller is not the founder.
       **/
      NotFounder: AugmentedError<ApiType>;
      /**
       * Group doesn't exist.
       **/
      NotGroup: AugmentedError<ApiType>;
      /**
       * The caller is not the head.
       **/
      NotHead: AugmentedError<ApiType>;
      /**
       * User is not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * The candidate cannot be kicked as the candidate was not clearly rejected.
       **/
      NotRejected: AugmentedError<ApiType>;
      /**
       * User is not suspended.
       **/
      NotSuspended: AugmentedError<ApiType>;
      /**
       * Member is not vouching.
       **/
      NotVouchingOnBidder: AugmentedError<ApiType>;
      /**
       * The candidate/defender has no stale votes to remove.
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * The candidacy cannot be bestowed as the candidate was clearly rejected.
       **/
      Rejected: AugmentedError<ApiType>;
      /**
       * User is suspended.
       **/
      Suspended: AugmentedError<ApiType>;
      /**
       * The candidacy cannot be pruned until a full additional intake period has passed.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * The skeptic already voted.
       **/
      Voted: AugmentedError<ApiType>;
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
       * Some bound is not met.
       **/
      BoundNotMet: AugmentedError<ApiType>;
      /**
       * The user has enough bond and thus cannot be chilled forcefully by an external person.
       **/
      CannotChillOther: AugmentedError<ApiType>;
      /**
       * Commission is too low. Must be at least `MinCommission`.
       **/
      CommissionTooLow: AugmentedError<ApiType>;
      /**
       * Used when attempting to use deprecated controller account logic.
       **/
      ControllerDeprecated: AugmentedError<ApiType>;
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
       * No nominators exist on this page.
       **/
      InvalidPage: AugmentedError<ApiType>;
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
       * There are too many validator candidates in the system. Governance needs to adjust the
       * staking settings to keep things safe for the runtime.
       **/
      TooManyValidators: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    stateTrieMigration: {
      /**
       * Bad child root provided.
       **/
      BadChildRoot: AugmentedError<ApiType>;
      /**
       * Bad witness data provided.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * A key was longer than the configured maximum.
       * 
       * This means that the migration halted at the current [`Progress`] and
       * can be resumed with a larger [`crate::Config::MaxKeyLen`] value.
       * Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.
       * The value should only be increased to avoid a storage migration for the currently
       * stored [`crate::Progress::LastKey`].
       **/
      KeyTooLong: AugmentedError<ApiType>;
      /**
       * Max signed limits not respected.
       **/
      MaxSignedLimits: AugmentedError<ApiType>;
      /**
       * submitter does not have enough funds.
       **/
      NotEnoughFunds: AugmentedError<ApiType>;
      /**
       * Signed migration is not allowed because the maximum limit is not set yet.
       **/
      SignedMigrationNotAllowed: AugmentedError<ApiType>;
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
       * No upgrade authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * The submitted code is not authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The payment has already been attempted.
       **/
      AlreadyAttempted: AugmentedError<ApiType>;
      /**
       * The spend is not yet eligible for payout.
       **/
      EarlyPayout: AugmentedError<ApiType>;
      /**
       * The balance of the asset kind is not convertible to the balance of the native asset.
       **/
      FailedToConvertBalance: AugmentedError<ApiType>;
      /**
       * The payment has neither failed nor succeeded yet.
       **/
      Inconclusive: AugmentedError<ApiType>;
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal, bounty or spend at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * The payout was not yet attempted/claimed.
       **/
      NotAttempted: AugmentedError<ApiType>;
      /**
       * There was some issue with the mechanism of payment.
       **/
      PayoutError: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * The spend has expired and cannot be claimed.
       **/
      SpendExpired: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
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
    voterList: {
      /**
       * A error in the list interface implementation.
       **/
      List: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    whitelist: {
      /**
       * The call was already whitelisted; No-Op.
       **/
      CallAlreadyWhitelisted: AugmentedError<ApiType>;
      /**
       * The call was not whitelisted.
       **/
      CallIsNotWhitelisted: AugmentedError<ApiType>;
      /**
       * The weight of the decoded call was higher than the witness.
       **/
      InvalidCallWeightWitness: AugmentedError<ApiType>;
      /**
       * The preimage of the call hash could not be loaded.
       **/
      UnavailablePreImage: AugmentedError<ApiType>;
      /**
       * The call could not be decoded.
       **/
      UndecodableCall: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmPallet: {
      /**
       * The given account is not an identifiable sovereign account for any location.
       **/
      AccountNotSovereign: AugmentedError<ApiType>;
      /**
       * The location is invalid since it already has a subscription from us.
       **/
      AlreadySubscribed: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not check-out the assets for teleportation to the destination chain.
       **/
      CannotCheckOutTeleport: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `Location` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * The assets to be sent are empty.
       **/
      Empty: AugmentedError<ApiType>;
      /**
       * The operation required fees to be paid which the initiator could not meet.
       **/
      FeesNotMet: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * The unlock operation cannot succeed because there are still consumers of the lock.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Invalid non-concrete asset.
       **/
      InvalidAssetNotConcrete: AugmentedError<ApiType>;
      /**
       * Invalid asset, reserve chain could not be determined for it.
       **/
      InvalidAssetUnknownReserve: AugmentedError<ApiType>;
      /**
       * Invalid asset, do not support remote asset reserves with different fees reserves.
       **/
      InvalidAssetUnsupportedReserve: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * Local XCM execution incomplete.
       **/
      LocalExecutionIncomplete: AugmentedError<ApiType>;
      /**
       * A remote lock with the corresponding data could not be found.
       **/
      LockNotFound: AugmentedError<ApiType>;
      /**
       * The owner does not own (all) of the asset that they wish to do the operation on.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * The referenced subscription could not be found.
       **/
      NoSubscription: AugmentedError<ApiType>;
      /**
       * There was some other issue (i.e. not to do with routing) in sending the message.
       * Perhaps a lack of space for buffering the message.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Too many assets have been attempted for transfer.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The asset owner has too many locks on the asset.
       **/
      TooManyLocks: AugmentedError<ApiType>;
      /**
       * Too many assets with different reserve locations have been attempted for transfer.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
