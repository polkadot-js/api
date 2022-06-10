// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, Codec, ITuple } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';
import type { EventMetadataLatest } from '../interfaces/metadata';
import type { Hash } from '../interfaces/runtime';
import type { EventId, Phase } from '../interfaces/system';

export interface IEventRecord<T extends Codec[]> {
  readonly phase: Phase;
  readonly event: IEvent<T>;
  readonly topics: Hash[];
}

export interface IEventData {
  readonly meta: EventMetadataLatest;
  readonly method: string;
  readonly section: string;
  readonly typeDef: TypeDef[];
}

export interface IEventLike {
  readonly index: unknown;
  readonly method: unknown;
  readonly section: unknown;
}

export interface IEvent<T extends AnyTuple> extends IEventLike {
  readonly data: ITuple<T> & IEventData;
  readonly index: EventId;
  readonly method: string;
  readonly section: string;
}
