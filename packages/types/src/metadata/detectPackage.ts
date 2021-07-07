// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as typesInfo } from '@polkadot/types/packageInfo';
import { packageInfo as knownInfo } from '@polkadot/types-known/packageInfo';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [typesInfo, knownInfo]);
