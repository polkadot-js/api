// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata } from '@polkadot/types/index';
import json from '@polkadot/types/Metadata/v0/static';

import fromMetadata from './fromMetadata';

// Use the pre-generated metadata
const metadata = new Metadata(json).asV0;
const newStorage = fromMetadata(metadata);

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
});
