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
        PreEnding: 'AuctionIndex',
        Ending: 'BlockNumber'
      }
    },
    DeployData: {
      codeHash: 'Hash',
      codeSize: 'u32',
      initialHeadData: 'HeadData'
    },
    FundInfo: {
      parachain: 'Option<ParaId>',
      owner: 'AccountId',
      deposit: 'Balance',
      raised: 'Balance',
      end: 'BlockNumber',
      cap: 'Balance',
      lastContribution: 'LastContribution',
      firstSlot: 'BlockNumber',
      lastSlot: 'BlockNumber',
      deployData: 'Option<DeployData>'
    }
  }
} as Definitions;
