// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

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

const submitAndWatchExtrinsic: RpcMethodOpt = {
  description: 'Subscribe and watch an extrinsic until unsubscribed',
  isSigned: true,
  params: [
    createParam('extrinsic', 'Extrinsic')
  ],
  pubsub: [
    'extrinsicUpdate',
    'submitAndWatchExtrinsic',
    'unwatchExtrinsic'
  ],
  type: 'ExtrinsicStatus'
};

const section = 'author';

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
    submitAndWatchExtrinsic: createMethod(section, 'submitAndWatchExtrinsic', submitAndWatchExtrinsic)
  }
};
