// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringUpperFirst } from '.';

describe('stringUpperFirst', () => {
  it("uppers the first letter if it's a capital letter", () => {
    expect(
      stringUpperFirst('ABC')
    ).toBe('ABC');
  });

  it("uppers the first letter if it's a lowercase letter", () => {
    expect(
      stringUpperFirst('abc')
    ).toBe('Abc');
  });

  it('returns undefined as empty', () => {
    expect(
      stringUpperFirst()
    ).toBe('');
  });

  it('returns null as empty', () => {
    expect(
      stringUpperFirst(null)
    ).toBe('');
  });
});
