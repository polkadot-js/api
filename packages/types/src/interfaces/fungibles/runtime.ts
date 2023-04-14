// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  FungiblesApi: [
    {
      methods: {
        query_account_balances: {
          description: 'Returns the list of all `MultiAsset` that an `AccountId` has',
          params: [
            {
              name: 'account',
              type: 'AccountId'
            }
          ],
          type: 'Result<Vec<XcmV3MultiAsset>, FungiblesAccessError>'
        }
      },
      version: 1
    }
  ]
};
