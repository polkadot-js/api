// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@plugnet/keyring/testingPairs';
import { Metadata } from '@plugnet/types';
import json from '@plugnet/types/Metadata/v4/static';
import { u8aToHex } from '@plugnet/util';

import fromMetadata from './';

const keyring = testingPairs({ type: 'ed25519' });
// Use the pre-generated metadata
const metadata = new Metadata(json);
const storage = fromMetadata(metadata);

describe('fromMetadata', () => {
  it('should throw if the storage function expects an argument', () => {
    expect(() => storage.balances.freeBalance()).toThrowError(/expects one argument/);
  });

  it('should return a value if the storage function does not expect an argument', () => {
    expect(() => storage.timestamp.now()).not.toThrow();
  });

  it('should return the correct length-prefixed storage key', () => {
    expect(
      u8aToHex(
        storage.balances.freeBalance(keyring.alice.address())
      )
    ).toEqual(
      '0x807f864e18e3dd8b58386310d2fe0919eef27c6e558564b7f67f22d99d20f587bb'
    );
  });
});
