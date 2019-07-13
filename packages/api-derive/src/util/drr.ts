// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { catchError, distinctUntilChanged, publishReplay, refCount } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { logger } from '@polkadot/util';

const l = logger('drr');

/**
 * Shorthand for distinctUntilChanged(), publishReplay(1) and refCount().
 *
 * @ignore
 */
export const drr = () => <T>(source$: Observable<T>): Observable<T> =>
  source$.pipe(
    catchError(err => {
      l.error(err);

      throw err;
    }),
    distinctUntilChanged(),
    publishReplay(1),
    refCount()
  );
