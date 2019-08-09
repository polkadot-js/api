// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct } from '../../codec';
import { u64 } from '../../primitive';

/** Struct */
export interface RawAuraPreDigest extends Struct {
  /** u64 */
  readonly slotNumber: u64;
}
