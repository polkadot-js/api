// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
// import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { u32 } from '@polkadot/types';
import type { Balance, BlockNumber, BountyIndex, Hash, Proposal, ProposalIndex, SetIndex, Votes } from '@polkadot/types/interfaces';
import type { PalletBountiesBounty, PalletTreasuryProposal } from '@polkadot/types/lookup';
import type { AnyFunction } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { ExactDerive } from './derive';

export * from './accounts/types';
export * from './balances/types';
export * from './council/types';
export * from './crowdloan/types';
export * from './democracy/types';
export * from './elections/types';
export * from './parachains/types';
export * from './session/types';
export * from './society/types';
export * from './staking/types';
export * from './type/types';

export { ExactDerive };

// export type DeriveApi = ApiInterfaceRx;

export type DeriveSection<Section> = {
  [M in keyof Section]: Section[M] extends AnyFunction
    ? ReturnType<Section[M]> // ReturnType<Section[Method]> will be the inner function, i.e. without (api) argument
    : never;
};

export type DeriveAllSections<AllSections> = {
  [S in keyof AllSections]: DeriveSection<AllSections[S]>
};

export type DeriveCreator = (instanceId: string, api: DeriveApi) => (...args: unknown[]) => Observable<any>;

export type DeriveCustom = Record<string, Record<string, DeriveCreator>>;

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
