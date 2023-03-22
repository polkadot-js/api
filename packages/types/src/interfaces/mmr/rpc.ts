// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  root: {
    description: 'Get the MMR root hash for the current best block.',
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'MmrHash'
  },

  generateProof: {
    description: 'Generate MMR proof for the given block numbers.',
    params: [
      {
        name: 'blockNumbers',
        type: 'Vec<u64>'
      },
      {
        isOptional: true,
        name: 'bestKnownBlockNumber',
        type: 'u64'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'MmrLeafBatchProof'
  },

  verifyProof: {
    description: 'Verify an MMR proof',
    params: [
      {
        name: 'proof',
        type: 'MmrLeafBatchProof'
      },
    ],
    type: 'bool'
  },

  verifyProofStateless: {
    description: 'Verify an MMR proof statelessly given an mmr_root',
    params: [
      {
        name: 'root',
        type: 'MmrHash'
      },
      {
        name: 'proof',
        type: 'MmrLeafBatchProof'
      },
    ],
    type: 'bool'
  },
};
