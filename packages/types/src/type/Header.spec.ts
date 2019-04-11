// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import Header from './Header';
import json1 from '../json/Header.001.json';
import json2 from '../json/Header.002.json';

describe('Header', () => {
  it('decodes an actual JSON response', () => {
    const header = new Header(json1.result);

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

  it('creates a valid hash (incl. digest & compact)', () => {
    const header = new Header(json2.result);

    expect(
      header.hash.toHex()
    ).toEqual('0x63ccfdc044d3ff4c915ad01c0d57d2ff807f4eb7d60cd41584917363bc83a99f');
    expect(
      header.blockNumber.eq(new BN(2918))
    ).toBe(true);
  });
});
