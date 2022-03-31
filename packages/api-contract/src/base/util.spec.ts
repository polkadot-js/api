// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Namespaced } from './types';

import { expandNs } from './util';

type TestNS = Namespaced<string>;

describe('expandNs', (): void => {
  it('expands into single-namespaced and normal location', (): void => {
    const testNs: TestNS = {};
    const test: Record<string, string> = {};

    test.a = expandNs(testNs, { path: ['ns_a'] }, 'a');

    expect(test.a).toEqual('a');
    expect(testNs.ns_a).toEqual('a');
  });

  it('expands into multi-namespaced and normal location', (): void => {
    const testNs: TestNS = {};

    expect(expandNs(testNs, { path: ['A', 'B', 'a'] }, 'a')).toEqual('a');

    expect(testNs.A.B.a).toEqual('a');
  });

  it('it expands multiples', (): void => {
    const testNs: TestNS = {};

    expect(expandNs(testNs, { path: ['A', 'B', 'a'] }, 'a')).toEqual('a');
    expect(expandNs(testNs, { path: ['A', 'B', 'b'] }, 'b')).toEqual('b');
    expect(expandNs(testNs, { path: ['A', 'C', 'c'] }, 'c')).toEqual('c');

    expect(testNs.A.B.a).toEqual('a');
    expect(testNs.A.B.b).toEqual('b');
    expect(testNs.A.C.c).toEqual('c');
  });
});
