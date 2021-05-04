// Copyright 2017-2021 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from '@polkadot/x-rxjs';

import { logger, stringify } from '@polkadot/util';
import { catchError, distinctUntilChanged, publishReplay, refCount, tap } from '@polkadot/x-rxjs/operators';

import { refCountDelay } from './refCountDelay';

export type DrrResult = <T> (source$: Observable<T>) => Observable<T>;

interface Options {
  delay?: number;
  skipChange?: boolean;
  skipTimeout?: boolean;
}

const l = logger('drr');

const CMP = (a: unknown, b: unknown): boolean =>
  stringify({ t: a }) === stringify({ t: b });

const ERR = (error: Error): Observable<never> => {
  l.error(error.message);

  throw error;
};

const NOOP = (): void => undefined;

/**
 * Shorthand for distinctUntilChanged(), publishReplay(1) and refCount().
 *
 * @ignore
 * @internal
 */
export const drr = ({ delay, skipChange = false, skipTimeout = false }: Options = {}): DrrResult => <T> (source$: Observable<T>): Observable<T> =>
  source$.pipe(
    catchError(ERR),
    skipChange
      ? tap(NOOP)
      : distinctUntilChanged<T>(CMP),
    publishReplay(1),
    skipTimeout
      ? refCount()
      : refCountDelay(delay)
  );
