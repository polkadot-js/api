// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import Header from './Header';
import json1 from '../json/Header.001.json';
import json2 from '../json/Header.002.json';
import json3 from '../json/Header.003.json';
import block00300 from '../json/SignedBlock.003.00.json';
import block00301 from '../json/SignedBlock.003.01.json';

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

  it('parses old-style JSON headers (deprecated)', () => {
    const header = new Header(json2.result);

    expect(
      header.digest.logs
    ).toHaveLength(1);
  });

  it('creates a valid hash (incl. digest & compact)', () => {
    const header = new Header(json3.result);

    expect(
      header.hash.toHex()
    ).toEqual('0x464692ad0e225a74274a7ef411e045f1fc7c2639b5f780c7c18f91f4100f5e54');
    expect(
      header.blockNumber.eq(new BN(1650758))
    ).toBe(true);
  });

  it('calculates correct hash, matching with parentHash', () => {
    const blockHash = new Header(block00300.result.block.header).hash.toHex();

    expect(blockHash).toEqual(block00301.result.block.header.parentHash);
  });
});
