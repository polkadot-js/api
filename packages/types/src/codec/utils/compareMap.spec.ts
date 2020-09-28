// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec } from '../../types';
import { TypeRegistry } from '../../create';
import U32 from '../../primitive/U32';
import compareMap from './compareMap';

describe('compareMap', (): void => {
  const registry = new TypeRegistry();
  const a = new Map<string, Codec>([
    ['decimals', new U32(registry, 15)],
    ['missing', new U32(registry, 10)],
    ['foobar', new U32(registry, 5)]
  ]);
  const b = new Map<string, any>([
    ['decimals', 15],
    ['missing', 10],
    ['foobar', 5]
  ]);
  const c = new Map<string, Codec>([
    ['decimals', new U32(registry, 15)],
    ['missing', new U32(registry, 10)],
    ['foobar', new U32(registry, 5)]
  ]);

  it('compares Map<string, Codec> against Object', (): void => {
    expect(
      compareMap(a, {
        decimals: 15,
        foobar: 5,
        missing: 10
      })
    ).toBe(true);
  });

  it('compares Map<string, any> against entries array', (): void => {
    expect(
      compareMap(b, [
        ['missing', 10], ['decimals', 15], ['foobar', 5]
      ])
    ).toBe(true);
  });

  it('compares between 2 maps', (): void => {
    expect(compareMap(a, b)).toBe(true);
  });

  it('compares between 2 maps (both codec)', (): void => {
    expect(compareMap(a, c)).toBe(true);
  });

  it('returns false when second param is a non-map, non-array, non-object', (): void => {
    expect(
      compareMap(a, 123)
    ).toBe(false);
  });

  it('returns false when second param is a array with non-entries', (): void => {
    expect(
      compareMap(a, [123, 456, 789])
    ).toBe(false);
  });

  it('returns false when second param is a array with non-entries (only key)', (): void => {
    expect(
      compareMap(a, [[123], [456], [789]])
    ).toBe(false);
  });

  it('returns false when properties are missing', (): void => {
    expect(
      compareMap(a, [['decimals', 15], ['wrong', 10], ['foobar', 5]])
    ).toBe(false);
  });

  it('returns false when lengths do not match', (): void => {
    expect(
      compareMap(a, [['decimals', 15]])
    ).toBe(false);
  });
});
