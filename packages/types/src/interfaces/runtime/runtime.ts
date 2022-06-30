// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  Core: [
    {
      methods: {
        execute_block: {
          description: 'Execute the given block.',
          params: [
            {
              name: 'block',
              type: 'Block'
            }
          ],
          type: 'Null'
        },
        initialize_block: {
          description: 'Initialize a block with the given header.',
          params: [
            {
              name: 'header',
              type: 'Header'
            }
          ],
          type: 'Null'
        },
        version: {
          description: 'Returns the version of the runtime.',
          params: [],
          type: 'RuntimeVersion'
        }
      },
      version: 4
    }
  ],
  TryRuntime: [
    {
      methods: {
        execute_block_no_check: {
          description: "Execute the given block, but don't check that its state root matches that of yours.",
          params: [
            {
              name: 'block',
              type: 'Block'
            }
          ],
          type: 'Weight'
        },
        on_runtime_upgrade: {
          description: 'dry-run runtime upgrades, returning the total weight consumed.',
          params: [],
          type: '(Weight, Weight)'
        }
      },
      version: 1
    }
  ]
};
