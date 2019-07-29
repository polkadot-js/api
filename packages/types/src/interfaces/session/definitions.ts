// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    SessionIndex: 'u32',
    // node/runtime/src/lib.rs, impl_opaque_keys
    Keys: {
      ed25519: 'AccountId', // Grandpa, aka GrandpaId
      sr25519: 'AccountId' // Babe, aka BabeId
    }
  }
};
