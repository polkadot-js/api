// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

describe('String padStart', () => {
  let stringStart: (length: number, fill?: string) => string;

  beforeEach(() => {
    stringStart = String.prototype.padStart;

    String.prototype.padStart = null as any;

    require('./padStart');
  });

  afterEach(() => {
    String.prototype.padStart = stringStart;
  });

  it('does padding', () => {
    expect('test'.padStart(8, 'A')).toEqual('AAAAtest');
    expect('test'.padStart(8)).toEqual('    test');
  });
});
