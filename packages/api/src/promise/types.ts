// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';
import { QueryableStorageFunction as QueryableStorageFunctionBase, SubmittableExtrinsicFunction as SubmittableExtrinsicFunctionBase } from '../types';

import { SubmittableExtrinsic as SubmittableExtrinsicBase } from '../SubmittableExtrinsic';

export type QueryableStorageFunction = QueryableStorageFunctionBase<'Promise'>;
export type SubmittableExtrinsic = SubmittableExtrinsicBase<'Promise'>;
export type SubmittableExtrinsicFunction = SubmittableExtrinsicFunctionBase<'Promise'>;
