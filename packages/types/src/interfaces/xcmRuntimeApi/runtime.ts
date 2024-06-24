// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  LocationToAccountApi: [
    {
      methods: {
        convert_location: {
          description: 'Converts `Location` to `Account` with `AccountId` and Ss58 representation',
          params: [
            {
              name: 'location',
              type: 'XcmVersionedLocation'
            },
            {
              name: 'ss58_prefix',
              type: 'Option<u16>'
            }
          ],
          type: 'Result<Account, Error>'
        }
      },
      version: 1
    }
  ]
};
