// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultInterface, generateDefaultQuery, generateDefaultRpc, generateDefaultTsDef, generateDefaultTx } from './generate';

export function main (): void {
  generateDefaultInterface();

  generateDefaultConsts();
  generateDefaultErrors();
  generateDefaultEvents();
  generateDefaultQuery();
  generateDefaultTx();
  generateDefaultRpc();

  generateDefaultTsDef();
}
