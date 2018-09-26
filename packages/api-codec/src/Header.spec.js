// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Header from './Header';
import json from './Header.only.json';

describe('Header', () => {
  it('decodes an actual JSON response', () => {
    const header = new Header();

    header.fromJSON(json);

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

  // FIXME check again when we have a valid chain/UI
  it.skip('creates actual valid hash', () => {
    expect(
      new Header({
        digest: {
          logs: []
        },
        extrinsicsRoot: '0x5ce1a2c55efaf371f06fd94672779daf130591a12f7513ae786bea4fa7bd499e',
        number: 1556355,
        parentHash: '0x09223919f63b5ded0c7bf7d953ba22bf30ea8a19e6be4de35f25163b2b268490',
        stateRoot: '0xd45159e04f36955ecb9c73d6ca514ac2d0e3ce00f58588b7c142d36cf7d237ec'
      }).hash.toHex()
    ).toEqual('0x3a91467e3d298684c2d3ee68362615e9b21fa9e37739c02c25f8075918e1ab11');
  });
});
