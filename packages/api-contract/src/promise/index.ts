// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { toPromiseMethod } from '@polkadot/api';

import { extendBlueprint, extendCode, extendContract } from '../base';

export const BlueprintPromise = extendBlueprint<'promise'>('promise', toPromiseMethod);
export const CodePromise = extendCode<'promise'>('promise', toPromiseMethod);
export const ContractPromise = extendContract<'promise'>('promise', toPromiseMethod);
