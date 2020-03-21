// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { QueryableStorageEntry as QueryableStorageEntryBase, SubmittableExtrinsicFunction as SubmittableExtrinsicFunctionBase } from '../types';

import { SubmittableExtrinsic as SubmittableExtrinsicBase } from '../submittable/types';

export type QueryableStorageEntry = QueryableStorageEntryBase<'promise'>;
export type SubmittableExtrinsic = SubmittableExtrinsicBase<'promise'>;
export type SubmittableExtrinsicFunction = SubmittableExtrinsicFunctionBase<'promise'>;
