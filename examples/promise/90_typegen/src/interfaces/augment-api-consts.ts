// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Bytes, u32 } from '@polkadot/types/primitive';
import { Gas } from '@polkadot/types/interfaces/contracts';
import { Balance, BalanceOf, BlockNumber, Moment, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex } from '@polkadot/types/interfaces/staking';

declare module '@polkadot/metadata/Decorated/consts/types' {
  export interface Constants {
    timestamp: {

      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: AugmentedConst<Moment>;
    };
    balances: {

      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: AugmentedConst<Balance>;
      /**
       * The fee required to make a transfer.
       **/
      transferFee: AugmentedConst<Balance>;
      /**
       * The fee required to create an account.
       **/
      creationFee: AugmentedConst<Balance>;
    };
    transactionPayment: {

      /**
       * The fee to be paid for making a transaction; the base.
       **/
      transactionBaseFee: AugmentedConst<BalanceOf>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: AugmentedConst<BalanceOf>;
    };
    staking: {

      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: AugmentedConst<SessionIndex>;
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: AugmentedConst<EraIndex>;
    };
    session: {

      /**
       * Used as first key for `NextKeys` and `KeyOwner` to put all the data into the same branch
       * of the trie.
       **/
      dedupKeyPrefix: AugmentedConst<Bytes>;
    };
    democracy: {

      /**
       * The minimum period of locking and the period between a proposal being approved and enacted.
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case where
       * they are on the losing side of a vote.
       **/
      enactmentPeriod: AugmentedConst<BlockNumber>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: AugmentedConst<BlockNumber>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: AugmentedConst<BlockNumber>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: AugmentedConst<BalanceOf>;
      /**
       * Minimum voting period allowed for an emergency referendum.
       **/
      emergencyVotingPeriod: AugmentedConst<BlockNumber>;
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: AugmentedConst<BlockNumber>;
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: AugmentedConst<BalanceOf>;
    };
    elections: {

      candidacyBond: AugmentedConst<BalanceOf>;
      votingBond: AugmentedConst<BalanceOf>;
      desiredMembers: AugmentedConst<u32>;
      desiredRunnersUp: AugmentedConst<u32>;
      termDuration: AugmentedConst<BlockNumber>;
    };
    finalityTracker: {

      /**
       * The number of recent samples to keep from this chain. Default is 101.
       **/
      windowSize: AugmentedConst<BlockNumber>;
      /**
       * The delay after which point things become suspicious. Default is 1000.
       **/
      reportLatency: AugmentedConst<BlockNumber>;
    };
    treasury: {

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
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: AugmentedConst<Permill>;
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
    contracts: {

      /**
       * Number of block delay an extrinsic claim surcharge has.
       * When claim surcharge is called by an extrinsic the rent is checked
       * for current_block - delay
       **/
      signedClaimHandicap: AugmentedConst<BlockNumber>;
      /**
       * The minimum amount required to generate a tombstone.
       **/
      tombstoneDeposit: AugmentedConst<BalanceOf>;
      /**
       * Size of a contract at the time of instantiaion. This is a simple way to ensure that
       * empty contracts eventually gets deleted.
       **/
      storageSizeOffset: AugmentedConst<u32>;
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
       * Reward that is received by the party whose touch has led
       * to removal of a contract.
       **/
      surchargeReward: AugmentedConst<BalanceOf>;
      /**
       * The fee required to make a transfer.
       **/
      transferFee: AugmentedConst<BalanceOf>;
      /**
       * The fee required to create an account.
       **/
      creationFee: AugmentedConst<BalanceOf>;
      /**
       * The fee to be paid for making a transaction; the base.
       **/
      transactionBaseFee: AugmentedConst<BalanceOf>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: AugmentedConst<BalanceOf>;
      /**
       * The fee required to instantiate a contract instance. A reasonable default value
       * is 21.
       **/
      contractFee: AugmentedConst<BalanceOf>;
      /**
       * The base fee charged for calling into a contract. A reasonable default
       * value is 135.
       **/
      callBaseFee: AugmentedConst<Gas>;
      /**
       * The base fee charged for instantiating a contract. A reasonable default value
       * is 175.
       **/
      instantiateBaseFee: AugmentedConst<Gas>;
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
       * The maximum amount of gas that could be expended per block. A reasonable
       * default value is 10_000_000.
       **/
      blockGasLimit: AugmentedConst<Gas>;
    };
    nicks: {

      /**
       * Reservation fee.
       **/
      reservationFee: AugmentedConst<BalanceOf>;
      /**
       * The minimum length a name may be.
       **/
      minLength: AugmentedConst<u32>;
      /**
       * The maximum length a name may be.
       **/
      maxLength: AugmentedConst<u32>;
    };
  }
}
