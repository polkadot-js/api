// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import xxhash64AsValue from './asValue';

describe('xxhash64AsValue', () => {
  it('creates the correct output (string input)', () => {
    expect(
      xxhash64AsValue('abcd', 0xabcd).toString(16)
    ).toEqual('e29f70f8b8c96df7');
  });

  it('creates the correct output (Buffer input)', () => {
    expect(
      xxhash64AsValue(Buffer.from([0x61, 0x62, 0x63, 0x64]), 0xabcd).toString(16)
    ).toEqual('e29f70f8b8c96df7');
  });

  it('creates the correct output (Uint8Array input)', () => {
    expect(
      xxhash64AsValue(new Uint8Array([0x61, 0x62, 0x63, 0x64]), 0xabcd).toString(16)
    ).toEqual('e29f70f8b8c96df7');
  });
});
