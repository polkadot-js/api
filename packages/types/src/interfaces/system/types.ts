// Auto-generated via `yarn build:interfaces`, do not edit

import { Compact, Enum, Option, Struct, Vec } from '../../codec';
import { Bytes, Digest, Event, u32, u8 } from '../../primitive';
import { Hash } from '../runtime';

/** Digest */
export type DigestOf = Digest;

/** Vec<u8> */
export type EventId = Vec<u8>;

/** u32 */
export type EventIndex = u32;

/** Struct */
export interface EventRecord extends Struct {
  /** Phase */
  readonly phase: Phase;
  /** Event */
  readonly event: Event;
  /** Vec<Hash> */
  readonly topics: Vec<Hash>;
}

/** Struct */
export interface EventRecord0to76 extends Struct {
  /** Phase */
  readonly phase: Phase;
  /** Event */
  readonly event: Event;
}

/** Bytes */
export type Key = Bytes;

/** Enum */
export interface Phase extends Enum {
  /** 0:: ApplyExtrinsic(u32) */
  readonly isApplyExtrinsic: boolean;
  /** u32 */
  readonly asApplyExtrinsic: u32;
  /** 1:: Finalization */
  readonly isFinalization: boolean;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    DigestOf: DigestOf;
    'Option<DigestOf>': Option<DigestOf>;
    'Vec<DigestOf>': Vec<DigestOf>;
    EventId: EventId;
    'Option<EventId>': Option<EventId>;
    'Vec<EventId>': Vec<EventId>;
    EventIndex: EventIndex;
    'Compact<EventIndex>': Compact<EventIndex>;
    'Option<EventIndex>': Option<EventIndex>;
    'Vec<EventIndex>': Vec<EventIndex>;
    Key: Key;
    'Option<Key>': Option<Key>;
    'Vec<Key>': Vec<Key>;
    Phase: Phase;
    'Option<Phase>': Option<Phase>;
    'Vec<Phase>': Vec<Phase>;
    EventRecord0to76: EventRecord0to76;
    'Option<EventRecord0to76>': Option<EventRecord0to76>;
    'Vec<EventRecord0to76>': Vec<EventRecord0to76>;
    EventRecord: EventRecord;
    'Option<EventRecord>': Option<EventRecord>;
    'Vec<EventRecord>': Vec<EventRecord>;
  }
}
