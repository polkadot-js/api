// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    BabeAuthorityWeight: 'u64',
    BabeBlockWeight: 'u32',
    MaybeVrf: 'Option<VrfData>',
    // TODO Remove as soon as merged and metadata static updated
    BabeWeight: 'u64',
    RawBabePreDigest: {
      _enum: {
        Primary: 'RawBabePreDigestPrimary',
        Secondary: 'RawBabePreDigestSecondary'
      }
    },
    RawBabePreDigestPrimary: {
      vrfOutput: 'VrfData',
      vrfProof: 'VrfProof',
      authorityIndex: 'u32', // AuthorityIndex (also in aura)
      slotNumber: 'SlotNumber'
    },
    RawBabePreDigestPrimary0to159: {
      authorityIndex: 'u32', // AuthorityIndex (also in aura)
      slotNumber: 'SlotNumber',
      weight: 'BabeBlockWeight',
      vrfOutput: 'VrfData',
      vrfProof: 'VrfProof'
    },
    RawBabePreDigestSecondary: {
      authorityIndex: 'u32', // AuthorityIndex (also in aura)
      slotNumber: 'SlotNumber'
    },
    RawBabePreDigestSecondary0to159: {
      authorityIndex: 'u32', // AuthorityIndex (also in aura)
      slotNumber: 'SlotNumber',
      weight: 'BabeBlockWeight' // FIXME: Removed in current master, check with/without
    },
    SlotNumber: 'u64',
    VrfData: '[u8; 32]',
    VrfProof: '[u8; 64]'
  }
};
