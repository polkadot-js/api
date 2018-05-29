// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createMethod = require('./methodSend');

describe('methodCall', () => {
  let methods;
  let provider;

  beforeEach(() => {
    methods = {
      blah: {
        name: 'blah',
        params: [
          { name: 'foo', type: 'Bytes' }
        ],
        type: 'Bytes'
      },
      bleh: {
        name: 'bleh',
        params: [],
        type: 'Bytes'
      }
    };

    provider = {
      send: jest.fn((method, params) => {
        return Promise.resolve(params[0]);
      })
    };
  });

  it('wraps errors with the call signature', () => {
    const method = createMethod(provider, 'test_blah', 'blah', methods.blah);

    return method().catch((error) => {
      expect(error.message).toMatch(/blah \(foo: Bytes\): Bytes/);
    });
  });

  it('checks for mismatched parameters', () => {
    const method = createMethod(provider, 'test_bleh', 'bleh', methods.bleh);

    return method(1).catch((error) => {
      expect(error.message).toMatch(/no params expected, found 1 instead/);
    });
  });

  it('calls the provider with the correct parameters', () => {
    const method = createMethod(provider, 'test_blah', 'blah', methods.blah);

    return method(new Uint8Array([0x12, 0x34])).then(() => {
      expect(provider.send).toHaveBeenCalledWith('test_blah', ['0x1234']);
    });
  });
});
