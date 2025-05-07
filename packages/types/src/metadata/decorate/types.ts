// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, Codec, Registry } from '@polkadot/types-codec/types';
import type { DispatchErrorModule, DispatchErrorModuleU8, DispatchErrorModuleU8a, ErrorMetadataLatest, EventMetadataLatest, PalletConstantMetadataLatest } from '../../interfaces/index.js';
import type { StorageEntry } from '../../primitive/types.js';
import type { CallFunction, IEvent, IEventLike } from '../../types/index.js';
import type { Text } from '@polkadot/types';
import type { TypeDef } from '@polkadot/types/types';
import type { PalletViewFunctionMetadataV16 } from '@polkadot/types/interfaces/metadata/v16';
import type { PalletConstantMeta, PalletErrorMeta, PalletEventMeta, PalletStorageMeta } from '@polkadot/types/interfaces/metadata/types';

export interface ConstantCodec extends Codec {
  readonly meta: PalletConstantMetadataLatest;
}

export interface IsError {
  readonly meta: ErrorMetadataLatest;

  is: (moduleError: DispatchErrorModule | DispatchErrorModuleU8 | DispatchErrorModuleU8a) => boolean;
}

export interface IsEvent <T extends AnyTuple, N = unknown> {
  readonly meta: EventMetadataLatest;

  is: (event: IEventLike) => event is IEvent<T, N>;
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
  readonly consts: Record<string, Record<string, PalletConstantMeta>>;
  readonly errors: Record<string, Record<string, PalletErrorMeta>>;
  readonly events: Record<string, Record<string, PalletEventMeta>>;
  readonly query: Record<string, Record<string, PalletStorageMeta>>;
  readonly registry: Registry;
  readonly tx: Record<string, Record<string, CallFunction>>;
  readonly view: DecoratedView;
}

// New types for View Functions
export interface DecoratedViewFunctionArg {
  name: string;
  typeDef: TypeDef;
  typeName?: Text; // Optional: May not always be available directly
}

export interface DecoratedViewFunction {
  args: DecoratedViewFunctionArg[];
  docs: string[];
  meta: PalletViewFunctionMetadataV16;
  method: string; // camelCase name
  name: string; // original name
  pallet: string; // camelCase pallet name
  returnTypeDef: TypeDef;
  section: string; // camelCase pallet name
}

export type DecoratedView = Record<string, Record<string, DecoratedViewFunction>>;
