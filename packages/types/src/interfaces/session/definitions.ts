// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    SessionIndex: 'u32',

    // The runtime definition of SessionKeys are passes as a Trait to session
    // Defined in `node/runtime/src/lib.rs` as follow
    //   impl_opaque_keys! {
    //     pub struct SessionKeys {
    // Here we revert to tuples to keep the interfaces "opaque", as per the use
    Keys: 'SessionKeysSubstrate',
    // For substrate: Grandpa, Babe, ImOnline
    SessionKeysSubstrate: '(AccountId, AccountId, AccountId)',
    // For polkadot: Grandpa, Babe, ImOnline, Parachains
    SessionKeysPolkadot: '(AccountId, AccountId, AccountId, AccountId)'
  }
};
