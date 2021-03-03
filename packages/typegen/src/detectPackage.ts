// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as apiInfo } from '@polkadot/api/packageInfo';
import { packageInfo as metaInfo } from '@polkadot/metadata/packageInfo';
import { packageInfo as providerInfo } from '@polkadot/rpc-provider/packageInfo';
import { packageInfo as typesInfo } from '@polkadot/types/packageInfo';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [apiInfo, metaInfo, providerInfo, typesInfo]);
