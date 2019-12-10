// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    AbiArg: {
      name: 'u32'
      // TODO
    },
    AbiConstructor: {
      name: 'u32',
      selector: '[u8; 4]',
      args: 'Vec<AbiArg>',
      docs: 'Vec<Text>'
    },
    AbiContract: {
      name: 'u32',
      constructors: 'Vec<AbiConstructor>',
      messages: 'Vec<AbiMessage>',
      events: 'Vec<AbiEvent>',
      docs: 'Vec<Text>'
    },
    AbiDef: {
      registry: 'AbiRegistry',
      types: 'AbiTypes',
      storage: 'AbiStorage',
      contracts: 'AbiContract'
    },
    AbiEvent: {
      // TODO
    },
    AbiMessage: {
      name: 'u32',
      selector: '[u8; 4]',
      mutates: 'bool',
      args: 'Vec<AbiArg>',
      returnType: 'Option<AbiReturn>'
    },
    AbiRegistry: {
      strings: 'Vec<Text>'
    },
    AbiReturn: {
      // TODO
    },
    AbiStorage: {
      // TODO
    },
    AbiTypes: {
      // TODO
    }
  }
};
