// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

// For esm, this should be import.meta.url or to get the same behavior as __dirname, we can use
//
//   new URL(import.meta.url).pathname)
//
// The issue is the WP4 has 'some' issues with import.meta.url. So because of bundlers, we can't have
// nice things... In this case it is even worse since import.meta.url won't even make it compile, so
// there is a complete dead end with usage thereof
//
// When that is fixed, a solution is to have both .js & .mjs files, with the following content -
//
// cjs: util.detectPackage(packageInfo, () => __dirname);
// esm: detectPackage(packageInfo, () => import.meta.url);
//
// With the above we additionally need a .d.ts to just export the packageInfo

import { packageInfo as deriveInfo } from '@polkadot/api-derive/packageInfo';
import { packageInfo as metaInfo } from '@polkadot/metadata/packageInfo';
import { packageInfo as coreInfo } from '@polkadot/rpc-core/packageInfo';
import { packageInfo as providerInfo } from '@polkadot/rpc-provider/packageInfo';
import { packageInfo as typesInfo } from '@polkadot/types/packageInfo';
import { packageInfo as knownInfo } from '@polkadot/types-known/packageInfo';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname);
