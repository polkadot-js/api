// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BftAuthoritySignature, BftHashSignature } from './Bft';

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
