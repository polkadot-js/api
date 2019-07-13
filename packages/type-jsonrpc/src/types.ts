// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecTypes } from '@polkadot/types/classes';

type PubSub = [string, string, string];

export interface RpcParam {
  isOptional: boolean;
  name: string;
  type: CodecTypes;
}

export interface RpcMethodOpt {
  description: string;
  isDeprecated?: boolean;
  isHidden?: boolean;
  isSigned?: boolean;
  isSubscription?: boolean;
  params: RpcParam[];
  pubsub?: PubSub;
  type: CodecTypes;
}

export interface RpcMethod {
  alias?: string;
  description: string;
  isDeprecated: boolean;
  isHidden: boolean;
  isSigned: boolean;
  isSubscription: boolean;
  method: string;
  params: RpcParam[];
  pubsub: PubSub;
  section: string;
  type: CodecTypes;
}

export interface RpcSection {
  isDeprecated: boolean;
  isHidden: boolean;
  description: string;
  section: string;
  methods: Record<string, RpcMethod>;
}
