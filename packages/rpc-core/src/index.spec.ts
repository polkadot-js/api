// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MockProvider from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types';
import { isFunction } from '@polkadot/util';

import Rpc from '.';

describe('Api', (): void => {
  const registry = new TypeRegistry();

  it('requires a provider with a send method', (): void => {
    expect(
      (): Rpc => new Rpc(registry, {} as any)
    ).toThrow(/Expected Provider/);
  });

  it('creates an instance with all sections', (): void => {
    const rpc = new Rpc(registry, new MockProvider(registry));

    expect(
      Object.keys(rpc).filter((key): boolean => !key.startsWith('_'))
    ).toEqual([
      'provider', 'mapping', 'sections',
      'account', 'author', 'chain', 'contracts', 'payment', 'rpc', 'state', 'system'
    ]);
  });

  it('allows for the definition of user RPCs', (): void => {
    const rpc = new Rpc(registry, new MockProvider(registry), {
      testing: [
        {
          name: 'foo',
          params: [{ name: 'bar', type: 'u32' }],
          type: 'Balance'
        }
      ]
    });

    expect(isFunction((rpc as any).testing.foo)).toBe(true);
    expect(rpc.sections.includes('testing')).toBe(true);
    expect(rpc.mapping.get('testing_foo')).toEqual({
      description: 'User defined',
      isDeprecated: false,
      isHidden: false,
      isOptional: false,
      isSigned: false,
      isSubscription: false,
      method: 'foo',
      params: [{
        isOptional: false,
        name: 'bar',
        type: 'u32'
      }],
      pubsub: ['', '', ''],
      section: 'testing',
      type: 'Balance'
    });
  });
});
