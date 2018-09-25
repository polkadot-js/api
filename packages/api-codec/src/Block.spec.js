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

  // FIXME check again when we have a valid chain/UI
  it.skip('has a valid block hash', () => {
    expect(
      new Block({
        extrinsics: [
          [255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 139, 165, 170, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        header: {
          digest: {
            logs: []
          },
          extrinsicsRoot: '0x5ce1a2c55efaf371f06fd94672779daf130591a12f7513ae786bea4fa7bd499e',
          number: 1556355,
          parentHash: '0x09223919f63b5ded0c7bf7d953ba22bf30ea8a19e6be4de35f25163b2b268490',
          stateRoot: '0xd45159e04f36955ecb9c73d6ca514ac2d0e3ce00f58588b7c142d36cf7d237ec'
        }
      }).hash.toHex()
    ).toEqual('0xd1b7e2c8f1ba2665d89dba334dcf45caa12e34d22587a09e2d03372366a81d8b');
  });
});
