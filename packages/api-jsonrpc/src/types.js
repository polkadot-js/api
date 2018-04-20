// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

export type InterfaceTypes = 'author' | 'chain' | 'state';

export type FormatInputType = 'Bytes' | 'H256' | 'HeaderHash' | 'String';

export type FormatOutputType = 'BlockNumber' | 'Bytes' | 'Header' | 'HeaderHash' | 'U64';

export type InterfaceInputType = {
  isOptional?: boolean,
  name: string,
  type: FormatInputType
};

export type InterfaceOutputType = {
  type: FormatOutputType,
  withHash?: boolean
};

export type InterfaceMethodDefinition$Subscribe = {
  subscribe: string,
  unsubscribe: string
}

export type InterfaceMethodDefinition = {
  isDeprecated?: boolean,
  isSubscription?: boolean,
  inputs: Array<InterfaceInputType>,
  output: InterfaceOutputType
};

export type InterfaceDefinition$Methods = {
  [string]: InterfaceMethodDefinition
};

export type InterfaceDefinition = {
  methods: InterfaceDefinition$Methods
};

export type InterfaceDefinitions = {
  [InterfaceTypes]: InterfaceDefinition
};
