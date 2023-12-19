// Copyright 2017-2023 @polkadot/types-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Do not edit, auto-generated by @polkadot/dev
// (packageInfo imports will be kept as-is, user-editable)

import { packageInfo as typesInfo } from '@polkadot/types/packageInfo';
import { packageInfo as codecInfo } from '@polkadot/types-codec/packageInfo';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo.js';

detectPackage(packageInfo, null, [codecInfo, typesInfo]);
