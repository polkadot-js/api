// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type DefinitionTypeType = string;

export type DefinitionTypeEnum = { _enum: DefinitionTypeType[] } | { _enum: Record<string, DefinitionTypeType | null> };

export type DefinitionTypeSet = { _set: Record<string, number> };

// Don't believe the `& object` here is proper, but cannot do `& Record<string, DefinitionTypeType>`
export type DefinitionTypeStruct = Record<string, DefinitionTypeType> | { _alias?: Record<string, DefinitionTypeType> } & object;

export type DefinitionType = string | DefinitionTypeEnum | DefinitionTypeSet | DefinitionTypeStruct;

export interface DefinitionRpcParam {
  isOptional?: boolean;
  name: string;
  type: DefinitionTypeType;
}

export interface DefinitionRpc {
  alias?: string[];
  description: string;
  params: DefinitionRpcParam[];
  type: DefinitionTypeType;
}

export interface DefinitionRpcExt extends DefinitionRpc {
  isSubscription: boolean;
  jsonrpc: string;
  method: string;
  pubsub?: [string, string, string];
  section: string;
}

export interface DefinitionRpcSub extends DefinitionRpc {
  pubsub: [string, string, string];
}

export interface Definitions {
  rpc: Record<string, DefinitionRpc | DefinitionRpcSub>;
  types: Record<string, DefinitionType>;
}
