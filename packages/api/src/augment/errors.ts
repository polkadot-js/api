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
      isAmountZero: AugmentedIsError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      isBadWitness: AugmentedIsError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      isBalanceLow: AugmentedIsError<ApiType>;
      /**
       * Balance should be non-zero.
       **/
      isBalanceZero: AugmentedIsError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      isFrozen: AugmentedIsError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      isInUse: AugmentedIsError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      isMinBalanceZero: AugmentedIsError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      isNoPermission: AugmentedIsError<ApiType>;
      /**
       * A mint operation lead to an overflow.
       **/
      isOverflow: AugmentedIsError<ApiType>;
      /**
       * Attempt to destroy an asset class when non-zombie, reference-bearing accounts exist.
       **/
      isRefsLeft: AugmentedIsError<ApiType>;
      /**
       * Too many zombie accounts in use.
       **/
      isTooManyZombies: AugmentedIsError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      isUnknown: AugmentedIsError<ApiType>;
    };
    authorship: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * The uncle is genesis.
       **/
      isGenesisUncle: AugmentedIsError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      isInvalidUncleParent: AugmentedIsError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      isOldUncle: AugmentedIsError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      isTooHighUncle: AugmentedIsError<ApiType>;
      /**
       * Too many uncles.
       **/
      isTooManyUncles: AugmentedIsError<ApiType>;
      /**
       * The uncle is already included.
       **/
      isUncleAlreadyIncluded: AugmentedIsError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      isUnclesAlreadySet: AugmentedIsError<ApiType>;
    };
    balances: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      isDeadAccount: AugmentedIsError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      isExistentialDeposit: AugmentedIsError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      isExistingVestingSchedule: AugmentedIsError<ApiType>;
      /**
       * Balance too low to send value
       **/
      isInsufficientBalance: AugmentedIsError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      isKeepAlive: AugmentedIsError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      isLiquidityRestrictions: AugmentedIsError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      isOverflow: AugmentedIsError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      isVestingBalance: AugmentedIsError<ApiType>;
    };
    bounties: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      isInsufficientProposersBalance: AugmentedIsError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      isInvalidFee: AugmentedIsError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      isInvalidIndex: AugmentedIsError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      isInvalidValue: AugmentedIsError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      isPendingPayout: AugmentedIsError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      isPremature: AugmentedIsError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      isReasonTooBig: AugmentedIsError<ApiType>;
      /**
       * Require bounty curator.
       **/
      isRequireCurator: AugmentedIsError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      isUnexpectedStatus: AugmentedIsError<ApiType>;
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
      isBelowSubsistenceThreshold: AugmentedIsError<ApiType>;
      /**
       * No code could be found at the supplied code hash.
       **/
      isCodeNotFound: AugmentedIsError<ApiType>;
      /**
       * The code supplied to `put_code` exceeds the limit specified in the current schedule.
       **/
      isCodeTooLarge: AugmentedIsError<ApiType>;
      /**
       * Contract trapped during execution.
       **/
      isContractTrapped: AugmentedIsError<ApiType>;
      /**
       * Input passed to a contract API function failed to decode as expected type.
       **/
      isDecodingFailed: AugmentedIsError<ApiType>;
      /**
       * An origin TrieId written in the current block.
       **/
      isInvalidContractOrigin: AugmentedIsError<ApiType>;
      /**
       * Cannot restore to nonexisting or alive contract.
       **/
      isInvalidDestinationContract: AugmentedIsError<ApiType>;
      /**
       * A new schedule must have a greater version than the current one.
       **/
      isInvalidScheduleVersion: AugmentedIsError<ApiType>;
      /**
       * Cannot restore from nonexisting or tombstone contract.
       **/
      isInvalidSourceContract: AugmentedIsError<ApiType>;
      /**
       * An origin must be signed or inherent and auxiliary sender only provided on inherent.
       **/
      isInvalidSurchargeClaim: AugmentedIsError<ApiType>;
      /**
       * Tombstones don't match.
       **/
      isInvalidTombstone: AugmentedIsError<ApiType>;
      /**
       * Performing a call was denied because the calling depth reached the limit
       * of what is specified in the schedule.
       **/
      isMaxCallDepthReached: AugmentedIsError<ApiType>;
      /**
       * The newly created contract is below the subsistence threshold after executing
       * its contructor. No contracts are allowed to exist below that threshold.
       **/
      isNewContractNotFunded: AugmentedIsError<ApiType>;
      /**
       * The contract that was called is either no contract at all (a plain account)
       * or is a tombstone.
       **/
      isNotCallable: AugmentedIsError<ApiType>;
      /**
       * A buffer outside of sandbox memory was passed to a contract API function.
       **/
      isOutOfBounds: AugmentedIsError<ApiType>;
      /**
       * The executed contract exhausted its gas limit.
       **/
      isOutOfGas: AugmentedIsError<ApiType>;
      /**
       * The output buffer supplied to a contract API call was too small.
       **/
      isOutputBufferTooSmall: AugmentedIsError<ApiType>;
      /**
       * The action performed is not allowed while the contract performing it is already
       * on the call stack. Those actions are contract self destruction and restoration
       * of a tombstone.
       **/
      isReentranceDenied: AugmentedIsError<ApiType>;
      /**
       * Performing the requested transfer failed for a reason originating in the
       * chosen currency implementation of the runtime. Most probably the balance is
       * too low or locks are placed on it.
       **/
      isTransferFailed: AugmentedIsError<ApiType>;
      /**
       * The size defined in `T::MaxValueSize` was exceeded.
       **/
      isValueTooLarge: AugmentedIsError<ApiType>;
    };
    council: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Members are already initialized!
       **/
      isAlreadyInitialized: AugmentedIsError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      isDuplicateProposal: AugmentedIsError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      isDuplicateVote: AugmentedIsError<ApiType>;
      /**
       * Account is not a member
       **/
      isNotMember: AugmentedIsError<ApiType>;
      /**
       * Proposal must exist
       **/
      isProposalMissing: AugmentedIsError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      isTooEarly: AugmentedIsError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      isTooManyProposals: AugmentedIsError<ApiType>;
      /**
       * Mismatched index
       **/
      isWrongIndex: AugmentedIsError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      isWrongProposalLength: AugmentedIsError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      isWrongProposalWeight: AugmentedIsError<ApiType>;
    };
    democracy: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Cannot cancel the same proposal twice
       **/
      isAlreadyCanceled: AugmentedIsError<ApiType>;
      /**
       * The account is already delegating.
       **/
      isAlreadyDelegating: AugmentedIsError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      isAlreadyVetoed: AugmentedIsError<ApiType>;
      /**
       * Unknown index
       **/
      isBadIndex: AugmentedIsError<ApiType>;
      /**
       * Preimage already noted
       **/
      isDuplicatePreimage: AugmentedIsError<ApiType>;
      /**
       * Proposal already made
       **/
      isDuplicateProposal: AugmentedIsError<ApiType>;
      /**
       * Imminent
       **/
      isImminent: AugmentedIsError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      isInstantNotAllowed: AugmentedIsError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      isInsufficientFunds: AugmentedIsError<ApiType>;
      /**
       * Invalid hash
       **/
      isInvalidHash: AugmentedIsError<ApiType>;
      /**
       * The provided witness data is wrong.
       **/
      isInvalidWitness: AugmentedIsError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      isMaxVotesReached: AugmentedIsError<ApiType>;
      /**
       * No proposals waiting
       **/
      isNoneWaiting: AugmentedIsError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      isNonsense: AugmentedIsError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      isNoPermission: AugmentedIsError<ApiType>;
      /**
       * No external proposal
       **/
      isNoProposal: AugmentedIsError<ApiType>;
      /**
       * Not delegated
       **/
      isNotDelegated: AugmentedIsError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      isNotDelegating: AugmentedIsError<ApiType>;
      /**
       * The lock on the account to be unlocked has not yet expired.
       **/
      isNotExpired: AugmentedIsError<ApiType>;
      /**
       * Not imminent
       **/
      isNotImminent: AugmentedIsError<ApiType>;
      /**
       * The target account does not have a lock.
       **/
      isNotLocked: AugmentedIsError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      isNotSimpleMajority: AugmentedIsError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      isNotVoter: AugmentedIsError<ApiType>;
      /**
       * An unexpected integer overflow occurred.
       **/
      isOverflow: AugmentedIsError<ApiType>;
      /**
       * Invalid preimage
       **/
      isPreimageInvalid: AugmentedIsError<ApiType>;
      /**
       * Preimage not found
       **/
      isPreimageMissing: AugmentedIsError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      isProposalBlacklisted: AugmentedIsError<ApiType>;
      /**
       * Proposal does not exist
       **/
      isProposalMissing: AugmentedIsError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      isReferendumInvalid: AugmentedIsError<ApiType>;
      /**
       * Too early
       **/
      isTooEarly: AugmentedIsError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      isTooManyProposals: AugmentedIsError<ApiType>;
      /**
       * An unexpected integer underflow occurred.
       **/
      isUnderflow: AugmentedIsError<ApiType>;
      /**
       * Value too low
       **/
      isValueLow: AugmentedIsError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      isVotesExist: AugmentedIsError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      isWrongUpperBound: AugmentedIsError<ApiType>;
    };
    elections: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Duplicated candidate submission.
       **/
      isDuplicatedCandidate: AugmentedIsError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      isInsufficientCandidateFunds: AugmentedIsError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      isInvalidCandidateCount: AugmentedIsError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      isInvalidRenouncing: AugmentedIsError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      isInvalidReplacement: AugmentedIsError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      isInvalidVoteCount: AugmentedIsError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      isLowBalance: AugmentedIsError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      isMaximumVotesExceeded: AugmentedIsError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      isMemberSubmit: AugmentedIsError<ApiType>;
      /**
       * Must be a voter.
       **/
      isMustBeVoter: AugmentedIsError<ApiType>;
      /**
       * Not a member.
       **/
      isNotMember: AugmentedIsError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      isNoVotes: AugmentedIsError<ApiType>;
      /**
       * Cannot report self.
       **/
      isReportSelf: AugmentedIsError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      isRunnerSubmit: AugmentedIsError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      isTooManyVotes: AugmentedIsError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      isUnableToPayBond: AugmentedIsError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      isUnableToVote: AugmentedIsError<ApiType>;
    };
    grandpa: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      isChangePending: AugmentedIsError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      isDuplicateOffenceReport: AugmentedIsError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      isInvalidEquivocationProof: AugmentedIsError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      isInvalidKeyOwnershipProof: AugmentedIsError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      isPauseFailed: AugmentedIsError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      isResumeFailed: AugmentedIsError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      isTooSoon: AugmentedIsError<ApiType>;
    };
    identity: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Account ID is already named.
       **/
      isAlreadyClaimed: AugmentedIsError<ApiType>;
      /**
       * Empty index.
       **/
      isEmptyIndex: AugmentedIsError<ApiType>;
      /**
       * Fee is changed.
       **/
      isFeeChanged: AugmentedIsError<ApiType>;
      /**
       * The index is invalid.
       **/
      isInvalidIndex: AugmentedIsError<ApiType>;
      /**
       * Invalid judgement.
       **/
      isInvalidJudgement: AugmentedIsError<ApiType>;
      /**
       * The target is invalid.
       **/
      isInvalidTarget: AugmentedIsError<ApiType>;
      /**
       * Judgement given.
       **/
      isJudgementGiven: AugmentedIsError<ApiType>;
      /**
       * No identity found.
       **/
      isNoIdentity: AugmentedIsError<ApiType>;
      /**
       * Account isn't found.
       **/
      isNotFound: AugmentedIsError<ApiType>;
      /**
       * Account isn't named.
       **/
      isNotNamed: AugmentedIsError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      isNotOwned: AugmentedIsError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      isNotSub: AugmentedIsError<ApiType>;
      /**
       * Sticky judgement.
       **/
      isStickyJudgement: AugmentedIsError<ApiType>;
      /**
       * Too many additional fields.
       **/
      isTooManyFields: AugmentedIsError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      isTooManyRegistrars: AugmentedIsError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      isTooManySubAccounts: AugmentedIsError<ApiType>;
    };
    imOnline: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Duplicated heartbeat.
       **/
      isDuplicatedHeartbeat: AugmentedIsError<ApiType>;
      /**
       * Non existent public key.
       **/
      isInvalidKey: AugmentedIsError<ApiType>;
    };
    multisig: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Call is already approved by this signatory.
       **/
      isAlreadyApproved: AugmentedIsError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      isAlreadyStored: AugmentedIsError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      isMinimumThreshold: AugmentedIsError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      isNoApprovalsNeeded: AugmentedIsError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      isNotFound: AugmentedIsError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      isNoTimepoint: AugmentedIsError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      isNotOwner: AugmentedIsError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      isSenderInSignatories: AugmentedIsError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      isSignatoriesOutOfOrder: AugmentedIsError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      isTooFewSignatories: AugmentedIsError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      isTooManySignatories: AugmentedIsError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      isUnexpectedTimepoint: AugmentedIsError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      isWeightTooLow: AugmentedIsError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      isWrongTimepoint: AugmentedIsError<ApiType>;
    };
    proxy: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Account is already a proxy.
       **/
      isDuplicate: AugmentedIsError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      isNoPermission: AugmentedIsError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      isNotFound: AugmentedIsError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      isNotProxy: AugmentedIsError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      isTooMany: AugmentedIsError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      isUnannounced: AugmentedIsError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      isUnproxyable: AugmentedIsError<ApiType>;
    };
    recovery: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      isAlreadyProxy: AugmentedIsError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      isAlreadyRecoverable: AugmentedIsError<ApiType>;
      /**
       * A recovery process has already started for this account
       **/
      isAlreadyStarted: AugmentedIsError<ApiType>;
      /**
       * This user has already vouched for this recovery
       **/
      isAlreadyVouched: AugmentedIsError<ApiType>;
      /**
       * The friend must wait until the delay period to vouch for this recovery
       **/
      isDelayPeriod: AugmentedIsError<ApiType>;
      /**
       * Friends list must be less than max friends
       **/
      isMaxFriends: AugmentedIsError<ApiType>;
      /**
       * User is not allowed to make a call on behalf of this account
       **/
      isNotAllowed: AugmentedIsError<ApiType>;
      /**
       * Friends list must be greater than zero and threshold
       **/
      isNotEnoughFriends: AugmentedIsError<ApiType>;
      /**
       * This account is not a friend who can vouch
       **/
      isNotFriend: AugmentedIsError<ApiType>;
      /**
       * This account is not set up for recovery
       **/
      isNotRecoverable: AugmentedIsError<ApiType>;
      /**
       * Friends list must be sorted and free of duplicates
       **/
      isNotSorted: AugmentedIsError<ApiType>;
      /**
       * A recovery process has not started for this rescuer
       **/
      isNotStarted: AugmentedIsError<ApiType>;
      /**
       * There was an overflow in a calculation
       **/
      isOverflow: AugmentedIsError<ApiType>;
      /**
       * There are still active recovery attempts that need to be closed
       **/
      isStillActive: AugmentedIsError<ApiType>;
      /**
       * The threshold for recovering this account has not been met
       **/
      isThreshold: AugmentedIsError<ApiType>;
      /**
       * Threshold must be greater than zero
       **/
      isZeroThreshold: AugmentedIsError<ApiType>;
    };
    scheduler: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Failed to schedule a call
       **/
      isFailedToSchedule: AugmentedIsError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      isNotFound: AugmentedIsError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      isRescheduleNoChange: AugmentedIsError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      isTargetBlockNumberInPast: AugmentedIsError<ApiType>;
    };
    session: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Registered duplicate key.
       **/
      isDuplicatedKey: AugmentedIsError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      isInvalidProof: AugmentedIsError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      isNoAssociatedValidatorId: AugmentedIsError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      isNoKeys: AugmentedIsError<ApiType>;
    };
    society: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * User has already made a bid.
       **/
      isAlreadyBid: AugmentedIsError<ApiType>;
      /**
       * User is already a candidate.
       **/
      isAlreadyCandidate: AugmentedIsError<ApiType>;
      /**
       * Society already founded.
       **/
      isAlreadyFounded: AugmentedIsError<ApiType>;
      /**
       * User is already a member.
       **/
      isAlreadyMember: AugmentedIsError<ApiType>;
      /**
       * Member is already vouching or banned from vouching again.
       **/
      isAlreadyVouching: AugmentedIsError<ApiType>;
      /**
       * An incorrect position was provided.
       **/
      isBadPosition: AugmentedIsError<ApiType>;
      /**
       * Cannot remove the founder.
       **/
      isFounder: AugmentedIsError<ApiType>;
      /**
       * Cannot remove the head of the chain.
       **/
      isHead: AugmentedIsError<ApiType>;
      /**
       * Not enough in pot to accept candidate.
       **/
      isInsufficientPot: AugmentedIsError<ApiType>;
      /**
       * Too many members in the society.
       **/
      isMaxMembers: AugmentedIsError<ApiType>;
      /**
       * Nothing to payout.
       **/
      isNoPayout: AugmentedIsError<ApiType>;
      /**
       * User is not a candidate.
       **/
      isNotCandidate: AugmentedIsError<ApiType>;
      /**
       * The caller is not the founder.
       **/
      isNotFounder: AugmentedIsError<ApiType>;
      /**
       * The caller is not the head.
       **/
      isNotHead: AugmentedIsError<ApiType>;
      /**
       * User is not a member.
       **/
      isNotMember: AugmentedIsError<ApiType>;
      /**
       * User is not suspended.
       **/
      isNotSuspended: AugmentedIsError<ApiType>;
      /**
       * Member is not vouching.
       **/
      isNotVouching: AugmentedIsError<ApiType>;
      /**
       * User is suspended.
       **/
      isSuspended: AugmentedIsError<ApiType>;
    };
    staking: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Stash is already bonded.
       **/
      isAlreadyBonded: AugmentedIsError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      isAlreadyClaimed: AugmentedIsError<ApiType>;
      /**
       * Controller is already paired.
       **/
      isAlreadyPaired: AugmentedIsError<ApiType>;
      /**
       * The call is not allowed at the given time due to restrictions of election period.
       **/
      isCallNotAllowed: AugmentedIsError<ApiType>;
      /**
       * Duplicate index.
       **/
      isDuplicateIndex: AugmentedIsError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      isEmptyTargets: AugmentedIsError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      isFundedTarget: AugmentedIsError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      isIncorrectHistoryDepth: AugmentedIsError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      isIncorrectSlashingSpans: AugmentedIsError<ApiType>;
      /**
       * Can not bond with value less than minimum balance.
       **/
      isInsufficientValue: AugmentedIsError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      isInvalidEraToReward: AugmentedIsError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      isInvalidNumberOfNominations: AugmentedIsError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      isInvalidSlashIndex: AugmentedIsError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      isNoMoreChunks: AugmentedIsError<ApiType>;
      /**
       * Not a controller account.
       **/
      isNotController: AugmentedIsError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      isNotSortedAndUnique: AugmentedIsError<ApiType>;
      /**
       * Not a stash account.
       **/
      isNotStash: AugmentedIsError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      isNoUnlockChunk: AugmentedIsError<ApiType>;
      /**
       * Error while building the assignment type from the compact. This can happen if an index
       * is invalid, or if the weights _overflow_.
       **/
      isOffchainElectionBogusCompact: AugmentedIsError<ApiType>;
      /**
       * The submitted result has unknown edges that are not among the presented winners.
       **/
      isOffchainElectionBogusEdge: AugmentedIsError<ApiType>;
      /**
       * The election size is invalid.
       **/
      isOffchainElectionBogusElectionSize: AugmentedIsError<ApiType>;
      /**
       * One of the submitted nominators has an edge to which they have not voted on chain.
       **/
      isOffchainElectionBogusNomination: AugmentedIsError<ApiType>;
      /**
       * One of the submitted nominators is not an active nominator on chain.
       **/
      isOffchainElectionBogusNominator: AugmentedIsError<ApiType>;
      /**
       * The claimed score does not match with the one computed from the data.
       **/
      isOffchainElectionBogusScore: AugmentedIsError<ApiType>;
      /**
       * A self vote must only be originated from a validator to ONLY themselves.
       **/
      isOffchainElectionBogusSelfVote: AugmentedIsError<ApiType>;
      /**
       * One of the submitted winners is not an active candidate on chain (index is out of range
       * in snapshot).
       **/
      isOffchainElectionBogusWinner: AugmentedIsError<ApiType>;
      /**
       * Incorrect number of winners were presented.
       **/
      isOffchainElectionBogusWinnerCount: AugmentedIsError<ApiType>;
      /**
       * The submitted result is received out of the open window.
       **/
      isOffchainElectionEarlySubmission: AugmentedIsError<ApiType>;
      /**
       * One of the submitted nominators has an edge which is submitted before the last non-zero
       * slash of the target.
       **/
      isOffchainElectionSlashedNomination: AugmentedIsError<ApiType>;
      /**
       * The submitted result is not as good as the one stored on chain.
       **/
      isOffchainElectionWeakSubmission: AugmentedIsError<ApiType>;
      /**
       * The snapshot data of the current window is missing.
       **/
      isSnapshotUnavailable: AugmentedIsError<ApiType>;
    };
    sudo: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Sender must be the Sudo account
       **/
      isRequireSudo: AugmentedIsError<ApiType>;
    };
    system: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      isFailedToExtractRuntimeVersion: AugmentedIsError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      isInvalidSpecName: AugmentedIsError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      isNonDefaultComposite: AugmentedIsError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      isNonZeroRefCount: AugmentedIsError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      isSpecVersionNeedsToIncrease: AugmentedIsError<ApiType>;
    };
    technicalCommittee: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Members are already initialized!
       **/
      isAlreadyInitialized: AugmentedIsError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      isDuplicateProposal: AugmentedIsError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      isDuplicateVote: AugmentedIsError<ApiType>;
      /**
       * Account is not a member
       **/
      isNotMember: AugmentedIsError<ApiType>;
      /**
       * Proposal must exist
       **/
      isProposalMissing: AugmentedIsError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      isTooEarly: AugmentedIsError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      isTooManyProposals: AugmentedIsError<ApiType>;
      /**
       * Mismatched index
       **/
      isWrongIndex: AugmentedIsError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      isWrongProposalLength: AugmentedIsError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      isWrongProposalWeight: AugmentedIsError<ApiType>;
    };
    tips: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * The tip was already found/started.
       **/
      isAlreadyKnown: AugmentedIsError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      isNotFinder: AugmentedIsError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      isPremature: AugmentedIsError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      isReasonTooBig: AugmentedIsError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      isStillOpen: AugmentedIsError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      isUnknownTip: AugmentedIsError<ApiType>;
    };
    treasury: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      isInsufficientProposersBalance: AugmentedIsError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      isInvalidIndex: AugmentedIsError<ApiType>;
    };
    vesting: {
      // TODO This would be great as template literal [key as `is${Capitalize<string>}`]
      [key: string]: AugmentedIsError<ApiType>;
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      isAmountLow: AugmentedIsError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered.
       **/
      isExistingVestingSchedule: AugmentedIsError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      isNotVesting: AugmentedIsError<ApiType>;
    };
  }

  export interface IsErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
    [key: string]: IsModuleErrors<ApiType>;
  }
}
