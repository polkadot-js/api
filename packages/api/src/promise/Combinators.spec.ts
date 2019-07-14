// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UnsubscribePromise } from '../types';
import Combinator from './Combinator';

describe('Combinator', (): void => {
  let fns: ((value: any) => void)[] = [];
  const storeFn = async (cb: (value: any) => void): UnsubscribePromise => {
    fns.push(cb);

    return (): void => undefined;
  };

  beforeEach((): void => {
    fns = [];
  });

  it('it triggers on all values', (done): void => {
    let count = 0;
    const combinator = new Combinator(
      [storeFn],
      (value: any[]): void => {
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

  it('combines values from 2 sources, firing when it has all results', (done): void => {
    const combinator = new Combinator(
      [storeFn, storeFn],
      (value: any[]): void => {
        expect(value).toEqual(['test0', 'test1']);

        done();
      }
    );

    fns[0]('test0');
    fns[1]('test1');

    expect(combinator).toBeDefined();
  });

  it('combines values from 2 sources, allowing multiple updates', (done): void => {
    let count = 0;
    const combinator = new Combinator(
      [storeFn, storeFn],
      (value: any[]): void => {
        expect(value).toEqual(
          count === 0
            ? ['test0', 'test1']
            : ['test2', 'test1']);

        count++;

        if (count === 2) {
          done();
        }
      }
    );

    fns[0]('test0');
    fns[1]('test1');
    fns[0]('test2');

    expect(combinator).toBeDefined();
  });

  it('unsubscribes as required', (done): void => {
    const mocker = async (): Promise<any> => done;
    const combinator = new Combinator([
      mocker,
      async (): UnsubscribePromise => (): void => void 0
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ], (value: any[]): void => {
      // ignore
    });

    combinator.unsubscribe();
  });
});
