// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import storage from '@polkadot/storage';
import toU8a from '@polkadot/util/u8a/toU8a';

import encode from './index';

describe('storageKey', () => {
  it.skip('encodes storageKey -> Uint8Array properly', () => {
    expect(
      encode('StorageKey', [
        storage.staking.public.freeBalanceOf,
        '5EhmTa7fL6SdjgKXo9g6hetR6nHnRAmrtisoGFWEESjzECtY'
      ])
    ).toEqual(
      toU8a('0x11cf1094db4db43356b7787c3e59c39f')
    );
  });
});
