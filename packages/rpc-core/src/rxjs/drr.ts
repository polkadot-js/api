// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { catchError, distinctUntilChanged, publishReplay } from 'rxjs/operators';
import { logger } from '@polkadot/util';

import { refCountDelay } from './refCountDelay';

type DrrResult = <T> (source$: Observable<T>) => Observable<T>;

const l = logger('drr');

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
    distinctUntilChanged((a: any, b: any): boolean =>
      JSON.stringify({ t: a }) === JSON.stringify({ t: b })
    ),
    publishReplay(1),
    refCountDelay()
  );
