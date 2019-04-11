// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// @flow

import testingPairs from '../testingPairs';
import encode from './encode';

const keyring = testingPairs({ type: 'ed25519' }, false);

describe('encode', () => {
  it('encodes an address to a valid value', () => {
    expect(
      keyring.alice.address()
    ).toEqual('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaQua');
  });

  it('fails when non-valid publicKey provided', () => {
    expect(
      () => encode(
        keyring.alice.publicKey().slice(0, 30)
      )
    ).toThrow(/Expected a valid key/);
  });

  it('encodes a 1-byte address', () => {
    expect(
      encode(
        new Uint8Array([1])
      )
    ).toEqual('F7NZ');
  });

  it('encodes a 1-byte address (with prefix)', () => {
    expect(
      encode(
        new Uint8Array([1]), 68
      )
    ).toEqual('PqtB');
  });

  it('encodes a 2-byte address', () => {
    expect(
      encode(
        new Uint8Array([0, 1]), 68
      )
    ).toEqual('2jpAFn');
  });

  it('encodes a 4-byte address', () => {
    expect(
      encode(
        new Uint8Array([1, 2, 3, 4]), 68
      )
    ).toEqual('as7QnGMf');
  });

  it('enodes a 8-byte address', () => {
    expect(
      encode(
        new Uint8Array([42, 44, 10, 0, 0, 0, 0, 0]), 68
      )
    ).toEqual('4q7qY5RBG7Z4wv');
  });
});
