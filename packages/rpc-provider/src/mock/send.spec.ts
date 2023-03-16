// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types/create';

import { MockProvider } from './index.js';

describe('send', (): void => {
  const registry = new TypeRegistry();
  let mock: MockProvider;

  beforeEach((): void => {
    mock = new MockProvider(registry);
  });

  afterEach(async () => {
    await mock.disconnect();
  });

  it('fails on non-supported methods', (): Promise<any> => {
    return mock
      .send('something_invalid', [])
      .catch((error): void => {
        expect((error as Error).message).toMatch(/Invalid method/);
      });
  });

  it('returns values for mocked requests', (): Promise<void> => {
    return mock
      .send('system_name', [])
      .then((result): void => {
        expect(result).toBe('mockClient');
      });
  });
});
