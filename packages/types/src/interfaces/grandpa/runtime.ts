// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall, DefinitionsCallEntry } from '../../types';

import { objectSpread } from '@polkadot/util';

const GRANDPA_V2_V3: DefinitionsCallEntry['methods'] = {
  generate_key_ownership_proof: {
    description: 'Generates a proof of key ownership for the given authority in the given set.',
    params: [
      {
        name: 'setId',
        type: 'SetId'
      },
      {
        name: 'authorityId',
        type: 'AuthorityId'
      }
    ],
    type: 'Option<OpaqueKeyOwnershipProof>'
  },
  grandpa_authorities: {
    description: 'Get the current GRANDPA authorities and weights. This should not change except for when changes are scheduled and the corresponding delay has passed.',
    params: [],
    type: 'AuthorityList'
  },
  submit_report_equivocation_unsigned_extrinsic: {
    description: 'Submits an unsigned extrinsic to report an equivocation.',
    params: [
      {
        name: 'equivocationProof',
        type: 'GrandpaEquivocationProof'
      },
      {
        name: 'keyOwnerProof',
        type: 'OpaqueKeyOwnershipProof'
      }
    ],
    type: 'Option<Null>'
  }
};

export const runtime: DefinitionsCall = {
  GrandpaApi: [
    {
      methods: objectSpread({
        current_set_id: {
          description: 'Get current GRANDPA authority set id.',
          params: [],
          type: 'SetId'
        }
      }, GRANDPA_V2_V3),
      version: 3
    },
    {
      methods: GRANDPA_V2_V3,
      version: 2
    }
  ]
};
