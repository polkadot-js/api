// Copyright 2015-2018 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: MIT

import { distinctUntilChanged, publishReplay, refCount } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * Shorthand for distinctUntilChanged(), publishReplay(1) and refCount().
 *
 * @ignore
 */
export const drr = () => <T>(source$: Observable<T>): Observable<T> =>
  source$.pipe(
    distinctUntilChanged(),
    publishReplay(1),
    refCount()
  );
