// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    assets: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Transfer amount should be non-zero.
       **/
      amountZero: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      badWitness: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      balanceLow: AugmentedError<ApiType>;
      /**
       * Balance should be non-zero.
       **/
      balanceZero: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      frozen: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      inUse: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      minBalanceZero: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      noPermission: AugmentedError<ApiType>;
      /**
       * A mint operation lead to an overflow.
       **/
      overflow: AugmentedError<ApiType>;
      /**
       * Attempt to destroy an asset class when non-zombie, reference-bearing accounts exist.
       **/
      refsLeft: AugmentedError<ApiType>;
      /**
       * Too many zombie accounts in use.
       **/
      tooManyZombies: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      unknown: AugmentedError<ApiType>;
    };
    authorship: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The uncle is genesis.
       **/
      genesisUncle: AugmentedError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      invalidUncleParent: AugmentedError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      oldUncle: AugmentedError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      tooHighUncle: AugmentedError<ApiType>;
      /**
       * Too many uncles.
       **/
      tooManyUncles: AugmentedError<ApiType>;
      /**
       * The uncle is already included.
       **/
      uncleAlreadyIncluded: AugmentedError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      unclesAlreadySet: AugmentedError<ApiType>;
    };
    balances: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      deadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      existentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      existingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      insufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      keepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      liquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      overflow: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      vestingBalance: AugmentedError<ApiType>;
    };
    bounties: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      insufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      invalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      invalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      invalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      pendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      reasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      requireCurator: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      unexpectedStatus: AugmentedError<ApiType>;
    };
    contracts: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Performing the requested transfer would have brought the contract below
       * the subsistence threshold. No transfer is allowed to do this in order to allow
       * for a tombstone to be created. Use `seal_terminate` to remove a contract without
       * leaving a tombstone behind.
       **/
      belowSubsistenceThreshold: AugmentedError<ApiType>;
      /**
       * No code could be found at the supplied code hash.
       **/
      codeNotFound: AugmentedError<ApiType>;
      /**
       * The code supplied to `put_code` exceeds the limit specified in the current schedule.
       **/
      codeTooLarge: AugmentedError<ApiType>;
      /**
       * Contract trapped during execution.
       **/
      contractTrapped: AugmentedError<ApiType>;
      /**
       * Input passed to a contract API function failed to decode as expected type.
       **/
      decodingFailed: AugmentedError<ApiType>;
      /**
       * An origin TrieId written in the current block.
       **/
      invalidContractOrigin: AugmentedError<ApiType>;
      /**
       * Cannot restore to nonexisting or alive contract.
       **/
      invalidDestinationContract: AugmentedError<ApiType>;
      /**
       * A new schedule must have a greater version than the current one.
       **/
      invalidScheduleVersion: AugmentedError<ApiType>;
      /**
       * Cannot restore from nonexisting or tombstone contract.
       **/
      invalidSourceContract: AugmentedError<ApiType>;
      /**
       * An origin must be signed or inherent and auxiliary sender only provided on inherent.
       **/
      invalidSurchargeClaim: AugmentedError<ApiType>;
      /**
       * Tombstones don't match.
       **/
      invalidTombstone: AugmentedError<ApiType>;
      /**
       * Performing a call was denied because the calling depth reached the limit
       * of what is specified in the schedule.
       **/
      maxCallDepthReached: AugmentedError<ApiType>;
      /**
       * The newly created contract is below the subsistence threshold after executing
       * its contructor. No contracts are allowed to exist below that threshold.
       **/
      newContractNotFunded: AugmentedError<ApiType>;
      /**
       * The contract that was called is either no contract at all (a plain account)
       * or is a tombstone.
       **/
      notCallable: AugmentedError<ApiType>;
      /**
       * A buffer outside of sandbox memory was passed to a contract API function.
       **/
      outOfBounds: AugmentedError<ApiType>;
      /**
       * The executed contract exhausted its gas limit.
       **/
      outOfGas: AugmentedError<ApiType>;
      /**
       * The output buffer supplied to a contract API call was too small.
       **/
      outputBufferTooSmall: AugmentedError<ApiType>;
      /**
       * The action performed is not allowed while the contract performing it is already
       * on the call stack. Those actions are contract self destruction and restoration
       * of a tombstone.
       **/
      reentranceDenied: AugmentedError<ApiType>;
      /**
       * Performing the requested transfer failed for a reason originating in the
       * chosen currency implementation of the runtime. Most probably the balance is
       * too low or locks are placed on it.
       **/
      transferFailed: AugmentedError<ApiType>;
      /**
       * The size defined in `T::MaxValueSize` was exceeded.
       **/
      valueTooLarge: AugmentedError<ApiType>;
    };
    council: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Members are already initialized!
       **/
      alreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      duplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      duplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      notMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      proposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      tooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      tooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      wrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      wrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      wrongProposalWeight: AugmentedError<ApiType>;
    };
    democracy: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Cannot cancel the same proposal twice
       **/
      alreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      alreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      alreadyVetoed: AugmentedError<ApiType>;
      /**
       * Unknown index
       **/
      badIndex: AugmentedError<ApiType>;
      /**
       * Preimage already noted
       **/
      duplicatePreimage: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      duplicateProposal: AugmentedError<ApiType>;
      /**
       * Imminent
       **/
      imminent: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      instantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      insufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      invalidHash: AugmentedError<ApiType>;
      /**
       * The provided witness data is wrong.
       **/
      invalidWitness: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      maxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      noneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      noPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      noProposal: AugmentedError<ApiType>;
      /**
       * Not delegated
       **/
      notDelegated: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      notDelegating: AugmentedError<ApiType>;
      /**
       * The lock on the account to be unlocked has not yet expired.
       **/
      notExpired: AugmentedError<ApiType>;
      /**
       * Not imminent
       **/
      notImminent: AugmentedError<ApiType>;
      /**
       * The target account does not have a lock.
       **/
      notLocked: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      notSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      notVoter: AugmentedError<ApiType>;
      /**
       * An unexpected integer overflow occurred.
       **/
      overflow: AugmentedError<ApiType>;
      /**
       * Invalid preimage
       **/
      preimageInvalid: AugmentedError<ApiType>;
      /**
       * Preimage not found
       **/
      preimageMissing: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      proposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      proposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      referendumInvalid: AugmentedError<ApiType>;
      /**
       * Too early
       **/
      tooEarly: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      tooManyProposals: AugmentedError<ApiType>;
      /**
       * An unexpected integer underflow occurred.
       **/
      underflow: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      valueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      votesExist: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      wrongUpperBound: AugmentedError<ApiType>;
    };
    elections: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Duplicated candidate submission.
       **/
      duplicatedCandidate: AugmentedError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      insufficientCandidateFunds: AugmentedError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      invalidCandidateCount: AugmentedError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      invalidRenouncing: AugmentedError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      invalidReplacement: AugmentedError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      invalidVoteCount: AugmentedError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      lowBalance: AugmentedError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      maximumVotesExceeded: AugmentedError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      memberSubmit: AugmentedError<ApiType>;
      /**
       * Must be a voter.
       **/
      mustBeVoter: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      notMember: AugmentedError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      noVotes: AugmentedError<ApiType>;
      /**
       * Cannot report self.
       **/
      reportSelf: AugmentedError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      runnerSubmit: AugmentedError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      tooManyVotes: AugmentedError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      unableToPayBond: AugmentedError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      unableToVote: AugmentedError<ApiType>;
    };
    grandpa: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      changePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      duplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      invalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      invalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      pauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      resumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      tooSoon: AugmentedError<ApiType>;
    };
    identity: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Account ID is already named.
       **/
      alreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      emptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      feeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      invalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      invalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      invalidTarget: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      judgementGiven: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      noIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      notFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      notNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      notOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      notSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      stickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      tooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      tooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      tooManySubAccounts: AugmentedError<ApiType>;
    };
    imOnline: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Duplicated heartbeat.
       **/
      duplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      invalidKey: AugmentedError<ApiType>;
    };
    multisig: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Call is already approved by this signatory.
       **/
      alreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      alreadyStored: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      minimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      noApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      notFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      noTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      notOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      senderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      signatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      tooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      tooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      unexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      weightTooLow: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      wrongTimepoint: AugmentedError<ApiType>;
    };
    proxy: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Account is already a proxy.
       **/
      duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      noPermission: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      notFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      notProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      tooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      unproxyable: AugmentedError<ApiType>;
    };
    recovery: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      alreadyProxy: AugmentedError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      alreadyRecoverable: AugmentedError<ApiType>;
      /**
       * A recovery process has already started for this account
       **/
      alreadyStarted: AugmentedError<ApiType>;
      /**
       * This user has already vouched for this recovery
       **/
      alreadyVouched: AugmentedError<ApiType>;
      /**
       * The friend must wait until the delay period to vouch for this recovery
       **/
      delayPeriod: AugmentedError<ApiType>;
      /**
       * Friends list must be less than max friends
       **/
      maxFriends: AugmentedError<ApiType>;
      /**
       * User is not allowed to make a call on behalf of this account
       **/
      notAllowed: AugmentedError<ApiType>;
      /**
       * Friends list must be greater than zero and threshold
       **/
      notEnoughFriends: AugmentedError<ApiType>;
      /**
       * This account is not a friend who can vouch
       **/
      notFriend: AugmentedError<ApiType>;
      /**
       * This account is not set up for recovery
       **/
      notRecoverable: AugmentedError<ApiType>;
      /**
       * Friends list must be sorted and free of duplicates
       **/
      notSorted: AugmentedError<ApiType>;
      /**
       * A recovery process has not started for this rescuer
       **/
      notStarted: AugmentedError<ApiType>;
      /**
       * There was an overflow in a calculation
       **/
      overflow: AugmentedError<ApiType>;
      /**
       * There are still active recovery attempts that need to be closed
       **/
      stillActive: AugmentedError<ApiType>;
      /**
       * The threshold for recovering this account has not been met
       **/
      threshold: AugmentedError<ApiType>;
      /**
       * Threshold must be greater than zero
       **/
      zeroThreshold: AugmentedError<ApiType>;
    };
    scheduler: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Failed to schedule a call
       **/
      failedToSchedule: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      notFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      rescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      targetBlockNumberInPast: AugmentedError<ApiType>;
    };
    session: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Registered duplicate key.
       **/
      duplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      invalidProof: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      noAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      noKeys: AugmentedError<ApiType>;
    };
    society: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * User has already made a bid.
       **/
      alreadyBid: AugmentedError<ApiType>;
      /**
       * User is already a candidate.
       **/
      alreadyCandidate: AugmentedError<ApiType>;
      /**
       * Society already founded.
       **/
      alreadyFounded: AugmentedError<ApiType>;
      /**
       * User is already a member.
       **/
      alreadyMember: AugmentedError<ApiType>;
      /**
       * Member is already vouching or banned from vouching again.
       **/
      alreadyVouching: AugmentedError<ApiType>;
      /**
       * An incorrect position was provided.
       **/
      badPosition: AugmentedError<ApiType>;
      /**
       * Cannot remove the founder.
       **/
      founder: AugmentedError<ApiType>;
      /**
       * Cannot remove the head of the chain.
       **/
      head: AugmentedError<ApiType>;
      /**
       * Not enough in pot to accept candidate.
       **/
      insufficientPot: AugmentedError<ApiType>;
      /**
       * Too many members in the society.
       **/
      maxMembers: AugmentedError<ApiType>;
      /**
       * Nothing to payout.
       **/
      noPayout: AugmentedError<ApiType>;
      /**
       * User is not a candidate.
       **/
      notCandidate: AugmentedError<ApiType>;
      /**
       * The caller is not the founder.
       **/
      notFounder: AugmentedError<ApiType>;
      /**
       * The caller is not the head.
       **/
      notHead: AugmentedError<ApiType>;
      /**
       * User is not a member.
       **/
      notMember: AugmentedError<ApiType>;
      /**
       * User is not suspended.
       **/
      notSuspended: AugmentedError<ApiType>;
      /**
       * Member is not vouching.
       **/
      notVouching: AugmentedError<ApiType>;
      /**
       * User is suspended.
       **/
      suspended: AugmentedError<ApiType>;
    };
    staking: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Stash is already bonded.
       **/
      alreadyBonded: AugmentedError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      alreadyClaimed: AugmentedError<ApiType>;
      /**
       * Controller is already paired.
       **/
      alreadyPaired: AugmentedError<ApiType>;
      /**
       * The call is not allowed at the given time due to restrictions of election period.
       **/
      callNotAllowed: AugmentedError<ApiType>;
      /**
       * Duplicate index.
       **/
      duplicateIndex: AugmentedError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      emptyTargets: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      fundedTarget: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      incorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      incorrectSlashingSpans: AugmentedError<ApiType>;
      /**
       * Can not bond with value less than minimum balance.
       **/
      insufficientValue: AugmentedError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      invalidEraToReward: AugmentedError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      invalidNumberOfNominations: AugmentedError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      invalidSlashIndex: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      noMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      notController: AugmentedError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      notSortedAndUnique: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      notStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      noUnlockChunk: AugmentedError<ApiType>;
      /**
       * Error while building the assignment type from the compact. This can happen if an index
       * is invalid, or if the weights _overflow_.
       **/
      offchainElectionBogusCompact: AugmentedError<ApiType>;
      /**
       * The submitted result has unknown edges that are not among the presented winners.
       **/
      offchainElectionBogusEdge: AugmentedError<ApiType>;
      /**
       * The election size is invalid.
       **/
      offchainElectionBogusElectionSize: AugmentedError<ApiType>;
      /**
       * One of the submitted nominators has an edge to which they have not voted on chain.
       **/
      offchainElectionBogusNomination: AugmentedError<ApiType>;
      /**
       * One of the submitted nominators is not an active nominator on chain.
       **/
      offchainElectionBogusNominator: AugmentedError<ApiType>;
      /**
       * The claimed score does not match with the one computed from the data.
       **/
      offchainElectionBogusScore: AugmentedError<ApiType>;
      /**
       * A self vote must only be originated from a validator to ONLY themselves.
       **/
      offchainElectionBogusSelfVote: AugmentedError<ApiType>;
      /**
       * One of the submitted winners is not an active candidate on chain (index is out of range
       * in snapshot).
       **/
      offchainElectionBogusWinner: AugmentedError<ApiType>;
      /**
       * Incorrect number of winners were presented.
       **/
      offchainElectionBogusWinnerCount: AugmentedError<ApiType>;
      /**
       * The submitted result is received out of the open window.
       **/
      offchainElectionEarlySubmission: AugmentedError<ApiType>;
      /**
       * One of the submitted nominators has an edge which is submitted before the last non-zero
       * slash of the target.
       **/
      offchainElectionSlashedNomination: AugmentedError<ApiType>;
      /**
       * The submitted result is not as good as the one stored on chain.
       **/
      offchainElectionWeakSubmission: AugmentedError<ApiType>;
      /**
       * The snapshot data of the current window is missing.
       **/
      snapshotUnavailable: AugmentedError<ApiType>;
    };
    sudo: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Sender must be the Sudo account
       **/
      requireSudo: AugmentedError<ApiType>;
    };
    system: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      failedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      invalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      nonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      nonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      specVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Members are already initialized!
       **/
      alreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      duplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      duplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      notMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      proposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      tooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      tooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      wrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      wrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      wrongProposalWeight: AugmentedError<ApiType>;
    };
    tips: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The tip was already found/started.
       **/
      alreadyKnown: AugmentedError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      notFinder: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      reasonTooBig: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      stillOpen: AugmentedError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      unknownTip: AugmentedError<ApiType>;
    };
    treasury: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      insufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      invalidIndex: AugmentedError<ApiType>;
    };
    vesting: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      amountLow: AugmentedError<ApiType>;
      /**
       * An existing vesting schedule already exists for this account that cannot be clobbered.
       **/
      existingVestingSchedule: AugmentedError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      notVesting: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
    [key: string]: ModuleErrors<ApiType>;
  }
}
