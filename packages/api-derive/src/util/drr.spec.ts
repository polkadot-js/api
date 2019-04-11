// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { of, timer } from 'rxjs';

import { drr } from './drr';

describe('drr', () => {
  it('should not fire twice the same value', (done) => {
    let count = 0;
    of(1, 1).pipe(drr()).subscribe(() => { ++count; });

    setTimeout(() => {
      expect(count).toBe(1);
      done();
    }, 50);
  });

  it('should be a ReplaySubject(1)', (done) => {
    const obs = timer(0, 100).pipe(drr()); // Starts at 0, increments every 100ms
    obs.subscribe(); // Fire the observable

    // Subscribe another time after some time, i.e. after the observable has fired
    setTimeout(() => {
      obs.subscribe((value) => {
        expect(value > 1).toBe(true);
        done();
      });
    }, 500);
  });
});
