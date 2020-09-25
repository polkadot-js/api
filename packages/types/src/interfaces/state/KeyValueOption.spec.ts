// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';

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
