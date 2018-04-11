// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createMethod = require('./method');

describe('createMethod', () => {
  let methods;
  let provider;

  beforeEach(() => {
    methods = {
      blah: {
        inputs: [
          { name: 'foo', type: 'Bytes' }
        ],
        output: { type: 'Bytes' }
      },
      bleh: {
        inputs: [],
        output: { type: 'Bytes' }
      }
    };

    provider = {
      send: jest.fn((method, params) => {
        return Promise.resolve(params[0]);
      })
    };
  });

  it('wraps errors with the call signature', () => {
    const method = createMethod(provider, 'test_blah', methods.blah);

    return method().catch((error) => {
      expect(error.message).toMatch(/test_blah \(foo: Bytes\): Bytes/);
    });
  });

  it('checks for mismatched parameters', () => {
    const method = createMethod(provider, 'test_bleh', methods.bleh);

    return method(1).catch((error) => {
      expect(error.message).toMatch(/0 params expected, found 1 instead/);
    });
  });

  it('calls the provider with the correct parameters', () => {
    const method = createMethod(provider, 'test_blah', methods.blah);

    return method(new Uint8Array([0x12, 0x34])).then(() => {
      expect(provider.send).toHaveBeenCalledWith('test_blah', ['0x1234']);
    });
  });
});
