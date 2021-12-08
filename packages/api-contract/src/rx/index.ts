// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { toRxMethod } from '@polkadot/api';

import { extendBlueprint, extendCode, extendContract } from '../base';

export const Blueprint = extendBlueprint<'rxjs'>('rxjs', toRxMethod);
export const Code = extendCode<'rxjs'>('rxjs', toRxMethod);
export const Contract = extendContract<'rxjs'>('rxjs', toRxMethod);
