// Copyright 2017-2025 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import assetHubKusama from '@polkadot/types-support/metadata/v15/asset-hub-kusama-hex';
import assetHubPolkadot from '@polkadot/types-support/metadata/v15/asset-hub-polkadot-hex';
import kusama from '@polkadot/types-support/metadata/v15/kusama-hex';
import polkadot from '@polkadot/types-support/metadata/v15/polkadot-hex';
import substrate from '@polkadot/types-support/metadata/v15/substrate-hex';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultInterface, generateDefaultLookup, generateDefaultQuery, generateDefaultRpc, generateDefaultRuntime, generateDefaultTsDef, generateDefaultTx } from './generate/index.js';

const BASE = 'packages/api-augment/src';
const METAS = Object.entries<HexString>({ kusama, polkadot, substrate, assetHubKusama, assetHubPolkadot });

export function main (): void {
  generateDefaultInterface();
  generateDefaultLookup();
  generateDefaultRpc();
  generateDefaultTsDef();

  for (const [name, staticMeta] of METAS) {
    console.log();
    console.log(`*** Generating for ${name}`);

    generateDefaultConsts(`${BASE}/${name}/consts.ts`, staticMeta);
    generateDefaultErrors(`${BASE}/${name}/errors.ts`, staticMeta);
    generateDefaultEvents(`${BASE}/${name}/events.ts`, staticMeta);
    generateDefaultQuery(`${BASE}/${name}/query.ts`, staticMeta);
    generateDefaultRuntime(`${BASE}/${name}/runtime.ts`, staticMeta);
    generateDefaultTx(`${BASE}/${name}/tx.ts`, staticMeta);
  }
}
