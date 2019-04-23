// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToHex } from '@polkadot/util';
import { Metadata } from '@polkadot/types';
import json from '@polkadot/types/Metadata/v0/static';

import fromMetadata from './fromMetadata';

// Use the pre-generated metadata
const metadata = new Metadata(json);
const newStorage = fromMetadata(metadata);

describe('fromMetadata', () => {
  it('should throw if the storage function expects an argument', () => {
    expect(() => newStorage.balances.freeBalance()).toThrowError(/expects one argument/);
  });

  it('should return a value if the storage function does not expect an argument', () => {
    expect(() => newStorage.timestamp.now()).not.toThrow();
  });

  it('should return the correct length-prefixed storage key', () => {
    expect(
      u8aToHex(
        newStorage.balances.freeBalance('5DkQbYAExs3M2sZgT1Ec3mKfZnAQCL4Dt9beTCknkCUn5jzo')
      )
    ).toEqual(
      '0x404af2c53fce3ec33c6ccccf22e926f1a7'
    );
  });
});
