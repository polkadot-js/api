// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionCall, DefinitionsCall } from '../../types/index.js';

const MMR_V2: Record<string, DefinitionCall> = {
  generate_proof: {
    description: 'Generate MMR proof for the given block numbers.',
    params: [
      {
        name: 'blockNumbers',
        type: 'Vec<BlockNumber>'
      },
      {
        name: 'bestKnownBlockNumber',
        type: 'Option<BlockNumber>'
      }
    ],
    type: 'Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>'
  },
  mmr_leaf_count: {
    description: 'Return the number of MMR blocks in the chain.',
    params: [],
    type: 'Result<U64, MmrError>'
  },
  mmr_root: {
    description: 'Return the on-chain MMR root hash.',
    params: [],
    type: 'Result<Hash, MmrError>'
  },
  verify_proof: {
    description: 'Verify MMR proof against on-chain MMR.',
    params: [
      {
        name: 'leaves',
        type: 'Vec<MmrEncodableOpaqueLeaf>'
      },
      {
        name: 'proof',
        type: 'MmrBatchProof'
      }
    ],
    type: 'Result<(), MmrError>'
  },
  verify_proof_stateless: {
    description: 'Verify MMR proof against given root hash.',
    params: [
      {
        name: 'root',
        type: 'Hash'
      },
      {
        name: 'leaves',
        type: 'Vec<MmrEncodableOpaqueLeaf>'
      },
      {
        name: 'proof',
        type: 'MmrBatchProof'
      }
    ],
    type: 'Result<(), MmrError>'
  }
};

const MMR_V1: Record<string, DefinitionCall> = {
  generate_batch_proof: {
    description: 'Generate MMR proof for a series of leaves under given indices.',
    params: [
      {
        name: 'leafIndices',
        type: 'Vec<MmrLeafIndex>'
      }
    ],
    type: 'Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>'
  },
  generate_proof: {
    description: 'Generate MMR proof for a leaf under given index.',
    params: [
      {
        name: 'leafIndex',
        type: 'MmrLeafIndex'
      }
    ],
    type: 'Result<(MmrEncodableOpaqueLeaf, MmrProof), MmrError>'
  },
  mmr_root: {
    description: 'Return the on-chain MMR root hash.',
    params: [],
    type: 'Result<Hash, MmrError>'
  },
  verify_batch_proof: {
    description: 'Verify MMR proof against on-chain MMR for a batch of leaves.',
    params: [
      {
        name: 'leaves',
        type: 'Vec<MmrEncodableOpaqueLeaf>'
      },
      {
        name: 'proof',
        type: 'MmrBatchProof'
      }
    ],
    type: 'Result<(), MmrError>'
  },
  verify_batch_proof_stateless: {
    description: 'Verify MMR proof against given root hash or a batch of leaves.',
    params: [
      {
        name: 'root',
        type: 'Hash'
      },
      {
        name: 'leaves',
        type: 'Vec<MmrEncodableOpaqueLeaf>'
      },
      {
        name: 'proof',
        type: 'MmrBatchProof'
      }
    ],
    type: 'Result<(), MmrError>'
  },
  verify_proof: {
    description: 'Verify MMR proof against on-chain MMR.',
    params: [
      {
        name: 'leaf',
        type: 'MmrEncodableOpaqueLeaf'
      },
      {
        name: 'proof',
        type: 'MmrProof'
      }
    ],
    type: 'Result<(), MmrError>'
  },
  verify_proof_stateless: {
    description: 'Verify MMR proof against given root hash.',
    params: [
      {
        name: 'root',
        type: 'Hash'
      },
      {
        name: 'leaf',
        type: 'MmrEncodableOpaqueLeaf'
      },
      {
        name: 'proof',
        type: 'MmrProof'
      }
    ],
    type: 'Result<(), MmrError>'
  }
};

export const runtime: DefinitionsCall = {
  MmrApi: [
    {
      methods: MMR_V2,
      version: 2
    },
    {
      methods: MMR_V1,
      version: 1
    }
  ]
};
