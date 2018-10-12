// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RpcMethodOpt, RpcMethod } from '../types';

import isUndefined from '@polkadot/util/is/undefined';

export default function createMethod (section: string, method: string, { description, isDeprecated = false, isHidden = false, isSigned = false, params, pubsub, type }: RpcMethodOpt): RpcMethod {
  return {
    description,
    isDeprecated,
    isHidden,
    isSigned,
    isSubscription: !isUndefined(pubsub),
    method,
    params,
    pubsub: pubsub || ['', '', ''],
    section,
    type
  };
}
