// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise } from '@polkadot/api';
import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types';
import type { DeriveSocietyMember } from '@polkadot/api-derive/types';

describe('society derive', (): void => {
  const registry = new TypeRegistry();
  const provider = new MockProvider(registry);

  it('members lookup should return a Promise', async (): Promise<void> => {
    const api = await ApiPromise.create({ provider, registry, throwOnConnect: true });

    expect(api.derive.society.members()).toBeInstanceOf(Promise<DeriveSocietyMember[]>);

    await api.disconnect();
    await provider.disconnect();
  });
});
