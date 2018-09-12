// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Header from './Header';

describe('Header', () => {
  const u8a = new Uint8Array([
    // parentHash
    1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5,
    // number
    67, 0, 0, 0, 0, 0, 0, 0,
    // stateRoot
    3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3,
    // extrinsicsRoot
    7, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 66,
    // digest (length, log1, log2)
    2, 0, 0, 0,
    1, 0, 0, 0, 1,
    2, 0, 0, 0, 2, 3
  ]);
  let header;

  beforeEach(() => {
    header = new Header().fromU8a(u8a);

    console.error(header);
  });

  it('decodes properly', () => {
    expect(
      header.toJSON()
    ).toEqual({
      blockNumber: '0x0000000000000043',
      digest: {
        logs: ['0x01', '0x0203']
      },
      extrinsicsRoot: '0x0777000000000000000000000000000000000000000000000000000000000666',
      parentHash: '0x0102030405000000000000000000000000000000000000000000000102030405',
      stateRoot: '0x0302010000000000000000000000000000000000000000000000000000010203'
    });
  });

  it('has the correct total length', () => {
    expect(
      header.byteLength()
    ).toEqual(u8a.length);
  });

  it('encodes properly', () => {
    expect(
      header.toU8a()
    ).toEqual(u8a);
  });
});
