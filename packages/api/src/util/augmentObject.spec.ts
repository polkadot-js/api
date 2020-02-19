// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import augmentObject, { findRemoved } from './augmentObject';

describe('findRemoved', (): void => {
  let spy: any;

  beforeEach((): void => {
    spy = jest.spyOn(console, 'warn');
  });

  afterEach((): void => {
    spy.mockClear();
  });

  it('logs removed sections', (): void => {
    findRemoved('test', { foo: {}, bar: {} }, { cde: {}, foo: {}, bar: {}, baz: {} });

    expect(spy).toHaveBeenCalledWith(expect.anything(), expect.stringContaining('API/AUGMENT'), 'api.test: Found 2 removed modules: baz, cde');
  });

  it('logs removed calls', (): void => {
    findRemoved('test', { foo: { a: 1 }, bar: {} }, { foo: { a: 1 }, bar: { a: 1 } });

    expect(spy).toHaveBeenCalledWith(expect.anything(), expect.stringContaining('API/AUGMENT'), 'api.test: Found 1 removed calls: bar.a');
  });
});

describe('augmentObject', (): void => {
  it('copies sections to the dest', (): void => {
    const src = { foo: { a: 1 }, bar: { b: 1 } };

    expect(augmentObject('test', src, {})).toEqual(src);
  });

  it('adds fields to existing sections', (): void => {
    const src = { foo: { a: 1 }, bar: { b: 1 } };
    const dst = { foo: { b: 2 }, baz: { c: 1 } };

    expect(augmentObject('test', src, dst)).toEqual({ foo: { b: 2, a: 1 }, bar: { b: 1 }, baz: { c: 1 } });
  });
});
