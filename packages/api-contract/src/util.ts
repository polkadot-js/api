// Copyright 2017-2020 @polkadot/rpc-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableResult } from '@polkadot/api';
import type { Raw } from '@polkadot/types';
import type { EventRecord } from '@polkadot/types/interfaces';
import type { Codec, CodecArg, Registry, TypeDef } from '@polkadot/types/types';
import type { BlueprintOptions, ContractOptions } from './types';

import BN from 'bn.js';

import { createTypeUnsafe } from '@polkadot/types/create';
import { isBigInt, isBn, isNumber, isString } from '@polkadot/util';

type ContractEvents = 'CodeStored' | 'ContractExecution' | 'Instantiated';

type TOptions = BlueprintOptions | ContractOptions;

export function formatData (registry: Registry, data: Raw, { type }: TypeDef): Codec {
  return createTypeUnsafe(registry, type, [data], { isPedantic: true });
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

export function isOptions <T> (options: BigInt | string | number | BN | T): options is T {
  return !(isBn(options) || isBigInt(options) || isNumber(options) || isString(options));
}

export function extractOptions <T extends TOptions> (value: BigInt | string | number | BN, params: CodecArg[]): [T, CodecArg[]] {
  const gasLimit = params.shift() as BN;

  return [{ gasLimit, value } as T, params];
}
