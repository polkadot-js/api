// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  AuraUnincludedSegmentApi: [
    {
      methods: {
        can_build_upon: {
          description: 'Whether it is legal to extend the chain',
          params: [
            {
              name: 'includedHash',
              type: 'BlockHash'
            },
            {
              name: 'slot',
              type: 'Slot'
            }
          ],
          type: 'bool'
        }
      },
      version: 1
    }
  ],
  CollectCollationInfo: [
    {
      methods: {
        collect_collation_info: {
          description: 'Collect information about a collation.',
          params: [
            {
              name: 'header',
              type: 'Header'
            }
          ],
          type: 'CollationInfo'
        }
      },
      version: 2
    },
    {
      methods: {
        collect_collation_info: {
          description: 'Collect information about a collation.',
          params: [],
          type: 'CollationInfoV1'
        }
      },
      version: 1
    }
  ]
};
