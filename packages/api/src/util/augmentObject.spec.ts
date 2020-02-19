// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import augmentObject from './augmentObject';

describe('augmentObject', (): void => {
  let spy: any;

  beforeEach((): void => {
    spy = jest.spyOn(console, 'warn');
  });

  afterEach((): void => {
    spy.mockClear();
  });

  it('logs added/removed sections and methods', (): void => {
    augmentObject(
      'test',
      { foo: { f: 1, d: 1 }, bar: { b: 1 }, new: { z: 1 } },
      { foo: { f: 1, c: 1 }, bar: { a: 1, c: 1 }, baz: { a: 1 } }
    );

    expect(spy).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining('API/AUGMENT'),
      'api.test: Found 1 added and 1 removed modules:\n\t  added: new\n\tremoved: baz'
    );
    expect(spy).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining('API/AUGMENT'),
      'api.test: Found 2 added and 3 removed calls:\n\t  added: bar.b, foo.d\n\tremoved: bar.a, bar.c, foo.c'
    );
  });

  it('copies sections to the dest', (): void => {
    const src = { foo: { a: 1 }, bar: { b: 1 } };

    expect(augmentObject('test', src, {})).toEqual(src);
  });

  it('adds fields to existing sections', (): void => {
    const src = { foo: { a: 1 }, bar: { b: 1 } };
    const dst = { foo: { b: 2 }, baz: { c: 1 } };

    expect(augmentObject('test', src, dst)).toEqual({
      foo: { b: 2, a: 1 },
      bar: { b: 1 },
      baz: { c: 1 }
    });
  });
});
