// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { catchError, distinctUntilChanged, publishReplay, tap } from 'rxjs/operators';
import { logger } from '@polkadot/util';

import { refCountDelay } from './refCountDelay';

type DrrResult = <T> (source$: Observable<T>) => Observable<T>;

const l = logger('drr');

const CMP = (a: any, b: any): boolean =>
  JSON.stringify({ t: a }) === JSON.stringify({ t: b });

const ERR = (error: Error): Observable<never> => {
  l.error(error);

  throw error;
};

const NOOP = (): void => {};

/**
 * Shorthand for distinctUntilChanged(), publishReplay(1) and refCount().
 *
 * @ignore
 */
export const drr = (skipChange?: boolean): DrrResult => <T> (source$: Observable<T>): Observable<T> =>
  source$.pipe(
    catchError(ERR),
    skipChange
      ? tap(NOOP)
      : distinctUntilChanged(CMP),
    publishReplay(1),
    refCountDelay()
  );
