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
    StatementStoreStatementSource: {
      _enum: ['Chain', 'Network', 'Local']
    },
    StatementStoreValidStatement: {
      maxCount: 'u32',
      maxSize: 'u32'
    },
    StatementStoreInvalidStatement: {
      _enum: ['BadProof', 'NoProof', 'InternalError']
    }
  }
} as Definitions;
