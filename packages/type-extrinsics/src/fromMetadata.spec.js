// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Metadata from '@polkadot/types/Metadata';
import json from '@polkadot/types/Metadata.rpc';

import fromMetadata from './fromMetadata';

// Use the pre-generated metadata
const metadata = new Metadata().fromJSON(json);
const newExtrinsics = fromMetadata({}, metadata);

describe('fromMetadata', () => {
  it('should throw if an incorrect number of args is supplied', () => {
    expect(() => newExtrinsics.balances.setBalance()).toThrowError(/expects 3 arguments/);
  });

  it('should return a value if the storage function does not expect an argument', () => {
    expect(() => newExtrinsics.balances.setBalance('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s', 2, 3)).not.toThrow();
  });

  it('should return the correct storage key', () => {
    expect(newExtrinsics.timestamp.set([10101]).toU8a(true)).toEqual(
      new Uint8Array([
        // index
        3, 0,
        // values
        117, 39, 0, 0, 0, 0, 0, 0
      ])
    );
  });
});
