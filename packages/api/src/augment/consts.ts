// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import { Codec } from '@polkadot/types/types';
import { Vec } from '@polkadot/types/codec';
import { u16, u32, u64 } from '@polkadot/types/primitive';
import { Balance, BalanceOf, BlockNumber, LockIdentifier, ModuleId, Moment, Perbill, Percent, Permill, RuntimeDbWeight, Weight } from '@polkadot/types/interfaces/runtime';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex } from '@polkadot/types/interfaces/staking';
import { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/consts' {
  export interface AugmentedConsts<ApiType> {
    babe: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The number of **slots** that an epoch takes. We couple sessions to
       * epochs, i.e. we start a new session once the new epoch begins.
       **/
      epochDuration: AugmentedConst<ApiType, u64>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: AugmentedConst<ApiType, Moment>;
    };
    balances: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: AugmentedConst<ApiType, Balance>;
    };
    contracts: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The maximum nesting level of a call/instantiate stack. A reasonable default
       * value is 100.
       **/
      maxDepth: AugmentedConst<ApiType, u32>;
      /**
       * The maximum size of a storage value in bytes. A reasonable default is 16 KiB.
       **/
      maxValueSize: AugmentedConst<ApiType, u32>;
      /**
       * Price of a byte of storage per one block interval. Should be greater than 0.
       **/
      rentByteFee: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The amount of funds a contract should deposit in order to offset
       * the cost of one byte.
       * 
       * Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,
       * then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.
       * But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,
       * then it would pay 500 BU/day.
       **/
      rentDepositOffset: AugmentedConst<ApiType, BalanceOf>;
      /**
       * Number of block delay an extrinsic claim surcharge has.
       * 
       * When claim surcharge is called by an extrinsic the rent is checked
       * for current_block - delay
       **/
      signedClaimHandicap: AugmentedConst<ApiType, BlockNumber>;
      /**
       * A size offset for an contract. A just created account with untouched storage will have that
       * much of storage from the perspective of the state rent.
       * 
       * This is a simple way to ensure that contracts with empty storage eventually get deleted
       * by making them pay rent. This creates an incentive to remove them early in order to save
       * rent.
       **/
      storageSizeOffset: AugmentedConst<ApiType, u32>;
      /**
       * Reward that is received by the party whose touch has led
       * to removal of a contract.
       **/
      surchargeReward: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The minimum amount required to generate a tombstone.
       **/
      tombstoneDeposit: AugmentedConst<ApiType, BalanceOf>;
    };
    democracy: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: AugmentedConst<ApiType, BlockNumber>;
      /**
       * The minimum period of locking and the period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case where
       * they are on the losing side of a vote.
       **/
      enactmentPeriod: AugmentedConst<ApiType, BlockNumber>;
      /**
       * Minimum voting period allowed for an emergency referendum.
       **/
      fastTrackVotingPeriod: AugmentedConst<ApiType, BlockNumber>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: AugmentedConst<ApiType, BlockNumber>;
      /**
       * The maximum number of votes for an account.
       **/
      maxVotes: AugmentedConst<ApiType, u32>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: AugmentedConst<ApiType, BalanceOf>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: AugmentedConst<ApiType, BlockNumber>;
    };
    elections: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      candidacyBond: AugmentedConst<ApiType, BalanceOf>;
      desiredMembers: AugmentedConst<ApiType, u32>;
      desiredRunnersUp: AugmentedConst<ApiType, u32>;
      moduleId: AugmentedConst<ApiType, LockIdentifier>;
      termDuration: AugmentedConst<ApiType, BlockNumber>;
      votingBond: AugmentedConst<ApiType, BalanceOf>;
    };
    finalityTracker: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The delay after which point things become suspicious. Default is 1000.
       **/
      reportLatency: AugmentedConst<ApiType, BlockNumber>;
      /**
       * The number of recent samples to keep from this chain. Default is 101.
       **/
      windowSize: AugmentedConst<ApiType, BlockNumber>;
    };
    identity: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The amount held on deposit for a registered identity.
       **/
      basicDeposit: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: AugmentedConst<ApiType, BalanceOf>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: AugmentedConst<ApiType, u32>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: AugmentedConst<ApiType, u32>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: AugmentedConst<ApiType, u32>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will be
       * another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: AugmentedConst<ApiType, BalanceOf>;
    };
    indices: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: AugmentedConst<ApiType, BalanceOf>;
    };
    proxy: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * `AnnouncementDepositBase` metadata shadow.
       **/
      announcementDepositBase: AugmentedConst<ApiType, BalanceOf>;
      /**
       * `AnnouncementDepositFactor` metadata shadow.
       **/
      announcementDepositFactor: AugmentedConst<ApiType, BalanceOf>;
      /**
       * `MaxPending` metadata shadow.
       **/
      maxPending: AugmentedConst<ApiType, u32>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: AugmentedConst<ApiType, u16>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       **/
      proxyDepositBase: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The amount of currency needed per proxy added.
       **/
      proxyDepositFactor: AugmentedConst<ApiType, BalanceOf>;
    };
    recovery: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The base amount of currency needed to reserve for creating a recovery configuration.
       **/
      configDepositBase: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The amount of currency needed per additional user when creating a recovery configuration.
       **/
      friendDepositFactor: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The maximum amount of friends allowed in a recovery configuration.
       **/
      maxFriends: AugmentedConst<ApiType, u16>;
      /**
       * The base amount of currency needed to reserve for starting a recovery.
       **/
      recoveryDeposit: AugmentedConst<ApiType, BalanceOf>;
    };
    society: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The minimum amount of a deposit required for a bid to be made.
       **/
      candidateDeposit: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The number of blocks between membership challenges.
       **/
      challengePeriod: AugmentedConst<ApiType, BlockNumber>;
      /**
       * The number of times a member may vote the wrong way (or not at all, when they are a skeptic)
       * before they become suspended.
       **/
      maxStrikes: AugmentedConst<ApiType, u32>;
      /**
       * The societies's module id
       **/
      moduleId: AugmentedConst<ApiType, ModuleId>;
      /**
       * The amount of incentive paid within each period. Doesn't include VoterTip.
       **/
      periodSpend: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The number of blocks between candidate/membership rotation periods.
       **/
      rotationPeriod: AugmentedConst<ApiType, BlockNumber>;
      /**
       * The amount of the unpaid reward that gets deducted in the case that either a skeptic
       * doesn't vote or someone votes in the wrong way.
       **/
      wrongSideDeduction: AugmentedConst<ApiType, BalanceOf>;
    };
    staking: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: AugmentedConst<ApiType, EraIndex>;
      /**
       * The number of blocks before the end of the era from which election submissions are allowed.
       * 
       * Setting this to zero will disable the offchain compute and only on-chain seq-phragmen will
       * be used.
       * 
       * This is bounded by being within the last session. Hence, setting it to a value more than the
       * length of a session will be pointless.
       **/
      electionLookahead: AugmentedConst<ApiType, BlockNumber>;
      /**
       * Maximum number of balancing iterations to run in the offchain submission.
       * 
       * If set to 0, balance_solution will not be executed at all.
       **/
      maxIterations: AugmentedConst<ApiType, u32>;
      /**
       * The maximum number of nominators rewarded for each validator.
       * 
       * For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can claim
       * their reward. This used to limit the i/o cost for the nominator payout.
       **/
      maxNominatorRewardedPerValidator: AugmentedConst<ApiType, u32>;
      /**
       * The threshold of improvement that should be provided for a new solution to be accepted.
       **/
      minSolutionScoreBump: AugmentedConst<ApiType, Perbill>;
      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: AugmentedConst<ApiType, SessionIndex>;
      /**
       * Number of eras that slashes are deferred by, after computation.
       * 
       * This should be less than the bonding duration.
       * Set to 0 if slashes should be applied immediately, without opportunity for
       * intervention.
       **/
      slashDeferDuration: AugmentedConst<ApiType, EraIndex>;
    };
    system: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The base weight of executing a block, independent of the transactions in the block.
       **/
      blockExecutionWeight: AugmentedConst<ApiType, Weight>;
      /**
       * The maximum number of blocks to allow in mortal eras.
       **/
      blockHashCount: AugmentedConst<ApiType, BlockNumber>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: AugmentedConst<ApiType, RuntimeDbWeight>;
      /**
       * The base weight of an Extrinsic in the block, independent of the of extrinsic being executed.
       **/
      extrinsicBaseWeight: AugmentedConst<ApiType, Weight>;
      /**
       * The maximum length of a block (in bytes).
       **/
      maximumBlockLength: AugmentedConst<ApiType, u32>;
      /**
       * The maximum weight of a block.
       **/
      maximumBlockWeight: AugmentedConst<ApiType, Weight>;
    };
    timestamp: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: AugmentedConst<ApiType, Moment>;
    };
    transactionPayment: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: AugmentedConst<ApiType, Vec<WeightToFeeCoefficient>>;
    };
    treasury: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: AugmentedConst<ApiType, Permill>;
      /**
       * The treasury's module id, used for deriving its sovereign account ID.
       **/
      moduleId: AugmentedConst<ApiType, ModuleId>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: AugmentedConst<ApiType, Permill>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: AugmentedConst<ApiType, BalanceOf>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: AugmentedConst<ApiType, BlockNumber>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: AugmentedConst<ApiType, BlockNumber>;
      /**
       * The amount of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: AugmentedConst<ApiType, Percent>;
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: AugmentedConst<ApiType, BalanceOf>;
      /**
       * The amount held on deposit per byte within the tip report reason.
       **/
      tipReportDepositPerByte: AugmentedConst<ApiType, BalanceOf>;
    };
    vesting: {
      [index: string]: AugmentedConst<ApiType, object & Codec>;
      /**
       * The minimum amount to be transferred to create a new vesting schedule.
       **/
      minVestedTransfer: AugmentedConst<ApiType, BalanceOf>;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    [index: string]: QueryableModuleConsts<ApiType>;
  }
}
