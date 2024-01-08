// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  AssetsApi: [
    {
      methods: {
        account_balances: {
          description: 'Return the current set of authorities.',
          params: [
            {
              name: 'account',
              type: 'AccountId'
            }
          ],
          type: 'Vec<(u32, TAssetBalance)>'
        }
      },
      version: 1
    }
  ]
};
