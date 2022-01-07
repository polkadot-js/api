// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';

describe('MultiAddress', (): void => {
  const registry = new TypeRegistry();

  it('decodes from an empty value', (): void => {
    const a = registry.createType('MultiAddress');

    expect(a.index).toEqual(0);
    expect(a.toHex()).toEqual('0x000000000000000000000000000000000000000000000000000000000000000000');
  });

  it('correctly decodes a stream with Address20', (): void => {
    const a = registry.createType('MultiAddress', '0x0467f89207abe6e1b093befd84a48f03313765929207009e292608');

    expect(a.index).toEqual(4);
    expect(a.toString()).toEqual('0x67f89207abe6e1b093befd84a48f033137659292');
  });

  it('correctly decodes an AccountId', (): void => {
    const a = registry.createType('MultiAddress', '0x0102030405060708010203040506070801020304050607080102030405060708');

    expect(a.index).toEqual(0);
    expect(a.toString()).toEqual('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF');
  });

  it('correctly decodes an AccountIndex', (): void => {
    const a = registry.createType('MultiAddress', '25GUyv');

    expect(a.index).toEqual(1);
    expect(a.toString()).toEqual('25GUyv');
  });

  it('correctly decodes an AccountIndex (AccountIndex input)', (): void => {
    const a = registry.createType('MultiAddress', registry.createType('AccountIndex', '25GUyv'));

    expect(a.index).toEqual(1);
    expect(a.toString()).toEqual('25GUyv');
  });

  it('correctly decodes an Address20', (): void => {
    const a = registry.createType('MultiAddress', '0x67f89207abe6e1b093befd84a48f033137659292');

    expect(a.index).toEqual(4);
    expect(a.toString()).toEqual('0x67f89207abe6e1b093befd84a48f033137659292');
  });
});
