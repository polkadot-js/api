// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { augmentObject } from './augmentObject';

describe('augmentObject', (): void => {
  let spy: any;

  beforeEach((): void => {
    spy = jest.spyOn(console, 'warn');
  });

  afterEach((): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    spy.mockClear();
  });

  it('logs added/removed sections and methods', (): void => {
    augmentObject(
      'test',
      { bar: { b: 1 }, foo: { d: 1, f: 1 }, new: { z: 1 } },
      { bar: { a: 1, c: 1 }, baz: { a: 1 }, foo: { c: 1, f: 1 } }
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
    const src = { bar: { b: 1 }, foo: { a: 1 } };

    expect(augmentObject('test', src, {})).toEqual(src);
  });

  it('adds fields to existing sections', (): void => {
    const src = { bar: { b: 1 }, foo: { a: 1 } };
    const dst = { baz: { c: 1 }, foo: { b: 2 } };

    expect(augmentObject('test', src, dst)).toEqual({
      bar: { b: 1 },
      baz: { c: 1 },
      foo: { a: 1, b: 2 }
    });
  });
});
