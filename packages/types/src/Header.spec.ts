// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Header from './Header';
import json from './json/Header.001.json';

describe('Header', () => {
  it('decodes an actual JSON response', () => {
    const header = new Header(json.result);

    expect(
      header.blockNumber.toNumber()
    ).toEqual(0);
    expect(
      header.extrinsicsRoot.toString()
    ).toEqual('0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0');
    expect(
      header.parentHash.toString()
    ).toEqual('0x0000000000000000000000000000000000000000000000000000000000000000');
    expect(
      header.stateRoot.toString()
    ).toEqual('0x294c3470ae3be7555240b9d034ec19c3715ba2c3f20b92441f8cea0cab66ab56');
    expect(
      header.digest.logs.toString()
    ).toEqual('[]');
  });

  it('creates actual valid hash', () => {
    expect(
      new Header({
        digest: {
          logs: []
        },
        extrinsicsRoot: '0xfd068a7f7315e1c5529945ddd80b650abfc1643be9a79f0468673617a7c0af41',
        number: 338571,
        parentHash: '0x20946c40c54af3bf76a93e313d51bdcb14ee9e783cde9565d0f8c0d72727e512',
        stateRoot: '0x6980a37d9297765aed7a67bb0147afa34ec6db387e79c096feb1708294399abd'
      }).hash.toHex()
    ).toEqual('0xfefcdd5287d017f240b816bd6c43cb9f254164adb90350f2d3f3303f604b5a61');
  });
});
