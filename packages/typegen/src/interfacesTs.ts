// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import generateConstsTypes from './generate/consts';
import generateInterfaceTypes from './generate/interfaceRegistry';
import generateQueryTypes from './generate/query';
import generateRpcTypes from './generate/rpc';
import generateTsDef from './generate/tsDef';
import generateTxTypes from './generate/tx';

export default function main (): void {
  generateInterfaceTypes();

  generateConstsTypes();
  generateQueryTypes();
  generateTxTypes();
  generateRpcTypes();

  generateTsDef();
}
