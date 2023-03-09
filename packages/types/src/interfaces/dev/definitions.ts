// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { rpc } from './rpc.js';

export default {
  rpc,
  types: {
    BlockStats: {
      witnessLen: 'u64',
      witnessCompactLen: 'u64',
      blockLen: 'u64',
      blockNumExtrinsics: 'u64'
    }
  }
} as Definitions;
