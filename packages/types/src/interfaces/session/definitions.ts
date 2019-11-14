// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// The runtime definition of SessionKeys are passed as a Trait to session
// Defined in `node/runtime/src/lib.rs` as follow
//   impl_opaque_keys! {
//     pub struct SessionKeys {
// Here we revert to tuples to keep the interfaces "opaque", as per the use
const keyTypes = {
  // default to Substrate
  Keys: 'SessionKeysSubstrate',

  // shortcuts for 3, 4 & 5 key tuples
  SessionKeys3: '(AccountId, AccountId, AccountId)',
  SessionKeys4: '(AccountId, AccountId, AccountId, AccountId)',
  SessionKeys5: '(AccountId, AccountId, AccountId, AccountId, AccountId)',

  // For substrate: Grandpa, Babe, ImOnline, AuthorityDiscovery
  SessionKeysSubstrate: 'SessionKeys4',

  // For polkadot: Grandpa, Babe, ImOnline, Parachains, AuthorityDiscovery
  SessionKeysPolkadot: 'SessionKeys5'
};

export default {
  types: {
    ...keyTypes,
    FullIdentification: 'Exposure',
    IdentificationTuple: '(ValidatorId, FullIdentification)',
    SessionIndex: 'u32'
  }
};
