// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { catchError, distinctUntilChanged, publishReplay, refCount } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isNull, logger } from '@polkadot/util';

type DrrResult = <T> (source$: Observable<T>) => Observable<T>;

const l = logger('drr');

function isEqual (prev: any, next: any): boolean {
  if (isNull(prev) || isNull(next)) {
    return next === prev;
  } else if (Array.isArray(next)) {
    return next.length === prev.length &&
      !next.some((value: any, index): boolean => isEqual(prev[index], value));
  } else if (next.eq) {
    return next.eq(prev);
  }

  return next === prev;
}

/**
 * Shorthand for distinctUntilChanged(), publishReplay(1) and refCount().
 *
 * @ignore
 */
export const drr = (): DrrResult => <T> (source$: Observable<T>): Observable<T> =>
  source$.pipe(
    catchError((error): Observable<never> => {
      l.error(error);

      throw error;
    }),
    distinctUntilChanged(isEqual),
    publishReplay(1),
    refCount()
  );
