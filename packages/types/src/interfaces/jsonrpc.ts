// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DefinitionRpcExt, DefinitionRpcSub } from '../types';

import * as definitions from './definitions';

const jsonrpc: Record<string, Record<string, DefinitionRpcExt>> = {};

Object
  .keys(definitions)
  .filter((key) => Object.keys(definitions[key as 'babe'].rpc || {}).length !== 0)
  .forEach((section): void => {
    jsonrpc[section] = {};

    Object
      .entries(definitions[section as 'babe'].rpc)
      .forEach(([method, def]): void => {
        const isSubscription = !!(def as DefinitionRpcSub).pubsub;

        jsonrpc[section][method] = ({ ...def, isSubscription, jsonrpc: `${section}_${method}`, method, section });
      });
  });

export default jsonrpc;
