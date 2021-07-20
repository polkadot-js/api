// Copyright 2017-2019 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Storage } from '@polkadot/types/metadata/decorate/types';

import { decorateStorage, Metadata, TypeRegistry } from '@polkadot/types';
import metaStatic from '@polkadot/types/metadata/static';

import { extractStorageArgs } from './validate';

describe('extractStorageArgs', (): void => {
  const registry = new TypeRegistry();
  let storage: Storage;

  beforeEach((): void => {
    const metadata = new Metadata(registry, metaStatic);

    storage = decorateStorage(registry, metadata.asLatest);
  });

  it('validates no-arg plain', (): void => {
    expect(
      extractStorageArgs(registry, storage.timestamp.now, [])
    ).toEqual([storage.timestamp.now]);
  });

  it('validates no-arg plain (with undefined, undefined)', (): void => {
    expect(
      extractStorageArgs(registry, storage.timestamp.now, [undefined, undefined])
    ).toEqual([storage.timestamp.now]);
  });

  it('validates no-arg plain (failing when there are args)', (): void => {
    expect(
      (): unknown => extractStorageArgs(registry, storage.timestamp.now, [123, 456])
    ).toThrow('timestamp.now() does not take any arguments, 2 found');
  });

  it('validates map, 1 arg', (): void => {
    expect(
      extractStorageArgs(registry, storage.staking.payee, ['abc'])
    ).toEqual([storage.staking.payee, 'abc']);
  });

  it('validates map, 1 arg (failing with no args)', (): void => {
    expect(
      (): any =>
        extractStorageArgs(registry, storage.staking.payee, [])
    ).toThrow('staking.payee(AccountId) is a map, requiring 1 argument, 0 found');
  });

  it('validates map, 1 arg (failing with no args)', (): void => {
    expect(
      (): any =>
        extractStorageArgs(registry, storage.staking.payee, ['abc', 'def'])
    ).toThrow('staking.payee(AccountId) is a map, requiring 1 argument, 2 found');
  });

  it('validates doublemap, 2 args', (): void => {
    expect(
      extractStorageArgs(registry, storage.staking.erasStakers, [1, '0x1234'])
    ).toEqual([storage.staking.erasStakers, [1, '0x1234']]);
  });

  it('validates doublemap, 2 args (failing with no args)', (): void => {
    expect(
      (): any =>
        extractStorageArgs(registry, storage.staking.erasStakers, [])
    ).toThrow('staking.erasStakers(EraIndex, AccountId) is a double map, requiring 2 arguments, 0 found');
  });

  it('validates doublemap, 2 args (failing with 1 arg)', (): void => {
    expect(
      (): any =>
        extractStorageArgs(registry, storage.staking.erasStakers, [123])
    ).toThrow('staking.erasStakers(EraIndex, AccountId) is a double map, requiring 2 arguments, 1 found');
  });

  // Linked maps have been removed
  it.skip('validates linked map, no args', (): void => {
    expect(
      extractStorageArgs(registry, storage.staking.validators, [])
    ).toEqual([storage.staking.validators]);
  });

  it.skip('validates linked map, single arg', (): void => {
    expect(
      extractStorageArgs(registry, storage.staking.validators, [123])
    ).toEqual([storage.staking.validators, 123]);
  });

  it.skip('validates linked map (failing with extra args)', (): void => {
    expect(
      (): any[] =>
        extractStorageArgs(registry, storage.staking.validators, [123, 456])
    ).toThrow('staking.validators(AccountId) is a linked map, requiring either 0 arguments (retrieving all) or 1 argument, 2 found');
  });
});
