// Copyright 2017-2019 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { decorateStorage, Metadata } from '@polkadot/metadata';
import { Storage } from '@polkadot/metadata/decorate/types';
import metaStatic from '@polkadot/metadata/static';
import { TypeRegistry } from '@polkadot/types/create';

import { extractStorageArgs } from './validate';

describe('extractStorageArgs', (): void => {
  const registry = new TypeRegistry();
  let storage: Storage;

  beforeEach((): void => {
    const metadata = new Metadata(registry, metaStatic);

    storage = decorateStorage(registry, metadata.asLatest, metadata.version);
  });

  it('validates no-arg plain', (): void => {
    expect(
      extractStorageArgs(storage.timestamp.now, [])
    ).toEqual([storage.timestamp.now]);
  });

  it('validates no-arg plain (with undefined, undefined)', (): void => {
    expect(
      extractStorageArgs(storage.timestamp.now, [undefined, undefined])
    ).toEqual([storage.timestamp.now]);
  });

  it('validates no-arg plain (failing when there are args)', (): void => {
    expect(
      (): unknown => extractStorageArgs(storage.timestamp.now, [123, 456])
    ).toThrow('timestamp.now() does not take any arguments, 2 found');
  });

  it('validates map, 1 arg', (): void => {
    expect(
      extractStorageArgs(storage.staking.payee, ['abc'])
    ).toEqual([storage.staking.payee, 'abc']);
  });

  it('validates map, 1 arg (failing with no args)', (): void => {
    expect(
      (): any =>
        extractStorageArgs(storage.staking.payee, [])
    ).toThrow('staking.payee(AccountId) is a map, requiring 1 argument, 0 found');
  });

  it('validates map, 1 arg (failing with no args)', (): void => {
    expect(
      (): any =>
        extractStorageArgs(storage.staking.payee, ['abc', 'def'])
    ).toThrow('staking.payee(AccountId) is a map, requiring 1 argument, 2 found');
  });

  it('validates doublemap, 2 args', (): void => {
    expect(
      extractStorageArgs(storage.staking.erasStakers, [1, '0x1234'])
    ).toEqual([storage.staking.erasStakers, [1, '0x1234']]);
  });

  it('validates doublemap, 2 args (failing with no args)', (): void => {
    expect(
      (): any =>
        extractStorageArgs(storage.staking.erasStakers, [])
    ).toThrow('staking.erasStakers(EraIndex, AccountId) is a doublemap, requiring 2 arguments, 0 found');
  });

  it('validates doublemap, 2 args (failing with 1 arg)', (): void => {
    expect(
      (): any =>
        extractStorageArgs(storage.staking.erasStakers, [123])
    ).toThrow('staking.erasStakers(EraIndex, AccountId) is a doublemap, requiring 2 arguments, 1 found');
  });

  // Linked maps have been removed
  it.skip('validates linked map, no args', (): void => {
    expect(
      extractStorageArgs(storage.staking.validators, [])
    ).toEqual([storage.staking.validators]);
  });

  it.skip('validates linked map, single arg', (): void => {
    expect(
      extractStorageArgs(storage.staking.validators, [123])
    ).toEqual([storage.staking.validators, 123]);
  });

  it.skip('validates linked map (failing with extra args)', (): void => {
    expect(
      (): any[] =>
        extractStorageArgs(storage.staking.validators, [123, 456])
    ).toThrow('staking.validators(AccountId) is a linked map, requiring either 0 arguments (retrieving all) or 1 argument, 2 found');
  });
});
