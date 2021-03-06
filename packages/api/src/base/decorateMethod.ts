// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
import type { DecorateFn, DecorateMethodOptions } from '../types';

import { Observable } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

function decorateStorageSub (method: DecorateFn<Codec>): DecorateFn<Codec> {
  return (...args: any[]) =>
    (method(...args) as unknown as Observable<[Hash, Codec]>).pipe(
      map(([, value]) => value)
    );
}

export function rxDecorateMethod <Method extends DecorateFn<Codec>> (method: Method, options: DecorateMethodOptions = {}): Method {
  return options.isStorageSub
    ? decorateStorageSub(method) as Method
    : method;
}
