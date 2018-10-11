// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RpcMethodOpt, RpcSection } from './types';

import createMethod from './create/method';
import createParam from './create/param';

const pendingExtrinsics: RpcMethodOpt = {
  description: 'Returns all pending extrinsics, potentially grouped by sender',
  params: [],
  type: 'PendingExtrinsics'
};

const submitExtrinsic: RpcMethodOpt = {
  isSigned: true,
  description: 'Submit a fully formatted extrinsic for block inclusion',
  params: [
    createParam('extrinsic', 'Extrinsic')
  ],
  type: 'Hash'
};

const updateExtrinsic: RpcMethodOpt = {
  description: 'Subscribe and watch an extrinsic until unsubscribed',
  isSigned: true,
  isSubscription: true,
  subscribe: [
    'author_submitAndWatchExtrinsic',
    'author_unwatchExtrinsic'
  ],
  params: [
    createParam('extrinsicUpdate', 'Bytes')
  ],
  type: 'Status'
};

const methods: { [index: string]: MethodOpt } = {
  pendingExtrinsics, submitExtrinsic, updateExtrinsic
};

export type Methods = typeof methods;

/**
 * @summary Methods to work with authors & contributors.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Authoring of network items',
  section,
  methods: {
    pendingExtrinsics: createMethod(section, 'pendingExtrinsics', pendingExtrinsics),
    submitExtrinsic: createMethod(section, 'submitExtrinsic', submitExtrinsic),
    updateExtrinsic: createMethod(section, 'updateExtrinsic', updateExtrinsic)
  }
} as RpcSection;
