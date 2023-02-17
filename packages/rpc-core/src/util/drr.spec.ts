// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { of, timer } from 'rxjs';

import { drr } from '.';

describe('drr', (): void => {
  it('should not fire twice the same value', (done): void => {
    let count = 0;

    const sub = of(1, 1).pipe(drr({ delay: 500 })).subscribe((): void => {
      ++count;
    });

    setTimeout((): void => {
      expect(count).toBe(1);
      sub.unsubscribe();

      setTimeout(done, 2000);
    }, 50);
  });

  it('should be a ReplaySubject(1)', (done): void => {
    const obs = timer(0, 100).pipe(drr({ delay: 500 })); // Starts at 0, increments every 100ms

    const sub = obs.subscribe(); // Fire the observable

    // Subscribe another time after some time, i.e. after the observable has fired
    setTimeout((): void => {
      const sub = obs.subscribe((value): void => {
        expect(value > 1).toBe(true);

        setTimeout(done, 2000);
      });

      sub.unsubscribe();
    }, 500);

    sub.unsubscribe();
  });
});
