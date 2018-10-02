// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Api from './index';

describe('methodSend', () => {
  let api;
  let methods;
  let provider;

  beforeEach(() => {
    methods = {
      blah: {
        method: 'blah',
        params: [
          { name: 'foo', type: 'Bytes' }
        ],
        type: 'Bytes'
      },
      bleh: {
        method: 'bleh',
        params: [],
        type: 'Bytes'
      }
    };

    provider = {
      send: jest.fn((method, params) => {
        return Promise.resolve(params[0]);
      })
    };

    api = new Api(provider);
  });

  it('wraps errors with the call signature', () => {
    const method = api.createMethodSend('test_blah', methods.blah);

    return method().catch((error) => {
      expect(error.message).toMatch(/blah \(foo: Bytes\): Bytes/);
    });
  });

  it('checks for mismatched parameters', () => {
    const method = api.createMethodSend('test_bleh', methods.bleh);

    return method(1).catch((error) => {
      expect(error.message).toMatch(/parameters, 1 found instead/);
    });
  });

  it('calls the provider with the correct parameters', () => {
    const method = api.createMethodSend('test_blah', methods.blah);

    return method(new Uint8Array([0x12, 0x34])).then(() => {
      expect(provider.send).toHaveBeenCalledWith('test_blah', ['0x1234']);
    });
  });
});
