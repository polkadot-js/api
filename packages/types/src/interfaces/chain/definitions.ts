// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Definitions } from '../../types';

export default {
  rpc: {
    getHeader: {
      description: 'Retrieves the header for a specific block',
      params: [
        {
          name: 'hash',
          type: 'BlockHash',
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
      description: 'Get hash of the last finalized block in the canon chain',
      params: [],
      type: 'BlockHash'
    },
    subscribeNewHeads: {
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
  types: {}
} as Definitions;
