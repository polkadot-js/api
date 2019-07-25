// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Enum, Option, Struct, Vec } from '../../codec';
import { Method, u32 } from '../../primitive';
import { BlockNumber } from '../runtime/types';
import { VoteThreshold } from '../elections/types';

/** Enum */
export interface Conviction extends Enum {
  /** 0:: None */
  readonly isNone: boolean;
  /** 1:: Locked1x */
  readonly isLocked1X: boolean;
  /** 2:: Locked2x */
  readonly isLocked2X: boolean;
  /** 3:: Locked3x */
  readonly isLocked3X: boolean;
  /** 4:: Locked4x */
  readonly isLocked4X: boolean;
  /** 5:: Locked5x */
  readonly isLocked5X: boolean;
}

/** u32 */
export type PropIndex = u32;

/** Method */
export type Proposal = Method;

/** u32 */
export type ReferendumIndex = u32;

/** Struct */
export interface ReferendumInfo extends Struct {
  /** BlockNumber */
  readonly end: BlockNumber;
  /** Proposal */
  readonly proposal: Proposal;
  /** VoteThreshold */
  readonly threshold: VoteThreshold;
  /** BlockNumber */
  readonly delay: BlockNumber;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    Conviction: Conviction;
    'Option<Conviction>': Option<Conviction>;
    'Vec<Conviction>': Vec<Conviction>;
    PropIndex: PropIndex;
    'Compact<PropIndex>': Compact<PropIndex>;
    'Option<PropIndex>': Option<PropIndex>;
    'Vec<PropIndex>': Vec<PropIndex>;
    Proposal: Proposal;
    'Option<Proposal>': Option<Proposal>;
    'Vec<Proposal>': Vec<Proposal>;
    ReferendumIndex: ReferendumIndex;
    'Compact<ReferendumIndex>': Compact<ReferendumIndex>;
    'Option<ReferendumIndex>': Option<ReferendumIndex>;
    'Vec<ReferendumIndex>': Vec<ReferendumIndex>;
    ReferendumInfo: ReferendumInfo;
    'Option<ReferendumInfo>': Option<ReferendumInfo>;
    'Vec<ReferendumInfo>': Vec<ReferendumInfo>;
  }
}
