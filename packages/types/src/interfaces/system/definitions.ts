// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    DigestOf: 'Digest',
    EventId: '[u8; 2]',
    EventIndex: 'u32',
    Key: 'Bytes',
    Phase: {
      _enum: {
        ApplyExtrinsic: 'u32',
        Finalization: 'Null'
      }
    },
    Event: 'GenericEvent',
    EventRecord0to76: {
      phase: 'Phase',
      event: 'Event'
    },
    // Fallback in injectDefinitions
    EventRecord: {
      phase: 'Phase',
      event: 'Event',
      topics: 'Vec<Hash>'
    }
  }
};
