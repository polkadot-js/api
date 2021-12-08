// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { toPromiseMethod } from '@polkadot/api';

import { extendContract } from '../base';

export const Contract = extendContract<'promise'>('promise', toPromiseMethod);
