// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt, RpcMethod } from '../types';

import { isUndefined } from '@polkadot/util';

/** @internal */
export default function createMethod (section: string, method: string, { description, isDeprecated = false, isHidden = false, isOptional = false, isSigned = false, params, pubsub, type }: RpcMethodOpt): RpcMethod {
  return {
    description,
    isDeprecated,
    isHidden,
    isOptional,
    isSigned,
    isSubscription: !isUndefined(pubsub),
    method,
    params,
    pubsub: pubsub || ['', '', ''],
    section,
    type
  };
}
