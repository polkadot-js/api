// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
  getBlockStats: {
    description: 'Reexecute the specified `block_hash` and gather statistics while doing so',
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
