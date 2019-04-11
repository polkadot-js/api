// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a } from '@plugnet/util';

import { randomAsU8a } from '.';

describe('randomAsU8a', () => {
  it('generates a Uint8Array', () => {
    expect(
      isU8a(randomAsU8a())
    ).toEqual(true);
  });

  it('generated results does not match', () => {
    expect(
      randomAsU8a()
    ).not.toEqual(
      randomAsU8a()
    );
  });

  it('generates 32 bytes by default', () => {
    expect(
      randomAsU8a()
    ).toHaveLength(32);
  });

  it('generates with the suuplied length', () => {
    expect(
      randomAsU8a(66)
    ).toHaveLength(66);
  });
});
