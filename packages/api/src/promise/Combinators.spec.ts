// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Combinator from './Combinator';

describe('Combinator', () => {
  it('creates a simple combinator, trigerring on all values', (done) => {
    let count = 0;

    const combinator = new Combinator((value: Array<any>) => {
      expect(value[0]).toEqual(`test${count}`);

      count++;

      if (count === 3) {
        done();
      }
    });

    const fn = combinator.next();

    fn('test0');
    fn('test1');
    fn('test2');
  });

  it('creates a combinator that combines values from 2 sources', (done) => {
    let count = 0;

    const combinator = new Combinator((value: Array<any>) => {
      expect(value).toEqual(
        count === 0
          ? ['test0']
          : ['test0', 'test1']
      );

      count++;

      if (count === 2) {
        done();
      }
    });

    combinator.next()('test0');
    combinator.next()('test1');
  });

  it('creates a combinator that combines values from 2 sources (filling empty)', (done) => {
    let count = 0;

    const combinator = new Combinator((value: Array<any>) => {
      expect(value).toEqual(
        count === 0
          ? ['test0', undefined]
          : ['test0', 'test1']
      );

      count++;

      if (count === 2) {
        done();
      }
    });

    const fn0 = combinator.next();
    const fn1 = combinator.next();

    fn0('test0');
    fn1('test1');
  });

  it('allows subscription after use, and subsequent next()', (done) => {
    let count = 0;
    const combinator = new Combinator();

    combinator.next()('test0');
    combinator.next()('test1');
    combinator.next()('test2');

    combinator.subscribe((value: Array<any>) => {
      expect(value).toEqual(
        count === 0
          ? ['test0', 'test1', 'test2']
          : ['test0', 'test1', 'test2', 'test3']
      );

      count++;

      if (count === 2) {
        done();
      }
    });

    combinator.next()('test3');
  });
});
