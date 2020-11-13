// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { generateDefaultConsts, generateDefaultInterface, generateDefaultQuery, generateDefaultRpc, generateDefaultTsDef, generateDefaultTx } from './generate';

export function main (): void {
  generateDefaultInterface();

  generateDefaultConsts();
  generateDefaultQuery();
  generateDefaultTx();
  generateDefaultRpc();

  generateDefaultTsDef();
}
