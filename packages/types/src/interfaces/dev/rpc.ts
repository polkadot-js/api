// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  getBlockStats: {
    description: 'Reexecute the specified `block_hash` and gather statistics while doing so',
    isUnsafe: true,
    params: [
      {
        isHistoric: true,
        name: 'at',
        type: 'Hash'
      }
    ],
    type: 'Option<BlockStats>'
  }
};
