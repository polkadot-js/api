// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from '@polkadot/types-codec';

/** @name Error */
export interface Error extends Enum {
  readonly isUnsupported: boolean;
  readonly isVersionedConversionFailed: boolean;
  readonly type: 'Unsupported' | 'VersionedConversionFailed';
}

export type PHANTOM_XCMRUNTIMEAPI = 'xcmRuntimeApi';
