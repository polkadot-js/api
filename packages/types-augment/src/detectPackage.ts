// Copyright 2017-2022 @polkadot/types-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as typesInfo } from '@polkadot/types/packageInfo';
import { packageInfo as codecInfo } from '@polkadot/types-codec/packageInfo';
import { detectPackage } from '@polkadot/util';

import __dirname from './cjs/dirname';
import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [typesInfo, codecInfo]);
