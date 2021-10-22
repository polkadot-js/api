// Copyright 2017-2021 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

// FIXME, this whole file needs to move to API

import type { Observable } from 'rxjs';
import type { Json, Raw } from '@polkadot/types';
import type { AnyFunction } from '@polkadot/types/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RpcInterface {}

export type AugmentedRpc<F extends AnyFunction> = F & {
  json: (...params: Parameters<F>) => Observable<Json>;
  raw: (...params: Parameters<F>) => Observable<Raw>;
};
