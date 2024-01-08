// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  AccountNonceApi: [
    {
      methods: {
        account_nonce: {
          description: 'The API to query account nonce (aka transaction index)',
          params: [
            {
              name: 'accountId',
              type: 'AccountId'
            }
          ],
          type: 'Index'
        }
      },
      version: 1
    }
  ]
};
