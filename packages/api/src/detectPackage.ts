// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage } from '@polkadot/util';

import packageJson from './package.json';

detectPackage(packageJson, typeof __dirname !== 'undefined' && __dirname);
