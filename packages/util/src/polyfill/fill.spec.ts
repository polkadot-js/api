// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

describe('Array.fill', () => {
  let arrayFill: any;

  beforeEach(() => {
    arrayFill = Array.prototype.fill;
    Array.prototype.fill = null as any;

    require('./fill');
  });

  afterEach(() => {
    Array.prototype.fill = arrayFill;
  });

  it('uses the polyfills', () => {
    expect([1, 2, 3, 4, 5, 6, 7, 8].fill(5, 3)).toEqual([1, 2, 3, 5, 5, 5, 5, 5]);
  });
});
