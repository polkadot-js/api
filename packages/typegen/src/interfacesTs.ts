// Copyright 2017-2024 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import kusama from '@polkadot/types-support/metadata/static-kusama';
import polkadot from '@polkadot/types-support/metadata/static-polkadot';
import substrate from '@polkadot/types-support/metadata/static-substrate';
import collectives from '@polkadot/types-support/metadata/static-collectives';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultInterface, generateDefaultLookup, generateDefaultQuery, generateDefaultRpc, generateDefaultRuntime, generateDefaultTsDef, generateDefaultTx } from './generate/index.js';

const BASE = 'packages/api-augment/src';
const METAS = Object.entries<HexString>({ kusama, polkadot, substrate, collectives });

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
