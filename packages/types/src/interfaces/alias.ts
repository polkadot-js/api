// Copyright 2017-2022 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideModuleType, Registry } from '../types';

import { objectSpread } from '@polkadot/util';

// type overrides for modules (where duplication between modules exist)
const typesAlias: Record<string, OverrideModuleType> = {
  assets: {
    Approval: 'AssetApproval',
    ApprovalKey: 'AssetApprovalKey',
    Balance: 'TAssetBalance',
    DestroyWitness: 'AssetDestroyWitness'
  },
  babe: {
    EquivocationProof: 'BabeEquivocationProof'
  },
  balances: {
    Status: 'BalanceStatus'
  },
  beefy: {
    AuthorityId: 'BeefyId'
  },
  contracts: {
    StorageKey: 'ContractStorageKey'
  },
  electionProviderMultiPhase: {
    Phase: 'ElectionPhase'
  },
  ethereum: {
    Block: 'EthBlock',
    Header: 'EthHeader',
    Receipt: 'EthReceipt',
    Transaction: 'EthTransaction',
    TransactionStatus: 'EthTransactionStatus'
  },
  evm: {
    Account: 'EvmAccount',
    Log: 'EvmLog',
    Vicinity: 'EvmVicinity'
  },
  grandpa: {
    Equivocation: 'GrandpaEquivocation',
    EquivocationProof: 'GrandpaEquivocationProof'
  },
  identity: {
    Judgement: 'IdentityJudgement'
  },
  inclusion: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  paraDisputes: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  paraInclusion: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  paraScheduler: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  paraShared: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  parachains: {
    Id: 'ParaId'
  },
  parasDisputes: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  parasInclusion: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  parasScheduler: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  parasShared: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  proposeParachain: {
    Proposal: 'ParachainProposal'
  },
  proxy: {
    Announcement: 'ProxyAnnouncement'
  },
  scheduler: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  shared: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  society: {
    Judgement: 'SocietyJudgement',
    Vote: 'SocietyVote'
  },
  staking: {
    Compact: 'CompactAssignments'
  },
  treasury: {
    Proposal: 'TreasuryProposal'
  },
  xcm: {
    AssetId: 'XcmAssetId'
  },
  xcmPallet: {
    AssetId: 'XcmAssetId'
  }
};

/**
 * @description Get types for specific modules (metadata override)
 */
export function getAliasTypes ({ knownTypes }: Registry, section: string): OverrideModuleType {
  return objectSpread({},
    typesAlias[section],
    knownTypes.typesAlias?.[section]
  );
}
