// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, CallBase as CallBaseBase, CallFunction as CallFunctionBase, IMethod } from '@polkadot/types-codec/types';
import type { FunctionMetadataLatest } from '../interfaces/metadata';
import type { Call } from '../interfaces/runtime';
import type { Registry } from './registry';

export interface CallBase<A extends AnyTuple, M = FunctionMetadataLatest> extends CallBaseBase<A, M> {
  registry: Registry;
}

export interface CallFunction<A extends AnyTuple = AnyTuple, M = FunctionMetadataLatest> extends CallFunctionBase<A, M> {
  (...args: any[]): Call & IMethod<A, M>;
}
