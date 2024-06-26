// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  LocationToAccountApi: [
    {
      methods: {
        convert_location: {
          description: 'Converts `Location` to `AccountId`',
          params: [
            {
              name: 'location',
              type: 'XcmVersionedLocation'
            }
          ],
          type: 'Result<AccountId, Error>'
        }
      },
      version: 1
    }
  ]
};
