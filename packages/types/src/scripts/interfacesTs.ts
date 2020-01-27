// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import generateConstsTypes from './generateTypes/consts';
import generateInterfaceRegistry from './generateTypes/interfaceRegistry';
import generateQueryTypes from './generateTypes/query';
import generateRpcTypes from './generateTypes/rpc';
import generateTsDef from './generateTypes/tsDef';

/** @internal */
function main (): void {
  generateConstsTypes();
  generateInterfaceRegistry();
  generateQueryTypes();
  generateRpcTypes();
  generateTsDef();
}

main();
