// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BftAuthoritySignature, BftHashSignature } from './Bft';

describe('BftAuthoritySignature', (): void => {
  const sig = new BftAuthoritySignature([
    '0x12344321',
    '0x567890098765'
  ]);

  it('has the correct authorityId', (): void => {
    expect(sig.authorityId.toHex()).toEqual('0x1234432100000000000000000000000000000000000000000000000000000000');
  });

  it('has the correct signature', (): void => {
    expect(sig.signature.toHex()).toEqual('0x56789009876500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
  });
});

describe('BftHashSignature', (): void => {
  const sig = new BftHashSignature([
    '0x12344321',
    '0x567890098765'
  ]);

  it('has the correct hash', (): void => {
    expect(sig.hash.toHex()).toEqual('0x1234432100000000000000000000000000000000000000000000000000000000');
  });

  it('has the correct signature', (): void => {
    expect(sig.signature.toHex()).toEqual('0x56789009876500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
  });
});
