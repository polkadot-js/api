// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {
    generateBatchProof: {
      description: 'Generate MMR proof for the given leaf indices.',
      params: [
        {
          name: 'leafIndices',
          type: 'Vec<u64>'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
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
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'MmrLeafBatchProof'
    }
  },
  types: {
    MmrLeafBatchProof: {
      blockHash: 'BlockHash',
      leaves: 'Bytes',
      proof: 'Bytes'
    },
    MmrLeafProof: {
      blockHash: 'BlockHash',
      leaf: 'Bytes',
      proof: 'Bytes'
    }
  }
} as Definitions;
