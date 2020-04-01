// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    IdentityFields: {
      _set: {
        _bitLength: 64,
        // Mapped here to 32 bits, in Rust these are 64-bit values
        Display: 0b00000000_00000000_00000000_0000_0001,
        Legal: 0b00000000_00000000_00000000_0000_0010,
        Web: 0b00000000_00000000_00000000_0000_0100,
        Riot: 0b00000000_00000000_00000000_0000_1000,
        Email: 0b00000000_00000000_00000000_0001_0000,
        PgpFingerprint: 0b00000000_00000000_00000000_0010_0000,
        Image: 0b00000000_00000000_00000000_0100_0000,
        Twitter: 0b00000000_00000000_00000000_1000_0000
      }
    },
    IdentityInfoAdditional: '(Data, Data)',
    IdentityInfo: {
      additional: 'Vec<IdentityInfoAdditional>',
      display: 'Data',
      legal: 'Data',
      web: 'Data',
      riot: 'Data',
      email: 'Data',
      pgpFingerprint: 'Option<H160>',
      image: 'Data',
      twitter: 'Data'
    },
    IdentityJudgement: {
      _enum: {
        Unknown: 'Null',
        FeePaid: 'Balance',
        Reasonable: 'Null',
        KnownGood: 'Null',
        OutOfDate: 'Null',
        LowQuality: 'Null',
        Erroneous: 'Null'
      }
    },
    RegistrationJudgement: '(RegistrarIndex, IdentityJudgement)',
    Registration: {
      judgements: 'Vec<RegistrationJudgement>',
      deposit: 'Balance',
      info: 'IdentityInfo'
    },
    RegistrarIndex: 'u32',
    RegistrarInfo: {
      account: 'AccountId',
      fee: 'Balance',
      fields: 'IdentityFields'
    }
  }
} as Definitions;
