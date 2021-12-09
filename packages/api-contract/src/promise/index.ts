// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { toPromiseMethod } from '@polkadot/api';

import { extendBlueprint, extendCode, extendContract } from '../base';

export const Blueprint = extendBlueprint<'promise'>('promise', toPromiseMethod);
export const Code = extendCode<'promise'>('promise', toPromiseMethod);
export const Contract = extendContract<'promise'>('promise', toPromiseMethod);
