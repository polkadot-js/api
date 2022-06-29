// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
  generateBatchProof: {
    description: 'Generate MMR proof for the given leaf indices.',
    params: [
      {
        name: 'leafIndices',
        type: 'Vec<u64>'
      },
      {
        isHistoric: true,
        isOptional: true,
        name: 'at',
        type: 'BlockHash'
      }
    ],
    type: 'MmrLeafProof'
  },
  generateProof: {
    description: 'Generate MMR proof for given leaf index.',
    params: [
      {
        name: 'leafIndex',
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
  }
};
