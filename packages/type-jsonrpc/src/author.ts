// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';
import createParam from './create/param';

const removeExtrinsic: RpcMethodOpt = {
  description: 'Remove given extrinsic from the pool and temporarily ban it to prevent reimporting',
  params: [
    createParam('bytesOrHash', 'Vec<ExtrinsicOrHash>')
  ],
  type: 'Vec<Hash>'
};

const insertKey: RpcMethodOpt = {
  description: 'Insert a key into the keystore.',
  params: [
    createParam('keyType', 'Text'),
    createParam('suri', 'Text'),
    createParam('publicKey', 'Bytes')
  ],
  type: 'Bytes'
};

const rotateKeys: RpcMethodOpt = {
  description: 'Generate new session keys and returns the corresponding public keys',
  params: [],
  type: 'Bytes'
};

const pendingExtrinsics: RpcMethodOpt = {
  description: 'Returns all pending extrinsics, potentially grouped by sender',
  params: [],
  type: 'Vec<Extrinsic>'
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
  description: 'Submit and subscribe to watch an extrinsic until unsubscribed',
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
 * @summary Calls to work with authors & contributors.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Authoring of network items',
  section,
  methods: {
    insertKey: createMethod(section, 'insertKey', insertKey),
    removeExtrinsic: createMethod(section, 'removeExtrinsic', removeExtrinsic),
    rotateKeys: createMethod(section, 'rotateKeys', rotateKeys),
    pendingExtrinsics: createMethod(section, 'pendingExtrinsics', pendingExtrinsics),
    submitExtrinsic: createMethod(section, 'submitExtrinsic', submitExtrinsic),
    submitAndWatchExtrinsic: createMethod(section, 'submitAndWatchExtrinsic', submitAndWatchExtrinsic)
  }
};
