// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '@polkadot/types-codec/types';
import type { TypeDef } from '@polkadot/types-create/types';
import type { EventMetadataLatest } from '../interfaces/metadata/index.js';
import type { Hash } from '../interfaces/runtime/index.js';
import type { EventId, Phase } from '../interfaces/system/index.js';

export interface IEventRecord<T extends Codec[]> extends Codec {
  readonly phase: Phase;
  readonly event: IEvent<T>;
  readonly topics: Hash[];
}

export interface IEventData extends Codec {
  readonly meta: EventMetadataLatest;
  readonly method: string;
  readonly names: string[] | null;
  readonly section: string;
  readonly typeDef: TypeDef[];
}

export interface IEventLike {
  readonly index: unknown;
  readonly method: unknown;
  readonly section: unknown;
}

export interface IEvent<T extends Codec[], N = unknown> extends IEventLike, Codec {
  readonly data: N extends Record<string, Codec>
    ? N & T & IEventData
    : T & IEventData;
  readonly index: EventId;
  readonly method: string;
  readonly section: string;
}
