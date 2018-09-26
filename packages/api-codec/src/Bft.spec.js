// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BftAuthoritySignature, BftHashSignature, Justification } from './Bft';

describe('BftAuthoritySignature', () => {
  const sig = new BftAuthoritySignature({
    authorityId: '0x12344321',
    signature: '0x567890098765'
  });

  it('has the correct authorityId', () => {
    expect(sig.authorityId.toHex()).toEqual('0x12344321');
  });

  it('has the correct signature', () => {
    expect(sig.signature.toHex()).toEqual('0x567890098765');
  });
});

describe('BftHashSignature', () => {
  const sig = new BftHashSignature({
    hash: '0x12344321',
    signature: '0x567890098765'
  });

  it('has the correct hash', () => {
    expect(sig.hash.toHex()).toEqual('0x12344321');
  });

  it('has the correct signature', () => {
    expect(sig.signature.toHex()).toEqual('0x567890098765');
  });
});

describe('Justification', () => {
  const just = new Justification({
    round_number: 32,
    hash: '0xabcd',
    signatures: [
      { authorityId: '0x1234', signature: '0x5678' },
      { authorityId: '0x9876', signature: '0x5432' }
    ]
  });

  it('has the correct hash', () => {
    expect(just.hash.toHex()).toEqual('0xabcd');
  });

  it('has the correct round', () => {
    expect(just.round.toNumber()).toEqual(32);
  });

  it('has the correct signatures', () => {
    const sig = just.signatures.at(1);

    expect(sig.authorityId.toHex()).toEqual('0x9876');
  });
});
