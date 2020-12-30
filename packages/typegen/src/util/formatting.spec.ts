// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { formatType } from './formatting';

describe('formatType', (): void => {
  it('handles nested Tuples', (): void => {
    expect(
      formatType({}, '(AccountId, (Balance, u32), u64)', {
        codecTypes: {},
        definitions: {},
        extrinsicTypes: {},
        genericTypes: {},
        ignoredTypes: [],
        localTypes: {},
        metadataTypes: {},
        primitiveTypes: {},
        typeToModule: {},
        typesTypes: {}
      })
    ).toEqual('ITuple<[AccountId, ITuple<[Balance, u32]>, u64]>');
  });
});
