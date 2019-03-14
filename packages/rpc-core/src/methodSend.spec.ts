// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Api from '.';

describe('methodSend', () => {
  let api: Api;
  let methods: any;
  let provider: any;

  beforeEach(() => {
    methods = {
      blah: {
        method: 'blah',
        params: [
          { name: 'foo', type: 'Bytes' }
        ],
        section: 'test',
        type: 'Bytes'
      },
      bleh: {
        method: 'bleh',
        params: [],
        section: 'test',
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
    // @ts-ignore private method
    const method = api.createMethodSend(methods.blah);

    return method().catch((error) => {
      expect(error.message).toMatch(/blah \(foo: Bytes\): Bytes/);
    });
  });

  it('checks for mismatched parameters', () => {
    // @ts-ignore private method
    const method = api.createMethodSend(methods.bleh);

    return method(1).catch((error) => {
      expect(error.message).toMatch(/parameters, 1 found instead/);
    });
  });

  it('calls the provider with the correct parameters', () => {
    // @ts-ignore private method
    const method = api.createMethodSend(methods.blah);

    // Args are length-prefixed, because it's a Bytes
    return method(new Uint8Array([2 << 2, 0x12, 0x34])).then(() => {
      expect(provider.send).toHaveBeenCalledWith('test_blah', ['0x1234']);
    });
  });
});
