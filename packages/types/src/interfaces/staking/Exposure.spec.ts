
// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../../create';

describe('Exposure', (): void => {
  const registry = new TypeRegistry();

  it('properly decodes an Exposure', (): void => {
    expect(
      registry.createType('Exposure', '0x0fd2c5f6bc904d990f94373671da716d04fe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e0f3e8ec04bb6db2b').toHuman()
    ).toEqual({
      others: [{
        value: '12.344k Unit',
        who: '5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc'
      }],
      own: '30.805k Unit',
      total: '43.150k Unit'
    });
  });
});
