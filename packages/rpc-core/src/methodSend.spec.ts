// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import Rpc from '.';

describe('methodSend', (): void => {
  const registry = new TypeRegistry();
  let rpc: Rpc;
  let methods: any;
  let provider: any;

  beforeEach((): void => {
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
      send: jest.fn((method, params): Promise<any> => {
        return Promise.resolve(params[0]);
      })
    };

    rpc = new Rpc(registry, provider);
  });

  it('wraps errors with the call signature', (done): void => {
    // private access
    const method = (rpc as any).createMethodSend(methods.blah);

    method().subscribe(
      (): void => undefined,
      (error: Error): void => {
        expect(error.message).toMatch(/blah\(foo: Bytes\): Bytes/);
        done();
      }
    );
  });

  it('checks for mismatched parameters', (done): void => {
    // private method
    const method = (rpc as any).createMethodSend(methods.bleh);

    method(1).subscribe(
      (): void => undefined,
      (error: Error): void => {
        expect(error.message).toMatch(/parameters, 1 found instead/);
        done();
      });
  });

  it('calls the provider with the correct parameters', (done): void => {
    // private method
    const method = (rpc as any).createMethodSend(methods.blah);

    // Args are length-prefixed, because it's a Bytes
    method(new Uint8Array([2 << 2, 0x12, 0x34])).subscribe((): void => {
      expect(provider.send).toHaveBeenCalledWith('test_blah', ['0x1234']);
      done();
    });
  });
});
