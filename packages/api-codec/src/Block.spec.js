// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';

import Block from './Block';

describe('Block', () => {
  it('decodes a block properly', () => {
    const block = new Block();

    block.fromU8a(hexToU8a(
      '0x' +
      // parent_hash
      '0900000000000000000000000000000000000000000000000000000000000009' +
      // number
      '4300000000000000' +
      // state_root
      '0800000000000000000000000000000000000000000000000000000000000008' +
      // transaction_root
      '0700000000000000000000000000000000000000000000000000000000000007' +
      // digest
      '08' + // 2 << 2
      '0401' +
      '0402' +
      // transactions
      '04' + // 1 << 2
      // 111 bytes in compact encoding
      'bd01' +
      // prefix
      'ff' +
      '0000000000000000000000000000000000000000000000000000000000000000' +
      '00000000' +
      '0300' +
      '7527000000000000' +
      '0000000000000000000000000000000000000000000000000000000000000000' +
      '0000000000000000000000000000000000000000000000000000000000000000'
    ));

    expect(
      block.header.blockNumber.toNumber()
    ).toEqual(67);
    expect(
      block.extrinsics.length
    ).toEqual(1); // eslint-disable-line
    expect(
      block.extrinsics.at(0).length
    ).toEqual(111); // eslint-disable-line
  });
});
