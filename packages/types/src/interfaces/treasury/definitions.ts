// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    OpenTipFinder: '(AccountId, Balance)',
    OpenTipTip: '(AccountId, Balance)',
    OpenTip: {
      reason: 'Hash',
      who: 'AccountId',
      finder: 'Option<OpenTipFinder>',
      closes: 'Option<BlockNumber>',
      tips: 'Vec<OpenTipTip>'
    },
    TreasuryProposal: {
      proposer: 'AccountId',
      value: 'Balance',
      beneficiary: 'AccountId',
      bond: 'Balance'
    }
  }
} as Definitions;
