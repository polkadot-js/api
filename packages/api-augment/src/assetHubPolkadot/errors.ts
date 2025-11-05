// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    ahMigrator: {
      /**
       * The XCM version is invalid.
       **/
      BadXcmVersion: AugmentedError<ApiType>;
      /**
       * The DMP queue priority is already set to the same value.
       **/
      DmpQueuePriorityAlreadySet: AugmentedError<ApiType>;
      /**
       * Failed to bound a call.
       **/
      FailedToBoundCall: AugmentedError<ApiType>;
      /**
       * Vector did not fit into its compile-time bound.
       **/
      FailedToBoundVector: AugmentedError<ApiType>;
      /**
       * Checking account overflow or underflow.
       **/
      FailedToCalculateCheckingAccount: AugmentedError<ApiType>;
      /**
       * Failed to convert RC call to AH call.
       **/
      FailedToConvertCall: AugmentedError<ApiType>;
      /**
       * Failed to convert RC type to AH type.
       **/
      FailedToConvertType: AugmentedError<ApiType>;
      /**
       * Failed to integrate a vesting schedule.
       **/
      FailedToIntegrateVestingSchedule: AugmentedError<ApiType>;
      /**
       * Failed to process an account data from RC.
       **/
      FailedToProcessAccount: AugmentedError<ApiType>;
      /**
       * Failed to unreserve deposit.
       **/
      FailedToUnreserveDeposit: AugmentedError<ApiType>;
      /**
       * Some item could not be inserted because it already exists.
       **/
      InsertConflict: AugmentedError<ApiType>;
      /**
       * The origin is invalid.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * Invalid parameter.
       **/
      InvalidParameter: AugmentedError<ApiType>;
      /**
       * Preimage chunk missing.
       **/
      PreimageChunkMissing: AugmentedError<ApiType>;
      /**
       * Preimage missing.
       **/
      PreimageMissing: AugmentedError<ApiType>;
      /**
       * Failed to fetch preimage.
       **/
      PreimageNotFound: AugmentedError<ApiType>;
      /**
       * Preimage status invalid.
       **/
      PreimageStatusInvalid: AugmentedError<ApiType>;
      /**
       * Preimage too big.
       **/
      PreimageTooBig: AugmentedError<ApiType>;
      /**
       * Failed to send XCM message.
       **/
      XcmError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ahOps: {
      /**
       * Not all contributions are withdrawn.
       **/
      ContributionsRemaining: AugmentedError<ApiType>;
      /**
       * Failed to withdraw crowdloan contribution.
       **/
      FailedToWithdrawCrowdloanContribution: AugmentedError<ApiType>;
      /**
       * Internal error, please bug report.
       **/
      InternalError: AugmentedError<ApiType>;
      /**
       * The Asset Hub migration is not completed.
       **/
      MigrationNotCompleted: AugmentedError<ApiType>;
      /**
       * Either no crowdloan contribution or already withdrawn.
       **/
      NoCrowdloanContribution: AugmentedError<ApiType>;
      /**
       * Either no crowdloan reserve or already unreserved.
       **/
      NoCrowdloanReserve: AugmentedError<ApiType>;
      /**
       * Either no lease deposit or already unreserved.
       **/
      NoLeaseReserve: AugmentedError<ApiType>;
      /**
       * Account cannot be migrated since it is not a sovereign parachain account.
       **/
      NotSovereign: AugmentedError<ApiType>;
      /**
       * Block number is not yet reached.
       **/
      NotYet: AugmentedError<ApiType>;
      /**
       * The account is not a derived account.
       **/
      WrongDerivedTranslation: AugmentedError<ApiType>;
      /**
       * The balance is zero.
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    assetConversion: {
      /**
       * Provided amount should be greater than or equal to the existential deposit/asset's
       * minimal amount.
       **/
      AmountOneLessThanMinimal: AugmentedError<ApiType>;
      /**
       * Desired amount can't be equal to the pool reserve.
       **/
      AmountOutTooHigh: AugmentedError<ApiType>;
      /**
       * Provided amount should be greater than or equal to the existential deposit/asset's
       * minimal amount.
       **/
      AmountTwoLessThanMinimal: AugmentedError<ApiType>;
      /**
       * The minimal amount requirement for the first token in the pair wasn't met.
       **/
      AssetOneDepositDidNotMeetMinimum: AugmentedError<ApiType>;
      /**
       * The minimal amount requirement for the first token in the pair wasn't met.
       **/
      AssetOneWithdrawalDidNotMeetMinimum: AugmentedError<ApiType>;
      /**
       * The minimal amount requirement for the second token in the pair wasn't met.
       **/
      AssetTwoDepositDidNotMeetMinimum: AugmentedError<ApiType>;
      /**
       * The minimal amount requirement for the second token in the pair wasn't met.
       **/
      AssetTwoWithdrawalDidNotMeetMinimum: AugmentedError<ApiType>;
      /**
       * The destination account cannot exist with the swapped funds.
       **/
      BelowMinimum: AugmentedError<ApiType>;
      /**
       * It was not possible to get or increment the Id of the pool.
       **/
      IncorrectPoolAssetId: AugmentedError<ApiType>;
      /**
       * Insufficient liquidity minted.
       **/
      InsufficientLiquidityMinted: AugmentedError<ApiType>;
      /**
       * Provided asset pair is not supported for pool.
       **/
      InvalidAssetPair: AugmentedError<ApiType>;
      /**
       * The provided path must consists of 2 assets at least.
       **/
      InvalidPath: AugmentedError<ApiType>;
      /**
       * The provided path must consists of unique assets.
       **/
      NonUniquePath: AugmentedError<ApiType>;
      /**
       * Optimal calculated amount is less than desired.
       **/
      OptimalAmountLessThanDesired: AugmentedError<ApiType>;
      /**
       * An overflow happened.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Pool already exists.
       **/
      PoolExists: AugmentedError<ApiType>;
      /**
       * The pool doesn't exist.
       **/
      PoolNotFound: AugmentedError<ApiType>;
      /**
       * Provided maximum amount is not sufficient for swap.
       **/
      ProvidedMaximumNotSufficientForSwap: AugmentedError<ApiType>;
      /**
       * Calculated amount out is less than provided minimum amount.
       **/
      ProvidedMinimumNotSufficientForSwap: AugmentedError<ApiType>;
      /**
       * Reserve needs to always be greater than or equal to the existential deposit/asset's
       * minimal amount.
       **/
      ReserveLeftLessThanMinimal: AugmentedError<ApiType>;
      /**
       * Desired amount can't be zero.
       **/
      WrongDesiredAmount: AugmentedError<ApiType>;
      /**
       * Amount can't be zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * Requested liquidity can't be zero.
       **/
      ZeroLiquidity: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    assetRate: {
      /**
       * The given asset ID already has an assigned conversion rate and cannot be re-created.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * Overflow ocurred when calculating the inverse rate.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      UnknownAssetKind: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    assets: {
      /**
       * The asset-account already exists.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * The asset is not live, and likely being destroyed.
       **/
      AssetNotLive: AugmentedError<ApiType>;
      /**
       * The asset ID must be equal to the [`NextAssetId`].
       **/
      BadAssetId: AugmentedError<ApiType>;
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
       * Callback action resulted in error
       **/
      CallbackFailed: AugmentedError<ApiType>;
      /**
       * The asset cannot be destroyed because some accounts for this asset contain freezes.
       **/
      ContainsFreezes: AugmentedError<ApiType>;
      /**
       * The asset cannot be destroyed because some accounts for this asset contain holds.
       **/
      ContainsHolds: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset status is not the expected status.
       **/
      IncorrectStatus: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The asset is a live asset and is actively being used. Usually emit for operations such
       * as `start_destroy` which require the asset to be in a destroying state.
       **/
      LiveAsset: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The account to alter does not exist.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * The asset-account doesn't have an associated deposit.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The asset should be frozen before the given operation.
       **/
      NotFrozen: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * Unable to increment the consumer reference counters on the account. Either no provider
       * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
       * fewer then the maximum number of consumers has been reached.
       **/
      UnavailableConsumer: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The operation would result in funds being burned.
       **/
      WouldBurn: AugmentedError<ApiType>;
      /**
       * The source account would not survive the transfer and it needs to stay alive.
       **/
      WouldDie: AugmentedError<ApiType>;
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
       * User is not the proposer of the bounty.
       **/
      NotProposer: AugmentedError<ApiType>;
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
    collatorSelection: {
      /**
       * Account is already a candidate.
       **/
      AlreadyCandidate: AugmentedError<ApiType>;
      /**
       * Account is already an Invulnerable.
       **/
      AlreadyInvulnerable: AugmentedError<ApiType>;
      /**
       * New deposit amount would be below the minimum candidacy bond.
       **/
      DepositTooLow: AugmentedError<ApiType>;
      /**
       * The updated deposit amount is equal to the amount already reserved.
       **/
      IdenticalDeposit: AugmentedError<ApiType>;
      /**
       * Could not insert in the candidate list.
       **/
      InsertToCandidateListFailed: AugmentedError<ApiType>;
      /**
       * Deposit amount is too low to take the target's slot in the candidate list.
       **/
      InsufficientBond: AugmentedError<ApiType>;
      /**
       * Cannot lower candidacy bond while occupying a future collator slot in the list.
       **/
      InvalidUnreserve: AugmentedError<ApiType>;
      /**
       * Account has no associated validator ID.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * Account is not a candidate.
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * Account is not an Invulnerable.
       **/
      NotInvulnerable: AugmentedError<ApiType>;
      /**
       * Could not remove from the candidate list.
       **/
      RemoveFromCandidateListFailed: AugmentedError<ApiType>;
      /**
       * The target account to be replaced in the candidate list is not a candidate.
       **/
      TargetIsNotCandidate: AugmentedError<ApiType>;
      /**
       * Leaving would result in too few candidates.
       **/
      TooFewEligibleCollators: AugmentedError<ApiType>;
      /**
       * The pallet has too many candidates.
       **/
      TooManyCandidates: AugmentedError<ApiType>;
      /**
       * There are too many Invulnerables.
       **/
      TooManyInvulnerables: AugmentedError<ApiType>;
      /**
       * Could not update the candidate list.
       **/
      UpdateCandidateListFailed: AugmentedError<ApiType>;
      /**
       * Validator ID is not yet registered.
       **/
      ValidatorNotRegistered: AugmentedError<ApiType>;
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
       * these are removed through `remove_vote`.
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
    delegatedStaking: {
      /**
       * An existing staker cannot perform this action.
       **/
      AlreadyStaking: AugmentedError<ApiType>;
      /**
       * Some corruption in internal state.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * Delegation conditions are not met.
       * 
       * Possible issues are
       * 1) Cannot delegate to self,
       * 2) Cannot delegate to multiple delegates.
       **/
      InvalidDelegation: AugmentedError<ApiType>;
      /**
       * Reward Destination cannot be same as `Agent` account.
       **/
      InvalidRewardDestination: AugmentedError<ApiType>;
      /**
       * Not an existing `Agent` account.
       **/
      NotAgent: AugmentedError<ApiType>;
      /**
       * The account cannot perform this operation.
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * Not a Delegator account.
       **/
      NotDelegator: AugmentedError<ApiType>;
      /**
       * The account does not have enough funds to perform the operation.
       **/
      NotEnoughFunds: AugmentedError<ApiType>;
      /**
       * `Agent` has no pending slash to be applied.
       **/
      NothingToSlash: AugmentedError<ApiType>;
      /**
       * Operation not supported by this pallet.
       **/
      NotSupported: AugmentedError<ApiType>;
      /**
       * Unapplied pending slash restricts operation on `Agent`.
       **/
      UnappliedSlash: AugmentedError<ApiType>;
      /**
       * Failed to withdraw amount from Core Staking.
       **/
      WithdrawFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    foreignAssets: {
      /**
       * The asset-account already exists.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * The asset is not live, and likely being destroyed.
       **/
      AssetNotLive: AugmentedError<ApiType>;
      /**
       * The asset ID must be equal to the [`NextAssetId`].
       **/
      BadAssetId: AugmentedError<ApiType>;
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
       * Callback action resulted in error
       **/
      CallbackFailed: AugmentedError<ApiType>;
      /**
       * The asset cannot be destroyed because some accounts for this asset contain freezes.
       **/
      ContainsFreezes: AugmentedError<ApiType>;
      /**
       * The asset cannot be destroyed because some accounts for this asset contain holds.
       **/
      ContainsHolds: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset status is not the expected status.
       **/
      IncorrectStatus: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The asset is a live asset and is actively being used. Usually emit for operations such
       * as `start_destroy` which require the asset to be in a destroying state.
       **/
      LiveAsset: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The account to alter does not exist.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * The asset-account doesn't have an associated deposit.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The asset should be frozen before the given operation.
       **/
      NotFrozen: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * Unable to increment the consumer reference counters on the account. Either no provider
       * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
       * fewer then the maximum number of consumers has been reached.
       **/
      UnavailableConsumer: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The operation would result in funds being burned.
       **/
      WouldBurn: AugmentedError<ApiType>;
      /**
       * The source account would not survive the transfer and it needs to stay alive.
       **/
      WouldDie: AugmentedError<ApiType>;
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
    multiBlockElection: {
      /**
       * Triggering the `Fallback` failed.
       **/
      Fallback: AugmentedError<ApiType>;
      /**
       * Snapshot was unavailable.
       **/
      Snapshot: AugmentedError<ApiType>;
      /**
       * Unexpected phase
       **/
      UnexpectedPhase: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multiBlockElectionSigned: {
      /**
       * The page index is out of bounds.
       **/
      BadPageIndex: AugmentedError<ApiType>;
      /**
       * Bad witness data provided.
       **/
      BadWitnessData: AugmentedError<ApiType>;
      /**
       * The submission is a duplicate.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * No submission found.
       **/
      NoSubmission: AugmentedError<ApiType>;
      /**
       * The account is not registered.
       **/
      NotRegistered: AugmentedError<ApiType>;
      /**
       * The phase is not signed.
       **/
      PhaseNotSigned: AugmentedError<ApiType>;
      /**
       * The queue is full.
       **/
      QueueFull: AugmentedError<ApiType>;
      /**
       * Round is not yet over.
       **/
      RoundNotOver: AugmentedError<ApiType>;
      /**
       * Too many invulnerable accounts are provided,
       **/
      TooManyInvulnerables: AugmentedError<ApiType>;
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
       * Multisig operation not found in storage.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it or update
       * its deposits.
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
    nfts: {
      /**
       * The provided Item was already used for claiming.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * The item ID has already been used for an item.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * The approval had a deadline that expired, so the approval isn't valid anymore.
       **/
      ApprovalExpired: AugmentedError<ApiType>;
      /**
       * The provided attribute can't be found.
       **/
      AttributeNotFound: AugmentedError<ApiType>;
      /**
       * The witness data given does not match the current state of the chain.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * The provided bid is too low.
       **/
      BidTooLow: AugmentedError<ApiType>;
      /**
       * Collection ID is already taken.
       **/
      CollectionIdInUse: AugmentedError<ApiType>;
      /**
       * Can't delete non-empty collections.
       **/
      CollectionNotEmpty: AugmentedError<ApiType>;
      /**
       * The deadline has already expired.
       **/
      DeadlineExpired: AugmentedError<ApiType>;
      /**
       * Item's config already exists and should be equal to the provided one.
       **/
      InconsistentItemConfig: AugmentedError<ApiType>;
      /**
       * The provided data is incorrect.
       **/
      IncorrectData: AugmentedError<ApiType>;
      /**
       * The provided metadata might be too long.
       **/
      IncorrectMetadata: AugmentedError<ApiType>;
      /**
       * The item is locked (non-transferable).
       **/
      ItemLocked: AugmentedError<ApiType>;
      /**
       * Items within that collection are non-transferable.
       **/
      ItemsNonTransferable: AugmentedError<ApiType>;
      /**
       * Collection's attributes are locked.
       **/
      LockedCollectionAttributes: AugmentedError<ApiType>;
      /**
       * Collection's metadata is locked.
       **/
      LockedCollectionMetadata: AugmentedError<ApiType>;
      /**
       * Item's attributes are locked.
       **/
      LockedItemAttributes: AugmentedError<ApiType>;
      /**
       * Item's metadata is locked.
       **/
      LockedItemMetadata: AugmentedError<ApiType>;
      /**
       * Can't set more attributes per one call.
       **/
      MaxAttributesLimitReached: AugmentedError<ApiType>;
      /**
       * The max supply is locked and can't be changed.
       **/
      MaxSupplyLocked: AugmentedError<ApiType>;
      /**
       * All items have been minted.
       **/
      MaxSupplyReached: AugmentedError<ApiType>;
      /**
       * The provided max supply is less than the number of items a collection already has.
       **/
      MaxSupplyTooSmall: AugmentedError<ApiType>;
      /**
       * The given item has no metadata set.
       **/
      MetadataNotFound: AugmentedError<ApiType>;
      /**
       * The method is disabled by system settings.
       **/
      MethodDisabled: AugmentedError<ApiType>;
      /**
       * Mint has already ended.
       **/
      MintEnded: AugmentedError<ApiType>;
      /**
       * Mint has not started yet.
       **/
      MintNotStarted: AugmentedError<ApiType>;
      /**
       * Config for a collection or an item can't be found.
       **/
      NoConfig: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The provided account is not a delegate.
       **/
      NotDelegate: AugmentedError<ApiType>;
      /**
       * Item is not for sale.
       **/
      NotForSale: AugmentedError<ApiType>;
      /**
       * The item has reached its approval limit.
       **/
      ReachedApprovalLimit: AugmentedError<ApiType>;
      /**
       * Some roles were not cleared.
       **/
      RolesNotCleared: AugmentedError<ApiType>;
      /**
       * The named owner has not signed ownership acceptance of the collection.
       **/
      Unaccepted: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * The given item ID is unknown.
       **/
      UnknownCollection: AugmentedError<ApiType>;
      /**
       * The given item ID is unknown.
       **/
      UnknownItem: AugmentedError<ApiType>;
      /**
       * Swap doesn't exist.
       **/
      UnknownSwap: AugmentedError<ApiType>;
      /**
       * The witness data should be provided.
       **/
      WitnessRequired: AugmentedError<ApiType>;
      /**
       * The delegate turned out to be different to what was expected.
       **/
      WrongDelegate: AugmentedError<ApiType>;
      /**
       * The duration provided should be less than or equal to `MaxDeadlineDuration`.
       **/
      WrongDuration: AugmentedError<ApiType>;
      /**
       * The provided namespace isn't supported in this call.
       **/
      WrongNamespace: AugmentedError<ApiType>;
      /**
       * The extrinsic was sent by the wrong origin.
       **/
      WrongOrigin: AugmentedError<ApiType>;
      /**
       * The owner turned out to be different to what was expected.
       **/
      WrongOwner: AugmentedError<ApiType>;
      /**
       * The provided setting can't be set.
       **/
      WrongSetting: AugmentedError<ApiType>;
      /**
       * The provided signature is incorrect.
       **/
      WrongSignature: AugmentedError<ApiType>;
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
       * The pool or member delegation has already migrated to delegate stake.
       **/
      AlreadyMigrated: AugmentedError<ApiType>;
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
       * No slash pending that can be applied to the member.
       **/
      NothingToSlash: AugmentedError<ApiType>;
      /**
       * Either a) the caller cannot make a valid kick or b) the pool is not destroying.
       **/
      NotKickerOrDestroying: AugmentedError<ApiType>;
      /**
       * The pool or member delegation has not migrated yet to delegate stake.
       **/
      NotMigrated: AugmentedError<ApiType>;
      /**
       * The caller does not have nominating permissions for the pool.
       **/
      NotNominator: AugmentedError<ApiType>;
      /**
       * The pool is not open to join
       **/
      NotOpen: AugmentedError<ApiType>;
      /**
       * This call is not allowed in the current state of the pallet.
       **/
      NotSupported: AugmentedError<ApiType>;
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
       * Account is restricted from participation in pools. This may happen if the account is
       * staking in another way already.
       **/
      Restricted: AugmentedError<ApiType>;
      /**
       * A reward pool does not exist. In all cases this is a system logic error.
       **/
      RewardPoolNotFound: AugmentedError<ApiType>;
      /**
       * The slash amount is too low to be applied.
       **/
      SlashTooLow: AugmentedError<ApiType>;
      /**
       * A sub pool does not exist.
       **/
      SubPoolsNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The inherent which supplies the host configuration did not run this block.
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending.
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function.
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is
       * willing to run.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block.
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    polkadotXcm: {
      /**
       * The given account is not an identifiable sovereign account for any location.
       **/
      AccountNotSovereign: AugmentedError<ApiType>;
      /**
       * The alias to remove authorization for was not found.
       **/
      AliasNotFound: AugmentedError<ApiType>;
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
       * Expiry block number is in the past.
       **/
      ExpiresInPast: AugmentedError<ApiType>;
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
       * Local XCM execution incomplete with the actual XCM error and the index of the
       * instruction that caused the error.
       **/
      LocalExecutionIncompleteWithError: AugmentedError<ApiType>;
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
       * Too many locations authorized to alias origin.
       **/
      TooManyAuthorizedAliases: AugmentedError<ApiType>;
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
    poolAssets: {
      /**
       * The asset-account already exists.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * The asset is not live, and likely being destroyed.
       **/
      AssetNotLive: AugmentedError<ApiType>;
      /**
       * The asset ID must be equal to the [`NextAssetId`].
       **/
      BadAssetId: AugmentedError<ApiType>;
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
       * Callback action resulted in error
       **/
      CallbackFailed: AugmentedError<ApiType>;
      /**
       * The asset cannot be destroyed because some accounts for this asset contain freezes.
       **/
      ContainsFreezes: AugmentedError<ApiType>;
      /**
       * The asset cannot be destroyed because some accounts for this asset contain holds.
       **/
      ContainsHolds: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset status is not the expected status.
       **/
      IncorrectStatus: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The asset is a live asset and is actively being used. Usually emit for operations such
       * as `start_destroy` which require the asset to be in a destroying state.
       **/
      LiveAsset: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The account to alter does not exist.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * The asset-account doesn't have an associated deposit.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The asset should be frozen before the given operation.
       **/
      NotFrozen: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * Unable to increment the consumer reference counters on the account. Either no provider
       * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
       * fewer then the maximum number of consumers has been reached.
       **/
      UnavailableConsumer: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The operation would result in funds being burned.
       **/
      WouldBurn: AugmentedError<ApiType>;
      /**
       * The source account would not survive the transfer and it needs to stay alive.
       **/
      WouldDie: AugmentedError<ApiType>;
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
       * The preimage is stored with a different length than the one provided.
       **/
      PreimageStoredWithDifferentLength: AugmentedError<ApiType>;
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
    snowbridgeSystemFrontend: {
      /**
       * Ether could not be burned.
       **/
      BurnError: AugmentedError<ApiType>;
      /**
       * Withdraw fee asset failure
       **/
      FeesNotMet: AugmentedError<ApiType>;
      /**
       * Message export is halted
       **/
      Halted: AugmentedError<ApiType>;
      /**
       * Account could not be converted to a location.
       **/
      InvalidAccount: AugmentedError<ApiType>;
      /**
       * Check location failure, should start from the dispatch origin as owner
       **/
      InvalidAssetOwner: AugmentedError<ApiType>;
      /**
       * Convert to reanchored location failure
       **/
      LocationConversionFailed: AugmentedError<ApiType>;
      /**
       * Send xcm message failure
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Provided tip asset could not be swapped for ether.
       **/
      SwapError: AugmentedError<ApiType>;
      /**
       * The tip provided is zero.
       **/
      TipAmountZero: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The asset provided for the tip is unsupported.
       **/
      UnsupportedAsset: AugmentedError<ApiType>;
      /**
       * Convert versioned location failure
       **/
      UnsupportedLocationVersion: AugmentedError<ApiType>;
      /**
       * Unable to withdraw asset.
       **/
      WithdrawError: AugmentedError<ApiType>;
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
       * The stake of this account is already migrated to `Fungible` holds.
       **/
      AlreadyMigrated: AugmentedError<ApiType>;
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
       * The slash has been cancelled and cannot be applied.
       **/
      CancelledSlash: AugmentedError<ApiType>;
      /**
       * The user has enough bond and thus cannot be chilled forcefully by an external person.
       **/
      CannotChillOther: AugmentedError<ApiType>;
      /**
       * Stash could not be reaped as other pallet might depend on it.
       **/
      CannotReapStash: AugmentedError<ApiType>;
      /**
       * Cannot reset a ledger.
       **/
      CannotRestoreLedger: AugmentedError<ApiType>;
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
       * The era is not eligible for pruning.
       **/
      EraNotPrunable: AugmentedError<ApiType>;
      /**
       * Era not yet started.
       **/
      EraNotStarted: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Cannot bond, nominate or validate with value less than the minimum defined by
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
       * Slash record not found.
       **/
      InvalidSlashRecord: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * Not enough funds available to withdraw.
       **/
      NotEnoughFunds: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedError<ApiType>;
      /**
       * Account is restricted from participation in staking. This may happen if the account is
       * staking in another way already, such as via pool.
       **/
      Restricted: AugmentedError<ApiType>;
      /**
       * Provided reward destination is not allowed.
       **/
      RewardDestinationRestricted: AugmentedError<ApiType>;
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
       * Unapplied slashes in the recently concluded era is blocking this operation.
       * See `Call::apply_slash` to apply them.
       **/
      UnappliedSlashesInPreviousEra: AugmentedError<ApiType>;
      /**
       * Operation not allowed for virtual stakers.
       **/
      VirtualStakerNotAllowed: AugmentedError<ApiType>;
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
       * The specified [`Task`] failed during execution.
       **/
      FailedTask: AugmentedError<ApiType>;
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
       * The specified [`Task`] is not valid.
       **/
      InvalidTask: AugmentedError<ApiType>;
      /**
       * A multi-block migration is ongoing and prevents the current code from being replaced.
       **/
      MultiBlockMigrationsOngoing: AugmentedError<ApiType>;
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
    uniques: {
      /**
       * The item ID has already been used for an item.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * An attribute is not found.
       **/
      AttributeNotFound: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * The provided bid is too low.
       **/
      BidTooLow: AugmentedError<ApiType>;
      /**
       * The item or collection is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The item ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The item is locked.
       **/
      Locked: AugmentedError<ApiType>;
      /**
       * The max supply has already been set.
       **/
      MaxSupplyAlreadySet: AugmentedError<ApiType>;
      /**
       * All items have been minted.
       **/
      MaxSupplyReached: AugmentedError<ApiType>;
      /**
       * The provided max supply is less to the amount of items a collection already has.
       **/
      MaxSupplyTooSmall: AugmentedError<ApiType>;
      /**
       * There is no delegate approved.
       **/
      NoDelegate: AugmentedError<ApiType>;
      /**
       * No metadata is found.
       **/
      NoMetadata: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Item is not for sale.
       **/
      NotForSale: AugmentedError<ApiType>;
      /**
       * The named owner has not signed ownership of the collection is acceptable.
       **/
      Unaccepted: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * The given item ID is unknown.
       **/
      UnknownCollection: AugmentedError<ApiType>;
      /**
       * The given item ID is unknown.
       **/
      UnknownItem: AugmentedError<ApiType>;
      /**
       * Wrong attribute key/value bytes supplied.
       **/
      WrongAttribute: AugmentedError<ApiType>;
      /**
       * The delegate turned out to be different to what was expected.
       **/
      WrongDelegate: AugmentedError<ApiType>;
      /**
       * Wrong metadata key/value bytes supplied.
       **/
      WrongMetadata: AugmentedError<ApiType>;
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
    voterList: {
      /**
       * A error in the list interface implementation.
       **/
      List: AugmentedError<ApiType>;
      /**
       * Could not update a node, because the pallet is locked.
       **/
      Locked: AugmentedError<ApiType>;
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
    xcmpQueue: {
      /**
       * The execution is already resumed.
       **/
      AlreadyResumed: AugmentedError<ApiType>;
      /**
       * The execution is already suspended.
       **/
      AlreadySuspended: AugmentedError<ApiType>;
      /**
       * Setting the queue config failed since one of its values was invalid.
       **/
      BadQueueConfig: AugmentedError<ApiType>;
      /**
       * The message is too big.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * There are too many active outbound channels.
       **/
      TooManyActiveOutboundChannels: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
