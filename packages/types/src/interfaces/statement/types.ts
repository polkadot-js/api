// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, u32 } from '@polkadot/types-codec';

/** @name SpStatementStoreInvalidStatement */
export interface SpStatementStoreInvalidStatement extends Enum {
  readonly isBadProof: boolean;
  readonly isNoProof: boolean;
  readonly isInternalError: boolean;
  readonly type: 'BadProof' | 'NoProof' | 'InternalError';
}

/** @name SpStatementStoreStatementSource */
export interface SpStatementStoreStatementSource extends Enum {
  readonly isChain: boolean;
  readonly isNetwork: boolean;
  readonly isLocal: boolean;
  readonly type: 'Chain' | 'Network' | 'Local';
}

/** @name SpStatementStoreValidStatement */
export interface SpStatementStoreValidStatement extends Struct {
  readonly maxCount: u32;
  readonly maxSize: u32;
}

export type PHANTOM_STATEMENT = 'statement';
