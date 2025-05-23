// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '../../create/index.js';

describe('Exposure', (): void => {
  const registry = new TypeRegistry();

  it('properly decodes an Exposure', (): void => {
    expect(
      registry.createType('Exposure', '0x0fd2c5f6bc904d990f94373671da716d04fe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e0f3e8ec04bb6db2b').toHuman()
    ).toEqual({
      others: [{
        value: '12.3449 kUnit',
        who: '5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc'
      }],
      own: '30.8059 kUnit',
      total: '43.1509 kUnit'
    });
  });
});
