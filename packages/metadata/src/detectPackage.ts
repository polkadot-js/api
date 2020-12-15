// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage } from '@polkadot/util';

import packageInfo from './package-info.json';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname);
