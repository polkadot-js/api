// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchErrorModule, ErrorMetadataLatest, EventMetadataLatest, ModuleConstantMetadataLatest } from '@polkadot/types/interfaces';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { AnyTuple, CallFunction, Codec, IEvent } from '@polkadot/types/types';

export interface ConstantCodec extends Codec {
  readonly meta: ModuleConstantMetadataLatest;
}

export interface IsError {
  readonly meta: ErrorMetadataLatest;

  is: (moduleError: DispatchErrorModule) => boolean;
}

export interface IsEvent <T extends AnyTuple> {
  readonly meta: EventMetadataLatest;

  is: (event: IEvent<AnyTuple>) => event is IEvent<T>;
}

export type ModuleConstants = Record<string, ConstantCodec>;

export type ModuleErrors = Record<string, IsError>;

export type ModuleEvents = Record<string, IsEvent<AnyTuple>>;

export type ModuleExtrinsics = Record<string, CallFunction>;

export type ModuleStorage = Record<string, StorageEntry>

export type Constants = Record<string, ModuleConstants>;

export type Errors = Record<string, ModuleErrors>;

export type Events = Record<string, ModuleEvents>;

export type Extrinsics = Record<string, ModuleExtrinsics>

export type Storage = Record<string, ModuleStorage>;

export interface DecoratedMeta {
  readonly consts: Constants;
  readonly errors: Errors;
  readonly events: Events;
  readonly query: Storage;
  readonly tx: Extrinsics
}
