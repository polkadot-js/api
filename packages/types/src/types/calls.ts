// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { FunctionMetadataLatest } from '../interfaces/metadata';
import type { Call } from '../interfaces/runtime';
import type { AnyTuple } from './codec';
import type { IMethod } from './interfaces';

export interface CallBase {
  callIndex: Uint8Array;
  is: <A extends AnyTuple> (tx: IMethod<AnyTuple>) => tx is IMethod<A>;
  meta: FunctionMetadataLatest;
  method: string;
  section: string;
  toJSON: () => any;
}

export interface CallFunction extends CallBase {
  (...args: any[]): Call;
}
