// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    getHeader: {
      alias: ['chain_getHead'],
      description: 'Retrieves the header for a specific block',
      params: [
        {
          name: 'hash',
          type: 'BlockHash',
          isCached: true,
          isOptional: true
        }
      ],
      type: 'Header'
    },
    getBlock: {
      description: 'Get header and body of a relay chain block',
      params: [
        {
          name: 'hash',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'SignedBlock'
    },
    getBlockHash: {
      description: 'Get the block hash for a specific block',
      params: [
        {
          name: 'blockNumber',
          type: 'BlockNumber',
          isOptional: true
        }
      ],
      type: 'BlockHash'
    },
    getFinalizedHead: {
      alias: ['chain_getFinalisedHead'],
      description: 'Get hash of the last finalized block in the canon chain',
      params: [],
      type: 'BlockHash'
    },
    subscribeNewHeads: {
      alias: ['chain_unsubscribeNewHeads', 'subscribe_newHead', 'unsubscribe_newHead'],
      description: 'Retrieves the best header via subscription',
      params: [],
      // NOTE These still has the aliassed version, compatible with 1.x
      pubsub: [
        'newHead',
        'subscribeNewHead',
        'unsubscribeNewHead'
      ],
      type: 'Header'
    },
    subscribeFinalizedHeads: {
      alias: ['chain_subscribeFinalisedHeads', 'chain_unsubscribeFinalisedHeads'],
      description: 'Retrieves the best finalized header via subscription',
      params: [],
      pubsub: [
        'finalizedHead',
        'subscribeFinalizedHeads',
        'unsubscribeFinalizedHeads'
      ],
      type: 'Header'
    },
    subscribeAllHeads: {
      description: 'Retrieves the newest header via subscription',
      params: [],
      pubsub: [
        'allHead',
        'subscribeAllHeads',
        'unsubscribeAllHeads'
      ],
      type: 'Header'
    }
  },
  types: {
    BlockHash: 'Hash'
  }
} as Definitions;
