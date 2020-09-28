// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { stringToU8a, u8aConcat } from '@polkadot/util';

import { TypeRegistry } from '../create';
import Text from './Text';
import Type from './Type';

describe('Type', (): void => {
  const registry = new TypeRegistry();

  it('fails to cleanup invalid boxes', (): void => {
    expect(
      (): Type => new Type(registry, 'Box<Proposal')
    ).toThrow(/find closing matching/);
  });

  it('cleans up tuples with a single value', (): void => {
    expect(
      new Type(registry, '(AccountId)').toString()
    ).toEqual('AccountId');
  });

  it('does not touch tuples with multiple values', (): void => {
    expect(
      new Type(registry, '(AccountId, Balance)').toString()
    ).toEqual('(AccountId,Balance)');
  });

  it('handles nested types', (): void => {
    expect(
      new Type(registry, 'Box<Vec<AccountId>>').toString()
    ).toEqual('Vec<AccountId>');
  });

  it('handles nested types (embedded)', (): void => {
    expect(
      new Type(registry, '(u32, Box<Vec<AccountId>>)').toString()
    ).toEqual('(u32,Vec<AccountId>)');
  });

  it('handles aliasses, multiples per line', (): void => {
    expect(
      new Type(registry, '(Vec<u8>, AccountId, Vec<u8>)').toString()
    ).toEqual('(Bytes,AccountId,Bytes)');
  });

  it('removes whitespaces', (): void => {
    expect(
      new Type(registry, 'T :: AccountId').toString()
    ).toEqual('AccountId');
  });

  it('changes PairOf<T> -> (T, T)', (): void => {
    expect(
      new Type(registry, 'PairOf<T::Balance>').toString()
    ).toEqual('(Balance,Balance)');
  });

  it('changes PairOf<T> (embedded) -> (T, T)', (): void => {
    expect(
      new Type(registry, '(Vec<u8>, PairOf<T::Balance>, Vec<AccountId>)').toString()
    ).toEqual('(Bytes,(Balance,Balance),Vec<AccountId>)');
  });

  it('changes () -> ()', (): void => {
    expect(
      new Type(registry, '()').toString()
    ).toEqual('()');
  });

  it('has the sanitized', (): void => {
    expect(
      new Type(
        registry,
        new Text(registry, ' Box<Proposal> ')
      ).toString()
    ).toEqual('Proposal'); // eslint-disable-line
  });

  it('unwraps compact', (): void => {
    expect(
      new Type(registry, '<T::Balance as HasCompact>::Type').toString()
    ).toEqual('Compact<Balance>');
  });

  it('handles InherentOfflineReport', (): void => {
    expect(
      new Type(registry, '<T::InherentOfflineReport as InherentOfflineReport>::Inherent').toString()
    ).toEqual('InherentOfflineReport');
  });

  it('encodes correctly via toU8a()', (): void => {
    const type = 'Compact<Balance>';

    expect(new Text(registry, type).toU8a()).toEqual(
      u8aConcat(
        new Uint8Array([type.length << 2]),
        stringToU8a(type)
      )
    );
  });

  it('creates a decodable U8a for sanitized types', (): void => {
    const original = '<T::InherentOfflineReport as InherentOfflineReport>::Inherent';
    const expected = 'InherentOfflineReport';
    const u8a = new Type(registry, original).toU8a();
    const decoded = new Type(registry, u8a);

    expect(decoded.encodedLength).toEqual(original.length + 1); // extra byte for length
    expect(decoded.toString()).toEqual(expected);
  });
});
