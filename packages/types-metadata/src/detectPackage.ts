// Copyright 2017-2021 @polkadot/types-metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as codecInfo } from '@polkadot/types-codec';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [codecInfo]);
