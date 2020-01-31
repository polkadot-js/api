// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import generateConstsTypes from './generate/consts';
import generateInterfaceRegistry from './generate/interfaceRegistry';
import generateQueryTypes from './generate/query';
import generateRpcTypes from './generate/rpc';
import generateTsDef from './generate/tsDef';
import generateTxTypes from './generate/tx';

generateInterfaceRegistry();

generateConstsTypes();
generateQueryTypes();
generateTxTypes();
generateRpcTypes();

generateTsDef();
