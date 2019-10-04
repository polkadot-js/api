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
    // Not 100% on this one this is defined as - result::Result<(), Error>
    // we would probably need a result codec type (instead of approximating it)
    DispatchResult: {
      _enum: {
        Ok: 'Null',
        Error: 'Text'
      }
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
