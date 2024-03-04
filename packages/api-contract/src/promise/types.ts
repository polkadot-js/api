// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BlueprintSubmittableResult as BaseBlueprintSubmittableResult, CodeSubmittableResult as BaseCodeSubmittableResult } from '../base/index.js';

export type BlueprintSubmittableResult = BaseBlueprintSubmittableResult<'promise'>;
export type CodeSubmittableResult = BaseCodeSubmittableResult<'promise'>;
