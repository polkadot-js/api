// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@polkadot/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { map } from 'rxjs';

export function unwrapNumber <T extends { number: Option<BlockNumber> }> (fn: () => Observable<T>): () => Observable<BlockNumber> {
  return () => fn().pipe(map((r) => r.number.unwrap()));
}
