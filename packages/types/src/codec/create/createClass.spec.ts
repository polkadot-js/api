// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../injector';

import { createClass } from '.';

describe('createClass', (): void => {
  it('should memoize from strings', (): void => {
    const a = createClass('BabeWeight');
    const b = createClass('BabeWeight');

    expect(a).toBe(b);
  });

  it('should return equivalents for Bytes & Vec<u8>', (): void => {
    const A = createClass('Vec<u8>');
    const B = createClass('Bytes');

    expect(new A() instanceof B).toBe(true);
  });
});
