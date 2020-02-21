// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    IdentityFields: {
      _set: {
        _bitLength: 64,
        // Mapped here to the least amount of bits visible, in Rust it is preceded by
        // `00000000000000000000000000000000000000000000000000000000' for 64-bits
        Display: 0b00000001,
        Legal: 0b00000010,
        Web: 0b00000100,
        Riot: 0b00001000,
        Email: 0b00010000,
        PgpFingerprint: 0b00100000,
        Image: 0b01000000,
        Twitter: 0b10000000
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
};
