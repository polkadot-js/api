// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const params = require('./params');

describe('params', () => {
  let methods;

  beforeEach(() => {
    methods = {
      blah: {
        inputs: [
          { name: 'foo', type: 'Bytes' }
        ],
        output: { type: 'Bytes' }
      },
      bleh: {
        inputs: [
          { name: 'foo', type: 'Bytes', isOptional: true }
        ],
        output: { type: 'Bytes' }
      }
    };
  });

  it('check against params', () => {
    expect(
      () => params('test_blah', [], methods.blah.inputs)
    ).toThrow(/params expected/);
  });

  it('check against params (required)', () => {
    expect(
      params('test_bleh', [], methods.bleh.inputs)
    ).toBeDefined();
  });
});
