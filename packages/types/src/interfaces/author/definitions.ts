// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Definitions } from '../../types';

export default {
  rpc: {
    hasKey: {
      description: 'Returns true if the keystore has private keys for the given public key and key type.',
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
      params: [
        {
          name: 'sessionKeys',
          type: 'Bytes'
        }
      ],
      type: 'bool'
    },
    removeExtrinsic: {
      description: 'Remove given extrinsic from the pool and temporarily ban it to prevent reimporting',
      params: [
        {
          name: 'bytesOrHash',
          type: 'Vec<ExtrinsicOrHash>'
        }
      ],
      type: 'Vec<Hash>'
    },
    insertKey: {
      description: 'Insert a key into the keystore.',
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
    rotateKeys: {
      description: 'Generate new session keys and returns the corresponding public keys',
      params: [],
      type: 'Bytes'
    },
    pendingExtrinsics: {
      description: 'Returns all pending extrinsics, potentially grouped by sender',
      params: [],
      type: 'Vec<Extrinsic>'
    },
    submitExtrinsic: {
      isSigned: true,
      description: 'Submit a fully formatted extrinsic for block inclusion',
      params: [
        {
          name: 'extrinsic',
          type: 'Extrinsic'
        }
      ],
      type: 'Hash'
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
    }
  },
  types: {}
} as Definitions;
