// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  // https://github.com/open-web3-stack/open-runtime-module-library/blob/b57f88b39cd547e2fb51727d8bb9bcc64fddf8b5/tokens/rpc/runtime-api/src/lib.rs#L11-L18
  TokensApi: [
    {
      methods: {
        query_existential_deposit: {
          description: 'Query the existential amount for a specific currency',
          params: [
            {
              name: 'currencyId',
              // This is CurrencyId, as per the return value, we are unsure
              // if this is specialized and/or global to the chain or not
              type: 'Raw'
            }
          ],
          // This is Balance - since we don't understand enough about the way
          // in which this is used, we default to u128 here (it certainly could
          // be a specialized type that doesn't map to the on-chain Balance)
          type: 'u128'
        }
      },
      version: 1
    }
  ]
};
