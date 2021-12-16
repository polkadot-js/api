// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { toRxMethod } from '@polkadot/api';

import { extendBlueprint, extendCode, extendContract } from '../base';

export const BlueprintRx = extendBlueprint<'rxjs'>('rxjs', toRxMethod);
export const CodeRx = extendCode<'rxjs'>('rxjs', toRxMethod);
export const ContractRx = extendContract<'rxjs'>('rxjs', toRxMethod);
