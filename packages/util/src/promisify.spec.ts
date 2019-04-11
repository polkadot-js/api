// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { promisify } from '.';

describe('promisify', () => {
  it('handles functions with no parameters (resolve)', () => {
    const fn = (cb: Function) => cb(null, [true, 'test', 1]);

    return promisify(null, fn).then((result) => {
      expect(result).toEqual([true, 'test', 1]);
    });
  });

  it('handles functions with no parameters (reject)', () => {
    const fn = (cb: Function) => cb(new Error('test reject'));

    return promisify(null, fn).catch((error) => {
      expect(error.message).toEqual('test reject');
    });
  });

  it('handles functions with parameters (resolve)', () => {
    const fn = (a: any, b: any, c: any, cb: Function) => cb(null, [a, b, c]);

    return promisify(null, fn, 2, false, null).then((result) => {
      expect(result).toEqual([2, false, null]);
    });
  });

  it('handles functions with parameters (reject)', () => {
    const fn = (a: any, b: any, c: any, cb: Function) => cb(new Error(`test reject: ${a},${b},${c}`));

    return promisify(null, fn, 3, 'string', true).catch((error) => {
      expect(error.message).toEqual('test reject: 3,string,true');
    });
  });

  it('applies the correct this argument', () => {
    const self = { something: 'something' };

    return promisify(self, function (cb: Function) {
      // @ts-ignore
      expect(this).toEqual(self);
      cb();
    });
  });
});
