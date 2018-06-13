// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const params = require('./params');

describe('params', () => {
  let methods;

  beforeEach(() => {
    methods = {
      blah: {
        params: [
          { name: 'foo', type: 'Bytes' }
        ],
        type: 'Bytes'
      },
      bleh: {
        params: [
          { name: 'foo', type: 'Bytes', isOptional: true }
        ],
        type: 'Bytes'
      }
    };
  });

  it('check against params', () => {
    expect(
      () => params(methods.blah.params, [])
    ).toThrow(/params expected/);
  });

  it('check against params (required)', () => {
    expect(
      params(methods.bleh.params, [])
    ).toBeDefined();
  });
});
