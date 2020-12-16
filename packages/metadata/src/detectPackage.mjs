// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage } from '@polkadot/util';

import packageInfo from './package-info.json';

detectPackage(packageInfo, import.meta.url);

export { packageInfo };
