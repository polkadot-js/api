// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import kusama from '@polkadot/types-support/metadata/static-kusama';
import polkadot from '@polkadot/types-support/metadata/static-polkadot';
import substrate from '@polkadot/types-support/metadata/static-substrate';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultInterface, generateDefaultLookup, generateDefaultQuery, generateDefaultRpc, generateDefaultTsDef, generateDefaultTx } from './generate';

const BASE = 'packages/api-augment/src';
const METAS = Object.entries({ kusama, polkadot, substrate }) as [string, HexString][];

export function main (): void {
  generateDefaultLookup();
  generateDefaultInterface();
  generateDefaultRpc();
  generateDefaultTsDef();

  for (const [name, staticMeta] of METAS) {
    console.log();
    console.log(`*** Generating for ${name}`);

    generateDefaultConsts(`${BASE}/${name}/consts.ts`, staticMeta);
    generateDefaultErrors(`${BASE}/${name}/errors.ts`, staticMeta);
    generateDefaultEvents(`${BASE}/${name}/events.ts`, staticMeta);
    generateDefaultQuery(`${BASE}/${name}/query.ts`, staticMeta);
    generateDefaultTx(`${BASE}/${name}/tx.ts`, staticMeta);
  }
}
