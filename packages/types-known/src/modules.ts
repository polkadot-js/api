// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideModuleType } from '@polkadot/types/types';

// type overrides for modules (where duplication between modules exist)
const typesModules: Record<string, OverrideModuleType> = {
  babe: {
    EquivocationProof: 'BabeEquivocationProof'
  },
  balances: {
    Status: 'BalanceStatus'
  },
  contracts: {
    StorageKey: 'ContractStorageKey'
  },
  ethereum: {
    Block: 'EthBlock',
    Header: 'EthHeader',
    Receipt: 'EthReceipt',
    Transaction: 'EthTransaction',
    TransactionStatus: 'EthTransactionStatus'
  },
  grandpa: {
    Equivocation: 'GrandpaEquivocation',
    EquivocationProof: 'GrandpaEquivocationProof'
  },
  identity: {
    Judgement: 'IdentityJudgement'
  },
  parachains: {
    Id: 'ParaId'
  },
  proposeParachain: {
    Proposal: 'ParachainProposal'
  },
  proxy: {
    Announcement: 'ProxyAnnouncement'
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
  }
};

export default typesModules;
