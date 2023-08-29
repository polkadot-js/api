// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ParaId } from '@polkadot/types/interfaces';
import type { DidUpdate } from './types.js';

export function didUpdateToBool (didUpdate: DidUpdate, id: ParaId): boolean {
  return didUpdate.isSome
    ? didUpdate.unwrap().some((paraId) => paraId.eq(id))
    : false;
}
