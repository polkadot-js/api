// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Bytes, u32, u64 } from '@polkadot/types';
import { Balance, BalanceOf, BlockNumber, Moment, Permill } from '@polkadot/types/interfaces/runtime';
import { Gas } from '@polkadot/types/interfaces/contracts';
import { VoteIndex } from '@polkadot/types/interfaces/elections';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex } from '@polkadot/types/interfaces/staking';
import { Codec } from '@polkadot/types/types';

declare module '@polkadot/metadata/Decorated/types' {
  export interface Constants {
    babe: {
      [index: string]: Codec;
      epochDuration: u64;
      expectedBlockTime: Moment;
    };
    timestamp: {
      [index: string]: Codec;
      minimumPeriod: Moment;
    };
    balances: {
      [index: string]: Codec;
      existentialDeposit: Balance;
      transferFee: Balance;
      creationFee: Balance;
      transactionBaseFee: Balance;
      transactionByteFee: Balance;
    };
    staking: {
      [index: string]: Codec;
      sessionsPerEra: SessionIndex;
      bondingDuration: EraIndex;
    };
    session: {
      [index: string]: Codec;
      dedupKeyPrefix: Bytes;
    };
    democracy: {
      [index: string]: Codec;
      enactmentPeriod: BlockNumber;
      launchPeriod: BlockNumber;
      votingPeriod: BlockNumber;
      minimumDeposit: BalanceOf;
      emergencyVotingPeriod: BlockNumber;
      cooloffPeriod: BlockNumber;
    };
    elections: {
      [index: string]: Codec;
      candidacyBond: BalanceOf;
      votingBond: BalanceOf;
      votingFee: BalanceOf;
      presentSlashPerVoter: BalanceOf;
      carryCount: u32;
      inactiveGracePeriod: VoteIndex;
      votingPeriod: BlockNumber;
      minimumVotingLock: BalanceOf;
      decayRatio: u32;
      voterSetSize: u32;
      approvalSetSize: u32;
    };
    finalityTracker: {
      [index: string]: Codec;
      windowSize: BlockNumber;
      reportLatency: BlockNumber;
    };
    treasury: {
      [index: string]: Codec;
      proposalBond: Permill;
      proposalBondMinimum: BalanceOf;
      spendPeriod: BlockNumber;
      burn: Permill;
    };
    contracts: {
      [index: string]: Codec;
      signedClaimHandicap: BlockNumber;
      tombstoneDeposit: BalanceOf;
      storageSizeOffset: u32;
      rentByteFee: BalanceOf;
      rentDepositOffset: BalanceOf;
      surchargeReward: BalanceOf;
      transferFee: BalanceOf;
      creationFee: BalanceOf;
      transactionBaseFee: BalanceOf;
      transactionByteFee: BalanceOf;
      contractFee: BalanceOf;
      callBaseFee: Gas;
      instantiateBaseFee: Gas;
      maxDepth: u32;
      maxValueSize: u32;
      blockGasLimit: Gas;
    };
  }
}
