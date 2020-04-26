// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import { Codec } from '@polkadot/types/types';
import { u32, u64 } from '@polkadot/types/primitive';
import { Balance, BalanceOf, BlockNumber, LockIdentifier, ModuleId, Moment, Percent, Permill, RuntimeDbWeight, Weight } from '@polkadot/types/interfaces/runtime';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex } from '@polkadot/types/interfaces/staking';

declare module '@polkadot/metadata/Decorated/consts/types' {
  export interface Constants {
    [index: string]: ModuleConstants;
    babe: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The number of **slots** that an epoch takes. We couple sessions to
       * epochs, i.e. we start a new session once the new epoch begins.
       **/
      epochDuration: AugmentedConst<u64>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: AugmentedConst<Moment>;
    };
    balances: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: AugmentedConst<Balance>;
    };
    contracts: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The maximum nesting level of a call/instantiate stack. A reasonable default
       * value is 100.
       **/
      maxDepth: AugmentedConst<u32>;
      /**
       * The maximum size of a storage value in bytes. A reasonable default is 16 KiB.
       **/
      maxValueSize: AugmentedConst<u32>;
      /**
       * Price of a byte of storage per one block interval. Should be greater than 0.
       **/
      rentByteFee: AugmentedConst<BalanceOf>;
      /**
       * The amount of funds a contract should deposit in order to offset
       * the cost of one byte.
       * Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,
       * then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.
       * But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,
       * then it would pay 500 BU/day.
       **/
      rentDepositOffset: AugmentedConst<BalanceOf>;
      /**
       * Number of block delay an extrinsic claim surcharge has.
       * When claim surcharge is called by an extrinsic the rent is checked
       * for current_block - delay
       **/
      signedClaimHandicap: AugmentedConst<BlockNumber>;
      /**
       * Size of a contract at the time of instantiation. This is a simple way to ensure that
       * empty contracts eventually gets deleted.
       **/
      storageSizeOffset: AugmentedConst<u32>;
      /**
       * Reward that is received by the party whose touch has led
       * to removal of a contract.
       **/
      surchargeReward: AugmentedConst<BalanceOf>;
      /**
       * The minimum amount required to generate a tombstone.
       **/
      tombstoneDeposit: AugmentedConst<BalanceOf>;
    };
    democracy: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: AugmentedConst<BlockNumber>;
      /**
       * The minimum period of locking and the period between a proposal being approved and enacted.
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case where
       * they are on the losing side of a vote.
       **/
      enactmentPeriod: AugmentedConst<BlockNumber>;
      /**
       * Minimum voting period allowed for an emergency referendum.
       **/
      fastTrackVotingPeriod: AugmentedConst<BlockNumber>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: AugmentedConst<BlockNumber>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: AugmentedConst<BalanceOf>;
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: AugmentedConst<BalanceOf>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: AugmentedConst<BlockNumber>;
    };
    elections: {
      [index: string]: AugmentedConst<object & Codec>;
      candidacyBond: AugmentedConst<BalanceOf>;
      desiredMembers: AugmentedConst<u32>;
      desiredRunnersUp: AugmentedConst<u32>;
      moduleId: AugmentedConst<LockIdentifier>;
      termDuration: AugmentedConst<BlockNumber>;
      votingBond: AugmentedConst<BalanceOf>;
    };
    finalityTracker: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The delay after which point things become suspicious. Default is 1000.
       **/
      reportLatency: AugmentedConst<BlockNumber>;
      /**
       * The number of recent samples to keep from this chain. Default is 101.
       **/
      windowSize: AugmentedConst<BlockNumber>;
    };
    identity: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The amount held on deposit for a registered identity.
       **/
      basicDeposit: AugmentedConst<BalanceOf>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: AugmentedConst<BalanceOf>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: AugmentedConst<u32>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: AugmentedConst<u32>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: AugmentedConst<u32>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will be
       * another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: AugmentedConst<BalanceOf>;
    };
    society: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The minimum amount of a deposit required for a bid to be made.
       **/
      candidateDeposit: AugmentedConst<BalanceOf>;
      /**
       * The number of blocks between membership challenges.
       **/
      challengePeriod: AugmentedConst<BlockNumber>;
      /**
       * The number of times a member may vote the wrong way (or not at all, when they are a skeptic)
       * before they become suspended.
       **/
      maxStrikes: AugmentedConst<u32>;
      /**
       * The societies's module id
       **/
      moduleId: AugmentedConst<ModuleId>;
      /**
       * The amount of incentive paid within each period. Doesn't include VoterTip.
       **/
      periodSpend: AugmentedConst<BalanceOf>;
      /**
       * The number of blocks between candidate/membership rotation periods.
       **/
      rotationPeriod: AugmentedConst<BlockNumber>;
      /**
       * The amount of the unpaid reward that gets deducted in the case that either a skeptic
       * doesn't vote or someone votes in the wrong way.
       **/
      wrongSideDeduction: AugmentedConst<BalanceOf>;
    };
    staking: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: AugmentedConst<EraIndex>;
      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: AugmentedConst<SessionIndex>;
    };
    system: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The base weight of executing a block, independent of the transactions in the block.
       **/
      blockExecutionWeight: AugmentedConst<Weight>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: AugmentedConst<RuntimeDbWeight>;
      /**
       * The base weight of an Extrinsic in the block, independent of the of extrinsic being executed.
       **/
      extrinsicBaseWeight: AugmentedConst<Weight>;
      /**
       * The maximum length of a block (in bytes).
       **/
      maximumBlockLength: AugmentedConst<u32>;
      /**
       * The maximum weight of a block.
       **/
      maximumBlockWeight: AugmentedConst<Weight>;
    };
    timestamp: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: AugmentedConst<Moment>;
    };
    transactionPayment: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: AugmentedConst<BalanceOf>;
    };
    treasury: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: AugmentedConst<Permill>;
      /**
       * The treasury's module id, used for deriving its sovereign account ID.
       **/
      moduleId: AugmentedConst<ModuleId>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: AugmentedConst<Permill>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: AugmentedConst<BalanceOf>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: AugmentedConst<BlockNumber>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: AugmentedConst<BlockNumber>;
      /**
       * The amount of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: AugmentedConst<Percent>;
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: AugmentedConst<BalanceOf>;
      /**
       * The amount held on deposit per byte within the tip report reason.
       **/
      tipReportDepositPerByte: AugmentedConst<BalanceOf>;
    };
    vesting: {
      [index: string]: AugmentedConst<object & Codec>;
      /**
       * The minimum amount to be transferred to create a new vesting schedule.
       **/
      minVestedTransfer: AugmentedConst<BalanceOf>;
    };
  }
}
