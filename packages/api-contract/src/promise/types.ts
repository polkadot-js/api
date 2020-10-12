// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BlueprintSubmittableResult as BaseBlueprintSubmittableResult, CodeSubmittableResult as BaseCodeSubmittableResult } from '../base';

export type BlueprintSubmittableResult = BaseBlueprintSubmittableResult<'promise'>;
export type CodeSubmittableResult = BaseCodeSubmittableResult<'promise'>;
