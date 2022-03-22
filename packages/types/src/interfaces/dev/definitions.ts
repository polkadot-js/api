// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {
    getBlockStats: {
      description: 'Reexecute the specified `block_hash` and gather statistics while doing so',
      params: [
        {
          name: 'at',
          type: 'Hash',
          isHistoric: true
        }
      ],
      type: 'Option<BlockStats>'
    }
  },
  types: {
    BlockStats: {
      witnessLen: 'u64',
      witnessCompactLen: 'u64',
      blockLen: 'u64',
      blockNumExtrinsics: 'u64'
    }
  }
} as Definitions;
