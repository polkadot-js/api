// Auto-generated via `yarn build:interfaces`, do not edit
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
      epochDuration: u64 & ConstantCodec;
      expectedBlockTime: Moment & ConstantCodec;
    };
    timestamp: {
      [index: string]: Codec;
      minimumPeriod: Moment & ConstantCodec;
    };
    balances: {
      [index: string]: Codec;
      existentialDeposit: Balance & ConstantCodec;
      transferFee: Balance & ConstantCodec;
      creationFee: Balance & ConstantCodec;
    };
    transactionPayment: {
      [index: string]: Codec;
      transactionBaseFee: BalanceOf & ConstantCodec;
      transactionByteFee: BalanceOf & ConstantCodec;
    };
    staking: {
      [index: string]: Codec;
      sessionsPerEra: SessionIndex & ConstantCodec;
      bondingDuration: EraIndex & ConstantCodec;
    };
    session: {
      [index: string]: Codec;
      dedupKeyPrefix: Bytes & ConstantCodec;
    };
    democracy: {
      [index: string]: Codec;
      enactmentPeriod: BlockNumber & ConstantCodec;
      launchPeriod: BlockNumber & ConstantCodec;
      votingPeriod: BlockNumber & ConstantCodec;
      minimumDeposit: BalanceOf & ConstantCodec;
      emergencyVotingPeriod: BlockNumber & ConstantCodec;
      cooloffPeriod: BlockNumber & ConstantCodec;
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
      windowSize: BlockNumber & ConstantCodec;
      reportLatency: BlockNumber & ConstantCodec;
    };
    treasury: {
      [index: string]: Codec;
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
      [index: string]: Codec;
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
      [index: string]: Codec;
      candidateDeposit: BalanceOf & ConstantCodec;
      wrongSideDeduction: BalanceOf & ConstantCodec;
      maxStrikes: u32 & ConstantCodec;
      periodSpend: BalanceOf & ConstantCodec;
      rotationPeriod: BlockNumber & ConstantCodec;
      challengePeriod: BlockNumber & ConstantCodec;
    };
  }
}
