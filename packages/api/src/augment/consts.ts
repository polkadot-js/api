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
      [key: string]: Codec;
      /**
       * The number of **slots** that an epoch takes. We couple sessions to
       * epochs, i.e. we start a new session once the new epoch begins.
       **/
      epochDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: Moment & AugmentedConst<ApiType>;
    };
    balances: {
      [key: string]: Codec;
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: Balance & AugmentedConst<ApiType>;
    };
    contracts: {
      [key: string]: Codec;
      /**
       * The maximum nesting level of a call/instantiate stack. A reasonable default
       * value is 100.
       **/
      maxDepth: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum size of a storage value in bytes. A reasonable default is 16 KiB.
       **/
      maxValueSize: u32 & AugmentedConst<ApiType>;
      /**
       * Price of a byte of storage per one block interval. Should be greater than 0.
       **/
      rentByteFee: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of funds a contract should deposit in order to offset
       * the cost of one byte.
       * 
       * Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,
       * then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.
       * But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,
       * then it would pay 500 BU/day.
       **/
      rentDepositOffset: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Number of block delay an extrinsic claim surcharge has.
       * 
       * When claim surcharge is called by an extrinsic the rent is checked
       * for current_block - delay
       **/
      signedClaimHandicap: BlockNumber & AugmentedConst<ApiType>;
      /**
       * A size offset for an contract. A just created account with untouched storage will have that
       * much of storage from the perspective of the state rent.
       * 
       * This is a simple way to ensure that contracts with empty storage eventually get deleted
       * by making them pay rent. This creates an incentive to remove them early in order to save
       * rent.
       **/
      storageSizeOffset: u32 & AugmentedConst<ApiType>;
      /**
       * Reward that is received by the party whose touch has led
       * to removal of a contract.
       **/
      surchargeReward: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The minimum amount required to generate a tombstone.
       **/
      tombstoneDeposit: BalanceOf & AugmentedConst<ApiType>;
    };
    democracy: {
      [key: string]: Codec;
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The minimum period of locking and the period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case where
       * they are on the losing side of a vote.
       **/
      enactmentPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for an emergency referendum.
       **/
      fastTrackVotingPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: BlockNumber & AugmentedConst<ApiType>;
    };
    elections: {
      [key: string]: Codec;
      candidacyBond: BalanceOf & AugmentedConst<ApiType>;
      desiredMembers: u32 & AugmentedConst<ApiType>;
      desiredRunnersUp: u32 & AugmentedConst<ApiType>;
      moduleId: LockIdentifier & AugmentedConst<ApiType>;
      termDuration: BlockNumber & AugmentedConst<ApiType>;
      votingBond: BalanceOf & AugmentedConst<ApiType>;
    };
    finalityTracker: {
      [key: string]: Codec;
      /**
       * The delay after which point things become suspicious. Default is 1000.
       **/
      reportLatency: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The number of recent samples to keep from this chain. Default is 101.
       **/
      windowSize: BlockNumber & AugmentedConst<ApiType>;
    };
    identity: {
      [key: string]: Codec;
      /**
       * The amount held on deposit for a registered identity.
       **/
      basicDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will be
       * another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: BalanceOf & AugmentedConst<ApiType>;
    };
    indices: {
      [key: string]: Codec;
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: BalanceOf & AugmentedConst<ApiType>;
    };
    multisig: {
      [key: string]: Codec;
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to store
       * a dispatch call for later.
       **/
      depositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       **/
      depositFactor: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed for a given multisig.
       **/
      maxSignatories: u16 & AugmentedConst<ApiType>;
    };
    proxy: {
      [key: string]: Codec;
      /**
       * `AnnouncementDepositBase` metadata shadow.
       **/
      announcementDepositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * `AnnouncementDepositFactor` metadata shadow.
       **/
      announcementDepositFactor: BalanceOf & AugmentedConst<ApiType>;
      /**
       * `MaxPending` metadata shadow.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u16 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       **/
      proxyDepositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       **/
      proxyDepositFactor: BalanceOf & AugmentedConst<ApiType>;
    };
    recovery: {
      [key: string]: Codec;
      /**
       * The base amount of currency needed to reserve for creating a recovery configuration.
       **/
      configDepositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per additional user when creating a recovery configuration.
       **/
      friendDepositFactor: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The maximum amount of friends allowed in a recovery configuration.
       **/
      maxFriends: u16 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for starting a recovery.
       **/
      recoveryDeposit: BalanceOf & AugmentedConst<ApiType>;
    };
    society: {
      [key: string]: Codec;
      /**
       * The minimum amount of a deposit required for a bid to be made.
       **/
      candidateDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The number of blocks between membership challenges.
       **/
      challengePeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The number of times a member may vote the wrong way (or not at all, when they are a skeptic)
       * before they become suspended.
       **/
      maxStrikes: u32 & AugmentedConst<ApiType>;
      /**
       * The societies's module id
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * The amount of incentive paid within each period. Doesn't include VoterTip.
       **/
      periodSpend: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The number of blocks between candidate/membership rotation periods.
       **/
      rotationPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The amount of the unpaid reward that gets deducted in the case that either a skeptic
       * doesn't vote or someone votes in the wrong way.
       **/
      wrongSideDeduction: BalanceOf & AugmentedConst<ApiType>;
    };
    staking: {
      [key: string]: Codec;
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: EraIndex & AugmentedConst<ApiType>;
      /**
       * The number of blocks before the end of the era from which election submissions are allowed.
       * 
       * Setting this to zero will disable the offchain compute and only on-chain seq-phragmen will
       * be used.
       * 
       * This is bounded by being within the last session. Hence, setting it to a value more than the
       * length of a session will be pointless.
       **/
      electionLookahead: BlockNumber & AugmentedConst<ApiType>;
      /**
       * Maximum number of balancing iterations to run in the offchain submission.
       * 
       * If set to 0, balance_solution will not be executed at all.
       **/
      maxIterations: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of nominators rewarded for each validator.
       * 
       * For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can claim
       * their reward. This used to limit the i/o cost for the nominator payout.
       **/
      maxNominatorRewardedPerValidator: u32 & AugmentedConst<ApiType>;
      /**
       * The threshold of improvement that should be provided for a new solution to be accepted.
       **/
      minSolutionScoreBump: Perbill & AugmentedConst<ApiType>;
      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: SessionIndex & AugmentedConst<ApiType>;
      /**
       * Number of eras that slashes are deferred by, after computation.
       * 
       * This should be less than the bonding duration.
       * Set to 0 if slashes should be applied immediately, without opportunity for
       * intervention.
       **/
      slashDeferDuration: EraIndex & AugmentedConst<ApiType>;
    };
    system: {
      [key: string]: Codec;
      /**
       * The base weight of executing a block, independent of the transactions in the block.
       **/
      blockExecutionWeight: Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of blocks to allow in mortal eras.
       **/
      blockHashCount: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: RuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The base weight of an Extrinsic in the block, independent of the of extrinsic being executed.
       **/
      extrinsicBaseWeight: Weight & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      maximumBlockLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum weight of a block.
       **/
      maximumBlockWeight: Weight & AugmentedConst<ApiType>;
    };
    timestamp: {
      [key: string]: Codec;
      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: Moment & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      [key: string]: Codec;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<WeightToFeeCoefficient> & AugmentedConst<ApiType>;
    };
    treasury: {
      [key: string]: Codec;
      /**
       * Percentage of the curator fee that will be reserved upfront as deposit for bounty curator.
       **/
      bountyCuratorDeposit: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: BlockNumber & AugmentedConst<ApiType>;
      bountyValueMinimum: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's module id, used for deriving its sovereign account ID.
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The amount of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: Percent & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: BalanceOf & AugmentedConst<ApiType>;
    };
    vesting: {
      [key: string]: Codec;
      /**
       * The minimum amount to be transferred to create a new vesting schedule.
       **/
      minVestedTransfer: BalanceOf & AugmentedConst<ApiType>;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    [key: string]: QueryableModuleConsts;
  }
}
