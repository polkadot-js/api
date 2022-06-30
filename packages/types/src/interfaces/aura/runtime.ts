// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  AuraApi: [
    {
      methods: {
        authorities: {
          description: 'Return the current set of authorities.',
          params: [],
          type: 'Vec<AuthorityId>'
        },
        slot_duration: {
          description: 'Returns the slot duration for Aura.',
          params: [],
          type: 'SlotDuration'
        }
      },
      version: 1
    }
  ]
};
