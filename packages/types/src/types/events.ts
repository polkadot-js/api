// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, ITuple } from '@polkadot/types-codec/types';
import type { EventMetadataLatest } from '../interfaces/metadata';
import type { Hash } from '../interfaces/runtime';
import type { EventId, Phase } from '../interfaces/system';

export interface IEventRecord<T extends Codec[], N extends Record<string, Codec> = Record<string, Codec>> {
  readonly phase: Phase;
  readonly event: IEvent<T, N>;
  readonly topics: Hash[];
}

export interface IEventData {
  readonly meta: EventMetadataLatest;
  readonly method: string;
  readonly section: string;
}

export interface IEvent<T extends Codec[], N extends Record<string, Codec> = Record<string, Codec>> {
  readonly data: ITuple<T> & IEventData & N;
  readonly index: EventId;
  readonly method: string;
  readonly section: string;
}
