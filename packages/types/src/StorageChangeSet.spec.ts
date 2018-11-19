// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import StorageChangeSet from './StorageChangeSet';

describe('StorageChangeSet', () => {
  const set = new StorageChangeSet({
    hash: '0x1234',
    changes: [
      { key: '0xab', value: '0xcd' }
    ]
  });

  it('wraps hash', () => {
    expect(
      set.hash.toHex()
    ).toEqual('0x1234');
  });

  it('wraps key/value', () => {
    expect(
      set.changes[0].value.toString()
    ).toEqual('0xcd');
  });
});
