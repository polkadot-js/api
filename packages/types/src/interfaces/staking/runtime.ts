// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  StakingApi: [
    {
      methods: {
        nominations_quota: {
          description: 'Returns the nominations quota for a nominator with a given balance.',
          params: [
            {
              name: 'balance',
              type: 'Balance'
            }
          ],
          type: 'u32'
        }
      },
      version: 1
    }
  ]
};
