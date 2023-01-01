// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { rpc } from './rpc';
import { runtime } from './runtime';

export default {
  rpc,
  runtime,
  types: {
    BeefyAuthoritySet: {
      id: 'u64',
      len: 'u32',
      root: 'H256'
    },
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
    ValidatorSetId: 'u64',
    ValidatorSet: {
      validators: 'Vec<AuthorityId>',
      id: 'ValidatorSetId'
    }
  }
} as Definitions;
