// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
