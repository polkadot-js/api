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
      epochDuration: u64 & ConstantCodec;
      expectedBlockTime: Moment & ConstantCodec;
    };
    timestamp: {
      minimumPeriod: Moment & ConstantCodec;
    };
    balances: {
      existentialDeposit: Balance & ConstantCodec;
      transferFee: Balance & ConstantCodec;
      creationFee: Balance & ConstantCodec;
    };
    transactionPayment: {
      transactionBaseFee: BalanceOf & ConstantCodec;
      transactionByteFee: BalanceOf & ConstantCodec;
    };
    staking: {
      sessionsPerEra: SessionIndex & ConstantCodec;
      bondingDuration: EraIndex & ConstantCodec;
    };
    session: {
      dedupKeyPrefix: Bytes & ConstantCodec;
    };
    democracy: {
      enactmentPeriod: BlockNumber & ConstantCodec;
      launchPeriod: BlockNumber & ConstantCodec;
      votingPeriod: BlockNumber & ConstantCodec;
      minimumDeposit: BalanceOf & ConstantCodec;
      emergencyVotingPeriod: BlockNumber & ConstantCodec;
      cooloffPeriod: BlockNumber & ConstantCodec;
      preimageByteDeposit: BalanceOf & ConstantCodec;
    };
    elections: {
      candidacyBond: BalanceOf & ConstantCodec;
      votingBond: BalanceOf & ConstantCodec;
      desiredMembers: u32 & ConstantCodec;
      desiredRunnersUp: u32 & ConstantCodec;
      termDuration: BlockNumber & ConstantCodec;
    };
    finalityTracker: {
      windowSize: BlockNumber & ConstantCodec;
      reportLatency: BlockNumber & ConstantCodec;
    };
    treasury: {
      proposalBond: Permill & ConstantCodec;
      proposalBondMinimum: BalanceOf & ConstantCodec;
      spendPeriod: BlockNumber & ConstantCodec;
      burn: Permill & ConstantCodec;
      tipCountdown: BlockNumber & ConstantCodec;
      tipFindersFee: Percent & ConstantCodec;
      tipReportDepositBase: BalanceOf & ConstantCodec;
      tipReportDepositPerByte: BalanceOf & ConstantCodec;
    };
    contracts: {
      signedClaimHandicap: BlockNumber & ConstantCodec;
      tombstoneDeposit: BalanceOf & ConstantCodec;
      storageSizeOffset: u32 & ConstantCodec;
      rentByteFee: BalanceOf & ConstantCodec;
      rentDepositOffset: BalanceOf & ConstantCodec;
      surchargeReward: BalanceOf & ConstantCodec;
      transferFee: BalanceOf & ConstantCodec;
      creationFee: BalanceOf & ConstantCodec;
      transactionBaseFee: BalanceOf & ConstantCodec;
      transactionByteFee: BalanceOf & ConstantCodec;
      contractFee: BalanceOf & ConstantCodec;
      callBaseFee: Gas & ConstantCodec;
      instantiateBaseFee: Gas & ConstantCodec;
      maxDepth: u32 & ConstantCodec;
      maxValueSize: u32 & ConstantCodec;
      blockGasLimit: Gas & ConstantCodec;
    };
    society: {
      candidateDeposit: BalanceOf & ConstantCodec;
      wrongSideDeduction: BalanceOf & ConstantCodec;
      maxStrikes: u32 & ConstantCodec;
      periodSpend: BalanceOf & ConstantCodec;
      rotationPeriod: BlockNumber & ConstantCodec;
      challengePeriod: BlockNumber & ConstantCodec;
    };
  }
}
