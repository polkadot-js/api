// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideModuleType } from '@polkadot/types/types';

// type overrides for modules (where duplication between modules exist)
const typesModules: Record<string, OverrideModuleType> = {
  balances: {
    Releases: 'ReleasesBalances'
  },
  contract: { // old metadata & naming
    // v2 & v3
    AccountInfo: 'ContractAccountInfo'
  },
  contracts: {
    StorageKey: 'ContractStorageKey'
  },
  identity: {
    Judgement: 'IdentityJudgement'
  },
  parachains: {
    Id: 'ParaId'
  },
  society: {
    Judgement: 'SocietyJudgement',
    Vote: 'SocietyVote'
  },
  staking: {
    Compact: 'CompactAssignments',
    Releases: 'ReleasesStaking'
  },
  treasury: {
    Proposal: 'TreasuryProposal'
  }
};

export default typesModules;
