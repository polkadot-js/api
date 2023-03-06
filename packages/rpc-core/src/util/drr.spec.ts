// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { of, timer } from 'rxjs';

import { drr } from '.';

describe('drr', (): void => {
  it('should not fire twice the same value', async (): Promise<void> => {
    let count = 0;
    const sub = of(1, 1).pipe(drr({ delay: 500 })).subscribe((): void => {
      ++count;
    });

    await new Promise<boolean>((resolve) => {
      setTimeout((): void => {
        expect(count).toBe(1);
        sub.unsubscribe();

        setTimeout(() => {
          resolve(true);
        }, 2000);
      }, 50);
    });
  });

  it('should be a ReplaySubject(1)', async (): Promise<void> => {
    const obs = timer(0, 100).pipe(drr({ delay: 500 })); // Starts at 0, increments every 100ms
    const sub = obs.subscribe(); // Fire the observable

    await new Promise<boolean>((resolve) => {
      // Subscribe another time after some time, i.e. after the observable has fired
      setTimeout((): void => {
        const sub = obs.subscribe((value): void => {
          expect(value > 1).toBe(true);

          setTimeout(() => {
            resolve(true);
          }, 2000);
        });

        sub.unsubscribe();
      }, 500);

      sub.unsubscribe();
    });
  });
});
