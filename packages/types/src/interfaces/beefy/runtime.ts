// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  BeefyApi: [
    {
      methods: {
        beefy_genesis: {
          description: 'Return the block number where BEEFY consensus is enabled/started',
          params: [],
          type: 'Option<BlockNumber>'
        },
        generate_key_ownership_proof: {
          description: 'Generates a proof of key ownership for the given authority in the given set.',
          params: [
            {
              name: 'setId',
              type: 'ValidatorSetId'
            },
            {
              name: 'authorityId',
              type: 'AuthorityId'
            }
          ],
          type: 'Option<OpaqueKeyOwnershipProof>'
        },
        submit_report_equivocation_unsigned_extrinsic: {
          description: 'Submits an unsigned extrinsic to report an equivocation.',
          params: [
            {
              name: 'equivocationProof',
              type: 'BeefyEquivocationProof'
            },
            {
              name: 'keyOwnerProof',
              type: 'OpaqueKeyOwnershipProof'
            }
          ],
          type: 'Option<Null>'
        },
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
