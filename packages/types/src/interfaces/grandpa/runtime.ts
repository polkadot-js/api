// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  GrandpaApi: [
    {
      methods: {
        current_set_id: {
          description: 'Get current GRANDPA authority set id.',
          params: [],
          type: 'SetId'
        },
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
          type: 'AuthorityList'
        },
        submit_report_equivocation_unsigned_extrinsic: {
          description: 'Submits an unsigned extrinsic to report an equivocation.',
          params: [],
          type: 'Option<Null>'
        }
      },
      version: 3
    }
  ]
};
