// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionRpcExt, DefinitionRpcSub } from '../types/index.js';

import { objectSpread } from '@polkadot/util';

import * as defs from './definitions.js';

const jsonrpc: Record<string, Record<string, DefinitionRpcExt>> = {};

Object.keys(defs).forEach((s) =>
  Object.entries(defs[s as 'babe'].rpc || {}).forEach(([method, def]): void => {
    // allow for section overrides
    const section = def.aliasSection || s;

    if (!jsonrpc[section]) {
      jsonrpc[section] = {};
    }

    jsonrpc[section][method] = objectSpread({}, def, {
      isSubscription: !!(def as DefinitionRpcSub).pubsub,
      jsonrpc: `${section}_${method}`,
      method,
      section
    });
  })
);

export default jsonrpc;
