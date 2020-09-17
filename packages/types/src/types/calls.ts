// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { FunctionMetadataLatest } from '../interfaces/metadata';
import { Call } from '../interfaces/runtime';

export interface CallBase {
  callIndex: Uint8Array;
  meta: FunctionMetadataLatest;
  method: string;
  section: string;
  toJSON: () => any;
}

export interface CallFunction extends CallBase {
  (...args: any[]): Call;
}

export type Calls = Record<string, CallFunction>;

export type ModulesWithCalls = Record<string, Calls>;
