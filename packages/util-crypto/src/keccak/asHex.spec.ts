// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { waitReady } from '@plugnet/wasm-crypto';

import { keccakAsHex } from '.';

const value = 'test value';
const result = '2d07364b5c231c56ce63d49430e085ea3033c750688ba532b24029124c26ca5e';

describe('keccakAsHex', () => {
  beforeEach(async () => {
    await waitReady();
  });

  it('returns a prefixed hex representation', () => {
    expect(
      keccakAsHex(value)
    ).toEqual(`0x${result}`);
  });
});
