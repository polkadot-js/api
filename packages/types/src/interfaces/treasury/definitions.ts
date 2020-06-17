// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    OpenTip: {
      reason: 'Hash',
      who: 'AccountId',
      finder: 'Option<OpenTipFinder>',
      closes: 'Option<BlockNumber>',
      tips: 'Vec<OpenTipTip>'
    },
    OpenTipFinder: '(AccountId, Balance)',
    OpenTipTip: '(AccountId, Balance)',
    TreasuryProposal: {
      proposer: 'AccountId',
      value: 'Balance',
      beneficiary: 'AccountId',
      bond: 'Balance'
    }
  }
} as Definitions;
