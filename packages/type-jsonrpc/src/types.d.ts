// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CodecTypes } from '@polkadot/types/types';

export type RpcParam = {
  isOptional: boolean,
  name: string,
  type: CodecTypes
};

export type RpcMethodOpt = {
  description: string,
  isDeprecated?: boolean,
  isHidden?: boolean,
  isSigned?: boolean,
  isSubscription?: boolean,
  params: Array<RpcParam>,
  subscribe?: [string, string],
  type: CodecTypes
};

export type RpcMethod = {
  alias?: string,
  description: string,
  isDeprecated: boolean,
  isHidden: boolean,
  isSigned: boolean,
  isSubscription: boolean,
  method: string,
  params: Array<RpcParam>,
  section: string,
  subscribe: [string, string],
  type: CodecTypes
};

export type RpcSection = {
  isDeprecated: boolean,
  isHidden: boolean,
  description: string,
  section: string,
  methods: {
    [index: string]: RpcMethod
  }
};
