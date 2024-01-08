// Copyright 2017-2024 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types/create';

import { getSimilarTypes } from './derived.js';

describe('getSimilarTypes', (): void => {
  const registry = new TypeRegistry();
  const mockImports = {
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
  };

  it('handles nested Tuples', (): void => {
    expect(getSimilarTypes(registry, {}, '(AccountId, (Balance, u32), u64)', mockImports)).toEqual([
      'ITuple<[AccountId, ITuple<[Balance, u32]>, u64]>',
      '[AccountId | string | Uint8Array, ITuple<[Balance, u32]> | [Balance | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], u64 | AnyNumber | Uint8Array]'
    ]);
  });

  it('handles vectors of slices', (): void => {
    expect(getSimilarTypes(registry, {}, 'Vec<[u8;4]>', mockImports)).toEqual([
      'Vec<U8aFixed>'
    ]);
    expect(getSimilarTypes(registry, {}, 'Vec<[Balance;8]>', mockImports)).toEqual([
      'Vec<Vec<Balance>>'
    ]);
  });

  it('handles structs', (): void => {
    expect(getSimilarTypes(registry, {}, '{ "a": "u8", "b": "Vec<u8>" }', mockImports)).toEqual([
      `{
    readonly a: u8;
    readonly b: Bytes;
  } & Struct`, '{ a?: any; b?: any }', 'string', 'Uint8Array'
    ]);
  });
  it('handles vectors of structs', (): void => {
    expect(getSimilarTypes(registry, {}, 'Vec<{ "a": "H256", "b": "Vec<H256>" }>', mockImports)).toEqual([
      `Vec<{
    readonly a: H256;
    readonly b: Vec<H256>;
  } & Struct>`
    ]);
  });
});
