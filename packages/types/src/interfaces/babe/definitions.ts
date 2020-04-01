// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    epochAuthorship: {
      description: 'Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore',
      params: [],
      type: 'HashMap<AuthorityId, EpochAuthorship>'
    }
  },
  types: {
    BabeAuthorityWeight: 'u64',
    BabeBlockWeight: 'u32',
    MaybeVrf: 'Option<VrfData>',
    // TODO Remove as soon as merged and metadata static updated
    BabeWeight: 'u64',
    EpochAuthorship: {
      primary: 'Vec<u64>',
      secondary: 'Vec<u64>'
    },
    Randomness: 'Hash',
    RawBabePreDigest: {
      _enum: {
        Phantom: 'Null', // index starts at 1... empty slot at 0
        Primary: 'RawBabePreDigestPrimary',
        Secondary: 'RawBabePreDigestSecondary'
      }
    },
    RawBabePreDigestPrimary: {
      authorityIndex: 'u32', // AuthorityIndex (also in aura)
      slotNumber: 'SlotNumber',
      vrfOutput: 'VrfData',
      vrfProof: 'VrfProof'
    },
    RawBabePreDigestSecondary: {
      authorityIndex: 'u32', // AuthorityIndex (also in aura)
      slotNumber: 'SlotNumber'
    },
    RawBabePreDigestTo159: {
      _enum: {
        Primary: 'RawBabePreDigestPrimaryTo159',
        Secondary: 'RawBabePreDigestSecondaryTo159'
      }
    },
    RawBabePreDigestPrimaryTo159: {
      authorityIndex: 'u32',
      slotNumber: 'SlotNumber',
      weight: 'BabeBlockWeight',
      vrfOutput: 'VrfData',
      vrfProof: 'VrfProof'
    },
    RawBabePreDigestSecondaryTo159: {
      authorityIndex: 'u32',
      slotNumber: 'SlotNumber',
      weight: 'BabeBlockWeight'
    },
    // a cross old/new compatible version of the digest, that is _only_ useful
    // for partial parsing and extraction of the author. This assumes that all
    // entries has the authorityIndex in the first position - and that it is all
    // we are interested in
    RawBabePreDigestCompat: {
      _enum: {
        Zero: 'u32',
        One: 'u32',
        Two: 'u32'
      }
    },
    SlotNumber: 'u64',
    VrfData: '[u8; 32]',
    VrfProof: '[u8; 64]'
  }
} as Definitions;
