// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import type { UnsubscribePromise } from '../types/index.js';

import { Combinator } from './Combinator.js';

describe('Combinator', (): void => {
  let fns: ((value: any) => void)[] = [];

  // eslint-disable-next-line @typescript-eslint/require-await
  const storeFn = async (cb: (value: any) => void): UnsubscribePromise => {
    fns.push(cb);

    return (): void => undefined;
  };

  beforeEach((): void => {
    fns = [];
  });

  it('it triggers on all values', async (): Promise<void> => {
    await new Promise<boolean>((resolve) => {
      let count = 0;
      const combinator = new Combinator(
        [storeFn],
        (value: any[]): void => {
          expect(value[0]).toEqual(`test${count}`);

          count++;

          if (count === 3) {
            resolve(true);
          }
        }
      );

      fns[0]('test0');
      fns[0]('test1');
      fns[0]('test2');

      expect(combinator).toBeDefined();
    });
  });

  it('combines values from 2 sources, firing when it has all results', async (): Promise<void> => {
    await new Promise<boolean>((resolve) => {
      const combinator = new Combinator(
        [storeFn, storeFn],
        (value: any[]): void => {
          expect(value).toEqual(['test0', 'test1']);

          resolve(true);
        }
      );

      fns[0]('test0');
      fns[1]('test1');

      expect(combinator).toBeDefined();
    });
  });

  it('combines values from 2 sources, allowing multiple updates', async (): Promise<void> => {
    await new Promise<boolean>((resolve) => {
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
            resolve(true);
          }
        }
      );

      fns[0]('test0');
      fns[1]('test1');
      fns[0]('test2');

      expect(combinator).toBeDefined();
    });
  });

  it('unsubscribes as required', async (): Promise<void> => {
    await new Promise<void>((resolve) => {
      // eslint-disable-next-line @typescript-eslint/require-await
      const mocker = () => Promise.resolve(resolve);
      const combinator = new Combinator([
        mocker,
        // eslint-disable-next-line @typescript-eslint/require-await
        async (): UnsubscribePromise => (): void => undefined
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ], (value: any[]): void => {
        // ignore
      });

      combinator.unsubscribe();
    });
  });
});
