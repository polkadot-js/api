// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './Base';

describe('Base', () => {
  it('has the contructor value on raw', () => {
    expect(new Base('foo-bar').raw).toEqual('foo-bar');
  });

  ['byteLength', 'fromJSON', 'fromU8a', 'toJSON', 'toString', 'toU8a'].forEach((method) => {
    it(`has abstract (?) impl for ${method}`, () => {
      expect(
        () => new Base()[method]()
      ).toThrow(/unimplemented/);
    });
  });
});
