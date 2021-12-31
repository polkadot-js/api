// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as rpcInfo } from '@polkadot/rpc-core/packageInfo';
import { packageInfo as typesInfo } from '@polkadot/types/packageInfo';
import { detectPackage } from '@polkadot/util';

import __dirname from './cjs/dirname';
import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [rpcInfo, typesInfo]);
