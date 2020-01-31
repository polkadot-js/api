// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Bytes, u32, u64 } from '@polkadot/types';
import { Balance, BalanceOf, BlockNumber, Moment, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import { Gas } from '@polkadot/types/interfaces/contracts';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex } from '@polkadot/types/interfaces/staking';
import { Codec } from '@polkadot/types/types';

declare module '@polkadot/metadata/Decorated/types' {
  export interface Constants {
    babe: {
      [index: string]: Codec;
      /**
       * The number of **slots** that an epoch takes. We couple sessions to epochs, i.e. we start a new session once the new epoch begins.
       **/
      epochDuration: u64 & ConstantCodec;
      /**
       * The expected average block time at which BABE should be creating blocks. Since BABE is probabilistic it is not trivial to figure out what the expected average block time should be based on the slot duration and the security parameter `c` (where `1 - c` represents the probability of a slot being empty).
       **/
      expectedBlockTime: Moment & ConstantCodec;
    };
    timestamp: {
      [index: string]: Codec;
      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period that the block production apparatus provides. Your chosen consensus system will generally work with this to determine a sensible block time. e.g. For Aura, it will be double this period on default settings.
       **/
      minimumPeriod: Moment & ConstantCodec;
    };
    balances: {
      [index: string]: Codec;
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: Balance & ConstantCodec;
      /**
       * The fee required to make a transfer.
       **/
      transferFee: Balance & ConstantCodec;
      /**
       * The fee required to create an account.
       **/
      creationFee: Balance & ConstantCodec;
    };
    transactionPayment: {
      [index: string]: Codec;
      /**
       * The fee to be paid for making a transaction; the base.
       **/
      transactionBaseFee: BalanceOf & ConstantCodec;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: BalanceOf & ConstantCodec;
    };
    staking: {
      [index: string]: Codec;
      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: SessionIndex & ConstantCodec;
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: EraIndex & ConstantCodec;
    };
    session: {
      [index: string]: Codec;
      /**
       * Used as first key for `NextKeys` and `KeyOwner` to put all the data into the same branch of the trie.
       **/
      dedupKeyPrefix: Bytes & ConstantCodec;
    };
    democracy: {
      [index: string]: Codec;
      /**
       * The minimum period of locking and the period between a proposal being approved and enacted.  It should generally be a little more than the unstake period to ensure that voting stakers have an opportunity to remove themselves from the system in the case where they are on the losing side of a vote.
       **/
      enactmentPeriod: BlockNumber & ConstantCodec;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: BlockNumber & ConstantCodec;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: BlockNumber & ConstantCodec;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: BalanceOf & ConstantCodec;
      /**
       * Minimum voting period allowed for an emergency referendum.
       **/
      emergencyVotingPeriod: BlockNumber & ConstantCodec;
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: BlockNumber & ConstantCodec;
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: BalanceOf & ConstantCodec;
    };
    elections: {
      [index: string]: Codec;
      candidacyBond: BalanceOf & ConstantCodec;
      votingBond: BalanceOf & ConstantCodec;
      desiredMembers: u32 & ConstantCodec;
      desiredRunnersUp: u32 & ConstantCodec;
      termDuration: BlockNumber & ConstantCodec;
    };
    finalityTracker: {
      [index: string]: Codec;
      /**
       * The number of recent samples to keep from this chain. Default is 101.
       **/
      windowSize: BlockNumber & ConstantCodec;
      /**
       * The delay after which point things become suspicious. Default is 1000.
       **/
      reportLatency: BlockNumber & ConstantCodec;
    };
    treasury: {
      [index: string]: Codec;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal. An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & ConstantCodec;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: BalanceOf & ConstantCodec;
      /**
       * Period between successive spends.
       **/
      spendPeriod: BlockNumber & ConstantCodec;
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & ConstantCodec;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: BlockNumber & ConstantCodec;
      /**
       * The amount of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: Percent & ConstantCodec;
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: BalanceOf & ConstantCodec;
      /**
       * The amount held on deposit per byte within the tip report reason.
       **/
      tipReportDepositPerByte: BalanceOf & ConstantCodec;
    };
    contracts: {
      [index: string]: Codec;
      /**
       * Number of block delay an extrinsic claim surcharge has.  When claim surcharge is called by an extrinsic the rent is checked for current_block - delay
       **/
      signedClaimHandicap: BlockNumber & ConstantCodec;
      /**
       * The minimum amount required to generate a tombstone.
       **/
      tombstoneDeposit: BalanceOf & ConstantCodec;
      /**
       * Size of a contract at the time of instantiaion. This is a simple way to ensure that empty contracts eventually gets deleted.
       **/
      storageSizeOffset: u32 & ConstantCodec;
      /**
       * Price of a byte of storage per one block interval. Should be greater than 0.
       **/
      rentByteFee: BalanceOf & ConstantCodec;
      /**
       * The amount of funds a contract should deposit in order to offset the cost of one byte.  Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day, then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent. But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000, then it would pay 500 BU/day.
       **/
      rentDepositOffset: BalanceOf & ConstantCodec;
      /**
       * Reward that is received by the party whose touch has led to removal of a contract.
       **/
      surchargeReward: BalanceOf & ConstantCodec;
      /**
       * The fee required to make a transfer.
       **/
      transferFee: BalanceOf & ConstantCodec;
      /**
       * The fee required to create an account.
       **/
      creationFee: BalanceOf & ConstantCodec;
      /**
       * The fee to be paid for making a transaction; the base.
       **/
      transactionBaseFee: BalanceOf & ConstantCodec;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: BalanceOf & ConstantCodec;
      /**
       * The fee required to instantiate a contract instance. A reasonable default value is 21.
       **/
      contractFee: BalanceOf & ConstantCodec;
      /**
       * The base fee charged for calling into a contract. A reasonable default value is 135.
       **/
      callBaseFee: Gas & ConstantCodec;
      /**
       * The base fee charged for instantiating a contract. A reasonable default value is 175.
       **/
      instantiateBaseFee: Gas & ConstantCodec;
      /**
       * The maximum nesting level of a call/instantiate stack. A reasonable default value is 100.
       **/
      maxDepth: u32 & ConstantCodec;
      /**
       * The maximum size of a storage value in bytes. A reasonable default is 16 KiB.
       **/
      maxValueSize: u32 & ConstantCodec;
      /**
       * The maximum amount of gas that could be expended per block. A reasonable default value is 10_000_000.
       **/
      blockGasLimit: Gas & ConstantCodec;
    };
    society: {
      [index: string]: Codec;
      /**
       * The minimum amount of a deposit required for a bid to be made.
       **/
      candidateDeposit: BalanceOf & ConstantCodec;
      /**
       * The amount of the unpaid reward that gets deducted in the case that either a skeptic doesn't vote or someone votes in the wrong way.
       **/
      wrongSideDeduction: BalanceOf & ConstantCodec;
      /**
       * The number of times a member may vote the wrong way (or not at all, when they are a skeptic) before they become suspended.
       **/
      maxStrikes: u32 & ConstantCodec;
      /**
       * The amount of incentive paid within each period. Doesn't include VoterTip.
       **/
      periodSpend: BalanceOf & ConstantCodec;
      /**
       * The number of blocks between candidate/membership rotation periods.
       **/
      rotationPeriod: BlockNumber & ConstantCodec;
      /**
       * The number of blocks between membership challenges.
       **/
      challengePeriod: BlockNumber & ConstantCodec;
    };
  }
}
