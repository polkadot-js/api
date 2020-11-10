// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types/create';
import { isFunction } from '@polkadot/util';

import { RpcCore } from '.';

describe('Api', (): void => {
  const registry = new TypeRegistry();

  it('requires a provider with a send method', (): void => {
    expect(
      () => new RpcCore('234', registry, {} as any)
    ).toThrow(/Expected Provider/);
  });

  it('allows for the definition of user RPCs', (): void => {
    const rpc = new RpcCore('567', registry, new MockProvider(registry), {
      testing: {
        foo: {
          description: 'foo',
          params: [{ name: 'bar', type: 'u32' }],
          type: 'Balance'
        }
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(isFunction((rpc as any).testing.foo)).toBe(true);
    expect(rpc.sections.includes('testing')).toBe(true);
    expect(rpc.mapping.get('testing_foo')).toEqual({
      description: 'foo',
      isSubscription: false,
      jsonrpc: 'testing_foo',
      method: 'foo',
      params: [{
        name: 'bar',
        type: 'u32'
      }],
      section: 'testing',
      type: 'Balance'
    });
  });
});
