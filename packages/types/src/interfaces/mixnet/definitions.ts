// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types/index.js';

import { runtime } from './runtime.js';

export default {
  rpc: {},
  runtime,
  types: {
    Mixnode: {
      externalAddresses: 'Vec<Bytes>',
      kxPublic: '[u8; 32]',
      peerId: '[u8; 32]'
    },
    MixnodesErr: {
      _enum: {
        InsufficientRegistrations: {
          min: 'u32',
          num: 'u32'
        }
      }
    },
    SessionPhase: {
      _enum: ['CoverToCurrent', 'RequestsToCurrent', 'CoverToPrev', 'DisconnectFromPrev']
    },
    SessionStatus: {
      currentIndex: 'u32',
      phase: 'SessionPhase'
    }
  }
} as Definitions;
