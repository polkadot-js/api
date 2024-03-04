// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  NftsApi: [
    {
      methods: {
        attribute: {
          description: 'An attribute',
          params: [
            {
              name: 'collection',
              type: 'NftCollectionId'
            },
            {
              name: 'item',
              type: 'NftItemId'
            },
            {
              name: 'key',
              type: 'Bytes'
            }
          ],
          type: 'Option<Bytes>'
        },
        collection_attribute: {
          description: 'A collection attribute',
          params: [
            {
              name: 'collection',
              type: 'NftCollectionId'
            },
            {
              name: 'key',
              type: 'Bytes'
            }
          ],
          type: 'Option<Bytes>'
        },
        collection_owner: {
          description: 'A collection owner',
          params: [
            {
              name: 'collection',
              type: 'NftCollectionId'
            }
          ],
          type: 'Option<AccountId>'
        },
        custom_attribute: {
          description: 'A custom attribute',
          params: [
            {
              name: 'account',
              type: 'AccountId'
            },
            {
              name: 'collection',
              type: 'NftCollectionId'
            },
            {
              name: 'item',
              type: 'NftItemId'
            },
            {
              name: 'key',
              type: 'Bytes'
            }
          ],
          type: 'Option<Bytes>'
        },
        owner: {
          description: 'Collection owner',
          params: [
            {
              name: 'collection',
              type: 'NftCollectionId'
            },
            {
              name: 'item',
              type: 'NftItemId'
            }
          ],
          type: 'Option<AccountId>'
        },
        system_attribute: {
          description: 'System attribute',
          params: [
            {
              name: 'collection',
              type: 'NftCollectionId'
            },
            {
              name: 'item',
              type: 'NftItemId'
            },
            {
              name: 'key',
              type: 'Bytes'
            }
          ],
          type: 'Option<Bytes>'
        }
      },
      version: 1
    }
  ]
};
