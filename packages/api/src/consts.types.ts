// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Bytes, u32, u64 } from '@polkadot/types';
import { Balance, BalanceOf, BlockNumber, Moment, Permill } from '@polkadot/types/interfaces/runtime';
import { Gas } from '@polkadot/types/interfaces/contracts';
import { VoteIndex } from '@polkadot/types/interfaces/elections';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex } from '@polkadot/types/interfaces/staking';

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
      transactionBaseFee: Balance & ConstantCodec;
      transactionByteFee: Balance & ConstantCodec;
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
    };
    elections: {
      candidacyBond: BalanceOf & ConstantCodec;
      votingBond: BalanceOf & ConstantCodec;
      votingFee: BalanceOf & ConstantCodec;
      presentSlashPerVoter: BalanceOf & ConstantCodec;
      carryCount: u32 & ConstantCodec;
      inactiveGracePeriod: VoteIndex & ConstantCodec;
      votingPeriod: BlockNumber & ConstantCodec;
      minimumVotingLock: BalanceOf & ConstantCodec;
      decayRatio: u32 & ConstantCodec;
      voterSetSize: u32 & ConstantCodec;
      approvalSetSize: u32 & ConstantCodec;
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
  }
}
