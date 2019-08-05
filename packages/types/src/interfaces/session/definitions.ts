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
    // FIXME For Polkadot this is probably expanded, i.e. a 4th key would be
    // available here and should be catered for (open question as to how)
    Keys: {
      grandpa: 'AccountId', // aka GrandpaId
      babe: 'AccountId', // aka BabeId
      imOnline: 'AccountId' // aka ImOnlineId
    }
  }
};
