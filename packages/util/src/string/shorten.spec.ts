// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringShorten } from '.';

describe('stringShorten', () => {
  it('returns the value as-is when <= maxLength', () => {
    expect(
      stringShorten('0123456789', 4)
    ).toEqual('0123456789');
  });

  it('returns the shortened value when > maxLength', () => {
    expect(
      stringShorten('0123456789', 3)
    ).toEqual('012..789');
  });

  it('returns undefined as undefined', () => {
    expect(
      stringShorten()
    ).toEqual('undefined');
  });

  it('returns non-string values as strings', () => {
    expect(
      stringShorten(12345678, 2)
    ).toEqual('12..78');
  });
});
