// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  AssetConversionApi: [
    {
      methods: {
        get_reserves: {
          description: 'Get pool reserves',
          params: [
            {
              name: 'asset1',
              type: 'MultiAssetId'
            },
            {
              name: 'asset2',
              type: 'MultiAssetId'
            }
          ],
          type: 'Option<(Balance,Balance)>'
        },
        quote_price_exact_tokens_for_tokens: {
          description: 'Quote price: exact tokens for tokens',
          params: [
            {
              name: 'asset1',
              type: 'MultiAssetId'
            },
            {
              name: 'asset2',
              type: 'MultiAssetId'
            },
            {
              name: 'amount',
              type: 'u128'
            },
            {
              name: 'include_fee',
              type: 'bool'
            }
          ],
          type: 'Option<(Balance)>'
        },
        quote_price_tokens_for_exact_tokens: {
          description: 'Quote price: tokens for exact tokens',
          params: [
            {
              name: 'asset1',
              type: 'MultiAssetId'
            },
            {
              name: 'asset2',
              type: 'MultiAssetId'
            },
            {
              name: 'amount',
              type: 'u128'
            },
            {
              name: 'include_fee',
              type: 'bool'
            }
          ],
          type: 'Option<(Balance)>'
        }
      },
      version: 1
    }
  ]
};
