// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    FundIndex: 'u32',
    LastContribution: {
      _enum: {
        Never: 'Null',
        PreEnding: 'u32',
        Ending: 'BlockNumber'
      }
    },
    FundInfo: {
      retiring: 'bool',
      depositor: 'AccountId',
      verifier: 'Option<MultiSigner>',
      deposit: 'Balance',
      raised: 'Balance',
      end: 'BlockNumber',
      cap: 'Balance',
      lastContribution: 'LastContribution',
      firstSlot: 'LeasePeriod',
      lastSlot: 'LeasePeriod',
      trieIndex: 'TrieIndex'
    },
    TrieIndex: 'u32'
  }
} as Definitions;
