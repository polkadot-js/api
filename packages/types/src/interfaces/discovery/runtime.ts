// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types/index.js';

export const runtime: DefinitionsCall = {
  AuthorityDiscoveryApi: [
    {
      methods: {
        authorities: {
          description: 'Retrieve authority identifiers of the current and next authority set.',
          params: [],
          type: 'Vec<AuthorityId>'
        }
      },
      version: 1
    }
  ]
};
