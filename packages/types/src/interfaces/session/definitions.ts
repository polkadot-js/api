// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { objectSpread } from '@polkadot/util';

import { runtime } from './runtime';

// The runtime definition of SessionKeys are passed as a Trait to session
// Defined in `node/runtime/src/lib.rs` as follow
//   impl_opaque_keys! {
//     pub struct SessionKeys {
// Here we revert to tuples to keep the interfaces "opaque", as per the use
const keyTypes = {
  // key for beefy
  BeefyKey: '[u8; 33]',

  // default to Substrate master defaults, 4 keys (polkadot master, 5 keys)
  Keys: 'SessionKeys4',

  SessionKeys1: '(AccountId)',
  SessionKeys2: '(AccountId, AccountId)',
  SessionKeys3: '(AccountId, AccountId, AccountId)',
  SessionKeys4: '(AccountId, AccountId, AccountId, AccountId)',
  SessionKeys5: '(AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys6: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys6B: '(AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys7: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys7B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys8: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys8B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys9: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys9B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys10: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys10B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)'
};

export default {
  rpc: {},
  runtime,
  types: objectSpread({}, keyTypes, {
    FullIdentification: 'Exposure',
    IdentificationTuple: '(ValidatorId, FullIdentification)',
    MembershipProof: {
      session: 'SessionIndex',
      trieNodes: 'Vec<Bytes>',
      validatorCount: 'ValidatorCount'
    },
    SessionIndex: 'u32',
    ValidatorCount: 'u32'
  })
} as Definitions;
