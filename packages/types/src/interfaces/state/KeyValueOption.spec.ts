// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import { TypeRegistry } from '../../create/index.js';

describe('KeyValueOption', (): void => {
  const registry = new TypeRegistry();

  it('exposes the properties for key/value', (): void => {
    const [key, value] = registry.createType('KeyValueOption', [
      '0x11223344'
    ]);

    expect(key.toHex()).toEqual('0x11223344');
    expect(value.isNone).toEqual(true);
  });
});
