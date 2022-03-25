// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types/create';

import { getSimilarTypes } from './derived';

describe('getSimilarTypes', (): void => {
  let registry: TypeRegistry;

  beforeAll((): void => {
    registry = new TypeRegistry();
  });

  it('handles nested Tuples', (): void => {
    expect(getSimilarTypes(registry, {}, '(AccountId, (Balance, u32), u64)', {
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
    })).toEqual([
      'ITuple<[AccountId, ITuple<[Balance, u32]>, u64]>',
      '[AccountId | string | Uint8Array, ITuple<[Balance, u32]> | [Balance | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], u64 | AnyNumber | Uint8Array]'
    ]);
  });
});
