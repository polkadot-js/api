// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    DigestOf: 'Digest',
    DispatchError: {
      module: 'Option<u8>',
      error: 'u8'
    },
    Event: 'GenericEvent',
    EventId: '[u8; 2]',
    EventIndex: 'u32',
    EventRecord: {
      phase: 'Phase',
      event: 'Event',
      topics: 'Vec<Hash>'
    },
    EventRecord0to76: {
      phase: 'Phase',
      event: 'Event'
    },
    Key: 'Bytes',
    Phase: {
      _enum: {
        ApplyExtrinsic: 'u32',
        Finalization: 'Null'
      }
    }
  }
};
