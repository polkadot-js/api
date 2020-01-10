// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType, Metadata, TypeRegistry } from '@polkadot/types';

import json from '../../../Metadata/static';
import fromMetadata from '.';

// Use the pre-generated metadata
const registry = new TypeRegistry();
const metadata = new Metadata(registry, json);
const newExtrinsics = fromMetadata(registry, metadata);

describe('fromMetadata', (): void => {
  it('should throw if an incorrect number of args is supplied', (): void => {
    expect((): any => newExtrinsics.balances.setBalance()).toThrowError(/expects 3 arguments/);
  });

  it('should return a value if the storage function does not expect an argument', (): void => {
    expect((): any => newExtrinsics.balances.setBalance('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF', 2, 3)).not.toThrow();
  });

  it('should return properly-encoded transactions', (): void => {
    expect(
      createType(registry, 'Extrinsic', newExtrinsics.timestamp.set([10101])).toU8a()
    ).toEqual(
      new Uint8Array([
        // length (encoded)
        4 << 2,
        // version, no signature
        1,
        // index
        3, 0,
        // values, Compact<Moment>
        116
      ])
    );
  });
});
