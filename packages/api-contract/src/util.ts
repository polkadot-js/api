// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SubmittableResult } from '@polkadot/api';
import { EventRecord } from '@polkadot/types/interfaces';
import { Codec, Registry, TypeDef } from '@polkadot/types/types';

import { Raw, createTypeUnsafe } from '@polkadot/types';

type ContractEvents = 'CodeStored' | 'ContractExecution' | 'Instantiated';

export function formatData (registry: Registry, data: Raw, { type }: TypeDef): Codec {
  return createTypeUnsafe(registry, type, [data], true);
}

export function applyOnEvent <T> (result: SubmittableResult, type: ContractEvents, fn: (records: EventRecord[]) => T): T | undefined {
  if (result.isInBlock || result.isFinalized) {
    const records = result.filterRecords('contracts', type);

    if (records.length) {
      return fn(records);
    }
  }

  return undefined;
}
