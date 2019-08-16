// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    // V0
    EventMetadataV0: {
      name: 'Text',
      args: 'Vec<Type>',
      documentation: 'Vec<Text>'
    },
    OuterDispatchCallV0: {
      name: 'Text',
      prefix: 'Text',
      index: 'u16'
    },
    OuterDispatchMetadataV0: {
      name: 'Text',
      calls: 'Vec<OuterDispatchCallV0>'
    },

    // others
    EventMetadataV1: 'EventMetadataV0',
    EventMetadataV2: 'EventMetadataV1',
    EventMetadataV3: 'EventMetadataV2',
    EventMetadataV4: 'EventMetadataV3',
    EventMetadataV5: 'EventMetadataV4',
    EventMetadataV6: 'EventMetadataV5',
    EventMetadataV7: 'EventMetadataV6'
  }
};
