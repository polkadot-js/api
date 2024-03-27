// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { runtime } from './runtime.js';

export default {
  rpc: {},
  runtime,
  types: {
    SpStatementStoreStatementSource: {
      _enum: ['Chain', 'Network', 'Local']
    },
    // SpStatementStoreStatement: {
    //     proof: 'Option<StatementStoreProof>',
    //     decryptionKey: 'Option<[u8;32]>',
    //     channel: 'Option<[u8;32]>',
    //     priority: 'Option<u32>',
    //     numTopics: 'u8',
    //     topics: '[[u8;32];4]',
    //     data: 'Option<Bytes>'
    //   },
    //   StatementStoreProof: {
    //     _enum: {
    //       Sr25519: {
    //         signature: '[u8;64]',
    //         signer: '[u8;32]',
    //       },
    //       Ed25519: {
    //         signature: '[u8;64]',
    //         signer: '[u8;32]',
    //       },
    //       Secp256k1Ecdsa: {
    //         signature: '[u8;65]',
    //         signer: '[u8;33]',
    //       },
    //       OnChain: {
    //         who: '[u8;32]',
    //         blockHash: '[u8;32]',
    //         eventIndex: 'u64'
    //       }
    //     }
    // },
    SpStatementStoreValidStatement: {
      maxCount: 'u32',
      maxSize: 'u32'
    },
    SpStatementStoreInvalidStatement: {
      _enum: ['BadProof', 'NoProof', 'InternalError']
    }
  }
} as Definitions;
