// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { toRxMethod } from '@polkadot/api';

import { extendBlueprint } from '../base';

export const Blueprint = extendBlueprint<'rxjs'>('rxjs', toRxMethod);
