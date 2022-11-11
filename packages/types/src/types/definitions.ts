// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

export type DefinitionTypeType = string;

export type DefinitionTypeEnum = { _fallback?: DefinitionTypeType } & ({ _enum: DefinitionTypeType[] } | { _enum: Record<string, DefinitionTypeType | null> });

export type DefinitionTypeSet = { _fallback?: DefinitionTypeType, _set: Record<string, number> };

type DefinitionTypeStructExtra = {
  _alias?: Record<string, DefinitionTypeType>;
  _fallback?: DefinitionTypeType;
} & Record<string, unknown>;

export type DefinitionTypeStruct = Record<string, DefinitionTypeType> | DefinitionTypeStructExtra;

export type DefinitionType = string | DefinitionTypeEnum | DefinitionTypeSet | DefinitionTypeStruct;

export interface DefinitionRpcParam {
  /** true if the parameter is a blockhash that is to be used in historic queries */
  isHistoric?: boolean;
  /** true if this is an optional parameter (we forgo the use of Option<T> types) */
  isOptional?: boolean;
  /** The name of the parameter */
  name: string;
  /** The type of the parameter */
  type: DefinitionTypeType;
}

export interface DefinitionRpc {
  /** Alias to a specific method (this allows replacements and renames) */
  alias?: string[];
  /** Alias to a section */
  aliasSection?: string;
  /** A string describing a deprecated interface, along with to-use information */
  deprecated?: string;
  /** The description for this RPC call */
  description: string;
  /** The (optional) endpoint override. If not specified the section_method is used */
  endpoint?: string;
  /** true if this needs a signed submission, e.g. when submitting extrinsics */
  isSigned?: boolean;
  /** Don't log any errors if they occur (should be used sparingly for exceptions only) */
  noErrorLog?: boolean;
  /** The applicable parameters for the call */
  params: DefinitionRpcParam[];
  /** The return type for the RPC call */
  type: DefinitionTypeType;
}

export interface DefinitionRpcExt extends DefinitionRpcSub {
  /** true if this is a method yielding a subscription */
  isSubscription: boolean;
  /** The jsonrpc name for this method, typically section_method */
  jsonrpc: string;
  /** The method name for this RPC */
  method: string;
  /** The section name for this RPC */
  section: string;
}

export interface DefinitionCallParam {
  /** The name for this parameter */
  name: string;
  /** The return type for this parameter */
  type: DefinitionTypeType;
}

export interface DefinitionCall {
  /** The description of this runtime call (generally extracted from the Rust code as-is) */
  description: string;
  /** The applicable call parameters */
  params: DefinitionCallParam[];
  /** The return type for this call */
  type: DefinitionTypeType;
}

export interface DefinitionRpcSub extends DefinitionRpc {
  /** Subscription information in the form [subscription name, subscribe method, unsubscribe method] */
  pubsub: [method: string, subscribe: string, unsubscribe: string];
}

export type DefinitionsRpc = Record<string, DefinitionRpc | DefinitionRpcSub>;

export interface DefinitionsCallEntry {
  /** The method that are available on this interface */
  methods: Record<string, DefinitionCall>;
  /** The version of the runtime api that this definition applies to */
  version: number;
}

export type DefinitionsCall = Record<string, DefinitionsCallEntry[]>;

export interface DefinitionCallNamed extends DefinitionCall {
  /** The method for this call (combined with section to form name) */
  method: string;
  /** The actual name of the runtime call as exposed by the runtime itself */
  name: string;
  /** The section for this call (combined with method to form name) */
  section: string;
  /** The hash of this section (these map to what is available in state_getRuntimeVersion) */
  sectionHash: HexString;
  /** The version of the runtime interface */
  version: number;
}

export type DefinitionsTypes = Record<string, DefinitionType>;

export interface Definitions {
  rpc?: DefinitionsRpc;
  runtime?: DefinitionsCall;
  types: DefinitionsTypes;
}
