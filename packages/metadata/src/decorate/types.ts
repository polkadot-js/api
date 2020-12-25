// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchError, ErrorMetadataLatest, EventMetadataLatest, ModuleConstantMetadataLatest } from '@polkadot/types/interfaces';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { AnyTuple, CallFunction, Codec, IEventRecord } from '@polkadot/types/types';

export interface ConstantCodec extends Codec {
  meta: ModuleConstantMetadataLatest;
}

export interface IsError {
  (dispatchError: DispatchError): boolean;
  meta: ErrorMetadataLatest;
}

export interface IsEvent <T extends AnyTuple> {
  (record: IEventRecord<AnyTuple>): record is IEventRecord<T>;
  meta: EventMetadataLatest;
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
  consts: Constants;
  errors: Errors;
  events: Events;
  query: Storage;
  tx: Extrinsics
}
