// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    BabeWeight: 'u64',
    SlotNumber: 'u64',
    RawBabePreDigest: {
      slotNumber: 'SlotNumber',
      authorityIndex: 'u32', // AuthorityIndex (also in aura, not same size there)
      vrfOutput: 'H256', // should be '[u8; 32]' (generator support lacking here)
      vrfProof: 'H256' // should be '[u8; 32]'
    }
  }
};
