// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Combinator from './Combinator';

describe('Combinator', () => {
  it('creates a simple combinator, trigerring on all values', (done) => {
    const fns: Array<(value: any) => void> = [];
    let count = 0;

    const combinator = new Combinator(
      [
        (cb) => fns.push(cb)
      ],
      (value: Array<any>) => {
        expect(value[0]).toEqual(`test${count}`);

        count++;

        if (count === 3) {
          done();
        }
      }
    );

    fns[0]('test0');
    fns[0]('test1');
    fns[0]('test2');

    expect(combinator).toBeDefined();
  });

  it('creates a combinator that combines values from 2 sources', (done) => {
    const fns: Array<(value: any) => void> = [];
    let count = 0;

    const combinator = new Combinator(
      [
        (cb) => fns.push(cb),
        (cb) => fns.push(cb)
      ],
      (value: Array<any>) => {
        expect(value).toEqual(
          count === 0
            ? ['test0', undefined]
            : ['test0', 'test1']
        );

        count++;

        if (count === 2) {
          done();
        }
      }
    );

    fns[0]('test0');
    fns[1]('test1');

    expect(combinator).toBeDefined();
  });
});
