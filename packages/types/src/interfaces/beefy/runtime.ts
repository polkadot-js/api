// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  BeefyApi: [
    {
      methods: {
        validator_set: {
          description: 'Return the current active BEEFY validator set',
          params: [],
          type: 'Option<ValidatorSet>'
        }
      },
      version: 1
    }
  ],
  BeefyMmrApi: [
    {
      methods: {
        authority_set_proof: {
          description: 'Return the currently active BEEFY authority set proof.',
          params: [],
          type: 'BeefyAuthoritySet'
        },
        next_authority_set_proof: {
          description: 'Return the next/queued BEEFY authority set proof.',
          params: [],
          type: 'BeefyNextAuthoritySet'
        }
      },
      version: 1
    }
  ]
};
