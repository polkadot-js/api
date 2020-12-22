// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type DefinitionTypeType = string;

export type DefinitionTypeEnum = { _enum: DefinitionTypeType[] } | { _enum: Record<string, DefinitionTypeType | null> };

export type DefinitionTypeSet = { _set: Record<string, number> };

export type DefinitionTypeStruct = Record<string, DefinitionTypeType> | { _alias?: Record<string, DefinitionTypeType> } & Record<string, unknown>;

export type DefinitionType = string | DefinitionTypeEnum | DefinitionTypeSet | DefinitionTypeStruct;

export interface DefinitionRpcParam {
  isCached?: boolean;
  isHistoric?: boolean;
  isOptional?: boolean;
  name: string;
  type: DefinitionTypeType;
}

export interface DefinitionRpc {
  alias?: string[];
  aliasSection?: string;
  description: string;
  endpoint?: string;
  isSigned?: boolean;
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

export type DefinitionsRpc = Record<string, DefinitionRpc | DefinitionRpcSub>;

export type DefinitionsTypes = Record<string, DefinitionType>;

export interface Definitions {
  rpc: DefinitionsRpc;
  types: DefinitionsTypes;
}
