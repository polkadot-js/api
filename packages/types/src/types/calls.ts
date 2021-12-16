// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, CallBase as CallBaseBase, CallFunction as CallFunctionBase, IMethod } from '@polkadot/types-codec/types';
import type { FunctionMetadataLatest } from '../interfaces/metadata';
import type { Call } from '../interfaces/runtime';
import type { Registry } from './registry';

export interface CallBase<A extends AnyTuple> extends CallBaseBase<A, FunctionMetadataLatest> {
  registry: Registry;
}

export interface CallFunction<A extends AnyTuple = AnyTuple> extends CallFunctionBase<A, FunctionMetadataLatest> {
  (...args: any[]): Call & IMethod<A, FunctionMetadataLatest>;
}
