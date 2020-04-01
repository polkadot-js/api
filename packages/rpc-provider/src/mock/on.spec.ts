// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterfaceEmitted } from '../types';

import { TypeRegistry } from '@polkadot/types';

import Mock from './';

describe('on', (): void => {
  const registry = new TypeRegistry();
  let mock: Mock;

  beforeEach((): void => {
    mock = new Mock(registry);
  });

  it('it emits both connected and disconnected events', (done): void => {
    const events: Record<string, boolean> = { connected: false, disconnected: false };

    const handler = (type: ProviderInterfaceEmitted): void => {
      mock.on(type, (): void => {
        events[type] = true;

        if (Object.values(events).filter((value): boolean => value).length === 2) {
          done();
        }
      });
    };

    handler('connected');
    handler('disconnected');
  });
});
