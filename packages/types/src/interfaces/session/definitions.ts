// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

// The runtime definition of SessionKeys are passed as a Trait to session
// Defined in `node/runtime/src/lib.rs` as follow
//   impl_opaque_keys! {
//     pub struct SessionKeys {
// Here we revert to tuples to keep the interfaces "opaque", as per the use
const keyTypes = {
  // default to Substrate master defaults, 4 keys (polkadot master, 5 keys)
  Keys: 'SessionKeys4',

  // shortcuts for 1, 2, 3, 4, 5 & 6 key tuples
  SessionKeys1: '(AccountId)',
  SessionKeys2: '(AccountId, AccountId)',
  // older substrate master
  SessionKeys3: '(AccountId, AccountId, AccountId)',
  // CC2, Substrate master
  SessionKeys4: '(AccountId, AccountId, AccountId, AccountId)',
  // CC3
  SessionKeys5: '(AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys6: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)'
};

export default {
  rpc: {},
  types: {
    ...keyTypes,
    FullIdentification: 'Exposure',
    IdentificationTuple: '(ValidatorId, FullIdentification)',
    MembershipProof: {
      session: 'SessionIndex',
      trieNodes: 'Vec<Vec<u8>>',
      validatorCount: 'ValidatorCount'
    },
    SessionIndex: 'u32',
    ValidatorCount: 'u32'
  }
} as Definitions;
