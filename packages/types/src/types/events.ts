// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventMetadataLatest } from '../interfaces/metadata';
import type { Hash } from '../interfaces/runtime';
import type { EventId, Phase } from '../interfaces/system';
import type { Codec } from './codec';
import type { ITuple } from './interfaces';

export interface IEventRecord<T extends Codec[]> {
  phase: Phase;
  event: IEvent<T>;
  topics: Hash[];
}

export interface IEventData {
  meta: EventMetadataLatest;
  method: string;
  section: string;
}

export interface IEvent<T extends Codec[]> {
  index: EventId;
  data: ITuple<T> & IEventData;
  method: string;
  section: string;
}
