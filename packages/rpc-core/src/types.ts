// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InterfaceTypes } from '@polkadot/types/types';

import { Observable } from 'rxjs';

export * from './types.jsonrpc';

export interface RpcInterfaceMethod {
  (...params: any[]): Observable<any>;
  raw (...params: any[]): Observable<any>;
}

export interface UserRpcMethod {
  description?: string;
  name: string;
  params: { isOptional?: boolean; name: string; type: string }[];
  type: string;
}

export type UserRpc = Record<string, UserRpcMethod[]>;

type PubSub = [string, string, string];

export interface RpcParam {
  isOptional: boolean;
  name: string;
  type: keyof InterfaceTypes;
}

export interface RpcMethodOpt {
  description: string;
  isDeprecated?: boolean;
  isHidden?: boolean;
  isOptional?: boolean;
  isSigned?: boolean;
  isSubscription?: boolean;
  params: RpcParam[];
  pubsub?: PubSub;
  type: keyof InterfaceTypes;
}

export interface RpcMethod {
  alias?: string;
  description: string;
  isDeprecated: boolean;
  isHidden: boolean;
  isOptional: boolean;
  isSigned: boolean;
  isSubscription: boolean;
  method: string;
  params: RpcParam[];
  pubsub: PubSub;
  section: string;
  type: keyof InterfaceTypes;
}

export interface RpcSection {
  isDeprecated: boolean;
  isHidden: boolean;
  description: string;
  section: string;
  methods: Record<string, RpcMethod>;
}
