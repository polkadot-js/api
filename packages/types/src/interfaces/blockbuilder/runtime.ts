// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  BlockBuilder: [
    {
      methods: {
        apply_extrinsic: {
          description: 'Apply the given extrinsic.',
          params: [
            {
              name: 'extrinsic',
              type: 'Extrinsic'
            }
          ],
          type: 'ApplyExtrinsicResult'
        },
        check_inherents: {
          description: 'Check that the inherents are valid.',
          params: [
            {
              name: 'block',
              type: 'Block'
            },
            {
              name: 'data',
              type: 'InherentData'
            }
          ],
          type: 'CheckInherentsResult'
        },
        finalize_block: {
          description: 'Finish the current block.',
          params: [],
          type: 'Header'
        },
        inherent_extrinsics: {
          description: 'Generate inherent extrinsics.',
          params: [
            {
              name: 'inherent',
              type: 'InherentData'
            }
          ],
          type: 'Vec<Extrinsic>'
        }
      },
      version: 6
    }
  ]
};
