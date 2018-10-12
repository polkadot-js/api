// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RpcMethodOpt, RpcSection } from './types';

import createMethod from './create/method';
import createParam from './create/param';

// NOTE Order is the same as in Rust

const getHeader: RpcMethodOpt = {
  description: 'Retrieves the header for a specific block',
  params: [
    createParam('hash', 'Hash', { isOptional: true })
  ],
  type: 'Header'
};

const getBlock: RpcMethodOpt = {
  description: 'Get header and body of a relay chain block',
  params: [
    createParam('hash', 'Hash', { isOptional: true })
  ],
  type: 'SignedBlock'
};

const getBlockHash: RpcMethodOpt = {
  description: 'Get the block hash for a specific block',
  params: [
    createParam('blockNumber', 'BlockNumber', { isOptional: true })
  ],
  type: 'Hash'
};

const getHead: RpcMethodOpt = {
  description: 'Retrieves the best headerHash',
  params: [],
  type: 'Hash'
};

const getRuntimeVersion: RpcMethodOpt = {
  description: ' Get the runtime version',
  params: [
    createParam('hash', 'Hash', { isOptional: true })
  ],
  type: 'RuntimeVersion'
};

const newHead: RpcMethodOpt = {
  description: 'Retrieves the best header via subscription',
  subscribe: [
    'chain_subscribeNewHead',
    'chain_unsubscribeNewHead'
  ],
  params: [],
  type: 'Header'
};

const section = 'chain';

/**
 * @summary Methods to retrieve chain data.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Retrieval of chain data',
  section,
  methods: {
    getBlock: createMethod(section, 'getBlock', getBlock),
    getBlockHash: createMethod(section, 'getBlockHash', getBlockHash),
    getHead: createMethod(section, 'getHead', getHead),
    getHeader: createMethod(section, 'getHeader', getHeader),
    getRuntimeVersion: createMethod(section, 'getRuntimeVersion', getRuntimeVersion),
    newHead: createMethod(section, 'newHead', newHead)
  }
} as RpcSection;
