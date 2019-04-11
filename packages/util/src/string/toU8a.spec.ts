// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringToU8a } from '..';

describe('stringToU8a', () => {
  it('decodes to an empty string for undefined', () => {
    expect(
      stringToU8a()
    ).toEqual(new Uint8Array([]));
  });

  it('encodes the string correctly', () => {
    expect(
      stringToU8a('Привет, мир!')
    ).toEqual(
      new Uint8Array([208, 159, 209, 128, 208, 184, 208, 178, 208, 181, 209, 130, 44, 32, 208, 188, 208, 184, 209, 128, 33])
    );
  });
});
