// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';
import createParam from './create/param';

// NOTE Order is the same as in Rust

const getHeader: RpcMethodOpt = {
  description: 'Retrieves the header for a specific block',
  params: [
    createParam('hash', 'BlockHash', { isOptional: true })
  ],
  type: 'Header'
};

const getBlock: RpcMethodOpt = {
  description: 'Get header and body of a relay chain block',
  params: [
    createParam('hash', 'BlockHash', { isOptional: true })
  ],
  type: 'SignedBlock'
};

const getBlockHash: RpcMethodOpt = {
  description: 'Get the block hash for a specific block',
  params: [
    createParam('blockNumber', 'BlockNumber', { isOptional: true })
  ],
  type: 'BlockHash'
};

const getFinalizedHead: RpcMethodOpt = {
  description: 'Get hash of the last finalized block in the canon chain',
  params: [],
  type: 'BlockHash'
};

const subscribeNewHeads: RpcMethodOpt = {
  description: 'Retrieves the best header via subscription',
  params: [],
  // NOTE These still has the aliassed version, compatible with 1.x
  pubsub: [
    'newHead',
    'subscribeNewHead',
    'unsubscribeNewHead'
  ],
  type: 'Header'
};

const subscribeFinalizedHeads: RpcMethodOpt = {
  description: 'Retrieves the best finalized header via subscription',
  params: [],
  pubsub: [
    'finalizedHead',
    'subscribeFinalizedHeads',
    'unsubscribeFinalizedHeads'
  ],
  type: 'Header'
};

const subscribeAllHeads: RpcMethodOpt = {
  description: 'Retrieves the newest header via subscription',
  params: [],
  pubsub: [
    'allHead',
    'subscribeAllHeads',
    'unsubscribeAllHeads'
  ],
  type: 'Header'
};

const section = 'chain';

/**
 * @summary Calls to retrieve chain data.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Retrieval of chain data',
  section,
  methods: {
    getBlock: createMethod(section, 'getBlock', getBlock),
    getBlockHash: createMethod(section, 'getBlockHash', getBlockHash),
    getFinalizedHead: createMethod(section, 'getFinalizedHead', getFinalizedHead),
    getHeader: createMethod(section, 'getHeader', getHeader),
    subscribeFinalizedHeads: createMethod(section, 'subscribeFinalizedHeads', subscribeFinalizedHeads),
    subscribeNewHeads: createMethod(section, 'subscribeNewHeads', subscribeNewHeads),
    subscribeAllHeads: createMethod(section, 'subscribeAllHeads', subscribeAllHeads)
  }
};
