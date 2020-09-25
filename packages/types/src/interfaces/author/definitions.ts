// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

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
  types: {
    ExtrinsicOrHash: {
      _enum: {
        Hash: 'Hash',
        Extrinsic: 'Bytes'
      }
    },
    ExtrinsicStatus: {
      _enum: {
        Future: 'Null',
        Ready: 'Null',
        Broadcast: 'Vec<Text>',
        InBlock: 'Hash',
        Retracted: 'Hash',
        FinalityTimeout: 'Hash',
        Finalized: 'Hash',
        Usurped: 'Hash',
        Dropped: 'Null',
        Invalid: 'Null'
      }
    }
  }
} as Definitions;
