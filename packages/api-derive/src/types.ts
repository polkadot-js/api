// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api-base/types';
import type { u32 } from '@polkadot/types';
import type { Balance, BlockNumber, BountyIndex, Hash, Proposal, ProposalIndex, SetIndex, Votes } from '@polkadot/types/interfaces';
import type { PalletBountiesBounty, PalletTreasuryProposal } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { ExactDerive } from './derive';

export * from './accounts/types';
export * from './balances/types';
export * from './bagsList/types';
export * from './council/types';
export * from './crowdloan/types';
export * from './democracy/types';
export * from './elections/types';
export * from './parachains/types';
export * from './session/types';
export * from './society/types';
export * from './staking/types';
export * from './type/types';

export interface DeriveApi extends ApiInterfaceRx {
  derive: ExactDerive;
}

export interface DeriveContractFees {
  callBaseFee: BN;
  contractFee: BN;
  creationFee: BN;
  rentByteFee: BN;
  rentDepositOffset: BN;
  surchargeReward: BN;
  tombstoneDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DeriveCollectiveProposal {
  hash: Hash;
  proposal: Proposal;
  votes: Votes | null;
}

export interface DeriveFees {
  creationFee: Balance;
  existentialDeposit: Balance;
  transactionBaseFee: Balance;
  transactionByteFee: Balance;
  transferFee: Balance;
}

export interface DeriveHeartbeatAuthor {
  blockCount: u32;
  hasMessage: boolean;
  isOnline: boolean;
}

export type DeriveHeartbeats = Record<string, DeriveHeartbeatAuthor>;

export interface RecentlyOffline {
  blockNumber: BlockNumber;
  count: BN;
}

export type DeriveRecentlyOffline = Record<string, RecentlyOffline[]>;

export interface DeriveTreasuryProposal {
  council: DeriveCollectiveProposal[];
  id: ProposalIndex;
  proposal: PalletTreasuryProposal;
}

export interface DeriveTreasuryProposals {
  approvals: DeriveTreasuryProposal[];
  proposalCount: ProposalIndex;
  proposals: DeriveTreasuryProposal[];
}

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DeriveVoterPositions = Record<string, VoterPosition>;

export interface DeriveBounty {
  bounty: PalletBountiesBounty;
  description: string;
  index: BountyIndex;
  proposals: DeriveCollectiveProposal[];
}

export type DeriveBounties = DeriveBounty[];
