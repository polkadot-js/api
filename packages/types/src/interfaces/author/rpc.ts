// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  hasKey: {
    description: 'Returns true if the keystore has private keys for the given public key and key type.',
    isUnsafe: true,
    params: [
      {
        name: 'publicKey',
        type: 'Bytes'
      },
      {
        name: 'keyType',
        type: 'Text'
      }
    ],
    type: 'bool'
  },
  hasSessionKeys: {
    description: 'Returns true if the keystore has private keys for the given session public keys.',
    isUnsafe: true,
    params: [
      {
        name: 'sessionKeys',
        type: 'Bytes'
      }
    ],
    type: 'bool'
  },
  insertKey: {
    description: 'Insert a key into the keystore.',
    isUnsafe: true,
    params: [
      {
        name: 'keyType',
        type: 'Text'
      },
      {
        name: 'suri',
        type: 'Text'
      },
      {
        name: 'publicKey',
        type: 'Bytes'
      }
    ],
    type: 'Bytes'
  },
  pendingExtrinsics: {
    description: 'Returns all pending extrinsics, potentially grouped by sender',
    params: [],
    type: 'Vec<Extrinsic>'
  },
  removeExtrinsic: {
    description: 'Remove given extrinsic from the pool and temporarily ban it to prevent reimporting',
    isUnsafe: true,
    params: [
      {
        name: 'bytesOrHash',
        type: 'Vec<ExtrinsicOrHash>'
      }
    ],
    type: 'Vec<Hash>'
  },
  rotateKeys: {
    description: 'Generate new session keys and returns the corresponding public keys',
    isUnsafe: true,
    params: [],
    type: 'Bytes'
  },
  submitAndWatchExtrinsic: {
    description: 'Submit and subscribe to watch an extrinsic until unsubscribed',
    isSigned: true,
    params: [
      {
        name: 'extrinsic',
        type: 'Extrinsic'
      }
    ],
    pubsub: [
      'extrinsicUpdate',
      'submitAndWatchExtrinsic',
      'unwatchExtrinsic'
    ],
    type: 'ExtrinsicStatus'
  },
  submitExtrinsic: {
    description: 'Submit a fully formatted extrinsic for block inclusion',
    isSigned: true,
    params: [
      {
        name: 'extrinsic',
        type: 'Extrinsic'
      }
    ],
    type: 'Hash'
  }
};
