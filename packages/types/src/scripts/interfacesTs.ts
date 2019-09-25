// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import generateInterfaceRegistry from './generateTypes/interfaceRegistry';
import generateQueryTypes from './generateTypes/query';
import generateRpcTypes from './generateTypes/rpc';
import generateTsDef from './generateTypes/tsDef';

function main (): void {
  generateInterfaceRegistry();
  generateQueryTypes();
  generateRpcTypes();
  generateTsDef();
}

main();
