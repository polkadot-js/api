// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '@polkadot/types';

import { formatType } from './formatting';

describe('formatType', (): void => {
  const registry = new TypeRegistry();

  it('handles nested Tuples', (): void => {
    expect(
      formatType(registry, {}, '(AccountId, (Balance, u32), u64)', {
        codecTypes: {},
        definitions: {},
        extrinsicTypes: {},
        genericTypes: {},
        ignoredTypes: [],
        localTypes: {},
        lookupTypes: {},
        metadataTypes: {},
        primitiveTypes: {},
        typeToModule: {},
        typesTypes: {}
      })
    ).toEqual('ITuple<[AccountId, ITuple<[Balance, u32]>, u64]>');
  });
});
