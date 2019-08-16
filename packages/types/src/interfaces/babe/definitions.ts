// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    BabeAuthorityWeight: 'u64',
    BabeBlockWeight: 'u32',
    // TODO Remove as soon as merged and metadata static updated
    BabeWeight: 'u64',
    RawBabePreDigest: {
      _enum: {
        Primary: 'RawBabePreDigestPrimary',
        Secondary: 'RawBabePreDigestSecondary'
      }
    },
    RawBabePreDigestPrimary: {
      authorityIndex: 'u32', // AuthorityIndex (also in aura, not same size there)
      slotNumber: 'SlotNumber',
      weight: 'BabeBlockWeight',
      vrfOutput: 'H256', // should be '[u8; 32]' (generator support lacking here)
      vrfProof: 'H256' // should be '[u8; 32]'
    },
    RawBabePreDigestSecondary: {
      authorityIndex: 'u32', // AuthorityIndex (also in aura, not same size there)
      slotNumber: 'SlotNumber',
      weight: 'BabeBlockWeight'
    },
    SlotNumber: 'u64'
  }
};
