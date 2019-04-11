// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

describe('String padEnd', () => {
  let stringEnd: (length: number, fill?: string) => string;

  beforeEach(() => {
    stringEnd = String.prototype.padEnd;

    String.prototype.padEnd = null as any;

    require('./padEnd');
  });

  afterEach(() => {
    String.prototype.padEnd = stringEnd;
  });

  it('does padding', () => {
    expect('test'.padEnd(8, 'A')).toEqual('testAAAA');
    expect('test'.padEnd(8)).toEqual('test    ');
  });
});
