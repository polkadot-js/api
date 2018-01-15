// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

export type FormatInputType = 'Address' | 'CallData' | 'H256' | 'HeaderHash' | 'String';

export type FormatOutputType = 'Header' | 'OutData' | 'StorageData';

export type InterfaceInputType = {
  name: string,
  type: FormatInputType
};

export type InterfaceOutputType = {
  type: FormatOutputType
};

export type InterfaceMethodDefinition = {
  deprecated?: boolean,
  inputs: Array<InterfaceInputType>,
  output: InterfaceOutputType
};

export type InterfaceDefinition = {
  methods: {
    [string]: InterfaceMethodDefinition
  }
};
