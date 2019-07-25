// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    Justification: 'Bytes',
    KeyTypeId: 'u32',
    LockIdentifier: '[u8; 8]',
    SessionKeys: {
      ed25519: 'AccountId'
    },
    ValidatorId: 'AccountId'
  }
};
