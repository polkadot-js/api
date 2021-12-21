// Copyright 2017-2021 @polkadot/types-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as lookupInfo } from '@polkadot/types-augment-lookup/packageInfo';
import { packageInfo as registryInfo } from '@polkadot/types-augment-registry/packageInfo';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [lookupInfo, registryInfo]);
