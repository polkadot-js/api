// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata } from '@polkadot/types/index';
import testingPairs from '@polkadot/keyring/testingPairs';
import jsonV0 from '@polkadot/types/Metadata/v0/static';
import jsonV2 from '@polkadot/types/Metadata/v2/static';

import fromMetadata from './fromMetadata';

// Use the pre-generated metadata
const metadata = new Metadata(jsonV0).asV0;
const newStorage = fromMetadata(metadata);
const keyring = testingPairs();

describe('fromMetadata', () => {
  it('should throw if the storage function expects an argument', () => {
    expect(() => newStorage.balances.freeBalance()).toThrowError(/expects one argument/);
  });

  it('should return a value if the storage function does not expect an argument', () => {
    expect(() => newStorage.timestamp.now()).not.toThrow();
  });

  // FIXME check again when we have a valid chain/UI
  it('should return the correct length-prefixed storage key', () => {
    expect(newStorage.balances.freeBalance('5GwPuAgYgP6q58uWTXp4uSg6FwfzQv9HfFZwAFEREUrQjCvy')).toEqual(
      // U8a is length-prefixed
      Uint8Array.from([64, 52, 103, 23, 10, 157, 95, 244, 9, 70, 215, 120, 149, 1, 238, 109, 69])
    );
  });

  describe('v2', () => {
    const metadataV2 = new Metadata(jsonV2).asV0;
    const newStorageV2 = fromMetadata(metadataV2);
    it('should have same hash', () => {
      expect(newStorage.balances.freeBalance(keyring.alice.address())).toEqual(newStorageV2.balances.freeBalance(keyring.alice.address()));
    });
  });
});
