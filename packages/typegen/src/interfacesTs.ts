// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
