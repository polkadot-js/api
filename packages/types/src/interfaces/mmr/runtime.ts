// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  MmrApi: [
    {
      methods: {
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
            },
          ],
          type: 'Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>'
        },
        root: {
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
        },
      },
      version: 1
    }
  ]
};
