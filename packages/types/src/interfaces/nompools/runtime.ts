// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  NominationPoolsApi: [
    {
      methods: {
        balance_to_points: {
          description: 'Returns the equivalent points of `new_funds` for a given pool.',
          params: [
            {
              name: 'poolId',
              type: 'NpPoolId'
            },
            {
              name: 'newFunds',
              type: 'Balance'
            }
          ],
          type: 'Balance'
        },
        pending_rewards: {
          description: 'Returns the pending rewards for the given member.',
          params: [
            {
              name: 'member',
              type: 'AccountId'
            }
          ],
          type: 'Balance'
        },
        points_to_balance: {
          description: 'Returns the equivalent balance of `points` for a given pool.',
          params: [
            {
              name: 'poolId',
              type: 'NpPoolId'
            },
            {
              name: 'points',
              type: 'Balance'
            }
          ],
          type: 'Balance'
        }
      },
      version: 1
    }
  ]
};
