// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MethodOpt, Section, SectionMethods } from './types';

import createMethod from './create/method';
import createParam from './create/param';

const getBlock: MethodOpt = {
  description: 'Get header and body of a relay chain block',
  params: [
    createParam('hash', 'Hash')
  ],
  type: 'SignedBlock'
};

const getBlockHash: MethodOpt = {
  description: 'Get the block hash for a specific block',
  params: [
    createParam('blockNumber', 'BlockNumber', { isOptional: true })
  ],
  type: 'Hash'
};

const getHead: MethodOpt = {
  description: 'Retrieves the best headerHash',
  params: [],
  type: 'Hash'
};

const getHeader: MethodOpt = {
  description: 'Retrieves the header for a specific block',
  params: [
    createParam('hash', 'Hash')
  ],
  type: 'Header'
};

const getRuntimeVersion: MethodOpt = {
  description: ' Get the runtime version',
  params: [],
  type: 'RuntimeVersion'
};

const getRuntimeVersionAt: MethodOpt = {
  description: ' Get the runtime version at a specific block',
  params: [
    createParam('hash', 'Hash')
  ],
  type: 'RuntimeVersion'
};

const newHead: MethodOpt = {
  description: 'Retrieves the best header via subscription',
  subscribe: [
    'chain_subscribeNewHead',
    'chain_unsubscribeNewHead'
  ],
  params: [],
  type: 'Header'
};

const methods: { [index: string]: MethodOpt } = {
  getBlock, getBlockHash, getHead, getHeader, getRuntimeVersion, getRuntimeVersionAt, newHead
};

export type Methods = typeof methods;

/**
 * @summary Methods to retrieve chain data.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Retrieval of chain data',
  name: 'chain',
  methods: Object.keys(methods).reduce((result, key) => {
    result[key] = createMethod('chain', key, methods[key]);

    return result;
  }, {} as SectionMethods<Methods>)
} as Section<Methods>;
