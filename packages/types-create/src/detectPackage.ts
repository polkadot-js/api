// Copyright 2017-2021 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, []);
