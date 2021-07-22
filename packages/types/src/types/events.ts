// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventMetadataLatest } from '../interfaces/metadata';
import type { Hash } from '../interfaces/runtime';
import type { EventId, Phase } from '../interfaces/system';
import type { Codec } from './codec';
import type { ITuple } from './interfaces';

export interface IEventRecord<T extends Codec[]> {
  readonly phase: Phase;
  readonly event: IEvent<T>;
  readonly topics: Hash[];
}

export interface IEventData {
  readonly meta: EventMetadataLatest;
  readonly method: string;
  readonly section: string;
}

export interface IEvent<T extends Codec[]> {
  readonly data: ITuple<T> & IEventData;
  readonly index: EventId;
  readonly method: string;
  readonly section: string;
}
