// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, IEventRecord } from '@polkadot/types/types';
import type { ApiTypes } from './base';

export type AnyTuple = Codec[];

// In events we don't need the ApiType, however add it for consistency
// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedEvents<ApiType extends ApiTypes> { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AugmentedIsEvent<ApiType extends ApiTypes, T extends AnyTuple> = (record: IEventRecord<AnyTuple>) => record is IEventRecord<T>;

export interface QueryableModuleEvents<ApiType extends ApiTypes> {
  [index: string]: AugmentedIsEvent<ApiType, AnyTuple>;
}
