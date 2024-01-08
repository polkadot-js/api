// Copyright 2017-2024 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { decorateStorage, Metadata, TypeRegistry } from '@polkadot/types';
import metaStatic from '@polkadot/types-support/metadata/static-substrate';

import { extractStorageArgs } from './validate.js';

describe('extractStorageArgs', (): void => {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, metaStatic);

  registry.setMetadata(metadata);

  const storage = decorateStorage(registry, metadata.asLatest, metadata.version);

  it('validates no-arg plain', (): void => {
    expect(
      extractStorageArgs(registry, storage['timestamp']['now'], [])
    ).toEqual([storage['timestamp']['now'], []]);
  });

  it('validates no-arg plain (with undefined, undefined)', (): void => {
    expect(
      extractStorageArgs(registry, storage['timestamp']['now'], [undefined, undefined])
    ).toEqual([storage['timestamp']['now'], []]);
  });

  it('validates no-arg plain (failing when there are args)', (): void => {
    expect(
      () => extractStorageArgs(registry, storage['timestamp']['now'], [123, 456])
    ).toThrow('timestamp.now() does not take any arguments, 2 found');
  });

  it('validates map, 1 arg', (): void => {
    expect(
      extractStorageArgs(registry, storage['staking']['payee'], ['abc'])
    ).toEqual([storage['staking']['payee'], ['abc']]);
  });

  it('validates map, 1 arg (failing with no args)', (): void => {
    expect(
      () => extractStorageArgs(registry, storage['staking']['payee'], [])
    ).toThrow('staking.payee(AccountId32) is a map, requiring 1 arguments, 0 found');
  });

  it('validates map, 1 arg (failing with more args)', (): void => {
    expect(
      () => extractStorageArgs(registry, storage['staking']['payee'], ['abc', 'def'])
    ).toThrow('staking.payee(AccountId32) is a map, requiring 1 arguments, 2 found');
  });

  it('validates doublemap, 2 args', (): void => {
    expect(
      extractStorageArgs(registry, storage['staking']['erasStakers'], [1, '0x1234'])
    ).toEqual([storage['staking']['erasStakers'], [1, '0x1234']]);
  });

  it('validates doublemap, 2 args (failing with no args)', (): void => {
    expect(
      () => extractStorageArgs(registry, storage['staking']['erasStakers'], [])
    ).toThrow('staking.erasStakers(u32, AccountId32) is a map, requiring 2 arguments, 0 found');
  });

  it('validates doublemap, 2 args (failing with 1 arg)', (): void => {
    expect(
      () => extractStorageArgs(registry, storage['staking']['erasStakers'], [123])
    ).toThrow('staking.erasStakers(u32, AccountId32) is a map, requiring 2 arguments, 1 found');
  });
});
