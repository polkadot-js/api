// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    Data: {
      _enum: {
        None: 'Null',
        Raw: 'Bytes',
        BlakeTwo256: 'H256',
        Sha256: 'H256',
        Keccak256: 'H256',
        ShaThree256: 'H256'
      }
    },
    IdentityFields: {
      _set: {
        Display: 0b0000000000000000000000000000000000000000000000000000000000000001,
        Legal: 0b0000000000000000000000000000000000000000000000000000000000000010,
        Web: 0b0000000000000000000000000000000000000000000000000000000000000100,
        Riot: 0b0000000000000000000000000000000000000000000000000000000000001000,
        Email: 0b0000000000000000000000000000000000000000000000000000000000010000,
        PgpFingerprint: 0b0000000000000000000000000000000000000000000000000000000000100000,
        Image: 0b0000000000000000000000000000000000000000000000000000000001000000
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
      image: 'Data'
    },
    Judgement: {
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
    RegistrationJudgement: '(RegistrarIndex, Judgement)',
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
