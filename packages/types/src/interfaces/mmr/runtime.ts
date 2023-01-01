// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  MmrApi: [
    {
      methods: {
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
      },
      version: 1
    }
  ]
};
