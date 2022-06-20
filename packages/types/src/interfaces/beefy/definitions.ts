// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {
    subscribeJustifications: {
      description: 'Returns the block most recently finalized by BEEFY, alongside side its justification.',
      params: [],
      pubsub: [
        'justifications',
        'subscribeJustifications',
        'unsubscribeJustifications'
      ],
      type: 'BeefySignedCommitment'
    },
    getFinalizedHead: {
      description: 'Returns hash of the latest BEEFY finalized block as seen by this client.',
      params: [],
      type: 'H256'
    }
  },
  types: {
    BeefyCommitment: {
      payload: 'BeefyPayload',
      blockNumber: 'BlockNumber',
      validatorSetId: 'ValidatorSetId'
    },
    BeefyId: '[u8; 33]',
    BeefySignedCommitment: {
      commitment: 'BeefyCommitment',
      signatures: 'Vec<Option<EcdsaSignature>>'
    },
    BeefyNextAuthoritySet: {
      id: 'u64',
      len: 'u32',
      root: 'H256'
    },
    BeefyPayload: 'Vec<(BeefyPayloadId, Bytes)>',
    BeefyPayloadId: '[u8;2]',
    MmrRootHash: 'H256',
    ValidatorSetId: 'u64'
  }
} as Definitions;
