// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as deriveInfo } from '@polkadot/api-derive/packageInfo';
import { packageInfo as metaInfo } from '@polkadot/metadata/packageInfo';
import { packageInfo as coreInfo } from '@polkadot/rpc-core/packageInfo';
import { packageInfo as providerInfo } from '@polkadot/rpc-provider/packageInfo';
import { packageInfo as typesInfo } from '@polkadot/types/packageInfo';
import { packageInfo as knownInfo } from '@polkadot/types-known/packageInfo';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [deriveInfo, metaInfo, coreInfo, providerInfo, typesInfo, knownInfo]);
