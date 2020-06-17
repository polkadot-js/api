// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DefinitionRpc } from '@polkadot/types/types';

import { TypeRegistry } from '@polkadot/types';

import Rpc from '.';

describe('methodSend', (): void => {
  const registry = new TypeRegistry();
  let rpc: Rpc;
  let methods: Record<string, DefinitionRpc>;
  let provider: any;

  beforeEach((): void => {
    methods = {
      blah: {
        description: 'test',
        params: [
          { name: 'foo', type: 'Bytes' }
        ],
        type: 'Bytes'
      },
      bleh: {
        description: 'test',
        params: [],
        type: 'Bytes'
      }
    };

    provider = {
      send: jest.fn((method, params: any[]): Promise<any> => {
        return Promise.resolve(params[0]);
      })
    };

    rpc = new Rpc(registry, provider);
  });

  it('checks for mismatched parameters', (done): void => {
    // private method
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const method = (rpc as any)._createMethodSend('test', 'bleh', methods.bleh);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    method(1).subscribe(
      (): void => undefined,
      (error: Error): void => {
        expect(error.message).toMatch(/parameters, 1 found instead/);
        done();
      });
  });

  it('calls the provider with the correct parameters', (done): void => {
    // private method
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const method = (rpc as any)._createMethodSend('test', 'blah', methods.blah);

    // Args are length-prefixed, because it's a Bytes
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    method(new Uint8Array([2 << 2, 0x12, 0x34])).subscribe((): void => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(provider.send).toHaveBeenCalledWith('test_blah', ['0x1234']);
      done();
    });
  });
});
