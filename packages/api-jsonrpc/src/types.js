// ISC, Copyright 2017-2018 Jaco Greeff
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
